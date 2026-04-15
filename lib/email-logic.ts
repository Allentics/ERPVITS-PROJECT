import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
// Trigger Vercel Build: Switching to info@erpvits.com SMTP config


const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false, // Use false for port 587 (STARTTLS)
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
    // On Vercel, public files are in the root during runtime
    const filePath = path.resolve(process.cwd(), 'public', cleanRelativePath);

    console.log('Attempting to send syllabus from path:', filePath);

    if (!fs.existsSync(filePath)) {
        console.error('File not found at:', filePath);
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

export async function sendContactAutoReplyLogic({ email, name, course }: { email: string, name: string, course?: string }) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

    const mailOptions = {
        from: `"ERPVITS Training" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for contacting ERPVITS`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>Hi ${name},</h2>
                <p>Thank you for reaching out to us regarding <strong>${course || 'our courses'}</strong>.</p>
                <p>Our team has received your enquiry and will get back to you within 24 hours to discuss your requirements and schedule a free demo session.</p>
                <p>In the meantime, feel free to visit our website to explore more about our training programs.</p>
                <br/>
                <p>Best Regards,</p>
                <p><strong>ERPVITS Team</strong></p>
                <p><a href="https://erpvits.com">www.erpvits.com</a></p>
            </div>
        `
    };

    return await transporter.sendMail(mailOptions);
}

export async function sendAdminNotificationLogic(data: any) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

    const mailOptions = {
        from: `"ERPVITS Lead" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Send to self (Vaishnavi)
        subject: `New Lead: ${data.name || (data.firstName + ' ' + data.lastName)} - ${data.course || 'Enquiry'}`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2>New Lead Received</h2>
                <p><strong>Name:</strong> ${data.name || (data.firstName + ' ' + data.lastName)}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Course:</strong> ${data.course}</p>
                <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
                <p><strong>Type:</strong> ${data.type || 'Contact Form'}</p>
            </div>
        `
    };

    return await transporter.sendMail(mailOptions);
}

