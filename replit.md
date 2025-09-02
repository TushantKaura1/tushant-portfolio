# Overview

This is a full-stack web application built as a personal portfolio/resume website for Tushant Kaura. The application showcases a modern, animated portfolio with sections for about, timeline/experience, projects, achievements, and contact information. It's built using a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and TypeScript using Vite as the build tool. It follows a component-based architecture with:
- **UI Framework**: React with wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting dark mode by default
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable UI components
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Animations**: GSAP (GreenSock Animation Platform) for smooth animations and scroll-triggered effects throughout the portfolio sections
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
The backend uses Express.js with TypeScript in a minimalist approach:
- **Framework**: Express.js with middleware for JSON parsing, CORS handling, and request logging
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **API Design**: RESTful API structure with routes prefixed under `/api`
- **Development Setup**: Vite integration for hot module replacement in development mode

## Database Schema
The application uses PostgreSQL with Drizzle ORM for type-safe database operations:
- **Users Table**: Basic user schema with id (UUID), username, and password fields
- **Schema Validation**: Zod schemas for runtime type validation of database inputs
- **Migrations**: Drizzle Kit for database migrations and schema management

## Development Setup
- **Monorepo Structure**: Organized with separate `client/`, `server/`, and `shared/` directories
- **Build Process**: Vite for frontend bundling, esbuild for backend compilation
- **TypeScript Configuration**: Shared TypeScript config with path mapping for clean imports
- **Development Tools**: Hot reload support, error overlays, and development banners for Replit environment

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database using @neondatabase/serverless driver
- **Connection Management**: PostgreSQL session store with connect-pg-simple for session persistence

## UI and Animation Libraries
- **Radix UI**: Complete suite of unstyled, accessible UI primitives including dialogs, dropdowns, tooltips, and form controls
- **GSAP**: Professional-grade animation library for complex animations and scroll-triggered effects
- **Lucide React**: Icon library for consistent iconography throughout the application
- **Embla Carousel**: Lightweight carousel library for responsive image/content sliders

## Development and Build Tools
- **Vite**: Fast build tool with plugins for React, error overlays, and Replit integration
- **Tailwind CSS**: Utility-first CSS framework with PostCSS for processing
- **Drizzle Kit**: Database toolkit for migrations, introspection, and schema management
- **TSX**: TypeScript execution environment for running server code in development

## Utility Libraries
- **date-fns**: Modern date utility library for date formatting and manipulation
- **clsx & tailwind-merge**: Class name utilities for conditional styling
- **nanoid**: Secure URL-friendly unique ID generator
- **zod**: TypeScript-first schema validation library