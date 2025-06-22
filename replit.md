# Replit.md

## Overview

This is a full-stack web application built with a modern React + Express architecture. The project features an interactive Apple TV-style card component landing page with a focus on Rive-related content. The application uses TypeScript throughout, shadcn/ui for the component library, and is configured for deployment on Replit with PostgreSQL database support.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with React plugin and runtime error overlay

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL sessions with connect-pg-simple
- **Development**: Hot reloading with tsx

### Key Design Decisions
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Component-First UI**: Leveraging shadcn/ui for consistent, accessible components
- **Modern React Patterns**: Using hooks, context, and concurrent features like startTransition

## Key Components

### Frontend Components
- **AppleTVCard**: Interactive 3D tilt card component with smooth animations
- **shadcn/ui Components**: Comprehensive UI component library including buttons, forms, dialogs, etc.
- **Layout System**: Responsive design with Tailwind CSS

### Backend Services
- **Express Server**: RESTful API server with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database)
- **User Management**: User schema and CRUD operations defined

### Shared Resources
- **Database Schema**: Drizzle schema definitions with Zod validation
- **Type Definitions**: Shared TypeScript types between client and server

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Type-safe responses flow back through the application layers

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production builds
- **vite**: Frontend build tool and dev server

## Deployment Strategy

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Development**: `npm run dev` starts the development server
- **Production Build**: `npm run build` creates optimized bundles
- **Production Start**: `npm run start` runs the production server

### Build Process
1. Vite builds the client-side React application
2. esbuild bundles the server-side Express application
3. Static files are served from the dist/public directory
4. Database migrations can be pushed with `npm run db:push`

### Environment Requirements
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment flag (development/production)

## Changelog

```
Changelog:
- June 22, 2025: Initial setup with React + Express architecture
- June 22, 2025: Implemented Apple TV-style 3D tilt card component
- June 22, 2025: Added Rive branding with custom green gradients (#42A000 to #D4F849)
- June 22, 2025: Integrated floating background animations with Rive logos
- June 22, 2025: Added "Rillic is coming soon" label below card
- June 22, 2025: Finalized spacing (140px bottom gap, 60px card-to-text gap)
- June 22, 2025: Project completed and ready for GitHub deployment
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```