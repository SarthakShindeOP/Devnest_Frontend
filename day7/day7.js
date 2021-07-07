// // first question 
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// // console.log((Object.keys(student)).join())


// // second question
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// delete student.rollno
// console.log(student);


//third question 
// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// console.log( Object.keys(student).length);



//fourth question
// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

// console.log(library.map(item=>{
//     console.log( (Object.values(item).join()))
// }));


// fifth question 
// const cylinder=
// {
//     r:0,
//     h:0,
//     volume(){
//     return ((22/7)*this.r*this.h).toFixed(4);
// },};
// cylinder.r=2;
// cylinder.h=2;
// console.log(cylinder.volume());

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
                { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
                { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
function solve(a, b) {
                    
                  }
console.log(library.sort((a,b)=>{
    return a.libraryID - b.libraryID;
}));