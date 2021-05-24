import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = car.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i= 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    const tax = Math.round(total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    // const totalPrice = Number(total).toFixed(2);

    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    


    
    return (
        <div>
            <h4>Order summary</h4>
            <p>Item Ordered: {cart.length} </p>
            <p>Product Price: ${formateNumber(total)}</p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p>Tax: ${tax}</p>
            <p>Total Price: ${grandTotal}</p>
        </div>
    );
};

export default Cart;