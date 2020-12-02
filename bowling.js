function bowlingScore(rolls) {
  let score = 0;
  let isSecondRollInFrame = false;
  let frameNumber = 1;

  for (let i = 0; i < rolls.length && frameNumber <= 10; i++) {
    const pinFell = rolls[i];
    const prevPinFell = rolls[i - 1] || 0;

    score += pinFell;
    if (isStrike(pinFell)) {
      score += (rolls[i + 1] || 0) + (rolls[i + 2] || 0);
      isSecondRollInFrame = false;
      frameNumber++;
    } else if (isSpare(prevPinFell, pinFell, isSecondRollInFrame)) {
      score += rolls[i + 1] || 0;
      isSecondRollInFrame = false;
      frameNumber++;
    } else {
      if (isSecondRollInFrame) {
        frameNumber++;
      }
      isSecondRollInFrame = !isSecondRollInFrame;
    }
  }
  return score;
}

const isStrike = (pinFell) => pinFell === 10;
const isSpare = (prevPinFell, pinFell, isSecondRoll) =>
  isSecondRoll && prevPinFell + pinFell === 10;

module.exports = bowlingScore;
