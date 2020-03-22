var avgJohn, avgMike, winner, highestScore, avgMary;

// Calculate average score for each team
avgJohn = (89 + 120 + 103) / 3;
avgMike = (116 + 200 + 123) / 3;
avgMary = (116 + 200 + 123) / 3;

// Define a winner
if (avgMary > avgJohn && avgMary > avgMike) {
    winner = 'Mary';
    highestScore = avgMary
} else {
    winner = avgJohn > avgMike ? 'John' : 'Mike';
    highestScore = avgJohn > avgMike ? avgJohn : avgMike;
}

if ((avgJohn != avgMike) && (avgJohn != avgMary) && (avgMike != avgMary)) {
    console.log("The winner is " + winner + " with a score equals " + highestScore);
} else {
    console.log("There is a draw with a score equals " + highestScore);
}