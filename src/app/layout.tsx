import "./globals.css";

export const metadata = {
  title: "The Ark of Wisdom",
  description: "AI 中心の共同体",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900">
        <header className="bg-blue-500 p-4 text-white text-center">
          <h1 className="text-2xl font-bold">The Ark of Wisdom</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          © 2025 The Ark of Wisdom
        </footer>
      </body>
    </html>
  );
}