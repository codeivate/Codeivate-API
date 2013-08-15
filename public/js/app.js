var app = {
    allUsers: function(selector, dropdown) {
        $.ajax({
            async: false,
            url: "http://www.codeivate.com/API/v1/users.json?callback=?",
            dataType: 'JSONP',
            success: function (json) {
                if ( ! dropdown) {
                    $(selector).autocomplete({
                        source: json
                    });
                } else {
                    $.each(json, function(i, person) {
                        $(selector).append('<option value="' + person + '">' + person + '</option>');
                    });
                }
            }
        });
    },

    initRandomButton: function() {
        $('button.randomPlayers').on('click', function() {
            var options1 = $("#user1 > option").length,
                options2 = $("#user2 > option").length,
                index1 = Math.floor(options1 * (Math.random() % 1)),
                index2 = Math.floor(options2 * (Math.random() % 1));

            $("#user1 option:nth-child(" + index1 + ")").prop("selected", true);
            $("#user2 option:nth-child(" + index2 + ")").prop("selected", true);
            $('button.battle').trigger('click');
        });
    },

    initBattleButton: function(selector) {
        $('button.battle').on('click', function() {
            $(selector).prop('disabled', true);
            $(this).prop('disabled', true);
            $('button.randomPlayers').prop('disabled', true);

           user1 = $('#user1').val();
           user2 = $('#user2').val();

           app.fetchData(user1, user2);
        });
    },

    fetchData: function(user1, user2) {
        var url_player_1 = 'http://codeivate.com/users/' + user1 + '.json?callback=?',
            url_player_2 = 'http://codeivate.com/users/' + user2 + '.json?callback=?';

        Poll.start({
            name: "battle",
            interval: 1500,
            action: function() {
                player1_wins = 0, player2_wins = 0;

                $.getJSON(url_player_1, function(player1) {
                    $.getJSON(url_player_2, function(player2) {
                        $('.battleTable th.player1').html( player1.name );
                        $('.battleTable th.player2').html( player2.name );

                        app.battle(player1, player2);

                        $('table').removeClass('hide');
                    });
                });
            }
        });
    },

    battle: function(user1, user2) {
        $html = '';
        $player1_wins = 0;
        $player2_wins = 0;
        skill_list = [
            'level',
            'focus_level',
            'focus_points',
            'max_streak',
            'total_days_coded',
            'total_flow_states',
            'time_spent',
            'programming_now',
            'current_language',
            'streaking_now',
        ];

        $.each(user1, function(skill, value) {
            if (app.lookup(skill, skill_list)) {
                $html += '<tr>';
                    $html += '<td>' + app.slug(skill) + '</td>';
                    $html += '<td>' + app.manipulate(skill, value) + '</td>';
                    $html += '<td>' + app.manipulate(skill, user2[skill]) + '</td>';
                    winner = app.winner(skill, value, user2[skill]);

                    if (winner == "Player 1") {
                        $player1_wins++;
                    } else if (winner == "Player 2") {
                        $player2_wins++;
                    }

                    $html += '<td>' + app.playerToUsername(winner, user1, user2) + '</td>';
                $html += '</tr>';
            }
        });

        $html += '<tr><td></td><td></td><td></td><td></td></tr>'; // Empty Line

        // TOTAL SCORE
        $html += '<tr>';
            $html += '<td>';
                $html += '<strong>Total Score:</strong>';
            $html += '</td>';
            $html += '<td>';
                $html += $player1_wins;
            $html += '</td>';
            $html += '<td>';
                $html += $player2_wins;
            $html += '</td>';
            $html += '<td>';
                if ($player1_wins == $player2_wins) {
                    winner = "Draw";
                } else if ($player1_wins > $player2_wins) {
                    winner = "Player 1";
                } else if ($player1_wins < $player2_wins) {
                    winner = "Player 2";
                }

                $html += app.playerToUsername(winner, user1, user2);
            $html += '</td>';
        $html += '</tr>';

        $('.battleTable tbody').html($html);
    },

    playerToUsername: function(winner, user1, user2) {
        if (winner == "Player 1") {
            return user1.name;
        } else if (winner == "Player 2") {
            return user2.name;
        } else {
            return winner;
        }
    },

    winner: function(skill, user_value_1, user_value_2) {
        booleans    = ['programming_now', 'streaking_now'];
        times       = ['time_spent', 'max_streak'];
        numbers     = ['level', 'focus_level', 'focus_points', 'total_flow_states', 'total_days_coded'];

        if (app.lookup(skill, booleans)) {
            // Boolean
            if (user_value_1 === true && user_value_2 === true) {
                return "Draw";
            } else if (user_value_1 === false && user_value_2 === false) {
                return "Draw";
            } else if (user_value_1 === true && user_value_2 === false) {
                return "Player 1";
            } else if (user_value_1 === false && user_value_2 === true) {
                return "Player 2";
            }
        } else if (app.lookup(skill, times)) {
            // Time
            if (user_value_1 == user_value_2) {
                return "Draw";
            } else if (user_value_1 > user_value_2) {
                return "Player 1";
            } else if (user_value_1 < user_value_2) {
                return "Player 2";
            }
        } else if (app.lookup(skill, numbers)) {
            // Number
            user_value_1 = Math.floor(user_value_1);
            user_value_2 = Math.floor(user_value_2);
            if (user_value_1 == user_value_2) {
                return "Draw";
            } else if (user_value_1 > user_value_2) {
                return "Player 1";
            } else if (user_value_1 < user_value_2) {
                return "Player 2";
            }
        } else {
            if (typeof user_value_1 == "string" && typeof user_value_2 == "string") {
                return "Draw";
            } else if (user_value_1 === false && user_value_2 === false) {
                return "Draw";
            } else if (user_value_1 === true && user_value_2 === true) {
                return "Draw";
            } else if (typeof user_value_1 == "string" && user_value_2 === false) {
                return "Player 1";
            } else if (typeof user_value_2 === "string" && user_value_1 === false) {
                return "Player 2";
            }
        }
    },

    manipulate: function(skill, value) {
        booleans    = ['programming_now', 'streaking_now'];
        times       = ['time_spent', 'max_streak'];
        numbers     = ['level', 'focus_level', 'focus_points', 'total_flow_states', 'total_days_coded'];

        if (app.lookup(skill, booleans) || value === false || value === true) {
            // Boolean
            if (value === false) {
                return '<span class="icon-check-minus deny"></span>';
            } else if (value === true) {
                return '<span class="icon-check allow"></span>';
            }
        } else if (app.lookup(skill, times)) {
            // Time
            return app.secondsToString(value);
        } else if (app.lookup(skill, numbers)) {
            // Number
            return Math.floor(value);
        } else {
            return value;
        }
    },

    slug: function(text) { // replaces "programing_now" to "Programming Now"
        text = text.replace(/_/g, ' ');
        return (text + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
            return $1.toUpperCase();
        });
    },

    lookup: function(key, search) {
        if (!search || (search.constructor !== Array && search.constructor !== Object)) {
            return false;
        }
        for (var i = 0; i < search.length; i++) {
            if (search[i] === key) {
                return true;
            }
        }
        return key in search;
    },

    secondsToString: function(seconds) {
        var numdays = Math.floor(seconds / 86400);
        var numhours = Math.floor((seconds % 86400) / 3600);
        var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
        var numseconds = ((seconds % 86400) % 3600) % 60;

        return numdays + " days " + numhours + "h " + numminutes + "m " + numseconds + "s";
    }

};

// Put all the users in the dropdowns
app.allUsers(".usersList", true); // true for select box else it uses a textbox with autocompletion :)
app.initBattleButton(".usersList"); // selector to make it muted
app.initRandomButton(); // Randomness
