# NestJS Starter Project

This NestJS starter project serves as a robust foundation for building scalable and maintainable backend applications. It incorporates best practices, essential modules, and configurations to jumpstart your development process.

## Features

- **Enhanced TypeScript Configuration**: Improved `tsconfig.json` for stricter type checking and better developer experience.
- **Environment Configuration**: Utilizes `ConfigModule` for managing environment variables, including Jest setup.
- **Consistent HTTP Responses**: Enforces a standardized structure for all HTTP responses.
- **Basic HTTP Security**: Implements essential security measures to protect your application.
- **Request Validation**: Incorporates whitelisted validation for incoming requests.
- **Advanced Logging**: Utilizes Winston for comprehensive logging capabilities.
- **Database Setup**: Docker Compose configuration for PostgreSQL and Redis.
- **ORM Integration**: Prisma setup for efficient database interactions.
- **Caching Solution**: Redis integration with a CacheService for improved performance.
- **Testing Framework**: Jest configuration with environment variable support.
- **CI Pipeline**: GitHub Actions setup for continuous integration.

## Core Module

The Core Module (`CoreModule`) serves as the central hub for essential application-wide services and configurations. It includes:

- Global exception filters
- Interceptors for response transformation
- Logging service
- Caching service
- Database module

When extending core functionality, consider adding services or providers to this module if they are required application-wide.

## Logging

This starter uses Winston for advanced logging capabilities. The `LoggerService` in the Core Module provides:

- Customizable log formats for different environments
- Log levels (error, warn, info, debug, verbose)
- Context-based logging
- Metadata support for detailed log entries

To use the logger in your services or controllers, inject the `LoggerService` and utilize its methods for consistent logging across your application.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/jfjuanmiguel/nestjs-starter.git
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Set up your environment variables:
   Copy `.env.example` to `.env` and fill in the required values.

4. Start the development server:
   ```
   pnpm start:dev
   ```

## Common Commands

- `pnpm start`: Start the application
- `pnpm start:dev`: Start the application in watch mode
- `pnpm test`: Run unit tests
- `pnpm test:e2e`: Run end-to-end tests
- `pnpm lint`: Lint the codebase
- `pnpm build`: Build the application
- `pnpm db:migrate:dev`: Run database migrations for development
- `pnpm db:migrate:prod`: Run database migrations for production
