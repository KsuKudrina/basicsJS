const photoBox = document.querySelector('.photo__box');
const authorPhoto = document.querySelector('.author-photo');
// const likeEl = document.querySelector('.like');
const likeCounter = document.querySelector('.like-counter');
const btnlike = document.querySelector('.btn-like');

const accessKey = 'TOKEN'
let page = Math.floor(Math.random() * 100) + 1;

const fetchPhotos = async () => {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/?page=${page}&per_page=1&client_id=${accessKey}`
        );
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }
};

function addPhoto(data) {
    for (const obj of data) {
        photoBox.insertAdjacentHTML('afterbegin', `
            <div class="photo">
                <img src="${obj.urls.small}" alt="${obj.alt_description}" />
            </div>`);
        const autorName = obj.user.first_name;
        const cont = document.createElement('h3');
        cont.textContent = `${autorName}`;
        authorPhoto.appendChild(cont);

        let likeEl = obj.likes;
        likeCounter.textContent = `${likeEl}`;
        btnlike.addEventListener('click', () => {
            likeEl = likeEl + 1;
            likeCounter.textContent = `${likeEl}`;
            
            btnlike.disabled = true
    });
    }
    
}

async function run() {
    try {
        const data = await fetchPhotos();
        addPhoto(data);
    } catch (error) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.message;
        document.querySelector('.photo__box').append(errorMessage);
    }
    
}
run();