# Mockups Directory

## Card Collections System
- **card-browser.html** - Simple navigation page with 5 collection links
- **5 card collection files** organized by theme:
  - cards-content-data.html (7 cards)
  - cards-interactive-technical.html (7 cards) 
  - cards-handcrafted-creative.html (10 cards)
  - cards-project-specific.html (5 cards)
  - cards-media-showcase.html (7 cards)
- **card-styles.css** - Shared styling for all cards
- Each card has unique label in top-right corner for identification

### Specific Cards by Collection

#### Content & Data Cards (7)
- **feature-list**: Bullet-point feature showcase
- **timeline**: Chronological progress display
- **metrics**: Key performance indicators
- **data-table**: Structured data presentation
- **process-steps**: Sequential workflow visualization
- **comparison**: Before/after contrast display
- **progress-tracker**: Visual completion indicators

#### Interactive & Technical Cards (7)
- **accordion**: Expandable content sections
- **workflow**: Step-by-step process flow
- **tabs**: Tabbed content navigation
- **terminal**: Command-line interface mockup
- **code-snippet**: Syntax-highlighted code display
- **changelog**: Version history timeline
- **file-explorer**: Directory tree navigation

#### Handcrafted & Creative Cards (10)
- **postit-cluster**: Sticky note arrangement
- **recipe**: Instruction card format
- **notebook**: Lined paper aesthetic
- **messages**: Chat conversation interface
- **polaroid-stack**: Photo collection display
- **music-player**: Audio player controls
- **film-strip**: Sequential frame display
- **typewriter**: Monospace text animation
- **catalog**: Library card index style
- **journey**: Progress map visualization

#### Project Specific Cards (5)
- **expression-builder**: Portrait pipeline mix-and-match
- **dual-grid**: World editor architecture demo
- **context-chat**: Dialogue system showcase
- **priority-ladder**: Rule hierarchy display
- **community-board**: Solo dev platform hub

#### Media Showcase Cards (7)
- **browser-window**: Realistic browser mockup for web content display
- **godot-engine**: Godot game engine interface with viewport
- **unity-engine**: Unity editor interface with scene view
- **code-editor**: VS Code style editor with syntax highlighting
- **aseprite-window**: Pixel art editor with layers and palette
- **version-control**: GitHub-style PR view with diff display
- **note-app**: Notion/Obsidian-style note-taking interface

## Other Pages
- **browse.html** - Main mockup browser (project pages + card collections)
- **Individual project mockups** - Various work/* files with different styling approaches

## Design Rules
Reference design_guide.md (in this mockups folder) for vibe check guidelines:
- Warm, lean, approachable (not corporate/sterile)
- No big numbers as hero elements, no emojis, no flashy animations
- Colors: #0f1419 bg, #232937 cards, #92bba1 sage accent, #66a5da blue
- Keep things simple and efficient for navigation

## Design Decisions & Border Treatments

### Border Styling Approach
- **Primary accent borders**: 3-4px solid sage green (#92bba1) for emphasis
- **Subtle card borders**: 1px solid with low opacity for separation
- **Border-radius**: Consistent 8-12px for cards, 20px for pills/buttons
- **Left-border accents**: Used on cards to indicate priority/category
- **No decorative borders**: Avoiding ornate or flashy border effects

### Visual Hierarchy
- Border thickness indicates importance (1px subtle, 3-4px emphasis)
- Sage green borders draw attention to key elements
- Hover states modify border color/opacity for interactivity
- Comparison cards use borders to separate before/after states

## Notes
- All card labels are unique across collections
- Cards open in new tabs from browser
- Removed corporate-feeling cards (stat showcases, speedometers, etc.)
- Navigation is minimal and functional, not fancy
- Border treatments prioritize clarity over decoration