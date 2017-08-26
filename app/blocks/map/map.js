import map from '../../scripts/common/map';
/*eslint-disable*/
export default () => {
  map.then((googleMaps) => {
    // eslint-disable-next-line
    function initSmallMap() {
      const mapElement = document.getElementById('map');
      if (!mapElement) {
        return;
      }
      const mapFrame = new google.maps.Map(mapElement, {
        zoom: 17,
        center: {
          lat: 25.793240,
          lng: -80.351103,
        },
        scrollwheel: false,
      });
      // eslint-disable-next-line
      var marker = new google.maps.Marker({
        position: {
          lat: 25.793240,
          lng: -80.351103,
        },
        map: mapFrame,
      });
    }

    initSmallMap()

    function initializeBranchMap() {
      const mapBranchElement = document.getElementById('map-branch');
      if (!mapBranchElement) {
        return;
      }
      const branchCenter = {
        lat: 48.7297424,
        lng: 5.8553172,
      };
      var mapBranch = new google.maps.Map(mapBranchElement, {
        zoom: 7,
        center: branchCenter,
        scrollwheel: false,
      });
      var image = {
        url: 'assets/images/icon/map-figure.svg',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(52, 71),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(26, 71)
      };
      // eslint-disable-next-line
      var luxemburg = new google.maps.Marker({
        position: {
          lat: 49.6075838,
          lng: 6.0658304,
        },
        icon: image,
        map: mapBranch,
      });
      // eslint-disable-next-line
      var troyes = new google.maps.Marker({
        position: {
          lat: 48.2955989,
          lng: 4.0845315,
        },
        icon: image,
        map: mapBranch,
      });
      // eslint-disable-next-line
      var karlsruhe = new google.maps.Marker({
        position: {
          lat: 49.0054691,
          lng: 8.4050689,
        },
        icon: image,
        map: mapBranch,
      });
    }

    initializeBranchMap()

    $('a[href="#branch"]').click(function() {
      setTimeout(function() {
        initializeBranchMap();
      }, 200);
      console.log('obj');
    });
  }).catch(f => f);
};
