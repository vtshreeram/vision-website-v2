import { Banner, Services } from "@/components/shared";

const ServicesPage = () => {
  return (
    <main>
      <section className=" global-padding-container py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>
      <Banner />
    </main>
  );
};

export default ServicesPage;
