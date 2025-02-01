export default {
  name: 'academicPosition',
  title: 'Academic Position',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'isCurrent',
      title: 'Is Current Position',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'researchAreas',
      title: 'Research Areas',
      type: 'array',
      of: [{ type: 'string' }],
    }
  ],
}