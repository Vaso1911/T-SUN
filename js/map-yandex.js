ymaps.ready(init);
function init() {
  // const mapElem = document.getElementById('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.760798, 37.619773],
      zoom: 16,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  var myPlacemark = new ymaps.Placemark( [55.760798, 37.619773], {}, {
    preset: 'islands#brownIcon',
});
  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}