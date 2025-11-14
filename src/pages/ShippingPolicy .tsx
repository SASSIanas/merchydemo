import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Truck, DollarSign, Search } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-emerald-50 py-16 px-6 sm:px-10 md:px-20 text-gray-800">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4">
            Shipping Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Information about our delivery services and shipping times
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Delivery Times</h2>
            </div>
            <p className="text-gray-700">
              We deliver throughout Morocco with a delivery time of <strong>2 to 7 business days</strong>.
              Most deliveries are made within 2 days, but depending on the geographical area and logistical conditions,
              some deliveries may take up to 7 business days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Shipping Costs</h2>
            </div>
            <p className="text-gray-700">
              Shipping costs are calculated based on your location and the weight of your order.
              Free delivery for any order over <strong>500 DH</strong>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Search className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Order Tracking</h2>
            </div>
            <p className="text-gray-700">
              Once your order is shipped, you will receive an email with a tracking number to track your package in real time.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
