// src/pages/RefundPolicy.tsx (or similar path)

import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 font-display">Refund & Returns Policy</h1>

      <p className="text-lg text-muted-foreground mb-6 text-center">
        Thank you for shopping at ADHYAA PICKLES. We take great pride in crafting premium homemade pickles with authentic recipes and the finest ingredients. Your satisfaction is our priority.
      </p>
      <p className="text-muted-foreground mb-8 text-center">
        Please read our Refund & Returns Policy carefully.
      </p>

      <div className="space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">1. Eligibility for Refund & Returns</h2>
          <p className="mb-2">Due to the perishable nature of our products and for hygiene reasons, we can only accept returns and offer refunds under the following specific conditions:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Damaged Product:</strong> If your order arrives damaged or tampered with.</li>
            <li><strong>Incorrect Product:</strong> If you receive a product different from what you ordered.</li>
            <li><strong>Missing Items:</strong> If your order is incomplete.</li>
          </ul>
          <p className="mt-4 mb-2">We <strong>do not</strong> offer refunds or returns if:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>You simply change your mind after receiving the product.</li>
            <li>The product has been opened or consumed, unless it falls under the "damaged" or "incorrect product" category.</li>
            <li>The product was damaged due to improper storage after delivery.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">2. Timeframe for Raising a Concern</h2>
          <p>You must notify us of any issues (damaged, incorrect, or missing items) within <strong>24 hours</strong> of receiving your order. Any claims made after this period may not be accepted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">3. How to Initiate a Return/Refund</h2>
          <p className="mb-2">To initiate a claim, please follow these steps:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li><strong>Contact Us:</strong> Immediately email us at <a href="mailto:support@adhyaapickles.com" className="text-blue-600 hover:underline">support@adhyaapickles.com</a> or call us at <a href="tel:+911234567890" className="text-blue-600 hover:underline">[Your Customer Service Phone Number Here]</a> within the 24-hour window.</li>
            <li><strong>Provide Details:</strong> In your email, please include:
              <ul className="list-disc list-inside space-y-1 ml-8">
                <li>Your Order Number.</li>
                <li>A clear description of the issue (e.g., "damaged jar," "wrong pickle received").</li>
                <li><strong>Crucially, attach clear photos or a short video</strong> of the damaged product or the incorrect/missing item. This is mandatory for us to process your request.</li>
                <li>Your preferred contact information.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">4. Our Review Process</h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Once we receive your email and supporting evidence, our team will review your claim.</li>
            <li>We may contact you for further information or clarification.</li>
            <li>We aim to respond to all claims within <strong>2-3 business days</strong>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">5. Refund or Replacement</h2>
          <p className="mb-2">If your claim is approved:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Damaged/Incorrect/Missing Product:</strong> We will offer you a replacement of the same product at no additional cost, or a full refund to your original payment method, at our discretion.</li>
            <li><strong>Refund Processing:</strong> Refunds will be processed within <strong>7-10 business days</strong> after approval. The time for the refund to reflect in your account may vary depending on your bank or payment provider.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">6. Shipping Costs</h2>
          <p>If a return or refund is approved due to our error (damaged, incorrect, or missing product), ADHYAA PICKLES will cover any associated shipping costs for returns or replacements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 font-display text-foreground">7. Contact Us</h2>
          <p className="mb-2">If you have any questions about our Refund & Returns Policy, please contact us:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Email:</strong> <a href="mailto:support@adhyaapickles.com" className="text-blue-600 hover:underline">support@adhyaapickles.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+911234567890" className="text-blue-600 hover:underline">[Your Customer Service Phone Number Here]</a></li>
            <li><strong>Address:</strong> [Your Company Address Here, if applicable for communication]</li>
          </ul>
        </section>
      </div>

      <p className="mt-12 text-center text-muted-foreground text-lg">
        <strong>Thank you for choosing ADHYAA PICKLES. We appreciate your business and are committed to ensuring a delightful experience with our traditional homemade Indian pickles.</strong>
      </p>
    </div>
  );
}
