"use client";

import { Button } from '@/components/ui/Button';

export const ContactForm = () => {
    return (
        <form className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your Name" />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Subject</label>
                <input type="text" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="How can we help?" />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Message</label>
                <textarea className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none h-32" placeholder="Write your message here..."></textarea>
            </div>

            <Button size="lg" className="w-full">Send Message</Button>
        </form>
    );
};
