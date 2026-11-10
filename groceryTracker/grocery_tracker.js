function groceryTracker(amount1, amount2, amount3) {
    return amount1 + amount2 + amount3;
}

function showTotal() {
    let grocery1 = parseFloat(document.getElementById('grocery1').value) || 0;
    let grocery2 = parseFloat(document.getElementById('grocery2').value) || 0;
    let grocery3 = parseFloat(document.getElementById('grocery3').value) || 0;

    let total = groceryTracker(grocery1, grocery2, grocery3);

    document.getElementById('result').innerText = `Total grocery expenditure: ${total}`;
}