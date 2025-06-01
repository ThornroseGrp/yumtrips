#!/bin/bash

# Quick start script for testing the yumtrips app

echo "🌊 Starting Yumtrips Development Server..."
echo "=================================="
echo ""
echo "Recent fixes applied:"
echo "✅ Fixed infinite scroll issue"
echo "✅ Added cover photos to day cards"
echo ""
echo "Testing URLs:"
echo "🏠 Main Landing: http://localhost:5174"
echo "🌊 Beach 'n Boil: http://localhost:5174/oki25"
echo "🌳 Charleston Trip: http://localhost:5174/charleston25"
echo ""
echo "Starting server..."
echo ""

cd /Users/shawnsmith/dev/personal/yumtrips
npm run dev
