const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row,seat:not(occupied)');
const count = document.getElementById('count');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value; //type conversion to num

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;                 
}

//movie select event
movieSelect.addEventListener('change',function(e){
    ticketPrice = +e.target.value;
    updateSelectedCount();
});
//seat selected event
container.addEventListener('click',function(e){
    if(e.target.classList.contains( "seat") && !(e.target.classList.contains('occupied'))){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }

});