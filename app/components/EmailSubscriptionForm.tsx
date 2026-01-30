"use client";

import { useState } from "react";

export default function EmailSubscriptionForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    // Add your subscription logic here
    setEmail("");
  };

  return (
    <div className="w-full flex flex-col items-center mt-8 sm:mt-10 md:mt-4 px-4 sm:px-6 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-267.75 flex-col items-center gap-4 sm:gap-5 md:gap-6 sm:flex-row sm:justify-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="h-14 sm:h-17 md:h-19.5 w-full rounded-[10px] bg-[#0A0A0A] text-base sm:text-lg text-white placeholder-white/50 outline-none border border-[#1E2939] backdrop-blur-xl transition-all duration-300 focus:border-[#00786F] sm:flex-1 sm:max-w-[872px]"
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        />

        <button
          type="submit"
          className="h-14 sm:h-17 md:h-19.5 w-full whitespace-nowrap rounded-[10px] bg-[#00786F] px-6 sm:px-7 md:px-8 text-base sm:text-lg font-bold text-white shadow-xl shadow-[#00786F]/20 transition-all duration-300 hover:bg-[#009688] hover:shadow-2xl hover:shadow-[#00786F]/40 hover:-translate-y-0.5 sm:w-[175px]"
        >
          Subscribe
        </button>
      </form>

      {/* Spam Notice */}
      <p className="mt-4 sm:mt-5 md:mt-6 text-center text-xs sm:text-sm font-medium text-white/60">
        No spam. Only launch updates.
      </p>
    </div>
  );
}
