import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming this exists, if not will default to textarea
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information & Map */}
          <div>
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-3 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
              Contact Us
            </h2>
            <p className="text-gray-500 text-lg mb-12">
                Have questions? We're here to help. Reach out to us for any inquiries regarding our staffing services or employment opportunities.
            </p>

            <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 text-red-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Our Location</h4>
                        <p className="text-gray-500">
                            6575 West Loop South, Suite 500,<br />Bellaire, TX 77401
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 text-red-600">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h4>
                        <p className="text-gray-500">
                            (562) 234-5454
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 text-red-600">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">Email Address</h4>
                        <p className="text-gray-500">
                            info@firsthand-education.com
                        </p>
                    </div>
                </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.639433438318!2d-95.46467868489228!3d29.72485698199996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3c861e38947%3A0x6295353592864609!2s6575%20W%20Loop%20S%20%23500%2C%20Bellaire%2C%20TX%2077401!5e0!3m2!1sen!2sus!4v1642834723945!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={false} 
                    loading="lazy"
                ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 focus:bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">How can we help?</label>
                    <select className="w-full h-10 px-3 rounded-md border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all text-gray-500">
                        <option>General Inquiry</option>
                        <option>School Staffing Request</option>
                        <option>Job Opportunity</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                        className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white transition-colors"
                        placeholder="Tell us more about your needs..."
                    />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-12 text-lg shadow-lg shadow-red-600/20">
                    Send Message
                </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
