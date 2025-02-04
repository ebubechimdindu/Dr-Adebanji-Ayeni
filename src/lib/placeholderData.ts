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

export const placeholderWorkExperience: WorkExperience[] = [
  {
    _type: "workExperience",
    title: "Post Doctoral Researcher",
    organization: "North West University",
    startDate: "2024-07-01",
    isCurrent: true,
    type: "Research",
    description: "Research and evaluation of postgraduate studies with focus on qualitative and quantitative primary data analysis",
    responsibilities: [
      "Guidance to colleagues in professional development",
      "Publishing research in SCOPUS journals",
      "Research on unemployment reduction through informal structures"
    ],
    achievements: [
      "Publishing multiple SCOPUS papers",
      "Contributing to multidisciplinary research"
    ]
  }
];