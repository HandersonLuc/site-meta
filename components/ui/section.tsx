// src/components/common/Session.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SessionProps {
  title: string;
  description: string;
  href: string;
}

export function Session({ title, description, href }: SessionProps) {
  return (
    <section className="py-12 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Título e link */}
          <div>
            <h3 className="text-3xl font-bold mb-6">{title}</h3>
            <Link
              href={href}
              className="inline-flex items-center text-[#2AD8FF] font-medium hover:underline transition-colors"
            >
              SAIBA MAIS
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Descrição */}
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
