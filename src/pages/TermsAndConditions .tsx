import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FileText,
  Shield,
  User,
  Package,
  Link2,
  AlertTriangle,
  Scale,
  Hammer,
  RefreshCcw,
  Mail,
  Globe2,
  Phone,
} from "lucide-react";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-emerald-50 text-gray-800 py-16 px-6 sm:px-10 md:px-20">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 text-lg">
            Please read our terms and conditions carefully before using our
            services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-10">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Introduction
              </h2>
            </div>
            <p>
              These terms and conditions govern the use of{" "}
              <span className="font-semibold">Merchy.ma</span>, exclusively owned
              and operated by Merchy.ma. Merchy.ma is an e-commerce platform.
            </p>
            <p className="mt-2">
              By accessing this site, you acknowledge that you have read these
              terms and conditions and agree to comply with them at all times.
            </p>
          </div>

          {/* Intellectual property */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Intellectual Property
              </h2>
            </div>
            <p>
              All content published and made available on our Site is the
              property of Merchy.ma and the Site creators. This includes, but is
              not limited to, images, texts, logos, documents, downloadable
              files and anything that contributes to the composition of our
              Site.
            </p>
            <p className="mt-2">
              In case of use of copyrighted material in your designs, Merchy.ma
              has the right to take all necessary measures to reserve the right
              of the copyright owner. Action can range from simple design
              removal to account suspension and use of generated revenue to
              compensate the copyright victim.
            </p>
          </div>

          {/* Accounts */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <User className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Accounts</h2>
            </div>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                You are solely responsible for your account and its
                confidentiality, including passwords or sensitive information.
              </li>
              <li>
                All personal information you provide must be current, accurate,
                and truthful. Update your information if it changes.
              </li>
              <li>
                We reserve the right to suspend or terminate your account if you
                use our site illegally or violate these terms.
              </li>
            </ul>
          </div>

          {/* Third Party */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Package className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Third Party Goods and Services
              </h2>
            </div>
            <p>
              Our Site may offer third party goods and services. We cannot
              guarantee the quality or accuracy of goods and services made
              available by third parties on our Site.
            </p>
          </div>

          {/* Links */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Link2 className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Links to Other Websites
              </h2>
            </div>
            <p>
              Our site contains links to third-party websites or services that
              we do not own or control. We are not responsible for their
              content, policies, or practices. Always read their terms before
              using these sites.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Limitation of Liability
              </h2>
            </div>
            <p>
              Merchy.ma and its affiliates are not liable for actions, claims,
              losses, damages, or expenses resulting from your use of the site.
            </p>
          </div>

          {/* Indemnity */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Indemnity</h2>
            </div>
            <p>
              Except where prohibited by law, you agree to indemnify and hold
              harmless Merchy.ma and its affiliates from any claims or damages
              arising from your use of our site or violation of these terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Hammer className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Governing Law
              </h2>
            </div>
            <p>These Terms are governed by the laws of the Kingdom of Morocco.</p>
          </div>

          {/* Changes */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <RefreshCcw className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">Changes</h2>
            </div>
            <p>
              These Terms may be modified periodically to comply with laws or
              reflect changes in our practices. Users will be notified by email
              or via our website.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-emerald-100">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-bold text-emerald-700">
                Contact Details
              </h2>
            </div>
            <p>If you have any questions or concerns, please contact us:</p>
            <ul className="mt-3 space-y-1">
              <li className="flex items-center gap-2">
                <Globe2 className="text-emerald-600 w-5 h-5" /> support@merchy.ma
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-emerald-600 w-5 h-5" /> +212 652-624996
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
