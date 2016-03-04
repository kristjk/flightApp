(function(){

  var flightService = function($http, $log){
    $log.info("flightService -> Startup")
    var flightServiceURL = "http://apis.is/flight";
    var getFlights = function(lang, type){
      $log.log("getFlights - Language : " + lang + " - Type : " + type.value);
      return $http.get(flightServiceURL + "?language=" + lang + "&type=" + type.value)
            .then(function(response){
              return response.data;
        });
    };
    
    return {
      getFlights: getFlights
    };

  };

  var myModule = angular.module("flightApp");
  myModule.factory("flightService", flightService);

})();