let cats = $(".cat .nav-link")
let cons = $(".con .nav-link")
let news
let category = `general`
let country = `in`
let req
if (window.XMLHttpRequest) {
    // code for modern browsers
    req = new XMLHttpRequest();
} else {
    // code for old IE browsers
    req = new ActiveXObject("Microsoft.XMLHTTP");
}
getData()

for (let i = 0; i < cats.length; i++) {
    cats[i].addEventListener("click", function (e) {
        category = e.target.innerHTML;
        getData()
    })
}
for (let i = 0; i < cons.length; i++) {
    cons[i].addEventListener("click", function (e) {
        country = e.target.innerHTML;
        getData()
    })
}

function getData() {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5a35d22c15a3465da89787bc8e207cb5`
    req.open("GET", url)
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            news = JSON.parse(req.response);
            news = news.articles;
            displayData()
        }
    }
    req.send();
}

function displayData() {
    let temp = ""
    for (let i = 0; i < news.length; i++) {
        temp += `<div class="col-md-3 boxdata" >
                <div class="item">
                <img src=${news[i].urlToImage} class="img-fluid" >
                   <a href="${news[i].url}" class="tittle" target="_blank" <h3>${news[i].title}</h3></a>
                    <p class="text-muted">${news[i].description}</p>
                </div>
            </div>`
    }




    $("#rowData").html(temp)
}