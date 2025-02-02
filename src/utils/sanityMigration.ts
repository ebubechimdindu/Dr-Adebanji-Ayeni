import { client } from '@/lib/sanity.client';
import type { 
  WorkExperience, 
  AcademicPosition, 
  Education, 
  Skill, 
  Award,
  SanityDocument 
} from '@/types/sanity';

const migrationData = {
  workExperience: [
    {
      _type: 'workExperience' as const,
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
      _type: 'workExperience' as const,
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
      _type: 'workExperience' as const,
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
  ] as const,

  academicPositions: [
    {
      _type: 'academicPosition' as const,
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
      _type: 'academicPosition' as const,
      title: "Lecturer I",
      institution: "Wigwe University",
      startDate: "2024-08-01",
      isCurrent: true,
      researchAreas: [
        "Business Administration",
        "Entrepreneurship",
        "Academic Performance"
      ]
    }
  ] as const,

  education: [
    {
      _type: 'education' as const,
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
      _type: 'education' as const,
      degree: "M.S. in Business Administration",
      institution: "Covenant University",
      field: "Business Administration",
      startYear: 2011,
      endYear: 2013,
      dissertationTitle: "Assessing the electronics market in an informal economy: a study of computer village, Ikeja, Lagos state"
    }
  ] as const,

  skills: [
    {
      _type: 'skill' as const,
      category: "Technical Tools",
      name: "Microsoft Office"
    },
    {
      _type: 'skill' as const,
      category: "Technical Tools",
      name: "SPSS"
    },
    {
      _type: 'skill' as const,
      category: "Research Methods",
      name: "Structural Equation Modelling (SEM) in PLS"
    }
  ] as const,

  awards: [
    {
      _type: 'award' as const,
      title: "EDS Curriculum Overhauling",
      organization: "Centre of Entrepreneurship development Studies, Landmark University",
      year: 2024,
      description: "Recognition for outstanding contribution to curriculum development"
    },
    {
      _type: 'award' as const,
      title: "Best Research Paper",
      organization: "International Conference on Business Administration",
      year: 2023,
      description: "Award for outstanding research contribution in business administration"
    }
  ] as const
};

async function createDocument<T extends { _type: string }>(document: T): Promise<boolean> {
  try {
    const result = await client.create(document);
    console.log(`Created ${document._type}: ${result._id}`);
    return true;
  } catch (error) {
    console.error(`Error creating ${document._type}:`, error);
    return false;
  }
}

export const migrateData = async () => {
  console.log('Starting data migration...');
  
  try {
    // Delete existing documents
    const types = ['workExperience', 'academicPosition', 'education', 'skill', 'award'];
    for (const type of types) {
      await client.delete({query: `*[_type == "${type}"]`});
      console.log(`Deleted existing ${type} documents`);
    }

    // Create new documents
    let success = true;
    for (const [key, items] of Object.entries(migrationData)) {
      for (const item of items) {
        const result = await createDocument(item);
        if (!result) {
          success = false;
          console.error(`Failed to create ${key} item`);
        }
      }
    }

    console.log('Data migration completed');
    return success;
  } catch (error) {
    console.error('Error during migration:', error);
    return false;
  }
};