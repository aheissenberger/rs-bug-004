import "~/global.css";

import Confetti from "~/Confetti";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Menu, Link } from "lucide-react";

export default function App() {
  return (
    <html lang="en" className="h-screen" suppressHydrationWarning>
      <head></head>
      <body
        className="w-full min-h-full flex flex-col justify-center items-center dark:bg-zinc-900 dark:text-gray-400"
        suppressHydrationWarning
      >



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
              <Link to="/auth/login">Login</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>



        <a
          href="https://github.com/lazarv/react-server"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/github.svg"
            alt="GitHub page"
            className="absolute top-2 right-2 w-6 h-6"
          />
        </a>

        <section className="flex flex-col mt-auto">
          <div className="relative">
            <img
              src="/react-server.svg"
              className="absolute h-[85%] top-1/2 -translate-x-full -translate-y-1/2 -ml-1"
              alt="@lazarv/react-server logo"
            />
            <h2 className="text-xs font-semibold m-0 pt-0 border-none dark:text-yellow-500 mt-4 sm:mt-0">
              @lazarv
            </h2>
            <h1 className="text-5xl font-semibold m-0 -mt-4 whitespace-nowrap sm:text-6xl dark:text-yellow-500">
              react-server
            </h1>
          </div>

          <p className="text-lg">
            Welcome to your <b>@lazarv/react-server</b> app!
          </p>
        </section>

        <Confetti className="mt-4" />

        <p className="text-sm mt-4">
          Try editing <b>src/App.tsx</b> and save to reload.
        </p>

        <p className="text-sm mt-auto mb-2">
          Visit{" "}
          <a
            href="https://react-server.dev"
            target="_blank"
            className="text-indigo-500 dark:text-yellow-500"
            rel="noreferrer"
          >
            react-server.dev
          </a>{" "}
          to learn more about <b>@lazarv/react-server</b>.
        </p>
      </body>
    </html>
  );
}
