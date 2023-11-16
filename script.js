// script.js
$(document).ready(function(){
    $('.choice').on('click', function(){
      var correctAnswer = 'Beirut';
      $('.choice').not(this).prop('disabled', true).css('cursor', 'not-allowed');
      var selectedAnswer = $(this).text();
      if(selectedAnswer === correctAnswer){
        $('#feedback').text('Correct!').css('background-color', 'green');
      } else {
        $('#feedback').text('Incorrect!').css('background-color', 'red');
      }
    });
  });
  
