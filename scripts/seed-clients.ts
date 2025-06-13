import { PrismaClient } from '@prisma/client'
import { hashSync } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // First, create a trainer user
  const trainer = await prisma.user.create({
    data: {
      email: 'trainer@example.com',
      name: 'John Trainer',
      password: hashSync('password123', 10),
      role: 'USER',
      phone: '(555) 999-8888',
      specialties: 'Strength Training, Cardio, Flexibility',
      certifications: 'NASM CPT, CrossFit Level 2',
      location: 'New York, NY',
    },
  })

  // Create clients
  const clients = [
    {
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah@example.com',
      phone: '(555) 123-4567',
      goals: 'Lose 10 pounds, improve overall fitness',
      notes: 'Prefers morning sessions. Has a minor knee injury to be mindful of.',
      startDate: new Date('2023-01-15'),
      expirationDate: new Date('2023-12-31'),
      sessionPackage: '10',
      sessionsRemaining: 6,
    },
    {
      firstName: 'Mike',
      lastName: 'Peterson',
      email: 'mike@example.com',
      phone: '(555) 234-5678',
      goals: 'Build muscle mass, improve strength',
      notes: 'Prefers evening sessions. Focusing on upper body strength.',
      startDate: new Date('2023-02-03'),
      expirationDate: new Date('2023-12-31'),
      sessionPackage: '20',
      sessionsRemaining: 15,
    },
    {
      firstName: 'Emma',
      lastName: 'Wilson',
      email: 'emma@example.com',
      phone: '(555) 345-6789',
      goals: 'Improve flexibility, tone muscles',
      notes: 'Prefers afternoon sessions. Interested in yoga and pilates.',
      startDate: new Date('2023-03-22'),
      expirationDate: new Date('2023-12-31'),
      sessionPackage: '15',
      sessionsRemaining: 10,
    },
    {
      firstName: 'David',
      lastName: 'Lee',
      email: 'david@example.com',
      phone: '(555) 456-7890',
      goals: 'Train for marathon, improve endurance',
      notes: 'Prefers early morning sessions. Training for city marathon in October.',
      startDate: new Date('2023-04-10'),
      expirationDate: new Date('2023-12-31'),
      sessionPackage: '30',
      sessionsRemaining: 25,
    },
  ]

  for (const client of clients) {
    await prisma.client.create({
      data: {
        ...client,
        userId: trainer.id,
      },
    })
  }

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 