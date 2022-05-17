window.onload = function () {
    document.getElementById("menu").onclick = function(){
    var x = document.getElementById('myTopnav');
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
};

function init(){ //location карта yandex
    let map = new ymaps.Map('map',{
        center:[59.91757334340399,30.41670138036452],
        zoom: 16,
    });
    // удаляем
        map.controls.remove('geolocationControl'); // геолокацию
        map.controls.remove('searchControl'); // поиск
        map.controls.remove('trafficControl'); //  контроль трафика
        map.controls.remove('typeSelector'); // тип
        map.controls.remove('fullscreenControl'); //  кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); //  контрол зуммирования
        map.controls.remove('rulerControl'); //  контрол правил
        //map.behaviors.disable(['scrollZoom']);  скролл карты 
}

ymaps.ready(init);