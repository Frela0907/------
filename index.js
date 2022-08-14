// 讀取畫面
$(window).load(function () { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(2000).fadeOut(2000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(2000).fadeOut(2000);
})

// 初始化Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

function CreatePopover(element) {
    var popover = new bootstrap.Popover(document.querySelector('.popover'), {
        container: 'body'
    })
    popover.show()
}


//Bootstrap 模板
let briefIntroReplace = [
    ['諮商輔導', `
    學校科系 : 國立東華大學 諮商與臨床心理學系<br />
    就讀時間 : 2016/9 ~ 2020/6<br />
    職位、經歷、作品 : 
    <span class="fs-6 badge bg-primary">分組專題</span> 
    <span class="fs-6 badge bg-primary">書卷獎</span>
    <p class="fs-6 border border-2 rounded">
        2018年 本年度獲得國立東華大學諮商與臨床心理學系『106學年度書卷獎』，尤其在心理系專業科目上得到許多老師之肯定。（附綠一）<br />
    </p>

    條列技能 : 
    <span class="DataPopover fs-6 badge bg-success">教育&輔導</span>
    <span class="fs-6 badge bg-success">諮商&療育</span>
    <span class="fs-6 badge bg-success">臨床精神診斷</span>
    <span class="fs-6 badge bg-success">實驗&統計分析</span>
    `],
    ['社會學', `
    學校科系 : 國立東華大學 社會學系(雙主修)<br />
    就讀時間 : 2016/9 ~ 2020/6<br />
    職位、經歷、作品 : 
    <span class="fs-6 badge bg-primary">研究助理</span> 
    <span class="fs-6 badge bg-primary">大專生科技部計畫</span>
    <p class="fs-6 border border-2 rounded">
        
    </p>

    條列技能 : 
    <span class="fs-6 badge bg-success">SPSS</span>
    <span class="fs-6 badge bg-success">申請與執行研究計畫</span>
    <span class="fs-6 badge bg-success">撰寫研究報告與論文</span>
    <span class="fs-6 badge bg-success">統計軟體操作</span>
    <span class="fs-6 badge bg-success">調查樣本統計分析</span>
    <span class="fs-6 badge bg-success">市場調查資料分析與報告撰寫</span>
    `],
    ['心理學', `
    學校科系 : 國立中正大學 心理學研究所<br />
    就讀時間 : 2020/9 ~ 2022/9<br />
    職位、經歷、作品 : 
    <span class="fs-6 badge bg-primary">工商心理實務工作坊</span> 
    <span class="fs-6 badge bg-primary">組織行為研究工作坊</span>
    <span class="fs-6 badge bg-primary">碩論</span>
    <p class="fs-6 border border-2 rounded">
        
    </p>
    條列技能 : 
    <span class="fs-6 badge bg-success">SPSS</span>
    <span class="fs-6 badge bg-success">EXCEL</span>
    <span class="fs-6 badge bg-success">M-plus</span>
    `],
    ['人力資源', `
    學校科系 : 國立中正大學 勞工關係研究所(輔所)<br />
    就讀時間 : 2020/9 ~ 2022/9<br />
    職位、經歷、作品 : 
    <span class="fs-6 badge bg-primary">課程專題小論文</span> 
    <p class="fs-6 border border-2 rounded">
        
    </p>
    條列技能 : 
    <span class="fs-6 badge bg-success">勞工保險相關法規</span>
    <span class="fs-6 badge bg-success">績效與薪酬管理</span>
    <span class="fs-6 badge bg-success">具備人力資源相關知識</span>
    <span class="fs-6 badge bg-success">召募任用制度設計</span>
    <span class="fs-6 badge bg-success">員工教育訓練與需求分析</span>
    <span class="fs-6 badge bg-success">人員培訓、激勵、輔導與管理</span>
    <span class="fs-6 badge bg-success">勞工安全相關法規</span>
    <span class="fs-6 badge bg-success">報表彙整與管理</span>
    <span class="fs-6 badge bg-success">制定與管理部門各類績效指標</span>
    `],
    ['網頁前端', `
    學校科系 : UI/UX付費課程、前端訓練營<br />
    就讀時間 : 2022/3 ~ 2023/1<br />
    職位、經歷、作品 : 
    <span class="fs-6 badge bg-primary">課程證書</span> 
    <span class="fs-6 badge bg-primary">訓練營作業_github</span>
    <span class="fs-6 badge bg-primary">個人網頁履歷_github</span>
    <p class="fs-6 border border-2 rounded">
        
    </p>
    條列技能 : 
    <span class="fs-6 badge bg-success">HTML5</span>
    <span class="fs-6 badge bg-success">CSS3</span>
    <span class="fs-6 badge bg-success">JavaScript ES6</span>
    <span class="fs-6 badge bg-success">Bootstrap</span>
    <span class="fs-6 badge bg-success">RWD</span>
    <span class="fs-6 badge bg-success">Restful API</span>
    `]
]
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
<img id="Default_img" src="bluecat.png" class="shadow rounded mx-auto d-block"
alt="...">
`

// 變數與容器
let LeftContainer = null
let RightPage = null
let BookmarkGroup = null
let DataPopoverList = null
let width;
UpdateDOMElement()

function UpdateDOMElement() {
    LeftContainer = document.querySelector(".leftContainer");
    RightPage = document.querySelector(".rightPage");
    BookmarkGroup = document.querySelector(".btn-group");
    DataPopoverList = document.querySelectorAll(".DataPopover");
}
// Function
function ReplaceBriefIntroHTML(PageNum) {
    let BriefIntroHTML = `
    <!-- 簡短介紹 -->
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">${briefIntroReplace[PageNum][0]}</h5>
        <p class="card-text">${briefIntroReplace[PageNum][1]}</p>
    </div>
    </div>
    `
    return BriefIntroHTML
}
function initLeftContainer() {
    width = $(window).width();
    let articleHTML = ``
    if (width >= 768) {
        articleHTML += `
        <ul class="list-group shadow">
            <li button type="button" class="list-group-item">&emsp;個人資料</li>
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
        `
    } else {
        articleHTML += `
        <span class="badge rounded-pill bg-primary"><i class="fa-fw fas fa-user-circle"></i> 馬儀鈞</span>
        <span class="badge rounded-pill bg-secondary"><i class="fa-fw fas fa-female"></i> 女</span>
        <span class="badge rounded-pill bg-success"><i class="fa-fw fas fa-birthday-cake"></i> 24歲</span>
        <span class="badge rounded-pill bg-danger"><i class="fa-fw fas fa-graduation-cap"></i> 國立中正大學心理研究所</span>
        <span class="badge rounded-pill bg-warning text-dark"><i class="fa-fw fas fa-phone"></i> 0963-012-743</span>
        <span class="badge rounded-pill bg-info text-dark"><i class="fa-fw fas fa-envelope"></i> <a href="mailto:frela0907@gmail.com">frela0907@gmail.com</a></span>
        `
    }
    return articleHTML
}

//初始化
{
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
        ${initLeftContainer()}
        </div>
    </div>
`
    RightPage.innerHTML = DefaultImgHTML
}

// RWD 頁面大小改變觸發事件
{
    $(window).resize(function () {
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
            ${initLeftContainer()}
            </div>
        </div>
        `
    });
}


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

BookmarkGroup.addEventListener("click", function (event) {
    switch (event.target.className) {
        case "btn-one btn fs-6":
            RightPage.innerHTML =
                SideShowHTML + ReplaceBriefIntroHTML(0)
            break;
        case "btn-two btn fs-6":
            RightPage.innerHTML =
                SideShowHTML + ReplaceBriefIntroHTML(1)
            break;
        case "btn-three btn fs-6":
            RightPage.innerHTML =
                SideShowHTML + ReplaceBriefIntroHTML(2)
            break;
        case "btn-four btn fs-6":
            RightPage.innerHTML =
                SideShowHTML + ReplaceBriefIntroHTML(3)
            break;
        case "btn-five btn fs-6":
            RightPage.innerHTML =
                SideShowHTML + ReplaceBriefIntroHTML(4)
            break;
    }
    //更新右ＤＯＭ
    UpdateDOMElement()
})


// Popover 觸發事件
{
    DataPopoverList.forEach(element => {
        element.addEventListener("mouseover", function (event) {
            console.log("triggered")
        })
    })
}