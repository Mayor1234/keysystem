# JVAC Test Project

## Overview

This test project is a solution that demonstrates proficiency in building a scalable, maintainable, efficient, and modern responsive UI application. The solution follows best practices in software development, including simplicity and modular design.

## Tech Stack

- **Language:** Javascript
- **Framework:** React.js (TypeScript)
- **Styling:** TailwindCSS
- **Animation:** Framer Motion

### Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- npm (Node Package Manager)

### Installation

```sh
# Clone the repository
git clone https://github.com/Mayor1234/keysystem.git
cd keysystem

# Install dependencies
Install the project dependencies using npm:
npm install

# Start the server
npm run dev
```

## Detailed Approach to Redesigning KeySystem Landing Page

This guide covers a structured approach to redesigning an homepage that is capable of increasing user retention by 80%.

### **Step 1: Set Up React Vite With Dependencies**

Vite is an opinionated build tool that aims to provide a faster and leaner development experience for modern web projects.

#### Install Dependencies

- npm create vite@latest keysystem -- --template React-ts
- npm install tailwindcss @tailwindcss
- npm install @reduxjs/toolkit react-redux framer-motion
- npm install react-icons

### ** Objective**

The objective of redesigning a landing page is more than just "making it look better." It’s about aligning design with business goals, user expectations, and modern UI/UX standards.

- Improve Conversion Rate

  - Primary Goal: Turn more visitors into users/customers.
  - Achieved by: better CTAs, clearer value props, faster load times, and reduced friction.

- Modernize Visual Design

  - Keep up with design trends and brand identity evolution
  - Make the experience feel fresh, clean, and trustworthy

- Enhance User Experience (UX)

  - Simplify navigation and improve content flow
  - Optimize for mobile, dark mode, accessibility (WCAG)

- Improve Performance
  - Optimize for speed and SEO

### ** Steps To Implement KeySystem Tecnonology Lnanding Page**

- Design Structure
  - Decide on your layout sections:
    1.  Header Section
    2.  Hero Section
    3.  Partner Logos Section
    4.  Trusted Consultant Section
    5.  Our Offering Section
    6.  What We Represent Section (Vision and Mission) Section
    7.  Compliance And Certifications Section
    8.  They Trust Us section
    9.  Our Process Section
    10. Our Partners Section
    11. Get Started Section
    12. Footer Section

### **2. Approach For Header Component Section**

### ** Objective**

The objective of the header section is to create a responsive navigation menu that fits perfectly on all devices.

### ** Steps to Implement Header Section**

#### **Build the UI with TailwindCSS**

- Create Header component file in the src folder
- Arrange the menu and logo using `flex` for horizontal layout.
- Import react-icon where necessary
- Style active and hover menu item using smooth animation with `border bottom`.
- Make the navigation responsive by replacing menu item by hidding with an hamburger icon on smaller devices
- Animate the menu items when the hambugger menu icon is toggled.

### **3. Approach For Hero Component Section**

### ** Objective**

The Hero section objective is to create a background and two buttons with a `linear gradient` effects and place the mesh grid in between the background and the text using CSS properties such as `z-index`.

- What your product does
- Who it’s for
- Why it matters

### ** Steps to Implement Hero Section**

#### **Build the UI with TailwindCSS**

- Create the Hero component in the src folder
- Add background effects using TailwindCss gradient property
- Add buttons and animate the buttons using linear gradient property
- make it responsive by reducing the text-sizes and font weight on smaller devices
- make the buttons resuable by extracting it into custom Button component.

### **4. Approach For Partner Logos Section**

### ** Objective**

The objective of the Partner Logos section is to render list of parner logos horizontally and make the logos smoothly move infinitely, and ensures the component is fully responsive.

### ** Steps to Implement Partner Logos Section**

#### **Build the UI with TailwindCSS**

- Create the TrustedBy component file in the src folder
- Add background effects using TailwindCss gradient property
- Import all the company logos in a constant file
- map all the file and render them in card component
- Use framer motion to add smooth infinite autoplay to all the images
- Use `useEffect()` hook to add Start scrolling on mount
- Create two callback functions to handle when mouse enter to halt the play and on leave
- Use framer motion to add smooth effect when the component is in view
- make it responsive by reducing the text-sizes and font weight on smaller devices

### **5. Approach For Trusted Consultant Section**

### ** Objective**

The objective is to add the visual image and position the mesh grid in between the `conic-gradient` background effects and and make the compoent fully responsive.

### ** Steps to Implement Trusted Consultant Section**

#### **Build the UI with TailwindCSS**

- Create the Trusted Consultant component file in the src folder
- Add background effects using TailwindCss gradient property
- Import all the visual image in the consultant comonent by adding it in an `img` tag
- Add `background image properties` and `z-index` to postion the mesh grid in between the background and the text/image
- Use framer motion to add smooth effect when the component is in view
- make it responsive by reducing the text-sizes and font weight on smaller devices

### **6. Approach For What We Represent Section**

### ** Objective**

The What We Represent Section objective is to create a gradient background effect and render two cards (Our vision and Our mission) with a neon border that fades inward at the side of both cards.

### ** Steps to What We Represent Section**

#### **Build the UI with TailwindCSS**

- Create the WhatWeRepresent component file in the src folder
- Add background effects using TailwindCss gradient property
- Import all the visual image in the WhatWeRepresent component by adding it in `img` tags
- Create a parent card with a back of neon and place the child card ontop of it.
- Use padding 1px on the parent component to create the border on the child component.
- Use linear gradient properties to fade the both side of the card
- Use framer motion to add smooth effect when the component is in view
- Make it responsive by reducing the text-sizes and font weight on smaller devices

### **7. Approach For Our Offering Section**

### ** Objective**

The Our Offering objective is to create a gradient background effect and render 9 buttons with different background colors and borders. With a particular border color, fades bottom of the bottons.

### ** Steps to Our Offering Section**

#### **Build the UI with TailwindCSS**

- Create the Our OurOffering component file in the src folder
- Add background effects using TailwindCss gradient property
- Create buttons and different background color
- Use border top 2px, border left and right 1px and border bottom 1px
- Use linear gradient properties to fade the bottom of the buttons
- Use framer motion to add smooth effect when the component is in view
- Make it responsive by reducing the text-sizes and font weight on smaller devices
