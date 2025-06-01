#!/bin/bash

# Beach 'n Boil - Git Setup Script
# This script will initialize git and prepare your project for GitHub

echo "🌊 Beach 'n Boil - Git Setup Script"
echo "===================================="
echo ""

# Navigate to project directory
cd /Users/shawnsmith/dev/personal/beach-n-boil

# Check if git is already initialized
if [ -d .git ]; then
    echo "✅ Git is already initialized"
else
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo ""
echo "📁 Adding all files to git..."
git add .

# Create initial commit
echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Beach 'n Boil PWA - Family vacation itinerary app

Features:
- Real-time activity tracking with 30-minute warnings
- Live weather integration (OpenWeatherMap API)
- Family voting system for activities
- Ocean-themed dark mode
- Timeline and card views
- PWA with offline support
- Google Maps integration
- Photo galleries for all activities"

# Check if remote already exists
if git remote | grep -q 'origin'; then
    echo ""
    echo "🔄 Updating remote origin to ThornroseGrp..."
    git remote set-url origin https://github.com/ThornroseGrp/beach-n-boil.git
else
    echo ""
    echo "🔗 Adding ThornroseGrp remote..."
    git remote add origin https://github.com/ThornroseGrp/beach-n-boil.git
fi

# Set main branch
git branch -M main

echo ""
echo "✅ Git setup complete!"
echo ""
echo "===================================="
echo "📋 NEXT STEPS:"
echo ""
echo "1. Create the repository on GitHub:"
echo "   👉 Go to: https://github.com/ThornroseGrp"
echo "   👉 Click 'New repository'"
echo "   👉 Name: beach-n-boil"
echo "   👉 Make it Private"
echo "   👉 DO NOT initialize with README"
echo ""
echo "2. After creating the repo, run:"
echo "   git push -u origin main"
echo ""
echo "3. Optional - Delete the empty personal repo:"
echo "   https://github.com/shawnsninja/beach-n-boil"
echo ""
echo "===================================="
