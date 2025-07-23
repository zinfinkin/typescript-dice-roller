var _a;
function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
function rollDice(numDice, sides) {
    var rolls = [];
    for (var i = 0; i < numDice; i++) {
        rolls.push(rollDie(sides));
    }
    return rolls;
}
function displayResult(rolls) {
    var resultDiv = document.getElementById("result");
    if (resultDiv) {
        var total = rolls.reduce(function (a, b) { return a + b; }, 0);
        resultDiv.innerHTML = "\n      Rolls: ".concat(rolls.join(", "), "<br>\n      Total: ").concat(total, "\n    ");
    }
}
(_a = document.getElementById("rollBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var diceCount = parseInt(document.getElementById("diceCount").value);
    var sidesCount = parseInt(document.getElementById("sidesCount").value);
    if (diceCount > 0 && sidesCount >= 2) {
        var rolls = rollDice(diceCount, sidesCount);
        displayResult(rolls);
    }
});
