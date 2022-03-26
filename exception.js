window.onload = function () {
    //try {
    //alertABC("typescript study: exceptions");
    //  alert("typescript study: exceptions");
    //} catch (error) {
    //   document.getElementById('content').innerHTML = error.message;
    //}
    /* Classificando exceptions */
    function myCheck(myVar) {
        if (myVar == "")
            throw new Error("empty");
        if (myVar > 100)
            throw new Error("Too high");
        if (myVar < 10)
            throw new Error("Too low");
    }
    try {
        var str_1 = 11;
        myCheck(str_1);
        str_1 = "Ok";
        alert(str_1);
    }
    catch (error) {
        document.getElementById('content').innerHTML = "<span style='color:#FF0000'>" + error.message + "</span>";
    }
    finally {
        var varContent = document.getElementById('content').innerHTML;
        document.getElementById('content').innerHTML = varContent + "<br>Bloco FINALLY";
    }
};
//# sourceMappingURL=exception.js.map