# Color Picker App

A simple React-based color picker web application.

## Overview

The Color Picker App allows users to select a color using a color input. The background of the app changes dynamically to reflect the selected color, providing instant visual feedback.

## Features

- Interactive color picker input
- Real-time background color update
- Minimal and clean design

## How It Works

- The app displays a color input in the center of the page.
- When a user selects a color, the background of the container updates to match the chosen color.

## Local Setup

1. **Clone or Download the Repository**

   Download the project files to your local machine.

2. **Project Structure**

   ```
   index.html
   index.jsx
   styles.css
   ```

3. **Run Locally**

   - Open `index.html` in your web browser.
   - The app uses CDN links for React and Babel, so no additional installation is required.

## Functionality

- The main component is [`ColorPicker`](index.jsx), which manages the selected color using React's `useState`.
- The color input (`<input type="color" />`) lets users pick a color.
- The background color of the container updates instantly as the user selects a new color.

## Technologies Used

- React (via CDN)
- Babel (for JSX transformation in-browser)
- HTML, CSS, JavaScript (JSX)

## License

This project is open source and free
