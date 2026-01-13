import { abapContent } from './abapContent';
import { abapHanaContent } from './abapHanaContent';
import { c4cContent } from './c4cContent';
import { cpiContent } from './cpiContent';
import { ficoContent } from './ficoContent';
import { fieldglassContent } from './fieldglassContent';
import { mmContent } from './mmContent';
import { ppdsContent } from './ppdsContent';
import { sdContent } from './sdContent';
import { trmContent } from './trmContent';
import { aribaContent } from './aribaContent';
import { tmContent } from './tmContent';
import { ewmContent } from './ewmContent';
import { ibpContent } from './ibpContent';
import { mdgContent } from './mdgContent';
import { c4cFunctionalContent } from './c4cFunctionalContent';
import { pythonAimlContent } from './pythonAimlContent';
import { analyticsCloudContent } from './analyticsCloudContent';
import coursesData from '@/courses.json';

// Define Types
export interface Section {
    type: 'target_audience' | 'prerequisites' | 'learning_outcomes' | 'curriculum' | 'detailed_features' | 'features' | 'faq' | 'video' | 'text' | 'detailed_curriculum' | 'detailed_prerequisites' | 'detailed_target_audience' | 'detailed_learning_outcomes' | 'real_world_scenarios' | 'detailed_certification' | 'detailed_career_opportunities' | 'detailed_companies' | 'detailed_testimonials' | 'detailed_faq' | 'detailed_upcoming_batches' | 'detailed_demo_booking' | 'detailed_career_roadmap' | 'detailed_post_training_journey' | 'list_checker' | 'rich_text' | 'content_with_image' | 'whats_included' | 'testimonials' | 'course_overview' | 'table_curriculum' | 'job_roles_table';
    title?: string;
    subtitle?: string;
    items?: any[];
    badge?: string;
    modules?: any[];
    content?: string;
    courseName?: string;
    description?: string;
    stats?: { value: string, label: string }[];
}

export interface Course {
    id: string;
    title: string;
    heroHeading?: string;
    heroSubheading?: string;
    heroImage?: string;
    description?: string;
    metaTitle?: string;
    metaDescription?: string;
    features: string[];
    sections?: Section[];
    curriculum?: any[];
    faqs?: any[];
    price?: string;
    duration?: string;
    schema?: string;
    category?: string;
    badges?: string[];
    heroStats?: { icon: string, label: string }[];
    buttonLabels?: { primary: string, secondary: string };
    syllabusUrl?: string;
    heroLayout?: 'default' | 'centered';
    themeColor?: 'default' | 'purple' | 'orange' | 'blue';
}

// Map of content files based on ID
const contentMap: Record<string, any> = {
    'sap-abap': abapContent,
    'abap': abapContent,
    'sap-abap-on-cloud': abapContent,
    'abap-cloud': abapContent,
    'sap-abap-on-hana': abapHanaContent,
    'abap-hana': abapHanaContent,
    'sap-ariba': aribaContent,
    'ariba': aribaContent,
    'c4c-technical': c4cContent,
    'sap-c4c-functional': c4cFunctionalContent,
    'cpi': cpiContent,
    'fico': ficoContent,
    'sap-fieldglass': fieldglassContent,
    'fieldglass': fieldglassContent,
    'sap-ppds': ppdsContent,
    'ppds': ppdsContent,
    'sap-ppds-training': ppdsContent,
    'sap-mm': mmContent,
    'mm': mmContent,
    'sd': sdContent,
    'trm': trmContent,
    'sap-tm': tmContent,
    'tm': tmContent,
    'sap-transportation-management': tmContent,
    'sap-ewm': ewmContent,
    'ewm': ewmContent,
    'sap-extended-warehouse-management': ewmContent,
    'sap-ibp': ibpContent,
    'ibp': ibpContent,
    'sap-integrated-business-planning': ibpContent,
    'sap-mdg': mdgContent,
    'mdg': mdgContent,
    'sap-master-data-governance': mdgContent,
    'analytics-cloud': analyticsCloudContent,
    'sap-analytics-cloud': analyticsCloudContent,
    'python-aiml': pythonAimlContent,
    'sap-python-aiml': pythonAimlContent,
    'python-ai-ml': pythonAimlContent
};

// Merge Content
export const courses: Course[] = coursesData.map((c: any) => {
    const extraContent = contentMap[c.id];
    if (extraContent) {
        return {
            ...c,
            ...extraContent,
            // Preserve price and duration from courses.json if they exist
            price: c.price || extraContent.price,
            duration: c.duration || extraContent.duration,
            // Merge generic fields if they differ or exist in extraContent
            sections: extraContent.sections || c.sections,
            curriculum: extraContent.curriculum || (extraContent.sections?.find((s: any) => s.type === 'curriculum')?.modules) || c.curriculum,
            features: extraContent.features || c.features,
        };
    }
    return c;
});


export const defaultFaqs = [
    {
        q: "Do you provide placement assistance?",
        a: "Yes, we provide 100% placement assistance including resume building, mock interviews, and job referrals."
    },
    {
        q: "Is the training live or recorded?",
        a: "It is 100% live interactive training led by certified experts. You also get lifetime access to class recordings."
    },
    {
        q: "What if I miss a class?",
        a: "Don't worry! Every session is recorded and uploaded to your portal. You can watch it anytime."
    }
];

export function getDefaultDetailedFeatures(courseTitle: string) {
    return [
        `Expert-led ${courseTitle} Training`,
        "Real-time Project Implementation",
        "24/7 Server Access",
        "Placement Support",
        "Certification Guidance",
        "Mock Interviews"
    ];
}
