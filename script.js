// Array of images 1.jpg to 11.jpg
const heroImages = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
    "4.jpg", 
    "5.jpg", 
    "6.jpg", 
    "7.jpg", 
    "8.jpg", 
    "9.jpg", 
    "10.jpg", 
    "11.jpg"
];

let currentImageIndex = 0;
const heroImgElement = document.getElementById("hero-slideshow-img");

// Function to change the image with a fade effect
function cycleHeroImage() {
    // 1. Start fade out
    if (heroImgElement) {
        heroImgElement.style.opacity = 0;

        // 2. Wait for the fade out (0.8s), then change image and fade in
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            heroImgElement.src = heroImages[currentImageIndex];
            
            // 3. Fade back in
            heroImgElement.style.opacity = 1;
        }, 800); // Must match CSS transition time (0.8s = 800ms)
    }
}

// Start the slideshow automatically when page loads
window.onload = function() {
    // Change image every 3.5 seconds (3500ms)
    setInterval(cycleHeroImage, 3500);
};

// Keep this for the mobile menu
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}