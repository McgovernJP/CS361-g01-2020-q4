
$('#get-data').click(function () {
    $.getJSON('https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200968539-dd5a047534138b0cfaab99ad482a2492', function (data) {
    });
  });
  