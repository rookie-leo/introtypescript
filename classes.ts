class Hello {
    helloText: string;

    constructor(textIn: string) {
        this.helloText = textIn;
    }

    message(): string {
        return "Hello " + this.helloText;
    }
}

class Areas {
    pi: number;

    constructor() {
        this.pi = 3.14;
    }

    circle(radius:number): number {
        return this.pi * radius * radius;
    }

    rectangle(height: number, width: number): number {
        return height * width;
    }

    square(side: number): number {
        return side * side;
    }
}

window.onload = () => {
    let hello = new Hello("World!");
    
    alert(hello.message());

    let circle = new Areas();

    document.getElementById('content').innerHTML = "The circle area is " + circle.circle(5);
}