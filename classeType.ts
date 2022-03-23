interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m:number) {}
}

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

window.onload = () => {

    let square = <Square>{};
    square.color = "black";
    square.penWidth = 0.5;
    square.sideLength = 10;

    alert(square.color + " " + square.penWidth + " " + square.sideLength);

}