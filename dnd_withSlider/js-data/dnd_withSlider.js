
(() => {
  // массив входящих картинок для поля куда переносятся картинки (максимум 5-6 элементов),
  // в поле tag указывается ключевое слово для сопаставления поля для сбрасывания и картинки для сбрасывания
  const dropCards = [
    {
      id: 1,
      name: '1',
      src: 'Images_1/05-1.png',
      tag: '1',
    },
    {
      id: 2,
      name: '2',
      src: 'Images_1/05-2.png',
      tag: '2',
    },
    {
      id: 3,
      name: '3',
      src: 'Images_1/05-3.png',
      tag: '3',
    }



  ];
  //массив входящих картинок для поля откуда картинки будут переноситься(любое количество)(максимум по 3 шт на дро при 4 и более дропах, при 3 и менее - по 6 штук на дроп)
  //в поле tag указывается ключевое слово для сопаставления поля для сбрасывания и картинки для сбрасывания
  const dragCards = [
    {
      id: 1,
      name: 'apple',
      src: 'Images_1/05-4.jpg',
      tag: '1',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 2,
      name: 'chess',
      src: 'Images_1/05-5.jpg',
      tag: '1',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 3,
      name: 'girl',
      src: 'Images_1/05-6.jpg',
      tag: '1',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 4,
      name: 'pigalica',
      src: 'Images_1/05-7.jpg',
      tag: '1',
      audioSrc: 'sound/dnd_withSlider/008.mp3'
    },
    {
      id: 5,
      name: 'malina',
      src: 'Images_1/05-8.jpg',
      tag: '2',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 6,
      name: 'shipovnik',
      src: 'Images_1/05-9.jpg',
      tag: '2',
      audioSrc: 'sound/dnd_withSlider/008.mp3'
    },
    {
      id: 7,
      name: 'gvozdika',
      src: 'Images_1/05-10.jpg',
      tag: '2',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 8,
      name: 'raketa',
      src: 'Images_1/05-11.jpg',
      tag: '2',
      audioSrc: 'sound/dnd_withSlider/009.mp3'
    },
    {
      id: 9,
      name: 'ogurec',
      src: 'Images_1/05-12.jpg',
      tag: '3',
      audioSrc: 'sound/dnd_withSlider/009.mp3'
    },
    {
      id: 10,
      name: 'horovod',
      src: 'Images_1/05-13.jpg',
      tag: '3',
      audioSrc: 'sound/dnd_withSlider/009.mp3'
    },
    {
      id: 11,
      name: 'pomidor',
      src: 'Images_1/05-14.jpg',
      tag: '3',
      audioSrc: 'sound/dnd_withSlider/009.mp3'
    },
    {
      id: 12,
      name: 'popugai',
      src: 'Images_1/05-15.jpg',
      tag: '3',
      audioSrc: 'sound/dnd_withSlider/009.mp3'
    },
  ];
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const task = document.getElementById('task-2');
  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";
  //если нужен фон жля дроп зон(одинаковый для всех, например корзинка) то прописываем путь к картинке, в противном случае са=тавим значение null
 // const dropBackgroundimg = /*`${imageFolder}/DOH_3-4_7_1_5.png`*/null

  renderImagesChronologyMarkup(dropCards, dragCards, task, imageFolder)
})();

