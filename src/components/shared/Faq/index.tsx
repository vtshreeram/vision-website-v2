"use client";

// import core package
import { useState } from "react";

// import components
import { Typography } from "@/components/ui/Typography";

//  import icons
import { FaRegWindowMinimize } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "What industries does VizFleet serve?",
      answer:
        "VizFleet supports e-commerce, express delivery, manufacturing, global freight, and technology companies — offering tailored logistics solutions across Malaysia and Singapore.",
      open: true,
    },
    {
      question: "How does VizFleet improve my logistics operations?",
      answer:
        "Our platform provides real-time tracking, automated booking, digital proof of delivery, and analytics that reduce costs and boost on-time delivery performance.",
      open: false,
    },
    {
      question: "Can VizFleet handle cross-border operations?",
      answer:
        "Yes, our certified Malaysia-Singapore cross-border logistics services include customs clearance, documentation management, and compliance with all regulatory standards.",
      open: false,
    },
    {
      question: "How secure is my data on VizFleet?",
      answer:
        "We follow strict ISO standards, data encryption, and audit-ready compliance protocols to ensure complete protection of client data and shipments.",
      open: false,
    },
    {
      question: "Is VizFleet easy to implement for my business?",
      answer:
        "Yes, VizFleet is designed with a simple onboarding process, API integrations, and mobile-first tools — making it quick to deploy without disrupting daily operations.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section id="faq" className="bg-background overflow-hidden">
      <div className="mx-auto max-w-[1339px] px-4  sm:px-6 lg:px-8  py-16 lg:py-20 ">
        <div className="text-center">
          <Typography variant="SemiBold_H3" className={`block text-primary `}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="Regular_H6" className="mt-4 block text-gray">
            Everything you need to know before partnering <br /> with Visions
            Transport Enterprise.
          </Typography>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div key={index} className="!cursor-pointer shadow-lg card-hover">
              <div
                className={`${item.open
                    ? "border border-primary"
                    : "border border-stroke"
                  } cursor-pointer  bg-white  transition-all duration-200  `}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-4 sm:pt-6 sm:px-6 sm:pb-4"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`flex text-start text-[1.25rem] md:text-[1.5625rem] font-medium ${item.open ? "text-primary" : ""
                    }`}>
                    {item.question}
                  </span>

                  {!item.open ? (
                    <FaPlus className="text-xl text-primary" />
                  ) : (
                    <FaRegWindowMinimize className="text-xl text-primary" />
                  )}
                </button>

                <div
                  className={`${item.open ? "block " : "hidden"
                    } px-4 pb-5 text-start sm:px-6 sm:pb-6 text-gray text-base leading-[1.625]`}
                >
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
