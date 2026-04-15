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
    debug: true, // Show SMTP traffic
    logger: true, // Log to console
});

interface SendSyllabusParams {
    email: string;
    name: string;
    courseTitle: string;
    pdfUrl: string;
}

export async function sendSyllabusEmailLogic({ email, name, courseTitle, pdfUrl }: SendSyllabusParams) {
    try {
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

        console.log('Attempting to send syllabus to:', email, 'from path:', filePath);

        if (!fs.existsSync(filePath)) {
            console.error('File not found at:', filePath);
            throw new Error('Syllabus file not found on server.');
        }

        const mailOptions = {
            from: {
                name: "ERPVITS Training",
                address: process.env.EMAIL_USER as string
            },
            to: email,
            replyTo: process.env.EMAIL_USER,
            subject: `${courseTitle} Course Syllabus - ERPVITS`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
                    <div style="background-color: #004a99; color: #ffffff; padding: 25px; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px;">${courseTitle} Training Program</h1>
                        <p style="margin: 5px 0 0 0; opacity: 0.9;">Empowering Growth Through SAP Knowledge</p>
                    </div>
                    <div style="padding: 30px; color: #333333; line-height: 1.6;">
                        <h2 style="color: #004a99; margin-top: 0;">Dear ${name},</h2>
                        <p>We're pleased to invite you to our comprehensive <strong>${courseTitle} Training</strong> — designed for professionals aiming to master processes and sourcing with SAP.</p>
                        
                        <div style="background-color: #f8f9fa; border-left: 4px solid #004a99; padding: 15px; margin: 20px 0;">
                            <p style="margin: 0;">📎 The <strong>detailed course syllabus</strong> is attached to this email for your quick review.</p>
                        </div>

                        <p>Our program highlights include:</p>
                        <ul style="padding-left: 20px;">
                            <li>50 hours of structured training with real-world scenarios</li>
                            <li>24/7 server access for 2 months</li>
                            <li>Lifetime access to recordings and study materials</li>
                            <li>Career support: resume building and interview preparation</li>
                        </ul>

                        <div style="text-align: center; margin: 30px 0;">
                            <a href="https://erpvits.com/upcoming-demos" style="background-color: #ff9800; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">📅 Check Live Demo Schedule</a>
                        </div>

                        <p>If you have any questions, simply reply to this email or call us at <a href="tel:+918785687906" style="color: #004a99; text-decoration: none;">+91 87856 87906</a>.</p>
                        
                        <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;">
                        
                        <p style="margin-bottom: 5px;">Best Regards,</p>
                        <p style="margin-top: 0; font-weight: bold; color: #004a99;">ERPVITS Team</p>
                        <p style="font-size: 12px; color: #999999;"><a href="https://erpvits.com" style="color: #999999;">www.erpvits.com</a> | Industry-Leading SAP Online Training</p>
                    </div>
                </div>
            `,
            attachments: [
                {
                    filename: `${courseTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Syllabus.pdf`,
                    path: filePath
                }
            ]
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Syllabus email sent successfully:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending syllabus email:', error);
        throw error;
    }
}

export async function sendContactAutoReplyLogic({ email, name, course }: { email: string, name: string, course?: string }) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

    try {
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

        const info = await transporter.sendMail(mailOptions);
        console.log('Auto-reply sent successfully:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending auto-reply:', error);
    }
}

export async function sendAdminNotificationLogic(data: any) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return;

    try {
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

        const info = await transporter.sendMail(mailOptions);
        console.log('Admin notification sent successfully:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending admin notification:', error);
    }
}

