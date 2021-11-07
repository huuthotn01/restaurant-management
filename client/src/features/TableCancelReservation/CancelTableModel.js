import table_reservation_data from '../../../src/data/reservation.json'

class CancelTableModel {

    //------------------------------ATTRIBUTE------------------------------------

    #table_reser = []; 
    

    //-------------------------------CONSTRUCTOR---------------------------------

    constructor() {
    this.#table_reser = table_reservation_data.map((reser) => {
        return [reser['code'],reser['phone']]
        });
    }
    check_reser(code, phone) { 
        for (let i = 0; i < this.#table_reser.length; i++){
                if (code === this.#table_reser[i][0] && phone === this.#table_reser[i][1])
                 return true;
        }
        return false
    };

}
export default CancelTableModel