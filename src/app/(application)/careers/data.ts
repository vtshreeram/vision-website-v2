interface LocationType {
  type: string;
  content: string;
}

interface JobType {
  type: string;
  content: string;
}

interface RequirementContent {
  title: string;
  content: string[];
}

interface Requirements {
  title: string;
  contents: RequirementContent[];
}

export interface JobData {
  title: string;
  department: string;
  positions: number;
  experience: string;
  location: string;
  qualification: string;
  about_company: string;
  role_overview: string;
  location_type: LocationType;
  job_type: JobType;
  requirements: Requirements;
  experience_expertise: string[];
  have_skill?: string[]; // Optional property - not all jobs have this
  skill_attributes: string[];
  why_peacock: string[];
  seo_title: string;
  seo_des: string;
  seo_keywords: string;
}

// Type for the entire jobs array
export type JobsData = JobData[];

export const jobsData: JobsData = [
  {
    title: "Back End Developer",
    department: "Engineering (Backend Development)",
    positions: 8, // Updated from 10 to 8 as per PDF
    experience: "1-2 years in backend development",
    location: "Remote",
    qualification:
      "Bachelor's degree in Computer Science, Engineering, or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective backend solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "We are looking for a talented Backend Developer to join our dynamic team. This is a fully remote position where you will work on building scalable, secure, and high-performing backend solutions. The role requires strong technical expertise in backend technologies, databases, and APIs, along with a deep understanding of cloud computing and authentication mechanisms.",
    location_type: {
      type: "Fully Remote",
      content:
        "This role is open to candidates worldwide, allowing flexibility to work from anywhere while collaborating with an international team.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent, full-time role with the opportunity for growth and professional development.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "Project & Development Responsibilities",
          content: [
            "Design and develop backend services, ensuring high performance and scalability.",
            "Build RESTful and GraphQL APIs with a focus on efficiency and security.",
            "Work on serverless architectures using AWS Lambda, Cloudflare Workers, and Next.js API.",
            "Implement authentication systems with Better Auth or Clerk Auth.",
            "Optimize PostgreSQL databases and manage ORM integrations like Drizzle ORM.",
          ],
        },
        {
          title: "Collaboration & Agile Process",
          content: [
            "Collaborate with frontend developers, UX/UI designers, and product managers to ensure seamless integration.",
            "Participate in Agile methodologies, including sprint planning, standups, and retrospectives.",
            "Maintain clear documentation of technical processes, APIs, and data structures.",
          ],
        },
        {
          title: "Performance & Security Optimization",
          content: [
            "Monitor and optimize server response times and database queries for better efficiency.",
            "Implement best security practices to protect APIs, authentication mechanisms, and databases.",
            "Work with tools like Postman for API testing and validation.",
          ],
        },
        {
          title: "Problem Solving & System Architecture",
          content: [
            "Analyze system bottlenecks and propose optimized solutions.",
            "Use DrawSQL.app or similar tools to design scalable system architectures.",
            "Troubleshoot performance issues and ensure minimal downtime.",
          ],
        },
      ],
    },
    experience_expertise: [
      "Minimum of 1-2 years of experience in backend development.",
      "Strong proficiency in JavaScript and TypeScript.",
      "Hands-on experience with Next.js API, Hono JS, AWS Lambda, or Cloudflare Workers.",
      "Expertise in PostgreSQL, with experience in Drizzle ORM or similar database tools.",
      "Solid understanding of RESTful and GraphQL API development.",
      "Familiarity with GitHub or similar version control platforms.",
    ],
    have_skill: [
      "Experience with SQLite, Apollo GraphQL, Deno JS, Payload/Sanity CMS.",
      "Knowledge of payment gateway integrations (Stripe/Razorpay).",
      "Exposure to state management tools like Jotai and Zustand.",
      "Understanding of Cloudflare, AWS Route 53, and email providers (Zepto Mail/SendGrid).",
    ],
    skill_attributes: [
      "Strong problem-solving and debugging skills in serverless environments.",
      "Understanding of data structures and algorithms (DSA).",
      "Ability to design system architectures with a focus on performance and scalability.",
      "Excellent communication and teamwork skills.",
      "Ability to work independently while maintaining collaboration with cross-functional teams.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work with cutting-edge technologies in a fast-growing company.",
      "Opportunity for career growth and professional development.",
      "Be part of an innovative, passionate, and talented team.",
    ],
    seo_title: "Remote Back End Developer Jobs at Peacock India",
    seo_des:
      "Join Peacock India as a Back End Developer! Work remotely on scalable backend solutions with AWS Lambda & PostgreSQL. Apply now!", // 134 characters
    seo_keywords:
      "remote back end developer jobs, backend development careers, Peacock India jobs, AWS Lambda developer, PostgreSQL jobs, Next.js API roles",
  },
  {
    title: "Sales And Marketing Specialist",
    department: "Sales and Marketing",
    positions: 15,
    experience: "0-2 years in sales, marketing, or business development",
    location: "Remote",
    qualification:
      "Bachelor's degree in Marketing, Business, or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "This is a full-time remote position for a Sales And Marketing Specialist at Peacock India. The specialist will be responsible for client communication, providing exceptional customer service, driving sales, conducting training sessions, and managing sales activities on a daily basis.",
    location_type: {
      type: "Remote",
      content:
        "This role is open to candidates worldwide, allowing flexibility to work from anywhere while collaborating with an international team.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent, full-time role with the opportunity for growth and professional development.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "Sales & Client Management",
          content: [
            "Build and maintain strong client relationships to enhance customer satisfaction.",
            "Drive sales growth through effective communication and negotiation.",
            "Conduct market research to identify new business opportunities.",
            "Develop and execute sales strategies to meet company targets.",
          ],
        },
        {
          title: "Marketing & Business Development",
          content: [
            "Implement digital marketing strategies to attract and retain customers.",
            "Analyze market trends and customer needs to improve product positioning.",
            "Collaborate with internal teams to align marketing efforts with business goals.",
          ],
        },
        {
          title: "Training & Support",
          content: [
            "Conduct training sessions for clients and internal teams.",
            "Provide exceptional customer service and post-sales support.",
          ],
        },
      ],
    },
    experience_expertise: [
      "0-2 years of experience in sales, marketing, or business development.",
      "Proven track record in sales management and customer service.",
      "Experience in conducting training sessions and managing client relationships.",
      "Ability to analyze market trends and identify growth opportunities.",
    ],
    skill_attributes: [
      "Strong communication and interpersonal skills.",
      "Excellent negotiation and problem-solving abilities.",
      "Knowledge of digital marketing strategies and business development.",
      "Ability to work independently and meet sales targets.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work with a dynamic and innovative team.",
      "Opportunity for career growth and leadership roles.",
      "Be part of a company that values creativity, technology, and customer satisfaction.",
    ],
    seo_title: "Remote Sales and Marketing Specialist Jobs at Peacock India",
    seo_des:
      "Explore remote Sales & Marketing Specialist roles at Peacock India. Drive sales & grow with a dynamic team. Apply today!", // 120 characters

    seo_keywords:
      "remote sales jobs, marketing specialist careers, Peacock India sales roles, business development jobs, digital marketing opportunities",
  },
  {
    title: "MERN Stack Developer",
    department: "Engineering (Full-Stack Development)",
    positions: 5,
    experience: "0-1 year (Freshers with strong project experience can apply)",
    location: "Remote",
    qualification:
      "Bachelor's degree in Computer Science, Engineering, or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "We are seeking a MERN Stack Developer to join our team. This is a full-time, fully remote position where you will work on real-world projects, collaborate with experienced developers, and contribute to building scalable, secure, and high-performing applications.",
    location_type: {
      type: "Remote",
      content:
        "This role is open to candidates worldwide, allowing flexibility to work from anywhere while collaborating with an international team.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent position with growth opportunities and professional development.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "Development & Implementation",
          content: [
            "Develop and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
            "Collaborate with cross-functional teams to define, design, and ship new features.",
            "Write clean, efficient, and scalable code for both frontend and backend.",
            "Optimize application performance and troubleshoot/debug issues.",
          ],
        },
        {
          title: "Collaboration & Agile Process",
          content: [
            "Work closely with UX/UI designers, product managers, and backend developers to create seamless applications.",
            "Participate in Agile methodologies, including sprint planning, standups, and retrospectives.",
            "Maintain clear documentation of technical processes, APIs, and database structures.",
          ],
        },
        {
          title: "Performance & Security Optimization",
          content: [
            "Ensure applications are secure and optimized for performance.",
            "Implement best practices for database management and API integration.",
            "Utilize tools like Git, Postman, and CI/CD pipelines to improve workflow efficiency.",
          ],
        },
      ],
    },
    experience_expertise: [
      "0-1 year of experience in MERN stack development (freshers with strong projects or internships can apply).",
      "Strong proficiency in JavaScript, HTML, CSS, and related web technologies.",
      "Experience working with MongoDB, Express.js, React.js, and Node.js.",
      "Understanding of RESTful APIs and microservices architecture.",
      "Familiarity with Git/GitHub for version control.",
    ],
    have_skill: [
      "Experience with GraphQL, WebSockets, and cloud platforms (AWS, Azure, or Firebase).",
      "Knowledge of CI/CD pipelines and deployment strategies.",
      "Familiarity with Agile methodologies.",
      "Open-source contributions or personal projects showcasing technical skills.",
    ],
    skill_attributes: [
      "Strong problem-solving and debugging skills.",
      "Good understanding of data structures and algorithms (DSA).",
      "Excellent communication and collaboration skills.",
      "Ability to work independently and within a team.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work on real-world projects that impact businesses.",
      "Mentorship from experienced developers and industry experts.",
      "Career growth opportunities with promotions based on performance.",
      "Fun, innovative, and collaborative company culture.",
    ],
    seo_title: "Remote MERN Stack Developer Jobs at Peacock India",
    seo_des:
      "Become a MERN Stack Developer at Peacock India! Work remotely on MongoDB, React.js & Node.js projects. Apply now!", // 114 characters

    seo_keywords:
      "remote MERN stack developer jobs, full-stack development careers, Peacock India jobs, React.js developer, Node.js opportunities",
  },
  {
    title: "Customer Relationship Management (CRM) Manager",
    department: "Customer Relations",
    positions: 10,
    experience:
      "2-5 years in customer relationship management, sales, or client servicing",
    location: "Remote (Chennai-based preferred)",
    qualification:
      "Bachelor's degree in Business Administration, Marketing, Communications, or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "We are looking for an experienced Customer Relationship Management (CRM) Manager to drive client engagement, retention, and satisfaction. The role involves developing customer-centric strategies, analyzing client interactions, and improving customer experiences. As a fully remote position, this role requires an individual with exceptional communication skills, problem-solving abilities, and a data-driven approach to customer management.",
    location_type: {
      type: "Remote (Chennai-based preferred)",
      content:
        "This role allows flexibility to work remotely while collaborating with a global team.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent, full-time role with growth opportunities and career advancement.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "Client Relationship Management",
          content: [
            "Build and maintain long-term relationships with clients, ensuring high satisfaction and engagement.",
            "Act as the primary point of contact for client inquiries, concerns, and escalations.",
            "Develop customer engagement strategies to increase retention and loyalty.",
            "Gather client feedback to drive improvements in products and services.",
          ],
        },
        {
          title: "Customer Success & Business Growth",
          content: [
            "Identify upselling and cross-selling opportunities based on client needs.",
            "Collaborate with sales and marketing teams to align client strategies.",
            "Analyze customer data and insights to improve customer experience.",
            "Develop and implement loyalty programs to boost customer retention.",
          ],
        },
        {
          title: "Process Optimization & Reporting",
          content: [
            "Maintain accurate CRM databases and track client interactions.",
            "Monitor customer behavior trends and adjust engagement strategies accordingly.",
            "Prepare monthly reports on customer success metrics and key performance indicators (KPIs).",
            "Work with cross-functional teams to enhance customer onboarding and support processes.",
          ],
        },
      ],
    },
    experience_expertise: [
      "2-5 years of experience in customer relationship management, sales, or client servicing.",
      "Strong communication and interpersonal skills for client engagement.",
      "Experience working with CRM software (HubSpot, Salesforce, or similar).",
      "Data-driven mindset with analytical skills to track client behavior and trends.",
      "Ability to handle client escalations and provide solutions efficiently.",
    ],
    have_skill: [
      "Experience in the IT or SaaS industry.",
      "Familiarity with digital marketing strategies and customer engagement tools.",
      "Knowledge of business development and sales processes.",
    ],
    skill_attributes: [
      "Strong problem-solving and conflict-resolution abilities.",
      "Excellent negotiation and decision-making skills.",
      "Ability to manage multiple client accounts effectively.",
      "Self-motivated and proactive in ensuring customer success.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work with an innovative, customer-focused team.",
      "Career growth opportunities in customer relationship management.",
      "Be part of a company that values technology, creativity, and customer satisfaction.",
    ],
    seo_title: "Remote CRM Manager Jobs at Peacock India",
    seo_des:
      "Join Peacock India as a CRM Manager! Work remotely to boost client engagement. Chennai-based preferred—apply now!", // 114 characters

    seo_keywords:
      "remote CRM manager jobs, customer relationship management careers, Peacock India jobs, client servicing roles, Chennai CRM opportunities",
  },
  {
    title: "Sales Business Development Manager",
    department: "Sales and Business Development",
    positions: 12,
    experience:
      "1-3 years in business development, sales, or client relationship management",
    location: "Remote",
    qualification:
      "Bachelor's degree in Business Administration, Marketing, or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "This is a full-time remote position for a Sales Business Development Manager at Peacock India. The ideal candidate will be responsible for identifying and pursuing new business opportunities, developing strategic sales plans, and expanding client relationships. The role also requires market research, competitor analysis, and innovative sales strategies to drive revenue growth.",
    location_type: {
      type: "Remote",
      content:
        "This role is open to candidates worldwide, allowing flexibility to work from anywhere while collaborating with an international team.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent, full-time role with the opportunity for growth and professional development.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "Business Development & Sales Strategy",
          content: [
            "Identify new business opportunities and build strategic partnerships.",
            "Develop and implement effective sales strategies to achieve revenue targets.",
            "Conduct market research and competitor analysis to identify trends and opportunities.",
            "Drive lead generation, prospecting, and closing sales in the IT and consulting industry.",
          ],
        },
        {
          title: "Client Relationship Management",
          content: [
            "Build and maintain strong client relationships to enhance customer retention.",
            "Engage with clients to understand their business needs and provide tailored solutions.",
            "Conduct negotiations and presentations to secure business deals.",
            "Manage post-sales support and ensure customer satisfaction.",
          ],
        },
        {
          title: "Market Research & Business Insights",
          content: [
            "Analyze market trends and competitor activity to stay ahead of industry shifts.",
            "Provide insights and recommendations for continuous business growth.",
            "Identify potential business expansions and explore new revenue streams.",
          ],
        },
      ],
    },
    experience_expertise: [
      "1-3 years of experience in business development, sales, or client relationship management.",
      "Strong negotiation and persuasion skills.",
      "Experience in analyzing market trends and creating actionable business strategies.",
      "Strong knowledge of sales funnel management and lead generation techniques.",
      "Prior experience in IT services, technology, or consulting industry is a plus.",
    ],
    skill_attributes: [
      "Strong communication and interpersonal skills.",
      "Excellent presentation and storytelling abilities.",
      "Ability to work independently and meet sales targets.",
      "Proactive and results-driven approach.",
      "High attention to detail and strong analytical skills.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work with cutting-edge technologies and a dynamic team.",
      "Opportunity for career growth and leadership roles.",
      "Be part of an innovative, passionate, and talented organization.",
    ],
    seo_title:
      "Remote Sales Business Development Manager Jobs at Peacock India",
    seo_des:
      "Explore remote Sales Business Dev. Manager roles at Peacock India. Drive growth & innovate sales—apply now!", // 109 characters

    seo_keywords:
      "remote business development jobs, sales manager careers, Peacock India sales roles, client relationship management, IT sales opportunities",
  },
  {
    title: "React Native Developer",
    department: "Engineering (Mobile Development)",
    positions: 5,
    experience: "1-3 years in mobile application development",
    location: "Remote",
    qualification: "Bachelor's degree in Computer Science or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "We are looking for a skilled React Native Developer to join our team. This is a full-time remote position where you will be responsible for developing, testing, and deploying mobile applications using React Native. You will work closely with designers and other developers to create user-friendly, high-performance applications that meet business and technical requirements.",
    location_type: {
      type: "Remote",
      content:
        "This role is open to candidates worldwide, allowing flexibility to work from anywhere while collaborating with an international team.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent, full-time role with the opportunity for growth and professional development.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "Mobile Application Development",
          content: [
            "Develop, test, and deploy mobile applications using React Native.",
            "Optimize app performance for smooth and responsive user experiences.",
            "Implement best practices in coding, UI development, and app security.",
          ],
        },
        {
          title: "Collaboration & Agile Process",
          content: [
            "Work closely with UX/UI designers to create intuitive and visually appealing applications.",
            "Collaborate with backend developers to integrate APIs and other services.",
            "Participate in Agile development cycles, including sprint planning, code reviews, and stand-ups.",
          ],
        },
        {
          title: "Performance & Debugging",
          content: [
            "Identify and fix performance bottlenecks, bugs, and crashes.",
            "Conduct unit testing and debugging to ensure app stability.",
            "Use tools like Redux.js for state management and efficient application performance.",
          ],
        },
      ],
    },
    experience_expertise: [
      "1-3 years of experience in mobile application development using React Native.",
      "Strong proficiency in JavaScript and front-end development.",
      "Experience in backend development and working with APIs.",
      "Expertise in Redux.js for state management.",
      "Excellent debugging and troubleshooting skills.",
    ],
    have_skill: [
      "Experience with UI/UX design principles and best practices.",
      "Familiarity with Agile development methodologies.",
      "Knowledge of other mobile development frameworks such as Flutter or Swift/Kotlin.",
    ],
    skill_attributes: [
      "Strong problem-solving and decision-making abilities.",
      "Ability to work independently while maintaining team collaboration.",
      "Excellent communication and documentation skills.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work with cutting-edge technologies in mobile development.",
      "Opportunity for career growth and leadership roles.",
      "Be part of a company that values innovation, teamwork, and excellence.",
    ],
    seo_title: "Remote React Native Developer Jobs at Peacock India",
    seo_des:
      "Join Peacock India as a React Native Developer! Work remotely on mobile apps with Redux.js & APIs. Apply today!", // 113 characters

    seo_keywords:
      "remote React Native developer jobs, mobile development careers, Peacock India jobs, Redux.js developer, mobile app development roles",
  },
  {
    title: "UX UI Designer",
    department: "Design and User Experience",
    positions: 10,
    experience: "1-2 years in UX/UI design",
    location: "Remote (Tamil Nadu Preferred)",
    qualification:
      "Bachelor's degree in Design, Computer Science, or a related field",
    about_company:
      "Peacock India is a forward-thinking IT services, UX/UI design, and consulting company that focuses on innovation, scalability, and efficiency. We specialize in developing high-performance technology solutions while also delivering exceptional UX/UI design services to enhance user experiences. Our mission is to empower businesses by providing robust, cost-effective solutions along with intuitive and user-friendly interfaces.",
    role_overview:
      "This is a full-time remote position for a UX/UI Designer at Peacock India. The UX/UI Designer will be responsible for creating user-centric designs, conducting user research, developing wireframes and prototypes, and collaborating with the development team to ensure a seamless user experience and interface design.",
    location_type: {
      type: "Remote (Candidates from Tamil Nadu Preferred)",
      content:
        "This role is fully remote, but we prefer candidates from Tamil Nadu who can align better with our team's collaboration needs.",
    },
    job_type: {
      type: "Full-time",
      content:
        "This is a permanent, full-time role with opportunities for growth and professional development.",
    },
    requirements: {
      title: "Key Responsibilities",
      contents: [
        {
          title: "User-Centered Design & Research",
          content: [
            "Conduct user research to understand customer needs and pain points.",
            "Translate research insights into intuitive, user-friendly designs.",
            "Develop personas, journey maps, and usability studies to refine user experience.",
          ],
        },
        {
          title: "Wireframing, Prototyping & UI Design",
          content: [
            "Create wireframes, prototypes, and high-fidelity UI designs for web and mobile applications.",
            "Ensure consistency in design systems, typography, color theory, and layouts.",
            "Implement responsive design principles for seamless cross-device experiences.",
          ],
        },
        {
          title: "Collaboration & Development Handoff",
          content: [
            "Work closely with developers, product managers, and stakeholders to align designs with project goals.",
            "Use Figma and other design tools to create, test, and refine UI components.",
            "Provide detailed design specifications and prototypes for the development team.",
          ],
        },
        {
          title: "Usability Testing & Optimization",
          content: [
            "Conduct A/B testing, usability testing, and iterative design improvements.",
            "Gather and analyze user feedback to improve product usability.",
            "Stay updated on the latest UX/UI trends, tools, and best practices.",
          ],
        },
      ],
    },
    experience_expertise: [
      "Minimum of 1-2 years of experience in UX/UI design.",
      "Expertise in User Experience Design, User Interface Design, and Prototyping.",
      "Strong knowledge of responsive design principles.",
      "Experience in wireframing, prototyping, and user research.",
      "Proficiency in Figma and other design tools.",
    ],
    skill_attributes: [
      "Strong problem-solving and design thinking skills.",
      "Excellent communication and collaboration abilities.",
      "Ability to work independently and remotely.",
      "A strong portfolio showcasing UX/UI projects for web and mobile applications.",
    ],
    why_peacock: [
      "Fully remote role with flexible working hours.",
      "Work with a dynamic and innovative team.",
      "Opportunity for career growth and leadership roles.",
      "Be part of a company that values creativity, design, and user experience.",
    ],
    seo_title: "Remote UX/UI Designer Jobs at Peacock India",
    seo_des:
      "Become a UX/UI Designer at Peacock India! Work remotely on user-centric designs with Figma. Apply now!", // 103 characters

    seo_keywords:
      "remote UX UI designer jobs, UX design careers, Peacock India design roles, Figma designer, Tamil Nadu UX opportunities",
  },
];
