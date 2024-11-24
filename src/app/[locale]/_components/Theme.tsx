"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

import { ReactNode } from "react";

export default function Theme({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
