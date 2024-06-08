(() => {
    function preparePhotoTemplate(photo) {
        const { title, thumbnailUrl, id, albumId, url } = photo;
        return `
        <div class="photo-card">
            <h2 class="title">${title}</h2>
            <div class='photo-wrapper'>
                <img class="photo" src="${thumbnailUrl}" alt="thumbnail image" width="150px" height="150px">
            </div>
            <div class="content">
                <p class="img-id">ID :  ${id}</p>
                <p class="album-id">Album ID : ${albumId}</p>
                <a class="view-more button" href="${url}" target="_blank">view more</a>
            </div>
        </div>`
    }

    function renderPhotos(maxPhotoLimit) {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((data) => data.json())
            .then((photos) => {
                const container = document.querySelector('.photos-slot');
                photos.slice(0, maxPhotoLimit).forEach((photo) => {
                    let photoTemplate = preparePhotoTemplate(photo);
                    container.insertAdjacentHTML("beforeend", photoTemplate);
                });
            });
    }

    renderPhotos(100);
})();






