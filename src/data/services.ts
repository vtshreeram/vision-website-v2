import img1 from "@/assets/images/common/services/img-1.webp";
import img2 from "@/assets/images/common/services/img-2.webp";
import img3 from "@/assets/images/common/services/img-3.webp";
import img4 from "@/assets/images/common/services/img-4.webp";
import img5 from "@/assets/images/common/services/img-5.webp";
import img6 from "@/assets/images/common/services/img-6.webp";
import img7 from "@/assets/images/common/services/img-7.webp";
import img8 from "@/assets/images/common/services/img-8.webp";
import img9 from "@/assets/images/common/services/img-9.webp";
import { StaticImageData } from "next/image";

export interface ServiceDetail {
  slug: string;
  label: string;
  description: string;
  img: StaticImageData;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "bonded-truck",
    img: img2,
    label: "Bonded Truck",
    description: "Secure, compliant handling for customs-controlled shipments.",
    fullDescription:
      "Our bonded truck services provide secure and compliant transportation for customs-controlled cargo. With TAPA TSR Level 2 certification and full customs compliance, we ensure your goods move safely across borders with complete documentation and tracking.",
    features: [
      "TAPA TSR Level 2 certified security",
      "Full customs documentation support",
      "Real-time GPS tracking",
      "Dedicated bonded warehouse facilities",
      "24/7 customs clearance coordination",
    ],
    benefits: [
      "Reduced customs delays",
      "Enhanced cargo security",
      "Simplified cross-border logistics",
      "Complete regulatory compliance",
      "Real-time shipment visibility",
    ],
  },
  {
    slug: "non-bonded-truck",
    img: img1,
    label: "Non-Bonded Truck",
    description: "Fast, flexible nationwide transport.",
    fullDescription:
      "Our non-bonded truck services offer flexible and efficient transportation solutions for domestic cargo. With a modern fleet and experienced drivers, we provide reliable door-to-door delivery across Malaysia and Singapore.",
    features: [
      "Modern, well-maintained fleet",
      "Flexible scheduling",
      "Door-to-door delivery",
      "Real-time tracking via VizFleet",
      "Multiple vehicle sizes available",
    ],
    benefits: [
      "Fast delivery times",
      "Cost-effective solutions",
      "Flexible routing options",
      "Professional handling",
      "Complete shipment visibility",
    ],
  },
  {
    slug: "warehousing-storage",
    img: img3,
    label: "Warehousing & Storage Solutions",
    description: "Safe storage with real-time visibility.",
    fullDescription:
      "Our state-of-the-art warehousing facilities provide secure, technology-driven storage solutions. With real-time inventory management through VizFleet, climate-controlled environments, and 24/7 security, your goods are in safe hands.",
    features: [
      "Climate-controlled storage",
      "Real-time inventory management",
      "24/7 security monitoring",
      "Flexible storage options",
      "Advanced warehouse management system",
    ],
    benefits: [
      "Reduced inventory costs",
      "Enhanced inventory accuracy",
      "Scalable storage capacity",
      "Improved order fulfillment",
      "Complete inventory visibility",
    ],
  },
  {
    slug: "distribution-cargo-handling",
    img: img4,
    label: "Distribution & Cargo Handling",
    description: "Accurate, high-speed end-to-end distribution.",
    fullDescription:
      "Our comprehensive distribution and cargo handling services ensure efficient movement of goods from origin to destination. With advanced handling equipment and trained personnel, we guarantee safe and timely delivery.",
    features: [
      "Professional cargo handling",
      "Multi-modal distribution",
      "Cross-docking capabilities",
      "Last-mile delivery coordination",
      "Real-time status updates",
    ],
    benefits: [
      "Reduced transit times",
      "Lower handling costs",
      "Improved delivery accuracy",
      "Enhanced customer satisfaction",
      "Seamless distribution network",
    ],
  },
  {
    slug: "tail-lift-truck",
    img: img5,
    label: "Tail Lift Truck",
    description: "Efficient handling for heavy or sensitive cargo.",
    fullDescription:
      "Our tail lift truck services provide specialized handling for heavy, bulky, or sensitive cargo. With hydraulic lifting equipment and trained operators, we ensure safe loading and unloading at locations without loading docks.",
    features: [
      "Hydraulic tail lift equipment",
      "Trained operators",
      "Various lifting capacities",
      "Safe loading/unloading",
      "Suitable for locations without docks",
    ],
    benefits: [
      "Safe cargo handling",
      "Reduced manual labor",
      "Faster loading/unloading",
      "Access to any location",
      "Minimal cargo damage",
    ],
  },
  {
    slug: "crane-truck",
    img: img6,
    label: "Crane Truck",
    description: "Lifting solutions for oversized and heavy cargo.",
    fullDescription:
      "Our crane truck services offer specialized lifting solutions for oversized, heavy, or difficult-to-handle cargo. With experienced operators and modern crane equipment, we handle complex lifting operations safely and efficiently.",
    features: [
      "Various crane capacities",
      "Certified crane operators",
      "Heavy lift capabilities",
      "Specialized rigging equipment",
      "Safety-first approach",
    ],
    benefits: [
      "Safe heavy cargo handling",
      "Versatile lifting solutions",
      "Time-efficient operations",
      "Reduced project risks",
      "Professional execution",
    ],
  },
  {
    slug: "linehaul-shuttle",
    img: img7,
    label: "Linehaul & Shuttle",
    description: "Reliable long-distance and shuttle transfers.",
    fullDescription:
      "Our linehaul and shuttle services provide reliable long-distance transportation and regular shuttle runs between fixed locations. With scheduled routes and dedicated vehicles, we ensure consistent and timely deliveries.",
    features: [
      "Scheduled regular routes",
      "Dedicated vehicle allocation",
      "Long-distance capabilities",
      "Consolidated shipments",
      "Reliable transit times",
    ],
    benefits: [
      "Consistent delivery schedules",
      "Cost-effective bulk transport",
      "Reduced transit times",
      "Simplified logistics planning",
      "Reliable service levels",
    ],
  },
  {
    slug: "first-last-mile",
    img: img8,
    label: "First & Last Mile Delivery",
    description: "Seamless first and last-mile delivery.",
    fullDescription:
      "Our first and last-mile delivery services bridge the critical gap between warehouses and end customers. With optimized routing, real-time tracking, and professional delivery teams, we ensure exceptional delivery experiences.",
    features: [
      "Optimized delivery routes",
      "Real-time delivery tracking",
      "Professional delivery teams",
      "Flexible delivery windows",
      "Proof of delivery capture",
    ],
    benefits: [
      "Enhanced customer experience",
      "Improved delivery success rates",
      "Real-time delivery visibility",
      "Reduced delivery costs",
      "Flexible delivery options",
    ],
  },
  {
    slug: "fleet-leasing",
    img: img9,
    label: "Fleet Leasing Services",
    description: "Scalable fleet leasing with maintenance support.",
    fullDescription:
      "Our fleet leasing services provide flexible vehicle solutions without the capital investment. With comprehensive maintenance, insurance, and fleet management support, you can focus on your core business while we handle your logistics needs.",
    features: [
      "Flexible leasing terms",
      "Comprehensive maintenance",
      "Insurance coverage included",
      "Fleet management support",
      "Modern, well-maintained vehicles",
    ],
    benefits: [
      "Reduced capital investment",
      "Predictable operating costs",
      "Professional fleet maintenance",
      "Scalable fleet capacity",
      "Focus on core business",
    ],
  },
];
