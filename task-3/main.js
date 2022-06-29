let arr=[3,5,-7,7,5,-9,-4];
let max=0;
let min=Infinity;
let temp=[]

for(i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }

    if(min>arr[i]){
        min=arr[i]
    }

   
    
}
for(i=0;i<arr.length;i++){
    if(arr[i]==max){
        arr[i]=min
    }
    if(arr[i]==min){
        arr[i]=max
    }
    console.log(arr[i])
}
