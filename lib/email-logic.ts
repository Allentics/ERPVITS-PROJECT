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

export async function sendSyllabusEmailLogic({ email, name, courseTitle, pdfUrl }: SendSyllabusParams) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn('Email credentials not found. Skipping email send.');
        return { success: true, mocked: true };
    }

    const decodedUrl = decodeURIComponent(pdfUrl);
    const cleanRelativePath = decodedUrl.startsWith('/') ? decodedUrl.slice(1) : decodedUrl;
    const filePath = path.join(process.cwd(), 'public', cleanRelativePath);

    if (!fs.existsSync(filePath)) {
        throw new Error('Syllabus file not found on server.');
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

    return await transporter.sendMail(mailOptions);
}
