"use client";

import Link from "next/link";
import { useState } from "react";

export function DropdownMenu({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-white hover:text-[#2AD8FF] transition-colors duration-300">
        {title}
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-[#F5F7FA] shadow-lg rounded-md">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-[#007BFF] hover:bg-gray-200 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
