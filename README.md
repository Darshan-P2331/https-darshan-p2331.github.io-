# Darshan P - Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Personal portfolio for **Darshan P**, a Full Stack Developer and AI Integrator. The site presents experience in AI-powered document processing and data engineering alongside selected software projects.

The experience is a responsive single-page application with a floating section-aware navigation pill, dark mode by default, light mode support, and subtle Framer Motion interactions.

## Features

- Responsive hero, experience, skills, projects, and contact sections
- Light and dark themes with a persistent theme toggle
- Smooth scrolling navigation with an active-section indicator
- Project links, social profiles, and accessible interactive controls
- Static export support for GitHub Pages and other static hosts

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router and static export
- [React 19](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for animation
- [Lucide React](https://lucide.dev/) and shadcn/ui primitives
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install and run locally

```bash
git clone https://github.com/Darshan-P2331/darshan-p2331.github.io.git
cd darshan-p2331.github.io
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production static export in `out/` |
| `npm run start` | Start the Next.js production server |

## Customization

Most portfolio content lives in [`app/data/portfolio.ts`](app/data/portfolio.ts):

- Personal details and social links
- Work experience
- Skills grouped by category
- Projects, tags, images, and repository links

The page composition is in [`app/page.tsx`](app/page.tsx), while shared visual tokens and theme variables are defined in [`app/globals.css`](app/globals.css). Components are organized under [`components/`](components/).

To set a real contact address, create a `.env.local` file:

```bash
NEXT_PUBLIC_EMAIL=you@example.com
```

The fallback value is used when this variable is not set.

## Deployment

This project uses Next.js static export mode. Build the site with:

```bash
npm run build
```

The generated files are written to `out/`. Upload that directory to any static hosting provider, or configure a GitHub Actions workflow to publish it to GitHub Pages. The repository is also compatible with hosting providers that support Next.js deployments, such as [Vercel](https://vercel.com/).

> [!IMPORTANT]
> Static export does not include server-side features such as API routes or dynamic server rendering. Keep portfolio content and assets compatible with a static build.

## Resources

- [Next.js documentation](https://nextjs.org/docs)
- [Next.js static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Framer Motion documentation](https://motion.dev/docs)
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
