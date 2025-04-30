-- AlterTable
ALTER TABLE "task" ADD COLUMN     "description" TEXT DEFAULT '',
ALTER COLUMN "priority" DROP DEFAULT;
