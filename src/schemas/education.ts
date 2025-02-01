export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'field',
      title: 'Field of Study',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dissertationTitle',
      title: 'Dissertation Title',
      type: 'string',
    },
    {
      name: 'principalAdvisor',
      title: 'Principal Advisor',
      type: 'string',
    },
    {
      name: 'coAdvisor',
      title: 'Co-Advisor',
      type: 'string',
    }
  ],
}