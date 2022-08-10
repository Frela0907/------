$(window).load(function () { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(2000).fadeOut(2000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(2000).fadeOut(2000);
})

//Bootstrap 模板

let LeftPage = document.querySelector(".leftPage");
let RightPage = document.querySelector(".rightPage");

//初始化
//LeftPage 將資料搬到ＪＳ中用inner html放入

// {
//     let leftPageHTML = ``;
//     LeftPage.innerHTML = leftPageHTML;
// }

LeftPage.addEventListener("mouseover", function (event) {
    LeftPage.style.zIndex = 10;
})

RightPage.addEventListener("mouseover", function (event) {
    RightPage.style.zIndex = 10;
})

LeftPage.addEventListener("mouseout", function (event) {
    LeftPage.style.zIndex = 0;
})

RightPage.addEventListener("mouseout", function (event) {
    RightPage.style.zIndex = 0;
})