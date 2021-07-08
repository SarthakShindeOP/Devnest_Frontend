var cubes=document.querySelectorAll(".cube");
var seat_booking=document.querySelector(".seat-booked")
var seat_remaining=document.querySelector(".seat-remaining")
var seat_booked=0
seat_booking.innerHTML=seat_booked
seat_remaining.innerHTML=36
Array.from(cubes).forEach((div,i) => {
    div.style.background="aqua"
})

Array.from(cubes).forEach((div,i) => {
    
    div.addEventListener('click',() =>{
        if(div.style.background === "aqua"){
            div.style.background="red";
            seat_booked++;
            seat_booking.innerHTML=seat_booked;
            seat_remaining.innerHTML=36-seat_booked;
            
        }else{
        div.style.background = "aqua";
        seat_booked--;
        seat_booking.innerHTML=seat_booked;
        seat_remaining.innerHTML=36-seat_booked;

        }
    })
})

