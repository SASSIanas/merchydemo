import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Sparkles, Star, PenTool, Users, Truck, Wallet, RefreshCcw, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-emerald-50 text-gray-800 py-16 px-6 sm:px-10 md:px-20">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4">
            About Merchy
          </h1>
          <p className="text-gray-600 text-lg">
            An online platform that connects creators to their fans through merchandise!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Our Mission</h2>
            </div>
            <p>
              We facilitate and optimize the creation and distribution of creators' products
              and help fans get quality products from their favorite stars and creators.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">What distinguishes us?</h2>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mt-3">
              <li className="flex items-start gap-3">
                <Star className="text-emerald-600 w-5 h-5 mt-1" />
                <div>
                  <div className="font-semibold">Quality products</div>
                  <div className="text-sm text-gray-600">Carefully selected products to guarantee the best quality.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <PenTool className="text-emerald-600 w-5 h-5 mt-1" />
                <div>
                  <div className="font-semibold">Creative designs</div>
                  <div className="text-sm text-gray-600">Unique and personalized designs for each creator.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Users className="text-emerald-600 w-5 h-5 mt-1" />
                <div>
                  <div className="font-semibold">Diverse community</div>
                  <div className="text-sm text-gray-600">A vibrant community of passionate creators and fans.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Truck className="text-emerald-600 w-5 h-5 mt-1" />
                <div>
                  <div className="font-semibold">Optimized shipping</div>
                  <div className="text-sm text-gray-600">Low production and shipping costs for everyone.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Wallet className="text-emerald-600 w-5 h-5 mt-1" />
                <div>
                  <div className="font-semibold">Flexible pricing</div>
                  <div className="text-sm text-gray-600">No fixed profit margins for more flexibility.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <RefreshCcw className="text-emerald-600 w-5 h-5 mt-1" />
                <div>
                  <div className="font-semibold">Easy returns</div>
                  <div className="text-sm text-gray-600">Simple and hassle-free return process.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100 text-center">
            <HeartHandshake className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-emerald-700 mb-2">Join our community</h2>
            <p className="text-gray-700">Discover a new way to connect creators with their fans through unique and quality products.</p>
            <button className="mt-5 px-6 py-2 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition">
              Start now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
