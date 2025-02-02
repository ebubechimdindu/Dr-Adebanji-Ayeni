import { client } from '@/lib/sanity.client';

const migrationData = {
  workExperience: [
    {
      _type: 'workExperience',
      title: "Post Doctoral Researcher",
      organization: "North West University",
      startDate: "2024-07-01",
      isCurrent: true,
      description: "Research and evaluation of postgraduate studies with focus on entrepreneurship and business administration",
      responsibilities: [
        "Research guidance to colleagues",
        "Qualitative and quantitative data analysis",
        "Publishing SCOPUS papers",
        "Research on unemployment reduction"
      ],
      achievements: [
        "Publishing multiple SCOPUS papers",
        "Multidisciplinary research impact"
      ]
    },
    {
      _type: 'workExperience',
      title: "Lecturer I",
      organization: "Wigwe University",
      startDate: "2024-08-01",
      isCurrent: true,
      description: "Teaching and research in business administration and entrepreneurship",
      responsibilities: [
        "Undergraduate course instruction",
        "Curriculum development",
        "Student mentoring",
        "Research publication"
      ],
      achievements: [
        "Developed innovative teaching methodologies",
        "High student satisfaction ratings"
      ]
    },
    {
      _type: 'workExperience',
      title: "Lecturer II",
      organization: "Landmark University",
      startDate: "2020-01-01",
      endDate: "2024-06-30",
      isCurrent: false,
      description: "Academic instruction and research in business administration",
      responsibilities: [
        "Course development and instruction",
        "Research supervision",
        "Administrative duties",
        "Publication of research papers"
      ],
      achievements: [
        "Successfully mentored multiple graduate students",
        "Published several research papers",
        "Improved course curriculum"
      ]
    }
  ],

  academicPositions: [
    {
      _type: 'academicPosition',
      title: "Post Doctoral Fellow",
      institution: "North-West University",
      startDate: "2024-07-01",
      isCurrent: true,
      researchAreas: [
        "Smart boards impact on student Academic performance",
        "Internal mobility and quality Assurance",
        "Entrepreneurial abilities and business performance"
      ]
    },
    {
      _type: 'academicPosition',
      title: "Lecturer I",
      institution: "Wigwe University",
      startDate: "2024-08-01",
      isCurrent: true,
      researchAreas: [
        "Business Administration",
        "Entrepreneurship",
        "Academic Performance"
      ]
    },
    {
      _type: 'academicPosition',
      title: "Lecturer II",
      institution: "Landmark University",
      startDate: "2020-01-01",
      endDate: "2024-06-30",
      isCurrent: false,
      researchAreas: [
        "Employee Welfare Impact",
        "Economic Effect on Innovation Strategies",
        "Video Games Effect on Academic Performance"
      ]
    }
  ],

  education: [
    {
      _type: 'education',
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
      _type: 'education',
      degree: "M.S. in Business Administration",
      institution: "Covenant University",
      startYear: 2011,
      endYear: 2013,
      dissertationTitle: "Assessing the electronics market in an informal economy: a study of computer village, Ikeja, Lagos state"
    },
    {
      _type: 'education',
      degree: "B.S. in Accounting",
      institution: "Covenant University",
      startYear: 2005,
      endYear: 2009,
      dissertationTitle: "The Role Of Accounting Standards in the Banking Industry"
    }
  ],

  skills: [
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Microsoft Office"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "SPSS"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Qsr Nvivo"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Video Scribe"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Camtasia"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "EdrawMax"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Zotero"
    },
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Mendeley"
    },
    {
      _type: 'skill',
      category: "Research Methods",
      name: "Structural Equation Modelling (SEM) in PLS"
    },
    {
      _type: 'skill',
      category: "Analysis",
      name: "Data Analysis and Synthesis"
    },
    {
      _type: 'skill',
      category: "Analysis",
      name: "Inferential and Descriptive Statistics"
    }
  ],

  posts: [
    {
      _type: 'post',
      title: "The Impact of Organizational Culture on Employee Performance",
      slug: {
        _type: 'slug',
        current: 'impact-organizational-culture-employee-performance'
      },
      publishedAt: "2024-01-15",
      description: "A comprehensive study on how organizational culture affects employee performance in Nigerian universities"
    },
    {
      _type: 'post',
      title: "Digital Transformation in Higher Education",
      slug: {
        _type: 'slug',
        current: 'digital-transformation-higher-education'
      },
      publishedAt: "2024-02-01",
      description: "Analysis of digital transformation strategies in higher education institutions"
    },
    {
      _type: 'post',
      title: "Entrepreneurship Education: A Path to Economic Growth",
      slug: {
        _type: 'slug',
        current: 'entrepreneurship-education-economic-growth'
      },
      publishedAt: "2024-02-15",
      description: "Exploring the role of entrepreneurship education in fostering economic development"
    }
  ],

  awards: [
    {
      _type: 'award',
      title: "EDS Curriculum Overhauling",
      organization: "Centre of Entrepreneurship development Studies, Landmark University",
      year: 2024,
      description: "Recognition for outstanding contribution to curriculum development"
    },
    {
      _type: 'award',
      title: "Best Research Paper",
      organization: "International Conference on Business Administration",
      year: 2023,
      description: "Award for outstanding research contribution in business administration"
    },
    {
      _type: 'award',
      title: "Teaching Excellence Award",
      organization: "Landmark University",
      year: 2022,
      description: "Recognition for exceptional teaching performance and student mentorship"
    }
  ],

  portfolio: [
    {
      _type: 'portfolio',
      title: "Impact of Technology on Academic Performance",
      description: "Research project investigating the relationship between technology adoption and student performance",
      projectUrl: "https://example.com/tech-impact-study"
    },
    {
      _type: 'portfolio',
      title: "Entrepreneurship Development Program",
      description: "Design and implementation of entrepreneurship training modules",
      projectUrl: "https://example.com/entrepreneurship-program"
    }
  ]
};

export const migrateData = async () => {
  console.log('Starting data migration...');
  
  try {
    // Delete existing documents
    const types = ['workExperience', 'academicPosition', 'education', 'skill', 'post', 'award', 'portfolio'];
    for (const type of types) {
      await client.delete({query: `*[_type == "${type}"]`});
      console.log(`Deleted existing ${type} documents`);
    }

    // Create new documents
    for (const [key, items] of Object.entries(migrationData)) {
      if (Array.isArray(items)) {
        for (const item of items) {
          await client.create(item);
          console.log(`Created ${key} item: ${item.title || item.name}`);
        }
      }
    }

    console.log('Data migration completed successfully');
    return true;
  } catch (error) {
    console.error('Error during migration:', error);
    return false;
  }
};