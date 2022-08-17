//to append 
let arr = ["sheref",'kamel','murad']
for (var i =0 ;i<=arr.length;i++){
    console.log(arr[i])
    console.log(arr[1])//to append single
}
//to prepend
function prependArray(value, oldArray) {
    var newArray = new Array(value);
  
    for(var i = 0; i < oldArray.length; ++i) {
      newArray.push(oldArray[i]);
    }
  
    return newArray;
  }