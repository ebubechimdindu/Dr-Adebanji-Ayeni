import type { WorkExperience, Education, AcademicPosition, Award, Skill } from "@/types/sanity";

export const placeholderSkills: Skill[] = [
  {
    _type: "skill",
    category: "Technical",
    name: "Microsoft Office"
  },
  {
    _type: "skill",
    category: "Technical",
    name: "SPSS"
  },
  {
    _type: "skill",
    category: "Technical",
    name: "Qsr Nvivo"
  },
  {
    _type: "skill",
    category: "Analysis",
    name: "Structural Equation Modelling (PLS)"
  },
  {
    _type: "skill",
    category: "Research",
    name: "Data Analysis and Synthesis"
  }
];

export const placeholderEducation: Education[] = [
  {
    _type: "education",
    degree: "Ph.D. in Business Administration",
    field: "Informal Entrepreneurship",
    institution: "Covenant University",
    startYear: 2014,
    endYear: 2020,
    dissertationTitle: "Motivation For Informal Entrepreneurs: Implications for Business Performance in Selected Electronics Markets in Southwest, Nigeria",
    principalAdvisor: "Oluwole Iyiola",
    coAdvisor: "Olaleke Ogunnaike"
  },
  {
    _type: "education",
    degree: "M.S. in Business Administration",
    institution: "Covenant University",
    field: "Business Administration",
    startYear: 2011,
    endYear: 2013,
    dissertationTitle: "Assessing the electronics market in an informal economy: a study of computer village, Ikeja, Lagos state"
  },
  {
    _type: "education",
    degree: "B.S. in Accounting",
    institution: "Covenant University",
    field: "Accounting",
    startYear: 2005,
    endYear: 2009,
    dissertationTitle: "The Role Of Accounting Standards in the Banking Industry"
  }
];

export const placeholderAcademicPositions: AcademicPosition[] = [
  {
    _type: "academicPosition",
    title: "Post Doctoral Fellow",
    institution: "North-West University",
    startDate: "2024-07-01",
    isCurrent: true,
    researchAreas: [
      "ICT pedagogy impact on academic performance",
      "Internal mobility and quality assurance",
      "Entrepreneurial abilities and business performance"
    ]
  },
  {
    _type: "academicPosition",
    title: "Lecturer I",
    institution: "Wigwe University",
    startDate: "2024-08-01",
    isCurrent: true,
    researchAreas: ["Business Administration"]
  }
];

export const placeholderAwards: Award[] = [
  {
    _type: "award",
    title: "EDS Curriculum Overhauling",
    organization: "Centre of Entrepreneurship development Studies, Landmark University",
    year: 2024
  },
  {
    _type: "award",
    title: "Recognition in Academic Mutability and Tenacity",
    organization: "Centre of Entrepreneurship development Studies, Landmark University",
    year: 2024
  },
  {
    _type: "award",
    title: "Entrepreneur of the year",
    organization: "NUASA Covenant University Chapter",
    year: 2008
  }
];

