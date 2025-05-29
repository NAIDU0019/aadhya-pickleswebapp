import React from "react";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <>
      <Head title="Shipping Policy - ADHYAA PICKLES" />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
        <p className="mb-4">
          We process and ship orders within 2-3 business days.Products will be delivered within 5 to 7 bussiness days. Delivery time may vary based on location and courier availability.
        </p>
        <p className="mb-4">
          Shipping is available across India. Delivery charges apply based on your location and total order value.
        </p>
        <p className="mb-4">
          For urgent orders, contact our customer support team.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