(() => {
  // массив входящих картинок для поля куда переносятся картинки (максимум 5-6 элементов),
  // в поле tag указывается ключевое слово для сопаставления поля для сбрасывания и картинки для сбрасывания
  const dropCards = [
    {
      id: 1,
      name: 'birch',
      src: 'Images_1/DOH_3-4_7_1_2.png',
      tag: 'birch',
    },
    {
      id: 2,
      name: 'oak',
      src: 'Images_1/DOH_3-4_7_1_3.png',
      tag: 'oak',
    },
    {
      id: 3,
      name: 'maple',
      src: 'Images_1/DOH_3-4_7_1_4.png',
      tag: 'maple',
    }



  ];
  //массив входящих картинок для поля откуда картинки будут переноситься(любое количество)(максимум по 3 шт на дро при 4 и более дропах, при 3 и менее - по 6 штук на дроп)
  //в поле tag указывается ключевое слово для сопаставления поля для сбрасывания и картинки для сбрасывания
  const dragCards = [
    {
      id: 1,
      name: 'mapleLeaf1',
      src: 'Images_1/DOH_3-4_7_1_6.png',
      tag: 'maple',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 2,
      name: 'birchLeaf1',
      src: 'Images_1/DOH_3-4_7_1_7.png',
      tag: 'birch',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 3,
      name: 'mapleLeaf2',
      src: 'Images_1/DOH_3-4_7_1_8.png',
      tag: 'maple',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 4,
      name: 'oakLeaf2',
      src: 'Images_1/DOH_3-4_7_1_9.png',
      tag: 'oak',
      audioSrc: 'sound/dnd_withSlider/008.mp3'
    },
    {
      id: 5,
      name: 'birchLeaf1',
      src: 'Images_1/DOH_3-4_7_1_10.png',
      tag: 'birch',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 6,
      name: 'oakLeaf3',
      src: 'Images_1/DOH_3-4_7_1_11.png',
      tag: 'oak',
      audioSrc: 'sound/dnd_withSlider/008.mp3'
    },
    {
      id: 7,
      name: 'birchLeaf2',
      src: 'Images_1/DOH_3-4_7_1_12.png',
      tag: 'birch',
      audioSrc: 'sound/dnd_withSlider/007.mp3'
    },
    {
      id: 8,
      name: 'mapleLeaf3',
      src: 'Images_1/DOH_3-4_7_1_13.png',
      tag: 'maple',
      audioSrc: 'sound/dnd_withSlider/009.mp3'
    },
  ];
  // это контейнер для данного задания, для каждого нужно будет вписывать свой id, который был присвоен в html
  const task = document.getElementById('task-1');
  // здесь указывается имя папки, где хранятся все картинки к заданиям
  const imageFolder = "Images_1";
  //если нужен фон жля дроп зон(одинаковый для всех, например корзинка) то прописываем путь к картинке, в противном случае са=тавим значение null
 // const dropBackgroundimg = /*`${imageFolder}/DOH_3-4_7_1_5.png`*/null

  renderImagesChronologyMarkup(dropCards, dragCards, task, imageFolder)
})();

