import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | ERPVITS',
    description: 'Read the ERPVITS privacy policy to understand how we collect, use, and protect your personal data.',
    alternates: {
        canonical: 'https://www.erpvits.com/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue">
                <h1>Privacy Policy</h1>
                <p>Last updated: December 2023</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to ERPVITS. We respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                </p>

                <h2>2. Data We Collect</h2>
                <p>
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                </p>
                <ul>
                    <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>

                <h2>3. How We Use Your Data</h2>
                <p>
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>

                <h2>4. Contact Us</h2>
                <p>
                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@erpvits.com">info@erpvits.com</a>.
                </p>
            </div>
        </div>
    );
}
