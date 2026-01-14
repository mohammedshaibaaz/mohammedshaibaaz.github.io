# Quality Assurance & Testing Guide

## Manual Testing Checklist

### 1. Functionality Testing

#### Navigation
- [ ] All navigation links work correctly
- [ ] Theme toggle switches between dark/light mode
- [ ] Theme preference persists after page reload
- [ ] Mobile menu opens and closes
- [ ] Mobile menu closes when clicking a link
- [ ] Mobile menu closes with Escape key
- [ ] Anchor links scroll smoothly
- [ ] Logo links to homepage

#### Interactive Elements
- [ ] All buttons are clickable and responsive
- [ ] Hover effects work on desktop
- [ ] Carousel auto-rotates (on desktop, 6-second interval)
- [ ] Carousel pauses on hover
- [ ] Carousel doesn't auto-rotate on mobile
- [ ] All external links open in new tabs
- [ ] Sticky CTA appears after scrolling past hero (mobile)

#### Forms & Contact
- [ ] Email link is functional (mailto:)
- [ ] External project links work correctly
- [ ] GitHub links work correctly

### 2. Design & Visual Testing

#### Colors & Themes
- **Dark Theme**
  - [ ] Background: #0A0E13
  - [ ] Text: #E6EAF0
  - [ ] Accent: #C7CCD6
  - [ ] Hover/Links: #D97706 (amber)

- **Light Theme**
  - [ ] Background: #F6F5F3
  - [ ] Text: #0B1220
  - [ ] Accent: #8B3A1A (bronze)
  - [ ] Hover/Links: #D97706 (amber)

#### Visual Hierarchy
- [ ] H1 is largest and most prominent
- [ ] Section H2s are appropriately sized
- [ ] Text hierarchy is clear
- [ ] Color contrast is sufficient for readability

### 3. Responsive Design Testing

#### Desktop (1200px and above)
- [ ] Hamburger menu hidden
- [ ] Full navigation visible
- [ ] All content properly aligned
- [ ] Carousel active
- [ ] Sticky CTA not visible

#### Tablet (768px - 1199px)
- [ ] Navigation responsive
- [ ] Content properly reflow
- [ ] Images responsive
- [ ] Forms accessible

#### Mobile (480px - 767px)
- [ ] Hamburger menu visible
- [ ] Navigation hidden by default
- [ ] Mobile menu overlay works
- [ ] Touch targets ≥ 44x44px
- [ ] Sticky CTA visible
- [ ] Single column layout
- [ ] Text readable without zooming

#### Small Mobile (< 480px)
- [ ] All content readable
- [ ] Touch targets still ≥ 44x44px
- [ ] No horizontal scroll
- [ ] Buttons properly sized

### 4. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus order is logical
- [ ] Focus indicator visible (amber outline)
- [ ] Escape key closes mobile menu
- [ ] Can access skip link with Tab

#### Screen Readers (Test with NVDA or JAWS)
- [ ] Page title announced correctly
- [ ] Headings announced with levels
- [ ] Link text is descriptive
- [ ] Button purposes are clear
- [ ] Form labels associated with inputs
- [ ] Skip link is announced first

#### Color & Contrast
- [ ] Text readable with high contrast mode
- [ ] Color not sole indicator of importance
- [ ] Focus indicator visible
- [ ] Link colors distinguishable

#### Motion
- [ ] Animations respect prefers-reduced-motion
- [ ] Page functional with animations disabled
- [ ] Auto-rotating carousel respects motion preferences

### 5. Performance Testing

#### Page Load
- [ ] Page loads within 3 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] Images load properly
- [ ] CSS loads before content renders

#### Google PageSpeed Insights
- [ ] Lighthouse Performance score ≥ 80
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Lighthouse Best Practices score ≥ 90
- [ ] Lighthouse SEO score ≥ 90

#### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### 6. SEO Testing

#### Meta Tags
- [ ] Page title: 47 characters
- [ ] Meta description: 131 characters
- [ ] Meta keywords present
- [ ] Theme color meta tag: #0A0E13

#### Open Graph
- [ ] og:type = website
- [ ] og:title present
- [ ] og:description present
- [ ] og:url present

#### Structured Data
- [ ] Person schema markup valid
- [ ] CollectionPage schema valid
- [ ] WebSite schemas valid
- [ ] No errors in Google Rich Results Test

#### Sitemaps & Robots
- [ ] sitemap.xml accessible
- [ ] sitemap.xml valid
- [ ] robots.txt accessible
- [ ] All URLs in sitemap accessible

### 7. Cross-Browser Testing

Test in all major browsers:

#### Chrome/Chromium
- [ ] Desktop version
- [ ] Mobile version

