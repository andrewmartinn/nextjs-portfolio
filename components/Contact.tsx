"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInSectionView } from "@/lib/hooks";
import sendEmail from "@/actions/sendEmail";
import FormSubmitButton from "./FormSubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useInSectionView("Contact");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:avm.andrewmartin@gmail.com" className="underline">
          avm.andrewmartin@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent sucessfully");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          className="borderBlack h-14 rounded-lg px-4"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="borderBlack my-3 h-52 rounded-lg p-4"
          required
          maxLength={5000}
        />
        <FormSubmitButton />
      </form>
    </motion.section>
  );
}