export const placeholderWorkExperience = [
  {
    _id: "nwu-1",
    title: "Post Doctoral Researcher",
    organization: "North West University",
    startDate: "2024-07",
    isCurrent: true,
    description: "My role involves doing research and evaluating postgraduate studies. With a strong enthusiasm for pursuing an academic career, I have successfully offered guidance to colleagues in navigating their professional paths and fostering company growth. I use both qualitative and quantitative primary data to make informed research selections for the specific respondents. Moreover, I am now in the process of publishing more than 5 pieces in SCOPUS, with the objective of creating a multidisciplinary impact on the worldwide arena. Simultaneously, I am doing research on how to decrease unemployment in the country by using an informal structure.",
    responsibilities: [],
    achievements: []
  },
  {
    _id: "wu-1",
    title: "Lecturer",
    organization: "Wigwe University",
    startDate: "2024-08",
    isCurrent: true,
    description: "Being a new University, It is my responsibility to provide lectures in the classes that are relevant to business. While also having a strong desire to pursue a profession in the academic field. When it comes to the research choices that are made for the targeted respondents, I work with both qualitative and quantitative primary data in order to produce and improve such judgments.",
    responsibilities: [],
    achievements: []
  },
  {
    _id: "lu-1",
    title: "Lecturer",
    organization: "Landmark University",
    startDate: "2018-02",
    endDate: "2024-05",
    isCurrent: false,
    description: "I am responsible for lecturing in the Business-related courses. While being passionate about pursuing a career in academics, I have been able to provide counsel to young minds in the path of understanding their career and creating business development. I work with both qualitative and quantitative primary data to create and enhance the respective research decisions for the targeted respondents. Furthermore, written and publish over 20 SCOPUS articles with the aim of multi-disciplinary effect on the international space.",
    responsibilities: [
      "Conducts the Professional Nigerian Institute of Management (Student Scheme)- June and November Exam Diet",
      "Publicist for 1st Landmark University International Conference on Management, Business and Entrepreneurship (LU-ICMBE)",
      "Serves as a Member of the Landmark University Consultancy Committee",
      "Review and provide tutoring for Nigerian Institute of Management (NIM) Landmark University Chapter",
      "Manage and Directional support for the affairs of the Landmark University Business Administration and Corporate Analyst (LUBACA) as the Staff Adviser",
      "Established the Linkage for the professional Chartered Institute of Personnel Management of Nigeria for the University"
    ],
    achievements: []
  },
  {
    _id: "eu-1",
    title: "Assistant Lecturer",
    organization: "Elizade University",
    startDate: "2015-03",
    endDate: "2018-02",
    isCurrent: false,
    description: "I was responsible for lecturing in the Business-related courses while under the academic directives and professional guidance of Professor Ade-Turton Dayo. I was able to understudy the dynamics of the lecturing, grading and interaction with students. The focus was on the harnesses of learning for research writeup.",
    responsibilities: [
      "Participated in the streamlining of three core programs into one (Business Administration, Hotel Management and Human resource management)",
      "Managed the 100 and 200 level students' academic related activities as the departmental level adviser",
      "Responsible for the Management of the activities with the Debate Society of the University",
      "Served as a Member of the Entrepreneurship Committee",
      "Supported data gathering and presentation during the academic accreditation exercise",
      "Write/Edit/Review/Update procedures on possible attainment of the entrepreneurial internal"
    ],
    achievements: []
  },
  {
    _id: "dk-1",
    title: "Co-Founder and CEO",
    organization: "Digikraft Solutions",
    startDate: "2007-11",
    isCurrent: true,
    description: "Working in partnership with the co-founder, I created and executed a successful brand and company to providing electronics computer servicing and repairs. Purchase and sale of computer accessories for effective use by the client. Furthermore, executed a writing and editing servicing.",
    responsibilities: [
      "Developed weekly, month and quarterly budgets",
      "Managed the daily record inputs of incurred expenses and profits earnings",
      "Responsible for managing and coordinating Customer's hardware computer components for designated usage",
      "Responsible for equipment upgrades during technology transfers to meet customer requirements and achieve business key performance indicators for overall equipment efficiency",
      "Began as a school-level market and expanded into a state-level computer electronics consultancy over the years",
      "Provided an inhouse Service over 40 private users and maintained two major companies for a period of 5 years",
      "Sold over 5,000 units of different computer accessories and computer systems"
    ],
    achievements: []
  }
];

export const placeholderAffiliations = [
  {
    _id: "nim-1",
    organization: "Nigerian Institute of Management (NIM)",
    membershipNumber: "018832"
  },
  {
    _id: "ipm-1",
    organization: "Institute of Public Management (IPM)",
    membershipNumber: "141"
  },
  {
    _id: "idrpn-1",
    organization: "Institute of Debt Recovery Practitioners of Nigeria (IDRPN)",
    membershipNumber: "G003"
  },
  {
    _id: "isds-1",
    organization: "The International Society for Development and Sustainability (ISDS)",
    membershipNumber: "M170365"
  },
  {
    _id: "tamn-1",
    organization: "The Academy of Management Nigeria (TAMN)",
    membershipNumber: "TAMN/2021/815"
  },
  {
    _id: "cipm-1",
    organization: "Chartered Institute of Personnel Management (CIPM)",
    membershipNumber: "In view"
  }
];
