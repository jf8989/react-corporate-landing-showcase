import React from "react";
import Header from "../components/Header";
import ImageBackground from "../components/ImageBackground";
import MainSection from "../components/MainSection";
import ClientLogos from "../components/ClientLogos";
import AboutUs from "../components/AboutUs";
import PillarsSection from "../components/PillarsSection";
import Footer from "../components/Footer";

/**
 * LandingPage Component
 * 
 * This component serves as the main layout for the corporate landing page.
 * It orchestrates various sections and manages the overall structure and spacing.
 * 
 * Key features:
 * - Responsive design using Tailwind CSS
 * - Modular component structure for easy maintenance and scalability
 * - Efficient management of component spacing and layout
 */
const LandingPage: React.FC = () => {
  return (
    // Main container with flex column layout and full minimum height
    <div className="flex flex-col min-h-screen relative bg-white">
      {/* Header component with high z-index for proper layering */}
      <Header className="z-30" />

      {/* Background image component
          Fixed positioning creates a parallax-like effect */}
      <ImageBackground 
        className="fixed top-0 left-0 w-full h-full" 
        style={{ zIndex: -1 }} 
      />

      {/* Main content container
          Uses flex-grow to fill available space and manage child component layout */}
      <div className="flex-grow flex flex-col relative z-10 pt-[var(--header-height)] overflow-x-hidden">
        {/* MainSection component
            Responsive margin and padding classes ensure proper spacing across devices */}
        <MainSection className="mt-8 md:mt-11 lg:mt-12 mb-8 md:mb-11 lg:mb-12 py-8" />

        {/* ClientLogos component
            Full width to accommodate logo display */}
        <ClientLogos className="w-full" title="Our Clients" />

        {/* AboutUs component
            Responsive padding for better readability on different devices */}
        <AboutUs className="w-full p-4 md:p-8" />

        {/* PillarsSection component
            Showcases key organizational values or services */}
        <PillarsSection className="w-full" />
      </div>

      {/* Footer component
          Z-index ensures it stays above the background but below the header */}
      <Footer className="z-20" />
    </div>
  );
};

export default LandingPage;
