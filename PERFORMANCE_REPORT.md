# Frontend Performance Optimization Report

## Week 4 – Junior Frontend Developer Internship

### Project Name
Performance Optimized News Hub

## 1. Objective

The objective of this project was to analyze and optimize the performance of a frontend web page. The main focus was to identify performance bottlenecks, apply optimization techniques, improve loading behavior and provide a smoother user experience.

The news portal developed during the previous project was reused as the base project and optimized for this Week 4 performance challenge.

## 2. Tools Used

- Google Chrome Lighthouse
- Google PageSpeed Insights
- Chrome Developer Tools
- HTML5
- CSS3
- JavaScript

## 3. Performance Issues Identified

The project was reviewed for common frontend performance issues, including:

- JavaScript loading and execution
- DOM complexity
- CSS efficiency
- Unnecessary external assets
- Responsive layout performance
- Resources that could affect initial page loading

## 4. Optimization Techniques Applied

### Deferred JavaScript

The JavaScript file was loaded using the `defer` attribute:

```html
<script src="script.js" defer></script>