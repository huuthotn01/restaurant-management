class OrderDetail {
    #detailIdx = '';#orderID = ''; #orderDate = ''; 
    #itemName = ''; #quantity = ''; #productPrice = '';
    constructor(detailIdx, orderID, createdDate, itemName, quantity, productPrice) {
        this.#detailIdx = detailIdx;
        this.#orderID = orderID;
        this.#orderDate = createdDate;
        this.#itemName = itemName;
        this.#quantity = quantity;
        this.#productPrice = productPrice;
    }
    changeDate = (d) => {
        var d1 = d.split(" ");
        var date = d1[0].split("/");
        var time = d1[1].split(":");
        var dd = date[0];
        var mm = date[1]-1;
        var yy = date[2];
        var hh = time[0];
        var min = time[1];
        var ss = '00';
        return new Date("20" + yy, mm - 1, dd, hh, min, ss);
    }

    total() {
        return this.#productPrice * this.#quantity;
    }
    
    get detailIdx() { return this.#detailIdx; }
    get orderID() { return this.#orderID; }
    get orderDate() { return this.#orderDate; }
    get itemName() { return this.#itemName; }
    get quantity() { return this.#quantity; }
    get productPrice() { return this.#productPrice; }

    set detailIdx(detailIdx) {
        this.#detailIdx = detailIdx;
    }
}

export default OrderDetail;