$(window).load(function () { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(2000).fadeOut(2000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(2000).fadeOut(2000);
})

let briefIntroReplace = [
    '諮商輔導',
    '社會學',
    '心理學',
    '人力資源',
    '網頁前端'
]
//Bootstrap 模板
let SideShowHTML = `
<!-- 圖片輪播 -->
<div id="carouselExampleCaptions" class="carousel slide pb-5" data-bs-ride="carousel">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="sunbear.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="nightbear.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
        </div>
        <div class="carousel-item">
            <img src="skybear.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
`
function ReplaceBriefIntroHTML(PageNum) {
    let BriefIntroHTML = `
    <!-- 簡短介紹 -->
    <div class="card">
        <div class="card-body shadow">
            ${briefIntroReplace[PageNum]}
        </div>
    </div>
    `
    return BriefIntroHTML
}

let PageSelectHTML = `
<!-- 頁面選擇 -->
<div class="pageSelect">
    <nav aria-label="Page navigation">
        <ul class="pagination position-absolute bottom-0 start-0 m-3">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
`
let MoreHTML = `
<!-- MORE -->
<div class="more">
    <button type="button" class="btn-more btn shadow position-absolute bottom-0 end-0 fs-6 m-3">
        More
    </button>
</div>
`
let DefaultImgHTML = `

`

let LeftContainer = document.querySelector(".leftContainer");
let RightPage = document.querySelector(".rightPage");
let BookmarkGroup = document.querySelector(".btn-group");


//初始化
//LeftPage 將資料搬到ＪＳ中用inner html放入
LeftContainer.innerHTML = `
<!-- 左頁 -->
<div class="leftPage">
    <!-- 頭貼 -->
    <div class="image">
        <img id="Myself_img" src="resume_picture.jpg" class="rounded-circle shadow rounded mx-auto d-block"
            alt="...">
    </div>
    <!-- 個人資料 -->
    <div class="article">
        <ul class="list-group shadow">
            <li class="list-group-item">&emsp;個人資料</li>
            <li class="list-group-item">
                <i class="fa-fw fas fa-user-circle"></i>&emsp;姓名：馬儀鈞<br>
                <i class="fa-fw fas fa-female"></i>&emsp;性別：女<br>
                <i class="fa-fw fas fa-birthday-cake"></i>&emsp;生日：1997/10/8 ; 年齡：24歲<br>
                <i class="fa-fw fas fa-graduation-cap"></i>&emsp;學歷：國立中正大學心理研究所 就學中<br>
                <i class="fa-fw fas fa-phone"></i>&emsp;主要手機：0963-012-743<br>
                <i class="fa-fw fas fa-envelope"></i>&emsp;E-mail：<a
                    href="mailto:frela0907@gmail.com">frela0907@gmail.com</a><br>
                <i class="fa-fw fas fa-map-marker-alt"></i>&emsp;通訊地址：嘉義市文中街***
            </li>

        </ul>
    </div>
</div>
`
RightPage.innerHTML = `
<img id="Default_img" src="bluecat.png" class="Zshadow rounded mx-auto d-block"
alt="...">
`


// 左右頁上下切換
{
    LeftContainer.addEventListener("mouseover", function (event) {
        LeftContainer.style.zIndex = 10;
    })
    RightPage.addEventListener("mouseover", function (event) {
        RightPage.style.zIndex = 10;
    })
    LeftContainer.addEventListener("mouseout", function (event) {
        LeftContainer.style.zIndex = 0;
    })
    RightPage.addEventListener("mouseout", function (event) {
        RightPage.style.zIndex = 0;
    })
}

// 右頁內容替換
{
    BookmarkGroup.addEventListener("click", function (event) {
        switch (event.target.className) {
            case "btn-one btn fs-6":
                RightPage.innerHTML =
                    SideShowHTML + ReplaceBriefIntroHTML(0) + PageSelectHTML + MoreHTML
                break;
            case "btn-two btn fs-6":
                RightPage.innerHTML =
                    SideShowHTML + ReplaceBriefIntroHTML(1) + PageSelectHTML + MoreHTML
                break;
            case "btn-three btn fs-6":
                RightPage.innerHTML =
                    SideShowHTML + ReplaceBriefIntroHTML(2) + PageSelectHTML + MoreHTML
                break;
            case "btn-four btn fs-6":
                RightPage.innerHTML =
                    SideShowHTML + ReplaceBriefIntroHTML(3) + PageSelectHTML + MoreHTML
                break;
            case "btn-five btn fs-6":
                RightPage.innerHTML =
                    SideShowHTML + ReplaceBriefIntroHTML(4) + PageSelectHTML + MoreHTML
                break;
        }
    })
}