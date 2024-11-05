document.getElementById('start-button').addEventListener('click', startExperience);

function startExperience() {
  const intro = document.getElementById('intro');
  const image = document.getElementById('image');
  const audio = document.getElementById('audio');
  const message = document.getElementById('message');

  // Hide intro section after button click
  intro.style.display = 'none';

  // Set up the sequence of images and audios
  const sequence = [
    { audio: 'audio1.MP3', image: 'image1.png' },
    { audio: 'audio2.MP3', image: 'image2.png' },
    { audio: 'audio3.MP3', image: 'image3.png' }
  ];
  
  let currentStep = 0;

  function playNext() {
    if (currentStep < sequence.length) {
      audio.src = sequence[currentStep].audio;
      image.src = sequence[currentStep].image;
      
      // Fade in the image
      image.style.opacity = 0;
      image.style.display = 'block';
      setTimeout(() => {
        image.style.opacity = 1;
      }, 100);

      audio.play();

      audio.onended = () => {
        // Fade out the image when audio ends
        image.style.opacity = 0;
        setTimeout(() => {
          image.style.display = 'none';
          currentStep++;
          playNext();
        }, 1000); // Give 1 second for fade-out effect
      };
    } else {
      image.style.display = 'none';
      message.style.display = 'block';
    }
  }

  // Start the sequence
  playNext();
}
