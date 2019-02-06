import groceries from './mocks/groceries.json';

const simulateError = true;

export const fetchGroceries = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (simulateError) {
                reject({ message: 'something happened with groceries' });
            } else {
                resolve(groceries);
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