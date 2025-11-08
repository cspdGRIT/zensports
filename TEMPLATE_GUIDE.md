# 📋 Template Configuration Guide

Learn how to create your own custom tournament templates!

## 🎯 What are Templates?

Templates are pre-configured tournament setups that allow users to start a tournament instantly with one click. They include:
- Tournament name
- Sport type
- Tournament format
- Pre-filled team names
- Scoring configuration

## 📝 Template Structure

### Basic Template Format

```javascript
'template-id': {
    name: 'Tournament Name',
    sport: 'sport-type',
    format: 'tournament-format',
    numTeams: 6,
    teams: ['Team 1', 'Team 2', ...],
    config: {
        pointsWin: 3,
        pointsDraw: 1,
        pointsLoss: 0
    }
}
```

## 🔧 Configuration Options

### 1. Template ID (Key)
```javascript
'my-custom-tournament'  // Use lowercase with hyphens
```
- Must be unique
- Use descriptive names
- No spaces or special characters

### 2. Name
```javascript
name: 'My Custom Tournament'
```
- Display name shown to users
- Can include spaces and emojis
- Keep it descriptive but concise

### 3. Sport
```javascript
sport: 'football'
```

**Available Sports:**
- `'cricket'` - 🏏 Cricket
- `'football'` - ⚽ Football/Soccer
- `'basketball'` - 🏀 Basketball
- `'volleyball'` - 🏐 Volleyball
- `'tennis'` - 🎾 Tennis
- `'badminton'` - 🏸 Badminton
- `'table-tennis'` - 🏓 Table Tennis
- `'hockey'` - 🏑 Hockey
- `'baseball'` - ⚾ Baseball
- `'rugby'` - 🏉 Rugby
- `'custom'` - 🎯 Custom Sport

### 4. Format
```javascript
format: 'round-robin'
```

**Available Formats:**
- `'round-robin'` - Everyone plays everyone once
- `'knockout'` - Single elimination
- `'double-elimination'` - Double elimination
- `'group-knockout'` - Group stage then knockout

### 5. Number of Teams
```javascript
numTeams: 8
```
- Can be any number from 2 to 32
- Should match the length of teams array

### 6. Teams Array
```javascript
teams: [
    'Team Alpha',
    'Team Beta',
    'Team Gamma',
    // ... more teams
]
```
- List of team names
- Length must match numTeams
- Can use creative, themed names

### 7. Config Object
```javascript
config: {
    pointsWin: 3,
    pointsDraw: 1,
    pointsLoss: 0,
    // Optional sport-specific settings
    overs: 20,
    matchDuration: 90
}
```

**Required Settings:**
- `pointsWin` - Points awarded for winning
- `pointsDraw` - Points awarded for draw/tie
- `pointsLoss` - Points awarded for losing (usually 0)

**Optional Settings:**
- Add any sport-specific rules
- These are informational only

## 🎨 Example Templates

### Example 1: Simple Cricket Tournament
```javascript
'my-cricket': {
    name: '20-20 Cricket League',
    sport: 'cricket',
    format: 'round-robin',
    numTeams: 4,
    teams: [
        'Mumbai Indians',
        'Chennai Super Kings',
        'Royal Challengers',
        'Kolkata Knights'
    ],
    config: {
        overs: 20,
        pointsWin: 2,
        pointsDraw: 1,
        pointsLoss: 0
    }
}
```

### Example 2: School Football Tournament
```javascript
'school-football': {
    name: 'Inter-School Football Cup',
    sport: 'football',
    format: 'knockout',
    numTeams: 8,
    teams: [
        'Lincoln High',
        'Washington Academy',
        'Jefferson School',
        'Roosevelt Institute',
        'Kennedy College',
        'Madison School',
        'Monroe Academy',
        'Adams High'
    ],
    config: {
        matchDuration: 60,
        pointsWin: 1,
        pointsLoss: 0
    }
}
```

### Example 3: Office Basketball
```javascript
'office-hoops': {
    name: 'Friday Night Hoops',
    sport: 'basketball',
    format: 'round-robin',
    numTeams: 6,
    teams: [
        'Sales Squad',
        'Marketing Mavericks',
        'Engineering Elite',
        'HR Heroes',
        'Finance Flyers',
        'Operations All-Stars'
    ],
    config: {
        quarters: 4,
        quarterDuration: 8,
        pointsWin: 2,
        pointsDraw: 1,
        pointsLoss: 0
    }
}
```

