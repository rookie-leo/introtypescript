interface LabelledValue {
    label: string;
    size?: number;
}

interface SearchConf {
    (source: string, subString: string): boolean;
}

interface StringArray {
    [index: number]: string;
}

window.onload = () => {
    // Sem o uso de interface
    function printLabel(labelledObj: {label: string}) {
        alert(labelledObj.label);
    }

    let myObj = {label: "Size 10 object"};
    printLabel(myObj);

    // Usando interface
    function printLabelWithInterface(labelledObj: LabelledValue) {
        alert(labelledObj.label);
    }

    let myObjWithInterface = {size: 10, label: "Size 10 object"};
    printLabelWithInterface(myObjWithInterface);

    // Function Type 
    let mySearch: SearchConf;

    mySearch = function(src: string, sub: string) {
        let result = src.search(sub);

        if (result == -1) {
            return false;
        } else {
            return true;
        }
    }

    alert("Result is " + mySearch("Catavento", "vento"));

    // Array Type
    let myArray: StringArray;
    myArray = ["Leo", "Jaq"];
    alert(myArray[1]);
};