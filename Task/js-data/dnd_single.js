// вызов для первого тренажера
(() => {
  // массив входящих картинок (максимум 5-6 элементов),
  // опционально заполняются:
  // 1) поле srcTwo - если нужна картинка в том элементе, который перетаскивается
  // 2) поля title, titleTwo - если нужен заголовок в полях для перетаскивания (дроп) и в элементе для перетаскивания (драг) соответственно
  // 3) audioSrc - если нужна озвучка в полях для перетаскивания (дроп)
  // Если какие-то поля не нужны, то ставится ''
  // в поле tag пишется уникальное слово для каждой пары сопоставляемых элементов, по которому сверяется правильность сопоставления
  // в поле id пишется уникальное значение, по которому воспроизводятся звуки
  // два массива с данными: в первщм указываются данные по верхнему ряду, во втором по нижнему,

  // Если перемещаемые элементы просто нужно сопоставить с другими (без строгих ограничений),
  // то в поле tag прописать одинаковые слова

  const arrayOfDropElements = [
    {
      id: 1,
      name: "elephant",
      src: "Images_18/dnd_single/03-1.png",
      audioSrc: "sound/dnd_single/007.mp3",
      title: "",
      tag: "elephant",
    },
    {
      id: 2,
      name: "cat",
      src: "Images_18/dnd_single/03-2.png",
      title: "",
      audioSrc: "sound/dnd_single/009.mp3",
      tag: "cat",
    },
    {
      id: 3,
      name: "wolf",
      src: "Images_18/dnd_single/03-3.png",
      title: "",
      audioSrc: "sound/dnd_single/011.mp3",
      tag: "wolf",
    },
  ];
  const arrayOfDragElements = [
    {
      id: 1,
      name: "elephant",
      srcTwo: "Images_18/dnd_single/1_1.png",
      titleTwo: "",
      tag: "elephant",
    },
    {
      id: 2,
      name: "cat",
      srcTwo: "Images_18/dnd_single/1_2.png",
      titleTwo: "",
      tag: "cat",
    },
    {
      id: 3,
      name: "wolf",
      srcTwo: "Images_18/dnd_single/1_3.png",
      titleTwo: "",
      tag: "wolf",
    },
    {
      id: 4,
      name: "oak",
      srcTwo: "Images_18/dnd_single/1_4.png",
      titleTwo: "",
      tag: "oak",
    },
    {
      id: 5,
      name: "maple",
      srcTwo: "Images_18/dnd_single/1_5.png",
      titleTwo: "",
      tag: "maple",
    },
  ];

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-1_1");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_18";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDnDSingleMarkup(
    arrayOfDropElements,
    arrayOfDragElements,
    taskWrapper,
    imageFolder
  );
})();

// вызов для второго тренажера

