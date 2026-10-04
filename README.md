# Performance Optimized News Hub

A responsive and performance-focused news portal developed as part of my Junior Frontend Developer Internship – Week 4.

## Objective

The objective of this project was to analyze and improve frontend performance by reducing unnecessary code, simplifying the DOM, optimizing JavaScript execution and creating a responsive user experience.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chrome Lighthouse
- Google PageSpeed Insights

## Performance Optimizations

### 1. Deferred JavaScript

The JavaScript file is loaded using the `defer` attribute so that HTML parsing is not unnecessarily blocked.

### 2. Lightweight JavaScript

Unnecessary JavaScript operations were removed and the script was kept focused on required interactions.

### 3. Reduced DOM Complexity

The page structure was simplified by removing unnecessary containers and keeping only meaningful elements.

### 4. Efficient CSS

The stylesheet was reorganized to avoid unnecessary rules and maintain a clean responsive layout.

### 5. Responsive Design

CSS Grid and media queries are used to provide an optimized layout for desktop and mobile devices.

### 6. Performance-Friendly Assets

The project structure is designed to keep assets lightweight and avoid unnecessary resources that can increase loading time.

### 7. Accessibility and Performance

Semantic HTML and keyboard-friendly interactions were retained from the previous project while improving overall frontend efficiency.

### 8. Reduced Motion

A `prefers-reduced-motion` media query was included to avoid unnecessary motion for users who prefer reduced animations.

## Performance Testing

The project was tested using Chrome Lighthouse and Google PageSpeed Insights.

Performance was measured before and after optimization.

## Project Structure

```text
Junior-frontend-week4
│
├── index.html
├── style.css
├── script.js
├── README.md
├── PERFORMANCE_REPORT.md
├── Desktop-screenshot.png
└── Mobile-screenshot.png
