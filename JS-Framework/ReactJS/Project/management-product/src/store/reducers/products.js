var initialState = [
    { id: 1, code: 'IPH', name: 'Iphone X', price: 500, status: true },
    { id: 2, code: 'IPH', name: 'Iphone XX', price: 600, status: true },
    { id: 3, code: 'IPH', name: 'Iphone XXX', price: 700, status: true },
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;