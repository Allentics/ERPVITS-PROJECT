import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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
