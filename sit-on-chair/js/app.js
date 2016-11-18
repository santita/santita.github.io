document.addEventListener("DOMContentLoaded", function () {
    //--Wysuwane menu--
    var list = document.querySelector("li.mainMenu");
    var subMenu = document.querySelector(".subMenuList");

    list.addEventListener("mouseover", function () {

        subMenu.style.display = "block";
    });
    list.addEventListener("mouseout", function () {

        subMenu.style.display = "none";
    });
    // --end--
    //--Gallery--
    var photos = document.querySelectorAll(".photo1,.photo2");


    for (var i = 0; i < photos.length; i++) {
        photos[i].addEventListener("mouseover", function () {
            this.children[0].style.visibility = "hidden";
        });

        photos[i].addEventListener("mouseout", function () {
            this.children[0].style.visibility = "visible";
        });
    }
    //    Gallery -- end --

    //    Slider
    var btnNext = document.getElementById("nextPicture");
    var btnPrev = document.getElementById("prevPicture");
    var list = document.querySelectorAll(".banner ul li");
    var counter = 0;

    list[counter].classList.add("visible");

    btnNext.addEventListener("click", function (event) {
        console.log("klik, klik...")
        list[counter].classList.remove("visible");
        counter += 1;

        if (counter == list.length) {
            counter = 0;
        };

        list[counter].classList.add("visible");

    });
    btnPrev.addEventListener("click", function (event) {
        //console.log("klik, klik...")


        list[counter].classList.remove("visible");
        counter -= 1;

        if (counter < 0) {
            counter = list.length - 1;
        };

        list[counter].classList.add("visible");

    });
    //  --- Slider ---end---
    //------------ Kalkulator ----------------
    var listPanel = document.querySelectorAll('.listPanel');
    for (var i = 0; i < listPanel.length; i++) {
        listPanel[i].style.display = 'none';
    };

    var arrow = document.querySelectorAll(".listArrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", function () {

            var el = this.nextElementSibling;

            if (el.style.display === "none") {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }

        });
    };
    var sumCost = 0;
    var sumTotal = document.querySelector('.sum');
    var chairValue = document.querySelector('.title.value');
    var colorValue = document.querySelector('.color.value');
    var patternValue = document.querySelector('.pattern.value');
    var transportValue = document.querySelector('.transport.value');

    chairValue.innerHTML = 0;
    colorValue.innerHTML = 0;
    patternValue.innerHTML = 0;
    transportValue.innerHTML = 0;

    price = 0;
    patternPrice = 0;
    priceTransport = 0;

    //get text from dropdown
    var chairs = document.querySelector('.listPanel').children;
    for (var i = 0; i < chairs.length; i++) {
        chairs[i].addEventListener('click', function () {

            var choseChair = this.innerHTML;
            var chairName = document.querySelector('.title');

            var price = Number(this.getAttribute('data-price'));
            
            var chairPrice = document.querySelector('.title.value');
            chairPrice.innerHTML = Number(0);
            //    name to panel left
            chairName.innerHTML = choseChair;
            //    price to panel right
            chairPrice.innerHTML = price;
            this.parentElement.style.display = "none";
            sumAll();        });
    }
    var colors = document.querySelectorAll('.listPanel')[1].children;
    for (var i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', function () {
            var choseColor = this.innerHTML;
            var chairColor = document.querySelector('.color');
            var priceColor = Number(this.getAttribute('data-price'));
            var setColorPrice = document.querySelector('.color.value');
            chairColor.innerHTML = choseColor;
            setColorPrice.innerHTML = priceColor;
            sumAll();
            this.parentElement.style.display = "none";
        });
    };
    var patterns = document.querySelectorAll('.listPanel')[2].children;
    for (var i = 0; i < patterns.length; i++) {
        patterns[i].addEventListener('click', function () {
            var chosePattern = this.innerHTML;
            var chairPattern = document.querySelector('.pattern');
            var setPatternPrice = document.querySelector('.pattern.value');
            var patternPrice = Number(this.getAttribute('data-price'));
            chairPattern.innerHTML = chosePattern;
            setPatternPrice.innerHTML = patternPrice;
            sumAll();
            this.parentElement.style.display = "none";
        });
    }
    //transport value
    var checkTransport = document.querySelector('#transport');

    checkTransport.addEventListener('click', function () {
        var priceTransport = Number(checkTransport.getAttribute('data-transport-price'));
        var transport = document.querySelector('.transport');
    

        if (checkTransport.checked) {
            transport.innerText = "Transport";            
            transportValue.innerText = priceTransport;
            sumAll();
        } else {
            transportValue.innerText = 0;            
            sumAll();
        }
    });

    var sumAll = function () {
        var sum = Number(chairValue.innerHTML) + Number(colorValue.innerHTML) + Number(patternValue.innerHTML) + Number(transportValue.innerHTML);
        sumTotal.innerHTML = sum;
    }
    sumAll();
});
