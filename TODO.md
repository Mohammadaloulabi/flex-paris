# GH Pages Deployment TODO

## Plan Steps
- [x] Step 1: Update vite.config.ts base to '/flex-paris/'
- [x] Step 2: Fix package.json homepage and add predeploy script
- [x] Step 3: Remove basename from router.tsx
- [x] Step 4: Test build/deploy

## Completed
✅ GH Pages fixes applied!

**Deploy command**:
```
npm run deploy
```

Site will be live at: https://Mohammadaloulabi.github.io/flex-paris

**Notes**:
- vite base: '/flex-paris/' ✓ (assets like /flex-paris/assets/...)
- HashRouter: No basename, handles #/ routes ✓
- Scripts: predeploy → build → deploy ✓
- ESLint fast-refresh warnings on router.tsx: Ignore (config-only file, doesn't affect prod/build).
