#!/bin/bash

echo "🚀 Yumtrips Setup & Launch Script"
echo "================================"
echo ""

cd /Users/shawnsmith/dev/personal/yumtrips

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🌐 Starting development server on port 5174..."
echo ""
echo "Available routes:"
echo "  - Landing Page: http://localhost:5174"
echo "  - Beach Trip:   http://localhost:5174/oki25"  
echo "  - Charleston:   http://localhost:5174/charleston25"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the dev server
npm run dev
