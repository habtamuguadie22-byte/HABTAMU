/**
 * Football Management System - Core Application State & Database Engine
 */

class FootballDB {
    constructor() {
        this.storageKey = 'football_db';
        this.state = {
            teams: [],
            players: [],
            matches: [],
            config: {
                language: 'en' // Default language
            }
        };
        this.translations = {
            en: {
                nav_user_portal: "User Portal",
                nav_admin_dashboard: "Admin Dashboard",
                nav_logout: "Logout",
                hero_title_user: "Welcome to <span>League Central</span>",
                hero_desc_user: "Track real-time standings, browse active club catalogs, explore star roster statistics, and watch simulated match actions live.",
                hero_title_admin: "League <span>Admin Dashboard</span>",
                hero_desc_admin: "Manage football teams, recruit & adjust players, set match fixtures, record final scores, or kick off live game simulations.",
                stat_total_teams: "Total Teams",
                stat_registered_players: "Registered Players",
                stat_matches_scheduled: "Matches Scheduled",
                stat_goals_recorded: "Goals Recorded",
                tab_manage_teams: "🛡️ Manage Teams",
                tab_manage_players: "🏃‍♂️ Manage Players",
                tab_manage_matches: "📅 Manage Matches",
                section_add_team: "Add New Team",
                section_existing_clubs: "Existing Football Clubs",
                label_team_name: "Team Name",
                label_logo_emoji: "Logo Emoji",
                label_year_founded: "Year Founded",
                label_stadium: "Home Stadium",
                label_photo_url: "Player Photo URL",
                label_category: "Tournament Category",
                cat_u10: "Under 10 (U10)",
                cat_u13: "Under 13 (U13)",
                cat_u15: "Under 15 (U15)",
                cat_senior: "Seniors (Adults)",
                btn_add_team: "Add Team",
                btn_clear: "Clear",
                btn_save_changes: "Save Changes",
                table_club: "Club",
                table_founded: "Founded",
                table_stadium: "Stadium",
                table_actions: "Actions",
                status_scheduled: "Scheduled",
                status_live: "LIVE",
                status_finished: "Finished",
                standings_title: "League Table Standings",
                fixtures_title: "Fixture Sheets & Results",
                scorers_title: "League Top Scorers",
                browse_clubs_title: "Browse Football Clubs",
                login_title: "Admin <span>Login</span>",
                login_desc: "Enter your secure administrator password to manage the league.",
                label_password: "Administrator Password",
                btn_login: "Login Access",
                auth_error: "Invalid password. Access denied.",
                no_live_games: "No Live Games Active",
                no_live_desc: "Simulations started in the Admin Dashboard will broadcast here in real-time.",
                live_match_center: "Live Match Center",
                top_scorers_title: "League Top Scorers",
                squad_roster_title: "Active Roster Squad",
                club_profile_title: "Club Profile",
                btn_sim_live: "Simulate Match Live ⚡",
                btn_record_score: "Record Score / Simulate ⚡",
                btn_edit_score: "Edit Score",
                modal_record_title: "Record/Simulate Score",
                label_match_status: "Match Status",
                label_age: "Age",
                label_nationality: "Nationality",
                label_upload_photo: "Upload Photo",
                placeholder_nationality: "e.g. Ethiopia",
                btn_upload: "Choose Image",
                label_category_isolation: "Tournament Isolation Mode",
                label_player_status: "Player Status",
                status_active: "Active",
                status_injured: "Injured",
                label_search_players: "Search players...",
                label_search_clubs: "Search clubs...",
                btn_export_excel: "CSV",
                btn_view_timeline: "View Timeline",
                btn_theme_toggle: "🌓 Theme",
                label_match_report: "Match Events Report",
                label_yellow_cards: "Yellow Cards",
                label_red_cards: "Red Cards",
                btn_view_schedule: "View Full Schedule",
                label_match: "Matchup",
                label_date: "Date",
                label_status: "Status",
                status_suspended: "Suspended"
            },
            am: {
                nav_user_portal: "የተጠቃሚ ፖርታል",
                nav_admin_dashboard: "የአስተዳዳሪ ዳሽቦርድ",
                nav_logout: "ውጣ",
                hero_title_user: "እንኳን ወደ <span>ሊግ ሴንትራል</span> በደህና መጡ",
                hero_desc_user: "የእውነተኛ ጊዜ ደረጃዎችን ይከታተሉ ፣ ንቁ የክለብ ካታሎጎችን ያስሱ ፣ የኮከብ ተጫዋቾችን ስታቲስቲክስ ያስሱ እና የቀጥታ ጨዋታዎችን ይመልከቱ።",
                btn_view_schedule: "ሙሉ የጨዋታ ፕሮግራም",
                label_match: "ግጥሚያ",
                label_date: "ቀን",
                label_status: "ሁኔታ",
                hero_title_admin: "ሊግ <span>የአስተዳዳሪ ዳሽቦርድ</span>",
                hero_desc_admin: "የእግር ኳስ ቡድኖችን ያስዳድሩ ፣ ተጫዋቾችን ይቅጠሩ እና ያስተካክሉ ፣ የግጥሚያ መርሃግብሮችን ያዘጋጁ ፣ የመጨረሻ ውጤቶችን ይመዝግቡ ወይም የቀጥታ ጨዋታዎችን ያስጀምሩ።",
                stat_total_teams: "ጠቅላላ ቡድኖች",
                stat_registered_players: "የተመዘገቡ ተጫዋቾች",
                stat_matches_scheduled: "የታቀዱ ጨዋታዎች",
                stat_goals_recorded: "የተመዘገቡ ግቦች",
                tab_manage_teams: "🛡️ ቡድኖችን ያስዳድሩ",
                tab_manage_players: "🏃‍♂️ ተጫዋቾችን ያስዳድሩ",
                tab_manage_matches: "📅 ጨዋታዎችን ያስዳድሩ",
                section_add_team: "አዲስ ቡድን ይጨምሩ",
                section_existing_clubs: "ነባር የእግር ኳስ ክለቦች",
                label_team_name: "የቡድን ስም",
                label_logo_emoji: "የሎጎ ኢሞጂ",
                label_year_founded: "የተመሰረተበት ዓመት",
                label_stadium: "የቤት ስታዲየም",
                label_photo_url: "የተጫዋች ፎቶ URL",
                label_category: "የውድድር ዓይነት",
                cat_u10: "ከ10 ዓመት በታች (U10)",
                cat_u13: "ከ13 ዓመት በታች (U13)",
                cat_u15: "ከ15 ዓመት በታች (U15)",
                cat_senior: "የአዋቂዎች (Seniors)",
                btn_add_team: "ቡድን ይጨምሩ",
                btn_clear: "አጽዳ",
                btn_save_changes: "ለውጦችን አስቀምጥ",
                table_club: "ክለብ",
                table_founded: "የተመሰረተበት",
                table_stadium: "ስታዲየም",
                table_actions: "እርምጃዎች",
                status_scheduled: "የታቀደ",
                status_live: "ቀጥታ",
                status_finished: "ተጠናቋል",
                standings_title: "የሊግ ሰንጠረዥ ደረጃዎች",
                fixtures_title: "የግጥሚያ ወረቀቶች እና ውጤቶች",
                scorers_title: "የሊግ ከፍተኛ ግብ አስቆጣሪዎች",
                browse_clubs_title: "የእግር ኳስ ክለቦችን ያስሱ",
                login_title: "የአስተዳዳሪ <span>መግቢያ</span>",
                login_desc: "ሊጉን ለማስተዳደር ደህንነቱ የተጠበቀ የአስተዳዳሪ የይለፍ ቃልዎን ያስገቡ።",
                label_password: "የአስተዳዳሪ ይለፍ ቃል",
                btn_login: "ይግቡ",
                auth_error: "የተሳሳተ የይለፍ ቃል:: መግባት አይችሉም::",
                no_live_games: "ምንም የቀጥታ ጨዋታዎች የሉም",
                no_live_desc: "በአስተዳዳሪ ዳሽቦርድ ውስጥ የጀመሩት ቀጥታ ጨዋታዎች እዚህ በቅጽበት ይታያሉ።",
                live_match_center: "የቀጥታ ግጥሚያ ማእከል",
                top_scorers_title: "የሊግ ከፍተኛ ግብ አስቆጣሪዎች",
                squad_roster_title: "ንቁ የተጫዋቾች ዝርዝር",
                club_profile_title: "የክለብ መገለጫ",
                btn_sim_live: "ጨዋታውን በቀጥታ ያስጀምሩ ⚡",
                btn_record_score: "ውጤት ይመዝግቡ / ያስጀምሩ ⚡",
                btn_edit_score: "ውጤት ያስተካክሉ",
                modal_record_title: "ውጤት ይመዝግቡ / ያስጀምሩ",
                label_match_status: "የግጥሚያ ሁኔታ",
                label_age: "ዕድሜ",
                label_nationality: "ዜግነት",
                label_upload_photo: "ፎቶ ይጫኑ",
                placeholder_nationality: "ምሳሌ፡ ኢትዮጵያ",
                btn_upload: "ምስል ይምረጡ",
                label_category_isolation: "የውድድር መለያ ሁነታ",
                label_player_status: "የተጫዋች ሁኔታ",
                status_active: "ዝግጁ",
                status_injured: "ጉዳት ላይ",
                status_suspended: "የታገደ",
                label_search_players: "ተጫዋቾችን ይፈልጉ...",
                label_search_clubs: "ክለቦችን ይፈልጉ...",
                btn_export_excel: "CSV (ኤክሴል)",
                btn_view_schedule: "ሙሉ የጨዋታ ፕሮግራም",
                label_match: "ግጥሚያ",
                hero_title_user: "እንኳን ወደ ሊግ ሴንትራል በደህና መጡ",
                btn_view_timeline: "ኩነቶች (Timeline)",
                btn_theme_toggle: "🌓 ቀለም ቀይር",
                label_match_report: "የጨዋታ ኩነቶች ዝርዝር",
                label_yellow_cards: "ቢጫ ካርድ ብዛት",
                label_red_cards: "ቀይ ካርድ ብዛት"
            }
        };
        this.init();
    }

