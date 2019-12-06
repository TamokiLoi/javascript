import * as TYPE from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [
    {
        product: {
            id: 1,
            name: 'Iphone 11',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Product by Apple productive',
            price: 500,
            inventory: 10,
            rating: 3
        },
        quantity: 5
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADD_TO_CART:
            console.log(action)
            return [...state];
        default:
            return [...state];
    }
}

export default cart;