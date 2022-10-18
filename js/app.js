'use strict'

let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('container__frame'),
	frames = Array.from($frames),
	zVal = [];

window.onscroll = function(){

	let top = document.documentElement.scrollTop,
		delta = lastPos - top;

	lastPos = top;

	frames.forEach(function(n, i){
		zVal.push((i * zSpacing) + zSpacing)
		zVal[i] += delta * -5;
		let frame = frames[i],
			transform = `translateZ(${zVal[i]}px)`,
			opacity = zVal[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0,1)



let soundButton = document.querySelector('.soundButton'),
	audio = document.querySelector('.audio')

soundButton.addEventListener('click', e =>{
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
} )


window.onfocus = function(){
	audio.pause()
}
window.onblur = function(){
	audio.pause()
}