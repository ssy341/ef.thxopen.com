function sortArry(arr){
    var swap;
    for(var j = 0;j<arr.length;j++){
        for(var k = 0;k<j;k++){
            if(arr[k].random < arr[k+1].random){
                swap = arr[k];
                arr[k] = arr[k+1];
                arr[k+1] = swap;
            }
        }
    }
    return arr;
}