if('Bookings' in localStorage){
    //    console.log("Key :'Bookings' is Present")
    }else{
        localStorage.setItem('Bookings','')
    
    }
const nameOfPerson=document.querySelector("#name")
const dateOfBoooking=document.querySelector("#date")
const timeOfBooking=document.querySelector("#time")
const number=document.querySelector("#number")
const bookBtn=document.querySelector("#Book-btn")

bookBtn.addEventListener('click',function(event){
    event.preventDefault()
    if(nameOfPerson.value=='' || dateOfBoooking.value=='' || timeOfBooking.value=='' || number.value==''){
        alert("Please Enter Booking Details")
    }else{
        Book()
    }

})
function Book(){
    const nameOfPersonVal=nameOfPerson.value;
    const dateOfBoookingVal=dateOfBoooking.value;
    const timeOfBookingVal=timeOfBooking.value;
    const numberVal=number.value;
    const Bookings=localStorage.getItem('Bookings')
    if (Bookings===''){
        BookingsArray=[]
    }else{
        BookingsArray=JSON.parse(Bookings)

    }
    const bookingObjs={
        name:nameOfPersonVal,
        date:dateOfBoookingVal,
        time:timeOfBookingVal,
        number:numberVal,
    }
    if (confirm("Confirm Booking?")) {
        BookingsArray.push(bookingObjs)
        localStorage.setItem('Bookings',JSON.stringify(BookingsArray))
        
        nameOfPerson.value='';
        dateOfBoooking.value='';
        timeOfBooking.value='';
        number.value='';
      } else {
        alert("Cancelled!")
      }
   
}
