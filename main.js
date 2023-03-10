/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  //check the number of items in array. 
  //0, no items return message
  if(products.length < 1){
    return "There are no items for sale.";
    
  //1 item. return sentence with template literal addition
  }else if(products.length === 1){
    return `There is 1 item for sale: ${products[0].name}.`;
    
  //2 items. return sentence with template literal vaiables
  }else if(products.length === 2){
    return `There are 2 items for sale: ${products[0].name} and ${products[1].name}.`

    
  //more than 2 items  
  }else{
    //create total for items and empty array
    let total = 0;
    let itemArray = [];
    for(let i = 0; i < products.length; i++){
      //using for loop, add item and push name into array
      total += 1;
      itemArray.push(products[i].name)
    };
    total.toString()
    
    //return sentence with variables. join array with ", " in between each item
    return `There are ${total} items for sale: ${itemArray.join(', ')}.`
  }
}

module.exports = {
  listAllItems,
};
