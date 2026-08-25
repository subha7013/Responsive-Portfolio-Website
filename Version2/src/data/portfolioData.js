export const personalInfo = {
  name: "Subhasish Nath",
  title: "Full Stack Developer",
  tagline: "Building intelligent web applications, AI tools, and scalable software solutions.",
  about: "I am a Computer Science Engineering student and passionate software developer focused on building end-to-end full-stack web applications, real-time facial recognition systems, computer vision models, and machine learning tools. I love solving real-world problems through clean code, modern UX design, and robust backend engineering.",
  email: "nathsubhasish466@gmail.com",
  location: "Howrah , India",
  github: "https://github.com/subha7013",
  linkedin: "https://linkedin.com/in/subhasish713",
  instagram: "https://www.instagram.com/s_ubha713",
  resumeUrl: "/certificates/resume.pdf",
  avatar: "/assets/profile.jpg",
  picture: "/assets/profile.jpg"
};

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "/assets/python.svg" },
      { name: "JavaScript (ES6+)", icon: "/assets/js.svg" },
      { name: "Java", icon: "/assets/java.svg" },
      { name: "SQL", icon: "/assets/sql.svg" },
      { name: "HTML5", icon: "/assets/html.svg" },
      { name: "CSS3", icon: "/assets/css.svg" }
    ]
  },
  {
    category: "Frontend & UI",
    skills: [
      { name: "React.js", icon: "/assets/react.svg" },
      { name: "Responsive Design", icon: "/assets/html.svg" },
      { name: "Modern CSS / Glassmorphism", icon: "/assets/css.svg" },
      { name: "JSON & REST Integration", icon: "/assets/json.svg" }
    ]
  },
  {
    category: "Backend & AI/ML",
    skills: [
      { name: "Node.js", icon: "/assets/nodejs.svg" },
      { name: "Express.js", icon: "/assets/api.svg" },
      { name: "Python (FastAPI / Flask)", icon: "/assets/django.svg" },
      { name: "OpenCV & Computer Vision", icon: "/assets/python.svg" },
      { name: "YOLOv8 & Machine Learning", icon: "/assets/python.svg" }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: "/assets/mongodb.svg" },
      { name: "MySQL", icon: "/assets/mysql.svg" },
      { name: "Git & GitHub", icon: "/assets/github.svg" },
      { name: "Postman", icon: "/assets/postman.png" },
      { name: "REST APIs", icon: "/assets/api.svg" }
    ]
  }
];

