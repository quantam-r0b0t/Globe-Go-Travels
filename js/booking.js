let count = 0;
function calculateFare() {
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let hotelPrice = parseInt(document.getElementById("hotel").value);
    let flightPrice = parseInt(document.getElementById("flight").value);
    let guests = parseInt(document.getElementById("guests").value);
    let days = parseInt(document.getElementById("days").value);


    if (isNaN(days) || days < 1) {
        days = 1;
    }
    if (isNaN(hotelPrice)==false  && isNaN(flightPrice)==false && isNaN(guests)== false && isNaN(days)==false && destination!='' && date!='') {
        let totalFare = (hotelPrice * days + flightPrice) * guests;
        document.getElementById("fare").innerText = totalFare;
        count = 1;
    }
    else {
        alert("Please Enter all the required fields");
    }
}
function openPage(url) {
    if (count == 1) {
        window.location.href = url;
    }
}

function confirmBooking() {
    let card = document.getElementById("card").value;
    let expiry = document.getElementById("expiry").value;
    let cvv = document.getElementById("cvv").value;
    if (isNaN(card) == false && expiry != '' && isNaN(cvv) == false) {
        let popup = document.getElementById("confirmation-popup");
        popup.classList.remove("hidden");
    }
    else {
        alert("Enter correct card details")
    }
}

function closePopup() {
    let popup = document.getElementById("confirmation-popup");
    popup.classList.add("hidden");
}
