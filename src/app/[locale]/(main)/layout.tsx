import Footer from "@/components/local/layout/footer";
import { Header } from "@/components/local/layout/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <section className="container mx-auto px-10 pt-4">
        {/* <DynamicBreadcrumb /> */}
      </section>
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
