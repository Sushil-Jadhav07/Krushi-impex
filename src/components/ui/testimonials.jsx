"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonials({
  title = "What Our Clients Say",
  testimonials = [
    {
      quote: "Krushi Impex has completely transformed the way we manage our celebration product inventory. The quality and pricing are unbeatable.",
      name: "Rajesh Kumar",
      company: "Kumar Wholesale",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The collaboration and support from Krushi Impex have significantly improved our product offerings. We're serving our customers better with quality celebration supplies.",
      name: "Priya Sharma",
      company: "Sharma Party Supplies",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Krushi Impex has been our trusted partner for celebration products. The quality-checked products have made decision-making so much easier for our business.",
      name: "Amit Patel",
      company: "Patel Event Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Working with Krushi Impex has been a game-changer. Their ready inventory in India and competitive pricing have helped us maintain healthy margins.",
      name: "Sneha Reddy",
      company: "Reddy Celebration Store",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The quality-checked products and fast Pan-India delivery from Krushi Impex have transformed our business. We're now able to fulfill orders faster.",
      name: "Vikram Singh",
      company: "Singh B2B Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Best decision we made was partnering with Krushi Impex. Their direct sourcing from China and quality assurance has elevated our business.",
      name: "Anjali Mehta",
      company: "Mehta Party World",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Krushi Impex's ready inventory and fast delivery have made our operations seamless. We can now serve our customers better and faster.",
      name: "Rohit Verma",
      company: "Verma Events",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The competitive pricing and quality products from Krushi Impex have helped us grow our business significantly. Highly recommended!",
      name: "Kavita Nair",
      company: "Nair Celebration Hub",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]
}) {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 bg-gray-100 relative overflow-hidden">
      {/* Dot Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-gray-800 text-center">
            {title}
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg h-full p-6 sm:p-8 flex flex-col justify-between border border-gray-200 hover:shadow-md transition-shadow">
                    <User className="w-8 h-8 stroke-1 text-gray-400 mb-6" />
                    <div className="flex flex-col gap-4 flex-grow">
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-xl tracking-tight font-semibold text-gray-900 mb-3">
                          Best decision
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                          {testimonial.quote}
                        </p>
                      </div>
                      <div className="flex flex-row gap-2 text-sm items-center mt-auto">
                        <span className="text-gray-500">By</span>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gray-200 text-gray-600 text-xs">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-semibold text-gray-800">{testimonial.name}</span>
                        <span className="text-gray-500">{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };

