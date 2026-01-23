# Peak Wellness Centers Website v3

A multi-page React website with SEO optimization and Google Analytics.

## 🚀 What's New in This Version

1. **SEO Optimization** - Meta tags, Open Graph, structured data for local business
2. **Google Analytics** - Ready to track visitors (just add your tracking ID)
3. **Multi-Page Navigation** - Separate pages instead of one long scroll
4. **Mobile Fixes** - Form and footer now wrap properly on phones
5. **Cleaner Design** - Removed stats section, professional icons

---

## 📁 Files to Upload to GitHub

Replace ALL files in your existing repo with these new files:

```
peak-v3/
├── index.html          ← SEO meta tags & Google Analytics
├── package.json        ← Updated with react-router-dom
├── vercel.json         ← Handles page routing
├── vite.config.js
├── public/
│   ├── peak_icon.png   ← YOU UPLOAD (nav logo)
│   ├── peak_full.png   ← YOU UPLOAD (footer logo)
│   ├── kevin_picture.png   ← YOU UPLOAD
│   ├── morgan_picture.png  ← YOU UPLOAD
│   └── allen_picture.png   ← YOU UPLOAD
└── src/
    ├── main.jsx
    ├── App.jsx         ← All pages & components
    └── config.js       ← Edit your content here
```

---

## 🔧 Setup Steps

### 1. Upload to GitHub
Delete all existing files in your repo and upload these new ones.

### 2. Add Your Images to `/public` folder:
- `peak_icon.png` - Small logo for navigation (approx 40-50px height)
- `peak_full.png` - Full logo for footer (approx 45-50px height)
- `kevin_picture.png` - Team photo
- `morgan_picture.png` - Team photo  
- `allen_picture.png` - Team photo

### 3. Set Up Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new property for your website
3. Get your Measurement ID (looks like `G-XXXXXXXXXX`)
4. Open `index.html` and replace `GA_MEASUREMENT_ID` (appears twice) with your actual ID

### 4. Set Up Contact Form (Formspree)
1. Go to [formspree.io](https://formspree.io) and create account
2. Create a new form
3. Copy the form ID from the URL
4. Open `src/config.js` and replace `YOUR_FORMSPREE_ID` with your ID

### 5. Update Your Domain (in index.html)
Find and replace `https://peakwellnesscenters.com` with your actual domain URL.

---

## 📝 How to Edit Content

All content is in `src/config.js`:

- **Business Info** - Name, tagline, phone, email, address
- **Team Members** - Names, roles, specialties, photo paths
- **Services** - Titles, descriptions, icons
- **Testimonials** - Quotes and attributions
- **FAQ** - Questions and answers
- **Insurance Providers** - List of accepted insurance

---

## 🌐 Pages

| URL | Page |
|-----|------|
| `/` | Home |
| `/services` | All services with details |
| `/team` | Team member profiles |
| `/contact` | Contact form & info |
| `/resources` | FAQ, Insurance, Rights, Privacy |

---

## 📱 Mobile-Friendly

The site is fully responsive:
- Hamburger menu on mobile
- Form fields stack vertically
- Footer columns stack vertically
- Images resize appropriately

---

## ❓ Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Google Analytics**: [support.google.com/analytics](https://support.google.com/analytics)
- **Formspree**: [help.formspree.io](https://help.formspree.io)
