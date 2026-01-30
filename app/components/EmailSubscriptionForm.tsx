/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function EmailSubscriptionForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscribers/subscribe/`, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Successfully subscribed! Check your email.", {
          position: "top-right",
          autoClose: 3000,
        });
        setEmail("");
        setSubscribed(true);
      } else {
        const errorData = await response.json();
        // Check if email already exists
        const errorMessage = errorData.email 
          ? "This email is already subscribed!" 
          : errorData.message || "Subscription failed. Please try again.";
        
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("Network error. Please check your connection.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          className="h-14 sm:h-17 md:h-19.5 w-full whitespace-nowrap rounded-[10px] bg-[#00786F] px-6 sm:px-7 md:px-8 text-base sm:text-lg font-bold text-white shadow-xl shadow-[#00786F]/20 transition-all duration-300 hover:bg-[#009688] hover:shadow-2xl hover:shadow-[#00786F]/40 hover:-translate-y-0.5 sm:w-[175px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Spam Notice / Success Message */}
      {subscribed ? (
        <p className="mt-4 sm:mt-5 md:mt-6 text-center text-xs sm:text-sm font-medium text-[#00786F] animate-pulse">
          ✓ Successfully subscribed! Check your inbox.
        </p>
      ) : (
        <p className="mt-4 sm:mt-5 md:mt-6 text-center text-xs sm:text-sm font-medium text-white/60">
          No spam. Only launch updates.
        </p>
      )}
    </div>
  );
}
