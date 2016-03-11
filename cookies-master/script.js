$(document).ready(function(){

	$('#submit').click(function(){
		var name = $('#thename').val();
		Cookies.set('name', name);
	})

   if (Cookies('name')) {
   	var nameCookie = Cookies.get('name')
		$('#random').html("<h2>Hello, " + nameCookie + "!!!</h2>");
   };

  // function randomThing(){
  // };

  // $('#thing').on('randomThing', function(){
  // 	$(this).html('whatever duuuuuuude');
  // 	$(this).css('backgroundColor', 'cyan');

  // });
  var counter = 0;
  var counterOne = 0;
  var counterTwo = 0;

  $('.choco').click(function(){
    counter += 1;
    $('#counter-choco').text(counter);
    Cookies.set('Chocolate-Chip-Cookies', counter);
    return counter;
  });

  $('.snick').click(function(){
    counterOne += 1;
    $('#counter-snick').text(counterOne);
    Cookies.set('Snickerdoodle-Cookies', counterOne);
    return counterOne;
  });

  $('.thin-m').click(function(){
    counterTwo += 1;
    $('#counter-thin-m').text(counterTwo);
    Cookies.set('Thin-Mint-Cookies', counterTwo);
    return counterTwo;
  });

  if (Cookies('Chocolate-Chip-Cookies')) {
    var ChocoCookie = Cookies.get('Chocolate-Chip-Cookies');
    $('#total-choco').text(ChocoCookie);
  };

  if (Cookies('Snickerdoodle-Cookies')) {
    var SnickCookie = Cookies.get('Snickerdoodle-Cookies');
    $('#total-snick').text(SnickCookie);
  };

  if (Cookies('Thin-Mint-Cookies')) {
    var ThinCookie = Cookies.get('Thin-Mint-Cookies');
    $('#total-thin-m').text(ThinCookie);
  };

  $('.delete').click(function(){
    Cookies.expire('Chocolate-Chip-Cookies');
    Cookies.expire('Snickerdoodle-Cookies');
    Cookies.expire('Thin-Mint-Cookies');
    location.reload();
  });











});