"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import EmailForm from "./EmailForm";

export default function WaitlistModal() {
  return (
    <Dialog>

      <DialogTrigger asChild>

        <Button
          size="lg"
          className="rounded-full px-10 py-7 text-lg"
        >
          Join Waitlist
        </Button>

      </DialogTrigger>

      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <DialogTitle className="text-2xl">
            Join Our Waitlist
          </DialogTitle>

        </DialogHeader>

        <EmailForm />

      </DialogContent>

    </Dialog>
  );
}