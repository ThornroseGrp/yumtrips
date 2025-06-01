# Deployment Guide for Beach 'n Boil

## Vercel Deployment (Recommended)

### 1. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select the `thornrosegrp/beach-n-boil` repository
4. Configure project:
   - Framework: Next.js
   - Root Directory: `./`
   - Node.js Version: 18.x

### 2. Environment Variables
Add these in Vercel project settings:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

### 3. Domain Setup (Optional)
- Add custom domain in Vercel project settings
- Example: `beach.thornrosegrp.com`

## Manual Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## GitHub Secrets Required

For automated deployment, add these secrets to your GitHub repository:
- `VERCEL_TOKEN` - Get from Vercel account settings
- `VERCEL_ORG_ID` - Get from Vercel project settings
- `VERCEL_PROJECT_ID` - Get from Vercel project settings
- `NEXT_PUBLIC_OPENWEATHER_API_KEY` - Your OpenWeatherMap API key

## Post-Deployment Checklist

- [ ] Test PWA installation on mobile devices
- [ ] Verify weather API is working
- [ ] Check all photos are loading
- [ ] Test voting system persistence
- [ ] Verify Google Maps links work
- [ ] Test dark mode on all pages
- [ ] Check performance scores (aim for 90+ Lighthouse)
