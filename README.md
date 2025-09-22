# PatchPoint - Issue Tracker

A modern issue tracking application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Smart Navigation**: Dynamic NavBar with active link highlighting
  - Bug icon logo using react-icons
  - Responsive navigation with smooth transitions
  - Active page detection using Next.js usePathname hook
- **Issue Management**: Complete issue tracking system
  - Issues listing page with navigation to create new issues
  - Advanced issue creation form with validation and error handling
  - Rich text editing with EasyMDE markdown editor
  - Real-time form validation with user feedback
  - Toast notifications for success and error states
  - RESTful API endpoints for CRUD operations
  - Database schema with Issue model and status tracking
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Theme System**: Radix UI Themes with custom configuration
- **Database Ready**: Prisma ORM configured for MySQL
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Database**: Prisma ORM with MySQL
- **UI Components**: Radix UI Themes for modern components
- **Rich Text Editor**: EasyMDE markdown editor with toolbar
- **Toast Notifications**: React Hot Toast for user feedback
- **Form Validation**: Client-side validation with real-time feedback
- **HTTP Client**: Axios for API communication
- **Validation**: Zod for schema validation
- **Utilities**: Classnames for conditional styling
- **Icons**: React Icons
- **State Management**: React hooks and Next.js navigation

## 📁 Project Structure

```
patchpoint/
├── app/
│   ├── api/
│   │   └── issues/
│   │       └── route.ts    # RESTful API endpoints for issues
│   ├── NavBar.tsx          # Main navigation component with active states
│   ├── page.tsx            # Home page
│   ├── issues/
│   │   ├── page.tsx        # Issues listing page with New Issue button
│   │   └── new/
│   │       └── page.tsx    # Advanced issue creation form with validation
│   ├── layout.tsx          # Root layout with Theme, ThemePanel, NavBar, and Toaster
│   ├── theme.config.css    # Custom theme configuration
│   └── globals.css         # Global styles with Tailwind CSS and EasyMDE
├── components/
│   └── ui/
│       ├── LoadingButton.tsx   # Button with loading spinner
│       ├── ErrorMessage.tsx    # Reusable error message component
│       ├── FormField.tsx       # Text field with validation
│       └── MarkdownEditor.tsx  # Wrapped SimpleMDE with error handling
├── prisma/
│   ├── client.ts           # Prisma client configuration
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
- **Modern Component Library**: Radix UI Themes for professional components
  - TextField, TextArea, and Button components
  - Consistent design system and accessibility
  - Theme Panel for development and customization
  - Custom theme configuration with Inter font integration
- **Rich Text Editing**: EasyMDE markdown editor
  - Full markdown toolbar with formatting options
  - Live preview capabilities
  - Client-side rendering to avoid SSR issues
  - Professional markdown editing experience
- **Form Validation & UX**: Advanced form handling
  - Real-time validation with immediate feedback
  - Field-specific error messages
  - Loading states with animated spinners
  - Toast notifications for all user actions
  - Form validation before API submission
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
- **Radix UI**: Modern, accessible component library
- **EasyMDE**: Rich markdown editor with toolbar
- **React SimpleMDE Editor**: React wrapper for EasyMDE
- **React Hot Toast**: Toast notifications for user feedback
- **Axios**: HTTP client for API communication
- **Zod**: Runtime type validation for API endpoints

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 🔌 API Endpoints

### Issues API (`/api/issues`)

- **GET** - Retrieve all issues (ordered by creation date)
- **POST** - Create a new issue with validation

#### Example Usage:

```bash
# Get all issues
curl http://localhost:3000/api/issues

# Create a new issue
curl -X POST http://localhost:3000/api/issues \
  -H "Content-Type: application/json" \
  -d '{"title": "Bug Report", "description": "Issue description"}'
```

## 📝 Pages

### Issue Management
- **`/issues`** - Issues listing page with "New Issue" button navigation
- **`/issues/new`** - Advanced issue creation form with:
  - Form validation with real-time feedback
  - TextField for issue title with validation
  - EasyMDE markdown editor for rich text description
  - Loading button with animated spinner
  - Toast notifications for success/error states
  - Field-specific error messages
  - Client-side rendering to prevent SSR issues
  - Responsive layout with Tailwind CSS spacing

## 🧩 UI Components

### Reusable Components (`/components/ui/`)
- **`LoadingButton`**: Button with loading spinner and disabled states
- **`ErrorMessage`**: Reusable error message display component
- **`FormField`**: Text field with label, validation, and error handling
- **`MarkdownEditor`**: Wrapped SimpleMDE with error states and SSR handling

### Component Features
- **TypeScript Support**: Fully typed with proper interfaces
- **Error Handling**: Built-in error display and validation
- **Loading States**: Visual feedback during async operations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Consistent Styling**: Unified design system across components

## 🎨 Theme Configuration

### Radix UI Themes Setup
- **Theme Provider**: Light appearance with blue accent color
- **Theme Panel**: Development tool for theme customization
- **Custom Font**: Inter font integration via CSS variables
- **Theme Config**: Custom theme configuration file (`theme.config.css`)

### Layout Features
- **Consistent Spacing**: Padding applied to main content area
- **Theme Integration**: Radix UI Themes wrapper with custom configuration
- **Font Variables**: CSS custom properties for font family
- **Toast Notifications**: Global toast system with custom styling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
