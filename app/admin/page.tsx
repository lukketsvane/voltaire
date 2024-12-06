"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "../../components/editor/advanced-editor";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSave = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, excerpt, content }),
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to save post');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <div className="space-y-4">
        <Input
          type="text"
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
          defaultValue="Start writing your blog post..."
          onChange={setContent}
        />
        <Button
          onClick={handleSave}
          className="bg-blue-500 text-white"
        >
          Save Post
        </Button>
      </div>
    </div>
  );
}

