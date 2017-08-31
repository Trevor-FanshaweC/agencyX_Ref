(function () {
	var theImages = document.querySelectorAll('.image-holder'),
		theHeading = document.querySelector('.heading'),
		theSubhead = document.querySelector('.main-copy h2'),
		theSeasonText = document.querySelector('.main-copy p'),
		appliedClass;

	function changeElements() {
		let subImages = document.querySelector('.subImagesContainer');
		let objectIndex = dynamicContent[this.id];

		while (subImages.firstChild) {
			subImages.removeChild(subImages.firstChild);
		}

		for (let i = 0; i < objectIndex.images.length; i++) {
			let newSubImg = document.createElement('img');

			newSubImg.classList.add('thumb');

			newSubImg.src = "images/" + objectIndex.images[i];
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

	// load the content when the page loads
	theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
	theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	theHeading.classList.add('spring');

})();
