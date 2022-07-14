let searchBtn = document.querySelector("#searchContent");
let inputValue = document.querySelector("#search");


function KeyWords(id, page, keywords) {
    this.id = id;
    this.page = page;
    this.keyWords = keywords;
    return this;
}

const allUserKeywords = [];


const onePiece = new KeyWords("#onePieceSearch", "watch now.html", ["one piece", "zoro", "luffy"]);
const dragonBall = new KeyWords("#dragonBallSearch", "watch now.html", ["dragon ball", "dragon ball z", "dragon ball super", "goku", "vegeta"]);
const jujutsuKaisen = new KeyWords("#jujutsuKaisenSearch", "watch now.html", ["jujutsu kaisen", "jujutsu", "itadori", "gogou", "gogo", "gogou satoru", "satoru"]);


allUserKeywords.push(onePiece);
allUserKeywords.push(dragonBall);
allUserKeywords.push(jujutsuKaisen);

document.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        for (let key of allUserKeywords) {
            for (let i of key.keyWords)
                if (inputValue.value.toLowerCase().trim() == i) {
                    console.log(i);
                    window.location.href = key.page + key.id;
                }
        }
    }
})


searchBtn.addEventListener("click", function () {
    for (let key of allUserKeywords) {
        for (let i of key.keyWords)
            if (inputValue.value.toLowerCase().trim() == i) {
                console.log(i);
                window.location.href = key.page + key.id;
            }
    }
})
