function processImage() {
    const fileInput = document.getElementById('uploadImage');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('File uploaded:', file.name);

        // Create a new FileReader to read this file into memory
        const reader = new FileReader();

        // Define the onload event handler
        reader.onload = function (e) {
            // Create an image element
            const img = new Image();
            img.src = e.target.result;

            // Perform OCR with Tesseract.js on the loaded image
            img.onload = function () {
                Tesseract.recognize(
                    img,
                    'eng', // Specify the language of the text to be recognized
                    {
                        logger: m => console.log(m) // Log progress
                    }
                ).then(({ data: { text } }) => {
                    console.log('Recognized text:', text);
                    // Here you can handle the extracted text, e.g., display it, store it, etc.
                });
            };
        };

        // Read the image file as a data URL to trigger the onload event
        reader.readAsDataURL(file);
    }
}

