import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeVeg } from "@/components/ui/badge-veg";
import { ShoppingCart, Star, Eye, ChevronRight, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { Product, useCart } from "@/context/CartContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const {
    id,
    name,
    image,
    type,
    pricePerWeight,
    stockPerWeight = {},
    tags = [],
    description = "",
  } = product;

  const weightOptions = Object.keys(pricePerWeight);
  const [selectedWeight, setSelectedWeight] = useState<string>(weightOptions[0] || "");
  const price = pricePerWeight[selectedWeight] || 0;
  const stock = stockPerWeight[selectedWeight] || 0;
  const isBestSeller = tags.includes("best-seller");
  const isPopular = tags.includes("popular");

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedWeight) return;
    addItem(product, selectedWeight);

    const button = e.currentTarget as HTMLButtonElement;
    button.classList.add("animate-ping-once");
    setTimeout(() => {
      button.classList.remove("animate-ping-once");
    }, 300);
  };

  const renderTags = (tags: string[]) =>
    tags.map((tag) => (
      <span
        key={tag}
        className="text-xs bg-pickle-100 text-pickle-800 px-2 py-1 rounded-full capitalize hover:bg-pickle-200 transition-colors"
      >
        {tag}
      </span>
    ));

  return (
    <Card className="relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg group hover:-translate-y-1 border-2 hover:border-pickle-200">
      {/* Status Badges */}
      <div className="absolute top-3 left-3 z-10 space-y-1">
        {isBestSeller && (
          <span className="px-3 py-1 flex items-center bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-bold rounded-full shadow-md animate-pulse hover:animate-none hover:scale-105 transition-transform">
            <Zap className="w-3 h-3 mr-1 fill-white" />
            BEST SELLER
          </span>
        )}
        {isPopular && !isBestSeller && (
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md">
            POPULAR
          </span>
        )}
      </div>

      {/* Quick View Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label={`Quick view of ${name}`}
            className="absolute top-2 right-2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:scale-110 transition-transform hover:bg-pickle-100"
          >
            <Eye className="w-4 h-4 text-gray-700 hover:text-pickle-700 transition-colors" />
          </button>
        </DialogTrigger>

        <DialogContent className="max-w-md sm:max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {isBestSeller && (
                <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-bold rounded-full shadow-md">
                  BEST SELLER
                </span>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">{name}</h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(120 reviews)</span>
              </div>

              <p className="text-gray-700 mb-4">
                {description || "Premium handcrafted pickle made with traditional recipes"}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-pickle-50 text-pickle-700 px-3 py-1 rounded-full border border-pickle-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Select Weight:</label>
                  <div className="flex flex-wrap gap-2">
                    {weightOptions.map((w) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(w)}
                        className={`px-3 py-1 rounded-full text-sm border transition-all ${
                          selectedWeight === w
                            ? "bg-pickle-600 text-white border-pickle-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-pickle-50 hover:border-pickle-200"
                        }`}
                      >
                        {w}g
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-2xl font-bold text-pickle-700">{formatPrice(price)}</span>
                    {stock > 0 && stock < 15 && (
                      <p className="text-xs text-red-600 mt-1">Only {stock} units left</p>
                    )}
                  </div>
                  <Button
                    onClick={handleAdd}
                    className="bg-pickle-600 hover:bg-pickle-700 transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Product Image */}
      <Link to={`/product/${id}`} className="overflow-hidden">
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img
            src={image}
            alt={`${name} pickle`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 text-white p-4 flex flex-col justify-end transition-opacity duration-300">
            <p className="text-sm">{description || "Premium handcrafted pickle"}</p>
            <button className="self-start mt-2 flex items-center text-xs font-medium hover:underline">
              View details <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
          <BadgeVeg variant={type} />
          <div className="flex flex-wrap gap-1">
            {renderTags(tags.filter((tag) => !["best-seller", "popular"].includes(tag)).slice(0, 2))}
            {tags.length > 2 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{tags.length - 2}
              </span>
            )}
          </div>
        </div>

        <Link to={`/product/${id}`} className="group">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-pickle-600 transition-colors hover:underline underline-offset-2">
            {name}
          </h3>
        </Link>

        <div className="flex items-center text-yellow-500 text-sm mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
          ))}
          <span className="ml-1 text-gray-500 text-xs">(120)</span>
        </div>

        {weightOptions.length > 0 && (
          <select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="mb-3 p-2 border rounded-md text-sm hover:border-pickle-300 focus:border-pickle-500 focus:ring-1 focus:ring-pickle-200 transition-colors"
          >
            {weightOptions.map((w) => (
              <option key={w} value={w}>
                {w}g - {formatPrice(pricePerWeight[w])}
              </option>
            ))}
          </select>
        )}

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-pickle-700">{formatPrice(price)}</span>
          <Button
            onClick={handleAdd}
            className="bg-pickle-600 hover:bg-pickle-700 transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>

        {stock > 0 && stock < 20 && (
          <p className="mt-2 text-xs text-red-600 font-medium">Only {stock} units left</p>
        )}
      </CardContent>
    </Card>
  );
}
