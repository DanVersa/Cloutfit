const Vision = require('@google-cloud/vision');

const vision = Vision();

const fileName;

const request = {
	source: {
		filename: fileName
	}
};

vision.labelDetection(request)
	.then((results) => {
		const labels = results[0].labelAnnotations;
	
		console.log('Labels:');
		labels.forEach((label) => console.log(label.description));
	})
	.catch((err) => {
		console.error('Error:', err);
	});

