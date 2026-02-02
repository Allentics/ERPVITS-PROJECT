'use server';

import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

interface SendSyllabusParams {
    email: string;
    name: string;
    courseTitle: string;
    pdfUrl: string;
}

export async function sendSyllabusEmail({ email, name, courseTitle, pdfUrl }: SendSyllabusParams) {
    try {
        // 1. Instant Email Format Validation (Regex Only)
        // We removed deep-email-validator because it was causing timeouts/delays even with flags disabled.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            return { success: false, error: 'Please enter a valid email address.' };
        }

        // 2. Check for Credentials (after validation)
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('Email credentials not found in environment variables. Set EMAIL_USER and EMAIL_PASS. Skipping email send (Mock Success).');
            return { success: true };
        }

        // 3. Clean the URL path to get a relative file path (remove leading slash)
        // Decode URI component to handle spaces (%20) if the URL is encoded
        const decodedUrl = decodeURIComponent(pdfUrl);
        const cleanRelativePath = decodedUrl.startsWith('/') ? decodedUrl.slice(1) : decodedUrl;

        // 4. Construct absolute filesystem path
        // In Next.js, 'public' folder contents are strictly static. 
        // We assume the code is running in a place where 'public' is accessible relative to CWD.
        // For Vercel/Production, this might need adjustment, but for local/VPS, process.cwd() works.
        const filePath = path.join(process.cwd(), 'public', cleanRelativePath);

        // 5. Verify file exists
        if (!fs.existsSync(filePath)) {
            console.error(`PDF file not found at path: ${filePath}`);
            return { success: false, error: 'Syllabus file not found on server.' };
        }

        const mailOptions = {
            from: `"ERPVITS Training" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `${courseTitle} Course Syllabus - ERPVITS`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Hi ${name},</h2>
                    <p>Thank you for your interest in the <strong>${courseTitle}</strong> course at ERPVITS.</p>
                    <p>Please find the requested course curriculum attached to this email.</p>
                    <p>If you have any questions or would like to schedule a free demo session, simply reply to this email or call us.</p>
                    <br/>
                    <p>Best Regards,</p>
                    <p><strong>ERPVITS Team</strong></p>
                    <p><a href="https://erpvits.com">www.erpvits.com</a></p>
                </div>
            `,
            attachments: [
                {
                    filename: `${courseTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Syllabus.pdf`,
                    path: filePath
                }
            ]
        };

        // Send email in background (do not await) to reduce processing time for the user.
        transporter.sendMail(mailOptions).catch(err => {
            console.error('Background email send failed:', err);
        });

        return { success: true };

    } catch (error: any) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
}
