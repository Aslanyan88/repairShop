import { HomeIcon, File, UsersRound, LogOut } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const navItems = [
  { href: "/dashboard", label: "Home", icon: HomeIcon },
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
          <Button
            variant="ghost"
            size="icon"
            aria-label="LogOut"
            title="Log Out"
            className="rounded-full p-2"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </nav>

        <ModeToggle />
      </div>
    </header>
  );
}
