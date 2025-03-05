import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-edgar uppercase tracking-wider text-dark mb-6">
                Contact Us
              </h2>
              <p className="text-dark/80 leading-relaxed">
                Flex Electric, Inc. is a trusted local electrical contractor with over 30 years 
                of combined experience. Our commitment to quality and professionalism has made 
                us the contractor of choice throughout South Florida.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-edgar uppercase tracking-wider text-dark mb-1">Address</h3>
                  <p className="text-dark/80">
                    43 South Powerline Rd, #431<br />
                    Pompano Beach, FL 33069
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-edgar uppercase tracking-wider text-dark mb-1">Phone</h3>
                  <a 
                    href="tel:+19548689893" 
                    className="text-dark/80 hover:text-primary transition-colors"
                  >
                    (954) 868-9893
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-edgar uppercase tracking-wider text-dark mb-1">Email</h3>
                  <a 
                    href="mailto:flexelectric.fl@gmail.com"
                    className="text-dark/80 hover:text-primary transition-colors"
                  >
                    flexelectric.fl@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-edgar uppercase tracking-wider text-dark mb-1">Hours</h3>
                  <div className="text-dark/80 space-y-1">
                    <p>Monday to Friday: 8:00 AM – 5:00 PM</p>
                    <p>Saturday to Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9935789615456!2d-80.16075532385426!3d26.22939817706103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9039f302d7a65%3A0xca940d4daf756897!2s43%20S%20Powerline%20Rd%20%23431%2C%20Pompano%20Beach%2C%20FL%2033069!5e0!3m2!1sen!2sus!4v1739702285169!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;