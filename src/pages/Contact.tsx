import ContactForm from "@/components/ContactForm";
import React from "react";

const Contact = () => {
    return (
        <div id="contact">
            <div className="flex justify-center flex-col gap-5 text-center items-center min-h-screen text-white p-4">
                <h2 className="lg:text-[10vw] text-5xl">Contact Me</h2>
                <p className="lg:text-[3vw] text-xl">
                    Let's Build Something{" "}
                    <span className="font-[script] text-primary-orange">
                        Smart
                    </span>
                </p>
                <p className="lg:text-[2vw] hidden lg:block mb-10">
                    Share your idea for web development or AI engineering.
                </p>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
