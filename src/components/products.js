export const products = [
    {
        id: 1,
        name: 'Pan de Jamón',
        text: 'Un delicioso pan de jamón con extra panceta',
        price: '$2.00',
        stock: 0,
        img: 'https://i.ibb.co/3YhjdKD/Pan-De-Jamon-1.jpg',
        all_imgs: [
            'https://i.ibb.co/3YhjdKD/Pan-De-Jamon-1.jpg',
            'https://i.ibb.co/mRRhNS8/Pan-De-Jamon-3.jpg'
        ],
        category: 'Navideño'
    },
    {
        id: 2,
        name: 'Pan dulce azucarado',
        text: 'Para endulzar tus días',
        price: '$1.00',
        stock: 5,
        img: 'https://i.ibb.co/Bt02CPR/Pan-Dulce-1.jpg',
        all_imgs: [
            'https://i.ibb.co/Bt02CPR/Pan-Dulce-1.jpg',
            'https://i.ibb.co/HKZ4nmT/Pan-dulce-2.jpg'
        ],
        category: 'Dulce'
    },
    {
        id: 3,
        name: 'Sol de pollo',
        text: 'La mejor opción para compartir en tus reuniones',
        price: '$5.00',
        stock: 5,
        img: 'https://i.ibb.co/sHdHhTm/Sol-pollo-1.jpg',
        all_imgs: [
            'https://i.ibb.co/sHdHhTm/Sol-pollo-1.jpg'
        ],
        category: 'Salado'
    },
    {
        id: 4,
        name: 'Pan de Jamón con queso crema',
        text: 'Un delicioso pan de jamón con queso crema, para mejorar tu Navidad',
        price: '$3.00',
        stock: 0,
        img: 'https://i.ibb.co/QMVfVgk/Pan-De-Jamon-2.jpg',
        all_imgs: [
            'https://i.ibb.co/QMVfVgk/Pan-De-Jamon-2.jpg',
            'https://i.ibb.co/Y799zM0/Pan-De-Jamon-4.jpg'
        ],
        category: 'Navideño'
    },
    {
        id: 5,
        name: 'Media luna rellena de manjar',
        text: 'Para endulzar tus días',
        price: '$2.00',
        stock: 5,
        img: 'https://i.ibb.co/XF1PNh5/Medialuna-Manjar-1.jpg',
        all_imgs: [
            'https://i.ibb.co/XF1PNh5/Medialuna-Manjar-1.jpg',
            'https://i.ibb.co/vYN81mC/Medialuna-Manjar-2.jpg'
        ],
        category: 'Dulce'
    },
    {
        id: 6,
        name: 'Pan deli',
        text: 'Un clásico para que lo armes como prefieras',
        price: '$2.00',
        stock: 5,
        img: 'https://i.ibb.co/hX4vHqH/Pan-Deli-1.jpg',
        all_imgs: [
            'https://i.ibb.co/hX4vHqH/Pan-Deli-1.jpg',
            'https://i.ibb.co/H4BWVN1/Pan-Deli-2.jpg',
            'https://i.ibb.co/j8GpFM9/Pan-Deli-3.jpg',
            'https://i.ibb.co/GCJs4rs/Pan-Deli-4.jpg'
        ],
        category: 'Salado'
    },
    {
        id: 7,
        name: 'Pan deli con sésamo negro',
        text: 'Un clásico para que lo armes como prefieras, con un toque diferente',
        price: '$1.00',
        stock: 5,
        img: 'https://i.ibb.co/xYsn4Q9/Pan-Deli-S-samo-Negro-1.jpg',
        all_imgs: [
            'https://i.ibb.co/xYsn4Q9/Pan-Deli-S-samo-Negro-1.jpg',
            'https://i.ibb.co/wSnZ6Py/Pan-Deli-S-samo-Negro-2.jpg'
        ],
        category: 'Salado'
    },
    {
        id: 8,
        name: 'Pan dulce',
        text: 'Para endulzar tus días',
        price: '$1.00',
        stock: 5,
        img: '',
        category: 'Dulce'
    }
]

export const getProducts = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id) {
                    resolve(products.filter( item => item.category === id ));
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
            resolve(products.find(item => item.id === Number(id)));
        }, 2000);
    });
};