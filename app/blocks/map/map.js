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

    initSmallMap();

    function initBranchMap() {
      const mapBranchElement = document.getElementById('map-branch');
      if (!mapBranchElement) {
        return;
      }
      const branchCenter = {
        lat: 48.7297424,
        lng: 5.8553172,
      };
      const mapBranch = new google.maps.Map(mapBranchElement, {
        zoom: 7,
        center: branchCenter,
        scrollwheel: false,
      });
      const image = {
        url: 'assets/images/icon/figure.png',
      };
      // eslint-disable-next-line
      const luxemburg = new google.maps.Marker({
        position: {
          lat: 49.6075838,
          lng: 6.0658304,
        },
        icon: image,
        map: mapBranch,
      });
      // eslint-disable-next-line
      const troyes = new google.maps.Marker({
        position: {
          lat: 48.2955989,
          lng: 4.0845315,
        },
        icon: image,
        map: mapBranch,
      });
      // eslint-disable-next-line
      const karlsruhe = new google.maps.Marker({
        position: {
          lat: 49.0054691,
          lng: 8.4050689,
        },
        icon: image,
        map: mapBranch,
      });
    }

    initBranchMap();

    $('a[href="#branch"]').click(function() {
      setTimeout(function() {
        initBranchMap();
      }, 200);
    });

    function initJobMap() {
      const mapJobElement = document.getElementById('map-job');
      if (!mapJobElement) {
        return;
      }
      const jobCenter = {
        lat: 47.8111474,
        lng: 13.0503576,
      };
      const mapJob = new google.maps.Map(mapJobElement, {
        zoom: 8,
        center: jobCenter,
        scrollwheel: false,
      });
      const image = {
        url: 'assets/images/icon/figure.png',
      };
      // eslint-disable-next-line
      var marker = new google.maps.Marker({
        position: jobCenter,
        map: mapJob,
        icon: image,
      });
    }

    initJobMap();

  }).catch(f => f);
};
