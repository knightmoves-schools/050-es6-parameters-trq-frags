function calculateTotal(subtotal, shipping = 2.50) {
    return subtotal + shipping;
}

function printTopThreeHeadlines(...headlines) {
    return headlines.slice(0, 3).join('\n');
}

let total = calculateTotal(10); // subtotal 10, shipping default 2.50
let headlinesOutput = printTopThreeHeadlines(
    "Breaking News: Market Hits Record High",
    "Sports: Local Team Wins Championship",
    "Weather: Sunny Skies Ahead",
    "Tech: New Smartphone Released"
);

// Display results (for funnies)
document.getElementById("result").innerHTML = `Total: $${total}<br><pre>${headlinesOutput}</pre>`;