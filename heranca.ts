class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public get getName(): string {
        return "Product: " + this.name;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public PriceWithDiscount(discount: number = 0) {
        let finalPrice = this.price - ((this.price * discount) / 100);
        alert(this.name + " : $" + finalPrice);
    }
}

class TV extends Product {
    size: number;

    constructor(name: string, price: number, size: number) {
        super(name, price);
        this.size = size;
    }

    PriceWithDiscount(discount: number)  {
        alert("TV size: " + this.size + " pol");
        super.PriceWithDiscount(discount);
    }
}

window.onload = () => {
    let product = new Product("Table", 1899.99);
    product.PriceWithDiscount(10);

    let tv = new TV("TV", 1250.99, 52);
    tv.setName = "SAMSUNG";//set
    tv.getName;//get
    tv.PriceWithDiscount(5);

}