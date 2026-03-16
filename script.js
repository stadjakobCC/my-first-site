let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    card.style.backgroundColor = "lightblue";
    card.style.transform= "scale(1.05)";
  })
});