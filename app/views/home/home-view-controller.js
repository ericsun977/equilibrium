(function() {

  'use strict';

  angular
    .module('equilibriumnj')
    .controller('HomeViewController', HomeViewController);

  HomeViewController.$inject = ['$state', 'MetaDataService'];

  /* @ngInject */
  function HomeViewController($state, MetaDataService) {

    var metaData = {
      pageDescription: 'Equilibrium is a leading holistic clinic delivering advanced Physical Therapy, Chiropractic and Acupuncture to people in the Fort Lee, NJ and surrounding areas.'
    };

    MetaDataService.setData(metaData);

  }

})();
