import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card" className={cn("rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/30", className)} {...props} />;
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("p-5", className)} {...props} />;
}

export { Card, CardContent };
