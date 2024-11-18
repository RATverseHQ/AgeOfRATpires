const shrekButton = document.getElementById('shrek-button');
const cubeSides = document.querySelectorAll('.cube div');

// Shrek Mode Functionality
shrekButton.addEventListener('click', () => {
    // Change cube sides to various shades of green
    const greens = ['#6B8E23', '#556B2F', '#8FBC8F', '#66CDAA', '#32CD32', '#00FF00'];
    cubeSides.forEach((side, index) => {
        side.style.background = greens[index % greens.length];
        side.style.backgroundImage = ''; // Reset background images
    });

    // Play "All Star"
    const audio = new Audio('https://archive.org/download/SmashMouthAllStar/SmashMouth-AllStar.mp3'); // Valid audio link!
    audio.play();

    // Add Shrek's face to the front side
    const frontSide = document.querySelector('.front');
    frontSide.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/7/73/Shrek.jpg')";
    frontSide.style.backgroundSize = 'cover';
    frontSide.style.backgroundRepeat = 'no-repeat';
    frontSide.style.backgroundPosition = 'center';

    // Announce Shrek Mode in the console (for fun)
    console.log('Maximum Ogre Resonance activated!');
});
