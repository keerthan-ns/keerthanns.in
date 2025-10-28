"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadNavigation() {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Work",
      link: "/work",
    },
    ];
    const pathname = usePathname();
  
    const isActiveLink = (href: string) => {
      return pathname === href;
    };

  return (
    <nav aria-label="Breadnavigation" className="text-sm text-gray-400 my-2">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-primary text-sm">
            Home
          </Link>
        </li>

        {navItems.map((navigate, index) => {
          return (
              <li key={index} className="flex items-center gap-2 text-sm">
              <span>|</span>
                <Link href={navigate.link} className={`hover:text-primary ${isActiveLink(navigate.link) ? 'text-secondary font-semibold' : ''}`}>
                  {format(navigate.name)}
                </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function format(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
