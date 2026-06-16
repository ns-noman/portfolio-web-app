import { SiteInfoProvider } from "@/context/SiteInfoContext";
import "./globals.css";
import { Raleway } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteInfo from "@/data/siteInfo.json";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nowab Shorif - Full Stack Software Developer",
  description: "Experienced Full Stack Software Developer specializing in ERP systems, web applications, backend engineering, REST API development, database design, and SaaS platforms. Proficient in Laravel, PHP, JavaScript, React.js, MySQL, PostgreSQL, MongoDB, and Oracle. Committed to delivering scalable and secure solutions for enterprise-level applications.",
};



// Fetch function (now local)
export async function getSiteInfo() {
  return siteInfo;
}

export default async function RootLayout({ children }) {

  const settings = await getSiteInfo();

  return (
    <html
      lang="en"
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteInfoProvider value={settings}>
          <Header siteInfo={settings} />
          {children}
          <Footer siteInfo={settings} />
        </SiteInfoProvider>
      </body>
    </html>
  );
}
