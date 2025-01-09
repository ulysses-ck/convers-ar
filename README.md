# Convers-AR

A conversational AI application built with Next.js and Cloudflare Pages, leveraging Google's Generative AI capabilities. This project demonstrates modern web development practices with a focus on AI-powered interactions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [NextUI](https://nextui.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **AI Integration:** [Google Generative AI](https://ai.google.dev/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd convers-ar
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Commands

- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run linting checks
- `pnpm pages:build` - Build for Cloudflare Pages
- `pnpm preview` - Preview Pages application locally
- `pnpm deploy` - Deploy to Cloudflare Pages

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
└── lib/             # Utility functions and configurations
```

## Cloudflare Integration

This project is configured for deployment on Cloudflare Pages. The following scripts are available for Cloudflare integration:
- `pages:build` - Builds the application using [@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages)
- `preview` - Locally preview your Pages application using [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- `deploy` - Deploy your application using Wrangler

### Bindings

Cloudflare [Bindings](https://developers.cloudflare.com/pages/functions/bindings/) allow interaction with Cloudflare Platform resources. You can use bindings in:
- Development mode (configured in `next.config.js`)
- Preview mode (configured via `wrangler pages dev`)
- Production (configured in Cloudflare dashboard)

For detailed information about bindings configuration, refer to the [Pages Bindings documentation](https://developers.cloudflare.com/pages/functions/bindings/).

## Features

- 🤖 AI-powered conversations
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Styled with Tailwind CSS and NextUI
- 📝 TypeScript for type safety
- 🔄 Form validation with Zod
- ☁️ Cloudflare Pages integration

## License

This project is open source and available under the [MIT License](LICENSE).
