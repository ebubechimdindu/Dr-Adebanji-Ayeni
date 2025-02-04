import { Button } from "@/components/ui/button";
import { migrateData } from "@/utils/sanityMigration";
import { toast } from "sonner";

export function MigrateButton() {
  const handleMigration = async () => {
    const confirmed = window.confirm(
      "This will delete all existing Sanity documents and replace them with sample data. Are you sure?"
    );

    if (!confirmed) return;

    toast.loading("Migrating data to Sanity...");
    
    try {
      const success = await migrateData();
      if (success) {
        toast.success("Data migration to Sanity completed successfully");
      } else {
        toast.error("Data migration to Sanity failed");
      }
    } catch (error) {
      toast.error("Error during Sanity migration");
      console.error(error);
    }
  };

  return (
    <Button 
      onClick={handleMigration}
      variant="outline"
      className="bg-red-100 hover:bg-red-200 text-red-700"
    >
      Migrate Sample Data
    </Button>
  );
}