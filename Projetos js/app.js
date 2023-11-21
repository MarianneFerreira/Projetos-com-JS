const colors = ["blue", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorv = document.querySelector('.color');

btn.addEventListener('click', function(){
    // get radom number between 0 -3 colors[3]
    const randomNuber = 2;
    document.body.style.backgroundColor = colors[randomNuber];
    color.textContent = colors[randomNuber];
});  

function getRandomNuber() {
    return Math.floor.(Math.random() * colors.length);
}