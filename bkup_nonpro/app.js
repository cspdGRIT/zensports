// Global tournament state
let tournament = {
    name: '',
    sport: '',
    format: '',
    teams: [],
    matches: [],
    config: {}
};

// Sport-specific configurations
const sportConfigs = {
    cricket: {
        scoreFields: ['Runs', 'Wickets', 'Overs'],
        matchDuration: '6 overs',
        icon: '🏏'
    },
    football: {
        scoreFields: ['Goals'],
        matchDuration: '90 minutes',
        icon: '⚽'
    },
    basketball: {
        scoreFields: ['Points'],
        matchDuration: '4 x 10 minutes',
        icon: '🏀'
    },
    volleyball: {
        scoreFields: ['Sets', 'Points'],
        matchDuration: 'Best of 5 sets',
        icon: '🏐'
    },
    tennis: {
        scoreFields: ['Sets', 'Games'],
        matchDuration: 'Best of 3 sets',
        icon: '🎾'
    }
};

// Template presets
const templates = {
    'gully-cricket': {
        name: 'Zenith Gully Cricket Tournament',
        sport: 'cricket',
        format: 'round-robin',
        numTeams: 6,
        teams: [
            'Mohalla Masters', 'Street Kings', 'Gully Warriors',
            'Compound Champions', 'Badass Ballers', 'Terrace Tigers'
        ],
        config: {
            overs: 6,
            matchType: 'Best of 3',
            pointsWin: 2,
            pointsDraw: 1,
            pointsLoss: 0
        }
    },
    'premier-league': {
        name: 'Premier Football League',
        sport: 'football',
        format: 'round-robin',
        numTeams: 8,
        teams: [
            'FC Thunder', 'United Warriors', 'City Strikers', 'Athletic Champions',
            'Real Legends', 'FC Galaxy', 'United Phoenix', 'City Rangers'
        ],
        config: {
            matchDuration: 90,
            pointsWin: 3,
            pointsDraw: 1,
            pointsLoss: 0
        }
    },
    'basketball-tournament': {
        name: 'Basketball Championship',
        sport: 'basketball',
        format: 'knockout',
        numTeams: 8,
        teams: [
            'Lakers', 'Warriors', 'Bulls', 'Celtics',
            'Heat', 'Mavericks', 'Rockets', 'Spurs'
        ],
        config: {
            quarters: 4,
            quarterDuration: 10,
            pointsWin: 2,
            pointsLoss: 0
        }
    },
    'volleyball-championship': {
        name: 'Volleyball Championship',
        sport: 'volleyball',
        format: 'group-knockout',
        numTeams: 12,
        teams: [
            'Spikers', 'Net Kings', 'Blockers', 'Servers',
            'Jump Squad', 'Court Masters', 'Volley Warriors', 'Ace Team',
            'Power Hitters', 'Defense Force', 'Rally Rangers', 'Set Stars'
        ],
        config: {
            sets: 'Best of 5',
            pointsPerSet: 25,
            pointsWin: 3,
            pointsLoss: 0
        }
    },
    'tennis-open': {
        name: 'Tennis Open Championship',
        sport: 'tennis',
        format: 'knockout',
        numTeams: 16,
        teams: [
            'Player 1', 'Player 2', 'Player 3', 'Player 4',
            'Player 5', 'Player 6', 'Player 7', 'Player 8',
            'Player 9', 'Player 10', 'Player 11', 'Player 12',
            'Player 13', 'Player 14', 'Player 15', 'Player 16'
        ],
        config: {
            sets: 'Best of 3',
            gamesPerSet: 6,
            pointsWin: 1,
            pointsLoss: 0
        }
    },
    'office-badminton': {
        name: 'Office Badminton League',
        sport: 'badminton',
        format: 'round-robin',
        numTeams: 6,
        teams: [
            'Shuttlers', 'Smash Squad', 'Drop Shot Team', 'Clear Kings',
            'Net Masters', 'Rally Champs'
        ],
        config: {
            games: 'Best of 3',
            pointsPerGame: 21,
            pointsWin: 2,
            pointsDraw: 1,
            pointsLoss: 0
        }
    },
    'world-cup': {
        name: 'World Cup Tournament',
        sport: 'football',
        format: 'group-knockout',
        numTeams: 16,
        teams: Array.from({length: 16}, (_, i) => `Team ${i + 1}`),
        config: {
            groups: 4,
            teamsPerGroup: 4,
            matchDuration: 90,
            pointsWin: 3,
            pointsDraw: 1,
            pointsLoss: 0
        }
    },
    'weekend-casual': {
        name: 'Weekend Fun Tournament',
        sport: 'custom',
        format: 'round-robin',
        numTeams: 6,
        teams: [
            'Team Alpha', 'Team Beta', 'Team Gamma',
            'Team Delta', 'Team Omega', 'Team Sigma'
        ],
        config: {
            matchType: 'Flexible',
            pointsWin: 2,
            pointsDraw: 1,
            pointsLoss: 0
        }
    }
};

// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Wizard navigation
function nextStep(stepNumber) {
    if (stepNumber === 2) {
        generateTeamInputs();
    } else if (stepNumber === 3) {
        updateScoringRules();
    } else if (stepNumber === 4) {
        updateConfigPreview();
    }

    document.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
    document.getElementById('step' + stepNumber).classList.add('active');
    
    document.querySelectorAll('.wizard-progress-step').forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add('completed');
        } else if (index === stepNumber - 1) {
            step.classList.add('active');
        } else {
            step.classList.remove('completed', 'active');
        }
    });
}

// Update sport-specific fields
function updateSportFields() {
    const sport = document.getElementById('sportType').value;
    const customDiv = document.getElementById('customSportDiv');
    
    if (sport === 'custom') {
        customDiv.style.display = 'block';
    } else {
        customDiv.style.display = 'none';
    }
}

// Generate team input fields
function generateTeamInputs() {
    const numTeams = parseInt(document.getElementById('numTeams').value);
    const container = document.getElementById('teamInputs');
    container.innerHTML = '<h3 style="margin: 20px 0;">Team Names</h3>';
    
    for (let i = 1; i <= numTeams; i++) {
        const div = document.createElement('div');
        div.className = 'form-group';
        div.innerHTML = `
            <label>Team ${i}</label>
            <input type="text" id="team${i}" placeholder="Enter team ${i} name" value="Team ${i}">
        `;
        container.appendChild(div);
    }
}

// Update scoring rules based on sport
function updateScoringRules() {
    const sport = document.getElementById('sportType').value;
    const container = document.getElementById('scoringRules');
    
    if (sportConfigs[sport]) {
        const config = sportConfigs[sport];
        container.innerHTML = `
            <div class="alert alert-info">
                <strong>${config.icon} ${sport.toUpperCase()} Rules</strong><br>
                Match Duration: ${config.matchDuration}<br>
                Score tracking: ${config.scoreFields.join(', ')}
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="form-group">
                <label>Match Duration</label>
                <input type="text" id="matchDuration" placeholder="e.g., 45 minutes">
            </div>
            <div class="form-group">
                <label>Score Fields (comma separated)</label>
                <input type="text" id="scoreFields" placeholder="e.g., Goals, Points">
            </div>
        `;
    }
}

// Update configuration preview
function updateConfigPreview() {
    const name = document.getElementById('tournamentName').value;
    const sport = document.getElementById('sportType').value;
    const format = document.getElementById('tournamentFormat').value;
    const numTeams = document.getElementById('numTeams').value;
    const pointsWin = document.getElementById('pointsWin').value;
    const pointsDraw = document.getElementById('pointsDraw').value;
    
    const preview = document.getElementById('configPreview');
    preview.innerHTML = `
        <h4>Tournament Configuration</h4>
        <div class="config-item">
            <span>Tournament Name:</span>
            <strong>${name || 'Not set'}</strong>
        </div>
        <div class="config-item">
            <span>Sport:</span>
            <strong>${sport || 'Not selected'}</strong>
        </div>
        <div class="config-item">
            <span>Format:</span>
            <strong>${format}</strong>
        </div>
        <div class="config-item">
            <span>Number of Teams:</span>
            <strong>${numTeams}</strong>
        </div>
        <div class="config-item">
            <span>Points System:</span>
            <strong>Win: ${pointsWin}, Draw: ${pointsDraw}</strong>
        </div>
    `;
}

