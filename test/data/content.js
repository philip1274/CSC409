const mainData = {
    sections: [ {
        class: "content-section",
        title: "About Our Honey",
        textContent: "At Pure Honey, we offer locally sourced raw ulfiltered honey harvested with care and respect for nature. Our bees work tirelessly in the wildflower meadows to produce a golden, sustainably farmed nutrient-rich honey.",
        image: {
            title: "honey",
            src: "images/image1.jpg"
        }
    },
    {
        class: "content-section",
        title: "Our Bees",
        textContent: "These small bees are essential for pollination and sustaining ecosystems. At Pure Honey, we are committed to providing an environment suited to producing healthful honey. Our methods ensure the health of the hive and the quality of every drop of honey you savor.",
        image: {
            title: "Our Bees",
            src: "images/image2.jpg"
        }
    }
    ],
}

    // Get the template element
    const template = document.getElementById('content-template');

    // Function to create a new section instance
    function createSection(classType, title, text, imgAlt, imgSrc) {
        // Clone the template content
        const clone = template.content.cloneNode(true);

        // Customize the content
        clone.querySelector('section').className = classType;
        clone.querySelector('h2').textContent = title;
        clone.querySelector('p').textContent = text;
        
        clone.querySelector('img').alt = imgAlt;
        clone.querySelector('img').src = imgSrc;
        // Append to container
        document.getElementById('container').appendChild(clone);
    }

    // Example of adding multiple sections dynamically
for(const section of mainData.sections){
    createSection(
        section.class,
        section.title,
        section.textContent,
        section.image.title,
        section.image.src
    );
}
