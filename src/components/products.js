export const products = [
    {
        id: 1,
        name: 'Pan de Jamón',
        text: 'Un delicioso pan de jamón con extra panceta',
        price: '$2.00',
        stock: 0,
        img: '',
        categpry: 'Salado'
    },
    {
        id: 2,
        name: 'Pan dulce',
        text: 'Para endulzar tus días',
        price: '$1.00',
        stock: 5,
        img: '',
        categpry: 'Dulce'
    }
]

export const getProducts = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id) {
                    resolve(products.filter( item => item.categoria == id ));
                }
                else {
                    resolve(products);
                }

        }, 2000);
    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id) {
                    resolve(products.filter( item => item.id == id ));
                }
                else {
                    resolve(products);
                }

        }, 2000);
    });
};