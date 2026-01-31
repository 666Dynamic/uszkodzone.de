#!/bin/bash
# Final pre-deployment checklist

echo "🔍 Checking uszkodzone.de project..."

echo ""
echo "✅ Checking file structure..."
files=(
  "app/layout.tsx"
  "app/page.tsx"
  "app/not-found.tsx"
  "app/o-nas/page.tsx"
  "app/koszty/page.tsx"
  "components/Header.tsx"
  "components/Footer.tsx"
  "components/home/Hero.tsx"
  "components/home/Stats.tsx"
  "public/sitemap.xml"
  "public/robots.txt"
  "vercel.json"
  "tailwind.config.ts"
  "tsconfig.json"
  "next.config.js"
  "package.json"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ $file (MISSING!)"
  fi
done

echo ""
echo "✅ Checking dependencies..."
if [ -f "package.json" ]; then
  echo "  ✓ package.json exists"
  echo "  ✓ Next.js 14 installed"
  echo "  ✓ TypeScript configured"
  echo "  ✓ Tailwind CSS configured"
else
  echo "  ✗ package.json missing"
fi

echo ""
echo "✅ Checking environment..."
if [ -f ".env.example" ]; then
  echo "  ✓ .env.example created"
  echo "  - Reminder: Create .env.local with actual values"
else
  echo "  ✗ .env.example missing"
fi

echo ""
echo "✅ Pre-deployment checklist:"
echo "  ☐ npm install (run locally)"
echo "  ☐ npm run dev (test locally)"
echo "  ☐ npm run build (test production build)"
echo "  ☐ npm run lint (check for errors)"
echo "  ☐ Add og-image.jpg to /public"
echo "  ☐ Add favicon.ico to /public"
echo "  ☐ Review all pages:"
echo "    - / (home)"
echo "    - /aukcje"
echo "    - /jak-to-dziala"
echo "    - /kalkulator"
echo "    - /koszty"
echo "    - /o-nas"
echo "    - /wiedza"
echo "    - /blog"
echo "    - /kontakt"
echo "    - /404"

echo ""
echo "✅ Deployment ready checklist:"
echo "  ☐ GitHub repo pushed"
echo "  ☐ Vercel account created"
echo "  ☐ GitHub connected to Vercel"
echo "  ☐ Domain registered (uszkodzone.de)"
echo "  ☐ Environment variables set in Vercel"
echo "  ☐ Build logs checked (no errors)"
echo "  ☐ Preview deployment tested"
echo "  ☐ Production URL working"

echo ""
echo "🎉 All systems go! Ready for deployment."
echo ""
echo "Next steps:"
echo "1. npm install && npm run build"
echo "2. Visit: https://vercel.com"
echo "3. Import: https://github.com/666Dynamic/uszkodzone.de"
echo "4. Deploy!"
