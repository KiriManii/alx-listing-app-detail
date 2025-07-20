# ALX Listing App

**Modern Airbnb Clone - Property Listing Platform**

A professional-grade property listing application built with Next.js 15, TypeScript, and Tailwind CSS following 2025 best practices.

## 🎯 Project Overview

The ALX Listing App is a foundational scaffold for building a modern Airbnb clone. This initial milestone focuses on creating a well-organized, scalable codebase with reusable components, TypeScript integration, and responsive design.

### 🌟 Key Features

- ✅ **Modern Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS
- ✅ **Reusable Components**: Modular Card and Button components
- ✅ **Type Safety**: Full TypeScript integration with custom interfaces
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Accessibility**: WCAG compliant components with proper ARIA labels
- ✅ **Performance**: Optimized images with Next.js Image component
- ✅ **Developer Experience**: ESLint configuration and best practices

## 🏗️ Project Structure

```
alx-listing-app/
├── components/
│   └── common/
│       ├── Button.tsx          # Reusable button component
│       └── Card.tsx            # Property card component
├── constants/
│   └── index.ts                # App constants and configurations
├── interfaces/
│   └── index.ts                # TypeScript interfaces
├── pages/
│   ├── _app.tsx               # Next.js app wrapper
│   ├── _document.tsx          # HTML document structure
│   └── index.tsx              # Main landing page
├── public/
│   └── assets/                # Images and static assets
│       ├── property-1.jpg
│       ├── property-2.jpg
│       ├── property-3.jpg
│       ├── property-4.jpg
│       └── placeholder-property.jpg
├── styles/
│   └── globals.css            # Global Tailwind CSS styles
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

### 📁 Directory Explanations

- **`components/common/`**: Reusable UI components that can be used throughout the application
- **`interfaces/`**: TypeScript type definitions for type safety and code consistency
- **`constants/`**: Application-wide constants, API URLs, and configuration settings
- **`public/assets/`**: Static assets like images, icons, and media files
- **`pages/`**: Next.js file-based routing system (using Pages Router)
- **`styles/`**: Global CSS and Tailwind CSS configuration

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15+ | React framework with SSR/SSG capabilities |
| **TypeScript** | 5+ | Type safety and enhanced developer experience |
| **Tailwind CSS** | 3.4+ | Utility-first CSS framework |
| **ESLint** | 8+ | Code linting and quality assurance |
| **React** | 18+ | UI library for building components |

## 🚀 Getting Started

### Prerequisites

- **Node.js** version 16 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KiriManii/alx-listing-app.git
   cd alx-listing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically
npm run type-check   # Run TypeScript type checking
```

## 🧩 Component Usage

### Button Component

```tsx
import Button from '../components/common/Button';

// Primary button
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Loading state
<Button variant="primary" loading={true}>
  Loading...
</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card Component

```tsx
import Card from '../components/common/Card';

<Card
  id={1}
  title="Beautiful Property"
  description="Amazing place to stay"
  image="/assets/property-1.jpg"
  price={120}
  rating={4.8}
  location="New York, NY"
  onClick={() => console.log('Card clicked')}
/>
```

## 🎨 Design System

### Color Palette

- **Primary**: Red-500 (`#EF4444`)
- **Secondary**: Gray-200 (`#E5E7EB`)
- **Text**: Gray-900 (`#111827`)
- **Background**: Gray-50 (`#F9FAFB`)

### Typography

- **Headings**: Font-bold with responsive sizing
- **Body**: Font-medium with proper line-height
- **Small text**: Font-normal with muted colors

### Spacing

Following Tailwind's spacing scale (4px increments):
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| **sm** | 640px | Mobile landscape |
| **md** | 768px | Tablet |
| **lg** | 1024px | Desktop |
| **xl** | 1280px | Large desktop |
| **2xl** | 1536px | Extra large screens |

## 🔧 Configuration Files

### Tailwind Configuration (`tailwind.config.js`)

```javascript
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript Configuration (`tsconfig.json`)

Configured for strict type checking and optimal Next.js integration.

## 🚦 Development Guidelines

### Code Style

- Use **TypeScript** for all components and utilities
- Follow **ESLint** rules for code consistency
- Use **Tailwind CSS** for styling (avoid custom CSS when possible)
- Write **descriptive component props** with TypeScript interfaces
- Include **accessibility attributes** (ARIA labels, roles, etc.)

### File Naming

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatPrice.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- **Interfaces**: PascalCase with suffix (e.g., `ButtonProps`)

### Component Structure

```tsx
// 1. Imports
import React from 'react';
import { ComponentProps } from '../interfaces';

// 2. Interface (if not in interfaces/index.ts)
interface LocalProps {
  // props
}

// 3. Component with JSDoc
/**
 * Component description
 */
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 4. Hooks and state
  
  // 5. Event handlers
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 7. Export
export default Component;
```

## 🔮 Upcoming Features

- [ ] Property details page
- [ ] Search and filtering functionality
- [ ] User authentication
- [ ] Booking system
- [ ] Host dashboard
- [ ] Payment integration
- [ ] Review and rating system
- [ ] Map integration
- [ ] Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Format

```
type(scope): description

feat(component): add new button variants
fix(ui): resolve responsive layout issues
docs(readme): update installation instructions
style(lint): fix ESLint warnings
```

## 📝 License

This project is part of the ALX Software Engineering program.

## 🙏 Acknowledgments

- **ALX Africa** for the comprehensive curriculum
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **TypeScript** for type safety and developer experience

## 📞 Support

For questions or support regarding this project:

- **GitHub Issues**: [Create an issue](https://github.com/KiriManii/alx-listing-app/issues)
- **ALX Community**: Connect with fellow learners
- **Documentation**: Refer to official docs for technologies used

---

**Built with ❤️ by [KiriManii](https://github.com/KiriManii) for ALX Software Engineering Program**