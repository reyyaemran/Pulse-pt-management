import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const userId = '7dde260b-6943-4baa-92a4-84eae83f0a85'
    
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: 'ADMIN' },
    })

    console.log('User updated successfully:', updatedUser)
  } catch (error) {
    console.error('Error updating user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 