import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const post1 = await prisma.post.create({
    data: {
      title: 'Welcome to Voltaire Blog',
      content: 'This is the first post on our new blog platform. We hope you enjoy reading our content!',
      excerpt: 'Welcome to our new blog platform.',
    },
  })

  const post2 = await prisma.post.create({
    data: {
      title: 'The Power of Next.js',
      content: 'Next.js is a powerful React framework that enables you to build server-side rendered and statically generated web applications with ease.',
      excerpt: 'Exploring the benefits of Next.js for web development.',
    },
  })

  console.log({ post1, post2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

