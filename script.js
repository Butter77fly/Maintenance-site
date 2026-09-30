const countdown = document.getElementById("countdown");

//October 31st, 2026 at 12:00 AM
const launchDate = new Date("October 31, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate - now;


    // If the countdown has finished
    if (distance <= 0) {

        countdown.textContent = "We're back!";

        clearInterval(timer);

        return;
    }


    // Calculate time
    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    // Add leading zeros
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");


    // Display countdown
    countdown.textContent =
        `${days}d : ${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s`;
}


// Run immediately
updateCountdown();


// Update every second
const timer = setInterval(updateCountdown, 1000);