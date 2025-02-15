"use client";

import sendEmail from "@/actions/sendEmail";
import { useInSectionView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import FormSubmitButton from "./FormSubmitButton";
import SectionHeading from "./SectionHeading";

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
      <p className="-mt-6 text-gray-700 dark:text-white/80">
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
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          name="senderEmail"
          placeholder="Your email"
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="borderBlack my-3 h-52 rounded-lg p-4 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          required
          maxLength={5000}
        />
        <FormSubmitButton />
      </form>
    </motion.section>
  );
}
