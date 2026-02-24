import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | ERPVITS",
    description:
        "Read the ERPVITS refund policy. We offer non-tangible, irrevocable digital goods and do not provide refunds after purchase.",
    alternates: {
        canonical: 'https://www.erpvits.com/refund-policy',
    },
};

export default function RefundPolicyPage() {
    return (
        <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
            {/* Hero Banner */}
            <div
                style={{
                    background: "#f3f4f6",
                    borderBottom: "1px solid #e5e7eb",
                    padding: "64px 16px",
                }}
            >
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <h1
                        style={{
                            color: "#111827",
                            fontSize: "2.75rem",
                            fontWeight: 800,
                            letterSpacing: "-0.5px",
                            margin: 0,
                        }}
                    >
                        Refund Policy
                    </h1>
                    <p
                        style={{
                            color: "#6b7280",
                            fontSize: "0.95rem",
                            marginTop: "10px",
                            marginBottom: 0,
                        }}
                    >
                        Last updated: April 8, 2024
                    </p>
                </div>
            </div>

            {/* Content */}
            <div
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: "48px 20px 64px",
                }}
            >
                {/* Policy Card */}
                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "14px",
                        boxShadow: "0 2px 20px rgba(249,115,22,0.10)",
                        borderTop: "4px solid #f97316",
                        marginBottom: "24px",
                        padding: "32px",
                    }}
                >
                    <h2
                        style={{
                            color: "#f97316",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            margin: "0 0 14px 0",
                        }}
                    >
                        Refund Policy
                    </h2>
                    <p
                        style={{
                            color: "#4b5563",
                            fontSize: "1rem",
                            lineHeight: "1.85",
                            margin: 0,
                        }}
                    >
                        Since the website offers{" "}
                        <strong style={{ color: "#1f2937" }}>
                            non-tangible, irrevocable goods
                        </strong>
                        , we do not provide refunds after the product is purchased. By
                        completing a purchase, you acknowledge and agree to this policy.
                    </p>
                </div>

                {/* Contact Card */}
                <div
                    style={{
                        background: "#ffffff",
                        borderRadius: "14px",
                        boxShadow: "0 2px 20px rgba(249,115,22,0.10)",
                        borderTop: "4px solid #f97316",
                        marginBottom: "36px",
                        padding: "32px",
                    }}
                >
                    <h2
                        style={{
                            color: "#f97316",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            margin: "0 0 14px 0",
                        }}
                    >
                        Contacting Us
                    </h2>
                    <p
                        style={{
                            color: "#4b5563",
                            fontSize: "1rem",
                            lineHeight: "1.85",
                            marginBottom: "20px",
                            marginTop: 0,
                        }}
                    >
                        If you have any questions regarding our refund policy, feel free
                        to contact us:
                    </p>

                    {/* Contact Info Box */}
                    <div
                        style={{
                            background: "#fff7ed",
                            border: "1px solid #fed7aa",
                            borderRadius: "10px",
                            padding: "20px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <p style={{ margin: 0, color: "#1f2937", fontWeight: 600, fontSize: "1rem" }}>
                            Erpvits.com
                        </p>
                        <p style={{ margin: 0, color: "#4b5563", fontSize: "1rem" }}>
                            Email:{" "}
                            <a
                                href="mailto:info@erpvits.com"
                                style={{
                                    color: "#f97316",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                }}
                            >
                                info@erpvits.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Footer Note */}
                <p
                    style={{
                        textAlign: "center",
                        color: "#9ca3af",
                        fontSize: "0.875rem",
                        margin: 0,
                    }}
                >
                    This document was last updated on{" "}
                    <strong style={{ color: "#f97316" }}>April 8, 2024</strong>.
                </p>
            </div>
        </div>
    );
}
