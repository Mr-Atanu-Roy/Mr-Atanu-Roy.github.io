/**
 * Project data for the Works section.
 * Each object represents one project card.
 *
 * Fields:
 *  - title        {string}   Project name
 *  - description  {string}   Short description paragraph
 *  - highlights   {string[]} Bullet-point highlights (up to 2)
 *  - tags         {string[]} Tech-stack tags shown at the bottom
 *  - status       {object|null}  If the project is live/in-progress, provide
 *                               { label: string, color: "green"|"amber"|... }
 *                               Set to null if no status badge is needed.
 *  - links        {object}   Button links. Provide any combination of:
 *                               liveSite:  URL string  (shows "Live Site" button)
 *                               github:    URL string  (shows GitHub icon button)
 *                               analysis:  URL string  (shows "Read Analysis" button)
 *                               Set a value to null or omit to hide that button.
 */

const GITHUB_BASE_URL = "https://github.com/Mr-Atanu-Roy/";

const projectsData = [
    {
        title: "Pneumonia Detection",
        description:
            "Conducting a comparative study of deep learning architectures including ResNet50, DenseNet121, EfficientNet-B2, and Vision Transformer (ViT-B/16) for pneumonia detection using chest X-ray images.",
        highlights: [
            " Implementing model training, evaluation, and performance benchmarking using PyTorch across multiple classification metrics including accuracy, precision, recall, F1-score, and AUROC.",
            "Exploring interpretability techniques such as Grad-CAM and attention map visualization to analyze model decision making and improve transparency in AI-assisted medical image diagnosis.",
            "Working on medical image preprocessing, experiment tracking, and comparative analysis of CNN- and transformer-based architectures for healthcare imaging applications.",
        ],
        tags: [
            "Computer Vision",
            "PyTorch",
            "Deep Learning",
            "Medical Imaging",
        ],
        status: {
            label: "Working",
            color: "emerald",
        },
        links: {
            liveSite: null,
            github: GITHUB_BASE_URL + "Pneumonia-Detection-CV",
        },
    },
    {
        title: "Sandip Banerjee Classes",
        description:
            "A all in one platform for managing academic operations of a coaching institute. Includes attendance tracking, exam management, study material distribution, performance analytics, and financial reporting.",
        highlights: [
            "Designed and deployed a data-driven platform serving, automating attendance tracking, exam management, study material distribution, performance analytics, and financial reporting.",
            "Engineered a structured relational database schema to handle complex academic and financial data, enabling real-time reporting and administrative dashboards with measurable reduction in manual overhead.",
            "Integrated online payment gateways and SMS notification workflows for students and faculty.",
        ],
        tags: ["JS", "PHP", "Tailwind CSS", "cPanel", "Payment Gateway"],
        status: {
            label: "Working",
            color: "emerald",
        },
        links: {
            liveSite: "https://sandipbanerjeeclasses.com",
            github: null,
        },
    },
    {
        title: "Movie Review Sentiment Analysis",
        description:
            "Conducted a rigorous comparative analysis of SVM kernel functions (Linear, RBF, Polynomial) for binary sentiment classification on a real-world movie review dataset.",
        highlights: [
            "Applied end-to-end NLP preprocessing pipeline including tokenization, stopword removal, and TF-IDF vectorization, achieving measurable performance comparison across all kernel variants.",
            "Documented kernel-specific trade-offs in precision, recall, and F1-score, producing reproducible, research-grade findings useful for model selection in text classification tasks.",
        ],
        tags: ["Machine Learning", "NLP", "SVM", "Scikit-learn"],
        status: null,
        links: {
            liveSite: null,
            analysis:
                "https://drive.google.com/file/d/1JftvsMSDil9cLCJARRXxftAOAzQ7Tvvl/view",
            github: GITHUB_BASE_URL + "Movie-Review-Sentiment-Analysis-in-SVM",
        },
    },
    {
        title: "Real-Time Chat Application",
        description:
            "Built a real-time bidirectional messaging application using Django Channels and WebSockets, supporting persistent chat sessions with room-based architecture.",
        highlights: [
            "Implemented WebSocket-based communication for instant message delivery",
            "Designed a scalable backend architecture with Django Channels, enabling multiple concurrent chat rooms and user sessions.",
            " Managed message state and live user presence using Redis as the channel layer backend, gaining practical experience with real time communication systems.",
        ],
        tags: ["Django", "WebSocket", "Redis", "Real-Time"],
        status: null,
        links: {
            liveSite: null,
            github: GITHUB_BASE_URL + "ChatApplication",
        },
    },
];