(() => {
  // массив входящих картинок (максимум 5-6 элементов),
  // опционально заполняются:
  // 1) поле srcTwo - если нужна картинка в том элементе, который перетаскивается
  // 2) поля title, titleTwo - если нужен заголовок в полях для перетаскивания (дроп) и в элементе для перетаскивания (драг) соответственно
  // 3) audioSrc - если нужна озвучка в полях для перетаскивания (дроп)
  // Если какие-то поля не нужны, то ставится ''
  // в поле tag пишется уникальное слово, по которому сверяется правильность сопоставления
  // в поле id пишется уникальное значение, по которому воспроизводятся звуки
  // Каждый объект - это данные о паре элементов: который будет перемещаться и к которому будут перемещать
  // Если перемещаемые элементы просто нужно сопоставить с другими (без строгих ограничений), то в поле tag прописать одинаковые слова

  const arrayOfDropElements = [
    {
      id: 1,
      name: "zebra",
      src: "Images_18/dnd_single/09-1.png",

      audioSrc: "",
      title: "",

      tag: "zebra",
    },
    {
      id: 2,
      name: "cow",
      src: "Images_18/dnd_single/09-2.png",

      title: "",

      audioSrc: "",
      tag: "cow",
    },
    {
      id: 3,
      name: "lion",
      src: "Images_18/dnd_single/09-3.png",

      title: "",

      audioSrc: "",
      tag: "lion",
    },
    {
      id: 4,
      name: "hippo",
      src: "Images_18/dnd_single/09-4.png",

      title: "",

      audioSrc: "",
      tag: "hippo",
    },
    {
      id: 5,
      name: "fox",
      src: "Images_18/dnd_single/09-5.png",

      title: "",

      audioSrc: "",
      tag: "fox",
    },
  ];
  const arrayOfDragElements = [
    {
      id: 1,
      name: "zebra",

      srcTwo: "Images_18/dnd_single/09-6.jpg",

      titleTwo: "",
      tag: "zebra",
    },
    {
      id: 2,
      name: "cow",

      srcTwo: "Images_18/dnd_single/09-7.jpg",

      titleTwo: "",

      tag: "cow",
    },
    {
      id: 3,
      name: "lion",

      srcTwo: "Images_18/dnd_single/09-8.jpg",

      titleTwo: "",

      tag: "lion",
    },
    {
      id: 4,
      name: "hippo",

      srcTwo: "Images_18/dnd_single/09-9.jpg",

      titleTwo: "",

      tag: "hippo",
    },
    {
      id: 5,
      name: "fox",

      srcTwo: "Images_18/dnd_single/09-10.jpg",

      titleTwo: "",

      tag: "fox",
    },
  ];

  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const taskWrapper = document.getElementById("task-1_2");

  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_18";

  // сама функция, которая запускается, здесь ничего менять не нужно
  renderDnDSingleMarkup(
    arrayOfDropElements,
    arrayOfDragElements,
    taskWrapper,
    imageFolder
  );
})();