### Example 4: Community Volleyball
```javascript
'community-volley': {
    name: 'Summer Beach Volleyball',
    sport: 'volleyball',
    format: 'group-knockout',
    numTeams: 16,
    teams: [
        'Beach Bumpers', 'Sunset Spikers', 'Wave Riders', 'Sand Storm',
        'Net Ninjas', 'Coastal Crushers', 'Tide Turners', 'Shore Thing',
        'Dune Diggers', 'Ocean Warriors', 'Beach Blazers', 'Sea Hawks',
        'Wave Warriors', 'Sand Sharks', 'Surf Squad', 'Beach Kings'
    ],
    config: {
        sets: 'Best of 3',
        pointsPerSet: 21,
        pointsWin: 3,
        pointsLoss: 0
    }
}
```

## 🚀 Adding Your Template

### Step 1: Open app.js
Find the `templates` object (around line 50)

### Step 2: Add Your Template
Add your template before the closing brace:

```javascript
const templates = {
    'gully-cricket': { ... },
    'premier-league': { ... },
    
    // Add your template here
    'your-template-id': {
        name: 'Your Tournament',
        sport: 'football',
        format: 'round-robin',
        numTeams: 6,
        teams: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6'],
        config: {
            pointsWin: 3,
            pointsDraw: 1,
            pointsLoss: 0
        }
    }
};
```

### Step 3: Add Template Card in HTML
Open `index.html` and find the templates section (around line 160).

Add a new template card:

```html
<div class="template-card" onclick="loadTemplate('your-template-id')">
    <h3><span class="icon">⚽</span> Your Template Name</h3>
    <p>Brief description of your tournament</p>
    <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
</div>
```

### Step 4: Test Your Template
1. Save all files
2. Refresh the browser
3. Go to Templates tab
4. Click your new template card
5. Verify everything works!

## 💡 Best Practices

### Team Names
✅ **Good Examples:**
- Themed: "Thunder Strikers", "Lightning Bolts"
- Location-based: "North Stars", "East Eagles"
- Funny: "Goal Diggers", "Net Worthy"

❌ **Avoid:**
- Generic: "Team 1", "Team 2"
- Too long: "The Extremely Awesome Super Cool Team"

### Tournament Names
✅ **Good Examples:**
- "Summer Championship 2024"
- "Office League Season 3"
- "Weekend Warriors Cup"

❌ **Avoid:**
- Just sport name: "Football"
- Too vague: "Tournament"

### Configuration
✅ **Do:**
- Match points to sport conventions (Football: 3-1-0)
- Include relevant sport settings
- Keep formats consistent with sport type

❌ **Don't:**
- Use negative points
- Over-complicate config
- Mix incompatible formats

## 🎮 Template Ideas

### By Sport
- 🏏 T20 League, Test Series, IPL Style
- ⚽ Champions League, World Cup, Local Derby
- 🏀 NBA Style, 3v3 Tournament, FIBA Format
- 🎾 Grand Slam, ATP Tour, Club Championship
- 🏐 Beach Volleyball, Indoor Tournament, Olympics Style

### By Group Size
- **Small (4-6 teams)**: Quick tournaments, office leagues
- **Medium (8-12 teams)**: Weekend tournaments, school events
- **Large (16-32 teams)**: Championship, community events

### By Time
- **Quick** (Round Robin, 4 teams): 1-2 hours
- **Half Day** (Knockout, 8 teams): 3-4 hours
- **Full Day** (Group+Knockout, 16 teams): 6-8 hours
- **Weekend** (Round Robin, 12 teams): 2 days

### By Occasion
- School inter-house competition
- Corporate team building
- Community festival
- Family reunion
- Neighborhood league
- Charity tournament
- Birthday party
- Holiday special

## 📊 Template Testing Checklist

Before sharing your template:

- [ ] Template ID is unique
- [ ] Name is clear and descriptive
- [ ] Sport type is valid
- [ ] Format makes sense for the sport
- [ ] Number of teams matches array length
- [ ] Team names are filled in
- [ ] Points configuration is logical
- [ ] Template card added to HTML
- [ ] Tested in browser
- [ ] Generates schedule correctly
- [ ] Scoring works properly

## 🎓 Advanced Tips

### Dynamic Team Generation
For large tournaments with generic teams:

```javascript
teams: Array.from({length: 32}, (_, i) => `Team ${i + 1}`)
```

### Sport-Specific Rules
Add custom fields for your sport:

```javascript
config: {
    pointsWin: 3,
    pointsLoss: 0,
    // Custom fields
    halves: 2,
    halfDuration: 45,
    extraTime: true,
    penalties: true
}
```

### Grouped Templates
Organize by category in HTML:

```html
<h3>Cricket Templates</h3>
<div class="template-grid">
    <!-- Cricket templates here -->
</div>

<h3>Football Templates</h3>
<div class="template-grid">
    <!-- Football templates here -->
</div>
```

---

## 🤝 Sharing Your Templates

Created an awesome template? Share it!
1. Export your template code
2. Share on social media
3. Create a pull request
4. Help the community grow!

---

**Happy template creating! 🎨**