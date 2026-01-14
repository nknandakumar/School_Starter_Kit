import { SectionHeader } from '@/components/ui/SectionHeader';
import { AdmissionForm } from '@/forms/AdmissionForm';
import { CheckCircle } from 'lucide-react';

const steps = [
    { title: 'Enquiry', desc: 'Submit the online enquiry form or visit the school office.' },
    { title: 'Campus Visit', desc: 'Schedule a tour to experience our facilities and environment.' },
    { title: 'Application', desc: 'Purchase and submit the application form with documents.' },
    { title: 'Assessment', desc: 'Student interaction/test to understand learning level.' },
    { title: 'Admission', desc: 'Pay the fees to confirm the seat.' },
];

export default function AdmissionsPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold">Admissions</h1>
                    <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
                        Join our family. We welcome students from all backgrounds.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Process Side */}
                        <div>
                            <SectionHeader title="Admission Process" align="left" subtitle="A simple 5-step journey to join GEMS Academy." />

                            <div className="space-y-8 relative">
                                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-neutral-100" />
                                {steps.map((step, idx) => (
                                    <div key={idx} className="relative flex gap-6">
                                        <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold z-10 shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-neutral-900 mb-1">{step.title}</h4>
                                            <p className="text-neutral-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-neutral-50 p-6 rounded-xl border border-neutral-100">
                                <h4 className="font-bold mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary" /> Required Documents
                                </h4>
                                <ul className="space-y-2 text-sm text-neutral-600 list-disc list-inside">
                                    <li>Birth Certificate</li>
                                    <li>Previous School Report Card</li>
                                    <li>Passport Size Photographs (4)</li>
                                    <li>Aadhar Card / ID Proof</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div>
                            <AdmissionForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
