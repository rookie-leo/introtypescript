var Fruits = /** @class */ (function () {
    function Fruits() {
    }
    return Fruits;
}());
window.onload = function () {
    var num = 1;
    var textOut = "";
    // Whille
    while (num < 10) {
        textOut += "While - The number is " + num + "<br>";
        num++;
    }
    // Do Whille
    num = 0;
    do {
        textOut += "Do While - The number is " + num + "<br>";
        num++;
    } while (num < 10);
    // For
    for (var index = 0; index < 10; index++) {
        textOut += "For - The number is " + index + "<br>";
    }
    var myArray = ["cat", "dog", "bird", "mouse", "fish"];
    for (num = 0; num < myArray.length; num++) {
        textOut += "For - My pet is " + myArray[num] + "<br>";
    }
    // For in
    var fruits = { name: "Apple", color: "Rede", size: 5 };
    for (var f in fruits) {
        textOut += "For In - " + fruits[f] + "<br>";
    }
    // Break 
    for (var i = 0; i < 10; i++) {
        if (i == 3) {
            break;
        }
        else {
            textOut += "Break - I = " + i + "<br>";
        }
    }
    // Continue
    for (var i = 0; i <= 10; i++) {
        if (i == 3) {
            textOut += ">>>>>>>>> - I = " + i + "<br>";
            continue;
        }
        else {
            textOut += "Continue - I = " + i + "<br>";
        }
    }
    document.getElementById('content').innerHTML = textOut;
};
//# sourceMappingURL=loops.js.map