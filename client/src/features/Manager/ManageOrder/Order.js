class Order {
    #orderIdx = ''; #orderID = ''; #customerName = '';
    #orderDate = ''; #totalProduct = ''; #totalPrice = '';
    constructor(orderIdx, orderID, customerName, createdDate, totalProduct, totalPrice) {
        this.#orderIdx = orderIdx;
        this.#orderID = orderID;
        this.#customerName = customerName;
        this.#orderDate = createdDate;
        this.#totalProduct = totalProduct;
        this.#totalPrice = totalPrice;
    }
    changeDate = () => {
        let d1 = this.#orderDate.split(" ");
        let date = d1[0].split("/");
        let time = d1[1].split(":");
        let dd = date[0];
        let mm = date[1];
        let yy = date[2];
        let hh = time[0];
        let min = time[1];
        let ss = '00';
        return new Date(yy, mm - 1, dd, hh, min, ss);
    } 
    get orderIdx() { return this.#orderIdx; }
    get orderID() { return this.#orderID; }
    get customerName() { return this.#customerName; }
    get orderDate() { return this.#orderDate; }
    get totalProduct() { return this.#totalProduct; }
    get totalPrice() { return this.#totalPrice; }
}

export default Order;