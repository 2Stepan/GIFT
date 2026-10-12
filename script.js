const claimButton = document.getElementById("claimButton");
const giftModal = document.getElementById("giftModal");
const closeModal = document.getElementById("closeModal");
const okayButton = document.getElementById("okayButton");

function openGiftModal() {
  giftModal.hidden = false;
  document.body.style.overflow = "hidden";
  closeModal.focus();
}

function hideGiftModal() {
  giftModal.hidden = true;
  document.body.style.overflow = "";
  claimButton.focus();
}

claimButton.addEventListener("click", openGiftModal);
closeModal.addEventListener("click", hideGiftModal);
okayButton.addEventListener("click", hideGiftModal);

giftModal.addEventListener("click", (event) => {
  if (event.target === giftModal) hideGiftModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !giftModal.hidden) hideGiftModal();
});
