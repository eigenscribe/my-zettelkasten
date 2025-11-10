# Local Setup Guide - Zettelkasten Math Journal

This guide will help you set up and run your Zettelkasten Math Journal on your local computer, independent of Replit.

## Prerequisites

Before you begin, make sure you have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Check if installed: Open terminal and type `node --version`

2. **Python** (version 3.8 or higher) - Optional, only needed if using Flask backend
   - Download from: https://www.python.org/downloads/
   - Check if installed: Open terminal and type `python --version` or `python3 --version`

3. **Git** (recommended for version control)
   - Download from: https://git-scm.com/
   - Check if installed: `git --version`

## Step 1: Download Your Project from Replit

### Option A: Download as ZIP
1. In your Replit project, click the three dots menu (⋮) in the file tree
2. Select "Download as ZIP"
3. Extract the ZIP file to a folder on your computer

### Option B: Clone via Git (if you have a Git repository)
```bash
git clone <your-repository-url>
cd <project-folder>
```

## Step 2: Install Dependencies

Open a terminal in your project folder and run:

### Install Frontend Dependencies
```bash
cd client
npm install
cd ..
```

### Install Backend Dependencies (Optional - if using Flask)
```bash
pip install flask flask-cors
# or if using pip3:
pip3 install flask flask-cors
```

## Step 3: Run the Development Server

You have two options for running the project:

### Option A: Frontend Only (Recommended for Most Users)

This runs just the React frontend with Vite's built-in development server:

```bash
cd client
npm run dev
```

Then open your browser to: `http://localhost:5000`

### Option B: Full Stack (Frontend + Flask Backend)

If you need the Flask backend for future API features:

**Terminal 1 - Start Flask:**
```bash
python server.py
# or
python3 server.py
```

**Terminal 2 - Start Vite:**
```bash
cd client
npm run dev
```

Then open your browser to: `http://localhost:5000`

## Step 4: Making Changes

All your content is stored in `client/src/data/sampleNotes.js`. To add or edit notes:

1. Open `client/src/data/sampleNotes.js` in your favorite code editor
2. Add new notes to the `sampleNotes` array following the existing format
3. The page will automatically refresh to show your changes

### Note Structure Example:
```javascript
{
  id: '202512150001',
  title: 'Your Note Title',
  group: 'prototypes', // or 'tutorials', 'howto', 'explanations', 'reference'
  tags: ['tag1', 'tag2'],
  content: '<div>Your content here with HTML and MathJax</div>',
  linkedNotes: ['202511100001'], // IDs of connected notes
  citations: ['citation-key'] // Reference keys from bibliography
}
```

## Step 5: Building for Production

When you're ready to create a static website you can host anywhere:

```bash
cd client
npm run build
```

This creates a `dist` folder with your complete website. You can:
- Upload it to any web hosting service (Netlify, Vercel, GitHub Pages, etc.)
- Serve it locally with: `npx serve dist`

## Project Structure

```
your-project/
├── client/                  # Frontend React application
│   ├── public/
│   │   └── assets/         # Images (logo, favicon, backgrounds)
│   ├── src/
│   │   ├── components/     # React components (Sidebar, NoteDisplay, GraphView)
│   │   ├── data/          # Your notes data (sampleNotes.js)
│   │   ├── App.jsx        # Main app component
│   │   └── index.css      # Styles
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── server.py              # Flask backend (optional)
└── SETUP_GUIDE.md         # This file
```

## Customization Tips

### Change Fonts
Edit `client/src/index.css` - look for the `:root` section at the top

### Modify Colors
Edit the CSS variables in `client/src/index.css`:
```css
--color-primary: #14b5ff;    /* Main blue color */
--color-link: #7652f5;       /* Purple links */
--color-math: #00f5db;       /* Math/code color */
```

### Add Your Own Images
Replace files in `client/public/assets/`:
- `logo.png` - Header logo
- `favicon.ico` - Browser tab icon
- `wisp-bg.jpg` - Background image
- `orb.png` - Footer decoration

## Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org/

### Port 5000 already in use
- Change the port in `client/vite.config.js`:
```javascript
server: {
  port: 3000, // Change this number
  // ...
}
```

### Changes not appearing
- Make sure the development server is running (`npm run dev`)
- Try clearing your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### MathJax not rendering
- MathJax loads from a CDN. Make sure you have internet connection
- Check that the MathJax script is in `client/index.html`

## Backing Up Your Work

Your notes are in `client/src/data/sampleNotes.js` - this is the most important file to backup!

Recommended backup methods:
1. Copy the entire project folder to a cloud drive (Google Drive, Dropbox, etc.)
2. Use Git for version control: `git add .` and `git commit -m "Save my notes"`
3. Export `sampleNotes.js` regularly to a backup location

## Next Steps

- **Add more notes** by editing `client/src/data/sampleNotes.js`
- **Organize notes** into the 5 Diataxis categories (Prototypes, Tutorials, How-to Guides, Explanations, Reference)
- **Create connections** by linking notes together using the `linkedNotes` array
- **View your knowledge graph** by clicking "Graph" in the header to see how everything connects

## Support

If you run into issues:
1. Check that all prerequisites are installed
2. Make sure you're in the correct folder when running commands
3. Try deleting `node_modules` and running `npm install` again
4. Check the browser console (F12) for any error messages

---

**Enjoy your personal mathematical knowledge garden! 📚✨**
