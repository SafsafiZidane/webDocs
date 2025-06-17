ALTER TABLE "folders" ADD COLUMN "logo" text;--> statement-breakpoint
ALTER TABLE "files" DROP COLUMN IF EXISTS "logo";