export const projectsData = [
  {
    id: "Sentinel",
    title: "SentinelCore - Security Platform",
    shortDescription: "An Enterprise Security Operations Platform",
    description: "SentinelCore is a comprehensive, full-stack cybersecurity platform designed to protect enterprises from evolving digital threats. The system provides real-time security monitoring, threat detection, incident management, and automated response workflows to ensure continuous protection of critical assets. It consolidates security operations into a unified console with advanced analytics, AI-powered threat intelligence, and seamless integration capabilities for modern security teams.",
    image: "/assets/sentinel.png",
    live: "https://sentinelcore-lyart.vercel.app/",
    github: "https://github.com/subha7013/SentinelCore---Enterprise-Security-Platform.git",
    category: "Full Stack",
    featured: true,
    tech: [
      "Java",
      "SpringBoot",
      "React.JS",
      "Lucide Icons",
      "Tailwind CSS",
      "MongoDB",
      "Python Chatbot",
      "WebSocket",
      "Gradle",
      "JWT"
    ]
  },
    {
    id: "smartattend-ai",
    title: "SmartAttend AI - Face Recognition Attendance System",
    shortDescription: "Real-time AI-powered attendance system with facial recognition, live analytics dashboard, and automated alerts.",
    description: "A real-time AI-powered attendance management system that automatically marks attendance using facial recognition technology. Built a full-stack application featuring live analytics dashboards, department-wise attendance tracking, automated report generation (PDF/Excel), low-attendance email alerts, and secure role-based authentication.",
    image: "/assets/project7.jpg",
    live: "https://smartattendi.netlify.app/",
    github: "https://github.com/subha7013/SmartAttend-AI---Realtime-Face-Regognition-Attendance-System",
    category: "AI / ML",
    featured: true,
    tech: [
      "React.JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Python (FastAPI)",
      "OpenCV",
      "face_recognition Model"
    ]
  },
  {
    id: "seed-ai-crop",
    title: "SEED AI Enabled Crop Health Predictor",
    shortDescription: "AI-driven web app detecting crop diseases, pests & weeds using YOLOv8 model with real-time weather metrics.",
    description: "A full-stack AI-driven web application that helps farmers detect crop diseases, pests, and weeds from uploaded images using the YOLOv8 AI model. The system provides detection results, confidence scores, bounding boxes, treatment recommendations, and integrates real-time weather data from OpenWeatherMap API.",
    image: "/assets/project8.png",
    live: null, // In development
    statusTag: "In Development",
    github: "https://github.com/subha7013/SEED-AI-Enabled-Crop-Health-Detector",
    category: "AI / ML",
    featured: true,
    tech: [
      "React.JS",
      "Bootstrap",
      "YOLOv8 AI",
      "MongoDB",
      "Python (FastAPI)",
      "OpenCV",
      "OpenWeatherMap API"
    ]
  },
  {
    id: "speed-mart",
    title: "Speed-Mart E-Commerce App",
    shortDescription: "Full-stack E-Commerce platform with product browsing, wishlist management, and cart ordering.",
    description: "SpeedMart is a fully functional, full-stack E-Commerce web application designed to provide users with a smooth online shopping experience. It features a modern, responsive frontend and a secure, scalable backend. Users can browse products, manage their cart, maintain a wishlist, and place orders with real-time UI updates.",
    image: "/assets/project1.png",
    live: "https://speedmart-order.netlify.app/",
    github: "https://github.com/subha7013/SpeedMart.git",
    category: "Full Stack",
    featured: true,
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express"
    ]
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone Website",
    shortDescription: "Pixel-perfect frontend replica of Netflix homepage layout with responsive media design.",
    description: "This project is a front-end replica of Netflix created using HTML and CSS. It recreates the homepage layout, hero sections, and visual design of the original platform. The site is fully responsive, ensuring a smooth viewing experience across desktop, tablet, and mobile displays.",
    image: "/assets/project2.jpg",
    live: "https://clone-app713.netlify.app/",
    github: "https://github.com/subha7013/Netflix-Clone.git",
    category: "Web App",
    featured: false,
    tech: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: "employee-salary-prediction",
    title: "Employee Salary Prediction",
    shortDescription: "Machine learning application predicting employee salary using regression models and Streamlit UI.",
    description: "A Machine Learning project that predicts employee salary using regression models and an interactive Streamlit demo. It processes salary datasets and accurately estimates target compensation based on experience, education, and domain variables.",
    image: "/assets/project3.jpg",
    live: "https://projectemployeesalaryprediction-ps9g74swdwnqjnppkjh3yx.streamlit.app/",
    github: "https://github.com/subha7013/Project_Employee_Salary_Prediction.git",
    category: "AI / ML",
    featured: false,
    tech: ["Python", "Scikit-learn", "Streamlit"]
  },
  {
    id: "weather-app",
    title: "Live Weather Forecast App",
    shortDescription: "Weather forecast tool built with Flask and OpenWeatherMap API for live global weather data.",
    description: "A dynamic Weather Application built with Python (Flask framework), HTML, CSS, and OpenWeatherMap API. It fetches and displays live weather metrics, humidity, wind velocity, and forecasts across any city globally.",
    image: "/assets/project4.png",
    live: "https://weather-app-mtsn.onrender.com/",
    github: "https://github.com/subha7013/Weather_App.git",
    category: "Web App",
    featured: false,
    tech: ["Python", "Flask", "OpenWeatherMap API", "HTML/CSS"]
  },
  {
    id: "college-predictor-tool",
    title: "College Predictor Tool",
    shortDescription: "Web application predicting engineering college admissions based on JEE/WBJEE rank & category priority.",
    description: "A web app that predicts engineering colleges and branches based on exam rank and branch preference. Supports JEE Main, JEE Advanced, and WBJEE with category-priority predictions (ST → SC → OBC → General). Built with HTML, CSS, JavaScript, and JSON-based rank datasets.",
    image: "/assets/project5.png",
    live: "https://college-pridictor-tool.netlify.app/",
    github: "https://github.com/subha7013/College-Predictor-Tool.git",
    category: "Web App",
    featured: false,
    tech: ["JavaScript", "HTML5", "CSS3", "JSON Dataset"]
  }
];

