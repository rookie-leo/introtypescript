// Classe Generica
class GenericNumber<T> {
    zeroValue: T;
    add : (x: T, y: T) => T;
}

// Generic Constraints
interface LengthInterf {
    length: number;
}

function loggingId<T extends LengthInterf> (arg: T): T {
    alert(arg.length);



    return arg;
}


window.onload = () => {

    let genericNumber = new GenericNumber<number>();
    genericNumber.zeroValue = 0;

    genericNumber.add = function(x, y) {
        return x + y;
    };

    document.getElementById('content').innerHTML = "The zero value is " + genericNumber.zeroValue + "<br> The add value is " + genericNumber.add(6, 7);

    let log = loggingId(["Yellow", "Green", "Blue", "Red", "Black"]);
    
    let textOut: string;
    for (let i = 0; i < log.length; i++) {
        textOut += log[i] + "<br>";
    }
    document.getElementById('color').innerHTML = textOut;

};