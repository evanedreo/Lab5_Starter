// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select')
  const image = document.querySelector('#expose img')
  const button = document.querySelector('#expose button')
  const volumeSlide = document.getElementById('volume')
  const volumeIcon = document.querySelector('#volume-controls img')
  const audio = document.querySelector('#expose audio')
  
  const jsConfetti = new JSConfetti()
  
  hornSelect.addEventListener('change', ()=>{
    const selectedHorn = hornSelect.value
    if (selectedHorn == 'air-horn'){
      image.src = 'assets/images/air-horn.svg'
      image.alt = 'air horn'
      audio.src = 'assets/audio/air-horn.mp3'
    }
    else if (selectedHorn == 'car-horn'){
      image.src = 'assets/images/car-horn.svg'
      image.alt = 'car horn'
      audio.src = 'assets/audio/car-horn.mp3'
    }
    else if (selectedHorn == 'party-horn'){
      image.src = 'assets/images/party-horn.svg'
      image.alt = 'party horn'
      audio.src = 'assets/audio/party-horn.mp3'
    }
  })

  volumeSlide.addEventListener('input', ()=>{
    const volume = volumeSlide.value
    audio.volume = volume /100
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'volume level 3';
    }
  })

  button.addEventListener('click',()=>{
    if (audio.src){
      audio.play()
    }
    if (hornSelect.value==='party-horn'){
      jsConfetti.addConfetti()
    }
  })
}