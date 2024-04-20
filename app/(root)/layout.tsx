import "../globals.scss";
import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "../providers/AuthContextProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "KUBE | Dashboard",
  description: "A saas product for business growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex justify-between">
          <div>
            <Sidebar />
          </div>

          <div className="w-full">
            <AuthProvider>
              <Topbar />
              {children}
            </AuthProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
