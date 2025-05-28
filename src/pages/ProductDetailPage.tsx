import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BadgeVeg } from "@/components/ui/badge-veg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Minus, Plus, ChevronLeft, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";
// import ProductList from "@/components/ProductList"; // Not directly used in this file's render, but good to keep if used elsewhere
import toast from "react-hot-toast"; // Import toast for notifications

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const navigate = useNavigate(); // Initialize useNavigate

  const product = products.find((p) => p.id === id);

  const [selectedWeight, setSelectedWeight] = useState<string>(
    product ? Object.keys(product.pricePerWeight)[0] : ""
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addItem(product, selectedWeight, quantity);
    toast.success(`${quantity} x ${product.name} (${selectedWeight}g) added to cart!`, {
      position: "bottom-right",
      duration: 3000,
    });
  };

  const handleBuyNow = () => {
    addItem(product, selectedWeight, quantity); // Add to cart first
    toast.success(`${quantity} x ${product.name} (${selectedWeight}g) added to cart! Redirecting to checkout...`, {
      position: "bottom-right",
      duration: 2000,
    });
    // Simulate redirection to a checkout page
    setTimeout(() => {
      navigate("/checkout"); // Replace with your actual checkout path
    }, 1000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Static review data for demonstration
  const reviews = [
    { id: 1, author: "Swati", rating: 4, comment: "Delicious and spicy! Reminds me of home." },
    { id: 2, author: "Rahul K.", rating: 5, comment: "Authentic taste, highly recommend the mango pickle." },
    { id: 3, author: "Priya S.", rating: 3, comment: "Good, but a bit too salty for my taste." },
  ];

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length)
    : 0;

  return (
    <>
      <Helmet>
        <title>{product.name} - ADHYAA PICKLES</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-8">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6 text-muted-foreground">
              <Link to="/products">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Products
              </Link>
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="aspect-square overflow-hidden rounded-md bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <BadgeVeg variant={product.type} className="mb-3" />
                <h1 className="text-3xl font-display font-bold mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
                </div>

                <div className="mb-4">
                  <label htmlFor="select-weight" className="font-medium block mb-2">Select Weight:</label>
                  <div className="flex gap-2" role="radiogroup" aria-labelledby="select-weight">
                    {Object.entries(product.pricePerWeight).map(([weight]) => (
                      <Button
                        key={weight}
                        variant={selectedWeight === weight ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedWeight(weight)}
                        aria-checked={selectedWeight === weight}
                        role="radio"
                      >
                        {weight}g
                      </Button>
                    ))}
                  </div>
                </div>

                <p className="text-2xl font-semibold mb-6">
                  {formatPrice(product.pricePerWeight[selectedWeight])}
                </p>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Weight: {selectedWeight}g</p>
                  <p className="text-sm text-muted-foreground">
                    Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Pickle
                  </p>
                </div>

                <Separator className="my-6" />

                <div className="mb-6">
                  <p className="font-medium mb-2">Quantity</p>
                  <div className="flex items-center">
                    <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1} aria-label="Decrease quantity">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-4 min-w-[2rem] text-center" aria-live="polite">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={increaseQuantity} aria-label="Increase quantity">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" onClick={handleAddToCart}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={handleBuyNow}>
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mb-16">
              <TabsList className="mb-6">
                <TabsTrigger value="description" aria-controls="description-tab-panel">Description</TabsTrigger>
                <TabsTrigger value="ingredients" aria-controls="ingredients-tab-panel">Ingredients</TabsTrigger>
                <TabsTrigger value="reviews" aria-controls="reviews-tab-panel">Reviews ({reviews.length})</TabsTrigger>
              </TabsList>
              <TabsContent value="description" id="description-tab-panel" role="tabpanel" tabIndex={0} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="mb-4">{product.description}</p>
                <p>
                  Our pickles are handcrafted in small batches using traditional methods and premium ingredients.
                </p>
                <h4 className="text-lg font-semibold mt-6 mb-3">Storage Instructions</h4>
                <p>Store in a cool, dry place. Refrigerate after opening and consume within 6 months.</p>
              </TabsContent>
              <TabsContent value="ingredients" id="ingredients-tab-panel" role="tabpanel" tabIndex={0} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                <p>{product.ingredients}</p>
              </TabsContent>
              <TabsContent value="reviews" id="reviews-tab-panel" role="tabpanel" tabIndex={0} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="font-semibold text-sm mb-1">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                )}
                {/* You can add a review submission form here */}
                {/* <Button className="mt-4">Write a Review</Button> */}
              </TabsContent>
            </Tabs>

            {/* Related products */}
            {relatedProducts.length > 0 && (
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{relatedProduct.name}</h3>
                          {/* Displaying price of the smallest weight for related products */}
                          <p className="text-muted-foreground text-sm mb-1">
                            Starting from {formatPrice(Object.values(relatedProduct.pricePerWeight)[0])}
                          </p>
                          <BadgeVeg variant={relatedProduct.type} className="text-xs" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetailPage;
