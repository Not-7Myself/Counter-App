const result = document.querySelector('#result');

const add = document.querySelector('#Add').addEventListener('click', addCount);
const remove = document.querySelector('#Remove').addEventListener('click', rmCount);

//Function for Adding Count
function addCount(e) {
    e.preventDefault();

    //Add Count
    result.innerHTML = parseInt(result.innerHTML) + 1;
};

//Function for Removing Count
function rmCount(e) {
    e.preventDefault();

    //Add Count
    result.innerHTML = parseInt(result.innerHTML) - 1;
};