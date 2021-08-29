const keyMap = {
    'KeyA': 'C',
    'KeyW': 'C#',
    'KeyS': 'D',
    'KeyE': 'D#',
    'KeyD': 'E',
    'KeyF': 'F',
    'KeyT': 'F#',
    'KeyG': 'G',
    'KeyY': 'G#',
    'KeyH': 'A',
    'KeyU': 'A#',
    'KeyJ': 'B',
}

document.addEventListener('keydown', (event) => {
    if(keyMap[event.code]) {
        let key = [...document.getElementsByClassName(keyMap[event.code])]
        key[0].classList.add('active-key')
    }
})

document.addEventListener('keyup', (event) => {
    if(keyMap[event.code]) {
        let key = [...document.getElementsByClassName(keyMap[event.code])]
        key[0].classList.remove('active-key')
    }
})