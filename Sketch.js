// Get a reference to the image container
const imageContainer = document.getElementById("imageContainer");

// Array of image filenames
const imageFilenames = ["/Users/hannamuroshnuk/Desktop/aemo_close-upextreme_wide_anglefocus_on_faceby_gopro_BJD_makeup_a3d7c690-69b7-4c9b-98fd-af2d7f2a8681.png", "/Users/hannamuroshnuk/Desktop/thefuture_1_nature_photography_portrait_photography_chimerahybr_65922720-3a51-43b9-8c9a-07f820102a8e.png", "/Users/hannamuroshnuk/Desktop/collage with cake.png"];

// Loop through the image filenames array
imageFilenames.forEach(filename => {
    // Create an image element
    const image = document.createElement("img");
    
    // Set the image source to the current filename
    image.src = filename;
    
    // Append the image to the image container
    imageContainer.appendChild(image);
});
