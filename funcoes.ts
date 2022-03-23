window.onload = () => {

    function showMessage(message: string) {
        alert("The message is: " + message);
    }

    function sum(x: number, y: number): number {
        return x + y;
    }


    function trueOrFalse(num: number): boolean {
        if (num < 10) {
            return true;
        } else {
            return false;
        }
    }

    showMessage("The sum result is " + sum(5, 2));

    document.getElementById('content').innerHTML = "This number is less than ten? " + trueOrFalse(11);
    
    // Function Type
    let myAdd: (baseValue: number, increment: number) => number = function (x: number, y:number): number {
        return x + y;
    }

    document.getElementById('content').innerHTML = "The sum of the function type is " + myAdd(5, 12);

    // Parametro opcional
    function addNumber(num1: number, num2: number, num3?: number): number {
        let result: number;
        if (isNaN(num3)) {
            result = num1 + num2;
        } else {
            result = num1 + num2 + num3;
        }
        return result;
    }

    document.getElementById('content').innerHTML = "The sum of the optional parameter is " + addNumber(2, 3);

    // Parametro padrão
    function multiply(num1: number, num2: number, num3 = 1): number {
        let result = num1 * num2 * num3;
        return result;
    }

    document.getElementById('content').innerHTML = "The result of the optional parameter is " + multiply(3, 3);

    // Parametro REST
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    let name: string = buildName("Leonardo", "Paulino", "Pereira", "Pontes", "Portela", "de Araujo");
    document.getElementById('content').innerHTML = name;

    // Sobre carga de funções
    function calculateArea(x: number): number;
    function calculateArea(x: number, y: number): number;
    function calculateArea(x: number, y?: number): any {

        let result: number;
        if (y > 0) {
            result = x * y;
        } else {
            result = x * x;
        }

        return result;

    }

    let result = calculateArea(12,6);

    document.getElementById('content').innerHTML = "The result of the calculate area is " + result;

    // Arrow Function
    let resultSum = (x: number, y:number, z?:number) => {
        let result;
        if (isNaN(z)){
            result = x + y;
        } else {
            result = x + y + z;
        }
        return result;
    }

    document.getElementById('content').innerHTML = "The result of sum is " + resultSum(7, 5);

    // Simple Arrow Function
    let resultSum1 = (x: number, y: number, z: number) => x + y + z ;
    document.getElementById('content').innerHTML = "Simple Arrow Function " + resultSum1(1, 2, 3);

};