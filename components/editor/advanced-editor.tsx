"use client"

import { Editor } from "novel";

interface AdvancedEditorProps {
  defaultValue?: string;
  onChange: (content: string) => void;
}

export default function AdvancedEditor({ defaultValue = "", onChange }: AdvancedEditorProps) {
  return (
    <Editor
      defaultValue={defaultValue}
      onUpdate={(editor) => {
        onChange(editor?.getHTML() ?? "");
      }}
      className="min-h-[500px] w-full border rounded"
    />
  );
}

