"use strict";

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

const modal = document.getElementById("summaryModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const feedbackForm = document.getElementById("feedbackForm");
const formStatus = document.getElementById("formStatus");


/* Mobile navigation */

menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});


/* Article summary modal */

let lastFocusedButton = null;

document.querySelectorAll(".summary-button").forEach((button) => {

    button.addEventListener("click", () => {

        lastFocusedButton = button;

        modalTitle.textContent = button.dataset.title;
        modalText.textContent = button.dataset.summary;

        modal.hidden = false;

        closeModal.focus();
    });

});


function hideModal() {

    modal.hidden = true;

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}


closeModal.addEventListener("click", hideModal);


modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        hideModal();
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && !modal.hidden) {
        hideModal();
    }

});


/* Feedback form */

feedbackForm.addEventListener("submit", (event) => {

    event.preventDefault();

    formStatus.textContent =
        "Thank you! Your feedback has been received.";

    feedbackForm.reset();

});