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

## Commit History

Below is a complete list of all commits made during the development of this project:

1. [Initial commit](https://github.com/Off-Grid-Dev/SemesterProject2/commit/dad3f8604555024426791930708279fcd5ee9a7e) - Initial repository setup
2. [Initialize project with TypeScript, Vite, and Tailwind CSS setup](https://github.com/Off-Grid-Dev/SemesterProject2/commit/97117dc4fa6070a42c6e1e88f174da4431f42a44) - Created package.json with necessary scripts and dependencies
3. [Fixed positioning mistake](https://github.com/Off-Grid-Dev/SemesterProject2/commit/98c18b31a4508be38f4848b905607c3b1c92645a) - Fixed silly positioning error
4. [Set up routing for first two pages](https://github.com/Off-Grid-Dev/SemesterProject2/commit/40303416f84a5aeadf607aad6cf416df5caa1c47) - Initial routing setup
5. [Initial setup of first component and component base abstract](https://github.com/Off-Grid-Dev/SemesterProject2/commit/626103dd2328ab1cad60737701804b2766e9326f) - Component architecture setup
6. [Centered content on home screen](https://github.com/Off-Grid-Dev/SemesterProject2/commit/788e5c65257790919cd2ff9b4a496913df727662) - UI improvement
7. [Testing setup of login/register component](https://github.com/Off-Grid-Dev/SemesterProject2/commit/669f762824a065d1425b2102c8f0fb0ef7aa7dd6) - Component testing
8. [Initial setup of ComponentBase and starting code of Card.ts component](https://github.com/Off-Grid-Dev/SemesterProject2/commit/62ef04dd91485d9ebf5deecf92035b03b261a86a) - Card component foundation
9. [Update Card.ts](https://github.com/Off-Grid-Dev/SemesterProject2/commit/5172f8db59048bff23607f689d81dea8977de119) - Card component update
10. [Initial setup and fix of Card.ts to test tailwind styles](https://github.com/Off-Grid-Dev/SemesterProject2/commit/28f5f7419399403546a5bc6c660f87ca5b022b2b) - Tailwind integration testing
11. [Injected custom card component into home.ts](https://github.com/Off-Grid-Dev/SemesterProject2/commit/07ad8848f0f3a3e2e512c3ba86bc008237fce490) - Card integration
12. [Imported card component to main.ts file to be available globally](https://github.com/Off-Grid-Dev/SemesterProject2/commit/8baa373cb81409123a39f3c0656d9eca9a2266b9) - Global card component
13. [Removed unnecessary cdn link to tailwind](https://github.com/Off-Grid-Dev/SemesterProject2/commit/66296f3eb96bb1e87112fe69dcc28075dd4580bf) - Cleanup
14. [Setting up login/register div on home/landing page](https://github.com/Off-Grid-Dev/SemesterProject2/commit/18e9d3949002a08313864db93ec7475f3c7704fb) - Login/register UI
15. [Removed shadowRoot to apply tailwind classes](https://github.com/Off-Grid-Dev/SemesterProject2/commit/31a024b90edd495207e52fc23b75206895f7ccba) - Component architecture change
16. [Attempted to get formatting to work properly in template literals](https://github.com/Off-Grid-Dev/SemesterProject2/commit/b47cb25626f2a715212a862db1822f85baa9fc57) - Formatting improvements
17. [Changed id of div for clarity](https://github.com/Off-Grid-Dev/SemesterProject2/commit/a158cb3da42be91dcf82d01df847c078ae65caca) - Code cleanup
18. [Initial setup of dog grid](https://github.com/Off-Grid-Dev/SemesterProject2/commit/d0b8e25137565f71a006a821605dacddf5f2fa0a) - Dogs listing page
19. [Added linkup to individual page](https://github.com/Off-Grid-Dev/SemesterProject2/commit/9b476a524a387bb5286b56fbcc70d39b7e796cbd) - Navigation setup
20. [Removed slot](https://github.com/Off-Grid-Dev/SemesterProject2/commit/6fee40e9b7881fb6eab706dbbda74cc2127f419b) - Component cleanup
21. [Removed event argument](https://github.com/Off-Grid-Dev/SemesterProject2/commit/63906517d1a51de1a2d53235aaada33f1a58159e) - Code cleanup
22. [Added details section to individual animal page](https://github.com/Off-Grid-Dev/SemesterProject2/commit/828b27de5bb3df30e5ff5572ae8cc156445f43c3) - Pet details enhancement
23. [Implemented wrapper component to constrain content width](https://github.com/Off-Grid-Dev/SemesterProject2/commit/a9acf4c8352e66fe1215356a2c3d00eed56b242c) - Responsive layout
24. [Imported wrapper component](https://github.com/Off-Grid-Dev/SemesterProject2/commit/896e9deed883dfdba5fc32347e1a6e548054e40f) - Component integration
25. [Do not clear previous content in wrapper](https://github.com/Off-Grid-Dev/SemesterProject2/commit/4e57a908799a2071176819d4fe28256ca9d7e5f4) - Component behavior fix
26. [Echo](https://github.com/Off-Grid-Dev/SemesterProject2/commit/62b2360c1f1b0f8551e9ff1b952242a01d0b01ad) - Testing
27. [Implemented header on all current pages](https://github.com/Off-Grid-Dev/SemesterProject2/commit/cae6f87f1e70af06006fc9fdadcc4125738ded5e) - Header component integration
28. [Import Header component to main.ts](https://github.com/Off-Grid-Dev/SemesterProject2/commit/0c61686a892fc4e0643396128ecfc229724f85a8) - Global header
29. [Created header component](https://github.com/Off-Grid-Dev/SemesterProject2/commit/adc1e95da80b01d299e66851e44f017dff4c498a) - Header component
30. [Implemented theme colors](https://github.com/Off-Grid-Dev/SemesterProject2/commit/add6c08a2be8cac91e36df12156172a47438bb3f) - Theming
31. [Removed bg](https://github.com/Off-Grid-Dev/SemesterProject2/commit/65d054cea852334268845854b238a6138e15076a) - Style cleanup
32. [Updated version](https://github.com/Off-Grid-Dev/SemesterProject2/commit/8a3e7dad033a277da5d5321556109a390cc4732a) - Version bump
33. [Linting and formatting](https://github.com/Off-Grid-Dev/SemesterProject2/commit/7d15673528aa300326bdf486188e7af54d7b6905) - Code quality
34. [Updated readme](https://github.com/Off-Grid-Dev/SemesterProject2/commit/2f370f3efd3dac2f34b66f0201244fd17a1c0748) - Documentation update
35. [Fixed typescript build errors](https://github.com/Off-Grid-Dev/SemesterProject2/commit/5ada1c48e5dadc10d1795cd2407bba0e3b981a00) - Build fixes
36. [Added redirects to allow for all html pages to be included](https://github.com/Off-Grid-Dev/SemesterProject2/commit/5790e6ecb42b6dc9cc7925e5105879c788b3c603) - Deployment configuration

## How to Run Locally

1. Clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## License

MIT
