document.addEventListener("DOMContentLoaded", function() {
  var button1 = document.querySelector('.step12');
  var button2 = document.querySelector('.step3456');
  var button3 = document.querySelector('.step7');
  var button4 = document.querySelector('.step8');
  var button5 = document.querySelector('.step9');
  var section = document.querySelector('#step3456');
  var sectionLast = document.querySelector('#step9');
  var ul = document.querySelector('#car');

  button1.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    data: '',
    dataType:'txt'
  });
  });

  button2.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: '',
      dataType: 'html'
    }).done(function(responseData){
      console.log('We did it');
      var p = document.createElement('p');
      p.innerText = responseData;
      section.appendChild(p);
    }).fail(function(){
      console.log("That didn't go well");

    }).always(function(){
      console.log("All I know is , it's over !");
    });
  });

  button3.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: '',
      dataType: 'html'
    }).done(function(responseData) {
      var p = document.createElement('p');
      p.innerText = 'Number of visitors: '+responseData
      sectionLast.append(p);
      console.log(responseData);
    });
  });

  button4.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Asia/Kolkata'},
      dataType: 'html'
    }).done(function(responseData){
      var p = document.createElement('p');
      p.innerText = 'Current TimeZone : '+responseData;
      sectionLast.appendChild(p);
    });
  });

  button5.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      data: '',
      dataType: 'html'
    }).done(function(responseData) {
      var li = document.createElement('li');
      li.innerHTML= responseData;
      ul.appendChild(li);
    });
  });

});
