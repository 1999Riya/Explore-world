
function search(){
    if(document.getElementById("search").innerHTML == ""){
        document.getElementById("canadian").innerHTML = "";
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("canadian").innerHTML = "";
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";

    }

    var d=document.getElementById("data").value.toUpperCase();
    if(d.length==0){
        alert("Seach field is empty");
        d.focus();
    }else{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);        
                for( i=0;i<6;i++){
                    var a=obj.meals[i].strMeal;
                    var b=a.toUpperCase();
                    if(b.indexOf(d)>-1){
                        var divContent = document.createElement("div");
                        var h1 = document.createElement("h1");
                        var img = document.createElement("img");
                        var h4 = document.createElement("h4");
                        h4.setAttribute("class","type")
                        divContent.setAttribute("class","items");
                        h1.setAttribute("class","name");
                        img.setAttribute("class","images");
                        h1.innerHTML = obj.meals[i].strMeal;
                        img.setAttribute("src", obj.meals[i].strMealThumb);
                        h4.innerHTML = obj.meals[i].strMeal;
                        divContent.appendChild(img);
                        divContent.appendChild(h1);
                        divContent.appendChild(h4);
                        document.getElementById("search").appendChild(divContent);
                    }else if(b.indexOf(d)>-1){
                        var divContent = document.createElement("div");
                        var h1 = document.createElement("h1");
                        var img = document.createElement("img");
                        var h4 = document.createElement("h4");
                        h4.setAttribute("class","type")
                        divContent.setAttribute("class","items");
                        h1.setAttribute("class","name");
                        img.setAttribute("class","images");
                        h1.innerHTML = obj.drinks[i].strDrink;
                        img.setAttribute("src", obj.drinks[i].strDrinkThumb);
                        h4.innerHTML = obj.drinks[i].strAlcoholic;
                        divContent.appendChild(img);
                        divContent.appendChild(h1);
                        divContent.appendChild(h4);
                        document.getElementById("search").appendChild(divContent);
                    }else{
                        var h2 = document.createElement("h2");
                        h2.innerHTML = "No Data Found!!!";
                        document.getElementById("search").innerHTML = h2;
                    }
                }
            }
        };
        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+d, true);
        xhttp.send();
    }
}

function canadian() {
    if(document.getElementById("canadian").innerHTML == ""){
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("search").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("canadian").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";
    }
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            var obj = JSON.parse(this.responseText);
            var i,j;
            for(i = 0; i < 6; i++)
            {
                var div = document.getElementById("canadian");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.meals[i].strMealThumb);
                img.setAttribute("class","images");
                p.innerHTML = obj.meals[i].strMeal;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian", true);
    xhttp.send();
}
function lovely() {
   
   var str = "CLICK ME TOO!";
  var result = str.link("https://www.foodbloggersofcanada.com/category/food-drink/restaurant-roundup-2/");
  document.getElementById("demo").innerHTML = result;
}
function tail() {
   
   var str = "CLICK ME TOO!";
  var result = str.link("https://www.mocktails.com/");
  document.getElementById("demoi").innerHTML = result;
}
function mail() {
   
   var str = "CLICK ME TOO!";
  var result = str.link("https://cocktailflow.com/");
  document.getElementById("demoii").innerHTML = result;
}
function mocktail() {
    if(document.getElementById("mocktail").innerHTML == ""){
        document.getElementById("search").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";
        document.getElementById("canadian").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";
        document.getElementById("canadian").innerHTML = "";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            var obj = JSON.parse(this.responseText);
            var i,j;
            for(i = 0; i < 6; i++)
            {
                var div = document.getElementById("mocktail");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic", true);
    xhttp.send();
}

function cocktail() {
    if(document.getElementById("cocktail").innerHTML == ""){
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("search").innerHTML = "";
        document.getElementById("canadian").innerHTML = "";
    }else{
        document.getElementById("search").innerHTML = "";
        document.getElementById("mocktail").innerHTML = "";
        document.getElementById("cocktail").innerHTML = "";
        document.getElementById("canadian").innerHTML = "";
    }
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = this.responseText;
            var obj = JSON.parse(this.responseText);
            var i,j;
            for(i = 0; i < 6; i++)
            {
                var div = document.getElementById("cocktail");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","images");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
        }
    };
    xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail", true);
    xhttp.send();
}
