import { cn } from "@/lib/utils";
import {
  Warehouse,
  Package,
  ShoppingBag,
  PartyPopper,
  Cake,
  Calendar,
  Building2,
  ShoppingCart,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects({
  title = "WHO WE SERVE",
  subtitle = "Built for India's Celebration Businesses.",
  features = [
    {
      title: "Wholesalers",
      description: "Serving wholesale businesses with bulk celebration products and competitive pricing.",
      icon: Warehouse,
    },
    {
      title: "Semi-wholesalers",
      description: "Supporting semi-wholesale operations with flexible order quantities and reliable supply.",
      icon: Package,
    },
    {
      title: "Retailers",
      description: "Empowering retail stores with quality celebration products for their customers.",
      icon: ShoppingBag,
    },
    {
      title: "Party supply stores",
      description: "Your one-stop solution for all party supply needs with extensive product range.",
      icon: PartyPopper,
    },
    {
      title: "Bakeries",
      description: "Providing bakeries with premium celebration accessories and party essentials.",
      icon: Cake,
    },
    {
      title: "Event shops & planners",
      description: "Supporting event professionals with quality products for memorable celebrations.",
      icon: Calendar,
    },
    {
      title: "Event companies",
      description: "Partnering with event companies to deliver exceptional celebration experiences.",
      icon: Building2,
    },
    {
      title: "E-commerce sellers",
      description: "Enabling online sellers with ready inventory and fast fulfillment solutions.",
      icon: ShoppingCart,
    },
  ]
}) {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Title and Subtitle Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200",
        (index === 0 || index === 4) && "lg:border-l border-gray-200",
        index < 4 && "lg:border-b border-gray-200"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-gray-600">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

