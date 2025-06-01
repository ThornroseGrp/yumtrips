#!/bin/bash

# Beach 'n Boil - Push to GitHub Script

echo "🚀 Beach 'n Boil - Push to GitHub"
echo "===================================="
echo ""

# Navigate to project directory
cd /Users/shawnsmith/dev/personal/beach-n-boil

# Push to origin
echo "📤 Pushing to ThornroseGrp/beach-n-boil..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Your Beach 'n Boil app is now on GitHub!"
    echo ""
    echo "📋 NEXT STEPS:"
    echo "1. Set up Vercel deployment:"
    echo "   👉 Go to: https://vercel.com/new"
    echo "   👉 Import: ThornroseGrp/beach-n-boil"
    echo "   👉 Add env var: NEXT_PUBLIC_OPENWEATHER_API_KEY"
    echo ""
    echo "2. Configure GitHub Secrets for CI/CD:"
    echo "   👉 Go to: https://github.com/ThornroseGrp/beach-n-boil/settings/secrets"
    echo "   👉 Add: VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID"
    echo ""
else
    echo ""
    echo "❌ Push failed!"
    echo ""
    echo "Make sure you:"
    echo "1. Created the repository at https://github.com/ThornroseGrp/beach-n-boil"
    echo "2. Have push access to the ThornroseGrp organization"
    echo ""
fi