//ФУНКЦИЯ
function renderDnDSingleMarkup(
  arrayOfDropElements,
  arrayOfDragElements,
  taskWrapper,
  imageFolder
) {
  let draggingItem;
  let elemBelow;
  let currentSound;

  let isPlaying = false;

  let startAction = false;

  const interakt_zadanie = taskWrapper.parentElement;
  const headCheck = interakt_zadanie.previousElementSibling;

  const drop = headCheck.querySelector(".drop");
  const check_your = headCheck.querySelector(".check_your");
  const result = headCheck.querySelector(".result");
  const dropBox = taskWrapper.querySelector(".dropPlaceWrapper");
  const dragBox = taskWrapper.querySelector(".dragPlaceWrapper");

  dropBox.insertAdjacentHTML(
    "beforeend",
    createDropPictureCardsMarkup(shuffleCards([...arrayOfDropElements]))
  );
  dragBox.insertAdjacentHTML(
    "beforeend",
    createDragPictureCardsMarkup(shuffleCards([...arrayOfDragElements]))
  );

  const audioFiles = taskWrapper.querySelectorAll(".dndOneToOne_audio");

  // dragBox.addEventListener("pointerdown", mouseDown);
  [...dragBox.children].forEach((el) => {
    el.addEventListener("pointerdown", mouseDown);
  });
  drop.addEventListener("click", onBtnResetClick);

  dropBox.addEventListener("click", onDropBoxClick);
  // dropBox.addEventListener("click", onImgSoundClick);

  // function onDropBoxClick(event) {
  //   if (event.target.classList.contains("dropPicture")) {
  //     scaleImage(event.target);
  //   }

  // }
  function onDropBoxClick(e) {
    // console.log(e.target);
    if (e.target.classList.contains("dropPicture")) {
      scaleImage(e.target);
    }
    // if (e.target.classList.contains("soundBox")) {
    if (e.target.classList.contains("buttonPlayPausePlayPause_wrap")) {
      findSoundAndPlayPause("drop-data", e.target);
      // removeActiveSoundCardClass();
      // resetSound(currentSound);
      // e.target.classList.add("buttonPlayPause--active");
      // const findedSound = [...audioFiles].find(
      //   (el) =>
      //     el.id ===
      //     e.target.parentElement.attributes.getNamedItem("drop-data").value
      // );
      // currentSound = findedSound;
      // // findedSound.play();
      // isPlaying ? currentSound.pause() : currentSound.play();
      // // e.target.classList.toggle("buttonPlayPause--active");
      // currentSound.onplaying = function () {
      //   isPlaying = true;
      //   e.target.classList.add("buttonPlayPause--active");
      // };
      // currentSound.onpause = function () {
      //   isPlaying = false;
      //   e.target.classList.remove("buttonPlayPause--active");
      // };
      // currentSound.onended = function () {
      //   e.target.classList.remove("buttonPlayPause--active");
      //   isPlaying = false;
      // };
    }
  }

  [...audioFiles].forEach((el) =>
    el.addEventListener("ended", (e) => {
      // console.log(e.target);
      e.target
        .closest(".buttonPlayPausePlayPause_wrap")
        .classList.remove("buttonPlayPause--active");
    })
  );
  function findSoundAndPlayPause(attrName, target) {
    const findedSound = [...audioFiles].find(
      (el) =>
        el.id === target.parentElement.attributes.getNamedItem(attrName).value
    );

    if (currentSound && currentSound.id === findedSound.id && !isPlaying) {
      currentSound.pause();
      isPlaying = true;
      removeActiveSoundCardClass();

      // target.classList.add("buttonPlayPause--active");
      target.classList.remove("buttonPlayPause--active");
    } else if (
      currentSound &&
      currentSound.id === findedSound.id &&
      isPlaying
    ) {
      currentSound.play();
      isPlaying = false;

      // addCheckClass(target);
      target.classList.add("buttonPlayPause--active");

      // target.classList.remove("buttonPlayPause--active");
    } else {
      removeActiveSoundCardClass();

      // addCheckClass(target);
      // target.classList.add("buttonPlayPause--active");
      target.classList.add("buttonPlayPause--active");
      resetSound(currentSound);
      isPlaying = false;

      currentSound = findedSound;
      currentSound.play();
    }
  }

  function resetSound(currentSound) {
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
      currentSound = null;
    }
  }

  // function onImgSoundClick(e) {
  //   if (!e.target.classList.contains("soundBox")) return;
  //   removeActiveSoundCardClass();
  //   resetSound(currentSound);
  //   e.target.classList.add("dnd-check");
  //   const findedSound = [...audioFiles].find(
  //     (el) => el.id === e.target.attributes.getNamedItem("drop-data").value
  //   );
  //   currentSound = findedSound;
  //   findedSound.play();
  // }

  function removeActiveSoundCardClass() {
    const currentActiveCard = document.querySelector(
      ".buttonPlayPausePlayPause_wrap.buttonPlayPause--active"
    );

    if (currentActiveCard) {
      currentActiveCard.classList.remove("buttonPlayPause--active");
    }
  }

  function onBtnResetClick() {
    [...dropBox.children].forEach((item) => {
      if (item.children.length > 2) {
        let randomPos = Math.floor(Math.random() * 12);
        item.children[2].style.order = randomPos;
        dragBox.appendChild(item.children[2]);
      }
    });

    resetSound(currentSound);
    removeActiveSoundCardClass();
    removeActiveCardClass();
    startAction = false;
    checkButton_classList_changer();
    feedBackChanger("reset");
    draggingItem = null;
  }
  function onBtnTestClick() {
    let winVar = 0;
    [...dropBox.children].forEach((item) => {
      if (
        item.children.length === 3 &&
        item.children[1].attributes.getNamedItem("drop-data").value ===
          item.children[2].attributes.getNamedItem("drag-data").value
      ) {
        winVar += 1;
      }
    });
    if (winVar === arrayOfDropElements.length) {
      feedBackChanger("win");
    } else {
      feedBackChanger("lose");
    }
  }

  function checkButton_classList_changer() {
    if (check_your.classList.contains("check_your_active") && !startAction) {
      check_your.classList.remove("check_your_active");
      check_your.removeEventListener("click", onBtnTestClick);
    } else if (
      !check_your.classList.contains("check_your_active") &&
      startAction
    ) {
      check_your.removeEventListener("click", onBtnTestClick);
      check_your.classList.add("check_your_active");
      check_your.addEventListener("click", onBtnTestClick);
    }
  }

  function feedBackChanger(state) {
    if ((startAction && state === "win") || state === "lose") {
      result.classList.add(`result_${state}`);
    } else {
      result.classList.remove(`result_win`);
      result.classList.remove(`result_lose`);
    }
  }

  function removeActiveCardClass() {
    const currentActiveCard = document.querySelector(
      ".dragPicture_box.dnd-check"
    );

    if (currentActiveCard) {
      currentActiveCard.classList.remove("dnd-check");
    }
  }

  function addCheckClass(card) {
    card.classList.add("dnd-check");
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    startAction = true;
    checkButton_classList_changer();
    if (
      !event.target.classList.contains("dragPicture") &&
      !event.target.classList.contains("dragPicture_box") &&
      !event.target.classList.contains("dragTitle")
    )
      return;

    draggingItem =
      event.target.classList.contains("dragPicture") ||
      event.target.classList.contains("dragTitle")
        ? event.target.parentElement
        : event.target;

    draggingItem.style.touchAction = "none";
    const findIdx = [...dragBox.children].findIndex(
      (el) => el === draggingItem
    );

    removeActiveCardClass();
    addCheckClass(draggingItem);

    draggingItem.style.cursor = "grabbing";
    let shiftX = event.clientX - draggingItem.getBoundingClientRect().left;
    let shiftY = event.clientY - draggingItem.getBoundingClientRect().top;

    // ЛИММИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
    //  (ПО УМОЛЧАНИЮ interact_zadanie - РОДИТЕЛЬ ВАШЕГО БЛОКА)
    let limits = {
      top: taskWrapper.offsetTop,
      right: taskWrapper.offsetWidth + taskWrapper.offsetLeft,
      bottom: taskWrapper.offsetHeight + taskWrapper.offsetTop,
      left: taskWrapper.offsetLeft,
    };

    draggingItem.style.position = "absolute";
    draggingItem.style.zIndex = 1000;
    document.body.appendChild(draggingItem);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      draggingItem.style.left = pageX - shiftX + "px";
      draggingItem.style.top = pageY - shiftY + "px";
    }

    elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    let clickWithoutMove = true;
    function onMouseMove(event) {
      let newLocation = {
        x: limits.left,
        y: limits.top,
      };
      if (event.pageX > limits.right) {
        newLocation.x = limits.right;
      } else if (event.pageX > limits.left) {
        newLocation.x = event.pageX;
      }
      if (event.pageY > limits.bottom) {
        newLocation.y = limits.bottom;
      } else if (event.pageY > limits.top) {
        newLocation.y = event.pageY;
      }

      clickWithoutMove = false;
      moveAt(newLocation.x, newLocation.y);

      if (!event.composedPath().includes(draggingItem)) {
        window.addEventListener("pointerup", moveOut);
      }
      if (event.composedPath().includes(draggingItem)) {
        window.removeEventListener("pointerup", moveOut);
      }

      draggingItem.style.visibility = "hidden";
      elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      draggingItem.style.visibility = "visible";

      if (!elemBelow) return;
    }
    document.addEventListener("pointermove", onMouseMove);

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
    function moveOut(e) {
      dragAppend(dragBox, draggingItem, findIdx);

      window.removeEventListener("pointerup", moveOut);
      document.removeEventListener("pointermove", onMouseMove);
    }

    draggingItem.onpointerup = function () {
      if (clickWithoutMove) {
        if (event.target.classList.contains("dragPicture_box")) {
          setTimeout(() => scaleImage(event.target.firstElementChild), 0);
        } else setTimeout(() => scaleImage(event.target), 0);
        dragAppend(dragBox, draggingItem, findIdx);

        return document.removeEventListener("pointermove", onMouseMove);
      }
      document.removeEventListener("pointermove", onMouseMove);

      draggingItem.style.cursor = "grab";

      if (elemBelow.classList.contains("dropPlace_imageBox")) {
        dropAppend(elemBelow.parentElement, draggingItem);

        draggingItem.classList.remove("dnd-check");
      } else {
        dragAppend(dragBox, draggingItem, findIdx);
      }
    };
  }

  // функция для смены стилей
  function changeStyles(draggingElem) {
    draggingElem.style.position = "relative ";
    draggingElem.style.zIndex = null;
    draggingElem.style.top = null;
    draggingElem.style.left = null;
  }

  // функция для возврата элемента в первоначальную область
  function dragAppend(dropPlace, draggingElem, findIdx) {
    const referenceElement = [...dropPlace.children][findIdx];
    dropPlace.insertBefore(draggingElem, referenceElement);
    changeStyles(draggingElem);
  }

  // функция для размещения элемента в области, куда его перетаскивают
  function dropAppend(dropPlace, draggingElem) {
    dropPlace.appendChild(draggingElem);
    changeStyles(draggingElem);
  }
  function createDropPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        const isTitle = picture.title
          ? `<h3 class='dropTitle'>${picture.title}</h3>`
          : "";
        const isSound = picture.audioSrc
          ? `<div class='soundBox' drop-data=${picture.id}>
                <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play">
                    <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                    <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                    <audio class="dndOneToOne_audio" id=${picture.id} src=${picture.audioSrc}>
                              Your browser does not support the
                              <code>audio</code> element.
                    </audio>
                </div>
            </div>`
          : "";

        return `<div class="dropPlace">
                    <div class="dropPicture_box">
                        <div class="dropPicture" style="background-image: url(${picture.src})"></div>
                        ${isSound}
                        ${isTitle}
                    </div>
                    <div drop-data=${picture.tag} class ="dropPlace_imageBox"></div>
                </div>

                                  `;
      })
      .join("");
  }
  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map((picture) => {
        const isTitle = picture.titleTwo
          ? `<h3 class='dragTitle'>${picture.titleTwo}</h3>`
          : "";
        const isImage = picture.srcTwo
          ? `<div class="dragPicture" style="background-image: url(${picture.srcTwo})" draggable="false">
                    </div>`
          : "";
        return `<div class="dragPicture_box" draggable="false" drag-data=${picture.tag}>
                    ${isImage}

                    ${isTitle}
                </div>

                                  `;
      })
      .join("");
  }

  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
  function scaleImage(targetEl) {
    let modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.bottom = 0;
    modal.style.right = 0;
    modal.style.background = "rgba(0,0,0,0.5)";
    modal.style.zIndex = 100;
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.flexDirection = "column";
    modal.style.alignItems = "center";

    let div = document.createElement("div");
    div.style.width = "50%";
    div.style.height = "80%";
    div.style.textAlign = "center";
    let img = document.createElement("img");
    if (targetEl.tagName === "IMG") {
      img.src = targetEl.src;
    } else {
      img.src = targetEl.style.backgroundImage.slice(5, -2);
    }
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";

    div.append(img);
    modal.append(div);
    let close = document.createElement("div");
    close.classList.add("icon_close_button", "close_icon_white");

    close.style.marginLeft = "calc(100% - 25px)";
    close.style.cursor = "pointer";

    div.append(close);
    document.body.style.overflow = "hidden";
    modal.addEventListener("click", () => {
      modal.remove();
      document.body.style.overflow = "visible";
    });
    document.body.append(modal);
  }
}
