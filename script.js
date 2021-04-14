const container = document.querySelector('.container');

const createBox = (count) => {
    for (let i = 0; i < count; i++) {
        const box = document.createElement('div');
        const box__count = document.createElement('div');
        box.className = 'box';
        box__count.className = 'box__count';
        box__count.textContent = i+1;
        container.append(box);
        box.append(box__count);
        box.addEventListener('click', boxClick)
    }
}

const createDropMenu = (target) => {
    if (target.className.includes("drop-menu")) return;
    const calcSide = () => {
        const elWidth = target.offsetWidth * 4 / 10;
        const boDyWidth = target.offsetParent.offsetWidth;
        const offsetLeft = target.offsetLeft;

        return boDyWidth - offsetLeft - elWidth > boDyWidth / 3 ? "right" : "left"
    }
    const oldDropMenu = document.querySelector('.drop-menu')

    if (oldDropMenu) oldDropMenu.remove()
    const dropMenu = document.createElement('div');
    dropMenu.className = 'drop-menu';
    target.append(dropMenu);
    dropMenu.classList.add(calcSide());

    for (let i = 0; i < 4; i++) {
        const dropMenuOption = document.createElement('div');
        dropMenuOption.className = 'drop-menu__option';
        dropMenuOption.textContent = `опция ${i+1}`
        dropMenu.appendChild(dropMenuOption)
    }
}

function boxClick (e) {
    createDropMenu (e.target.className === "box" ? e.target : e.target.parentElement)
}

container.onclick = (e) => {
    const oldDropMenu = document.querySelector('.drop-menu')
    if (e.target.className === "container") {
        if (oldDropMenu) oldDropMenu.remove()
    }
}

createBox(14)