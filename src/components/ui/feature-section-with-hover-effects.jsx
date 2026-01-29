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
  title = "WHO WE SERVE ?",
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
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white via-white to-slate-50/70 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.35)]">
          <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary-orange/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-primary-blue/25 blur-3xl" />

          {/* Title and Subtitle Section */}
          <div className="relative z-10 md:text-center text-left mb-2 px-4 md:px-10 pt-10 md:pt-12">
            <h2 className="md:heading-lg heading-base mb-4 sm:mb-6 !text-primary-orange">
              {title}
            </h2>
            <p className="body-lg max-w-3xl mx-auto text-slate-600">
              {subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 relative z-10 md:py-10 py-6">
            {features.map((feature, index) => (
              <Feature key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
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
        "flex flex-col lg:border-r py-6 md:py-10 relative group/feature border-slate-200/80",
        (index === 0 || index === 4) && "lg:border-l border-slate-200/80",
        index < 4 && "lg:border-b border-slate-200/80",
        index % 2 === 0 && "md:border-r-0 border-r border-slate-200/80"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-100/80 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-100/80 to-transparent pointer-events-none" />
      )}
      <div className="mb-5 relative z-10 px-4 md:px-10">
        <div
          className={cn(
            "h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-black/5 bg-off-white transition-all duration-300 group-hover/feature:-translate-y-1 group-hover/feature:scale-105 group-hover/feature:shadow-[0_0_28px_rgba(241,98,34,0.35)]"
          )}
        >
          <Icon className="w-6 h-6 text-primary-blue" />
        </div>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-4 md:px-10">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full transition-all duration-200 origin-center bg-primary-orange"
          )}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-900">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 max-w-xs relative z-10 px-4 md:px-10">
        {description}
      </p>
    </div>
  );
};
