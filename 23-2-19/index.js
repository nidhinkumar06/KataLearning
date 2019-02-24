function deleteNth(arr,n){
    let itemCounts = {};
    let result = [];
    for (var index = 0; index < arr.length; index++){
       var item = arr[index];
        var count = itemCounts[item] || 0;
        if (count < n) {
          result.push(item);
          itemCounts[item] = count + 1;
        }
    }
      
    return result;
}