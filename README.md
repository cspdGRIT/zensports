# 🏆 Universal Tournament Manager

A powerful, easy-to-use tournament management system that works for ANY sport! Create, manage, and track tournaments with real-time scoring, standings, and statistics.

## ✨ Features

### 🎯 Multi-Sport Support
- **10+ Pre-configured Sports**: Cricket, Football, Basketball, Volleyball, Tennis, Badminton, Table Tennis, Hockey, Baseball, Rugby
- **Custom Sport Option**: Create tournaments for any sport not in the list

### 📋 8 Ready-to-Use Templates
Get started instantly with pre-configured templates:

1. **🏏 Gully Cricket** - Street cricket with 6-over matches
2. **⚽ Football League** - Premier League style tournament
3. **🏀 Basketball Tournament** - Single elimination format
4. **🏐 Volleyball Championship** - Group stage + knockout
5. **🎾 Tennis Open** - Professional tennis tournament
6. **🏸 Office Badminton** - Casual workplace league
7. **🏆 World Cup Style** - International format for any sport
8. **🎯 Weekend Casual** - Relaxed tournament for friends

### 🎨 Complete Tournament Management
- **Easy 4-Step Setup Wizard**
- **Team Management**: Add, edit, delete teams
- **Automatic Scheduling**: Generate fixtures instantly
- **Live Scoring**: Real-time match scoring interface
- **Standings Table**: Auto-updated leaderboard
- **Statistics Dashboard**: Tournament stats & top performers
- **Export Functions**: Download schedule and standings as CSV

### 🔄 Tournament Formats
- **Round Robin**: Everyone plays everyone
- **Single Elimination**: Knockout tournament
- **Double Elimination**: Second chance format
- **Group + Knockout**: World Cup style

## 🚀 Getting Started

### Installation
1. Download all files to a folder on your computer
2. Make sure these files are in the same folder:
   - `index.html`
   - `styles.css`
   - `app.js`

### Usage
1. Open `index.html` in any web browser (Chrome, Firefox, Safari, Edge)
2. Choose one of two options:
   - **Quick Start**: Click on the "Templates" tab and select a pre-made template
   - **Custom Setup**: Use the "Setup" tab to create your own tournament

### Using Templates (Easiest Way!)
1. Click on the **"📋 Templates"** tab
2. Click on any template card that matches your sport/style
3. The system will automatically create the tournament with:
   - Pre-configured teams
   - Appropriate scoring rules
   - Tournament format
4. You can customize team names, add/remove teams, or change settings anytime

### Custom Tournament Setup
1. Click on the **"🎯 Setup"** tab
2. Follow the 4-step wizard:
   - **Step 1**: Enter tournament name and select sport
   - **Step 2**: Choose number of teams and enter team names
   - **Step 3**: Configure scoring rules and points system
   - **Step 4**: Review and create your tournament

## 📖 How to Use Each Tab

### 1. 🎯 Setup Tab
- Create a new tournament from scratch
- 4-step wizard guides you through the process
- Set tournament name, sport, format, teams, and rules

### 2. 📋 Templates Tab
- Quick access to 8 pre-configured tournament templates
- One-click setup for common tournament types
- All settings can be customized after loading

### 3. 👥 Teams Tab
- View all teams in your tournament
- Add new teams during the tournament
- Edit team names
- Delete teams (with confirmation)
- See team statistics (played, won, drawn, lost, points)

### 4. 📅 Schedule Tab
- Click "Generate Schedule" to create all matches
- View all scheduled, live, and completed matches
- Export schedule to CSV file
- Start matches directly from the schedule

### 5. 🔴 Live Score Tab
- Select a match from the dropdown
- Enter scores in real-time
- Save scores as you go
- Complete matches when finished
- Standings update automatically

### 6. 📊 Standings Tab
- Real-time tournament standings/leaderboard
- Sorted by points, then goal difference
- Shows: Position, Team, Played, Won, Drawn, Lost, Points
- Export standings to CSV

