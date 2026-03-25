import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { blogPosts } from "./blogData"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getCourseUrl = (id: string) => {
    const map: Record<string, string> = {
        'sap-fieldglass': '/sap-fieldglass-training/',
        'fieldglass': '/sap-fieldglass-training/',
        'sap-ariba': '/sap-ariba-training/',
        'ariba': '/sap-ariba-training/',
        'sap-fico': '/sap-fico-course/',
        'fico': '/sap-fico-course/',
        'sap-mm': '/sap-s4hana-mm-training/',
        'mm': '/sap-s4hana-mm-training/',
        'sap-s4hana-mm': '/sap-s4hana-mm-training/',
        'sap-sd': '/sap-sd-training/',
        'sd': '/sap-sd-training/',
        'sap-trm': '/sap-treasury-and-risk-management-online-training/',
        'trm': '/sap-treasury-and-risk-management-online-training/',
        'sap-abap-on-cloud': '/sap-abap-on-cloud-online-training/',
        'abap-cloud': '/sap-abap-on-cloud-online-training/',
        'sap-abap-on-hana': '/sap-abap-on-hana-training/',
        'abap-hana': '/sap-abap-on-hana-training/',
        'sap-mdg': '/sap-mdg-training/',
        'mdg': '/sap-mdg-training/',
        'sap-ppds': '/sap-ppds-training/',
        'ppds': '/sap-ppds-training/',
        'sap-tm': '/sap-tm-training/',
        'tm': '/sap-tm-training/',
        'sap-ibp': '/sap-ibp-training/',
        'ibp': '/sap-ibp-training/',
        'sap-ewm': '/sap-ewm-training/',
        'ewm': '/sap-ewm-training/',
        'sap-c4c-functional': '/sap-c4c-functional-training/',
        'c4c-functional': '/sap-c4c-functional-training/',
        'sap-cpi': '/sap-cpi-training/',
        'cpi': '/sap-cpi-training/',
        'sap-c4c-technical': '/sap-c4c-technical-online-training/',
        'c4c-technical': '/sap-c4c-technical-online-training/',
        'sap-python-aiml': '/ai-and-machine-learning-with-python/',
        'python-aiml': '/ai-and-machine-learning-with-python/'
    };
    const path = map[id] || `/courses/${id}`;
    return path.endsWith('/') ? path : `${path}/`;
};

export const getWhatsAppChatLink = (pathname: string) => {
    const pathToName: Record<string, string> = {
        '/': 'ERPVITS',
        '/sap-fieldglass-training/': 'SAP Fieldglass',
        '/sap-ariba-training/': 'SAP Ariba',
        '/sap-fico-course/': 'SAP FICO',
        '/sap-s4hana-mm-training/': 'SAP S4HANA MM',
        '/sap-sd-training/': 'SAP SD',
        '/sap-treasury-and-risk-management-online-training/': 'SAP TRM',
        '/sap-abap-on-cloud-online-training/': 'SAP ABAP on Cloud',
        '/sap-abap-on-hana-training/': 'SAP ABAP on HANA',
        '/sap-mdg-training/': 'SAP MDG',
        '/sap-ppds-training/': 'SAP PPDS',
        '/sap-tm-training/': 'SAP TM',
        '/sap-ibp-training/': 'SAP IBP',
        '/sap-ewm-training/': 'SAP EWM',
        '/sap-c4c-functional-training/': 'SAP C4C Functional',
        '/sap-cpi-training/': 'SAP CPI',
        '/sap-c4c-technical-online-training/': 'SAP C4C Technical',
        '/ai-and-machine-learning-with-python/': 'AI and Machine Learning with Python',
        '/about-us/': 'ERPVITS',
        '/contact-us/': 'ERPVITS',
        '/blogs/': 'ERPVITS Blogs',
        '/courses/': 'ERPVITS Courses',
    };

    const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
    let name = pathToName[cleanPath];

    // Special handling for blog pages to use the specific blog title
    if (!name && (pathname.startsWith('/blog/') || pathname.startsWith('/blog'))) {
        const pathParts = pathname.split('/').filter(Boolean);
        const slug = pathParts[pathParts.length - 1]; // Get the last part of the path as the slug
        const post = blogPosts.find(p => p.id === slug);

        let title = 'ERPVITS Blog';
        if (post) {
            title = post.title;
        } else if (slug) {
            // Fallback: convert slug-like-this to Title Case Like This
            title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }

        const blogMessage = `Hello, I just read your blog about "${title}". I would like to know more about this. Can you please help me?`;
        const encodedBlogMessage = encodeURIComponent(blogMessage);
        return `https://api.whatsapp.com/send/?phone=918408878222&text=${encodedBlogMessage}&type=phone_number&app_absent=0`;
    } else if (!name) {
        name = 'ERPVITS';
    }

    // Determine if it's a course page to use the specific message template
    const isCoursePage = [
        '/sap-fieldglass-training/', '/sap-ariba-training/', '/sap-fico-course/',
        '/sap-s4hana-mm-training/', '/sap-sd-training/', '/sap-treasury-and-risk-management-online-training/',
        '/sap-abap-on-cloud-online-training/', '/sap-abap-on-hana-training/', '/sap-mdg-training/',
        '/sap-ppds-training/', '/sap-tm-training/', '/sap-ibp-training/',
        '/sap-ewm-training/', '/sap-c4c-functional-training/', '/sap-cpi-training/',
        '/sap-c4c-technical-online-training/', '/ai-and-machine-learning-with-python/'
    ].includes(cleanPath);

    let message = `Hello, I am interested in ${name}. I would like to know more about it.`;
    if (isCoursePage) {
        message = `Hello, I am interested in the ${name} Training. I would like to schedule a free consultation to know more about ${name}.`;
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send/?phone=918408878222&text=${encodedMessage}&type=phone_number&app_absent=0`;
};
