"use server";

import { contactFormSchema, type ContactFormValues } from "../../schemas/contact-form-schema";

export async function sendEmailAction(values: ContactFormValues) {
  // Validate the data
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { fullName, email, service, message } = validatedFields.data;

  // NOTE: In a pure Vite project, "use server" actions don't run on a server.
  // This would typically be an API call to a real backend.
  // For now, we simulate a successful response to allow the UI to function.
  console.log("Form submission received (Simulated):", { fullName, email, service, message });

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "We've received your message and will get back to you soon. (Simulation)",
  };
}
