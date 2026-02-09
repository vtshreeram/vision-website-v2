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
    label: "Bonded Trucking",
    description: "Secure, tax-suspended transport for high-value cargo.",
    fullDescription:
      "Move high-value or dutiable goods securely across borders without immediate tax payments. Our TAPA-certified bonded trucks ensure your cargo stays safe and compliant from pickup to delivery.",
    features: [
      "TAPA TSR Level 2 Security",
      "Full Customs Support",
      "Real-Time GPS Tracking",
      "Secure Bonded Facilities",
      "24/7 Clearance Coordination",
    ],
    benefits: [
      "No Immediate Duties",
      "Zero Theft Risk",
      "Seamless Border Crossing",
      "100% Regulatory Compliance",
      "Total Shipment Visibility",
    ],
  },
  {
    slug: "non-bonded-truck",
    img: img1,
    label: "General Freight",
    description: "Fast, reliable nationwide transport.",
    fullDescription:
      "Flexible trucking solutions for domestic cargo. Whether it's a full truckload or LTL, our modern fleet delivers to every corner of Malaysia and Singapore with speed and precision.",
    features: [
      "Modern Fleet Fleet",
      "On-Demand Scheduling",
      "Door-to-Door Service",
      "VizFleet Tracking",
      "All Vehicle Sizes",
    ],
    benefits: [
      "Faster Delivery",
      "Lower Transport Costs",
      "Route Optimization",
      "Professional Handling",
      "Live Updates",
    ],
  },
  {
    slug: "warehousing-storage",
    img: img3,
    label: "Smart Warehousing",
    description: "Secure storage with real-time inventory visibility.",
    fullDescription:
      "More than just storage. Our tech-enabled warehouses give you 24/7 visibility into your stock levels, with climate control and top-tier security to protect your assets.",
    features: [
      "Climate Control",
      "Live Inventory Data",
      "24/7 Security",
      "Flexible Space",
      "Advanced WMS",
    ],
    benefits: [
      "Lower Inventory Costs",
      "99.9% Stock Accuracy",
      "Scale Up Instantly",
      "Faster Order Prep",
      "Total Stock Control",
    ],
  },
  {
    slug: "distribution-cargo-handling",
    img: img4,
    label: "Distribution & Handling",
    description: "Rapid sorting and dispatch for faster deliveries.",
    fullDescription:
      "Get your products to market faster. We handle the complex logistics of sorting, packing, and dispatching, so you can meet tight delivery windows without the stress.",
    features: [
      "Expert Cargo Handling",
      "Multi-Modal Support",
      "Cross-Docking",
      "Last-Mile Coordination",
      "Instant Status Updates",
    ],
    benefits: [
      "Faster Transit Times",
      "Reduced Overheads",
      "Higher Accuracy",
      "Happier Customers",
      "Seamless Network",
    ],
  },
  {
    slug: "tail-lift-truck",
    img: img5,
    label: "Tail Lift Services",
    description: "Heavy lifting made easy for non-dock locations.",
    fullDescription:
      "No loading dock? No problem. Our hydraulic tail lift trucks handle heavy pallets and equipment safely, ensuring smooth deliveries to retail outlets and street-level locations.",
    features: [
      "Hydraulic Lifts",
      "Trained Operators",
      "High Capacity Lifts",
      "Safe Loading",
      "Street-Level Access",
    ],
    benefits: [
      "Safer Handling",
      "Less Manual Labor",
      "Quicker Turnaround",
      "Deliver Anywhere",
      "Zero Damage",
    ],
  },
  {
    slug: "crane-truck",
    img: img6,
    label: "Crane Trucking",
    description: "Specialized lifting for oversized cargo.",
    fullDescription:
      "For machinery and construction materials that need muscle. Our certified crane operators handle complex lifts safely, saving you the cost of hiring separate cranes.",
    features: [
      "High-Capacity Cranes",
      "Certified Operators",
      "Heavy Lift Ready",
      "Specialized Rigging",
      "Safety First",
    ],
    benefits: [
      "Safe Heavy Lifts",
      "All-in-One Solution",
      "Faster Setup",
      "Risk Mitigation",
      "Expert Execution",
    ],
  },
  {
    slug: "linehaul-shuttle",
    img: img7,
    label: "Linehaul & Shuttle",
    description: "Scheduled long-haul transport you can set your watch to.",
    fullDescription:
      "Consistent, scheduled routes between major hubs. Perfect for recurring shipments that need guaranteed arrival times and cost-effective bulk transport.",
    features: [
      "Fixed Schedules",
      "Dedicated Trucks",
      "Long-Distance Routes",
      "Consolidated Loads",
      "Guaranteed Timings",
    ],
    benefits: [
      "Predictable Schedules",
      "Bulk Cost Savings",
      "Faster Transit",
      "Simplified Planning",
      "Consistent Service",
    ],
  },
  {
    slug: "first-last-mile",
    img: img8,
    label: "Last Mile Delivery",
    description: "The final step to customer satisfaction.",
    fullDescription:
      "Make a great final impression. Our professional drivers and real-time tracking ensure your customers get their orders on time and in perfect condition.",
    features: [
      "Smart Routing",
      "Real-Time Tracking",
      "Pro Drivers",
      "Flexible Windows",
      "Digital POD",
    ],
    benefits: [
      "Better Experience",
      "Higher Success Rates",
      "Full Visibility",
      "Lower Delivery Costs",
      "Customer Choice",
    ],
  },
  {
    slug: "fleet-leasing",
    img: img9,
    label: "Fleet Leasing",
    description: "Expand your fleet without the capital expense.",
    fullDescription:
      "Get the trucks you need without buying them. Our flexible leasing plans include maintenance and insurance, so you can scale your operations instantly.",
    features: [
      "Flexible Terms",
      "Full Maintenance",
      "Insurance Included",
      "Fleet Support",
      "Modern Vehicles",
    ],
    benefits: [
      "No CapEx Required",
      "Fixed Monthly Costs",
      "Zero Maintenance Stress",
      "Instant Scalability",
      "Focus on Core Biz",
    ],
  },
];
