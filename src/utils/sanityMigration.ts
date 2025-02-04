import { client } from '@/lib/sanity.client';
import { migrationData } from './sanityMigrationData';

const createDocument = async (document: any) => {
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
  console.log('Starting Sanity data migration...');
  
  try {
    // Delete existing documents for each type
    const types = ['workExperience', 'academicPosition', 'education', 'skill', 'award'];
    for (const type of types) {
      await client.delete({query: `*[_type == "${type}"]`});
      console.log(`Deleted existing ${type} documents`);
    }

    // Create new documents from migrationData
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

    console.log('Sanity data migration completed');
    return success;
  } catch (error) {
    console.error('Error during Sanity migration:', error);
    return false;
  }
};