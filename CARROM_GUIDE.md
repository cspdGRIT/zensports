# 🎯 CARROM TOURNAMENT MANAGER - Complete Guide

## 📋 Overview

This is a **professional Carrom tournament and match management system** built specifically for Carrom competitions. It handles both casual generic matches and full tournament management with all standard Carrom scoring rules.

---

## 🎮 **TWO MODES OF OPERATION**

### 1. GENERIC MATCHES (Quick Games)
- **Purpose**: Casual, quick games without long-term tracking
- **Storage**: Temporary (in-session only)
- **Use Case**: Practice games, friendly matches, casual play

### 2. TOURNAMENT MATCHES (Professional)
- **Purpose**: Formal tournaments with complete tracking
- **Storage**: Historical data saved for 1 year
- **Use Case**: Championships, leagues, organized competitions

---

## 📊 **GENERIC MATCHES - Features**

### Singles Matches
✅ **Player Setup**
- Names and Date
- Best of 3/8/Full board options
- Break by tracking

✅ **Board-by-Board Scoring**
- Queen pocketed by player, per board
- Auto population starts at 0
- Show total scores
- No historical data storage

✅ **Match Information**
- Player names
- Match date/time
- Break tracker
- Final totals

### Doubles Matches
✅ **Team Setup**
- 4 players (2 teams of 2)
- Names and Date
- Best of 3/8/Full board options
- Break by tracking

✅ **Board-by-Board Scoring**
- Queen pocketed by player, per board
- Relevant team member tracking
- Auto population starts at 0
- Show total scores
- No historical data storage

✅ **Match Information**
- All player names
- Team composition
- Match date/time
- Break tracker
- Final totals

---

## 🏆 **TOURNAMENT MATCHES - Features**

### Tournament Setup
✅ **Tournament Configuration**
- Tournament name
- Date and venue
- Format selection:
  - Round Robin (RR)
  - Group Level
  - Quarter Finals (Q/S/F)
  - Knockout
  - Semi Finals
  - Finals

✅ **Draw Management**
- Automatic draw generation
- Manual draw entry
- Group arrangements
- Bracket creation

✅ **Category Management**
Select from 9 categories:
1. **👨 Men's Singles**
2. **👨‍👨 Men's Doubles**
3. **👩 Women's Singles**
4. **👩‍👩 Women's Doubles**
5. **🧒 Kids Singles**
6. **🧒🧒 Kids Doubles**
7. **👥 Mixed Doubles**
8. **👴 Sr Citizen Singles (gender neutral)**
9. **👴👵 Sr Citizen Doubles (gender neutral)**

✅ **Participant Management**
- Enter player names
- Participant count per group
- Group names
- Rankings system (sometimes basis)

✅ **Tournament Mapping**
- Complete tournament map for all categories
- Visual bracket display
- Progress tracking
- Category-wise organization

### Singles Tournament Matches
✅ **Match Setup**
- Names and Date
- Match title/identifier
- Best of 3/8/Full board
- Break by tracking

✅ **Advanced Scoring**
- Queen pocketed by player, per board
- Board-by-board breakdown
- Auto population starts at 0
- Show total scores
- **Store historical data for 1 year, then purge**

✅ **Match Details**
- Match title/round
- Player names
- Date/time
- Tournament association
- Final results

### Doubles Tournament Matches
✅ **Team Match Setup**
- Names and Date
- Match title/identifier
- Best of 3/8/Full board
- Break by (relevant team member)

✅ **Advanced Team Scoring**
- Queen pocketed by player, per board
- Individual player contribution tracking
- Team totals
- Auto population starts at 0
- Show total scores
- **Store historical data for 1 year, then purge**

✅ **Team Match Details**
- Match title/round
- All player names
- Team composition
- Date/time
- Tournament association
- Final results

---

## 🎯 **HOW TO USE**

### Starting a Generic Match

#### Singles Match:
1. Click **"Generic Matches"** in sidebar
2. Click **"🎮 New Singles Match"**
3. Enter player names:
   - Player 1 Name
   - Player 2 Name
