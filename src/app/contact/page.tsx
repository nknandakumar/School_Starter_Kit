import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-neutral-900 text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Contact Us</h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        We'd love to hear from you. Reach out to us for any queries.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info Side */}
                        <div>
                            <SectionHeader title="Get in Touch" align="left" subtitle="Visit our campus or send us a message." />

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Campus Address</h4>
                                        <p className="text-neutral-600 leading-relaxed">
                                            123 Education Lane, Academic City,<br />
                                            Bangalore, Karnataka - 560000
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                                        <p className="text-neutral-600">+91 98765 43210</p>
                                        <p className="text-neutral-600">+91 80 1234 5678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Address</h4>
                                        <p className="text-neutral-600">admissions@school.edu</p>
                                        <p className="text-neutral-600">info@school.edu</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                                        <p className="text-neutral-600">Mon - Fri: 8:00 AM - 4:00 PM</p>
                                        <p className="text-neutral-600">Sat: 9:00 AM - 1:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map Mockup */}
                            <div className="w-full h-64 bg-neutral-100 rounded-xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.883733075677!2d77.5945627!3d12.979693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                            <h3 className="text-2xl font-bold font-heading mb-6">Send us a Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
