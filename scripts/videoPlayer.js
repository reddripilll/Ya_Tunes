import { addZero } from './supScript.js';

export const videoPlayerInit = () => {
	const videoPlayer = document.querySelector('.video-player');
	const videoButtonPlay = document.querySelector('.video-button__play');
	const videoButtonStop = document.querySelector('.video-button__stop');
	const videoProgress = document.querySelector('.video-progress');
	const videoTimePassed = document.querySelector('.video-time__passed');
	const videoTimeTotal = document.querySelector('.video-time__total');
	const videoVolume = document.querySelector('.video-volume');
	const videoFullscreen = document.querySelector('.video-fullscreen')
	// Объявление всех переменных 


	videoFullscreen.addEventListener('click', () => {
		videoPlayer.requestFullscreen();
	})

	const toggleIcon = () => {
		if (videoPlayer.paused) {
			videoButtonPlay.classList.remove('fa-pause');
			videoButtonPlay.classList.add('fa-play');
		} else {
			videoButtonPlay.classList.add('fa-pause');
			videoButtonPlay.classList.remove('fa-play');
		}
	}
	// Фунция для смены иконки


	const togglePlay = () => {
		if (videoPlayer.paused) {
			videoPlayer.play();
		} else {
			videoPlayer.pause();
		}
	}
	// Функция для воспроизведения/остановки видео

	const stopPlay = () => {
		videoPlayer.pause();
		videoPlayer.currentTime = 0;
	}
	// Функция для остановки видео

	const changeValue = () => {
		const valueVolume = videoVolume.value;
		videoPlayer.volume = valueVolume / 100;
	}


	videoPlayer.addEventListener('click', togglePlay);
	videoButtonPlay.addEventListener('click', togglePlay);

	videoPlayer.addEventListener('play', toggleIcon);
	videoPlayer.addEventListener('pause', toggleIcon);


	videoButtonStop.addEventListener('click', stopPlay);

	videoPlayer.addEventListener('timeupdate', () => {
		const currentTime = videoPlayer.currentTime;
		const duration = videoPlayer.duration;


		videoProgress.value = (currentTime / duration) * 100;

		let minutePassed = Math.floor(currentTime / 60);
		let secondsPassed = Math.floor(currentTime % 60);

		let minuteTotal = Math.floor(duration / 60);
		let secondsTotal = Math.floor(duration % 60);

		videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
		videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;
	});


	videoProgress.addEventListener('input', () => {
		const duration = videoPlayer.duration;
		const value = videoProgress.value;

		videoPlayer.currentTime = (value * duration) / 100;
	})

	videoVolume.addEventListener('input', changeValue);

	changeValue();
}

// end