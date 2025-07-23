function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDice(numDice: number, sides: number): number[] {
  const rolls: number[] = [];
  for (let i = 0; i < numDice; i++) {
    rolls.push(rollDie(sides));
  }
  return rolls;
}

function displayResult(rolls: number[]): void {
  const resultDiv = document.getElementById("result");
  if (resultDiv) {
    const total = rolls.reduce((a, b) => a + b, 0);
    resultDiv.innerHTML = `
      Rolls: ${rolls.join(", ")}<br>
      Total: ${total}
    `;
  }
}

document.getElementById("rollBtn")?.addEventListener("click", () => {
  const diceCount = parseInt((<HTMLInputElement>document.getElementById("diceCount")).value);
  const sidesCount = parseInt((<HTMLInputElement>document.getElementById("sidesCount")).value);

  if (diceCount > 0 && sidesCount >= 2) {
    const rolls = rollDice(diceCount, sidesCount);
    displayResult(rolls);
  }
});
