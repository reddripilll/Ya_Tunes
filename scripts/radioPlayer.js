export const radioPlayerInit = () => {
	const radio = document.querySelector('.radio');
	const radioCoverImg = document.querySelector('.radio-cover__img');
	const radioHeaderBig = document.querySelector('.radio-header__big');
	const radioNavigation = document.querySelector('.radio-navigation');
	const radioItem = document.querySelectorAll('.radio-item');
	const radioStop = document.querySelector('.radio-stop');
	// Обявление перменных

	const audio = new Audio();
	audio.type = 'audio/acc';

	radioStop.disabled = true;
	// Прозрачность проигрывателя

	const changeIconPlay = () => {
		if (audio.paused) {
			radio.classList.remove('play');
			radioStop.classList.add('fa-play');
			radioStop.classList.remove('fa-stop');
		} else {
			radio.classList.add('play');
			radioStop.classList.add('fa-stop');
			radioStop.classList.remove('fa-play');
		}
	}
	// Меняем иконку проигрывателя

	const selectItem = elem => {
		radioItem.forEach(item => {
			item.classList.remove('select');
		})

		elem.classList.add('select');
	}
	// Добавляем обводку

	radioNavigation.addEventListener('change', event => {
		const target = event.target;
		const parent = target.closest('.radio-item');
		selectItem(parent);
		// Вызываем функцию 

		const title = parent.querySelector('.radio-name').textContent;
		radioHeaderBig.textContent = title;
		// Добавление названия выбранной радиостанции 

		const urlImg = parent.querySelector('.radio-img').src;
		radioCoverImg.src = urlImg;
		// Добавление картинки выбранной радиостанции 

		radioStop.disabled = false;
		audio.src = target.dataset.radioStantion;
		audio.play();
		changeIconPlay();
	});

	radioStop.addEventListener('click', () => {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
		changeIconPlay();
	})
}