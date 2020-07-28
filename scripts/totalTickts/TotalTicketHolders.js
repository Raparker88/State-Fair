const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let counter = 0

export const TotalTicketHolders = () => {
    eventHub.addEventListener("ticketPurchased", customEvent => {
        counter += 1
        contentTarget.innerHTML = `<p>Total tickets purchased: ${counter}</p>`
    })
   
}