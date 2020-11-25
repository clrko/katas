function bowlingScore(rolls) {
  let score = 0;
  let bonusRollsRemaining = 0;
  for (const pinFell of rolls) {
    score += pinFell;
    if (bonusRollsRemaining > 0) {
      score += pinFell;
      bonusRollsRemaining--;
    }
    if (pinFell === 10) {
      bonusRollsRemaining = 2;
    }
  }
  return score;
}

module.exports = bowlingScore;
