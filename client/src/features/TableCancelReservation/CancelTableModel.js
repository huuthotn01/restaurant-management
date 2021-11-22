import table_reservation_data from '../../../src/data/reservation.json'
import table_cancel_data from '../../../src/data/canceltable.json'
import { resetWarningCache } from 'prop-types';
class CancelTableModel {

    //------------------------------ATTRIBUTE------------------------------------

    #table_reser = []; 
    #table_cancel = [];
    

    //-------------------------------CONSTRUCTOR---------------------------------

    constructor() {
    this.#table_reser = table_reservation_data.map((reser) => {
        return [reser['code'],reser['phone'],reser['isMember'],reser['date'], reser['time'],reser['depositfee']]
        });
    this.#table_cancel = table_cancel_data.map((reser) => {
            return [reser['code'],reser['phone']]
            });
    }
    check_notexist(code,phone){
        for (let i = 0; i < this.#table_reser.length; i++){
            if (code === this.#table_reser[i][0] && phone === this.#table_reser[i][1])
             return false;
    }
    return true;
    }
    check_reser(code, phone) { 
        for (let i = 0; i < this.#table_reser.length; i++){
                if (code === this.#table_reser[i][0] && phone === this.#table_reser[i][1])
                 return true;
        }
        return false
    };
    check_noCast(code, phone){
        for (let i = 0; i < this.#table_reser.length; i++){
            if (code === this.#table_reser[i][0] && phone === this.#table_reser[i][1] && this.#table_reser[i][5] === 0)
             return true;
    }
    return false
    }
    check_hadCancel(code,phone){
        for (let i = 0; i < this.#table_cancel.length; i++){
            if (code === this.#table_cancel[i][0] && phone ===this.#table_cancel[i][1]){
                return true;
            }
            return false;
    }
   }
 // "date": "28/11/2021",
//     "time": "8:00 PM",
    rever(arr){
        var ans=[]
        ans = arr.split('/');
        return   ans[2]+'/'+ans[1]+'/'+ans[0];
        
    }

    check_time(code,phone,date){
        for (let i = 0; i < this.#table_reser.length; i++){
            
            if (code === this.#table_reser[i][0] && phone ===this.#table_reser[i][1] &&  parseInt(new Date(this.rever(this.#table_reser[i][3])).getDate()) > parseInt(new Date().getDate())){
                return true;
            }
            if (code === this.#table_reser[i][0] && phone ===this.#table_reser[i][1] && parseInt(new Date(this.rever(this.#table_reser[i][3])).getDate()) === parseInt(new Date().getDate()) && (parseInt(new Date(this.rever(this.#table_reser[i][3]) +' '+this.#table_reser[i][4]).getHours()) - parseInt(new Date().getHours())>2))
                return true;
    }
    return false;
   }

   check_qtime(code,phone,date){
    for (let i = 0; i < this.#table_reser.length; i++){
        if (parseInt(new Date(this.rever(this.#table_reser[i][3])).getMonth()) < parseInt(new Date().getMonth()))
        {
            return false;
        }
        if (code === this.#table_reser[i][0] && phone ===this.#table_reser[i][1] &&  parseInt(new Date(this.rever(this.#table_reser[i][3])).getDate()) < parseInt(new Date().getDate())){
            return true;
        }
        if (code === this.#table_reser[i][0] && phone ===this.#table_reser[i][1] &&  (parseInt(new Date(this.rever(this.#table_reser[i][3])).getDate()) === parseInt(new Date().getDate()) && (parseInt(new Date(this.rever(this.#table_reser[i][3])+' '+this.#table_reser[i][4]).getHours()) < parseInt(new Date().getHours())))){
            return true;
        }
        }
return false;
}

   
};
export default CancelTableModel