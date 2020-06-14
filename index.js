class TripRoute {
  constructor(tickets) {
    if (!Array.isArray(tickets)) {
      throw new Error('You need to provide a valid array');
    }

    this.tickets = new Map(tickets);
  }

  getSortedTripRoute() {
    const tripOrigin = this.getTripOrigin();
    const sortedTripArray = this.getRestOfTrip(tripOrigin);
    const sortedTripResult = sortedTripArray.join(', ');

    return sortedTripResult;
  }

  getTripOrigin() {
    const destinationsSet = new Set(this.tickets.values());

    for (const origin of this.tickets.keys()) {
      if (!destinationsSet.has(origin)) {
        return origin;
      }
    }
  }

  getRestOfTrip(tripOrigin) {
    const sortedTripArray = [tripOrigin];

    for (let iterator = 1; iterator <= this.tickets.size; iterator++) {
      const lastDestination = sortedTripArray[sortedTripArray.length - 1];
      const nextDestination = this.tickets.get(lastDestination);

      sortedTripArray.push(nextDestination);
    }

    return sortedTripArray;
  }
}

module.exports = TripRoute;
