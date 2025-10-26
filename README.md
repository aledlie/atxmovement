# ATX Movement

A React + TypeScript web application for showcasing Austin movement and dance events.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Supabase** - Backend and database
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Project Structure

```
atxmovement/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── EventCard.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── lib/                 # Utilities and configurations
│   │   └── supabase.ts     # Supabase client setup
│   ├── pages/              # Page components
│   │   ├── CalendarPage.tsx
│   │   ├── DonatePage.tsx
│   │   ├── EventDetailPage.tsx
│   │   └── HomePage.tsx
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   └── config.yml
├── dist/                   # Production build output
├── .env                    # Environment variables (not tracked)
├── .env.example            # Environment variables template
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript config for app
├── tsconfig.node.json      # TypeScript config for Node
└── vite.config.js          # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or pnpm
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd atxmovement
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Development

Start the development server:
```bash
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

### Type Checking

Run TypeScript type checking:
```bash
npm run typecheck
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checker

## License

See LICENSE file for details.
