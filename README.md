# React Corporate Landing Page Showcase

This repository contains a simplified version of a corporate landing page component built with React. It demonstrates best practices in React development, including component structure, state management, and integration of third-party libraries.

## Project Overview

This showcase is based on a freelance project developed for a private company. The full project is a corporate web application currently in development. This repository contains a simplified and anonymized version of one of the key components to demonstrate React skills and coding practices.

## Key Features

- Responsive design using Tailwind CSS
- Integration of Swiper for an interactive carousel
- Use of React hooks for state management
- Modular component structure
- Attention to accessibility and performance

## Code Snippet: PillarsSection Component

Below is a simplified version of the PillarsSection component, showcasing the use of Swiper for creating an interactive carousel of organizational pillars:

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
      <h2 className="text-center text-blue-950 text-4xl my-5">
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
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto"
                />
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-base">{pillar.description}</p>
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

1. **Component Modularity**: Each section of the landing page is separated into its own component for better organization and reusability.
2. **Responsive Design**: Tailwind CSS classes are used to ensure the layout adapts to different screen sizes.
3. **Performance Optimization**: Images are optimized, and components are designed with performance in mind.
4. **Accessibility**: Proper semantic HTML and ARIA attributes are used where necessary to ensure accessibility.
5. **Code Comments**: The original codebase includes comprehensive comments to explain complex logic and component purposes.

## Note on Privacy

This repository contains a simplified and anonymized version of the component. All sensitive information, including client details and specific business logic, has been removed or altered to protect client privacy.

## Summary

This showcase demonstrates proficiency in React development, including component structure, state management, and integration of third-party libraries. The code reflects attention to detail, performance considerations, and adherence to modern React best practices.