// Create tournament
function createTournament() {
    const name = document.getElementById('tournamentName').value;
    const sport = document.getElementById('sportType').value;
    const format = document.getElementById('tournamentFormat').value;
    const numTeams = parseInt(document.getElementById('numTeams').value);
    
    if (!name || !sport) {
        alert('Please fill in all required fields!');
        return;
    }

    // Collect teams
    const teams = [];
    for (let i = 1; i <= numTeams; i++) {
        const teamName = document.getElementById(`team${i}`).value;
        teams.push({
            id: i,
            name: teamName,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            points: 0,
            for: 0,
            against: 0
        });
    }

    tournament = {
        name: name,
        sport: sport,
        format: format,
        teams: teams,
        matches: [],
        config: {
            pointsWin: parseInt(document.getElementById('pointsWin').value),
            pointsDraw: parseInt(document.getElementById('pointsDraw').value),
            pointsLoss: parseInt(document.getElementById('pointsLoss').value)
        }
    };

    // Save to localStorage
    saveTournament();

    // Show success message
    alert('🎉 Tournament created successfully!');

    // Enable other tabs
    enableTournamentTabs();

    // Switch to teams tab
    document.querySelectorAll('.tab')[2].click();
}

// Load template
function loadTemplate(templateId) {
    const template = templates[templateId];
    if (!template) return;

    // Fill in the form
    document.getElementById('tournamentName').value = template.name;
    document.getElementById('sportType').value = template.sport;
    document.getElementById('tournamentFormat').value = template.format;
    document.getElementById('numTeams').value = template.numTeams;

    // Generate team inputs and fill them
    generateTeamInputs();
    setTimeout(() => {
        template.teams.forEach((teamName, index) => {
            const input = document.getElementById(`team${index + 1}`);
            if (input) input.value = teamName;
        });
    }, 100);

    // Set config values
    if (template.config.pointsWin !== undefined) {
        document.getElementById('pointsWin').value = template.config.pointsWin;
    }
    if (template.config.pointsDraw !== undefined) {
        document.getElementById('pointsDraw').value = template.config.pointsDraw;
    }
    if (template.config.pointsLoss !== undefined) {
        document.getElementById('pointsLoss').value = template.config.pointsLoss;
    }

    // Create the tournament
    tournament = {
        name: template.name,
        sport: template.sport,
        format: template.format,
        teams: template.teams.map((name, index) => ({
            id: index + 1,
            name: name,
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            points: 0,
            for: 0,
            against: 0
        })),
        matches: [],
        config: template.config
    };

    saveTournament();
    enableTournamentTabs();

    alert(`✅ Loaded "${template.name}" template! You can customize it in the Setup tab or start managing teams.`);
    
    // Switch to teams tab
    document.querySelectorAll('.tab')[2].click();
}

// Enable tournament tabs
function enableTournamentTabs() {
    document.getElementById('teamsAlert').style.display = 'none';
    document.getElementById('teamsContent').style.display = 'block';
    document.getElementById('scheduleAlert').style.display = 'none';
    document.getElementById('scheduleContent').style.display = 'block';
    document.getElementById('standingsAlert').style.display = 'none';
    document.getElementById('standingsContent').style.display = 'block';

    updateTeamsList();
    updateStandings();
}

