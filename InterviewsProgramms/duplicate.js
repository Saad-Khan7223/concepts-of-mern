var arr = [1,2,2,3,5,6,6,5,54,6]
var newarr=[]
var temp=0
for (let i=0; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
        if (arr[i]===arr[j]){
           newarr[temp]=arr[i]
         temp++

        }
    }
     

}

console.log(newarr)