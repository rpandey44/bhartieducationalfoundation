# Bhartidevi Educational Foundations - Website

A complete, professional, responsive NGO website frontend for Bhartidevi Educational Foundations, dedicated to supporting disabled and physically challenged children through education, care, therapy, and support services.

## 🎯 About

Bhartidevi Educational Foundations works with 50+ children, providing comprehensive support including:
- Inclusive Education Programs
- Therapy & Rehabilitation Services
- Nutrition & Healthcare
- Skill Development Programs

## 📁 Project Structure

```
bharti/
├── index.html          # Home page
├── about.html          # About Us page
├── gallery.html        # Gallery page
├── volunteers.html     # Volunteers page
├── initiatives.html    # Initiatives page
├── donation.html       # Donation page
├── contact.html        # Contact Us page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript file
├── images/
│   └── logo.svg        # NGO logo (transparent background)
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone or download this repository**

2. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

3. **Replace the logo:**
   - Replace `images/logo.svg` with your actual logo
   - Ensure the logo has a transparent background
   - Maintain aspect ratio (recommended: square or rectangular)

## 📄 Pages Overview

### Home (`index.html`)
- Hero section with mission statement
- Impact statistics (50+ children, services provided)
- Mission overview
- Success story
- Initiatives preview
- Call-to-action buttons

### About (`about.html`)
- NGO story and history
- Founder's vision
- Mission and core values (Dignity, Inclusion, Compassion, Excellence, Empowerment)
- Impact metrics

### Gallery (`gallery.html`)
- Image gallery with three categories:
  - Education
  - Therapy & Rehabilitation
  - Events & Celebrations
- Lightbox functionality for image viewing
- Hover effects and animations

### Volunteers (`volunteers.html`)
- Why volunteer section
- Volunteer roles (Teaching, Care, Events, Skill Development)
- Volunteer application form with validation

### Initiatives (`initiatives.html`)
- Detailed information about four programs:
  1. Inclusive Education Program
  2. Therapy & Rehabilitation
  3. Nutrition & Healthcare
  4. Skill Development
- Each initiative includes: Problem, Solution, and Impact

### Donation (`donation.html`)
- Donation cards (₹500, ₹1,000, ₹2,000)
- Custom donation form
- Impact of donations
- Transparency information

### Contact (`contact.html`)
- Contact information (address, phone, email, office hours)
- Contact form with validation
- Google Maps placeholder
- Social media links

## 🎨 Design Features

### Color Scheme
- **Primary Yellow:** `#FFF9E6` / `#FFFACD`
- **Primary Green:** `#90EE90` / `#C8E6C9`
- **Primary Orange:** `#FFA500` / `#FFD700`
- **White:** `#FFFFFF`

### Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navigation bar
- ✅ Smooth scrolling
- ✅ Subtle animations and hover effects
- ✅ Form validation (JavaScript)
- ✅ Gallery lightbox
- ✅ Clean, modern, trustworthy design
- ✅ SEO-friendly HTML structure
- ✅ Accessible markup

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No frameworks, pure JS
- **SVG** - Scalable logo format

## 📝 Customization

### Update Contact Information
Edit contact details in:
- `contact.html` - Contact page
- Footer section in all HTML files

### Replace Placeholder Images
The gallery uses placeholder images. Replace them with actual photos:
1. Add images to `images/` folder
2. Update `src` attributes in `gallery.html`

### Update Content
All content is in the HTML files. Simply edit the text in:
- All `.html` files for page content
- `css/style.css` for styling
- `js/script.js` for functionality

### Add Google Maps
Replace the map placeholder in `contact.html`:
1. Get Google Maps embed code from Google Maps
2. Replace the `.map-container` div content with the iframe embed code

## 🌐 Deployment

### GitHub Pages

1. **Create a GitHub repository**

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/bhartidevi-foundation.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source branch (usually `main`)
   - Select root folder (`/`)
   - Click Save

4. **Your site will be live at:**
   `https://yourusername.github.io/bhartidevi-foundation/`

### Other Hosting Options
- Netlify
- Vercel
- Firebase Hosting
- Any static hosting service

## 📧 Contact Information

**Note:** Update the following in all HTML files:
- Email: `info@bhartidevifoundation.org`
- Phone: `+91-XXXXXXXXXX`
- Address: `[Your Address], India`

## 🔒 Privacy Policy

Add a privacy policy page and update the link in the footer of all HTML files.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a frontend-only project. For production deployment:
- Add backend integration for forms
- Integrate payment gateway for donations
- Add content management system (optional)
- Implement proper image handling
- Add analytics tracking

## 📄 License

This project is created for Bhartidevi Educational Foundations.

## 🙏 Credits

Website developed for Bhartidevi Educational Foundations - Empowering disabled and physically challenged children through education, care, and compassion.

---

**Note:** This is a frontend-only implementation. Forms are validated but do not submit to a server. Integrate with a backend service for production use.

