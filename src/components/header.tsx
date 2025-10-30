import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { validateSession } from "@/lib/sessions";
import { Link } from "@lazarv/react-server/navigation";
import { Menu } from "lucide-react";

export default async function Header() {
  const session = await validateSession();
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-white dark:bg-zinc-900">
      <div className="flex items-center gap-2">
        {/* Logo (replace src with your logo path if needed) */}
        {/* <img src={logo} alt="Logo" width="220" /> */}
        {/* <span className="font-bold text-lg">Zitadel Webauth</span> */}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link to="/p1">Menu Item 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/p2">Menu Item 2</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/p3">Menu Item 3</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to={`/auth/${session ? "logout" : "login"}`}>
              {session ? "Logout" : "Login"}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
