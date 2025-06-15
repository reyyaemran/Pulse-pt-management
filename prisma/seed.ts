import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const { exercises } = await import('./exercise-data.ts');
  for (const exercise of exercises) {
    await prisma.exercise.upsert({
      where: { id: exercise.id },
      update: {},
      create: {
        id: exercise.id,
        name: exercise.name,
        description: exercise.description,
        category: exercise.category,
        difficulty: exercise.difficulty,
        equipment: exercise.equipment,
        targetMuscles: exercise.targetMuscles,
        instructions: exercise.instructions,
        tips: exercise.tips,
        variations: exercise.variations,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 