4. Select **Best of**: 3, 8, or Full board
5. Click **"▶️ Start Match"**
6. Score each board:
   - Enter "Break by" name
   - Enter Queen pocketed for each player
   - Enter scores for each player
7. View live totals automatically
8. Click **"✅ Complete Match"** when done

#### Doubles Match:
1. Click **"Generic Matches"** in sidebar
2. Click **"👥 New Doubles Match"**
3. Enter all player names:
   - Player 1 (Team 1)
   - Player 2 (Team 2)
   - Player 3 (Team 1)
   - Player 4 (Team 2)
4. Select **Best of**: 3, 8, or Full board
5. Click **"▶️ Start Match"**
6. Score each board:
   - Enter "Break by" name
   - Select which player broke (from dropdown)
   - Enter Queen pocketed for each team
   - Enter scores for each team
7. View live totals automatically
8. Click **"✅ Complete Match"** when done

---

### Creating a Tournament

1. Click **"🏆 Tournament Setup"** in sidebar
2. Fill tournament details:
   - **Tournament Name**: e.g., "National Carrom Championship 2024"
   - **Format**: Round Robin, Group Level, Knockout, etc.
   - **Date**: Tournament date
   - **Venue**: Location

3. **Select Categories**: Click on desired categories
   - Men's Singles
   - Women's Doubles
   - Kids Singles
   - Mixed Doubles
   - Sr Citizen categories
   - (Can select multiple)

4. **Set Participants**:
   - Total participant count
   - Participants per group (for group formats)

5. Click **"✨ Create Tournament"**

---

### Managing Tournament Matches

#### Generate Automatic Draws:
1. Go to **"🎯 Tournament Matches"**
2. Click **"🎲 Generate Draws"**
3. System creates matches automatically based on:
   - Tournament format
   - Number of participants
   - Selected categories

#### Add Manual Match:
1. Go to **"🎯 Tournament Matches"**
2. Click **"➕ Add Match"**
3. Enter match details:
   - Match title (e.g., "Quarter Final 1")
   - Player names
   - Best of format
4. Click **"▶️ Start Match"**

#### Score a Match:
1. Click on any scheduled match
2. Click **"▶️ Start"** or **"📊 Continue"**
3. Enter scores for each board:
   - Break by name
   - Player selection (for doubles)
   - Queen counts
   - Board scores
4. Totals calculate automatically
5. Click **"✅ Complete Match"**

---

## 📊 **SCORING SYSTEM**

### Board Scoring Rules
- Each board has individual scores
- Queens are tracked separately per board
- Break by is recorded for each board
- For doubles: specific player who broke is tracked

### Score Calculation
```
Player/Team Total = Sum of all boards
Each Board = Regular Score + Queen Points
Final Winner = Highest total across all boards
```

### Best of Options
- **Best of 3**: Play 3 boards
- **Best of 8**: Play 8 boards
- **Full Board**: Play until board is cleared

---

## 📈 **STANDINGS & RANKINGS**

### View Standings:
1. Go to **"📊 Standings"** in sidebar
2. See live rankings table with:
   - Player rank
   - Player name
   - Total wins
   - Total losses
   - Total points scored

### Ranking Calculation:
- Sorted by wins (primary)
- Then by total points (secondary)
- Updated automatically after each match

---

## 📚 **HISTORICAL DATA**

### Storage Policy:
- **Generic Matches**: NOT stored (session only)
- **Tournament Matches**: Stored for **1 YEAR**
- **Auto-Purge**: Data older than 1 year is automatically deleted

### View History:
1. Go to **"📚 History"** in sidebar
2. See all completed tournament matches
3. View match details
4. Export history data

---

## 💾 **DATA EXPORT**

### Export Generic Matches:
1. Go to **"Generic Matches"**
2. Click **"📥 Export JSON"**
3. Downloads: `carrom_generic_matches.json`

