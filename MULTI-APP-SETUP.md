# Multi-App Deployment Guide

## Recommended Structure: Subdomains

Each trip gets its own subdomain:
- `oki25.tours.yumrovia.com` - Beach 'n Boil (Oak Island 2025)
- `charleston25.tours.yumrovia.com` - Charleston Trip 2025

## Step 1: DNS Setup (at your domain registrar)

Add these DNS records:

```
Type: CNAME
Name: oki25.tours
Value: cname.vercel-dns.com
TTL: 3600

Type: CNAME
Name: charleston25.tours
Value: cname.vercel-dns.com
TTL: 3600
```

## Step 2: Vercel Configuration

### For Beach 'n Boil (current app):

1. Go to: https://vercel.com/thornrose/beach-n-boil/settings/domains
2. Click "Add Domain"
3. Enter: `oki25.tours.yumrovia.com`
4. Follow the verification steps

### For Charleston App (when ready):

1. Deploy Charleston app to Vercel
2. Add domain: `charleston25.tours.yumrovia.com`

## Step 3: Update App Branding

Update each app's title to be clearer:

### Beach 'n Boil:
- Title: "OKI '25 - Beach 'n Boil"
- Short URL: oki25.tours.yumrovia.com

### Charleston:
- Title: "Charleston '25 - Historic Adventure"
- Short URL: charleston25.tours.yumrovia.com

## Alternative: Path-based (Not Recommended)

If you really want `tours.yumrovia.com/oki25`, you'd need:

1. A main landing page at `tours.yumrovia.com`
2. Use Vercel's rewrites to proxy to different apps
3. Much more complex setup

## Benefits of Subdomain Approach

1. **Independent Deployments** - Update one trip without affecting others
2. **Better Performance** - Each app loads only what it needs
3. **Easier Sharing** - Simple URLs like `oki25.tours.yumrovia.com`
4. **Separate Analytics** - Track each trip independently
5. **PWA Support** - Each trip can be installed as its own app

## Future Trips

Just add new subdomains:
- `hawaii26.tours.yumrovia.com`
- `europe26.tours.yumrovia.com`
- etc.

## Landing Page Option

Create a simple landing page at `tours.yumrovia.com` that lists all trips:
- Links to each trip's subdomain
- Beautiful cards for each adventure
- Family photo gallery
