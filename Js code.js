const modal = document.getElementById("donate-modal");
const amountInput = document.querySelector('input[type="number"]');

// Open modal
document.querySelectorAll(".modal-trigger, .nav-cta, .btn-gold")
.forEach(btn =>
    btn.addEventListener("click", e => {
        e.preventDefault();
        modal.style.opacity = "1";
        modal.style.pointerEvents = "all";
    })
);

// Close modal
document.querySelector(".modal-close")
.addEventListener("click", e => {
    e.preventDefault();
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
});

// Amount buttons
document.querySelectorAll(".amount-btn")
.forEach(btn =>
    btn.addEventListener("click", () => {
        const value = btn.textContent.replace(/[₦,]/g, "");
        amountInput.value = value === "Custom" ? "" : value;
    })
);

// Complete donation
document.getElementById("donateBtn")
.addEventListener("click", () => {
    const amount = amountInput.value;
    const name = document.querySelector('#donate-modal input[type="text"]').value;
    const email = document.querySelector('#donate-modal input[type="email"]').value;

    if (!amount || !name || !email)
        return alert("Please fill in all fields.");

    alert(`Thank you ${name}! Your donation of ₦${amount} has been recorded.`);

    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
});A