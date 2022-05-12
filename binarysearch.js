function binarySearch(arr,ele){
    let start = 0;
    let end = arr.length-1
    let middle = Math.floor((start+end)/2)
    // console.log(typeof(ele))
    while(arr[middle]!==ele && start<=end){
        // console.log(middle,end,start)
        if(arr[middle]<ele){
            start = middle+1
        }
        else if(arr[middle]>ele){
            end = middle-1
        }
        middle = Math.floor((start+end)/2)
    }

    return arr[middle]===ele?true:false

}





console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7))