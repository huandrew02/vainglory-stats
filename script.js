function processImage() {
    const fileInput = document.getElementById('uploadImage');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('File uploaded:', file.name);
        // Here you will later add the OCR processing code
    }
}
