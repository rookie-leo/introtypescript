declare function calcCircleArea(radius);

export module Module1.Calculator {
    export class ClacArea {
        getArea(radius) {
            let area = calcCircleArea(radius);
            console.log("Area: " + area);
            return area;
        }
    }
}