    init() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            try {
                this.state = JSON.parse(stored);
                // Schema migration: ensure config exists
                if (!this.state.config) {
                    this.state.config = { language: 'en' };
                }
            } catch (e) {
                console.error("Error parsing football database, resetting...", e);
                this.loadSeedData();
            }
        } else {
            this.loadSeedData();
        }
        
        // Apply internationalization on load
        window.addEventListener('DOMContentLoaded', () => {
            this.translatePage();
        });
    }

    // --- AUTH LOGIC ---
    login(password) {
        if (password === 'admin123') { // Simple mock password
            sessionStorage.setItem('football_admin_session', 'active');
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.removeItem('football_admin_session');
        window.location.href = 'index.html';
    }

    isAuthenticated() {
        return sessionStorage.getItem('football_admin_session') === 'active';
    }

    requireAuth() {
        if (!this.isAuthenticated()) {
            window.location.href = 'login.html';
        }
    }

    // --- I18N LOGIC ---
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.state.config.language = lang;
            this.save();
            this.translatePage();
        }
    }

    getTranslation(key) {
        const lang = this.state.config.language;
        return this.translations[lang][key] || key;
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            // Handle span/HTML preservation if needed
            if (el.innerHTML.includes('<span') || el.innerHTML.includes('</span>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        });

        // Update placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.getTranslation(key);
        });

        // Update active language toggle state if any
        document.querySelectorAll('.lang-toggle').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.state.config.language) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    }

    loadSeedData() {
        console.log("Loading fresh seed data...");
        // 6 Top European Clubs
        this.state.teams = [
            { id: "t1", name: "Arsenal", logo: "🔴", founded: 1886, stadium: "Emirates Stadium", category: "senior" },
            { id: "t2", name: "Chelsea", logo: "🔵", founded: 1905, stadium: "Stamford Bridge", category: "senior" },
            { id: "t3", name: "Liverpool", logo: "🔴⚪", founded: 1892, stadium: "Anfield", category: "u15" },
            { id: "t4", name: "Manchester City", logo: "🩵", founded: 1880, stadium: "Etihad Stadium", category: "u15" },
            { id: "t5", name: "Real Madrid", logo: "⚪", founded: 1902, stadium: "Santiago Bernabéu", category: "u13" },
            { id: "t6", name: "Barcelona", logo: "🔵🔴", founded: 1899, stadium: "Spotify Camp Nou", category: "u13" }
        ];

        // Seed core players (4 per team with initial stats)
        this.state.players = [
            // Arsenal
            { id: "p1", teamId: "t1", name: "Bukayo Saka", number: 7, position: "FWD", goals: 16, assists: 9, photoUrl: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p2", teamId: "t1", name: "Martin Ødegaard", number: 8, position: "MID", goals: 8, assists: 10, photoUrl: "https://images.unsplash.com/photo-1508002366002-f5aad9af06dc?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p3", teamId: "t1", name: "William Saliba", number: 2, position: "DEF", goals: 2, assists: 1, photoUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p4", teamId: "t1", name: "David Raya", number: 22, position: "GK", goals: 0, assists: 0, photoUrl: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&q=80&w=200&h=200" },
            
            // Chelsea
            { id: "p5", teamId: "t2", name: "Cole Palmer", number: 20, position: "MID", goals: 22, assists: 11, photoUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p6", teamId: "t2", name: "Nicolas Jackson", number: 15, position: "FWD", goals: 14, assists: 5, photoUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p7", teamId: "t2", name: "Levi Colwill", number: 6, position: "DEF", goals: 1, assists: 1, photoUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p8", teamId: "t2", name: "Robert Sánchez", number: 1, position: "GK", goals: 0, assists: 0, photoUrl: "https://images.unsplash.com/photo-1508002366002-f5aad9af06dc?auto=format&fit=crop&q=80&w=200&h=200" },

            // Liverpool
            { id: "p9", teamId: "t3", name: "Mohamed Salah", number: 11, position: "FWD", goals: 18, assists: 10, photoUrl: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p10", teamId: "t3", name: "Alexis Mac Allister", number: 10, position: "MID", goals: 5, assists: 5, photoUrl: "" },
            { id: "p11", teamId: "t3", name: "Virgil van Dijk", number: 4, position: "DEF", goals: 3, assists: 2, photoUrl: "" },
            { id: "p12", teamId: "t3", name: "Alisson Becker", number: 1, position: "GK", goals: 0, assists: 0, photoUrl: "" },

            // Man City
            { id: "p13", teamId: "t4", name: "Erling Haaland", number: 9, position: "FWD", goals: 27, assists: 5, photoUrl: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p14", teamId: "t4", name: "Kevin De Bruyne", number: 17, position: "MID", goals: 4, assists: 12, photoUrl: "" },
            { id: "p15", teamId: "t4", name: "Rúben Dias", number: 3, position: "DEF", goals: 0, assists: 1, photoUrl: "" },
            { id: "p16", teamId: "t4", name: "Ederson", number: 31, position: "GK", goals: 0, assists: 0, photoUrl: "" },

            // Real Madrid
            { id: "p17", teamId: "t5", name: "Vinícius Júnior", number: 7, position: "FWD", goals: 15, assists: 8, photoUrl: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p18", teamId: "t5", name: "Jude Bellingham", number: 5, position: "MID", goals: 19, assists: 6, photoUrl: "" },
            { id: "p19", teamId: "t5", name: "Antonio Rüdiger", number: 22, position: "DEF", goals: 2, assists: 0, photoUrl: "" },
            { id: "p20", teamId: "t5", name: "Thibaut Courtois", number: 1, position: "GK", goals: 0, assists: 0, photoUrl: "" },

            // Barcelona
            { id: "p21", teamId: "t6", name: "Robert Lewandowski", number: 9, position: "FWD", goals: 19, assists: 8, yellowCards: 2, redCards: 0, photoUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=200&h=200" },
            { id: "p22", teamId: "t6", name: "Pedri", number: 8, position: "MID", goals: 4, assists: 5, yellowCards: 1, redCards: 0, photoUrl: "" },
            { id: "p23", teamId: "t6", name: "Ronald Araújo", number: 4, position: "DEF", goals: 1, assists: 1, yellowCards: 3, redCards: 1, photoUrl: "" },
            { id: "p24", teamId: "t6", name: "Marc-André ter Stegen", number: 1, position: "GK", goals: 0, assists: 0, yellowCards: 0, redCards: 0, photoUrl: "" }
        ];

        // Seed some starter finished match schedules so standings have context
        const now = new Date();
        const dateStr = (daysAgo) => {
            const d = new Date(now);
            d.setDate(d.getDate() - daysAgo);
            return d.toISOString().split('T')[0];
        };

        this.state.matches = [
            { id: "m1", homeTeamId: "t1", awayTeamId: "t2", homeScore: 2, awayScore: 1, status: "finished", minute: 90, events: [], date: dateStr(5) },
            { id: "m2", homeTeamId: "t3", awayTeamId: "t4", homeScore: 2, awayScore: 2, status: "finished", minute: 90, events: [], date: dateStr(4) },
            { id: "m3", homeTeamId: "t5", awayTeamId: "t6", homeScore: 3, awayScore: 2, status: "finished", minute: 90, events: [], date: dateStr(3) },
            { id: "m4", homeTeamId: "t2", awayTeamId: "t3", homeScore: 1, awayScore: 1, status: "finished", minute: 90, events: [], date: dateStr(2) },
            { id: "m5", homeTeamId: "t6", awayTeamId: "t1", homeScore: 0, awayScore: 2, status: "finished", minute: 90, events: [], date: dateStr(1) },
            { id: "m6", homeTeamId: "t4", awayTeamId: "t5", homeScore: 1, awayScore: 3, status: "finished", minute: 90, events: [], date: dateStr(1) }
        ];

        this.state.config = { language: 'en' };
        this.save();
    }

    // --- TEAMS CRUD ---
    getTeams() {
        return this.state.teams;
    }

    getTeamById(id) {
        return this.state.teams.find(t => t.id === id);
    }

    addTeam(name, logo, founded, stadium, category = 'senior') {
        const id = 't_' + Date.now();
        const newTeam = { id, name, logo: logo || "⚽", founded: parseInt(founded) || 2026, stadium: stadium || "Local Arena", category };
        this.state.teams.push(newTeam);
        this.save();
        return newTeam;
    }

    updateTeam(id, name, logo, founded, stadium, category) {
        const teamIndex = this.state.teams.findIndex(t => t.id === id);
        if (teamIndex > -1) {
            this.state.teams[teamIndex] = {
                ...this.state.teams[teamIndex],
                name,
                logo: logo || "⚽",
                founded: parseInt(founded) || 2026,
                stadium: stadium || "Local Arena",
                category
            };
            this.save();
            return this.state.teams[teamIndex];
        }
        return null;
    }

    deleteTeam(id) {
        // Delete team players
        this.state.players = this.state.players.filter(p => p.teamId !== id);
        // Delete associated matches
        this.state.matches = this.state.matches.filter(m => m.homeTeamId !== id && m.awayTeamId !== id);
        // Delete team
        this.state.teams = this.state.teams.filter(t => t.id !== id);
        this.save();
    }

    // --- PLAYERS CRUD ---
    getPlayers() {
        return this.state.players;
    }

    getPlayerById(id) {
        return this.state.players.find(p => p.id === id);
    }

    getPlayersByTeam(teamId) {
        return this.state.players.filter(p => p.teamId === teamId);
    }

    addPlayer(teamId, name, number, position, photoUrl = '', age = '', nationality = '', status = 'active', yellowCards = 0, redCards = 0) {
        const id = 'p_' + Date.now();
        const newPlayer = {
            id,
            teamId,
            name,
            number: parseInt(number) || 99,
            position: position || "MID",
            goals: 0,
            assists: 0,
            yellowCards: parseInt(yellowCards) || 0,
            redCards: parseInt(redCards) || 0,
            photoUrl: photoUrl || "",
            age: age || "",
            nationality: nationality || "",
            status: status || 'active'
        };
        this.state.players.push(newPlayer);
        this.save();
        return newPlayer;
    }

    updatePlayer(id, name, number, position, goals, assists, photoUrl, age, nationality, status, yellowCards, redCards) {
        const idx = this.state.players.findIndex(p => p.id === id);
        if (idx > -1) {
            this.state.players[idx] = {
                ...this.state.players[idx],
                name,
                number: parseInt(number) || 99,
                position: position || "MID",
                goals: parseInt(goals) || 0,
                assists: parseInt(assists) || 0,
                yellowCards: parseInt(yellowCards) || 0,
                redCards: parseInt(redCards) || 0,
                photoUrl: photoUrl || "",
                age: age || this.state.players[idx].age,
                nationality: nationality || this.state.players[idx].nationality,
                status: status || this.state.players[idx].status || 'active'
            };
            this.save();
            return this.state.players[idx];
        }
        return null;
    }

    deletePlayer(id) {
        this.state.players = this.state.players.filter(p => p.id !== id);
        this.save();
    }

    // --- MATCH SCHEDULING & GENERATION ---
    getMatchById(id) {
        return this.state.matches.find(m => m.id === id);
    }

    getMatches(categoryId = 'all') {
        if (categoryId === 'all') return this.state.matches;
        return this.state.matches.filter(m => {
            const h = this.getTeamById(m.homeTeamId);
            return h && h.category === categoryId;
        });
    }

    clearMatches(categoryId) {
        if (categoryId === 'all') {
            this.state.matches = [];
        } else {
            this.state.matches = this.state.matches.filter(m => {
                const h = this.getTeamById(m.homeTeamId);
                return !h || h.category !== categoryId;
            });
        }
        this.save();
    }

    autoGenerateSchedule(categoryId, doubleRoundRobin = true) {
        if (categoryId === 'all') return { success: false, message: "Please select a specific category." };

        let teams = this.getTeams().filter(t => t.category === categoryId);
        if (teams.length < 2) return { success: false, message: "Need at least 2 teams to generate a schedule." };

        // Round Robin Circle Method
        const tempTeams = [...teams];
        if (tempTeams.length % 2 !== 0) {
            tempTeams.push({ id: null, name: "BYE" }); // Dummy team for odd numbers
        }

        const numTeams = tempTeams.length;
        const numRounds = numTeams - 1;
        const matchesPerRound = numTeams / 2;

        let pairings = [];
        let startDate = new Date();
        startDate.setDate(startDate.getDate() + 1); // Start tomorrow

        for (let round = 0; round < numRounds; round++) {
            for (let i = 0; i < matchesPerRound; i++) {
                const home = tempTeams[i];
                const away = tempTeams[numTeams - 1 - i];

                if (home.id && away.id) {
                    pairings.push({ homeId: home.id, awayId: away.id, round: round + 1 });
                }
            }
            // Rotate teams (keep first team fixed)
            tempTeams.splice(1, 0, tempTeams.pop());
        }

        if (doubleRoundRobin) {
            const returnMatches = pairings.map(p => ({
                homeId: p.awayId,
                awayId: p.homeId,
                round: p.round + numRounds
            }));
            pairings = [...pairings, ...returnMatches];
        }

        // Convert pairings to actual match objects
        pairings.forEach((p, index) => {
            const matchDate = new Date(startDate);
            matchDate.setDate(startDate.getDate() + Math.floor(index / matchesPerRound) * 3); // Every 3 days
            
            const dateStr = matchDate.toISOString().split('T')[0];
            this.scheduleMatch(p.homeId, p.awayId, dateStr);
        });

        this.save();
        return { success: true, count: pairings.length };
    }

    // --- MATCHES CRUD ---

    scheduleMatch(homeTeamId, awayTeamId, date) {
        const id = 'm_' + Date.now();
        const match = {
            id,
            homeTeamId,
            awayTeamId,
            homeScore: 0,
            awayScore: 0,
            status: 'scheduled',
            minute: 0,
            events: [],
            date: date || new Date().toISOString().split('T')[0]
        };
        this.state.matches.push(match);
        this.save();
        return match;
    }

    updateMatch(id, homeScore, awayScore, status, minute = 90, events = []) {
        const idx = this.state.matches.findIndex(m => m.id === id);
        if (idx > -1) {
            this.state.matches[idx].homeScore = parseInt(homeScore) || 0;
            this.state.matches[idx].awayScore = parseInt(awayScore) || 0;
            this.state.matches[idx].status = status;
            this.state.matches[idx].minute = parseInt(minute);
            this.state.matches[idx].events = events;
            this.save();
            return this.state.matches[idx];
        }
        return null;
    }

    deleteMatch(id) {
        this.state.matches = this.state.matches.filter(m => m.id !== id);
        this.save();
    }

    // --- LEAGUE STANDINGS SYSTEM ---
    getStandings(categoryFilter = 'all') {
        const standings = {};
        
        let filteredTeams = this.state.teams;
        if (categoryFilter !== 'all') {
            filteredTeams = filteredTeams.filter(t => t.category === categoryFilter);
        }

        // Initialize standings structure for all teams
        filteredTeams.forEach(team => {
            standings[team.id] = {
                teamId: team.id,
                teamName: team.name,
                logo: team.logo,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
                points: 0
            };
        });

        // Compute standings from finished matches
        this.state.matches.forEach(match => {
            if (match.status !== 'finished') return;
            
            const home = standings[match.homeTeamId];
            const away = standings[match.awayTeamId];
            
            // If teams were deleted but remain in past matches, bypass them
            if (!home || !away) return;

            home.played += 1;
            away.played += 1;
            
            home.goalsFor += match.homeScore;
            home.goalsAgainst += match.awayScore;
            
            away.goalsFor += match.awayScore;
            away.goalsAgainst += match.homeScore;
            
            if (match.homeScore > match.awayScore) {
                home.won += 1;
                home.points += 3;
                away.lost += 1;
            } else if (match.homeScore < match.awayScore) {
                away.won += 1;
                away.points += 3;
                home.lost += 1;
            } else {
                home.drawn += 1;
                home.points += 1;
                away.drawn += 1;
                away.points += 1;
            }
        });

        // Calculate Goal Differences and form final array
        return Object.values(standings).map(teamRow => {
            teamRow.goalDifference = teamRow.goalsFor - teamRow.goalsAgainst;
            return teamRow;
        }).sort((a, b) => {
            if (b.points !== a.points) {
                return b.points - a.points; // Most points first
            }
            if (b.goalDifference !== a.goalDifference) {
                return b.goalDifference - a.goalDifference; // Best goal diff second
            }
            if (b.goalsFor !== a.goalsFor) {
                return b.goalsFor - a.goalsFor; // Most goals third
            }
            return a.teamName.localeCompare(b.teamName); // Alphabetic fallback
        });
    }

    getTopScorers(categoryFilter = 'all', limit = 5) {
        let players = this.state.players;
        if (categoryFilter !== 'all') {
            const teamIds = this.state.teams.filter(t => t.category === categoryFilter).map(t => t.id);
            players = players.filter(p => teamIds.includes(p.teamId));
        }
        
        return [...players]
            .filter(p => p.goals > 0)
            .sort((a, b) => b.goals - a.goals || b.assists - a.assists)
            .slice(0, limit);
    }

    // --- DYNAMIC LIVE SIMULATION ENGINE ---
    /**
     * Simulates a scheduled match in real time.
     * Ticks every 1.5 seconds, running 12-15 minutes of game time.
     */
    simulateMatch(matchId, onTick, onComplete) {
        const match = this.getMatchById(matchId);
        if (!match || match.status === 'finished') {
            if (onComplete) onComplete(match);
            return;
        }

        // Initialize simulation state
        match.status = 'live';
        match.minute = 0;
        match.homeScore = 0;
        match.awayScore = 0;
        match.events = [{
            time: 0,
            type: 'whistle',
            icon: '🏁',
            text: 'Match kicked off! The stadium is electric.'
        }];
        this.save();

        const homePlayers = this.getPlayersByTeam(match.homeTeamId);
        const awayPlayers = this.getPlayersByTeam(match.awayTeamId);
        const homeName = this.getTeamById(match.homeTeamId).name;
        const awayName = this.getTeamById(match.awayTeamId).name;

        const commentaries = [
            "Great possession display in the midfield.",
            "Shot blocked! Solid defence standing tall.",
            "Offside flag is up, play is halted.",
            "Foul in the center circle. Referee issues a cooling warning.",
            "Corner kick awarded. Cross went sailing into keeper's hands.",
            "Sensational tackle stopped a sliding counter-attack.",
            "A strike from distance! Over the bar.",
            "Tactical build-up play looking for spaces in the flank."
        ];

        const simInterval = setInterval(() => {
            match.minute += Math.floor(Math.random() * 8) + 7; // Increment match minute
            
            if (match.minute >= 90) {
                match.minute = 90;
                match.status = 'finished';
                match.events.push({
                    time: 90,
                    type: 'whistle',
                    icon: '🏁',
                    text: `Final whistle! Match finished. ${homeName} ${match.homeScore} - ${match.awayScore} ${awayName}.`
                });
                this.save();
                clearInterval(simInterval);
                if (onTick) onTick(match);
                if (onComplete) onComplete(match);
                return;
            }

            // Decide if an event happens (75% chance per tick)
            if (Math.random() < 0.75) {
                const eventRoll = Math.random();
                let event = {};

                if (eventRoll < 0.25) { // Goal scored!
                    const scoringHome = Math.random() < 0.52; // Slight home advantage
                    const teamId = scoringHome ? match.homeTeamId : match.awayTeamId;
                    const scorerTeamName = scoringHome ? homeName : awayName;
                    const opponentTeamName = scoringHome ? awayName : homeName;
                    const playersList = scoringHome ? homePlayers : awayPlayers;
                    
                    if (scoringHome) match.homeScore++;
                    else match.awayScore++;

                    // Choose scorer
                    let scorer = playersList.length ? playersList[Math.floor(Math.random() * playersList.length)] : null;
                    if (scorer) {
                        scorer.goals = (scorer.goals || 0) + 1;
                        // Choose random assistant
                        let assister = playersList.filter(p => p.id !== scorer.id)[Math.floor(Math.random() * (playersList.length - 1))];
                        let assistText = "";
                        if (assister && Math.random() < 0.7) {
                            assister.assists = (assister.assists || 0) + 1;
                            assistText = ` Assisted by ${assister.name}.`;
                        }
                        event = {
                            time: match.minute,
                            type: 'goal',
                            icon: '⚽',
                            text: `GOAL! ${scorer.name} fires a bullet into the net for ${scorerTeamName}!${assistText}`
                        };
                    } else {
                        event = {
                            time: match.minute,
                            type: 'goal',
                            icon: '⚽',
                            text: `GOAL! ${scorerTeamName} scores against ${opponentTeamName}!`
                        };
                    }
                } else if (eventRoll < 0.40) { // Yellow Card
                    const cardHome = Math.random() < 0.5;
                    const playerList = cardHome ? homePlayers : awayPlayers;
                    const teamName = cardHome ? homeName : awayName;
                    let badBoy = playerList.length ? playerList[Math.floor(Math.random() * playerList.length)] : null;

                    event = {
                        time: match.minute,
                        type: 'yellow_card',
                        icon: '🟨',
                        text: badBoy 
                            ? `Yellow Card! ${badBoy.name} (${teamName}) is booked for a reckless sliding tackle.`
                            : `Yellow Card issued to a ${teamName} defender.`
                    };
                    if (badBoy) {
                        badBoy.yellowCards = (badBoy.yellowCards || 0) + 1;
                    }
                } else if (eventRoll < 0.44) { // Red Card
                    const cardHome = Math.random() < 0.5;
                    const playerList = cardHome ? homePlayers : awayPlayers;
                    const teamName = cardHome ? homeName : awayName;
                    let offender = playerList.length ? playerList[Math.floor(Math.random() * playerList.length)] : null;

                    event = {
                        time: match.minute,
                        type: 'red_card',
                        icon: '🟥',
                        text: offender 
                            ? `RED CARD! ${offender.name} (${teamName}) is sent off for a blatant professional foul!`
                            : `Red Card! Sent off player on the ${teamName} side.`
                    };
                    if (offender) {
                        offender.redCards = (offender.redCards || 0) + 1;
                    }
                } else { // Commentary / Near Miss
                    const isHomeCommentary = Math.random() < 0.5;
                    const prefix = isHomeCommentary ? homeName : awayName;
                    const textSample = commentaries[Math.floor(Math.random() * commentaries.length)];
                    event = {
                        time: match.minute,
                        type: 'commentary',
                        icon: '🎙️',
                        text: `${prefix}: ${textSample}`
                    };
                }

                match.events.push(event);
                this.save();
            }

            if (onTick) onTick(match);
        }, 1200);

        return simInterval; // Return handle so it can be cleared/paused
    }

    setTheme(theme) {
        if (!this.state.config) this.state.config = { language: 'en' };
        this.state.config.theme = theme;
        this.save();
    }

    getTheme() {
        return (this.state.config && this.state.config.theme) ? this.state.config.theme : 'dark';
    }
}

// Export for browser use directly as a global variable
window.dbEngine = new FootballDB();
window.db = window.dbEngine.state; // Direct reference shortcut
console.log("Football database engine loaded. Ready to serve!");
