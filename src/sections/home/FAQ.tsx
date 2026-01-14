"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b", className)}
        {...props}
    />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0 text-neutral-600", className)}>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqs = [
    {
        question: "What is the admission process?",
        answer: "Admissions are open for the upcoming academic year. The process involves an online enquiry, campus visit, and a brief interaction with the academic coordinator. You can fill out the form online to get started."
    },
    {
        question: "Is transport facility available?",
        answer: "Yes, we provide GPS-enabled bus transport covering all major routes within a 15km radius of the school campus. All buses have female attendants for safety."
    },
    {
        question: "What is the student-teacher ratio?",
        answer: "We maintain a strict 15:1 student-teacher ratio to ensure personalized attention and effective learning for every child."
    },
    {
        question: "Does the school offer extracurricular activities?",
        answer: "Absolutely! We have a robust co-curricular program including sports (cricket, football, basketball), swimming, music, dance, robotics, and debating."
    }
];

export const FAQ = () => {
    return (
        <section className="py-20 bg-neutral-50 mb-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <SectionHeader title="Frequently Asked Questions" subtitle="Find answers to common queries." />

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-left text-lg font-medium text-neutral-800">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
