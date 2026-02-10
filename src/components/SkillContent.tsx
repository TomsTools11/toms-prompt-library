"use client";

import ReactMarkdown from "react-markdown";

export default function SkillContent({ content }: { content: string }) {
  return (
    <div className="skill-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
