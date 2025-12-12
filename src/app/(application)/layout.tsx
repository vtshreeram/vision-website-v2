// ** import component
import Footer from "@/components/template/footer";
import StickyHeader from "@/components/template/header/StickyHeader";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import SkipNavigation from "@/components/ui/SkipNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`antialiased`}>
      <SkipNavigation />
      <StickyHeader />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </div>
  );
}
