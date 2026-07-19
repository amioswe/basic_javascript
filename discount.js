const amount=5000;

if(amount>=3000){
const discount=30;
const afterdiscount=amount/100*discount;
console.log(afterdiscount);

}
else if(amount>2500){

    const discount=20;
    const afterdiscount=amount/100*discount;
    console.log(afterdiscount);
    

}
else{
    console.log('Discount are not avlaible');
}