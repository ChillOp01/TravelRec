document.getElementById("searchBar").addEventListener("input", function () {
  const userInput = this.value.toLowerCase();  

  const allCards = document.querySelectorAll(".card");  
  allCards.forEach(card => {
      const cardName = card.getAttribute("data-name");

      if (cardName.includes(userInput)) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
      }
  });
});


const cardImages = document.querySelectorAll(".card img");   
cardImages.forEach((img) => {
  img.addEventListener("click", function () {
      const linkToOpen = img.dataset.link;  

      if (linkToOpen) {
          window.open(linkToOpen, "_blank");  
      }


  });
});
