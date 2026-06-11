import * as React from "react";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Dot mesh pattern with center fading mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 dark:opacity-25 mask-radial-fade" />
      
      {/* Floating Blur Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] md:blur-[140px] animate-float-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-[100px] md:blur-[140px] animate-float-blob-reverse" />
      <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-indigo-600/5 dark:bg-indigo-500/10 blur-[80px] md:blur-[120px] animate-float-blob" />
    </div>
  );
}
