import { Button } from "@workspace/ui/components/button";
import React from "react";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <h3>Admin Panel</h3>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
