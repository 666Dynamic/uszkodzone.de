# Contributing to Uszkodzone.de

## 🎯 Development Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in the values
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`
5. Open http://localhost:3000

## 📝 Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Tailwind CSS for styling
- Components should be client-side (`'use client'`) only when necessary
- Use Server Actions for data fetching

## 🏗️ Project Structure

```
app/              # Next.js App Router pages
components/       # React components
lib/             # Utility functions, API clients
types/           # TypeScript type definitions
public/          # Static assets
```

## 🔀 Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit with meaningful messages: `git commit -m "feat: add car filter"`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request

### Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, styling
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## 📦 Building

```bash
npm run build
npm start
```

## 🐛 Reporting Issues

Please include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/OS information

## 💡 Feature Requests

We welcome suggestions! Please create an issue with:
- Clear description
- Use case
- Mockups/examples (if applicable)

## 📧 Contact

Questions? Email: kontakt@uszkodzone.de
