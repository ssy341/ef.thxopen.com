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

function messUp(arr){
    var temp = [];
    for(var i = 0;i<arr.length;i++){
        arr[i].random = Math.random()*100;
        temp.push(arr[i]);
    }
    return sortArry(temp);
}

function efajax(url,callback){
    $.ajax({
        url:url,
        success:function(data){
            data = JSON.parse(data);
            callback(data);
        }
    })
}