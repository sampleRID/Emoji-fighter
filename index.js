let powers = {
    "🐉": 15,
    "🐥": 1,
    "🐊": 8,
    "🦍": 10,
    "🐢": 5,
    "🐩": 9,
    "🦭": 7,
    "🦀": 6,
    "🐝": 2,
    "🐘": 11,
    "🐸": 4,
    "🕷": 3,
    "🐆": 12,
    "🦕": 14,
    "🦁": 13
};

let fighters = ["🐉", "🐥", "🐊", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage1")
let fightButton = document.getElementById("fightButton")
let result = document.getElementById("result")

fightButton.addEventListener("click", function() {
    let fighter1 = fighters[Math.floor(Math.random()*fighters.length)]
    let fighter2 = fighters[Math.floor(Math.random()*fighters.length)]
    let power1 = powers[fighter1]
    let power2 = powers[fighter2]
    if(power1>power2){
        result.textContent = "Winner is " + fighter1
    }

    else if(power2>power1){
        result.textContent = "Winner is " + fighter2
    }

    else{
        result.textContent = "Draw"
    }
    
    stageEl.textContent = fighter1 + "VS" + fighter2
})
