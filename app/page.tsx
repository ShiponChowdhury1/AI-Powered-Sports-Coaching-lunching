import EarlyAccessBadge from "./components/EarlyAccessBadge";
import EmailSubscriptionForm from "./components/EmailSubscriptionForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/background/background.png')`,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 120, 111, 0.2) 0%, rgba(0, 60, 55, 0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between px-6 py-8 sm:py-12 md:py-16 sm:px-6 md:px-8">
        <div className="flex w-full max-w-6xl flex-col items-center flex-1 justify-center">
          
          {/* Early Access Badge */}
          <EarlyAccessBadge />

          {/* Hero Section with Heading, Subheading & Description */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <HeroSection />
          </div>

          {/* Email Subscription Form */}
          <EmailSubscriptionForm />

        </div>

        {/* Footer - Pushed to Bottom */}
        <div className="w-full flex justify-center pb-4 sm:pb-6 md:pb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}
