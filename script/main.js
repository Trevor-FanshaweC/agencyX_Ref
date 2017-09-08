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

		/* -- OLD WAY OF LOOPING THRU STUFF ---*/

		// for (let i = 0; i < objectIndex.images.length; i++) {
			// let newSubImg = document.createElement('img');
			//
			// newSubImg.classList.add('thumb');
			//
			// newSubImg.src = "images/" + objectIndex.images[i];
			// subImages.appendChild(newSubImg);
		// }

		/* -- new and improved way of looping thru stuff -- */
		objectIndex.images.forEach(function(image, index) {
			let newSubImg = document.createElement('img');

			newSubImg.classList.add('thumb');

			newSubImg.src = "images/" + objectIndex.images[index];
			subImages.appendChild(newSubImg);
		});

		theSubhead.classList.remove(appliedClass);
		theHeading.classList.remove(appliedClass);

		// change the color
		theSubhead.classList.add(this.id);
		theHeading.classList.add(this.id);

		appliedClass = this.id;

		theSubhead.firstChild.nodeValue = objectIndex.headline;
		theSeasonText.firstChild.nodeValue = objectIndex.text;
	}

	theImages.forEach(function(image, index) {
		//console.log(image, index);
		image.addEventListener('click', changeElements, false);
	});

	// load the content when the page loads
	theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
	theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	theHeading.classList.add('spring');

})();
