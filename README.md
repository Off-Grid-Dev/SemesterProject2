# Pet Adoption Web Application

## Overview

This project is a responsive web application for a pet adoption organization, built as a semester project for Noroff. The platform allows users to browse pets available for adoption, view detailed information, and enables admins to manage pet listings. The application is built with TypeScript, vanilla JavaScript, and Tailwind CSS, and interacts with a REST API for all pet and user data.

## Features

- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS and custom components.
- **Pets Listing Page**: Browse a grid of available pets, with search and filter functionality.
- **Pet Details Page**: View detailed information about each pet, including breed, age, size, color, description, and owner info. Shareable URLs for each pet.
- **Admin Functionality**: Register, log in, add, edit, and delete pet listings (admin-only pages).
- **Accessibility**: Follows universal design guidelines for accessible navigation, color contrast, and keyboard usability.
- **API Integration**: All pet and user data is fetched and managed via the official Noroff Pet Adoption API.
- **Custom Elements**: Uses web components for reusable UI (e.g., Card, Wrapper, Header).
- **Linting & Formatting**: ESLint and Prettier are used for code quality and consistency.

## Tech Stack

- **Languages**: TypeScript, JavaScript
- **CSS Framework**: Tailwind CSS v4
- **Build Tool**: Vite
- **Hosting**: Suitable for GitHub Pages, Netlify, or Vercel

## Project Structure

- `src/` — All source code
  - `components/` — Custom elements (Header, Card, Wrapper, etc.)
  - `pages/` — Page logic for each route (home, dogs, dog details, etc.)
  - `api/` — API endpoint and fetch logic
  - `style.css` — Tailwind and custom theme setup
- `index.html`, `dogs.html`, `dog.html` — Main entry points for the app

## Pages & User Stories

### Pets Listing Page (`/index.html`)

- View a grid of available pets
- Click a pet to view more details
- Search for a pet (not yet)

### Specific Pet Page (`/dog.html`)

- View all details about a pet
- Shareable URL for each pet

### Create/Edit Pet Pages (Admin Only)

- Add, edit, or delete pets (requires login) (not finished)

### Account Pages

- Register and log in as admin (not finished)

## Accessibility & Universal Design

- Semantic HTML and ARIA roles
- Keyboard navigation and focus styles
- Sufficient color contrast and readable fonts
- Responsive layout for all devices

## Development Process

- Planned and tracked using GitHub Projects
- UI designed in Figma
- Code quality enforced with ESLint and Prettier
- Deployed to a static host

## How to Run Locally

1. Clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## License

MIT
