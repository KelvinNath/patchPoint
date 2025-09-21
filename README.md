# PatchPoint - Issue Tracker

A modern issue tracking application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Smart Navigation**: Dynamic NavBar with active link highlighting
  - Bug icon logo using react-icons
  - Responsive navigation with smooth transitions
  - Active page detection using Next.js usePathname hook
- **Issue Management**: Dedicated pages for issue tracking
  - Issues page for detailed issue management
  - Database schema ready for issue storage
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Database Ready**: Prisma ORM configured for MySQL
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Database**: Prisma ORM with MySQL
- **Utilities**: Classnames for conditional styling
- **Icons**: React Icons
- **State Management**: React hooks and Next.js navigation

## 📁 Project Structure

```
patchpoint/
├── app/
│   ├── NavBar.tsx          # Main navigation component with active states
│   ├── page.tsx            # Home page
│   ├── issues/
│   │   └── page.tsx        # Issues management page
│   ├── layout.tsx          # Root layout with NavBar integration
│   └── globals.css         # Global styles with Tailwind CSS
├── prisma/
│   └── schema.prisma       # Database schema with Issue model (MySQL)
├── public/                 # Static assets
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MySQL database

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file
DATABASE_URL="mysql://username:password@localhost:3306/patchpoint"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 UI Features

- **Active Link Highlighting**: Navigation links change color based on current page
  - Blue for active page, green for inactive with hover effects
  - Smooth color transitions using classnames utility
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Transitions**: CSS transitions for better user experience
- **Modern Typography**: Clean, readable text with proper spacing
- **Debug Logging**: Console logging for development debugging

## 🔧 Development

- **Hot Reload**: Automatic page updates during development
- **TypeScript**: Full type checking and IntelliSense support
- **ESLint**: Code linting and formatting
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Prisma Client**: Auto-generated database client for type-safe queries
- **Classnames**: Utility for conditional CSS class management

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
