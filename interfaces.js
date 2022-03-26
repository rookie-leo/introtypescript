window.onload = function () {
    // Sem o uso de interface
    function printLabel(labelledObj) {
        alert(labelledObj.label);
    }
    var myObj = { label: "Size 10 object" };
    printLabel(myObj);
    // Usando interface
    function printLabelWithInterface(labelledObj) {
        alert(labelledObj.label);
    }
    var myObjWithInterface = { size: 10, label: "Size 10 object" };
    printLabelWithInterface(myObjWithInterface);
    // Function Type 
    var mySearch;
    mySearch = function (src, sub) {
        var result = src.search(sub);
        if (result == -1) {
            return false;
        }
        else {
            return true;
        }
    };
    alert("Result is " + mySearch("Catavento", "vento"));
    // Array Type
    var myArray;
    myArray = ["Leo", "Jaq"];
    alert(myArray[1]);
};
//# sourceMappingURL=interfaces.js.map