// Update teams list
function updateTeamsList() {
    const container = document.getElementById('teamsList');
    container.innerHTML = '';

    tournament.teams.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <h4>${team.name}</h4>
            <p>
                P: ${team.played} | W: ${team.won} | D: ${team.drawn} | L: ${team.lost}<br>
                Points: ${team.points}
            </p>
            <button class="btn btn-secondary" onclick="editTeam(${team.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteTeam(${team.id})">Delete</button>
        `;
        container.appendChild(card);
    });
}

// Generate schedule
function generateSchedule() {
    const matches = [];
    let matchId = 1;

    if (tournament.format === 'round-robin') {
        // Round-robin: everyone plays everyone once
        for (let i = 0; i < tournament.teams.length; i++) {
            for (let j = i + 1; j < tournament.teams.length; j++) {
                matches.push({
                    id: matchId++,
                    team1: tournament.teams[i],
                    team2: tournament.teams[j],
                    score1: null,
                    score2: null,
                    status: 'scheduled',
                    date: null
                });
            }
        }
    } else if (tournament.format === 'knockout') {
        // Simple knockout bracket
        const numRounds = Math.ceil(Math.log2(tournament.teams.length));
        let teamsInRound = [...tournament.teams];

        for (let round = 1; round <= numRounds; round++) {
            for (let i = 0; i < teamsInRound.length; i += 2) {
                if (i + 1 < teamsInRound.length) {
                    matches.push({
                        id: matchId++,
                        team1: teamsInRound[i],
                        team2: teamsInRound[i + 1],
                        score1: null,
                        score2: null,
                        status: 'scheduled',
                        round: round,
                        date: null
                    });
                }
            }
            teamsInRound = teamsInRound.slice(0, Math.ceil(teamsInRound.length / 2));
        }
    }

    tournament.matches = matches;
    saveTournament();
    displayMatches();
    updateLiveMatchSelect();
}

// Display matches
function displayMatches() {
    const container = document.getElementById('matchesList');
    container.innerHTML = '<h3 style="margin-top: 20px;">Matches</h3>';

    tournament.matches.forEach(match => {
        const card = document.createElement('div');
        card.className = 'match-card';
        
        let statusBadge = '';
        if (match.status === 'live') {
            statusBadge = '<span class="badge badge-live">🔴 LIVE</span>';
        } else if (match.status === 'completed') {
            statusBadge = '<span class="badge badge-completed">✅ Completed</span>';
        } else {
            statusBadge = '<span class="badge badge-scheduled">📅 Scheduled</span>';
        }

        card.innerHTML = `
            <div class="match-header">
                <strong>Match ${match.id}</strong>
                ${statusBadge}
            </div>
            <div class="match-teams">
                <div class="match-team">
                    <h4>${match.team1.name}</h4>
                    <div class="match-score">${match.score1 !== null ? match.score1 : '-'}</div>
                </div>
                <div class="vs">VS</div>
                <div class="match-team">
                    <h4>${match.team2.name}</h4>
                    <div class="match-score">${match.score2 !== null ? match.score2 : '-'}</div>
                </div>
            </div>
            ${match.status !== 'completed' ? `
                <button class="btn btn-primary" onclick="startMatch(${match.id})">
                    ${match.status === 'live' ? '📊 Update Score' : '▶️ Start Match'}
                </button>
            ` : ''}
        `;
        container.appendChild(card);
    });
}

// Update live match select dropdown
function updateLiveMatchSelect() {
    const select = document.getElementById('liveMatchSelect');
    select.innerHTML = '<option value="">-- Select a Match --</option>';

    tournament.matches.forEach(match => {
        if (match.status !== 'completed') {
            const option = document.createElement('option');
            option.value = match.id;
            option.textContent = `Match ${match.id}: ${match.team1.name} vs ${match.team2.name}`;
            select.appendChild(option);
        }
    });

    document.getElementById('liveAlert').style.display = tournament.matches.length > 0 ? 'none' : 'block';
    document.getElementById('liveContent').style.display = tournament.matches.length > 0 ? 'block' : 'none';
}

// Start/load match for live scoring
function startMatch(matchId) {
    const match = tournament.matches.find(m => m.id === matchId);
    if (!match) return;

    match.status = 'live';
    saveTournament();

    // Switch to live tab and load the match
    document.querySelectorAll('.tab')[4].click();
    document.getElementById('liveMatchSelect').value = matchId;
    loadLiveMatch();
}

// Load live match scoring interface
function loadLiveMatch() {
    const matchId = parseInt(document.getElementById('liveMatchSelect').value);
    if (!matchId) {
        document.getElementById('liveScoreBoard').innerHTML = '';
        return;
    }

    const match = tournament.matches.find(m => m.id === matchId);
    if (!match) return;

    const board = document.getElementById('liveScoreBoard');
    board.innerHTML = `
        <div class="match-card">
            <h3>Match ${match.id} - Live Scoring</h3>
            <div class="match-teams">
                <div class="match-team">
                    <h4>${match.team1.name}</h4>
                    <div class="score-input">
                        <input type="number" id="score1" value="${match.score1 !== null ? match.score1 : 0}" min="0">
                    </div>
                </div>
                <div class="vs">VS</div>
                <div class="match-team">
                    <h4>${match.team2.name}</h4>
                    <div class="score-input">
                        <input type="number" id="score2" value="${match.score2 !== null ? match.score2 : 0}" min="0">
                    </div>
                </div>
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <button class="btn btn-success" onclick="updateMatchScore(${matchId})">💾 Save Score</button>
                <button class="btn btn-primary" onclick="completeMatch(${matchId})">✅ Complete Match</button>
            </div>
        </div>
    `;
}

// Update match score
function updateMatchScore(matchId) {
    const match = tournament.matches.find(m => m.id === matchId);
    if (!match) return;

    const score1 = parseInt(document.getElementById('score1').value) || 0;
    const score2 = parseInt(document.getElementById('score2').value) || 0;

    match.score1 = score1;
    match.score2 = score2;

    saveTournament();
    alert('Score updated successfully!');
}

// Complete match and update standings
function completeMatch(matchId) {
    const match = tournament.matches.find(m => m.id === matchId);
    if (!match) return;

    const score1 = parseInt(document.getElementById('score1').value) || 0;
    const score2 = parseInt(document.getElementById('score2').value) || 0;

    match.score1 = score1;
    match.score2 = score2;
    match.status = 'completed';

    // Update team statistics
    const team1 = tournament.teams.find(t => t.id === match.team1.id);
    const team2 = tournament.teams.find(t => t.id === match.team2.id);

    team1.played++;
    team2.played++;
    team1.for += score1;
    team1.against += score2;
    team2.for += score2;
    team2.against += score1;

    if (score1 > score2) {
        team1.won++;
        team2.lost++;
        team1.points += tournament.config.pointsWin;
        team2.points += tournament.config.pointsLoss;
    } else if (score2 > score1) {
        team2.won++;
        team1.lost++;
        team2.points += tournament.config.pointsWin;
        team1.points += tournament.config.pointsLoss;
    } else {
        team1.drawn++;
        team2.drawn++;
        team1.points += tournament.config.pointsDraw;
        team2.points += tournament.config.pointsDraw;
    }

    saveTournament();
    alert('Match completed!');
    
    updateTeamsList();
    updateStandings();
    displayMatches();
    updateLiveMatchSelect();
    updateStats();
}

// Update standings table
function updateStandings() {
    const tbody = document.getElementById('standingsBody');
    tbody.innerHTML = '';

    // Sort teams by points, then goal difference
    const sortedTeams = [...tournament.teams].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return (b.for - b.against) - (a.for - a.against);
    });

    sortedTeams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${index + 1}</strong></td>
            <td>${team.name}</td>
            <td>${team.played}</td>
            <td>${team.won}</td>
            <td>${team.drawn}</td>
            <td>${team.lost}</td>
            <td><strong>${team.points}</strong></td>
        `;
        tbody.appendChild(row);
    });
}

