
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 100000, years: 3, rate: 6.4};
  expect(calculateMonthlyPayment(values)).toEqual('3060.35');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {amount: 5000, years: 10, rate: 4.5};
  expect(calculateMonthlyPayment(values)).toEqual('51.82');
});

/// etc
