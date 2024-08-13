function file() {
    const anchor = document.createElement("a");
    anchor.href = "masaCV.pdf";
    anchor.download = "myCV.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    
}