### Export Tournament:
1. Go to **"Tournament Matches"**
2. Click **"📥 Export Tournament"**
3. Downloads complete tournament data:
   - Tournament settings
   - All matches
   - Historical data
   - Player statistics

### JSON Format:
```json
{
  "tournament": {
    "name": "Tournament Name",
    "format": "knockout",
    "date": "2024-11-09",
    "categories": ["mens-singles", "womens-doubles"]
  },
  "matches": [...],
  "history": [...]
}
```

---

## 🎨 **INTERFACE FEATURES**

### Beautiful Design
✨ **Modern UI Elements**:
- Gradient backgrounds with animation
- Smooth transitions
- Card-based layout
- Color-coded status badges
- Responsive design

### Status Indicators:
- 🔴 **LIVE** - Match in progress (red badge, animated)
- ✅ **Done** - Match completed (green badge)
- 📅 **Scheduled** - Match upcoming (orange badge)

### Real-Time Updates:
- Scores calculate automatically
- Totals update instantly
- Standings refresh on completion
- Live board-by-board tracking

---

## 📱 **RESPONSIVE DESIGN**

### Desktop View:
- Sidebar navigation
- Wide scoring tables
- Full details visible
- Multi-column layouts

### Tablet View:
- Adapted layouts
- Stacked elements
- Touch-optimized buttons
- Readable font sizes

### Mobile View:
- Single column layout
- Large touch targets
- Simplified navigation
- Optimized for small screens

---

## 🔧 **TECHNICAL SPECIFICATIONS**

### Browser Storage:
- Uses `localStorage` for data persistence
- Automatic save on every action
- No server required
- Works offline

### Data Structure:
```javascript
{
  genericMatches: [],      // Temporary matches
  tournament: {},          // Tournament config
  tournamentMatches: [],   // Tournament games
  matchHistory: []         // 1-year stored data
}
```

### Auto-Purge Logic:
```javascript
// Keeps only matches from last 365 days
matchHistory = matchHistory.filter(match => 
  new Date(match.completedDate) > oneYearAgo
);
```

---

## 🎯 **USE CASES**

### 1. Local Club Tournament
```
Setup: Round Robin format
Categories: Men's Singles, Men's Doubles
Players: 16 participants
Duration: Track for full season
```

### 2. State Championship
```
Setup: Knockout format
Categories: All 9 categories
Players: 128 participants across categories
Duration: Store for 1 year
```

### 3. Friendly Match
```
Setup: Generic Singles
Players: 2 players
Duration: Session only, no storage
```

### 4. Family Tournament
```
Setup: Group Level
Categories: Mixed Doubles, Kids Singles
Players: 8-12 family members
Duration: Weekend event with history
```

---

## ⚡ **QUICK REFERENCE**

### Generic Match Flow:
```
1. New Match → 2. Enter Names → 3. Select Format → 
4. Start → 5. Score Boards → 6. Complete
```

### Tournament Flow:
```
1. Setup Tournament → 2. Select Categories → 
3. Enter Participants → 4. Generate Draws → 
5. Play Matches → 6. View Standings → 7. Export Data
```

### Scoring Flow:
```
Board 1: Break By + Queens + Scores →
Board 2: Break By + Queens + Scores →
Board 3: Break By + Queens + Scores →
Total: Auto-calculated → Complete Match
```

---

## 🏅 **TOURNAMENT CATEGORIES EXPLAINED**

### Singles Categories (1v1):
- **Men's Singles**: Adult male players
- **Women's Singles**: Adult female players
- **Kids Singles**: Children/youth players
- **Sr Citizen Singles**: Senior players (gender neutral)

### Doubles Categories (2v2):
- **Men's Doubles**: 2 male players per team
- **Women's Doubles**: 2 female players per team
- **Kids Doubles**: 2 children per team
- **Mixed Doubles**: 1 male + 1 female per team
- **Sr Citizen Doubles**: 2 senior players per team (gender neutral)

---

## 💡 **TIPS & BEST PRACTICES**

