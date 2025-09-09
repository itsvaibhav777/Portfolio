// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import wheebox from './assets/company_logo/wheebox.png';


// Education Section Logo's
import psit from './assets/education_logo/psit.png';
import jps10 from './assets/education_logo/jps10.png';

// Project Section Logo's
import disease from './assets/work_logo/disease.png';
import email from './assets/work_logo/email.png';
import stock from './assets/work_logo/stock.png';
import npmLogo from './assets/work_logo/npm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: wheebox,
      role: "Fullstack Developer",
      company: "Wheebox ETS",
      date: "July 2025 - Present",
      desc: "I am working on building and optimizing real-world applications with a strong focus on scalability and performance. My role involves contributing to the complete software development lifecycle, from designing system architecture and developing RESTful APIs to testing and deployment. This internship is helping me strengthen my problem-solving skills while gaining hands-on experience with production-level challenges and collaborative development practices.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Git/Github",
        " Next Js",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: psit,
      school: "Pranveer Singh Institute of Technology (PSIT),Kanpur",
      date: "Dec 2022 - July 2026",
      grade: "7.1 CGPA",
      desc: "I am currently pursuing my B.Tech degree in Computer Science and Engineering, expected to be completed in July 2026. Throughout my academic journey, I have gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have also actively participated in workshops and technical events, which enhanced my practical skills and overall knowledge. My experience in B.Tech has been instrumental in shaping my technical abilities and preparing me for professional growth.",
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering - Expected July 2026",
    },
    /*{
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    }*/
    {
      id: 2,
      img: jps10,
      school: "Jagran Public School, Kannauj",
      date: "Apr 2021 - July 2022",
      grade: "73%",
      desc: "I completed my class 12 education from Jagran Public School, Kannauj, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: jps10,
      school: "Jagran Public School, Kannauj",
      date: "Apr 2019 - March 2020",
      grade: "83.5%",
      desc: "I completed my class 10 education from Jagran Public School, Kannauj, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Disease Prediction and Medical Recommended System",
      description:
        "Built a machine learning-based disease prediction system that predicts illnesses with good accuracy. The system helps reduce the time needed for diagnosis and works reliably with patient records.",
      image: disease,
      tags: ["HTML", "CSS", "Python", "Scikit Learn", "Flask"],
      
    },
    {
      id: 1,
      title: "Email & PDF Injection",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: email,
      tags: ["Prisma", "Node.js", "Next.js", "PostgreSQL", "HTML", "CSS", "API"],
    },
    {
      id: 2,
      title: "Equity Vision",
      description:
        "Developed a stock price prediction system using machine learning, deep learning, and time-series analysis to aid investor decisions.",
      image: stock,
      tags: ["Machine Learnig", "API", "AI", "Python",],
      github: "https://github.com/itsvaibhav777/Stock-Market-Prediction/tree/master",
      
    },
    {
      id: 3,
      title: "Weather Forecasting Application",
      description:
        "Weathercast Using Python and Django Weather Bug is the application of science and technology to predict the conditions of the atmosphere for a given location and time. You can get the realtime Weather forecasting by using this web application",
      image: npmLogo,
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Django", "SQLite 3"],
      github: "https://github.com/itsvaibhav777/Weather-Forecasting-Application",
      
    },
    /*{
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  