export const certificatesData = [
  {
    id: "aicte-b2-pd",
    title: "Artificial Intelligence Certification",
    issuer: "AICTE - All India Council for Technical Education",
    date: "2025",
    category: "AICTE",
    description: "Recognized certification for completion of intensive technical professional development programs conducted by AICTE.",
    fileUrl: "/certificates/AICET B2 PD Certificate-2824.pdf",
    badge: "AICTE"
  },
  {
    id: "aicte-b3-pd",
    title: "Frontend Web Development Certification",
    issuer: "AICTE - Technical Skill Program",
    date: "2025",
    category: "AICTE",
    description: "Advanced training certification focusing on software engineering principles, system analysis, and emerging technologies.",
    fileUrl: "/certificates/AICTE B3_PD_2001-3491-1011 (1).pdf",
    badge: "AICTE"
  },
  {
    id: "ms-elevate-copilot",
    title: "Microsoft Elevate - GitHub Copilot Certification",
    issuer: "Microsoft & Elevate",
    date: "2026",
    category: "Others",
    description: "Certified in leveraging GitHub Copilot and AI-assisted engineering tools to accelerate software delivery and code optimization.",
    fileUrl: "/certificates/ms-elevate_copilot.pdf",
    badge: ""
  },
  {
    id: "powerbi",
    title: "Microsoft Elevate Power Bi 4 Weeks Internship",
    issuer: "Microsoft Elevate",
    date: "March 2026",
    category: "Others",
    description: "Specialized certification in full-stack project building, modern web standards, and intelligent system integration.",
    fileUrl: "/certificates/certificate - 2026-03-26T124635.175.pdf",
    badge: ""
  }
];

export const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "MCKV Institute of Engineering",
    duration: "2023 - 2027",
    grade: "CGPA: 9.18 (till 3r year)",
    description: "Focusing on Software Engineering, Data Structures & Algorithms, Artificial Intelligence, Database Management Systems, and Web Technologies."
  },
  {
    degree: "Secondary & Higher Secondary - Science",
    institution: "Tapsia Vidyasagar Sikshayatan (H.S)",
    duration: "2014 - 2022",
    grade: "88% in Secondary, 90% in Higher Secondary"
  }
];

export const experienceData = [
  {
    role: "Java Tech Stack Intern",
    organization: "Infosys Springboard",
    duration: "June 2026 - Present",
    project: "SentinelCore - Enterprise Security Platform",
    projectId: "Sentinel",
    projectLive: "https://sentinelcore-lyart.vercel.app/",
    projectGithub: "https://github.com/subha7013/SentinelCore---Enterprise-Security-Platform.git",
    description: "Engineered SentinelCore, an enterprise cybersecurity operations platform built with Java, Spring Boot, React.js, and MongoDB. Developed secure REST APIs, JWT-based authentication, role-based access control, and real-time SOC monitoring features.",
    tech: ["Java", "SpringBoot", "React.js", "MongoDB", "JWT", "WebSocket", "Gradle"]
  },
  {
    role: "Power BI Internship",
    organization: "Microsoft Elevate",
    duration: "March 2026 - April 2026",
    description: "Skilled Power BI intern certified through the 4-week Microsoft Elevate program, with hands-on experience in data transformation, modeling, and dashboard design. Proficient in translating raw datasets into clear, impactful visual reports.",
    tech: ["Power BI", "DAX", "Data Modeling", "Data Analytics"]
  },
  {
    role: "Frontend Web Development Internship",
    organization: "Edunet",
    duration: "August 2025 - September 2025",
    project: "SpeedMart E-Commerce App",
    projectId: "speed-mart",
    projectLive: "https://speedmart-order.netlify.app/",
    description: "Built SpeedMart, a responsive E-Commerce Web application with dynamic listings, cart functionality, wishlist management, and intuitive navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "React.JS", "Node.js"]
  },
  {
    role: "Artificial Intelligence Internship",
    organization: "Edunet",
    duration: "June 2025 - July 2025",
    mode: "Remote",
    description: "Developed computer vision models using YOLO and deep learning for object detection and image classification; contributed to ML libraries and community projects.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning", "FastAPI"],
    project: "Employee Salary Prediction",
    projectId: "employee-salary-prediction",
    projectLive: "https://projectemployeesalaryprediction-ps9g74swdwnqjnppkjh3yx.streamlit.app/"
  }
];
