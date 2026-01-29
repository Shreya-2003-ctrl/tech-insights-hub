 Tech Insights Hub – Blog Website

A modern, responsive blog platform built with React featuring category-based filtering, search functionality, optimized performance, and SEO best practices.

 Live Demo: https://tech-insights-hub-eight.vercel.app/

 Features

Blog listing with card-based layout

Category-based filtering

Search articles by title and description

Fully responsive UI (mobile + desktop)

SEO optimized

Lighthouse optimized

Lazy-loaded images

Fast performance via Vercel deployment

 Lighthouse Audit

All screenshots are stored inside the /screenshots folder.

Performance

Accessibility

Best Practices

SEO

 SEO Strategy
 Meta Tags Implemented

The following meta tags were added to improve search engine visibility and social sharing:

title – improves page relevance

description – helps search engines understand page content

viewport – ensures mobile responsiveness

Open Graph tags – improves social media previews

These help improve discoverability, ranking, and click-through rate.

 Semantic HTML Structure

Semantic elements were used throughout the project:

<header> for navigation

<main> for primary content

<article> for blog cards

<section> for grouped content

<footer> for page footer

This improves accessibility and helps search engines understand content hierarchy.

 Image Optimization Approach

Lazy loading enabled for images

Optimized image sizes before upload

Responsive images used

Reduced file sizes

Proper alt attributes added

These steps improved Largest Contentful Paint (LCP) and overall performance.

 Performance Optimizations

Lazy loading images

Component-based architecture

Minified production builds

Reduced unused CSS

Optimized assets

Deployed on Vercel CDN

Result: Lighthouse performance scores consistently around 80–85 across regions.

 Search & Filter Implementation
Search

Implemented client-side search using React state.

Filters blog posts by matching title and description.

Updates results instantly as the user types.

Category Filter

Categories displayed as selectable buttons.

Clicking a category filters posts accordingly.

Search and category filters work together for refined results.

State management is handled using React hooks.

 Challenges Faced

Optimizing images while maintaining quality

Improving Lighthouse scores

Implementing combined search and category filtering

Maintaining responsive layouts across devices

Structuring reusable components

These were solved through refactoring, asset optimization, and applying frontend best practices.

 Technologies Used

React

TypeScript

Tailwind CSS

Lucide Icons

Vercel (Deployment)

Lighthouse (Performance Audits)