import { HomeIcon, File, UsersRound } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const navItems = [
  { href: "/home", label: "Home", icon: HomeIcon },
  { href: "/tickets", label: "Tickets", icon: File },
  { href: "/customers", label: "Customers", icon: UsersRound },
];

export function Header() {
  return (
    <header className="bg-gray-100 py-4 anim animate-appear text">
        <div className="flex items-center justify-between">
          <Link href="/home" className="text-lg font-bold">
            Computer Repair Shop
          </Link>

          <nav className="flex space-x-4 ">
            {navItems.map((item) => (
              <NavButton
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </nav>
          <ModeToggle />
        </div>
    </header>
  );
}
