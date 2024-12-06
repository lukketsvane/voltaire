"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "@/components/editor/advanced-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JSONContent } from "novel";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState<JSONContent>({ type: "doc", content: [{ type: "paragraph" }] });
  const router = useRouter();

  const handleSave = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, excerpt, content: JSON.stringify(content) }),
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to save post');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-4xl font-semibold">Create New Post</h1>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
        />
        <Editor
          initialValue={content}
          onChange={(value) => setContent(value)}
        />
        <Button onClick={handleSave}>Save Post</Button>
      </div>
    </main>
  );
}