### For Tournament Organizers:
1. ✅ Create tournament before adding matches
2. ✅ Use "Generate Draws" for automatic brackets
3. ✅ Export data regularly as backup
4. ✅ Complete matches promptly for accurate standings
5. ✅ Use match titles for easy identification

### For Score Keepers:
1. ✅ Double-check player names before starting
2. ✅ Record "Break by" for each board
3. ✅ Enter queens immediately after each board
4. ✅ Verify totals before completing match
5. ✅ Save progress frequently (auto-saved)

### For Players:
1. ✅ Check match schedule in "Tournament Matches"
2. ✅ View live standings anytime
3. ✅ See historical performance in "History"
4. ✅ Request JSON export for personal records

---

## 🔄 **DATA RETENTION POLICY**

### What's Stored:
✅ Tournament configurations
✅ Match results and scores
✅ Player statistics
✅ Board-by-board details
✅ Timestamps and dates

### What's NOT Stored (Generic):
❌ Generic match details
❌ Casual game scores
❌ Practice session data

### Purge Schedule:
- **Automatic**: Every time app loads
- **Criteria**: Matches older than 365 days
- **Process**: Silent deletion
- **Notice**: No warning before purge

---

## 📥 **IMPORT/EXPORT**

### Export Options:
1. **Generic Matches**: Session data only
2. **Full Tournament**: Complete tournament package
3. **Format**: JSON (machine-readable)

### Import Options:
- Currently: Manual data entry only
- Future: JSON import capability
- Workaround: Paste into localStorage

---

## 🎨 **CUSTOMIZATION**

### Colors:
- Primary: Blue (#2563eb)
- Secondary: Purple (#7c3aed)
- Success: Green (#10b981)
- Danger: Red (#ef4444)

### Fonts:
- Family: Poppins
- Weights: 300, 400, 600, 700, 900

### Animations:
- Duration: 0.3-0.4s
- Easing: Smooth transitions
- Effects: Fade, slide, scale

---

## 🚀 **GETTING STARTED - QUICK START**

### First Time Setup (30 seconds):
1. Open `carrom-tournament-manager.html`
2. Click "🏠 Home"
3. Choose your path:
   - Quick game? → Click "Generic Matches"
   - Tournament? → Click "Tournament Matches"
4. Follow on-screen prompts
5. Start playing!

---

## 📞 **SUPPORT & FEATURES**

### Current Features:
✅ Generic Singles/Doubles matches
✅ Tournament management
✅ 9 category support
✅ Automatic draw generation
✅ Board-by-board scoring
✅ Queen tracking
✅ Break by recording
✅ Live standings
✅ 1-year history
✅ JSON export
✅ Auto-save
✅ Responsive design

### Coming Soon:
🔜 JSON import
🔜 PDF export
🔜 Print-friendly reports
🔜 Player profiles
🔜 Advanced statistics
🔜 Multi-tournament management

---

## 🎯 **KEYBOARD SHORTCUTS**

Currently: Mouse/Touch only
Future: Keyboard navigation for faster data entry

---

## 📊 **SAMPLE TOURNAMENT STRUCTURE**

### Example: District Championship

**Categories Selected:**
- Men's Singles (32 players)
- Women's Singles (16 players)
- Men's Doubles (16 teams)
- Mixed Doubles (8 teams)

**Format:** Knockout

**Rounds:**
1. Round of 32 → 16 matches
2. Round of 16 → 8 matches
3. Quarter Finals → 4 matches
4. Semi Finals → 2 matches
5. Finals → 1 match

**Total Matches:** 31 matches per category

---

## 🎉 **YOU'RE ALL SET!**

You now have everything you need to run professional Carrom tournaments!

**Remember:**
- 🎮 Generic = Quick casual games
- 🏆 Tournament = Professional tracking
- 📚 History = 1 year storage
- 📥 Export = Always backup your data

**Start your first tournament now!** 🚀

---

**Made with ❤️ for the Carrom Community**