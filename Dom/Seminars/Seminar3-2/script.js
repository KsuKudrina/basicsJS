
const photoContainer = document.querySelector('#photo-container');
let currentPage = 1;
let isFetching = false;

const accessKey = 'TOKEN';

const fetchPhotos = async (page) => {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/?page=${page}&client_id=${accessKey}`
        );
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error
    }finally{
        isFetching = false;
    }
};


function addPhoto(data) {
    for (const obj of data) {
        photoContainer.insertAdjacentHTML('beforeend', `
            <div class="photo">
                <img src="${obj.urls.full}" alt="${obj.alt_description}" />
            </div>`);
    }
}


window.addEventListener('scroll', async () =>{
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.clientHeight;

    const scrollPercentage = (scrollPosition / (docHeight - windowHeight)) * 100;

    if (scrollPercentage >= 90 && !isFetching) {
        currentPage++;
        isFetching = true;
        try {
            const data = await fetchPhotos(currentPage);
    addPhoto(data);
        } catch (error) {
            alert(error.message)
        }
        
        
    }
});

async function run() {
    try {
        const data = await fetchPhotos(currentPage);
    addPhoto(data);
    } catch (error) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.message;
        document.querySelector('#photo-container').append(errorMessage);
    }
    
}
run();