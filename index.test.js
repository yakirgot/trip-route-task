const { expect } = require('@jest/globals');
const TripRoute = require('./index');

test('get original trip route', () => {
  const unsortedTrip = [
    ['JPN', 'PHL'],
    ['BRA', 'UAE'],
    ['USA', 'BRA'],
    ['UAE', 'JPN'],
  ];

  const tripRoute = new TripRoute(unsortedTrip);
  const sortedTripRoute = tripRoute.getSortedTripRoute();
  const expectedResult = 'USA, BRA, UAE, JPN, PHL';

  expect(sortedTripRoute).toBe(expectedResult);
});

test('get an error when an array is not provided', () => {
  const tripRoute = () => new TripRoute(null);

  expect(tripRoute).toThrow(new Error('You need to provide a valid array'));
});
