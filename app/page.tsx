import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    select: { id: true, title: true, excerpt: true, createdAt: true }
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold">Blog Posts</h1>
          <Link href="/admin" passHref>
            <Button>Admin</Button>
          </Link>
        </div>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="border p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</span>
                <Link href={`/posts/${post.id}`} passHref>
                  <Button variant="link">Read more</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
