var IMAGE_NUM = 121; /* UPDATE IMAGE COUNT HERE */

function getImage() {
	var img = "images/";
	var randomNum = Math.floor((Math.random() * IMAGE_NUM)+1);
	img += randomNum + '.jpg';
	return img;
}

function getImageLink() {
	var img = "http://randomfox.ca/images/";
	var randomNum = Math.floor((Math.random() * IMAGE_NUM)+1);
	img += randomNum + '.jpg';
	return img;
}