// Update statistics
function updateStats() {
    const completedMatches = tournament.matches.filter(m => m.status === 'completed').length;
    const totalMatches = tournament.matches.length;
    const totalGoals = tournament.teams.reduce((sum, team) => sum + team.for, 0);

    const grid = document.getElementById('statsGrid');
    grid.innerHTML = `
        <div class="stat-card">
            <div class="label">Total Matches</div>
            <div class="number">${totalMatches}</div>
        </div>
        <div class="stat-card">
            <div class="label">Completed</div>
            <div class="number">${completedMatches}</div>
        </div>
        <div class="stat-card">
            <div class="label">Remaining</div>
            <div class="number">${totalMatches - completedMatches}</div>
        </div>
        <div class="stat-card">
            <div class="label">Total ${tournament.sport === 'football' ? 'Goals' : 'Points'}</div>
            <div class="number">${totalGoals}</div>
        </div>
    `;

    if (completedMatches > 0) {
        document.getElementById('statsAlert').style.display = 'none';
        document.getElementById('statsContent').style.display = 'block';

        // Top performers
        const topScorers = [...tournament.teams]
            .sort((a, b) => b.for - a.for)
            .slice(0, 5);

        const performersDiv = document.getElementById('topPerformers');
        performersDiv.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        <th>${tournament.sport === 'football' ? 'Goals' : 'Points'} Scored</th>
                    </tr>
                </thead>
                <tbody>
                    ${topScorers.map((team, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${team.name}</td>
                            <td><strong>${team.for}</strong></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Add new team
function addNewTeam() {
    const teamName = prompt('Enter team name:');
    if (!teamName) return;

    const newTeam = {
        id: tournament.teams.length + 1,
        name: teamName,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        points: 0,
        for: 0,
        against: 0
    };

    tournament.teams.push(newTeam);
    saveTournament();
    updateTeamsList();
    updateStandings();
}

// Edit team
function editTeam(teamId) {
    const team = tournament.teams.find(t => t.id === teamId);
    if (!team) return;

    const newName = prompt('Enter new team name:', team.name);
    if (newName && newName !== team.name) {
        team.name = newName;
        saveTournament();
        updateTeamsList();
        displayMatches();
        updateStandings();
    }
}

// Delete team
function deleteTeam(teamId) {
    if (!confirm('Are you sure you want to delete this team? This will also remove all their matches.')) {
        return;
    }

    tournament.teams = tournament.teams.filter(t => t.id !== teamId);
    tournament.matches = tournament.matches.filter(m => 
        m.team1.id !== teamId && m.team2.id !== teamId
    );

    saveTournament();
    updateTeamsList();
    displayMatches();
    updateStandings();
}

// Export functions
function exportSchedule() {
    const csv = 'Match,Team 1,Team 2,Score 1,Score 2,Status\n' +
        tournament.matches.map(m => 
            `${m.id},${m.team1.name},${m.team2.name},${m.score1 || ''},${m.score2 || ''},${m.status}`
        ).join('\n');

    downloadCSV(csv, 'schedule.csv');
}

function exportStandings() {
    const csv = 'Position,Team,Played,Won,Drawn,Lost,Points\n' +
        [...tournament.teams]
            .sort((a, b) => b.points - a.points)
            .map((t, i) => `${i+1},${t.name},${t.played},${t.won},${t.drawn},${t.lost},${t.points}`)
            .join('\n');

    downloadCSV(csv, 'standings.csv');
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
}

// Local storage functions
function saveTournament() {
    localStorage.setItem('tournament', JSON.stringify(tournament));
}

function loadTournament() {
    const saved = localStorage.getItem('tournament');
    if (saved) {
        tournament = JSON.parse(saved);
        if (tournament.teams.length > 0) {
            enableTournamentTabs();
            displayMatches();
            updateLiveMatchSelect();
            updateStats();
        }
    }
}

// Initialize on load
window.onload = function() {
    loadTournament();
};