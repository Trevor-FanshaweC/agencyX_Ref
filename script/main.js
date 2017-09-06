(function () {
	var theImages = document.querySelectorAll('.image-holder'),
		theHeading = document.querySelector('.heading'),
		theSubhead = document.querySelector('.main-copy h2'),
		theSeasonText = document.querySelector('.main-copy p'),
		appliedClass;

	function changeElements() {
		let subImages = document.querySelector('.subImagesContainer');
		let objectIndex = dynamicContent[this.id];

		// remove all of the thumnail images
		while (subImages.firstChild) {
			subImages.removeChild(subImages.firstChild);
		}

		// add the current season's thumnail images
		for (let i = 0; i < objectIndex.images.length; i++) {
			let newSubImg = document.createElement('img');

			newSubImg.classList.add('thumb');
			newSubImg.src = "images/" + objectIndex.images[i];
			newSubImg.dataset.index = i;

			// add an event listener to trigger the lightbox / larger view
			newSubImg.addEventListener('click', function() { popLightbox(i, objectIndex); }, false);

			// add it to the page
			subImages.appendChild(newSubImg);
		}

		theSubhead.classList.remove(appliedClass);
		theHeading.classList.remove(appliedClass);

		// change the color
		theSubhead.classList.add(this.id);
		theHeading.classList.add(this.id);

		appliedClass = this.id;

		theSubhead.firstChild.nodeValue = objectIndex.headline;
		theSeasonText.firstChild.nodeValue = objectIndex.text;
	}

	[].forEach.call(theImages, function(image) {
		image.addEventListener('click', changeElements, false);
	});

	// open the lightbox and populate its content
	function popLightbox(currentIndex, currentObject) {
		// reset the window's top offset to 0
		window.scrollTo(0, 0);
		document.body.style.overflow = "hidden";

		let lightbox = document.querySelector('.lightbox');
		let lightboxImg = lightbox.querySelector('img');
		let lightboxDesc = lightbox.querySelector('p');
		let lightboxClose = document.querySelector('.close-lightbox');

		lightbox.style.display = "block";
		lightboxImg.src = "images/" + currentObject.images[currentIndex];
		lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

		// add a control to close the lightbox
		lightboxClose.addEventListener('click', closeLightbox, false);
	}

	function closeLightbox() {
		let lightbox = document.querySelector('.lightbox');

		lightbox.style.display = 'none';
		let lightboxImg = lightbox.querySelector('img');
		let lightboxDesc = lightbox.querySelector('p');
		lightboxImg.src = "";
		lightboxDesc.innerHTML = "";

		document.body.style.overflow = "auto";
	}

	// load the content when the page loads
	theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
	theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	theHeading.classList.add('spring');
})();
