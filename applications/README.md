# Applications Directory

This directory contains demo applications that are showcased in the portfolio.

## Structure

Each application is deployed to `/demo/<app-name>` route in the portfolio.

## Current Applications

### Quest Lab (`quest-lab-fe/`)
- **Route**: `/demo/questlab`
- **Tech Stack**: Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui
- **Description**: Educational platform for managing questions, exams, and solutions
- **Repository**: [github.com/vini-barbo/quest-lab-fe](https://github.com/vini-barbo/quest-lab-fe)

## Adding New Applications

1. Create a new directory in `applications/`
2. Develop your application (Next.js, React, Vue, etc.)
3. Configure static export (for Next.js: `output: 'export'` in `next.config.js`)
4. Update `amplify.yml` to include build steps:
   ```yaml
   - cd applications/your-app
   - npm ci
   - npm run build
   - cd ../..
   - mkdir -p dist/demo/your-app
   - cp -r applications/your-app/out/* dist/demo/your-app/
   ```
5. Add cache paths for optimization
6. Update this README with your application details

## Build Process

All applications are built during the Amplify deployment and copied to the `dist/demo/` directory for static hosting.
