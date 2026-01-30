export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center w-full px-4 sm:px-6 md:px-0">
      {/* Main Heading */}
      <h1
        className="mb-6 sm:mb-7 md:mb-8 max-w-7xl text-center text-white text-3xl sm:text-4xl md:text-5xl"
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 5vw, 68px)",
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
        }}
      >
       <span className="text-[#00786F]">Mait</span> Club Improve Your Game With Video Analysis
      </h1>

      {/* Subheading */}
      <h2 className="mb-4 sm:mb-5 md:mb-6 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-[#D1D5DC]">
        Upload. Get AI Feedback. Train Smarter.
      </h2>

      {/* Description */}
      <p className="mb-8 sm:mb-10 md:mb-12 max-w-2xl text-center text-sm sm:text-base md:text-lg leading-relaxed text-[#99A1AF]">
        Upload a short video clip and get instant AI-powered feedback along with
        a personalized training plan.
      </p>
    </div>
  );
}
