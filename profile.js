document.addEventListener('DOMContentLoaded', () => {
    // Grab the profile image element
    const profileImg = document.querySelector('img.profile');
  
    // List of image URLs to swap among:
    const images = [
      'assets/profile.png',              // Original
      'assets/qrcode.png'   // QR code to https://xantoine-dev.github.io/
    ];
  
    let currentIndex = 0;
  
    // On click, switch to the next image in the array
    profileImg.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      profileImg.src = images[currentIndex];
    });
  });
  