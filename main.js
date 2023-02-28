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
  //create result string
  let result = "There ";
  
  //check the number of items in array. 
  //0, no items return
  if(products.length < 1){
    return "There are no items for sale";
    
  //1 item. return addition to string
  }else if(products.length === 1){
    return result + "is 1 item for sale: " + products[0].name + ".";
    
  //2 items. hard code result + extra's  
  }else if(products.length === 2){
    return result + "are 2 items for sale: " + products[0].name + " and " + products[1].name + ".";
    
  //more than 2 items  
  }else{
    //create total for items and empty array
    let total = 0;
    let itemArray = [];
    for(let i = 0; i < products.length; i++){
      //using for loop, add item and push name into array
      total ++;
      itemArray.push(products[i].name)
    };
    total.toString()
    
    //add new variables to result
    return result + "are " total + " items for sale: " +  itemArray.join(', ') + "."

  }
}

module.exports = {
  listAllItems,
};
