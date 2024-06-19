const video = document.querySelector('video'),
      play = document.querySelector('.play'),
      stopBtn = document.querySelector('.stop'),
      pause = document.querySelector('.pause'),
      mute = document.querySelector('.mute'),
      mute2 = document.querySelector('.mute2');

play.addEventListener('click', () =>{
    video.play()
})

pause.addEventListener('click', () => {
    video.pause()
})

stopBtn.addEventListener('click', () => {
    video.pause(),
    video.currentTime = 0
});
mute.addEventListener('click', () => {
    video.volume = 0
})

mute2.addEventListener('click', () => {
    video.volume = 1
})



