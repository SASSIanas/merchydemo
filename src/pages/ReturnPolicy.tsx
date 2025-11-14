import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw, Package, CreditCard, CheckCircle } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-emerald-50 text-gray-800 py-16 px-6 sm:px-10 md:px-20">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4">
            Return Policy
          </h1>
          <p className="text-gray-600 text-lg">Everything you need to know about our return and refund policy</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <RotateCcw className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">General Policy</h2>
            </div>
            <p className="text-gray-700">
              We accept returns within <strong>14 days</strong> of receiving your order. To be eligible, the item must be unused and in the same condition as received.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Package className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Return Process</h2>
            </div>
            <ol className="list-decimal ml-6 space-y-2 text-gray-700">
              <li>Contact our customer service.</li>
              <li>Carefully package your item.</li>
              <li>Include the return form.</li>
              <li>Send the package to the indicated address.</li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Refunds</h2>
            </div>
            <p className="text-gray-700">
              Once your return is received and inspected, we will notify you by email about the approval or rejection of your refund.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
