const schedule = [
    {
        id: 1,
        title: "STRETCHING",
        time: "8:00 - 9:00",
        maxParticipants: 20,
        participants: 5
    },
    {
        id: 2,
        title: "INTERVAL",
        time: "9:00 - 10:00",
        maxParticipants: 20,
        participants: 15
    },
    {
        id: 3,
        title: "PILATES",
        time: "10:00 - 11:00",
        maxParticipants: 15,
        participants: 10
    },
    {
        id: 4,
        title: "YOGA",
        time: "12:00 - 13:00",
        maxParticipants: 20,
        participants: 20
    },
    {
        id: 5,
        title: "CARDIO",
        time: "11:00 - 11:30",
        maxParticipants: 20,
        participants: 12
    },
    {
        id: 6,
        title: "SWIMMING",
        time: "15:00 - 16:00",
        maxParticipants: 20,
        participants: 12
    }
];
let trening = schedule.slice(0);

if(!localStorage.getItem('trening')){
    saveToStorage('trening', trening);
} else{
    trening = JSON.parse(localStorage.getItem('trening'))
}

const content = document.querySelector('.content');
        
trening.forEach(element => {
    let sportsActivity = document.createElement('div')
    sportsActivity.classList.add('sportbox', 'mb-4')
    sportsActivity.innerHTML = 
     `
    <div class='col gx-5 gy-5'>
        <h2 class="text-center">${element.title}</h2>
        <h3 class="text-center">${element.time}</h3>
        <p >Максимальное количество участников: ${element.maxParticipants}</p>
        <p class="col-text">Текущее количество участников: ${element.participants}</p>
        <button id="${element.title}-add" class="btn btn-outline-info" aria-disabled="true"> Записаться </button> 
        <button class="btn btn-danger" id="${element.title}-cancel" style="display: none">Отменить запись</button> 
    </div>`
    content.appendChild(sportsActivity);
    const btnAdd = document.getElementById(`${element.title}-add`);
    const btnCancel = document.getElementById(`${element.title}-cancel`);
    
    if(element.maxParticipants === element.participants){
        btnAdd.classList.add('disabled');
    }
    btnAdd.addEventListener('click', () => {
        if (element.participants < element.maxParticipants) {
            element.participants++;
            btnAdd.style.display = 'none';
            btnCancel.style.display = 'block';
            sportsActivity.querySelector(
                ".col-text:nth-child(4)"
              ).textContent = `Текущее количество участников: ${element.participants}`;
          saveToStorage('trening', trening);
        }
    });
    btnCancel.addEventListener("click", () => {
        if (element.participants > 0) {
          element.participants--;
          btnCancel.style.display = "none";
          btnAdd.style.display = "block";
          sportsActivity.querySelector(
            ".col-text:nth-child(4)"
          ).textContent = `Текущее количество участников: ${element.participants}`;
          saveToStorage('trening', trening);
        }
      });
});

function saveToStorage(name, data) {
	localStorage.setItem(name, JSON.stringify(data));
}


