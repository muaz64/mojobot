import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hindSiliguri = Hind_Siliguri({ 
  subsets: ["bengali"], 
  weight: ["300", "400", "600"],
  variable: "--font-hind" 
});

export const metadata = {
  title: "MojoBot | Your AI Companion",
  description: "Next-gen AI Personal Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={`${inter.variable} ${hindSiliguri.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}