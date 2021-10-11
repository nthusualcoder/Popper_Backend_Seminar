const fs = require('fs');

const textbook = {
    Subject: "Vector Mechanics For Engineers",
    Subtitle: "Statics and Dynamics",
    Author: ["Ferdinand P. Beer", "E. Russell Johnston, Jr.", "David F. Mazurek", "Philip J. Cornwell", "Brian P. Self"]
}

const textbookJSON = JSON.stringify(textbook);

fs.writeFileSync('textbook.json', textbookJSON, "utf8");
