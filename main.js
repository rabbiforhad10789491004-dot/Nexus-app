// Dummy Data (Later this will come from Firebase Firestore)
const slots = [
    { time: "2 PM", status: "Available", maxSlot: 12, fee: 50, matchType: "Champion Rush", live: true, drone: true },
    { time: "3 PM", status: "Full", maxSlot: 12, fee: 50, matchType: "SCRIM", live: false, drone: true },
    { time: "4 PM", status: "Available", maxSlot: 12, fee: 50, matchType: "Champion Rush", live: true, drone: false }
];

const slotContainer = document.getElementById('slot-container');

// Function to display slots
function renderSlots() {
    slotContainer.innerHTML = ''; // Clear container

    slots.forEach(slot => {
        let statusClass = slot.status === "Available" ? "status-available" : "status-full";
        
        let card = `
            <div class="slot-card">
                <div class="slot-header">
                    <div class="time">🕒 ${slot.time}</div>
                    <div class="${statusClass}">${slot.status}</div>
                </div>
                <div class="slot-details">
                    <p>Maximum Slot: <span>${slot.maxSlot} Teams</span></p>
                    <p>Entry Fee: <span>${slot.fee} BDT</span></p>
                    <p>Match Type: <span>${slot.matchType}</span></p>
                    <p>Live Available: <span>${slot.live ? "✅ Yes" : "❌ No"}</span></p>
                    <p>Drone View: <span>${slot.drone ? "✅ Yes" : "❌ No"}</span></p>
                </div>
                <button class="btn" style="background: ${slot.status === 'Full' ? '#555' : 'linear-gradient(90deg, #ff4500, #ff8c00)'}" 
                        ${slot.status === 'Full' ? 'disabled' : ''} 
                        onclick="bookSlot('${slot.time}')">
                    ${slot.status === 'Full' ? 'SLOT FULL' : 'BOOK NOW'}
                </button>
            </div>
        `;
        slotContainer.innerHTML += card;
    });
}

// Function to redirect to booking page
function bookSlot(time) {
    // Send the user to booking page with the time in URL
    window.location.href = `booking.html?time=${time}`;
}

// Run the function when page loads
renderSlots();