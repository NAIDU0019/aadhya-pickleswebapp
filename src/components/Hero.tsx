import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Star, ChevronRight } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "7995059659";
  const whatsappMessage = "Hi, I'd like to place an order for Adhyaa Pickles!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const bestSellers = [
    "Andhra Mango Pickle",
    "Garlic Chili Pickle",
    "Lemon Pickle"
  ];

  return (
    <section className="hero-pattern py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-pickle-100/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-20 w-40 h-40 bg-spice-100/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="mb-2 flex items-center gap-2 text-sm bg-amber-100 text-amber-900 w-max px-3 py-1 rounded-full">
              <Star className="w-4 h-4 fill-amber-500" />
              <span>Trusted by 5000+ Customers</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pickle-700 to-spice-600 bg-clip-text text-transparent">
                Grandma's Secret
              </span>
              <br />
              Pickle Recipes
            </h1>

            <p className="text-lg mb-8 max-w-xl text-muted-foreground">
              Handcrafted with 100% natural ingredients using traditional methods passed down through generations. No preservatives, just authentic flavors.
            </p>

            <div className="mb-8">
              <h3 className="font-medium mb-2">Most Loved Varieties:</h3>
              <div className="flex flex-wrap gap-2">
                {bestSellers.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 px-3 py-1 rounded-full text-sm border border-amber-200">
                    {item} <ChevronRight className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pickle-700 to-pickle-600 hover:from-pickle-800 hover:to-pickle-700 text-white shadow-lg" asChild>
                <a href="/products">
                  Shop Now
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-spice-500 text-spice-600 hover:bg-spice-50" asChild>
                <a href="/about">
                  Our Story
                </a>
              </Button>
              
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Order on WhatsApp
                  </span>
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>100% Natural Ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="w-5 h-5 text-amber-600" />
                <span>Free Shipping Pan India T&C Apply</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/banner.jpeg"
                alt="Assorted pickles in glass jars with fresh ingredients"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-medium text-amber-900">Family Recipe Since 1995</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
