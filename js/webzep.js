$(document).ready(function(){


////////////////////////////////////

$(".btn-menu").click(function(){
  $(this).toggleClass("active");
  $("nav").toggleClass("active");
});
////////////////////////////////////


$(".m-slider-item-first .btn-pink").click(function(e){
  e.preventDefault();
  $(this).closest(".m-slider-item-first").addClass("hide");
  $(this).closest(".m-slider-item").find(".m-slider-item-second").addClass("active");
})
/////////////////////////////////////

$('.main-slider').slick({
  fade: true,
  dots: true,
  arrows: false
});

$(".m-slider-controls .arrows-right-large").click(function(){
  $('.main-slider').slick("slickNext");
});
$(".m-slider-controls .arrows-left-large").click(function(){
  $('.main-slider').slick("slickPrev");
});

//////////////////////////////////
$('.multiple-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false
});


//////////////////////////////////


/////////////////////////////

$(".form-validate").validate({
        rules: {
        name: "required",
        phone: "required",
        email: "required",
        comment: "required"
      },
      messages: {
        company: false,
        phone: false,
        email: false,
        comment: false
      }

});
/////////////////////////////
          var myMap;

          // Дождёмся загрузки API и готовности DOM.
          ymaps.ready(init);

          function init () {
              // Создание экземпляра карты и его привязка к контейнеру с
              // заданным id ("map").
              myMap = new ymaps.Map('map', {
                  // При инициализации карты обязательно нужно указать
                  // её центр и коэффициент масштабирования.
                  center: [55.78047128, 49.13345350], // Москва
                  zoom: 15,
                  controls:[]
              });

          var myPlacemark = new ymaps.Placemark([55.78047128, 49.13345350],
             {
            // Свойства.
            hintContent: 'г. Казань, ул. Петербургская, д. 52'
        },
            {
            iconImageHref: 'i/mark.png',
            iconImageSize: [110, 120],
            iconImageOffset: [0, 0]
            });

          myMap.behaviors.disable('scrollZoom');
          myMap.geoObjects.add(myPlacemark);

          }

});