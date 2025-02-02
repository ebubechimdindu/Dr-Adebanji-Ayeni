import { client } from '@/lib/sanity.client';
import type { 
  WorkExperience, 
  AcademicPosition, 
  Education, 
  Skill, 
  Award, 
  Post, 
  Portfolio,
  SanityDocument 
} from '@/types/sanity';

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
    } as WorkExperience,
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
    } as WorkExperience,
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
    } as WorkExperience
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
    } as AcademicPosition,
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
    } as AcademicPosition
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
    } as Education,
    {
      _type: 'education',
      degree: "M.S. in Business Administration",
      institution: "Covenant University",
      field: "Business Administration",
      startYear: 2011,
      endYear: 2013,
      dissertationTitle: "Assessing the electronics market in an informal economy: a study of computer village, Ikeja, Lagos state"
    } as Education
  ],

  skills: [
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "Microsoft Office"
    } as Skill,
    {
      _type: 'skill',
      category: "Technical Tools",
      name: "SPSS"
    } as Skill,
    {
      _type: 'skill',
      category: "Research Methods",
      name: "Structural Equation Modelling (SEM) in PLS"
    } as Skill
  ],

  awards: [
    {
      _type: 'award',
      title: "EDS Curriculum Overhauling",
      organization: "Centre of Entrepreneurship development Studies, Landmark University",
      year: 2024,
      description: "Recognition for outstanding contribution to curriculum development"
    } as Award,
    {
      _type: 'award',
      title: "Best Research Paper",
      organization: "International Conference on Business Administration",
      year: 2023,
      description: "Award for outstanding research contribution in business administration"
    } as Award
  ]
};

const createDocument = async (document: SanityDocument) => {
  try {
    const result = await client.create(document);
    console.log(`Created ${document._type}: ${result._id}`);
    return true;
  } catch (error) {
    console.error(`Error creating ${document._type}:`, error);
    return false;
  }
};

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