// Задание 1
    // 1 В html создать кнопку button
    // 2 После загрузки страницы вывести в консоль текст
    // “страница загрузилась”
    const btn1 = document.querySelector(".btn1");
    window.onload = () => {
      console.log("страница загрузилась");
    };
    // 3 Добавить событие onclick которое выводит в
    // консоль текст “событие onclick”
    btn1.onclick = () => {
      console.log("событие onclick");
    };
    // 4 Добавить событие addEventListener которое
    // выводит в консоль текст “событие
    // addEventListener”

    btn1.addEventListener("click", () => {
      console.log("событие addEventListener");
    });

    //     Задание 2
    // 1 Создать в html три кнопки button с нумерацией (1, 2, 3
    // соответственно)
    const body = document.querySelector("body");
    for (let i = 1; i <= 5; i++) {
      body.insertAdjacentHTML("beforeend", `<button>${i}</button>`);
    }
    // 2 Добавить клик на кнопку , чтобы в консоль выводилась
    // именно та кнопка на которую мы нажали
    body.addEventListener("click", (e) => {
      if (e.target.nodeName === "BUTTON") {
        console.log(`Нажали на кнопку ${e.target.textContent}`);
      }
    });
    // 3 Добавить кнопку button с текстом 4, которая считает
    // сколько раз на нее нажали и количество нажатий на эту
    // кнопку выводит в консоль
    const btns = document.querySelectorAll("button");
    let count = 0;
    btns[4].addEventListener("click", () => {
      count++;
      console.log(`На кнопку 4 нажали ${count} раз`);
    });
    // 4 Создать кнопку button с текстом 5, При клике на которую,
    // меняется текст данной кнопки на “Вы нажали на эту
    // кнопку”
    btns[5].addEventListener("click", () => {
      btns[5].textContent = "Вы нажали на эту кнопку";
    });

    //     Задание 3
    // 1 Создать кнопку, которая добавляет заголовок h1 с текстом,
    // "Новый заголовок", данный элемент нужно расположить
    // после кнопки
    const but1 = document.createElement("button");
    but1.textContent = "click me";
    body.insertAdjacentElement("beforeend", but1);
    but1.addEventListener("click", () => {
      body.insertAdjacentHTML("beforeend", "<h1>Новый заголовок</h1>");
    });
    // 2 Создать вторую кнопку, которая будет удалять созданный
    // заголовок h1
    const but2 = document.createElement("button");

    but2.textContent = "remove me";
    body.insertAdjacentElement("beforeend", but2);
    but2.addEventListener("click", () => {
      document.querySelector("h1").remove();
    });
    // 3 Создать третью кнопку, при наведении на которую в
    // консоль будет выводиться текст “вы навели на данную
    // кнопку” , как только вы убираем курсор мыши с кнопки, в
    // консоли должен появиться текст “Наведения на кнопку
    // больше нет”
    const but3 = document.createElement("button");
    but3.textContent = "наведение";

    body.insertAdjacentElement("beforeend", but3);
    but3.addEventListener("mouseover", () => {
      console.log("вы навели на данную кнопку");
    });

    but3.addEventListener("mouseout", () => {
      console.log("Наведения на кнопку больше нет");
    });

    //     Задание 4
    // 1 Создать в html список состоящий из 3-х произвольных
    // элементов li
    // 2 Нужно создать кнопку которая будет добавлять элементы
    // списка с текстом “новый элемент списка”
    const list = document.querySelector("ul");
    const buttonli = document.createElement("button");
    buttonli.textContent =
      "добавить элемент";

    body.insertAdjacentElement('afterbegin', buttonli);
    buttonli.addEventListener('click', () => {
        list.insertAdjacentHTML('beforeend', `<li>новый элемент списка</li>`)
    });
    // 3 Создать кнопку, которая будет удалять первый элемент из
    // созданного списка

    const butdel = document.createElement("button");
    butdel.textContent = "удалить элемент";

    body.insertAdjacentElement('afterbegin', butdel);
    butdel.addEventListener('click', () => {
        list.firstElementChild.remove()
    });
    // 4 Создать кнопку, при клике на которую ей добавляется класс
    // “click”

    const add = document.createElement("button");
    add.textContent = "class";
    body.insertAdjacentElement('afterbegin', add);
    add.addEventListener('click', () => {
        add.classList.add('click')
    });