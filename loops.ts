class Fruits {
    name: string;
    color: string;
    size: number;
}

window.onload = () => {

    var num: number = 1;
    var textOut: string = "";

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
    for (let index = 0; index < 10; index++) {
        textOut += "For - The number is " + index + "<br>";        
    }

    let myArray: string[] = ["cat", "dog", "bird", "mouse", "fish"];
    for (num = 0; num < myArray.length; num++) {
        textOut += "Fot - My pet is " + myArray[num] + "<br>";
    }

    // For in
    let fruits: Fruits = {name: "Apple", color: "Rede", size: 5};
    for (let f in fruits) {
        textOut += "For In - " + fruits[f] + "<br>";
    }

    // Break 
    for (let i = 0; i < 10; i++) {
        if (i == 3) {
            break;
        } else {
            textOut += "Break - I = " + i + "<br>";
        }
    }

    // Continue
    for (let i = 0; i <= 10; i++) {
        if (i == 3) {
            textOut += ">>>>>>>>> - I = " + i + "<br>";
            continue;
        } else {
            textOut += "Continue - I = " + i + "<br>";
        }
    }

    document.getElementById('content').innerHTML = textOut;
};
