/**
 * ====================================================================
 * G E M — Personal Profile Website Configuration
 * Exact guns.lol / sidelegendop aesthetic profile page
 * ====================================================================
 * Customize your entire website from this single file.
 */

window.PROFILE_CONFIG = {
  // ------------------------------------------------------------------
  // 1. IDENTITY & guns.lol PROFILE CARD SETTINGS
  // ------------------------------------------------------------------
  identity: {
    // Top guns.lol stylish title header (e.g. "MӨVΣ ӨП!" or "G E M")
    headerTitle: "MӨVΣ ӨП!",
    // Primary display username
    username: "G E M",
    // Secondary sub-handle (e.g. "dontlovesomeone")
    handle: "dontlovesomeone",
    // guns.lol Discord activity status text beneath username
    statusText: "ozoii.",
    // Discord activity emoji
    statusEmoji: "🎧",
    // Discord status presence icon: "dnd" (Do Not Disturb - red with white minus), "online" (green), "idle" (amber)
    presenceStatus: "dnd",
    // Personal bio
    bio: "just a human being",
    // Avatar image path (inside assets/ folder)
    avatarUrl: "assets/avatar.jpg",
    // Fallback avatar if avatar.jpg fails to load
    avatarFallback: "assets/avatar.png",
    // Show verified checkmark badge next to username
    isVerified: true,
    verifiedTooltip: "Verified Identity"
  },

  // ------------------------------------------------------------------
  // 2. BADGES & ROLES
  // ------------------------------------------------------------------
  badges: [
    { text: "Developer", icon: "code" },
    { text: "Anime", icon: "sparkles" },
    { text: "Night Owl", icon: "moon" }
  ],

  // ------------------------------------------------------------------
  // 3. REAL GLOBAL VIEW COUNTER & VIEWER CLOCK
  // ------------------------------------------------------------------
  metadata: {
    // Clean location (optional)
    location: {
      enabled: false,
      text: "Tokyo, Japan",
      icon: "map-pin"
    },
    // Live Viewer Clock: ticks live according to whoever is currently viewing
    clock: {
      enabled: true,
      autoLocalTime: true,
      showSeconds: true,
      format12Hour: true
    },
    // Real Global Visitor Counter (live cloud API)
    viewsCounter: {
      enabled: true,
      apiKey: "gem_official_profile_views_2026",
      baseCount: 0,
      label: "", // guns.lol displays clean number next to eye icon
      tooltip: "Real Global Visitor Count"
    }
  },

  // ------------------------------------------------------------------
  // 4. ENTRY SCREEN ("CLICK TO ENTER")
  // ------------------------------------------------------------------
  entryScreen: {
    enabled: true,
    mainText: "CLICK TO ENTER",
    subText: "🎧 best experienced with sound",
    rememberPerSession: true
  },

  // ------------------------------------------------------------------
  // 5. BACKGROUND VIDEO SETTINGS
  // ------------------------------------------------------------------
  // Place your own MP4 video in assets/background.mp4.
  // The system automatically scales, centers, and crops it seamlessly for both PC and phones.
  video: {
    url: "assets/background.mp4",
    fallbackImage: "assets/avatar.png",
    mutedByDefault: true,
    overlayOpacity: 0.65,
    blur: false,
    playbackRate: 1.0
  },

  // ------------------------------------------------------------------
  // 6. BACKGROUND MUSIC SETTINGS
  // ------------------------------------------------------------------
  // Place your own MP3 song in assets/background-music.mp3.
  audio: {
    url: "assets/background-music.mp3",
    trackTitle: "Midnight Drift",
    artist: "G E M",
    defaultVolume: 0.35,
    autoPlayOnEntry: true,
    smoothFadeIn: true,
    fadeInDurationMs: 1500,
    storageVolumeKey: "gem_bg_audio_volume",
    storageMuteKey: "gem_bg_audio_muted"
  },

  // ------------------------------------------------------------------
  // 7. SOCIAL MEDIA LINKS (guns.lol style icon row)
  // ------------------------------------------------------------------
  socials: [
    {
      id: "discord",
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/users/ozoii.",
      handle: "ozoii.",
      tooltip: "Discord: ozoii. (Click to copy)",
      copyOnClick: true // Clicking Discord copies your handle to clipboard
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/gwen_tauro/?hl=en",
      handle: "@gwen_tauro",
      tooltip: "Instagram: @gwen_tauro",
      copyOnClick: false
    },
    {
      id: "github",
      name: "GitHub",
      icon: "github",
      url: "https://github.com/2416033gemson",
      handle: "2416033gemson",
      tooltip: "GitHub: 2416033gemson",
      copyOnClick: false
    },
    {
      id: "spotify",
      name: "Spotify",
      icon: "spotify",
      url: "https://open.spotify.com/user/31ek46higmnx3vmvumtyswpoirka?si=24ade29feb5e4154",
      handle: "Spotify",
      tooltip: "Listen on Spotify",
      copyOnClick: false
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "youtube",
      url: "https://www.youtube.com/channel/UCkhmGiS8bLmoatwjLBaIs4A",
      handle: "YouTube",
      tooltip: "YouTube Channel",
      copyOnClick: false
    },
    {
      id: "telegram",
      name: "Telegram",
      icon: "telegram",
      url: "https://t.me/XMAXZ9",
      handle: "@XMAXZ9",
      tooltip: "Telegram: @XMAXZ9",
      copyOnClick: false
    }
  ],

  // ------------------------------------------------------------------
  // 8. THEME & COLORS (70% Crimson Red Anime Aesthetic)
  // ------------------------------------------------------------------
  theme: {
    accentColor: "#ef4444",       // Primary Crimson Red Accent (~70%)
    accentSecondary: "#fb7185",   // Secondary Rose Accent (~30%)
    glowColor: "rgba(239, 68, 68, 0.45)",
    cardBackground: "rgba(16, 10, 14, 0.74)",
    cardBorder: "rgba(239, 68, 68, 0.25)"
  },

  // ------------------------------------------------------------------
  // 9. VISUAL EFFECTS
  // ------------------------------------------------------------------
  effects: {
    particles: {
      enabled: true,
      count: 50,
      color: "rgba(239, 68, 68, 0.7)",
      secondaryColor: "rgba(251, 113, 133, 0.55)",
      maxSpeed: 0.6,
      minSize: 1.2,
      maxSize: 3.5
    },
    cardTilt: {
      enabled: true,
      maxDegrees: 7
    },
    customCursor: {
      enabled: true
    },
    clickRipple: {
      enabled: true
    }
  },

  // ------------------------------------------------------------------
  // 10. QUICK CONTROLS BAR
  // ------------------------------------------------------------------
  controls: {
    showAudioWidget: true,
    showVideoMute: true,
    showCopyUrl: true,
    showFullscreen: true
  }
};
