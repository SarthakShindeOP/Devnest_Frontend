// question no 1
// function is_array(arr){
//         return Array.isArray(arr)
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


// question no 2

// function array_Clone(arr){
//     return arr.slice(0);
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// question no 3

// function first(arr, n = 0) {
//     if (n == 0) {
//       return arr[0];
//     }
//     else if(n<0){
//         return [];        
//     } 
//     return arr.slice(0,n);
// }
  
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));


// question no 4
// myColor = ["Red", "Green", "White", "Black"];
// var ans1=myColor.join();
// console.log(ans1);
// var ans2=myColor.join(",");
// console.log(ans2);
// var ans3= myColor.join("+");
// console.log(ans3);


// question no 3
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3,33,3,3,3,3,3,3];
var n=arr1.length;
var c=0;
var max=0;
var ans='';
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        if (arr1[i]==arr1[j]){
            c+=1;
            if (c>max){
                max=c;
                ans=arr1[i];
            }
        }
    }
    c=0;
}
console.log(ans+" ( "+max+" times)");