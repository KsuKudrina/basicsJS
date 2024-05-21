const newData = JSON.parse(data);
console.log(newData);
const contentEl = document.querySelector('.content');
newData.forEach(element => {
    contentEl.insertAdjacentHTML('beforeend', `
    <div class='wrapper'>
        <h2>${element.name}</h2>
        <h3>${element.username}</h3>
        <p>${element.email}</p>
        <p>${element.city}</p>
        <a href="tel:+${element.phone}">${element.phone}</a>    
    </div>`
    )
});