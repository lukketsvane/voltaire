import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Editor from "@/components/editor/advanced-editor";
import { Button } from "@/components/ui/button";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id }
  });

  if (!post) {
    notFound();
  }

  const content = JSON.parse(post.content);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl">
        <Link href="/" passHref>
          <Button variant="link" className="mb-8">← Back to posts</Button>
        </Link>
        <h1 className="text-4xl font-semibold mb-4">{post.title}</h1>
        <p className="text-muted-foreground mb-8">{post.excerpt}</p>
        <div className="prose max-w-none">
          <Editor initialValue={content} editable={false} />
        </div>
      </div>
    </main>
  );
}
