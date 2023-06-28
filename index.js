const mobileBtn = document.getElementById("mobile-btn");
const closeBtn = document.getElementById("exit-btn");
const sidePanel = document.getElementById("side-content");

mobileBtn.addEventListener("click", function() {
    sidePanel.style.width = "90%"
})
closeBtn.addEventListener("click", function() {
    sidePanel.style.width = "0%"
});

const modal = document.getElementById('myModal'); 
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementsByClassName("close")[0];
openModal.onclick = function() {
    modal.style.display = "block";
}
closeModal.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}