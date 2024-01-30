function generateTextFile() {
    var textInput = document.getElementById("textInput").value;
    // Convert the text to Blob using UTF-8 encoding
    var blob = new Blob([decodeURIComponent(encodeURIComponent(textInput))], { type: "text/plain;charset=utf-8" });

    // Create a URL for the blob object
    var url = URL.createObjectURL(blob);

    // Open the URL in a new tab for download
    window.open(url, "_blank");
}
