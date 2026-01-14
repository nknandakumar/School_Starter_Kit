"use client";

import { Button } from '@/components/ui/Button';

export const AdmissionForm = () => {
    return (
        <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
            <h3 className="text-2xl font-bold font-heading mb-6">Admission Enquiry</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Parent Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Child's Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Grade Applying For</label>
                    <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white">
                        <option>Select Grade</option>
                        <option>Nursery</option>
                        <option>Kindergarten</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                        <option>Grade 3</option>
                        {/* Add more grades */}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-700">Academic Year</label>
                    <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white">
                        <option>2025-2026</option>
                        <option>2026-2027</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-700">Message / Queries</label>
                <textarea className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:outline-none h-32" placeholder="Any specific questions?"></textarea>
            </div>

            <Button size="lg" className="w-full md:w-auto">Submit Enquiry</Button>
        </form>
    );
};
