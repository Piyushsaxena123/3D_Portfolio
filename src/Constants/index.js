import { meta, shopify, leetcode, starbucks, tesla, autodesk, bluestock, aspirenex, glbajaj, sss, Hackfest, microsoft1, gfg, gssoc, Kotlin } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    picP,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    java,
    vscode,
    python,
    c,
    cplus,
    flask,
} from "../assets/icons";

export const skills = [
     {
        imageUrl : java,
        name: "Java",
        type: "Backend",
     },
     {
    imageUrl: c, 
    name: "C",
    type: "General Purpose",
  },
      {
    imageUrl: cplus, 
    name: "C++",
    type: "General Purpose",
  },
   {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
     {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
     ,
     {
        imageUrl : vscode,
        name: "VSCode",
        type: "Tool",
     }
     ,
     {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
 
  {
    imageUrl: flask, 
    name: "Flask",
    type: "Backend",
  }


];

export const experiences = [
    // {
    //     title: "Software Development Engineer Intern",
    //     company_name: "Autodesk",
    //     icon: autodesk,
    //     iconBg: "#E6F3FF",
    //     date: "July 2025 - Present",
    //     points: [
    //         "Working on developing and maintaining cloud-based solutions for Autodesk's flagship products",
    //         "Collaborating with cross-functional teams to implement new features and optimize existing systems",
    //         "Contributing to the development of scalable microservices architecture",
    //         "Participating in code reviews and implementing best practices for code quality and performance",
    //         "Utilizing modern technologies like React, Node.js, and cloud services to deliver robust solutions"
    //     ],
    // },

        {
        title: "SDE Intern",
        company_name: "Bluestock Fintech",
        icon: bluestock,
        iconBg: "#2563eb",
        date: "October 2025 - November 2025",
        points: [
            "Designed scalable systems with responsive front-ends and RESTful APIs, reducing integration time by 30% and improving system reliability across deployments",
            "Collaborated with back-end engineers and senior developers to enhance user experience, resulting in a 20% boost in engagement and improved satisfaction ratings"
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "AspireNex",
        icon: aspirenex,
        iconBg: "#7c3aed",
        date: "July 2025 - September 2025",
        points: [
            "Built and maintained responsive web apps using React, HTML, CSS, and JavaScript, integrating 5+ third-party APIs (maps, payments) to expand features and improve user functionality",
            "Collaborated with back-end engineers and designers to optimize user experience and performance, reducing page load time by 20% and increasing user engagement by 15%"
        ],
    }

];
export const education = [
    {
        title: "B.Tech in Information Technology(IT)",
        school: "G.L Bajaj Institute of Technology and Management",
        date: "October 2023 - Present",
        points: [
            "CGPA: 8.2",
            "Location: Greater Noida, India"
        ],
        icon: glbajaj,
        iconBg: "#E6F3FF"
    },
    {
        title: "12th Boards (C.B.S.E)",
        school: "Silver Shine School",
        date: "April 2022 - May 2023",
        points: [
           "Location: Ghaziabad, India"
        ],
        icon: sss,
        iconBg: "#E6F3FF"
    }
];
export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/piyush-saxena-eng/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Piyushsaxena123',
    },
    
    {
        name: 'Leetcode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/Piyush_231/',
    }
];

export const projects = [
    {
        iconUrl: picP,
        theme: 'btn-back-red',
        name: 'Pic Perfect',
        description: 'Pic Perfect is a productivity-focused web platform designed to streamline photographers’ post-shoot workflow. Instead of juggling multiple tools, Pic Perfect brings essential features into a single, intuitive interface.',
        link: 'https://github.com/Piyushsaxena123/PicPerfect',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
export const achievements = [
     {
        title: "Hackfest Contributor & Volunteer",
        description: "Contributed as a volunteer and participant in Hackfest, demonstrating consistent innovation and problem-solving skills.",
        image: Hackfest,
        link: "https://www.linkedin.com/posts/piyush-saxena-eng_anjuabrchandna-sansarabrsabrchauhan-adityaabrdhangar-activity-7334616117862170625-GnWJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY6kDQBSFB-bKl5MUgzLq26CRiAfNjKZIc",
    },
    {
        title: "Microsoft Azure Developer Community Visit ",
        description: "Selected among the top 30 students for an exclusive industrial visit to Microsoft, gaining insights into industry practices and interacting with recruiters.",
        image: microsoft1,
        link: "https://www.linkedin.com/posts/piyush-saxena-eng_technxt-noida-activity-7211564750659280896-jp9r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY6kDQBSFB-bKl5MUgzLq26CRiAfNjKZIc",
    },
    {
        title: "Kotlin Conf Delhi 2024",
        description: "Participated in Kotlin Conf Delhi 2024, gaining hands-on insights into emerging technologies, advanced Kotlin applications, and industry-driven best practices. The event provided valuable opportunities to network with developers, industry experts, and tech enthusiasts, fostering continuous learning and collaboration.",
        image: Kotlin,
        link: "https://www.linkedin.com/posts/piyush-saxena-eng_kotlinconference-glbitm-geeksforgeeks-activity-7210330440325296130-lc6w?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY6kDQBSFB-bKl5MUgzLq26CRiAfNjKZIc", 
    },
    
    {
        title: "Daytona x GeeksforGeeks event!",
        description: `Attended the Daytona x GeeksforGeeks event, exploring key topics such as AI in Finance, the evolution of open-source, Cloud & DevOps, and the digital revolution. Gained valuable insights into how emerging technologies are shaping industries while networking with peers and industry professionals.`,
        image: gfg,
        link: "https://www.linkedin.com/posts/piyush-saxena-eng_techevents-ai-opensource-activity-7321261350171676675-D-73?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY6kDQBSFB-bKl5MUgzLq26CRiAfNjKZIc",
    },
    {
        title: "GirlScript Summer of Code (GSSoC) – Contributor",
        description:
           "Contributed to open-source projects in both GSSoC 2024 and GSSoC 2025, collaborating with developers and mentors worldwide. Worked on impactful, beginner-friendly projects while strengthening skills in coding, version control, and real-world software development.",
        image: gssoc,
        link: "https://www.linkedin.com/posts/rishi-varshney100_teameffort-teamappreciation-dreamteam-activity-7186058765882789888-ZrHN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAECquX8B4vRUvzKzmRbFU1v90k3eb4lKdlo",
    },
];

export const certifications = [
    "Google Cloud - Generative AI",
    "Google for Developers - Fundamentals of AIML",
    "Palo Alto - Cyber security",
    "Let's Upgrade - Web Development",
    "Unstop - Asian Paints: Mosaic 2023",
    "Coding Ninjas - Introduction to DSA in C++",
    "Amazon AWS - Cloud Foundation and Architecting"
];