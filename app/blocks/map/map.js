import map from '../../scripts/common/map';

export default () => {
  const mapElement = document.getElementById('map');
  if (!mapElement) {
    return;
  }
  map.then((googleMaps) => {
    // eslint-disable-next-line
    const mapFrame = new googleMaps.Map(mapElement, {
      zoom: 17,
      center: {
        lat: 25.793240,
        lng: -80.351103,
        zoom: 17,
        scrollwheel: false,
      },
    });
    // eslint-disable-next-line
    var marker = new google.maps.Marker({
      position: {
        lat: 25.793240,
        lng: -80.351103,
      },
      map: mapFrame,
    });
  }).catch(f => f);
};
