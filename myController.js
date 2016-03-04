// Code goes here
var app = angular.module('flightApp', ['ngGrid']);

app.controller('myController', function($scope, $log, flightService) {
  
  $scope.types = [
    {name:'Arrivals', value: 'arrivals'},
    {name:'Departures', value: 'departures'}];
  
  $scope.gridOptionsDepartures = {
	  enableColumnResizing: true,
      data: 'flights'
      ,columnDefs: [
        {field: 'date', displayName: 'Date', width: '90px'}, 
        {field: 'flightNumber', displayName:'Flight nr.', width: '120px'},
        {field: 'airline', displayName: 'Airline', width: '200px'},
        {field: 'to', displayName: 'To', width: '120px'},
        {field: 'plannedArrival', displayName: 'Will arrive', width: '100px'},
        {field: 'realArrival', displayName: 'Arrived at', width: '100px'},
        {field: 'status', displayName: 'Status'}]
  };
  $scope.gridOptionsArrivals = { 
      data: 'flights'
      ,columnDefs: [
        {field: 'date', displayName: 'Date', width: '90px'}, 
        {field: 'flightNumber', displayName:'Flight nr.', width: '120px'},
        {field: 'airline', displayName: 'Airline', width: '200px'},
        {field: 'from', displayName: 'From', width: '120px'},
        {field: 'plannedArrival', displayName: 'Will arrive', width: '100px'},
        {field: 'realArrival', displayName: 'Arrived at', width: '100px'},
        {field: 'status', displayName: 'Status'}]
  };

  $scope.showArrivals = function(){
    if ($scope.type)
      return $scope.type.value === 'arrivals';
    return false;
  }

  $scope.showDepartures = function(){
    if ($scope.type)
      return $scope.type.value === 'departures';
    return false
  }

  var onComplete = function(data) {
    $scope.flights = data.results;
    //$scope.gridOptions = gridOptionsArrivals;
    //$log.info("To Visible : " + $scope.gridOptions.columnDefs[3].visible);
    //$scope.gridOptions.columnDefs[3].visible = aVisible;
    //$scope.gridOptions.columnDefs[4].visible = dVisible;
    //$log.info("To Visible : " + $scope.gridOptions.columnDefs[3].visible);
  };
  
  var onError = function(reason) {
    $scope.error = "Could not fetch data";
};
  
  $scope.getFlights = function(type){
    $log.info("flightController.getFlights : " - type);
    //aVisible = type.value === 'arrivals';
    //dVisible = type.value === 'departures';
    flightService.getFlights("en", type).then(onComplete, onError);
  }
});

app.$inject = ['$scope', '$log', 'flightService'];