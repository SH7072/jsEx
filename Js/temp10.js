//promise

const cart=["apple","shoe","glasses","kurtis"]


//initially
/*
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
    
})
*/
const promise=createOrder(cart)
// {data:undefined}

promise.then(function(orderId){
    proceedToPayment(orderId);
})