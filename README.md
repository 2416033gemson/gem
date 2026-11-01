# G E M — Personal Profile Website

> A modern, premium, cinematic personal profile website inspired by **guns.lol** and **sidelegendop** with a 70% dark anime crimson aesthetic, looping animated video background, background music player, glassmorphism UI card, and interactive desktop effects.

![License](https://img.shields.io/badge/License-MIT-rose.svg)
![Theme](https://img.shields.io/badge/Theme-70%25%20Crimson%20Red-red.svg)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero-emerald.svg)

---

## 🌟 Highlights & Features

- **Cinematic Looping Video Background:** High-definition looping video background (`assets/background.mp4`) with dark vignette overlay, optional backdrop blur, and automatic fallback image.
- **"CLICK TO ENTER" Entry Screen:** Smooth cinematic overlay that fades out on user click and starts background audio (complying with modern browser autoplay policies). Remembers your session so refreshing during the same tab session doesn't block you.
- **Audio System:** Fully functional background music player (`assets/background-music.mp3`) with play/pause, volume slider, mute/unmute toggle, track info, and dynamic 4-bar equalizer visualization. Graceful Web Audio API synth fallback if the audio file is missing.
- **Glassmorphism Profile Card:** Center card with 3D perspective mouse tilt, rotating glowing dash avatar ring, live online status indicator, verified badge, and clean personal bio.
- **Social Media Hub:** Dedicated buttons with crisp SVGs and hover tooltips for **Discord**, **Instagram**, **GitHub**, **YouTube**, **Telegram**, and **Spotify**.
- **Interactive Utilities:** One-click "Copy Profile URL" with toast notifications, Fullscreen toggle, and Background Video playback/mute toggle.
- **Real Global Views Counter:** Live cloud visitor counter tracking actual visits worldwide.
- **Visual Effects:** Lightweight HTML5 Canvas particle embers, custom desktop glowing cursor with smooth lerp interpolation (automatically disabled on touchscreen/mobile devices), and CRT scanlines.
- **100% Centralized Customization:** Edit everything through `config.js` without touching HTML or CSS.
- **Zero Build Step:** Pure Vanilla HTML5, CSS3, and JavaScript. Runs offline via `file://` or any web server, and deploys to **GitHub Pages** in seconds.

---

## 📂 Project Structure

```text
GEM-Profile/
│
├── index.html           # Main semantic HTML structure & metadata
├── style.css            # Dark anime glassmorphism styling & animations
├── script.js            # Audio player, adaptive video, cursor, particles, utilities
├── config.js            # Central customization file
├── README.md            # Complete documentation & deployment guide
│
└── assets/
    ├── background.mp4        # 16:9 widescreen video (PC / Laptop / Tablet)
    ├── background-mobile.mp4 # 9:16 vertical video (Smartphones / Portrait view)
    ├── background-music.mp3  # High-quality chill ambient lofi soundtrack
    ├── avatar.png            # Cyber anime aesthetic avatar
    └── favicon.png           # Browser tab icon
```

---

## 🚀 Quick Start (Run Locally)

### Option 1: Direct File Opening
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Local HTTP Server (Recommended)
If you have Python installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## ⚙️ Customization Guide (`config.js`)

All website settings are centralized in `config.js`. Open `config.js` in any text editor:

### 1. Changing Profile Information
```javascript
identity: {
  name: "G E M",
  username: "G E M",
  handle: "@gem",
  tagline: "[ 紅蓮 // CRIMSON VOID ]",
  bio: "just a human being",
  avatarUrl: "assets/avatar.png",
  isVerified: true,
  verifiedTooltip: "Verified Profile"
}
```

### 2. Changing Background Video (PC & Mobile Adaptive)
The website includes an **adaptive dual-video engine**:
- **Desktop/PC/Tablet:** Plays `assets/background.mp4` (16:9 widescreen ratio).
- **Mobile Phones (Portrait):** Automatically switches to `assets/background-mobile.mp4` (9:16 vertical ratio) for flawless full-screen coverage with zero distortion, stretching, or letterboxing.
- **Single Video Fallback:** If you only provide one video, the CSS `object-fit: cover` and GPU centering mathematically scales and centers it for all screens automatically.

Update `config.js`:
```javascript
video: {
  url: "assets/background.mp4",               // PC / Widescreen video
  mobileUrl: "assets/background-mobile.mp4",  // Phone / Portrait vertical video
  mutedByDefault: true,                       // Recommended true for mobile autoplay
  overlayOpacity: 0.65,                       // Adjust darkness (0.0 to 1.0)
  blur: false                                 // Set to true for a frosted blur background
}
```

### 3. Changing Background Music
1. Place your MP3 audio into `assets/` (e.g. `assets/my-song.mp3`).
2. Update `config.js`:
```javascript
audio: {
  url: "assets/my-song.mp3",
  trackTitle: "Your Song Name",
  artist: "Artist Name",
  defaultVolume: 0.35,
  autoPlayOnEntry: true,
  smoothFadeIn: true
}
```

### 4. Updating Social Media Links
Configured with your personal handles and links in `config.js`:
```javascript
socials: [
  { id: "discord", name: "Discord", icon: "discord", handle: "ozoii.", copyOnClick: true },
  { id: "telegram", name: "Telegram", icon: "telegram", url: "https://t.me/XMAXZ9" },
  { id: "github", name: "GitHub", icon: "github", url: "https://github.com/2416033gemson" },
  { id: "spotify", name: "Spotify", icon: "spotify", url: "https://open.spotify.com/user/31ek46higmnx3vmvumtyswpoirka..." },
  { id: "youtube", name: "YouTube", icon: "youtube", url: "https://www.youtube.com/channel/UCkhmGiS8bLmoatwjLBaIs4A" },
  { id: "instagram", name: "Instagram", icon: "instagram", url: "https://www.instagram.com/gwen_tauro/?hl=en" }
]
```

### 5. Modifying Theme Colors & Accents
The site is pre-configured with a **70% Crimson Red Anime Aesthetic** (`#ef4444` and `#fb7185`), with dark charcoal obsidian undertones. You can fine-tune or swap themes anytime in `config.js`:
```javascript
theme: {
  accentColor: "#ef4444",       // Primary Crimson Red Accent (~70%)
  accentSecondary: "#fb7185",   // Secondary Rose Accent (~30%)
  glowColor: "rgba(239, 68, 68, 0.45)",
  cardBackground: "rgba(16, 10, 14, 0.74)"
}
```

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

1. **Create a GitHub Repository:**
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `gem-profile` or `username.github.io`).
   - Set visibility to **Public**.

2. **Upload Your Files:**
   - Push or upload all files (`index.html`, `style.css`, `script.js`, `config.js`, and the `assets/` folder) to the repository root.

3. **Enable GitHub Pages:**
   - Go to your repository **Settings** tab.
   - Click **Pages** in the left sidebar.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and `/ (root)`.
   - Click **Save**.

4. **Access Your Live Website:**
   - Your website will be live at:
     `https://<your-username>.github.io/<repository-name>/`

---

## 🛡️ Fallback Systems & Resilience

- **Missing Video Fallback:** If `assets/background.mp4` is missing, damaged, or unsupported, the website automatically falls back to an aesthetic cosmic gradient mesh without showing a broken media player.
- **Missing Audio Fallback:** If `assets/background-music.mp3` fails to load, a procedural ambient pad synthesizer built with the Web Audio API automatically engages, preventing console errors and keeping music active.
- **Missing Avatar Fallback:** If `assets/avatar.png` is deleted or missing, the avatar image tag automatically swaps to an aesthetic vector avatar with matching purple/cyan accents.
- **Touchscreen Detection:** On mobile and tablet devices, the custom desktop cursor and 3D card tilt are automatically disabled to guarantee native fluid touch scrolling.
- **Reduced Motion:** Fully complies with `prefers-reduced-motion` accessibility standards.

---

## 📄 License
This project is open-source under the **MIT License**. Free to customize and share.
