# How to Add Your Own Job Photos to Fann's Cleaning Website

This guide will show you exactly where and how to add photos of your actual cleaning jobs to the website.

## Step 1: Prepare Your Photos

1. **Gather your best cleaning job photos** - before/after shots work great!
2. **Resize images** for web (recommended: 1200px wide max for quality, or 800px for faster loading)
3. **Name them descriptively** like:
   - `kitchen-before.jpg` and `kitchen-after.jpg`
   - `living-room-clean.jpg`
   - `office-deep-clean.jpg`
   - etc.

## Step 2: Upload Photos to the Website

1. Place all your photos in the `/public` folder of the project
2. You can create subfolders like `/public/gallery` or `/public/jobs` to keep them organized

Example structure:
```
/public
  /gallery
    kitchen-deep-clean-1.jpg
    kitchen-deep-clean-2.jpg
    living-room-before.jpg
    living-room-after.jpg
    office-cleaning-1.jpg
    bathroom-sparkle.jpg
    etc.
```

## Step 3: Update the Code to Show Your Photos

### A. Photo Gallery Section (8 photos)

**File to edit:** `/app/page.tsx`
**Line:** Around line 584-594

**Current code:**
```javascript
[
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop",
  // ... more stock photos
].map((img, i) => (
```

**Replace with your photos:**
```javascript
[
  "/gallery/kitchen-deep-clean-1.jpg",
  "/gallery/living-room-before.jpg",
  "/gallery/office-cleaning-1.jpg",
  "/gallery/bathroom-sparkle.jpg",
  "/gallery/bedroom-fresh.jpg",
  "/gallery/kitchen-deep-clean-2.jpg",
  "/gallery/carpet-clean.jpg",
  "/gallery/window-shine.jpg"
].map((img, i) => (
```

### B. Before & After Section (2 transformations)

**File to edit:** `/app/page.tsx`
**Line:** Around line 505-516

**Current code:**
```javascript
[
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
    title: "Kitchen Deep Clean"
  },
  {
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
    title: "Living Room Refresh"
  }
]
```

**Replace with your before/after photos:**
```javascript
[
  {
    before: "/gallery/kitchen-before.jpg",
    after: "/gallery/kitchen-after.jpg",
    title: "Kitchen Deep Clean"
  },
  {
    before: "/gallery/living-room-before.jpg",
    after: "/gallery/living-room-after.jpg",
    title: "Living Room Transformation"
  }
]
```

### C. Service Section Images (3 service cards)

**File to edit:** `/app/page.tsx`
**Line:** Around line 346-370

**Current code:**
```javascript
{
  icon: "home",
  title: "Residential Cleaning",
  // ...
  image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop"
},
```

**Replace with:**
```javascript
{
  icon: "home",
  title: "Residential Cleaning",
  // ...
  image: "/gallery/residential-clean.jpg"
},
{
  icon: "building",
  title: "Commercial Cleaning",
  // ...
  image: "/gallery/office-clean.jpg"
},
{
  icon: "sparkles",
  title: "Deep Cleaning",
  // ...
  image: "/gallery/deep-clean.jpg"
},
```

### D. Hero Background Image

**File to edit:** `/app/page.tsx`
**Line:** Around line 262-267

**Current code:**
```javascript
<img
  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop"
  alt="Professional cleaning service"
  className="w-full h-full object-cover opacity-20"
/>
```

**Replace with:**
```javascript
<img
  src="/gallery/hero-background.jpg"
  alt="Professional cleaning service"
  className="w-full h-full object-cover opacity-20"
/>
```

## Important Notes

- **Image Paths**: When referencing images in `/public`, use `/` at the start (e.g., `/gallery/photo.jpg`)
- **File Formats**: Use `.jpg` for photos (smaller file size), `.png` for graphics with transparency
- **Image Optimization**: Consider compressing images before uploading (use tools like TinyPNG.com)
- **Alt Text**: Update the `alt` attributes to describe your specific photos

## Quick Reference

| Section | Number of Photos | Recommended Size |
|---------|-----------------|------------------|
| Photo Gallery | 8 photos | 800x800px (square) |
| Before/After | 2 pairs (4 photos) | 800x600px |
| Service Cards | 3 photos | 800x600px |
| Hero Background | 1 photo | 1920x1080px |

## Need Help?

If you need assistance:
1. Make sure photos are in `/public` folder
2. Check that file names match exactly (case-sensitive!)
3. Clear your browser cache to see changes
4. Check browser console (F12) for any image loading errors

---

**Pro Tip:** Start with just 2-3 of your best photos in the gallery section to test, then add more once you're comfortable with the process!