function renderImagesChronologyMarkup(dropCards, dragCards, task, imageFolder) {
  let draggingItem;
  let elemBelow;
  let sliderItemWidth;
  let sliderSize;
  let sliderShift = 0;
  let startAction = false

  const interakt_zadanie = task.parentElement;
  const headCheck = interakt_zadanie.previousElementSibling;
  const drop = headCheck.querySelector('.drop');
  const check_your = headCheck.querySelector('.check_your');
  const result = headCheck.querySelector('.result');


  const dropBox = task.querySelector('.withSlider_dropPlaceWrapper');
  const dragBox = task.querySelector('.withSlider_slider_box');
  const leftBtn = task.querySelector('.arrowButton_left_event');
  const rightBtn = task.querySelector('.arrowButton_right_event');
  const dropBoxWidth = dropBox.clientWidth

  //const checkTask = task.querySelector('.checkTask');

  dropBox.insertAdjacentHTML(
    'beforeend',
    createDropPictureCardsMarkup(shuffleCards([...dropCards])),
  );
  dragBox.insertAdjacentHTML(
    'beforeend',
    createDragPictureCardsMarkup(shuffleCards([...dragCards])),
  );

  window.onload = () => {
    sliderSize = dragBox.scrollWidth;
    sliderItemWidth = dragBox.children[0].clientWidth;
    showArrows();
  };

  let sliderWrapperSize = dragBox.offsetParent.clientWidth;

  task.addEventListener('pointerdown', mouseDown);
  drop.addEventListener('click', onBtnResetClick);
  check_your.addEventListener('click', onBtnTestClick);

  leftBtn.addEventListener('click', onBtnLeftClick);
  rightBtn.addEventListener('click', onBtnRightClick);

  dropBox.addEventListener('click', onDropBoxClick);

  function checkButton_classList_changer() {
    if (check_your.classList.contains('check_your_active') && !startAction) {
      check_your.classList.remove('check_your_active');
      check_your.removeEventListener('click', onBtnTestClick);
    } else if (!check_your.classList.contains('check_your_active') && startAction) {
      check_your.removeEventListener('click', onBtnTestClick);
      check_your.classList.add('check_your_active');
      check_your.addEventListener('click', onBtnTestClick);
    }
  }
  function onDropBoxClick(event) {
    if (
      !event.target.classList.contains('withSlider_dropPicture') 
    )
      return;
    scaleImage(event.target, `${imageFolder}/close.png`);
  }

  function showArrows() {
    if (sliderShift === 0) {
      leftBtn.classList.add('is-disabled');
    } else leftBtn.classList.remove('is-disabled');

    if (sliderShift <= -sliderSize + sliderWrapperSize) {
      rightBtn.classList.add('is-disabled');
    } else rightBtn.classList.remove('is-disabled');
  }

  function onBtnLeftClick() {
    sliderSize = dragBox.scrollWidth;
    sliderItemWidth = dragBox.children[0].clientWidth;
    showArrows();
    if (sliderShift < 0) {
      sliderShift += sliderItemWidth;
      dragBox.style.left = `${sliderShift}px`;
      rightBtn.classList.remove('is-disabled');
      if (sliderShift === 0) {
        leftBtn.classList.add('is-disabled');
      }
    }
  }
  function onBtnRightClick(e) {
    sliderSize = dragBox.scrollWidth;
    sliderItemWidth = dragBox.children[0].clientWidth;
    showArrows();
    if (sliderShift > -sliderSize + sliderWrapperSize) {
      sliderShift -= sliderItemWidth;
      dragBox.style.left = `${sliderShift}px`;
      leftBtn.classList.remove('is-disabled');
    }
    if (sliderShift < -sliderSize + sliderWrapperSize) {
      rightBtn.classList.add('is-disabled');
    }
    console.log('rightclick',sliderShift,sliderSize)
  }

  function feedBackChanger(state) {
    if (startAction && state === 'win' || state === 'lose') {
      result.classList.add(`result_${state}`);
    } else {
      result.classList.remove(`result_win`);
      result.classList.remove(`result_lose`);
    }
  }

  function onBtnResetClick() {
    startAction = false;
    checkButton_classList_changer();
    feedBackChanger('reset');
    [...dropBox.children].forEach(item => {
      if (item.children.length > 1) {
        [...item.children[1].children].forEach(el => {
          let randomPos = Math.floor(Math.random() * 12);
          el.style.order = randomPos;
          el.classList.remove('rightChoice_answered')
          el.classList.remove('wrongChoice_answered')
          dragBox.appendChild(el);
        });
      }
    });
    sliderShift = 0;
    sliderSize = dragBox.scrollWidth;
    showArrows();
    dragBox.style.left = `${sliderShift}px`;
    /*controlsBox.style = '';
    infoBox.textContent = '';*/

    draggingItem = null;
    task.addEventListener('pointerdown', mouseDown);
  }
  function onBtnTestClick() {
    let winVar = 0;
    [...dropBox.children].forEach(item => {
      if (item.children[1].children.length > 0) {
        [...item.children[1].children].forEach(el => {
          if (
            item.children[1].attributes.getNamedItem('drop-data').value ===
            el.attributes.getNamedItem('drag-data').value
          ) {
            winVar += 1;
            el.classList.add('rightChoice_answered')
          }else el.classList.add('wrongChoice_answered')
        });
      }
    });
    
    task.removeEventListener('pointerdown', mouseDown);
    if (winVar === dragCards.length) {
      /*controlsBox.style.backgroundColor = 'lightgreen';
      infoBox.textContent = '👍 Молодец!';*/
      feedBackChanger('win');
    } else {
      /*controlsBox.
        style.backgroundColor = 'lightpink';
        infoBox.textContent = '❌ Попробуй еще!';*/
      feedBackChanger('lose');
    }
  }

  function mouseDown(event) {
    if (event.button !== 0) return;
    if (event.target.classList.contains('buttonPlayPausePlayPause_wrap')) {
      return;
    }
    /*if (
      !event.target.classList.contains('dragPicture') &&
      !event.target.classList.contains('dragPicture_box')
      
    )
      return;*/
     if (event.target.classList.contains('withSlider_dragPicture')) {
      draggingItem = event.target.parentElement
    } else if (event.target.classList.contains('withSlider_dragPicture_box')) {
      draggingItem = event.target;
    } else return

    const findIdx = [...dragBox.children].findIndex(el => el === draggingItem);

    draggingItem.style.cursor = 'grabbing';
    draggingItem.style.touchAction = 'none'; //ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ(МОЖНО УБРАТЬ И ПРОПИСАТЬ В СТИЛЬ САМОМУ ОБЪЕКТУ)

    let shiftX = event.clientX - draggingItem.getBoundingClientRect().left;
    let shiftY = event.clientY - draggingItem.getBoundingClientRect().top;
    // ЛИМИТЫ КООРДИНАТ ОГРАНИЧИВАЮЩИЕ ВЫЛЕТ ПЕРЕТАСКИВАЕМОГО ЭЛЕМЕНТА ЗА БЛОК
    //  (ПО УМОЛЧАНИЮ interact_zadanie - РОДИТЕЛЬ ВАШЕГО БЛОКА)
    let limits = {
      top: task.offsetTop,
      right: task.offsetWidth + task.offsetLeft,
      bottom: task.offsetHeight + task.offsetTop,
      left: task.offsetLeft,
    };

    draggingItem.style.position = 'absolute';
    draggingItem.style.zIndex = 1000;
    document.body.appendChild(draggingItem);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      draggingItem.style.left = pageX - shiftX + 'px';
      draggingItem.style.top = pageY - shiftY + 'px';
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
        window.addEventListener('pointerup', moveOut);
      }
      if (event.composedPath().includes(draggingItem)) {
        window.removeEventListener('pointerup', moveOut);
      }

      draggingItem.style.visibility = 'hidden';

      elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      draggingItem.style.visibility = 'visible';

      if (!elemBelow) return;
    }
    document.addEventListener('pointermove', onMouseMove);

    // КОГДА ВО ВРЕМЯ ПЕРЕТАСКИВАНИЯ КУРСОР ВЫНЕСЛИ ЗА ПРЕДЕЛЫ ОКНА БРАУЗЕРА И ОТПУСТИЛИ ЗАХВАТ ЭЛЕМЕНТА
    function moveOut(e) {
      dragAppend(dragBox, draggingItem, findIdx);

      window.removeEventListener('pointerup', moveOut);
      document.removeEventListener('pointermove', onMouseMove);
    }
    draggingItem.addEventListener('pointerup', onpointerup)

    function onpointerup(event) {
      startAction = true;
      checkButton_classList_changer();
      if (clickWithoutMove) {
        /*if (event.target.classList.contains('buttonPlayPausePlayPause_wrap')) {
          onSoundIconClick(event)
          return
        }*/
        if (event.target.classList.contains('withSlider_dragPlace')) {
          setTimeout(
            () =>
              scaleImage(event.target.firstElementChild, `${imageFolder}/close.png`),
            0,
          );
        } else
          setTimeout(() => scaleImage(event.target, `${imageFolder}/close.png`), 0);

        dragAppend(dragBox, draggingItem, findIdx);
      }
      document.removeEventListener('pointermove', onMouseMove);
      draggingItem.style.cursor = 'grab';

      if (elemBelow.classList.contains('withSlider_dropPlace_imageBox')&&(elemBelow.children.length<4)) {
        dropAppend(elemBelow, draggingItem);
      } else if (
        elemBelow.classList.contains('withSlider_dragPicture') &&
        elemBelow.parentElement.parentElement.tagName !== 'BODY' &&
        !elemBelow.parentElement.parentElement.classList.contains(
          'withSlider_slider_box',
        )&&(elemBelow.parentElement.parentElement.children.length<4)
      ) {
        dropAppend(elemBelow.parentElement.parentElement, draggingItem);
      } else if (
        elemBelow.classList.contains('withSlider_dragPlace') &&
        elemBelow.parentElement.parentElement.tagName !== 'BODY' &&
        !elemBelow.parentElement.parentElement.classList.contains(
          'withSlider_slider_box',
        )
      ) {
        dropAppend(elemBelow.parentElement, draggingItem);
      } else {
        dragAppend(dragBox, draggingItem, findIdx);
      }

      const widthChilds = [...dragBox.children].reduce((acc, el) => {
        return (acc = acc + el.clientWidth);
      }, 0);

      sliderSize = widthChilds;
      if (widthChilds <= sliderWrapperSize) {
        rightBtn.classList.add('is-disabled');
      }
      sliderShift = 0;
      sliderSize = dragBox.scrollWidth;
      showArrows();
      dragBox.style.left = `${sliderShift}px`;
      
      draggingItem.removeEventListener('pointerup', onpointerup)
    };
  }

  // функция для смены стилей
  function changeStyles(draggingElem) {
    draggingElem.style.position = 'relative ';
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

  //console.log(widthPic)
  function createDropPictureCardsMarkup(pictures) {
    let widthPic = (100 / dropCards.length) - 2
    return pictures
      .map(picture => {
        return `<div class="withSlider_dropPlace" style="width: ${widthPic}%;">
            <div class="withSlider_dropPicture_box"  style="width: 100%;">

            <img
              class="withSlider_dropPicture"
              src=${picture.src}
              alt=${picture.name}

              draggable="false"
            />
            </div>
            <div drop-data=${picture.tag} class="withSlider_dropPlace_imageBox" style="width: 100%; "></div>
              </div>
                                  `;
      })
      .join('');
  }
  function createDragPictureCardsMarkup(pictures) {
    return pictures
      .map(picture => {
        const isSound =
          picture.audioSrc &&
          /* `<div class="icon_speaker_button dropTitleSound" drop-data=${picture.id}>
                             <div class="icon_speaker_volume"></div>
                             <button class="drag_sound_icon" drop-data=${picture.id}>123</button>
                             <audio class="dndIWS_audio" id=${picture.id} src=${picture.audioSrc} style="display:none">
                               Your browser does not support the <code>audio</code> element.
                             </audio>
                         </div>`*/
          `
                      <div class="buttonPlayPausePlayPause_wrap buttonPlayPause--play" drop-data=${picture.id}>
                        <div class="buttonPlayPause__shape buttonPlayPause__shape--one"></div>
                        <div class="buttonPlayPause__shape buttonPlayPause__shape--two"></div>
                        <audio class="withSlider_dndIWS_audio" id=${picture.id} src=${picture.audioSrc} style="display:none !important">
                              Your browser does not support the <code>audio</code> element.
                            </audio>
                      </div>`
        return `<div

                class="withSlider_dragPicture_box"
                draggable="false"
                drag-data=${picture.tag}
              >
              <img
              class="withSlider_dragPicture"
              src=${picture.src}
              alt=${picture.name}

              draggable="false"
            />
            ${isSound}
              </div>

                                  `;
      })
      .join('');
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

  const audioFiles = task.querySelectorAll(".withSlider_dndIWS_audio");
  const audioIcons = task.querySelectorAll(".buttonPlayPausePlayPause_wrap");

  [...audioIcons].forEach((el) => {
    el.addEventListener("click", onSoundIconClick);
  });
  /*[...audioFiles].forEach((el) =>
    el.addEventListener("ended", (e) => {
      e.target.parentElement.classList.remove("animatingSoundIconPlay");
      e.target.parentElement.classList.remove("staticSoundIconPause");

      isPaused = false;
    })
  );*/

  function onSoundIconClick(e) {
    let isPlaying = false;
    e.stopPropagation()
    //findSoundAndPlayPause("drop-data", e.target);
    const audio = [...audioFiles].find(
      (el) => el.id === e.target.getAttribute('drop-data')
    );
    isPlaying ? audio.pause() : audio.play();
    e.target.classList.toggle('buttonPlayPause--active');
    audio.onplaying = function () {
      isPlaying = true;
    };
    audio.onpause = function () {
      isPlaying = false;
    };
    audio.onended = function () {
      e.target.classList.remove('buttonPlayPause--active');
      isPlaying = false;
    };
    //findedSound.play()
  }
  /*function findSoundAndPlayPause(attrName, target) {
    const findedSound = [...audioFiles].find(
      (el) => el.id === target.attributes.getNamedItem(attrName).value
    );

    if (currentSound && currentSound.id === findedSound.id && !isPaused) {
      currentSound.pause();
      isPaused = true;
      removeActiveCardClass();

      target.classList.add("staticSoundIconPause");
    } else if (currentSound && currentSound.id === findedSound.id && isPaused) {
      currentSound.play();
      isPaused = false;

      // target.classList.add("animatingSoundIconPlay");
      addCheckClass(target);

      target.classList.remove("staticSoundIconPause");
    } else {
      removeActiveCardClass();

      // target.classList.add("animatingSoundIconPlay");
      addCheckClass(target);
      resetSound(currentSound);
      isPaused = false;

      currentSound = findedSound;
      currentSound.play();
    }
  }*/
  function scaleImage(targetEl, imageUrl) {
    let modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.left = 0;
    modal.style.top = 0;
    modal.style.bottom = 0;
    modal.style.right = 0;
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.zIndex = 100;
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.flexDirection = 'column';
    modal.style.alignItems = 'center';
  
    let div = document.createElement('div');
    div.style.width = '50%';
    div.style.height = '80%';
    div.style.textAlign = 'center';
    let img = document.createElement('img');
    if (targetEl.tagName === 'IMG') {
      img.src = targetEl.src;
    } else {
      img.src = targetEl.style.backgroundImage.slice(5, -2);
    }
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
  
    div.append(img);
    modal.append(div);
    let close = document.createElement('div');
    close.style.width = '25px';
    close.style.height = '25px';
    close.style.marginLeft = 'calc(100% - 25px)';
    close.style.cursor = 'pointer';
  
    close.style.backgroundImage = `url(${imageUrl})`;
    div.append(close);
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', () => {
      modal.remove();
      document.body.style.overflow = 'visible';
    });
    document.body.append(modal);
  }

}

