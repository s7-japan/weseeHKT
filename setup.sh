#!/bin/bash

# Fix npm permissions (may require password)
echo "Fixing npm cache permissions..."
sudo chown -R $(whoami) ~/.npm

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the development server
echo "Starting development server..."
npm start 