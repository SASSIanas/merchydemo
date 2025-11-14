import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Database, Lock, Cookie } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-emerald-50 text-gray-800 py-16 px-6 sm:px-10 md:px-20">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">Protection of your personal data and respect for your privacy</p>
          <p className="text-sm text-gray-500 mt-2">Effective date: August 18, 2022</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Introduction</h2>
            </div>
            <p className="text-gray-700">
              Merchy.ma (the "Site") is owned and operated by Merchy.ma. Merchy.ma can be contacted at support@merchy.ma or +212 652-624996.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Database className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Information we collect</h2>
            </div>
            <p className="text-gray-700">
              We collect: first and last name, email address, phone number, delivery address, and order history. This data is collected when you create an account, place an order, contact customer service, or browse the site.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Data protection</h2>
            </div>
            <p className="text-gray-700">
              We implement security measures: SSL, restricted access, regular security updates, and secure storage to preserve your information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Cookie className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Cookie policy</h2>
            </div>
            <p className="text-gray-700">
              We use cookies to maintain your session, remember preferences, analyze usage, and improve experience. You can disable cookies in your browser but some features may not work correctly.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
