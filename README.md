# 🚀 Driver Pro Data - PWA with GitHub Sync

A Progressive Web App (PWA) for managing and synchronizing data with GitHub repositories. Works offline and syncs when online.

## ✨ Features

- **PWA Ready**: Installable on any device (phone, tablet, desktop)
- **Offline First**: Works completely offline with Service Worker caching
- **GitHub Integration**: Read/write data to GitHub repositories via API
- **UTF-8 Support**: Handles special characters (tildes, ñ, etc.)
- **Responsive Design**: Mobile-first dark theme
- **No Backend Required**: All data stored in GitHub

## 📦 Files Structure

```
driver-pro-data/
├── index.html          # Main PWA interface
├── app.js              # Application logic & GitHub API
├── styles.css          # Dark theme styling
├── service-worker.js   # Offline caching & sync
├── manifest.json       # PWA configuration
├── config.js           # GitHub configuration storage
├── data.json           # Data storage file
└── README.md           # This file
```

## 🔧 Installation

### Option 1: GitHub Pages (Recommended)

1. Enable GitHub Pages in repository settings
2. Select `main` branch as source
3. Access: `https://your-username.github.io/driver-pro-data/`

### Option 2: Local Development

```bash
git clone https://github.com/cristiantronic2000-spec/driver-pro-data.git
cd driver-pro-data

# Using Python 3
python -m http.server 8000

# Visit: http://localhost:8000
```

## ⚙️ Configuration

### 1. Create Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token (shown only once)

### 2. Configure the App

1. Open the app in your browser
2. Paste your token in the configuration form
3. Enter your GitHub username
4. Enter repository name (e.g., `driver-pro-data`)
5. Click "Validate Configuration"

## 💡 Usage

### Load Data from GitHub
- Click "Load Data" button
- Data from `data.json` is downloaded and cached
- Works offline if already loaded

### Save Data to GitHub
- Enter or modify data in the form
- Click "Save Data" button
- Data syncs to GitHub repository
- Works only when online

### Offline Mode
- App continues to work with cached data
- Changes are queued locally
- Syncs automatically when online

## 🔐 Security

⚠️ **Important**: 
- Never commit your token to version control
- Token stored only in browser's localStorage
- Only accessible on your device
- Token never sent to external servers

## 📱 Install as App

### Android (Chrome)
1. Open in Chrome
2. Menu (⋮) → "Install app"
3. Appears on home screen

### iOS (Safari)
1. Open in Safari
2. Share → "Add to Home Screen"
3. Appears on home screen

## 🐛 Troubleshooting

### "Token invalid" error
- Verify token is correct
- Check token hasn't expired
- Ensure `repo` scope is selected

### "data.json not found"
- File is created automatically on first save
- Or create empty: `{}`

### Offline not working
- Check Service Worker is registered (DevTools → Application)
- Ensure app was opened once online
- Try hard refresh (Ctrl+Shift+R)

## 📚 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **APIs**: GitHub REST API, Service Worker API, LocalStorage
- **Storage**: Browser LocalStorage + GitHub (via API)
- **Encoding**: UTF-8 Base64 for special characters

## 🤝 Contributing

Contributions welcome! Open an issue or submit a PR.

## 📄 License

MIT License - Feel free to use and modify

## 📧 Support

For issues or questions, open a GitHub Issue.

---

**Made with ❤️ for seamless GitHub data synchronization**

🚀 Install it now on your device!