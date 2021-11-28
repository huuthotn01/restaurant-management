class TableReservationModel {

    //------------------------------ATTRIBUTE------------------------------------

    #table_reser = []; 
    #tables = [];
    

    //-------------------------------CONSTRUCTOR---------------------------------

    constructor() {
        fetch('/getreservation')
        .then(response => response.json())
        .then(data => 
    
    
        this.#table_reser = data.data.map((reser) => {
            return [
                reser["code"]
            ];
            })
        );

        fetch('/get_table')
        .then(response => response.json())
        .then(data => 
    
    
        this.#tables = data.data.map((table) => {
            return [
                table["Code"], table["Type"]
            ];
            })
        );
    }

    //-------------------------------OTHER METHODS--------------------------------
    check_newcode(newcode) { 
        for (let i = 0; i < this.#table_reser.length; i++){
            if (newcode === this.#table_reser[i][0])
            return false;
        }
        return true;
    };

    generateReservationCode(){
        var temp = "";
        while (1){
            temp = (Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6)).toUpperCase();
            if (this.check_newcode(temp))   return temp;
        }
    }

    getTable(type, quantity){
        var table = [];
        var count = 0;
        for (let i = 0; i < this.#tables.length; i++){
            if (count < quantity){
                if (this.#tables[i][1] === type){
                    table.push(this.#tables[i][0]);
                    count++;
                }       
            }
            else break;
        }
        return table;
    }
}
export default TableReservationModel;