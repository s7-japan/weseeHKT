# WeSee AI Agents Hackathon 2025 Website

A modern, responsive website for the WeSee AI Agents Hackathon, built with React and Tailwind CSS.

## Features

- Responsive design that works on all device sizes
- Modern UI with animations and gradient effects
- Modular components architecture
- Interactive elements (FAQ accordion, etc.)

## Sections

1. Navigation
2. Hero Section
3. About Section
4. Tracks Section
5. Rewards Section
6. Timeline Section
7. Tools & Resources Section
8. FAQ Section
9. CTA Section
10. Footer

## Setup Instructions

### Option 1: Using the setup script (Recommended)

1. Make sure the script is executable:
   ```
   chmod +x setup.sh
   ```

2. Run the setup script:
   ```
   ./setup.sh
   ```

This will fix any npm permission issues, install dependencies, and start the development server.

### Option 2: Manual setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

## Build for Production

To create a production build:

```
npm run build
```

This will create optimized files in the `build` folder that can be deployed to any static hosting service.

## Technologies Used

- React
- Tailwind CSS
- PostCSS
- CSS Animations

## Project Structure

```
public/
  index.html         # HTML template
src/
  components/        # React components
    AboutSection.js
    CTASection.js
    FAQSection.js
    Footer.js
    HeroSection.js
    Navigation.js
    RewardsSection.js
    TimelineSection.js
    ToolsResourcesSection.js
    TracksSection.js
  App.js             # Main component
  index.css          # Global styles
  index.js           # Entry point
postcss.config.js    # PostCSS configuration
tailwind.config.js   # Tailwind CSS configuration
```

## Customization

- Edit component files to change content
- Modify `tailwind.config.js` to adjust theme
- Update styles in `index.css` for custom CSS

## License

This project is licensed under the MIT License. 