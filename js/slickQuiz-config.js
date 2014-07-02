// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Teste dein Wissen!",
        "main":    "<p>Teste ob du auf den bisherigen Seiten etwas gelernt hast!</p>",
        "results": "",
        "level1":  "Snack-Chef",
        "level2":  "Snack-Profi",
        "level3":  "Snack-Amateur",
        "level4":  "Küchenhilfe",
        "level5":  "Fastfood-Maniac" // no comma here
    },
        "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Welches Öl wird besonders in der mediterranen Küche verwendet?",
            "a": [
                {"option": "Palmöl",        "correct": false},
                {"option": "Babyöl",        "correct": false},
                {"option": "Olivenöl",      "correct": true},
                {"option": "Rapsöl",        "correct": false} // no comma here
            ],
            "correct": "<p><span> Richtig! </span> Olivenöl sollte in jeder Küche vorhanden sein.</p>",
            "incorrect": "<p><span>Sorry, leider falsch! </span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "Was gehört nicht zur Kategorie der Kräuter?",
            "a": [
                {"option": "Petersilie",               "correct": false},
                {"option": "Koriander",                "correct": false},
                {"option": "Dill",                     "correct": false},
                {"option": "Muskat",					"correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> War wohl zu einfach.</p>",
            "incorrect": "<p><span>Hmmm.Nö.</span> Kräuter sind die Grundlage vieler Gerichte.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Was gehört in eine klassische Guacamole? Wähle alle zutreffenden.",
            "a": [
                {"option": "Avocado",                      "correct": true},
                {"option": "Saure Sahne",                  "correct": false},
                {"option": "Zitrone",                      "correct": true},
                {"option": "Pfeffer und Salz",             "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Du scheinst aufgepasst zu haben.</p>",
            "incorrect": "<p><span>Nicht ganz.</span> Denk nochmal nach, koch dir was Nettes & versuch es später nochmal.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "Mit welcher Technik bleibt grünes Gemüse auch nach der Zubereitung noch leuchtend grün?",
            "a": [
                {"option": "Braten",    "correct": false},
                {"option": "Kochen und in Eiswasser abschrecken",     "correct": true},
                {"option": "Backen",      "correct": false},
                {"option": "Dampfgaren",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Wow! Sehr gut!</span> Fast geschafft!</p>",
            "incorrect": "<p><span>Falsch.</span> Zurück an den Herd und nochmal üben.</p>" // no comma here
        },
        { // Question 5
            "q": "Hast du Hunger und Lust auf unsere Rezepte?",
            "a": [
                {"option": "Ja!",    "correct": true},
                {"option": "Nein! =(",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Geschafft!</span> Los gehts! Einfach und lecker essen ist so einfach!</p>",
            "incorrect": "<p><span>HEY!</span>Geh nochmal die Rezepte durch und lass dich inspirieren!</p>" // no comma here
        } // no comma here
    ]
};
