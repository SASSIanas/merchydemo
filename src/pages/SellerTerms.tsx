import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Paintbrush,
  Package,
  Truck,
  HandCoins,
  Layers,
  Shirt,
  Star,
  LifeBuoy,
  UploadCloud,
  Store,
  HelpCircle,
  Users,
  CheckCircle,
} from "lucide-react";

const SellerTerms = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-white to-emerald-50 text-gray-800 py-16 px-6 sm:px-10 md:px-20">
        {/* HEADER */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4">
            Turn Your Talent into Income with Merchy
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Create. Sell. Shine. With Merchy, your designs come to life on
            high-quality products, reaching customers all over Morocco – while
            we take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-full shadow hover:bg-emerald-700 transition">
              Start Creating Today
            </button>
            <button className="px-6 py-3 border border-emerald-600 text-emerald-700 font-medium rounded-full hover:bg-emerald-100 transition">
              Already have an account? Sign in
            </button>
          </div>
        </div>

        {/* SERVICES */}
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-emerald-700">
              Our Services for Designers
            </h2>
            <p className="text-gray-600 mt-2">
              At Merchy, we provide creators with a simple and powerful platform
              to transform their ideas into real income.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <Paintbrush className="text-emerald-600 w-6 h-6" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Unlimited Creativity & Personalization
                </h3>
              </div>
              <p>
                Upload your designs and apply them to a wide range of products
                in just a few clicks. Stay in control and attract new customers
                easily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <Shirt className="text-emerald-600 w-6 h-6" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Wide Range of Products
                </h3>
              </div>
              <p>
                T-shirts, hoodies, mugs, tote bags, accessories… our diverse
                catalog helps you reach more audiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-emerald-600 w-6 h-6" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Professional Print Quality
                </h3>
              </div>
              <p>
                Our printing tech ensures every design is vibrant, durable, and
                true to your vision. Your customers receive flawless products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="text-emerald-600 w-6 h-6" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Simplified Logistics
                </h3>
              </div>
              <p>
                We handle production, packaging, and delivery. Focus on
                creating, we’ll handle the rest efficiently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow border border-emerald-100 sm:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <LifeBuoy className="text-emerald-600 w-6 h-6" />
                <h3 className="text-xl font-bold text-emerald-700">
                  Dedicated Support for Creators
                </h3>
              </div>
              <p>
                Our team assists with optimizing designs, learning the platform,
                or tracking your sales. You’re always supported.
              </p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8">
            How It Works in 3 Simple Steps
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow border border-emerald-100">
              <UploadCloud className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">1. Upload your design</h3>
              <p className="text-gray-600 text-sm">
                Create your profile and add your artwork in just a few clicks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow border border-emerald-100">
              <Package className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">
                2. We transform your art
              </h3>
              <p className="text-gray-600 text-sm">
                High-quality printing, neat packaging, and fast shipping.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow border border-emerald-100">
              <HandCoins className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">3. Sell & earn money</h3>
              <p className="text-gray-600 text-sm">
                Your creations go live instantly, and you receive your income
                easily.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8">
            Why Designers Choose Merchy
          </h2>

          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <li className="bg-white p-5 rounded-2xl shadow border border-emerald-100 flex items-center gap-3">
              <CheckCircle className="text-emerald-600 w-5 h-5" /> No stock to
              manage
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border border-emerald-100 flex items-center gap-3">
              <Star className="text-emerald-600 w-5 h-5" /> Premium quality prints
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border border-emerald-100 flex items-center gap-3">
              <HandCoins className="text-emerald-600 w-5 h-5" /> Transparent
              payments
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border border-emerald-100 flex items-center gap-3">
              <Users className="text-emerald-600 w-5 h-5" /> Wide Moroccan audience
            </li>
            <li className="bg-white p-5 rounded-2xl shadow border border-emerald-100 flex items-center gap-3 sm:col-span-2 md:col-span-1">
              <Layers className="text-emerald-600 w-5 h-5" /> Total flexibility
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What is Merchy.ma for designers?",
                a: "Merchy.ma lets you turn your designs into sellable products without worrying about stock or logistics.",
              },
              {
                q: "What products can I customize?",
                a: "T-shirts, hoodies, mugs, tote bags, and more — every product can feature your design.",
              },
              {
                q: "How does printing work?",
                a: "We use professional printing technology to ensure your design is vibrant, durable, and faithful to your artwork.",
              },
              {
                q: "Do I handle production and shipping?",
                a: "No, we take care of everything: printing, packaging, and delivery across Morocco.",
              },
              {
                q: "How do I receive my earnings?",
                a: "Once your products are sold, your earnings are transferred easily and transparently to your account.",
              },
              {
                q: "Do I need to manage inventory?",
                a: "No. Everything is made on demand — no stock, no unsold items.",
              },
              {
                q: "Can I get help with my designs or sales?",
                a: "Yes! Our support team helps you optimize designs, understand the platform, and track your sales.",
              },
              {
                q: "How long does delivery take?",
                a: "We ship orders quickly. Delivery times vary, but we ensure fast service throughout Morocco.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow border border-emerald-100"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-emerald-600 w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-semibold text-emerald-700 mb-1">
                      {faq.q}
                    </h4>
                    <p className="text-gray-700 text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-emerald-700 mb-3">
            Join Our Creator Community
          </h2>
          <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-full shadow hover:bg-emerald-700 transition">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SellerTerms;
