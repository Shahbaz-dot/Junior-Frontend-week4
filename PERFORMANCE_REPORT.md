# Frontend Performance Optimization Report

## Week 4 – Junior Frontend Developer Internship

### Project Name
Performance Optimized News Hub

## 1. Objective

The objective of this project was to analyze and improve the performance of a frontend web page. The project was optimized to provide faster loading, cleaner code, better responsiveness and a smoother user experience.

## 2. Tools Used

- Google Chrome Lighthouse
- Google PageSpeed Insights
- Chrome Developer Tools
- HTML5
- CSS3
- JavaScript

## 3. Performance Issues Identified

The project was reviewed for common frontend performance problems such as:

- Unnecessary JavaScript execution
- Excessive DOM elements
- Inefficient CSS
- Blocking JavaScript loading
- Unnecessary external assets
- Mobile responsiveness issues

## 4. Optimization Techniques Applied

### Deferred JavaScript

The JavaScript file was loaded using the `defer` attribute:

```html
<script src="script.js" defer></script>