const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

const createEvent = (ticketType) =>{
    contentTarget.addEventListener("click", clickevent => {
    if(clickevent.target.id === ticketType) {
        const rideEvent = new CustomEvent(`${ticketType}Purchased`)
        const ticketEvent = new CustomEvent("ticketPurchased")
        eventHub.dispatchEvent(rideEvent)
        eventHub.dispatchEvent(ticketEvent)
    }
    })
}

const rides = "rideTicket"
const food = "foodTicket"
const games = "gameTicket"
const sideshow = "sideshowTicket"
const fullPackage = "fullPackageTicket"

createEvent(rides)
createEvent(food)
createEvent(games)
createEvent(sideshow)
createEvent(fullPackage)

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}


