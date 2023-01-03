var arr=[1,3,6,2,5,4]

for (let i=0; i<=arr.length-1;i++){
    for (let j=i+1; j<=arr.length-1;j++){
        if(arr[i]>arr[j]){// 3>6 , 3>2 
            temp=arr[i] 
            arr[i]=arr[j]
            arr[j]=temp;
        }
        
    }
   
}
console.log(arr)
// for second maximum
a=arr.length-2
console.log(arr[a])


// descending to ascending

for (let i=0; i<=arr.length-1;i++){
    for (let j=i+1; j<=arr.length-1;j++){
        if(arr[i]<arr[j]){ 
            temp=arr[i] 
            arr[i]=arr[j]
            arr[j]=temp;
        }
        
    }
   
}

console.log(arr)


// finding min and max

// for max if descending
console.log(arr[0])
// min 
x=arr.length-1
console.log(arr[x])