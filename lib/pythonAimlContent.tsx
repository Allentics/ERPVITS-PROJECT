import React from 'react';

import { Section } from './courseData';

export const pythonAimlContent: { price: string; duration: string; syllabusUrl: string; features: string[]; sections: Section[] } = {
    price: "45,000",
    duration: "45-50 Hours",
    syllabusUrl: "/syllabus/ERPVITS Syllabus - Course Contents Pdf/python-aiml-course-content.pdf",
    features: [
        "45 Hours of Instructor-led Training",
        "Hands-on Python, AI & ML Projects",
        "Placement Assistance & Mock Interviews",
        "Real-world Case Studies (Vision, NLP)",
        "Lifetime Access to Recordings",
        "Cloud & MLOps Deployment Basics"
    ],
    sections: [
        {
            type: 'course_overview',
            items: [
                {
                    title: 'Transform Your Future: Hands-On AI & Machine Learning With Python',
                    content: `Enroll in our comprehensive 45-hours Python AIML online training which offers a complete package to equip students and early career professionals to excel the skills to build a successful career in AI/ML. Our AI & Machine Learning with Python course assures job placements and provides practical training, real life projects and workshops that will enable you to seamlessly step into the industry as a Data Scientist, AI/ML Engineer, Data Analyst, and a Python Developer.`
                },
                {
                    title: 'Why Scikit-Learn & TensorFlow Python Are Must-Learn AI/ML Tools?',
                    content: `The popularity of Python in AI and ML technologies is primarily due to its ease of use, versatility, extensive libraries, and the powerful tools such as TensorFlow, Scikit-learn Python, which simplify complicated tasks. These technologies simplify the process of creating robust AI and ML models and frameworks for practical implementations. The clear syntax of Python, with its strong community, facilitates the rapid prototyping, testing, and deployment of AI and ML models. Its versatility and ability to integrate with other technologies further enhances its relevance to AI/ML applications.`
                },
                {
                    title: 'Why Enroll In Our Python AI & ML Course?',
                    list: [
                        "**Comprehensive Training:** From the basic syntax of Python to AI deep learning and even advanced machine learning capabilities, we make sure to deepen your knowledge.",
                        "**Industry-Relevant Skills:** Learn the tools and techniques that are in high demand in industry. Learn the skills identified by today’s leading technological organizations well before the rest of the workforce.",
                        "**Hands-On Projects:** Turn theory into practice with real-world applications. Build a strong portfolio of AI/ML models and solutions that you can showcase to employers, helping you stand out in the competitive industry.",
                        "**Placement Assistance:** We guide you in every possible way during your job search by designing tailored job winning resumes, strategic networking, mock interviews, and much more.",
                        "**Expert Instructors:** Learn directly from our industry expert trainers who have 10+ years of experience in Python programming for AI & ML. Our instructors provide valuable insights and guidance to ensure you're job-ready."
                    ]
                }
            ]
        },
        {
            type: 'detailed_features',
            title: 'Why Professionals Choose ERPVITS for Artificial Intelligence & Machine Learning with Python',
            items: [
                {
                    title: "Expert-led Training",
    heroHeading: <>Transform Your Career with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] to-red-600 box-decoration-clone">#1 Expert-led Training Online Training Program</span></>,
                    description: "Learn from certified professionals with real-world industry experience in AI & ML.",
                    icon: "UserCheck"
                },
                {
                    title: "Real-time Projects",
                    description: "Work on live capstone projects and case studies to build a strong portfolio.",
                    icon: "Briefcase"
                },
                {
                    title: "24/7 Server Access",
                    description: "Practice anytime with interrupted access to our dedicated training servers and labs.",
                    icon: "Server"
                },
                {
                    title: "Placement Support",
                    description: "Dedicated assistance with resume building, mock interviews, and job referrals.",
                    icon: "Users"
                },
                {
                    title: "Flexible Schedule",
                    description: "Weekend and weekday batches available to suit working professionals and students.",
                    icon: "Calendar"
                },
                {
                    title: "Certification",
                    description: "Receive a recognized certification upon successful course completion.",
                    icon: "Award"
                }
            ]
        },
        {
            type: 'table_curriculum',
            title: 'Course Outline of Python AIML [32 Sessions | 45 Hours | 8 Modules]',
            items: [
                {
                    session: "1",
                    topic: "Python Refresher & Environment Setup",
                    hours: "3",
                    description: "Python installation, IDE setup, syntax, indentation, basic programs"
                },
                {
                    session: "2",
                    topic: "Python: Variables, Data Types, Operators",
                    hours: "2",
                    description: "Numeric, strings, lists, tuples, dictionaries, sets, operators, type conversions"
                },
                {
                    session: "3",
                    topic: "Python: Control Structures & Functions",
                    hours: "2",
                    description: "Conditional statements, loops, functions, lambda expressions"
                },
                {
                    session: "4",
                    topic: "Python: OOP Concepts & Exception Handling",
                    hours: "3",
                    description: "Classes, inheritance, polymorphism, encapsulation, exceptions, try-except-finally"
                },
                {
                    session: "5",
                    topic: "Python: File Handling, Modules, and Packages",
                    hours: "2",
                    description: "Reading/Writing files (CSV, JSON), importing packages, creating modules"
                },
                {
                    session: "6",
                    topic: "Python Libraries: NumPy & Pandas",
                    hours: "2",
                    description: "Numerical operations, data manipulation, EDA"
                },
                {
                    session: "7",
                    topic: "Python Libraries: Matplotlib & Seaborn",
                    hours: "2",
                    description: "Data visualization techniques and hands-on plotting"
                },
                {
                    session: "8",
                    topic: "Introduction to AI & ML",
                    hours: "2",
                    description: "AI vs. ML vs. DL, Types of ML (Supervised, Unsupervised, Reinforcement)"
                },
                {
                    session: "9",
                    topic: "Data Preprocessing Techniques",
                    hours: "2",
                    description: "Data cleaning, feature scaling, handling missing values"
                },
                {
                    session: "10",
                    topic: "Supervised Learning: Regression",
                    hours: "2",
                    description: "Linear regression, MSE, R², hands-on project"
                },
                {
                    session: "11",
                    topic: "Supervised Learning: Classification - Part 1",
                    hours: "2",
                    description: "Logistic regression, confusion matrix, precision, recall, hands-on"
                },
                {
                    session: "12",
                    topic: "Supervised Learning: Classification - Part 2",
                    hours: "2",
                    description: "Decision Trees, Random Forest, KNN, hands-on with case studies"
                },
                {
                    session: "13",
                    topic: "Supervised Learning: Advanced Models",
                    hours: "2",
                    description: "Support Vector Machines (SVM), hands-on with real datasets"
                },
                {
                    session: "14",
                    topic: "Unsupervised Learning Techniques",
                    hours: "2",
                    description: "K-Means clustering, hierarchical clustering, PCA, hands-on"
                },
                {
                    session: "15",
                    topic: "Model Evaluation & Hyperparameter Tuning",
                    hours: "2",
                    description: "Cross-validation, GridSearch, model selection, ROC/AUC"
                },
                {
                    session: "16",
                    topic: "Introduction to Deep Learning",
                    hours: "2",
                    description: "Neural network concepts, perceptron, multilayer networks, backpropagation"
                },
                {
                    session: "17",
                    topic: "Deep Learning: Convolutional Neural Networks (CNNs)",
                    hours: "2",
                    description: "CNN architecture, convolution, pooling, hands-on image classification"
                },
                {
                    session: "18",
                    topic: "Deep Learning: Recurrent Neural Networks (RNNs)",
                    hours: "2",
                    description: "LSTM, GRU, hands-on time-series data and text data"
                },
                {
                    session: "19",
                    topic: "Natural Language Processing (NLP)",
                    hours: "2",
                    description: "Text preprocessing, tokenization, embedding, sentiment analysis"
                },
                {
                    session: "20",
                    topic: "Advanced NLP Models & Transformers",
                    hours: "2",
                    description: "BERT basics, Transformers, text classification/summarization"
                },
                {
                    session: "21",
                    topic: "Computer Vision with OpenCV",
                    hours: "2",
                    description: "Image processing, edge detection, segmentation, object detection basics"
                },
                {
                    session: "22",
                    topic: "Introduction to Reinforcement Learning (RL)",
                    hours: "2",
                    description: "RL concepts, Markov Decision Processes (MDPs), Q-learning"
                },
                {
                    session: "23",
                    topic: "AI Model Deployment Techniques",
                    hours: "2",
                    description: "Flask/FastAPI, deploying ML models, API integration"
                },
                {
                    session: "24",
                    topic: "Cloud Deployment & MLOps Basics",
                    hours: "1",
                    description: "AWS/GCP/Azure basics, CI/CD, Model monitoring"
                },
                {
                    session: "25",
                    topic: "Ethics, Privacy & Security in AI",
                    hours: "1",
                    description: "Ethical AI, responsible ML, data privacy, GDPR"
                },
                {
                    session: "26",
                    topic: "Project & Placement Preparation (Technical Skills)",
                    hours: "2",
                    description: "Resume building, AI/ML coding challenges, mock technical interviews"
                },
                {
                    session: "27",
                    topic: "Placement Preparation (Professional & HR Skills)",
                    hours: "1",
                    description: "Behavioral interview prep, LinkedIn profile optimization, networking"
                },
                {
                    session: "28",
                    topic: "Capstone Project Initiation",
                    hours: "1",
                    description: "Project selection, data gathering, defining objectives"
                },
                {
                    session: "29",
                    topic: "Capstone Project Execution - Part 1",
                    hours: "2",
                    description: "Data exploration, model selection, initial training"
                },
                {
                    session: "30",
                    topic: "Capstone Project Execution - Part 2",
                    hours: "2",
                    description: "Hyperparameter tuning, validation, model optimization"
                },
                {
                    session: "31",
                    topic: "Capstone Project Execution - Part 3 (Deployment)",
                    hours: "2",
                    description: "Model deployment, API setup, user interface integration"
                },
                {
                    session: "32",
                    topic: "Capstone Project Presentation & Review",
                    hours: "2",
                    description: "Project presentation, feedback session"
                }
            ]
        },
        {
            type: 'list_checker',
            title: 'List of Tools & Modules Covered',
            items: [
                "Python (Core Language)",
                "NumPy, Pandas, Matplotlib, Seaborn",
                "Scikit-learn, TensorFlow/Keras",
                "OpenCV (Computer Vision)",
                "NLTK, Transformers (NLP)",
                "Flask/FastAPI (Deployment)",
                "AWS/GCP/Azure (Basics of Cloud)",
                "Git & GitHub (Version Control)"
            ]
        },
        {
            type: 'course_overview',
            items: [
                {
                    title: 'Assessment Methodology:',
                    list: [
                        "**Mid-Course Assessment (Theory + Practical):** An organised assessment of students' comprehension of artificial intelligence and machine learning with Python concepts is carried out halfway through the course. Both knowledge and practical application are tested through theoretical examinations and practical coding challenges.",
                        "**Capstone Project Evaluation (End of Course):** A thorough evaluation in which students work on an actual AIML project to show that they can create, refine, and implement models. Feedback on model performance, problem-solving methodology, and coding efficiency is given by evaluators."
                    ],
                    footer: "These methodologies make sure the mastery of concepts and readiness for hands-on machine learning & AI applications!"
                }
            ]
        },
        {
            type: 'whats_included',
            title: 'Course Benefits',
            items: [
                "Real-world Applications: Fundamentals of AI & Machine Learning with Python concepts are covered in this industry-relevant curriculum.",
                "Capstone Project Development: Develop, optimise, and implement AI/ML models as part of a structured project.",
                "Expert-Led Sessions: Gain knowledge from business experts who possess extensive knowledge of AI and ML.",
                "Cloud & Deployment Training: Practical knowledge of AWS/GCP/Azure and Flask/FastAPI for scalable AI solutions.",
                "Recorded Sessions for Revision: For self-paced learning, you can access session recordings indefinitely.",
                "Ethical AI & Responsible ML: It helps you to learn about AI security, privacy, fairness, and regulatory frameworks."
            ]
        },
        {
            type: 'job_roles_table',
            title: 'Jobs & Career In Python AIML',
            content: `Jobs in Python AIML have increased in accordance with the growth of AI. Employers are actively looking for experts with practical knowledge of deep learning AI frameworks, machine learning algorithms, and AI deployment strategies. Professional opportunities can be greatly improved by Python AIML certifications, projects, and hands-on experience.\n\nThe AI-driven economy is changing this field quickly, and professionals can stay ahead of the curve by continuing their education! Contact us today for the best python programming for ai & machine learning online course and achieve your dream career in Python.`,
            items: [
                {
                    role: "Machine Learning Engineer",
                    skills: "Python, TensorFlow, PyTorch, Scikit-learn, Model Optimization",
                    companies: "Google, Microsoft, Amazon, NVIDIA",
                    salary: "₹5L - ₹8L"
                },
                {
                    role: "Data Scientist",
                    skills: "Python, Pandas, NumPy, SQL, Data Visualization",
                    companies: "IBM, Accenture, Meta, Deloitte",
                    salary: "₹5L - ₹9L"
                },
                {
                    role: "AI Research Scientist",
                    skills: "Deep Learning, Reinforcement Learning, NLP, Computer Vision",
                    companies: "OpenAI, DeepMind, Apple, Tesla",
                    salary: "₹6L - ₹10L"
                },
                {
                    role: "Computer Vision Engineer",
                    skills: "OpenCV, TensorFlow, PyTorch, Image Processing",
                    companies: "Adobe, Qualcomm, Intel, Siemens",
                    salary: "₹5L - ₹9L"
                },
                {
                    role: "NLP Engineer",
                    skills: "NLP, Transformers, BERT, SpaCy, NLTK",
                    companies: "Salesforce, SAP, Twitter, Grammarly",
                    salary: "₹5L - ₹9L"
                },
                {
                    role: "AI Software Developer",
                    skills: "Python, Flask, FastAPI, API Development",
                    companies: "Oracle, Cisco, Infosys, TCS",
                    salary: "₹4L - ₹7L"
                },
                {
                    role: "MLOps Engineer",
                    skills: "Docker, Kubernetes, CI/CD, Cloud Computing",
                    companies: "AWS, Google Cloud, Azure, IBM",
                    salary: "₹5L - ₹9L"
                },
                {
                    role: "AI Solutions Architect",
                    skills: "AI Model Deployment, Cloud Integration, System Architecture",
                    companies: "Capgemini, Wipro, Cognizant, HCL",
                    salary: "₹6L - ₹10L"
                },
                {
                    role: "Cloud AI Engineer",
                    skills: "Cloud AI Services, Model Deployment, API Integration",
                    companies: "Amazon Web Services, Google Cloud, Microsoft Azure",
                    salary: "₹5L - ₹9L"
                }

            ]
        },
        {
            type: 'testimonials',
            title: 'Happy Students Say After Course Completion',
            items: [
                {
                    name: "Rahul Sharma",
                    role: "Infosys Data Scientist",
                    quote: "For me, this course changed everything! My confidence in AI/ML increased as a result of the practical projects and real-world applications. The teachers were very helpful and made difficult subjects simple to comprehend."
                },
                {
                    name: "Priya Desai",
                    role: "Accenture AI Engineer",
                    quote: "Before beginning, I knew nothing about Python, but now I can build AI models with confidence. The industry projects and organised learning path were crucial."
                },
                {
                    name: "Arjun Patel",
                    role: "TCS Machine Learning Engineer",
                    quote: "The modules for placement preparation were very good! I got a fantastic job in AI thanks to the career counselling, practice interviews, and resume-building sessions."
                }
            ]
        },
        {
            type: 'detailed_demo_booking',
            title: "Ready to Master AI & Machine Learning with Python?",
            subtitle: "Book your free demo today and take the first step towards a lucrative data science career",
            benefits: [
                { title: "Live Session Insight", desc: "Observe real AI & ML training and coding methodology" },
                { title: "Career Consultation", desc: "Personalized guidance based on your background" },
                { title: "Instructor Q&A", desc: "Ask questions about Python AIML course, certification, and career" },
                { title: "Special Offer", desc: "Exclusive discount for demo attendees" }
            ]
        },
        {
            type: 'detailed_faq',
            title: 'Frequently Asked Questions',
            items: [
                {
                    q: "Who is eligible to sign up for this Python AIML course?",
                    a: "Anyone with an interest in AI/ML, including students, fresh graduates, and working professionals from IT or non-IT backgrounds. Basic programming knowledge helps but is not strictly required as we cover Python from scratch."
                },
                {
                    q: "Is this course suitable for beginners?",
                    a: "Yes, absolutely! The course starts with Python basics before moving to advanced AI/ML topics."
                },
                {
                    q: "Will I obtain practical experience working on real-world projects?",
                    a: "Yes, the course includes multiple hands-on projects and a major capstone project to ensure practical mastery."
                },
                {
                    q: "Are session recordings available?",
                    a: "Yes, you get lifetime access to all recorded sessions for revision."
                },
                {
                    q: "What job options does this course provide?",
                    a: "You can apply for roles like Data Scientist, ML Engineer, AI Researcher, Data Analyst, and Python Developer."
                },
                {
                    q: "Does this course help with placement?",
                    a: "Yes, we provide dedicated placement assistance, including resume building, mock interviews, and job referrals."
                },
                {
                    q: "Which frameworks and tools are covered?",
                    a: "We cover Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Keras, OpenCV, NLTK, Flask, and basic Cloud deployment."
                },
                {
                    q: "How are tests carried out?",
                    a: "We have mid-course assessments (theory + practical) and a final capstone project evaluation."
                },
                {
                    q: "When I finish, will I get a certificate?",
                    a: "Yes, upon successful completion of the course and projects, you will receive a certification from ERPVITS."
                }
            ]
        }
    ]
};
