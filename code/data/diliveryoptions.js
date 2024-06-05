 export const deliveryOptions =[{
  id:'1',
  diliveryDays:7,
  priceCents:0
},
{
  id:2,
  diliveryDays:3,
  priceCents:499,

},
{
  id:3,
  diliveryDays:1,
  priceCents:999
}

];
function getDeliveryOption(deliveryOptionId)
{
  let diliveryOption;
  diliveryOption.forEach((option)=>
   {
   if (option.id===deliveryOptionId){
     diliveryOption=option;

   }
  });

  return deliveryOption || deliveryOptions[0];
}