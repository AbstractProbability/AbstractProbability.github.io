document.addEventListener("DOMContentLoaded", function () {
    function logEvent(event, type) {
        console.log(`${new Date().toISOString()} , ${type} , ${event.target.tagName.toLowerCase()}`);
    }

    // Track clicks
    document.addEventListener("click", function (event) {
        logEvent(event, "click");
    });

    // Track page views (triggered when the page loads)
    console.log(`${new Date().toISOString()} , page_view , document`);

    // Track hover events only on links and images
    document.addEventListener("mouseover", function (event) {
        if (event.target.tagName.toLowerCase() === "a" || event.target.tagName.toLowerCase() === "img") {
            logEvent(event, "hover");
        }
    });
});


function analyzeText() {
    const text = document.getElementById("textInput").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    // Basic counts
    let letters = 0, spaces = 0, newlines = 0, specialSymbols = 0;

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            letters++;
        } else if (ch === ' ') {
            spaces++;
        } else if (ch === '\n') {
            newlines++;
        } else if (!(ch >= '0' && ch <= '9')) {
            specialSymbols++;
        }
    }

    // Split by whitespace (space, tab, newline)
    const wordsArray = text.split(/\s+/).filter(Boolean);
    const words = wordsArray.length;

    const tokens = wordsArray.map(word => word.toLowerCase().replaceAll('.', '').replaceAll(',', ''));

    // Pronouns
    const pronounsList = ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", "my", "your", "his", "its", "our", "their"];
    const pronounsCount = countGroup(tokens, pronounsList);

    // Prepositions
    const prepositionsList = ["in", "on", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "over", "under"];
    const prepositionsCount = countGroup(tokens, prepositionsList);

    // Indefinite articles
    const articlesList = ["a", "an"];
    const articlesCount = countGroup(tokens, articlesList);

    // Output
    outputDiv.innerHTML += `<h3>Text Statistics</h3>`;
    outputDiv.innerHTML += `Letters: ${letters}<br>`;
    outputDiv.innerHTML += `Words: ${words}<br>`;
    outputDiv.innerHTML += `Spaces: ${spaces}<br>`;
    outputDiv.innerHTML += `Newlines: ${newlines}<br>`;
    outputDiv.innerHTML += `Special Symbols: ${specialSymbols}<br><br>`;

    printGroupCounts("Pronouns", pronounsCount, outputDiv);
    printGroupCounts("Prepositions", prepositionsCount, outputDiv);
    printGroupCounts("Indefinite Articles", articlesCount, outputDiv);
}

function countGroup(words, groupList) {
    const count = {};
    for (const word of words) {
        if (groupList.includes(word)) {
            count[word] = (count[word] || 0) + 1;
        }
    }
    return count;
}

function printGroupCounts(title, countObj, outputDiv) {
    outputDiv.innerHTML += `<h4>${title}</h4>`;
    if (Object.keys(countObj).length === 0) {
        outputDiv.innerHTML += `None found.<br>`;
        return;
    }
    for (const key in countObj) {
        outputDiv.innerHTML += `${key}: ${countObj[key]}<br>`;
    }
    outputDiv.innerHTML += `<br>`;
}