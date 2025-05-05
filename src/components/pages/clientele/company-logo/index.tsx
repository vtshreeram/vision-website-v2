// ** import core packages
import Image from "next/image";

// ** import assets
import logo1 from "@/assets/images/pages/clientele/company-logo/shoppe-xpress.png";
import logo2 from "@/assets/images/pages/clientele/company-logo/quanterm-logistices.png";
import logo3 from "@/assets/images/pages/clientele/company-logo/geodis.png";
import logo4 from "@/assets/images/pages/clientele/company-logo/global-logistics.png";
import logo5 from "@/assets/images/pages/clientele/company-logo/fm-global.png";
import logo6 from "@/assets/images/pages/clientele/company-logo/flash.png";
import logo7 from "@/assets/images/pages/clientele/company-logo/jt.png";
import logo8 from "@/assets/images/pages/clientele/company-logo/dhl.png";
import logo9 from "@/assets/images/pages/clientele/company-logo/e-tech.png";
import logo10 from "@/assets/images/pages/clientele/company-logo/havi.png";
import logo11 from "@/assets/images/pages/clientele/company-logo/agility.png";
import logo12 from "@/assets/images/pages/clientele/company-logo/servex.png";
import logo13 from "@/assets/images/pages/clientele/company-logo/best-express.png";

const logos = [
  { src: logo1, alt: "Shoppe Xpress" },
  { src: logo2, alt: "Quanterm Logistics" },
  { src: logo3, alt: "Geodis" },
  { src: logo4, alt: "Global Logistics" },
  { src: logo6, alt: "Flash Express" },
  { src: logo7, alt: "J&T Express" },
  { src: logo8, alt: "DHL" },
  { src: logo9, alt: "E-Tech" },
  { src: logo5, alt: "FM Global" },
  { src: logo10, alt: "Havi" },
  { src: logo11, alt: "Agility" },
  { src: logo12, alt: "Servex" },
  { src: logo13, alt: "Best Express" },
];

// Split logos for each row
const row1 = logos.slice(0, 6);
const row2 = logos.slice(6, 11);
const row3 = logos.slice(11, 13);

export const CompanyLogo = () => {
  return (
    <section className="py-16 md:py-20 global-padding-container">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Row 1 */}
        <div className="flex flex-wrap gap-x-8 gap-y-8">
          {row1.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-auto  overflow-hidden h-[90px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                width={171}
                height={90}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap  gap-x-8 gap-y-8 justify-center">
          {row2.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-auto  overflow-hidden h-[90px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                width={171}
                height={90}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center">
          {row3.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-auto  h-[90px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                width={171}
                height={90}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;
