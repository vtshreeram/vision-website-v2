// ** import component
import Footer from "@/components/template/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`antialiased`}>
      {children}
      <Footer />
    </div>
  );
}
