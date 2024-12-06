"use client";

import { EditorContent, EditorRoot, defaultEditorProps } from "novel";
import { useState } from "react";

const TailwindEditor = ({ onChange }: { onChange: (content: string) => void }) => {
  const [content, setContent] = useState(null);

  return (
    <EditorRoot>
      <EditorContent
        initialContent={content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
          onChange(editor.getHTML());
        }}
        editorProps={{
          ...defaultEditorProps,
          attributes: {
            class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
          },
        }}
      />
    </EditorRoot>
  );
};

export default TailwindEditor;

