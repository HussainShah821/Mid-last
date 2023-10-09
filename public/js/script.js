// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuForm = document.getElementById("menu-form");
    const menuList = document.getElementById("menu-list");
    const promotionForm = document.getElementById("promotion-form");
    const promotionList = document.getElementById("promotion-list");
  
    menuForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const itemName = document.getElementById("itemName").value;
      const itemPrice = document.getElementById("itemPrice").value;
      const menuItem = `<li>${itemName} - $${itemPrice}</li>`;
      menuList.insertAdjacentHTML("beforeend", menuItem);
      menuForm.reset();
    });
  
    promotionForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const promotionText = document.getElementById("promotionText").value;
      const promotionItem = `<li>${promotionText}</li>`;
      promotionList.insertAdjacentHTML("beforeend", promotionItem);
      promotionForm.reset();
    });
  });
// admin.js
document.addEventListener("DOMContentLoaded", function() {
    const clickMeButton = document.getElementById("clickMeButton");
    const message = document.getElementById("message");
  
    clickMeButton.addEventListener("click", function() {
      message.textContent = "Button clicked!";
    });
  });
    