### 7. 📈 Stats Tab
- Tournament overview statistics
- Total matches, completed, remaining
- Total goals/points scored
- Top performers table
- Top 5 highest-scoring teams

## 🎮 Workflow Example

### Example: Creating a Weekend Football Tournament

1. **Start**: Open `index.html` in your browser

2. **Choose Template**: 
   - Go to "Templates" tab
   - Click on "Football League" template
   - ✅ Tournament created instantly!

3. **Customize Teams** (Optional):
   - Go to "Teams" tab
   - Click "Edit" on any team to rename
   - Or add more teams using "➕ Add Team"

4. **Generate Matches**:
   - Go to "Schedule" tab
   - Click "🔄 Generate Schedule"
   - All matches are created automatically!

5. **Score Matches**:
   - Go to "Live Score" tab
   - Select a match from dropdown
   - Enter the scores
   - Click "✅ Complete Match" when done

6. **View Results**:
   - "Standings" tab shows the leaderboard
   - "Stats" tab shows tournament statistics
   - Export data using the download buttons

## 💾 Data Storage

- All tournament data is saved automatically to your browser's local storage
- Your data persists even if you close the browser
- Each computer/browser has its own separate data
- To reset everything, clear your browser's local storage

## 📱 Responsive Design

- Works on desktop computers
- Works on tablets
- Works on mobile phones
- Automatically adjusts layout for different screen sizes

## 🎨 Customization

### Changing Colors
Edit `styles.css` and modify these color variables:
- Primary color: `#667eea` (purple)
- Secondary color: `#764ba2` (darker purple)
- Success color: `#10b981` (green)
- Danger color: `#ef4444` (red)

### Adding More Templates
Edit `app.js` and add new templates to the `templates` object:

```javascript
'your-template-name': {
    name: 'Your Tournament Name',
    sport: 'football',
    format: 'round-robin',
    numTeams: 8,
    teams: ['Team 1', 'Team 2', ...],
    config: {
        pointsWin: 3,
        pointsDraw: 1,
        pointsLoss: 0
    }
}
```

### Adding New Sports
Edit `app.js` and add to the `sportConfigs` object:

```javascript
'your-sport': {
    scoreFields: ['Goals', 'Points'],
    matchDuration: '90 minutes',
    icon: '⚽'
}
```

## 🔧 Technical Details

### Technologies Used
- Pure HTML5
- CSS3 with Flexbox and Grid
- Vanilla JavaScript (no frameworks required)
- LocalStorage API for data persistence

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript enabled

### No Server Required
- This is a client-side application
- No server or backend needed
- No internet connection required after download
- All processing happens in your browser

## 📝 Tips & Best Practices

1. **Use Templates First**: They're the fastest way to get started
2. **Generate Schedule Early**: Create the schedule before starting to score matches
3. **Save Regularly**: Click "Save Score" button frequently during live scoring
4. **Export Data**: Use export buttons to backup your tournament data
5. **Team Names**: Use descriptive, unique names for easier tracking
6. **Match Order**: Matches are auto-generated; you can score them in any order

## ❓ Troubleshooting

### Tournament data disappeared?
- Check if you're using the same browser
- Make sure you didn't clear browser data/cache
- Each browser keeps separate data

### Can't click "Generate Schedule"?
- Make sure you've created a tournament first (Setup or Templates tab)
- Check that you have at least 2 teams

### Scores not updating?
- Click the "Save Score" button
- Complete the match using "Complete Match" button
- Check browser console for any errors

### Export not working?
- Make sure pop-ups are allowed in your browser
- Check your Downloads folder
- Try a different browser

## 🤝 Contributing

Want to add features or fix bugs?
1. The code is well-commented and organized
2. `index.html` - Structure
3. `styles.css` - Appearance
4. `app.js` - Functionality

## 📄 License

Free to use for personal and commercial projects!

## 🌟 Credits

Created with ❤️ to make tournament management easy for everyone!

---

**Enjoy managing your tournaments! 🏆**

For questions, issues, or feature requests, feel free to modify the code to suit your needs!