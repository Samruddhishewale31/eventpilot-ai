"use client";

import dynamic from "next/dynamic";

const DynamicAssistant = dynamic(
  () => import("./AIAssistant").then((mod) => mod.AIAssistant),
  { ssr: false }
);

export function AssistantWrapper() {
  return <DynamicAssistant />;
}
