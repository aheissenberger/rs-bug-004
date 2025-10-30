import "@/global.css";
import Header from "~/components/header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-screen" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body
        className="w-full min-h-full flex flex-col dark:bg-zinc-900 dark:text-gray-400"
        suppressHydrationWarning
      >
        <Header />

        <main className="flex-1 w-full flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
