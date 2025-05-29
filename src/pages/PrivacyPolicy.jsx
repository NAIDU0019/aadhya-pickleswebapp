import React from "react";
import Head from "@/components/Head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Head title="Privacy Policy - ADHYAA PICKLES" />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            This Privacy Policy describes how ADHYAA PICKLES and its affiliates (collectively "ADHYAA PICKLES, we, our, us") collect, use, share, protect or otherwise process your information/personal data through our website{" "}
            <a href="https://adhyaapickles.com/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              https://adhyaapickles.com/
            </a>{" "}
            (hereinafter referred to as "Platform").
          </p>
          <p>
            By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms of this Privacy Policy, Terms of Use and the applicable service/product terms. If you do not agree, please do not use or access our Platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Collection</h2>
          <p>
            We collect your personal data when you use our Platform, services, or otherwise interact with us. This may include, but is not limited to: name, date of birth, address, phone number, email, identity/address proofs, bank/payment details, biometric information, etc. You may choose not to provide information; however, this may limit your access to some services.
          </p>
          <p>
            We also track user behavior and preferences in aggregate. Any data collected through third-party partners will be governed by their privacy policies.
          </p>
          <p>
            <strong>Important:</strong> ADHYAA PICKLES will never request sensitive data such as card PINs or banking passwords. Please report any such instances to law enforcement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Usage</h2>
          <p>We use your personal data to:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Provide requested services</li>
            <li>Assist sellers and business partners</li>
            <li>Enhance customer experience</li>
            <li>Resolve disputes and troubleshoot issues</li>
            <li>Inform you about offers and updates</li>
            <li>Customize and improve services</li>
            <li>Conduct marketing and research</li>
            <li>Ensure compliance with legal requirements</li>
          </ul>
          <p>You may opt-out of marketing communications at any time.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Sharing</h2>
          <p>Your personal data may be shared with:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Our corporate group and affiliates</li>
            <li>Sellers, logistics, and payment service providers</li>
            <li>Third-party reward/marketing partners</li>
            <li>Government or law enforcement agencies, if required</li>
          </ul>
          <p>
            Sharing will occur only as required for services, legal obligations, fraud prevention, and user protection.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Security Precautions</h2>
          <p>
            We implement reasonable security practices to protect your data. While we ensure safe storage and access to your account, data transmission over the internet may still carry inherent risks. Users are responsible for maintaining the confidentiality of their login credentials.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Deletion and Retention</h2>
          <p>
            You may delete your account from the profile settings section. If deletion is requested, we may retain certain data as required by law or for legitimate business reasons. Data may be anonymized and retained for analysis even after account deletion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p>
            You may access, update, or rectify your personal data through the Platform's provided tools.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Consent</h2>
          <p>
            By using our Platform, you consent to data collection, usage, and sharing as outlined here. If providing data on behalf of others, you affirm having the authority to do so.
          </p>
          <p>
            You may withdraw consent by contacting the Grievance Officer with the subject “Withdrawal of consent for processing personal data”. Such requests may be verified and are subject to our Terms of Use and applicable laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in practices or law. Please review it periodically. Notifications will be provided as required by law.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
