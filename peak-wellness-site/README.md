# Peak Wellness Centers Website

A modern, responsive website built with React and Vite.

---

## 🚀 Quick Start: Deploy to Vercel

### Step 1: Set Up GitHub Repository
1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **+** icon → **New repository**
3. Name it `peak-wellness-website`
4. Keep it **Public** or **Private** (your choice)
5. Click **Create repository**

### Step 2: Upload Files to GitHub
**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL the files from this folder
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
cd peak-wellness-site
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/peak-wellness-website.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `peak-wellness-website` repository
4. Vercel auto-detects Vite - just click **Deploy**
5. Wait ~1 minute for deployment
6. Your site is live! 🎉

### Step 4: Custom Domain (Optional)
1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add your custom domain (e.g., `peakwellnesscenters.com`)
3. Follow Vercel's instructions to update your DNS settings

---

## ✏️ How to Edit Your Website

All your website content is in ONE file: **`src/config.js`**

### Editing Contact Information
Open `src/config.js` and find:
```javascript
// CONTACT INFORMATION
phone: "(828) 692-6383",
phoneRaw: "8286926383",
email: "contact@peakwellnesscenters.com",
```
Change these to your actual phone and email.

### Editing Team Members
Find the `team` array and add/remove/edit:
```javascript
team: [
  {
    name: "Dr. Sarah Mitchell",      // Change name
    role: "Clinical Director",        // Change role
    specialty: "Anxiety & Depression" // Change specialty
  },
  // Add more team members by copying the format above
],
```

### Editing Locations
Find the `locations` array:
```javascript
locations: [
  {
    city: "Asheville",
    address: "1293 Mountain View Dr, Suite 200",
    phone: "(828) 692-6383"
  },
  // Add more locations...
],
```

### Editing FAQ Questions
Find the `faqItems` array:
```javascript
faqItems: [
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule by calling..."
  },
  // Add more FAQs...
],
```

### Editing Insurance Providers
```javascript
insuranceProviders: [
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  // Add more...
],
```

---

## 📬 Setting Up the Contact Form

The contact form needs a service to receive messages. We recommend **Formspree** (free tier available):

### Setting Up Formspree
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like: `xabc1234`)
4. Open `src/config.js` and replace:
```javascript
formspreeId: "YOUR_FORMSPREE_ID", // Replace with: "xabc1234"
```

Now when someone submits the contact form:
- You'll receive an email notification
- The submission is stored in your Formspree dashboard
- The user sees a success message

---

## 🔄 Making Changes After Deployment

1. Edit `src/config.js` on GitHub (or locally)
2. **If editing on GitHub:**
   - Click the file → Click pencil icon (Edit)
   - Make your changes
   - Click **Commit changes**
   - Vercel automatically redeploys! (takes ~1 min)

3. **If editing locally:**
   ```bash
   git add .
   git commit -m "Updated contact info"
   git push
   ```
   Vercel automatically redeploys!

---

## 📁 File Structure

```
peak-wellness-site/
├── index.html          # Main HTML file
├── package.json        # Project dependencies
├── vite.config.js      # Build configuration
├── public/
│   └── favicon.svg     # Browser tab icon
└── src/
    ├── main.jsx        # App entry point
    ├── App.jsx         # Main website component
    └── config.js       # ⭐ EDIT THIS FILE FOR ALL CONTENT
```

---

## 🎨 Customizing Colors (Advanced)

The color scheme is defined in `src/App.jsx`. Main colors:
- Primary Green: `#5B8A72`
- Dark Green: `#2D5048`
- Light Green: `#A8C6B6`
- Background: `#FFFDF9`

---

## ❓ Need Help?

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Formspree Documentation:** [help.formspree.io](https://help.formspree.io)
- **React Documentation:** [react.dev](https://react.dev)

---

## 📝 License

This website was custom-built for Peak Wellness Centers.
