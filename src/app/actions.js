"use server";

import { sendWaitlistConfirmation } from "@/lib/email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(prevState, formData) {
  const email = formData.get("email")?.toString().trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  try {
    await sendWaitlistConfirmation(email);
  } catch (error) {
    console.error("Waitlist email failed:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Could not send confirmation email. Please try again.",
    };
  }

  console.log("New Waitlist Signup:", email);

  return {
    success: true,
    message: "You're on the waitlist! Check your inbox for confirmation.",
  };
}
