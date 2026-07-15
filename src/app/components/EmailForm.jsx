"use client";

import { useActionState } from "react";
import { joinWaitlist } from "../actions";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const initialState = {
  success: false,
  message: "",
};

export default function EmailForm() {
  const [state, formAction] = useActionState(
    joinWaitlist,
    initialState
  );

  return (
    <form action={formAction} className="space-y-5">

      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <Button className="w-full">
        Join Waitlist
      </Button>

      {state?.success && (
        <p className="text-green-600 font-semibold">
          {state.message}
        </p>
      )}

    </form>
  );
}