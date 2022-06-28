
let arr=[1,5,-7,-7,5,-9,-4];
count =0
    for(i=1;i<arr.length-1;i++){
        if (arr[i]>arr[i-1]&&arr[i]>arr[i+1]){
            count++
        }


    }
    console.log(count)
