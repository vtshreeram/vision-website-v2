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
      question: "Who do we serve?",
      answer:
        "We support Retail, E-commerce, Manufacturing, and Tech sectors across Singapore & Malaysia, providing tailored logistics for high-value and time-sensitive cargo.",
      open: true,
    },
    {
      question: "How do we reduce your costs?",
      answer:
        "Our platform uses real-time tracking and route optimization to minimize fuel usage, reduce delays, and improve fleet utilization—cutting overhead by up to 30%.",
      open: false,
    },
    {
      question: "Do you handle Customs clearance?",
      answer:
        "Yes. We are cross-border experts managing all permits, tax declarations, and clearance documentation for seamless Malaysia-Singapore freight movement.",
      open: false,
    },
    {
      question: "Is my cargo safe?",
      answer:
        "Absolutely. We maintain ISO-certified security protocols, GPS tracking for every vehicle, and strict data encryption to protect both your physical assets and digital information.",
      open: false,
    },
    {
      question: "How fast can we start?",
      answer:
        "Deploy in days, not months. Our cloud-based TMS integrates seamlessly via API with your existing ERP or order management systems.",
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
            Common Questions
          </Typography>
          <Typography variant="Regular_H6" className="mt-4 block text-gray">
            Clear answers about our services, coverage, and capabilities.
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
