const circles = document.querySelectorAll('.circle');
const scoreDiv = document.querySelector('#score');
const time = document.querySelector('.time');
const startBtn = document.querySelector('#start-game');

//Tạo nội dung cho các circle:
for(let i=0; i<circles.length; i++)
{
    circles[i].innerHTML = String(i+1);
}

//FUNCTIONS:
//Random number:
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//Hàm thay đổi vị trí:
function ChangePosition()
{
    for(let i=0; i<circles.length; i++)
    {
        let top = getRandomIntInclusive(10,90);
        let left = getRandomIntInclusive(10,90);
        circles[i].style.top = top + '%';
        circles[i].style.left = left + '%';
        circles[i].style.transform = `translate(-${left}%, -${top}%)`;
        circles[i].style.animationPlayState = 'running';
    }
}
//Hàm game play:
function GamePlay(sec, min, hour)
{
    let temp = 1;
    for(let i = 0; i<circles.length; i++)
    {
        let count = 0; //Đếm số lần ấn sai một nút. Nếu không sai lần nào thì được cộng điểm.
        circles[i].addEventListener('click', function(){
            if(parseInt(temp) == parseInt(circles[i].innerHTML))
            {
                if(count < 1)
                {
                    scoreDiv.innerHTML = parseInt(scoreDiv.innerHTML) + 1;
                }
                circles[i].style.display = "none";
                temp = temp + 1;
            }
            else
            {
                circles[i].style.backgroundColor = "rgba(255,0,0,0.3)";
                // count++;
            }
        });
    }
}
//Tính thời gian:
function ExecutionTime(start, end)
{
    let h = 0;
    let m = 0;
    let s = start;
    //Điều kiện dừng:
    if (parseInt(h * 3600 + m * 60 + s) > parseInt(end)) {
        for (let i = 0; i < circles.length; i++) {
            circles[i].style.top = '50%';
            circles[i].style.left = '50%';
            circles[i].style.transform = 'translate(-50%, -50%)';
        }
        return;
    }
    //Xuất thời gian:
    if (s < 10) {
        s = '0' + s;
    }
    else if (s >= 60) {
        m = m + 1;
        s = s % 60;
    }
    if (m < 10) {
        m = '0' + m;
    }
    else if (m >= 60) {
        h = h + 1;
        m = m % 60;
    }
    if (h < 10) {
        h = '0' + h;
    }
    time.innerHTML = h + ':' + m + ':' + s;
    setTimeout(ExecutionTime, 1000, (start + 1), end);
}
function ExecuteGame()
{
    //Reset lại điểm:
    scoreDiv.innerHTML = 0;
    //Thay đổi vị trí các phần tử circle:
    ChangePosition();
    //Tính thời gian:
    let setTime = setTimeout(ExecutionTime, 0, 0, 3);
    //Game play:
    let play = setTimeout(GamePlay, 0);
}

//MAIN:
startBtn.addEventListener('click', ExecuteGame);
