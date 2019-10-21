var avgJohn, avgMike, winner, highestScore;

// Calculate average score for each team
avgJohn = (89 + 120 + 103) / 3;
avgMike = (116 + 94 + 123) / 3;

// Define a winner
winner = avgJohn > avgMike ? 'John' : 'Mike';
highestScore = avgJohn > avgMike ? avgJohn : avgMike;
console.log("The winner is " + winner + " with a score equals " + highestScore);