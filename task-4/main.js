let arr=[0,1,-2,1,0,0,3];

let temp=[]

for(i=0;i<arr.length;i++){
    if(!temp.includes(arr[i])){
        temp.push(arr[i])
    }
   
}

console.log(temp);
