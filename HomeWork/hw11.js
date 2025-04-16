var data = "temp value for data";
fetch("https://picsum.photos/v2/list?page=2&amp;limit=10")
    .then(async (res) => {
        const data = await res.json();
        console.log("List of images", data)
        createImages(data);

    })
    .catch(err => console.error(err));


function createImages(imageList){
    const template = document.getElementById("image-template");
    const grid = document.getElementById("image-grid");

    for(const image of imageList){
        const clone = template.content.cloneNode(true)
        const img = clone.querySelector('img');
        img.src = image.download_url || "DNE";
        console.log(img.src);
        grid.appendChild(clone);
    }

}