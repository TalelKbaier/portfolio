# Overview

This project is a modern Angular portfolio website for a Cloud Engineer & Web Developer. It showcases professional experience, technical skills, projects, and contact information through an interactive and visually appealing single-page application. The portfolio features bilingual support (French/English), dark/light theme switching, smooth animations, and responsive design to provide an engaging user experience across all devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application is built using **Angular 20** with a component-based architecture following Angular best practices. The main structure consists of:

- **App Component**: Root component that manages theme and language initialization
- **Feature Components**: Modular sections (Header, Home, About, Skills, Experience, Projects, Contact)
- **Services Layer**: Centralized business logic for theme management and translations
- **Assets Structure**: Organized i18n files for multilingual support

## Design Patterns
- **Service-Oriented Architecture**: Core functionality separated into injectable services (ThemeService, TranslationService)
- **Component Communication**: Services use RxJS BehaviorSubjects for reactive state management
- **Modular Design**: Each portfolio section is an independent, reusable component

## State Management
- **Theme State**: Managed through ThemeService with localStorage persistence and system preference detection
- **Language State**: Handled by TranslationService with JSON-based translation files
- **Reactive Updates**: All state changes propagated via Observable streams

## UI/UX Design
- **Responsive Layout**: Mobile-first approach with CSS Grid and Flexbox
- **Animation System**: Integrated AOS (Animate On Scroll) library for smooth scroll-triggered animations
- **Theme System**: CSS custom properties for seamless dark/light mode switching
- **Typography**: Google Fonts (Inter) for consistent, modern appearance

## Navigation & Routing
- **Single Page Application**: Smooth scroll navigation between sections using anchor links
- **Dynamic Menu**: Mobile-responsive hamburger menu with active state management
- **Scroll Behavior**: Custom smooth scrolling implementation with scroll-to-top functionality

# External Dependencies

## Core Framework
- **Angular 20**: Primary framework for component-based architecture
- **RxJS 7.8**: Reactive programming for state management
- **TypeScript 5.9**: Type-safe development environment

## Build & Development Tools
- **Webpack 5**: Module bundling and build optimization
- **Angular CLI**: Development server and build tooling
- **Angular DevKit**: Build system and development utilities

## UI Libraries & Styling
- **Font Awesome 6.4**: Icon library for consistent iconography
- **Google Fonts (Inter)**: Modern typography system
- **Material Icons**: Additional icon set for UI elements
- **Angular Material 17**: UI component library (prebuilt themes)

## Animation & Interactions
- **AOS (Animate On Scroll)**: Scroll-triggered animations for enhanced user experience
- **Angular Animations**: Built-in animation system for component transitions

## Development Dependencies
- **Node.js Types**: TypeScript definitions for Node.js environment
- **TSLib**: TypeScript runtime library
- **Zone.js**: Angular change detection mechanism

## Browser Compatibility
- **Modern ES6+ Support**: Targeting current browser standards
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: For dynamic theming capabilities

The application is designed as a static frontend that can be easily deployed to any web hosting platform or CDN, with all functionality contained within the client-side Angular application.