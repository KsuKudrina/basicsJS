const newData = JSON.parse(data);
const contentEl = document.querySelector('.container');
newData.forEach(element => {
    contentEl.insertAdjacentHTML('beforeend', 
        `<div class="content">
            <img class="img" src="${element.img}" />
            <h3 class="title">${element.title}</h3>
            <p class="fact">${element.fact}</p>
        </div>`
    )
});