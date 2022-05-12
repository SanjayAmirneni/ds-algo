function bubblesort(arr,order){
    let noSwaps = true;
    let flag = false;
    console.log(typeof(order), order)
    for(let i=arr.length; i>0; i--){
        noSwaps = true;
        for(let j=0; j<i-1; j++){
            if(order === 'asc'){
                flag = arr[j] > arr[j+1]
            }else if(order === 'dsc'){
                flag = arr[j] < arr[j-1]
            }
            if(flag){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }

    return arr;
}


console.log(bubblesort([9,1,2,3,4,5,6,7,8],'dsc'))

