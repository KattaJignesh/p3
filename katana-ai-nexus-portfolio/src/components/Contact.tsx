import React, { useState, useRef } from 'react';
import { Mail, Phone, MessageSquare, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const serviceId = 'service_nwfcl0l';
    const templateId = 'template_edk990m';
    const publicKey = 't-RBeqhGxASdYsUwH';

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
          console.log('Email successfully sent!', result.text);
          setStatus('success');
          if (form.current) {
            form.current.reset();
          }
        }, (error) => {
          console.error('Email sending failed:', error.text);
          setStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section id="contact" className="py-20 bg-black minimal-bg-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 scroll-fade">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="shadow-sm bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="shadow-sm bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="shadow-sm bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Message"
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2" size={16} />
                </>
              )}
            </Button>

            {status === 'success' && (
              <div className="text-green-500 text-center mt-4">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-500 text-center mt-4">
                An error occurred. Please try again.
              </div>
            )}
          </form>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Mail className="text-blue-500" size={20} />
              <a href="mailto:kattajignesh1@gmail.com">kattajignesh1@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Phone className="text-purple-500" size={20} />
              <a href="tel:+919573807994">+91 9573807994</a>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 hover:text-green-400 transition-colors duration-300">
              <MessageSquare className="text-green-500" size={20} />
              <a href="https://wa.me/919703970680" target="_blank" rel="noopener noreferrer">+91 9703970680 (WhatsApp)</a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://www.linkedin.com/in/jignesh-katta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/KattaJignesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
