import React from "react";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <>
      <Head title="Return Policy - ADHYAA PICKLES" />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Return Policy</h1>
        <p className="mb-4">
          We accept returns within 7 days of delivery for unopened and unused products.
        </p>
        <p className="mb-4">
          To initiate a return, please contact our customer support with your order details.
        </p>
        <p className="mb-4">
          Refunds will be processed and Credited within 5-7 business days after we receive the returned product.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
