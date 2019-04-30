import getAllNames from 'beta/dist/beta1';

class Animal {
    constructor(arr){
        this.arr = arr;
    }

    getList(){
        return {
            list: getAllNames(this.arr)
        };
    }
}

export default Animal;