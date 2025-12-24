import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

const Referral = () => {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
            <Share2 className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Know a Good Teacher?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Share them with us. We value your referrals and are always looking for passionate educators to join our network.
        </p>
        
        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8" asChild>
            <Link to="/referrals">
                Send Your Referrals
            </Link>
        </Button>
      </div>
    </section>
  );
};

export default Referral;
