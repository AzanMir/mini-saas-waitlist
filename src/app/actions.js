"use server";

export async function joinWaitlist(formData) {
  const email = formData.get("email");

  console.log("New Waitlist Signup:", email);

  return {
    success: true,
    message: "You're officially on the waitlist!"
  };
}