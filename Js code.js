const modal = document.getElementById("donate-modal");

// Open modal
document.querySelectorAll(".modal-trigger, .nav-cta, .btn-gold").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.pointerEvents = "all";
    });
});

// Close modal
document.querySelector(".modal-close").addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
});

// Donation button
document.getElementById("donateBtn").addEventListener("click", function() {

    const amount = document.querySelector('input[type="number"]').value;
    const name = document.querySelector('#donate-modal input[type="text"]').value;
    const email = document.querySelector('#donate-modal input[type="email"]').value;

    if(amount === "" || name === "" || email === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`Thank you ${name}! Your donation of ₦${amount} has been recorded.`);

    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    




    const amountButtons = document.querySelectorAll(".amount-btn");
const amountInput = document.querySelector('input[type="number"]');


    document.querySelectorAll(".amount-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent.replace("₦", "").replace(",", "");

        if(value !== "Custom") {
            document.querySelector('input[type="number"]').value = value;
        }
    });
});
});