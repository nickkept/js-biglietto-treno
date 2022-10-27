const numbKm = prompt("Quanti km vuoi percorrere?");
const age = prompt("Quanti anni hai?");
const ticketPrice = numbKm * 0.21

if (age < 18) {

    const ticketPrice = numbKm * 0.21 * 0.8
    console.log("Ticket Price Under 18:", ticketPrice.toFixed(2))
} else if (age > 65) {
    const ticketPrice = numbKm * 0.21 * 0.6
    console.log("Ticket Price Over 65:", ticketPrice.toFixed(2))
}
