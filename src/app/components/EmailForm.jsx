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
  const [state, formAction, pending] = useActionState(
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
        disabled={pending}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit();
          }
        }}
      />

      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? "Joining..." : "Join Waitlist"}
      </Button>

      {state?.message && (
        <p
          className={
            state.success
              ? "text-green-600 font-semibold"
              : "text-destructive font-semibold"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
