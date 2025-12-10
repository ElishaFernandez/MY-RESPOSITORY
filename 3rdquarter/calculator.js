// Operator button handlers
document.getElementById("opPlus").addEventListener("click", function () {
    document.getElementById("operator").value = "+";
});

document.getElementById("opMinus").addEventListener("click", function () {
    document.getElementById("operator").value = "-";
});

document.getElementById("opMult").addEventListener("click", function () {
    document.getElementById("operator").value = "*";
});

document.getElementById("opDiv").addEventListener("click", function () {
    document.getElementById("operator").value = "/";
});

// Calculate button handler
document.getElementById("calcBtn").addEventListener("click", function () {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let resultText = document.getElementById("result");

    let result;

    if (op === "+") result = n1 + n2;
    else if (op === "-") result = n1 - n2;
    else if (op === "*") result = n1 * n2;
    else if (op === "/") result = n1 / n2;
    else result = "Invalid operator";

    resultText.textContent = result;
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").textContent = "---";
});
