# React Corporate Landing Page Showcase

This repository contains a simplified version of a corporate landing page built with React. It demonstrates best practices in React development, including component structure, state management, responsive design, and integration of third-party libraries.

## Project Overview

This showcase is based on a freelance project developed for a private company. The full project is a corporate web application currently in development. This repository contains simplified and anonymized versions of key components to demonstrate React skills and coding practices.

## Key Features

- Highly responsive design using Tailwind CSS, with careful attention to different screen sizes
- Integration of Swiper for an interactive carousel
- Use of React hooks for state management
- Modular component structure
- Efficient workflow with component spacing managed in the main index file
- Attention to accessibility and performance

## Code Snippet: PillarsSection Component

Below is a simplified version of the PillarsSection component, showcasing the use of Swiper for creating an interactive carousel of organizational pillars and demonstrating responsive design:

```tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Simplified pillars data
const pillars = [
  {
    title: "Leadership",
    image: "/leadership.webp",
    description: "Effective leadership drives organizational success...",
  },
  // ... other pillars
];

const PillarsSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-8 animate-fadeIn">
      <h2 className="text-center text-blue-950 text-2xl md:text-3xl lg:text-4xl my-5 leading-relaxed">
        Our Organizational Pillars
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 15000 }}
        modules={[Pagination, Autoplay]}
        className="max-w-5xl mx-auto"
      >
        {pillars.map((pillar, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="relative w-full h-64 md:h-80 lg:h-96 mb-4 overflow-hidden rounded-lg">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto"
                />
              </div>
              <div className="text-center px-4 md:px-8 lg:px-16">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm md:text-base lg:text-lg">{pillar.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PillarsSection;
```

## Simplified Index File

The main index file demonstrates how component spacing is managed efficiently:

```tsx
import React from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import PillarsSection from "../components/PillarsSection";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header className="z-30" />
      <div className="flex-grow flex flex-col pt-[var(--header-height)] overflow-x-hidden">
        <MainSection className="mt-8 md:mt-11 lg:mt-12 mb-8 md:mb-11 lg:mb-12 py-8" />
        <PillarsSection />
        {/* Other components */}
      </div>
      <Footer className="z-20" />
    </div>
  );
};

export default LandingPage;
```

## Project Structure

The full project follows a modular structure with components organized as follows:

```
src/
  components/
    Header.tsx
    Footer.tsx
    MainSection.tsx
    PillarsSection.tsx
    // ... other components
  pages/
    LandingPage.tsx
  styles/
    globals.css
```

## Best Practices Demonstrated

1. **Responsive Design**: Tailwind CSS classes are used extensively to ensure the layout adapts smoothly to different screen sizes (mobile, tablet, desktop).
2. **Component Modularity**: Each section of the landing page is separated into its own component for better organization and reusability.
3. **Efficient Workflow**: Component spacing is managed directly in the main index file, simplifying individual component logic.
4. **Performance Optimization**: Images are optimized, and components are designed with performance in mind.
5. **Accessibility**: Proper semantic HTML and ARIA attributes are used where necessary to ensure accessibility.
6. **Code Comments**: The original codebase includes comprehensive comments to explain complex logic and component purposes.

## Note on Privacy

This repository contains simplified and anonymized versions of the components. All sensitive information, including client details and specific business logic, has been removed or altered to protect client privacy.

## Summary

This showcase demonstrates proficiency in React development, including component structure, state management, responsive design, and integration of third-party libraries. The code reflects attention to detail, performance considerations, and adherence to modern React best practices, with a particular emphasis on creating a seamless experience across all device sizes.
