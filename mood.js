const mood = document.querySelector('h1'),
    happyBtn = document.querySelector('#happy'),
    sadBtn = document.querySelector('#sad'),
    angryBtn = document.querySelector('#angry'),
    confusedBtn = document.querySelector('#confused');

// const changeMood = mood => 

happyBtn.addEventListener('click', () => {
    store.dispatch({ type: "CHANGE_MOOD", payload: "മ◡മ" });
    mood.innerText = store.getState().mood;
});
sadBtn.addEventListener('click', () => {
    store.dispatch({ type: "CHANGE_MOOD", payload: "⊙︿⊙" });
    mood.innerText = store.getState().mood;
});
angryBtn.addEventListener('click', () => {
    store.dispatch({ type: "CHANGE_MOOD", payload: "ಠ╭╮ಠ" });
    mood.innerText = store.getState().mood;
});
confusedBtn.addEventListener('click', () => {
    store.dispatch({ type: "CHANGE_MOOD", payload: "◔_◔" });
    mood.innerText = store.getState().mood;
});