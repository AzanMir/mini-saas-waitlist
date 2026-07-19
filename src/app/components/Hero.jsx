import WaitlistModal from "./WaitlistModal";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-300 via-indigo-800 to-indigo-900 flex items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        <Badge className="mb-6 px-5 py-3 text-base rounded-full">
          🚀 Launching Soon
        </Badge>

        <h1 className="text-6xl font-extrabold text-white leading-tight">
          Build Your Startup
          <br />
          Before Everyone Else.
        </h1>

        <p className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto">
          Join thousands of founders waiting for the next-generation SaaS platform.
          Early members receive lifetime discounts and exclusive access.
        </p>

        <div className="mt-10">
          <WaitlistModal />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition">

            <h3 className="text-white text-xl font-bold">
              Fast Setup
            </h3>

            <p className="text-gray-300 mt-3">
              Launch your SaaS in minutes instead of weeks.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition">

            <h3 className="text-white text-xl font-bold">
              AI Powered
            </h3>

            <p className="text-gray-300 mt-3">
              Automate your workflow using smart AI tools.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:scale-105 transition">

            <h3 className="text-white text-xl font-bold">
              Secure
            </h3>

            <p className="text-gray-300 mt-3">
              Enterprise-level security with modern architecture.
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}