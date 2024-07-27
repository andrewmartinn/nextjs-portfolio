"use server";

import React from "react";

import ContactFormEmailTemplate from "@/email/ContactFormEmailTemplate";
import { getErrorMessage, validateFormData } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateFormData(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateFormData(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "avm.andrewmartin@gmail.com",
      subject: "Contact form submission",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmailTemplate, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
}
