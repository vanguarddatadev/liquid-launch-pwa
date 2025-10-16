# Liquid Launch - Team Liquid Influencer Marketing PWA

A Progressive Web App for Team Liquid's influencer marketing platform. Features include package comparisons, campaign management portals, and mobile-optimized experiences.

## Features

- 📱 **Progressive Web App** - Install on mobile and desktop
- 🌐 **Offline Support** - Works without internet connection
- 📊 **Manager Portal** - Campaign management dashboard
- 🎮 **Influencer Portal** - Influencer campaign tracking
- 💰 **Package Comparison** - Compare all tiers vs competitors
- 📱 **Mobile Optimized** - Fully responsive design

## Pages Included

1. **Marketing Page** (`liquid-launch-rotating-hero.html`) - Main landing page with rotating hero
2. **Packages** (`liquid-launch-packages-main.html`) - Bronze, Silver, Gold, Platinum packages
3. **Manager Portal** (`liquid-launch-manager-portal.html`) - Campaign manager dashboard
4. **Influencer Portal** (`liquid-launch-influencer-portal.html`) - Influencer dashboard
5. **Sign Up** (`liquid-launch-signup.html`) - Client registration
6. **Comparison** (`comparison-5col-all-packages.html`) - Full package comparison

## Deployment to GitHub Pages

### Option 1: Using GitHub Desktop (Easiest)

1. **Install GitHub Desktop**
   - Download from https://desktop.github.com/

2. **Create a New Repository**
   - Open GitHub Desktop
   - Click "File" → "New Repository"
   - Name: `liquid-launch-pwa`
   - Local Path: Choose the "Opera Event" folder
   - Click "Create Repository"

3. **Publish to GitHub**
   - Click "Publish repository"
   - Uncheck "Keep this code private" if you want it public
   - Click "Publish Repository"

4. **Enable GitHub Pages**
   - Go to your repository on GitHub.com
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://[your-username].github.io/liquid-launch-pwa/`

### Option 2: Using Command Line

1. **Initialize Git Repository**
   ```bash
   cd "/mnt/c/Users/aring/Opera Event"
   git init
   ```

2. **Add All Files**
   ```bash
   git add .
   git commit -m "Initial commit - Liquid Launch PWA"
   ```

3. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `liquid-launch-pwa`
   - Don't initialize with README
   - Click "Create repository"

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/[your-username]/liquid-launch-pwa.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Save

### Option 3: Using GitHub Web Interface

1. **Create New Repository**
   - Go to https://github.com/new
   - Name: `liquid-launch-pwa`
   - Check "Public"
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag all files from "Opera Event" folder
   - Commit changes

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: "main" branch
   - Save

## PWA Installation

Once deployed, users can:
- **Desktop**: Click the install button in the browser address bar
- **Mobile**: Click "Add to Home Screen" from the browser menu
- **iOS**: Tap Share → Add to Home Screen

## File Structure

```
/
├── index.html                              # Main entry point
├── manifest.json                           # PWA manifest
├── service-worker.js                       # Offline support
├── liquid-launch-rotating-hero.html        # Marketing page
├── liquid-launch-packages-main.html        # Packages
├── liquid-launch-manager-portal.html       # Manager dashboard
├── liquid-launch-influencer-portal.html    # Influencer dashboard
├── liquid-launch-signup.html               # Sign up form
├── comparison-5col-all-packages.html       # Package comparison
└── README.md                               # This file
```

## Local Development

To test locally:

1. **Using Python**:
   ```bash
   cd "/mnt/c/Users/aring/Opera Event"
   python -m http.server 8000
   ```
   Visit: http://localhost:8000

2. **Using Node.js**:
   ```bash
   npx http-server
   ```
   Visit: http://localhost:8080

## PWA Features

- ✅ Offline functionality
- ✅ Install to home screen
- ✅ App shortcuts to key pages
- ✅ Mobile-optimized layouts
- ✅ Theme color integration
- ✅ Service worker caching

## Browser Support

- Chrome/Edge: Full PWA support
- Safari: Limited PWA support (requires Add to Home Screen)
- Firefox: Partial PWA support
- Opera: Full PWA support

## Updates

To update the PWA after deployment:

1. Make changes to your files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: [description]"
   git push
   ```
3. GitHub Pages will automatically update (may take a few minutes)

## Troubleshooting

### PWA Not Installing
- Ensure you're accessing via HTTPS (GitHub Pages provides this automatically)
- Check that `manifest.json` and `service-worker.js` are accessible
- Clear browser cache and try again

### Service Worker Not Updating
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear site data in browser DevTools → Application → Clear Storage

### GitHub Pages Not Working
- Verify GitHub Pages is enabled in repository settings
- Check that `index.html` exists in the root directory
- Wait 5-10 minutes for initial deployment

## License

© 2025 Team Liquid. All rights reserved.

## Contact

For issues or questions, please create an issue in the GitHub repository.