#### Firefox
- [ ] Desktop version
- [ ] Mobile version

#### Safari
- [ ] Desktop version
- [ ] iOS version

#### Edge
- [ ] Desktop version

### 8. Mobile Device Testing

#### iOS Devices
- [ ] iPhone 12/13/14 Safari
- [ ] iPhone SE Safari
- [ ] iPad Safari

#### Android Devices
- [ ] Android Chrome
- [ ] Android Firefox
- [ ] Samsung Internet

### 9. Security Testing

#### Links & External Resources
- [ ] No mixed content warnings
- [ ] HTTPS enforced
- [ ] External links have rel="noopener noreferrer"
- [ ] No sensitive data in URLs

#### Content
- [ ] No hardcoded passwords
- [ ] No API keys exposed
- [ ] No console logs with sensitive data

### 10. Content Testing

#### Copy & Messaging
- [ ] No typos or grammatical errors
- [ ] Tone is professional and authoritative
- [ ] All sections have clear purpose
- [ ] CTAs are compelling
- [ ] Contact information is accurate

#### Images
- [ ] All images have descriptive alt text
- [ ] Images are properly optimized
- [ ] Images load correctly
- [ ] Image aspect ratios preserved

---

## Automated Testing

### Tools to Use

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Target: 90+ scores across all categories

2. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Check: Schema markup validation

3. **W3C Markup Validator**
   - URL: https://validator.w3.org/
   - Check: HTML validity

4. **WAVE Accessibility Checker**
   - URL: https://wave.webaim.org/
   - Check: Accessibility issues

5. **Lighthouse (Chrome DevTools)**
   - Run: Chrome DevTools > Lighthouse
   - Check: Performance, Accessibility, Best Practices, SEO

---

## Testing Report Template

```markdown
## Testing Results - [Date]

### Overall Status: [PASS/FAIL]

#### Functionality
- Navigation: [PASS/FAIL]
- Interactive Elements: [PASS/FAIL]
- Forms: [PASS/FAIL]

#### Design
- Color Themes: [PASS/FAIL]
- Visual Hierarchy: [PASS/FAIL]
- Responsiveness: [PASS/FAIL]

#### Performance
- Page Load: [PASS/FAIL]
- Lighthouse Scores: [Scores]
- Core Web Vitals: [Status]

#### Accessibility
- Keyboard Navigation: [PASS/FAIL]
- Screen Reader: [PASS/FAIL]
- Color Contrast: [PASS/FAIL]

#### SEO
- Meta Tags: [PASS/FAIL]
- Schema Markup: [PASS/FAIL]
- Sitemaps: [PASS/FAIL]

#### Security
- HTTPS: [PASS/FAIL]
- External Links: [PASS/FAIL]
- No Sensitive Data: [PASS/FAIL]

### Issues Found
[List any issues]

### Recommendations
[List improvements]
```

---

## Continuous Monitoring

### Weekly Checks
- [ ] Google Search Console for errors
- [ ] Google Analytics for traffic patterns
- [ ] Broken link checker
- [ ] SSL certificate status

### Monthly Checks
- [ ] Core Web Vitals performance
- [ ] Search ranking changes
- [ ] Competitor analysis
- [ ] Content freshness review

### Quarterly Checks
- [ ] Comprehensive accessibility audit
- [ ] Performance optimization review
- [ ] SEO strategy evaluation
- [ ] User behavior analysis

---

## Post-Launch Checklist

- [ ] Google Analytics ID configured and tracking
- [ ] Google Search Console connected
- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing
- [ ] Robots.txt accessible
- [ ] Favicon displaying correctly
- [ ] All links functional
- [ ] Forms working correctly
- [ ] Mobile version tested on devices
- [ ] Desktop version tested in browsers
- [ ] Lighthouse audit completed
- [ ] WAVE accessibility check completed
- [ ] Rich Results test passed
- [ ] Monitoring setup configured
- [ ] Team trained on maintenance

---

## Common Issues & Solutions

### Image Not Loading
- Check file path
- Verify file exists
- Check file permissions
- Verify image format supported

### Links Not Working
- Check URL syntax
- Verify relative vs absolute paths
- Check for typos
- Verify files exist

### Mobile Menu Not Working
- Check JavaScript errors in console
- Verify mobile breakpoint (768px)
- Check z-index values
- Verify click handlers

### Theme Not Persisting
- Check localStorage enabled
- Check browser privacy settings
- Check console for errors
- Verify localStorage key names

### Analytics Not Tracking
- Verify Google Analytics ID
- Check for ad blockers
- Check for CSP restrictions
- Verify gtag function exists

---

**Last Updated**: January 2026  
**Status**: Testing Framework Ready ✅
