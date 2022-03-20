window.onload = function () {
    var dayOfWeek;
    var textOut;
    dayOfWeek = 3;
    switch (dayOfWeek) {
        case 0:
            textOut = "Sunday";
            break;
        case 1:
            textOut = "Monday";
            break;
        case 2:
            textOut = "Tuesday";
            break;
        case 3:
            textOut = "Wednesday";
            break;
        case 4:
            textOut = "Thursday";
            break;
        case 5:
            textOut = "Friday";
            break;
        case 6:
            textOut = "Saturday";
            break;
    }
    document.getElementById('content').innerHTML = textOut;
    var color = "purple";
    var textOut2;
    switch (color) {
        case "green":
            textOut2 = "The color is green";
            break;
        case "red":
            textOut2 = "The color is red";
            break;
        case "purple":
            textOut2 = "The color is purple";
            break;
        case "blue":
            textOut2 = "The color is blue";
            break;
        case "yellow":
            textOut2 = "The color is yellow";
            break;
        default:
            textOut2 = "The color is white";
            break;
    }
    document.getElementById('color').innerHTML = textOut2;
};
