const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(journeys) {
const startLocations = []
this.journeys.map((journey)=>{
return startLocations.push(journey.startLocation)
})
return startLocations
};

Traveller.prototype.getJourneyEndLocations = function (journeys) {
  const endLocations = []
  this.journeys.map((journey)=>{
  return endLocations.push(journey.endLocation)
  })
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
const locationsByTransport = []
this.journeys.filter( (journey) => {
  if (journey.transport === transport) {
    locationsByTransport.push(journey)
  }
})
return locationsByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
const locationsByMinDistance = []
this.journeys.filter ((journey) => {
if (journey.distance > minDistance) {
  locationsByMinDistance.push(journey)
};
});
return locationsByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
let total = 0
return this.journeys.reduce ((total, journey) => {
return total += journey.distance
}, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modes = []
this.journeys.forEach(journey => {
  modes.push(journey.transport)
});
return Array.from(new Set (modes));
};


module.exports = Traveller;
