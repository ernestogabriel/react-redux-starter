import groceries from './mocks/groceries.json';

const simulateError = false;
class Grocery {
    constructor(data) {
        this.data = {
            ...data,
            ...this.transformData(data)
        };
    }

    transformData(data){
        return {
            ...data,
            img: this.handleImgPath(data.img)
        };
    }

    handleImgPath(img) {
        if (img !== '' && img){
            return 'src/' + img;
        }
        return null;
    }
}

export const fetchGroceries = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (simulateError) {
                reject({ message: 'something happened with groceries' });
            } else {
                resolve(groceries.map(grocery => new Grocery(grocery)));
            }
        }, 1000);
    });
};

export const fetchGrocery = ({ id }) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const grocery = groceries.find((grocery) => grocery.id === id);

            if (simulateError || !grocery) {
                reject({ message: 'something happened with groceries' });
            } else {
                resolve(grocery);
            }
        }, 1000);
    });
};