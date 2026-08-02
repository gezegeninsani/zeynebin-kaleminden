import '../styles/globals.css';
import { Header } from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { VersionIndicator } from '@/components/VersionIndicator';

export const metadata = {
  title: "Zeynep'in Kaleminden",
  description: 'Personal blog and AmA platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="sakura">
      <body className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4 overflow-auto">
            {children}
          </main>
          <VersionIndicator />
        </div>
      </body>
    </html>
  );
}