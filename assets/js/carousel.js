document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const items = carousel.children;
    const totalItems = items.length;
  
    let currentIndex = 0;
    let isAnimating = false;
  
    // Clone the first and last items for smooth looping
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[totalItems - 1].cloneNode(true);
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, items[0]);
  
    currentIndex = 1;
  
    // Set initial position to show the first actual item
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  
    function scrollCarousel() {
      if (isAnimating) return;
  
      isAnimating = true;
      currentIndex++;
  
      carousel.style.transition = "transform 0.5s ease";
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  
      carousel.addEventListener("transitionend", () => {
        isAnimating = false;
        if (currentIndex === totalItems + 1) {
          // Reset to the start (first item after clone)
          carousel.style.transition = "none";
          currentIndex = 1;
          carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else if (currentIndex === 0) {
          // Reset to the end (last item after clone)
          carousel.style.transition = "none";
          currentIndex = totalItems;
          carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
      });
    }
  
    // Automatically scroll every 3 seconds
    setInterval(scrollCarousel, 3000);
  });
  