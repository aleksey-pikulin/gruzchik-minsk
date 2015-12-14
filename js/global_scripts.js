  setInterval(function () {
    var d = new Date((new Date()).getTime() + 30*60*1000);
    var hour = d.getHours();
    var min = d.getMinutes();
       
    if (min<10) {
      min = "0"+min;
    }
    if (hour<10) {
      hour = "0"+hour;
    }
    var dom = hour + " : " + min

    document.body.getElementsByClassName('time')[0].innerHTML = dom;
  }, 1000);


  // function isValidEmailAddress(emailAddress) {
  //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //   return pattern.test(emailAddress);
  // }

  $( document ).ready(function() {
    $('#slideshow').fadeSlideShow();
  // #ajaxform
     $("#ajaxform").submit(function(){ // перехватываем все при событии отправки
          var form = $(this); // запишем форму, чтобы потом не было проблем с this
          var error = false; // предварительно ошибок нет
          form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
              if ($(this).val() == '') { // если находим пустое
                  alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
                  error = true; // ошибка
              }
          });
          if (!error) { // если ошибки нет
              var data = form.serialize(); // подготавливаем данные
              $.ajax({ // инициализируем ajax запрос
                 type: 'POST', // отправляем в POST формате, можно GET
                 url: 'email_s1.php', // путь до обработчика, у нас он лежит в той же папке
                 dataType: 'json', // ответ ждем в json формате
                 data: data, // данные для отправки
                 beforeSend: function(data) { // событие до отправки
                      form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                 success: function(data){ // событие после удачного обращения к серверу и получения ответа
                      if (data['error']) { // если обработчик вернул ошибку
                          alert(data['error']); // покажем её текст
                      } else { // если все прошло ок

                          // alert('Письмо отвравлено! Чекайте почту! =)'); // пишем что все ок
                              setTimeout(function(){
                                $('#ajaxform').fadeOut(100);
                                  $('#thanks1').fadeIn(400);
                                  console.log('block');
                               }, 0000);
                              setTimeout(function(){
                                  $('#thanks1').fadeOut(100);
                                  $('#ajaxform').fadeIn(400);
                                  console.log('block2');
                               }, 5000);   
                              var tel2 = document.getElementById('tel2');
                              tel2.value = '';
                      }
                   },
                 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                      alert(xhr.status); // покажем ответ сервера
                      alert(thrownError); // и текст ошибки
                   },
                 complete: function(data) { // событие после любого исхода
                      form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                   }
                            
                   });
          }
          return false; // вырубаем стандартную отправку формы
      });
  // #ajaxform

  // #ajaxform2
   $("#ajaxform2").submit(function(){ // перехватываем все при событии отправки
          var form = $(this); // запишем форму, чтобы потом не было проблем с this
          var error = false; // предварительно ошибок нет
          form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
              if ($(this).val() == '') { // если находим пустое
                  alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
                  error = true; // ошибка
              }
          });
          if (!error) { // если ошибки нет
              var data = form.serialize(); // подготавливаем данные
              $.ajax({ // инициализируем ajax запрос
                 type: 'POST', // отправляем в POST формате, можно GET
                 url: 'email_s2.php', // путь до обработчика, у нас он лежит в той же папке
                 dataType: 'json', // ответ ждем в json формате
                 data: data, // данные для отправки
                 beforeSend: function(data) { // событие до отправки
                      form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                 success: function(data){ // событие после удачного обращения к серверу и получения ответа
                      if (data['error']) { // если обработчик вернул ошибку
                          alert(data['error']); // покажем её текст
                      } else { // если все прошло ок

                          // alert('Письмо отвравлено! Чекайте почту! =)'); // пишем что все ок
                              setTimeout(function(){
                                // $('#ajaxform2').fadeOut(100);
                                  $('#thanks2').fadeIn(400);
                                  console.log('block');
                               }, 0000);
                              setTimeout(function(){
                                  $('#thanks2').fadeOut(100);
                                  // $('#ajaxform2').fadeOut(400);

                                  console.log('block2');
                               }, 5000);   
                              var tel1 = document.getElementById('tel1');
                              tel1.value = '';
                      }
                   },
                 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                      alert(xhr.status); // покажем ответ сервера
                      alert(thrownError); // и текст ошибки
                   },
                 complete: function(data) { // событие после любого исхода
                      form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                   }
                            
                   });
          }
          return false; // вырубаем стандартную отправку формы
      });
  // #ajaxform2

  // #ajaxform3
  $("#ajaxform3").submit(function(){ // перехватываем все при событии отправки
          var form = $(this); // запишем форму, чтобы потом не было проблем с this
          var error = false; // предварительно ошибок нет
          form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
              if ($(this).val() == '') { // если находим пустое
                  alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
                  error = true; // ошибка
              }
          });
          if (!error) { // если ошибки нет
              var data = form.serialize(); // подготавливаем данные
              $.ajax({ // инициализируем ajax запрос
                 type: 'POST', // отправляем в POST формате, можно GET
                 url: 'email_s3.php', // путь до обработчика, у нас он лежит в той же папке
                 dataType: 'json', // ответ ждем в json формате
                 data: data, // данные для отправки
                 beforeSend: function(data) { // событие до отправки
                      form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                 success: function(data){ // событие после удачного обращения к серверу и получения ответа
                      if (data['error']) { // если обработчик вернул ошибку
                          alert(data['error']); // покажем её текст
                      } else { // если все прошло ок

                          // alert('Письмо отвравлено! Чекайте почту! =)'); // пишем что все ок
                              setTimeout(function(){
                                $('#ajaxform3').fadeOut(100);
                                  $('#thanks3').fadeIn(400);
                                  console.log('block');
                               }, 0000);
                              setTimeout(function(){
                                  $('#thanks3').fadeOut(100);
                                  $('#ajaxform3').fadeIn(400);
                                  console.log('block2');
                               }, 5000);   
                              var tel3 = document.getElementById('tel3');
                              tel3.value = '';
                      }
                   },
                 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                      alert(xhr.status); // покажем ответ сервера
                      alert(thrownError); // и текст ошибки
                   },
                 complete: function(data) { // событие после любого исхода
                      form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                   }
                            
                   });
          }
          return false; // вырубаем стандартную отправку формы
      });
  // #ajaxform3

  // #ajaxform4
  $("#ajaxform4").submit(function(){ // перехватываем все при событии отправки
          var form = $(this); // запишем форму, чтобы потом не было проблем с this
          var error = false; // предварительно ошибок нет

          if (!error) { // если ошибки нет
              var data = form.serialize(); // подготавливаем данные
              $.ajax({ // инициализируем ajax запрос
                 type: 'POST', // отправляем в POST формате, можно GET
                 url: 'email.php', // путь до обработчика, у нас он лежит в той же папке
                 dataType: 'json', // ответ ждем в json формате
                 data: data, // данные для отправки
                 beforeSend: function(data) { // событие до отправки
                      form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                 success: function(data){ // событие после удачного обращения к серверу и получения ответа
                     

                          // alert('Письмо отвравлено! Чекайте почту! =)'); // пишем что все ок
                              setTimeout(function(){
                                $('#ajaxform4').fadeOut(100);
                                  $('#thanks4').fadeIn(400);
                                  console.log('block4');
                               }, 0000);
                              setTimeout(function(){
                                  $('#thanks4').fadeOut(100);
                                  $('#ajaxform4').fadeIn(400);
                                  console.log('block4 2');
                               }, 5000);   
                              var mail = document.getElementById('mail');
                              mail.value = '';
                              var phone_mail = document.getElementById('phone_mail');
                              phone_mail.value = '';                 
                   },

                 complete: function(data) { // событие после любого исхода
                      form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                   }
                            
                   });
          }
          return false; // вырубаем стандартную отправку формы
      });
  // #ajaxform4

  // #ajaxform5
  $("#ajaxform5").submit(function(){ // перехватываем все при событии отправки
          var form = $(this); // запишем форму, чтобы потом не было проблем с this
          var error = false; // предварительно ошибок нет
          form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
              if ($(this).val() == '') { // если находим пустое
                  alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
                  error = true; // ошибка
              }
          });
          if (!error) { // если ошибки нет
              var data = form.serialize(); // подготавливаем данные
              $.ajax({ // инициализируем ajax запрос
                 type: 'POST', // отправляем в POST формате, можно GET
                 url: 'email_s5.php', // путь до обработчика, у нас он лежит в той же папке
                 dataType: 'json', // ответ ждем в json формате
                 data: data, // данные для отправки
                 beforeSend: function(data) { // событие до отправки
                      form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                 success: function(data){ // событие после удачного обращения к серверу и получения ответа
                      if (data['error']) { // если обработчик вернул ошибку
                          alert(data['error']); // покажем её текст
                      } else { // если все прошло ок

                          // alert('Письмо отвравлено! Чекайте почту! =)'); // пишем что все ок
                              setTimeout(function(){
                                $('#ajaxform5').fadeOut(100);
                                  $('#thanks5').fadeIn(400);
                                  console.log('block');
                               }, 0000);
                              setTimeout(function(){
                                  $('#thanks5').fadeOut(100);
                                  $('#ajaxform5').fadeIn(400);
                                  console.log('block2');
                               }, 5000);   
                              var tel4 = document.getElementById('tel4');
                              tel4.value = '';
                      }
                   },
                 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                      alert(xhr.status); // покажем ответ сервера
                      alert(thrownError); // и текст ошибки
                   },
                 complete: function(data) { // событие после любого исхода
                      form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                   }
                            
                   });
          }
          return false; // вырубаем стандартную отправку формы
      });
  // #ajaxform6

  $("#ajaxform6").submit(function(){ // перехватываем все при событии отправки
          var form = $(this); // запишем форму, чтобы потом не было проблем с this
          var error = false; // предварительно ошибок нет
          form.find('input, textarea').each( function(){ // пробежим по каждому полю в форме
              if ($(this).val() == '') { // если находим пустое
                  alert('Заполните поле "'+$(this).attr('placeholder')+'"!'); // говорим заполняй!
                  error = true; // ошибка
              }
          });
          if (!error) { // если ошибки нет
              var data = form.serialize(); // подготавливаем данные
              $.ajax({ // инициализируем ajax запрос
                 type: 'POST', // отправляем в POST формате, можно GET
                 url: 'email_s6.php', // путь до обработчика, у нас он лежит в той же папке
                 dataType: 'json', // ответ ждем в json формате
                 data: data, // данные для отправки
                 beforeSend: function(data) { // событие до отправки
                      form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                 success: function(data){ // событие после удачного обращения к серверу и получения ответа
                      if (data['error']) { // если обработчик вернул ошибку
                          alert(data['error']); // покажем её текст
                      } else { // если все прошло ок

                          // alert('Письмо отвравлено! Чекайте почту! =)'); // пишем что все ок
                              setTimeout(function(){
                                // $('#ajaxform').fadeOut(100);
                                  $('#thanks6').fadeIn(400);
                                  console.log('block');
                               }, 0000);
                              setTimeout(function(){
                                  $('#thanks6').fadeOut(100);
                                  // $('#ajaxform').fadeIn(400);
                                  // ('#f_3_2').fadeOut(100);
                                  console.log('block2');
                               }, 5000);   
                              var tel5 = document.getElementById('tel5');
                              tel5.value = '';
                      }
                   },
                 error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                      alert(xhr.status); // покажем ответ сервера
                      alert(thrownError); // и текст ошибки
                   },
                 complete: function(data) { // событие после любого исхода
                      form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                   }
                            
                   });
          }
          return false; // вырубаем стандартную отправку формы
      });
  // #ajaxform6

      $(".phone-input").mask("+375 (99) 999-99-99");

      $(function(){
         $('a[href^="#"]').click(function(){
              var target = $(this).attr('href');
              $('html, body').animate({scrollTop: $(target).offset().top-60}, 1000);
              return false; 
         }); 
      });
    $('#q1').click(function() {
      $('#a1').slideToggle();
    });
    $('#q2').click(function() {
      $('#a2').slideToggle();
    });
    $('#q3').click(function() {
      $('#a3').slideToggle();
    });

    $('#toggler').click(function() {
      $('#f_3').slideToggle();
    }); 
    $('#toggler2').click(function() {
      $('#f_3_2').slideToggle();
    });    

  $('a#go1').click( function(event){$('#overlay').fadeIn(400,function(){$('#modal_form1').css('display', 'block').animate({opacity: 1, top: '28%'}, 200);});});
  $('#modal_close, #overlay').click( function(){$('#modal_form1').animate({opacity: 0, top: '45%'}, 200,function(){$(this).css('display', 'none');$('#overlay').fadeOut(400);});});

    var tel1 = document.getElementById('tel1'),
          tel1_s = document.getElementById('tel1_s');
    tel1.onchange = function () {
      console.log('onchange')
      setTimeout(function(){
          tel1_s.click();
          console.log('click');
       }, 3000);
    }


    var tel1 = document.getElementById('tel1'),
          tel1_s = document.getElementById('tel1_s');
    tel1.onchange = function () {
      console.log('onchange')
      setTimeout(function(){
          tel1_s.click();
          console.log('click');
       }, 3000);
    }


    var tel2 = document.getElementById('tel2'),
          tel2_s = document.getElementById('tel2_s');
    tel2.onchange = function () {
      console.log('onchange')
      setTimeout(function(){
          tel2_s.click();
          console.log('click');
       }, 3000);
    }

    var tel3 = document.getElementById('tel3'),
          tel3_s = document.getElementById('tel3_s');
    tel3.onchange = function () {
      console.log('onchange3')
      setTimeout(function(){
          tel3_s.click();
          console.log('click3');
       }, 3000);
    }
    var tel4 = document.getElementById('tel4'),
          tel4_s = document.getElementById('tel4_s');
    tel4.onchange = function () {
      console.log('onchange')
      setTimeout(function(){
          tel4_s.click();
          console.log('click');
       }, 3000);
    }
    var tel5 = document.getElementById('tel5'),
          tel5_s = document.getElementById('tel5_s');
    tel5.onchange = function () {
      console.log('onchange')
      setTimeout(function(){
          tel5_s.click();
          console.log('click');
       }, 3000);
    }

    // var mail = document.getElementById('mail'),
    //     phone_mail = document.getElementById('phone_mail');
    // mail.onchange = function () {
    //   console.log('onchange MAIL')
    //   phone_mail.onchange = function () {
    //     console.log('onchange phone_mail')
    //     setTimeout(function(){
    //       tel8_s.click();
    //       console.log('click tel8_s');
    //     }, 3000);
    //   }
    // }

 var mail = document.getElementById('mail'),
  phone_mail = document.getElementById('phone_mail');
  submit = document.getElementById('tel8_s');
var timer,
  isRunning = false;

mail.onchange = function () {
  createTimer();
}
phone_mail.onchange = function () {
  createTimer();
}
submit.onclick = function () {
  if (isRunning) {
    window.clearTimeout(timer);
    isRunning = false;
  }
}
function createTimer () {
  if (!isRunning) {
    isRunning = true;
    timer = setTimeout(function() {
      if (mail.value != "" && phone_mail.value != "") { // тут вместо простой проверки на пустоту можно втулить какую-то валидацию
        submit.click();
      }
    }, 3000);
  }
}   

});

    $(window).scroll(function () {
      if ($(window).scrollTop()>=200) {
        $('.phone').css('display','block');
      }else {
        $('.phone').css('display','none');
      }
    });

        
  $( ".slad1" ).slider({
    animate: true,
          range: "min",
          value: 5,
          min: 1,
          max: 10,
  step: 1,
          slide: function( event, ui ) {
              $( "#slider-result" ).html( ui.value );
    sd=ui.value;
    rs();
          },
          change: function(event, ui) { 
          $('#hidden').attr('value', ui.value);
  }
  });
  
  
     $( ".slad2" ).slider({
    animate: true,
          range: "min",
          value: 5,
          min: 0,
          max: 10,
  step: 1,
          slide: function( event, ui ) {
              $( "#slider-result1" ).html( ui.value );
    sf=ui.value;rs();
          },
          change: function(event, ui) { 
          $('#hidden1').attr('value', ui.value);
          }
  });
  
  
     $( ".slad3" ).slider({
    animate: true,
          range: "min",
          value: 5,
          min: 0,
          max: 10,
  step: 1,
          slide: function( event, ui ) {
              $( "#slider-result2" ).html( ui.value );
    sw=ui.value;rs();
          },
          change: function(event, ui) { 
          $('#hidden2').attr('value', ui.value);
          }
  });var sd=1; 
         var sf=5;
         var sw=5;  
  function rs(){
         var x=document.getElementById("der");
         var asw=sw*200;
           var adw=sf*500;
           var it=(asw+adw)*sd
   var iti=Math.round(it);
         var te=iti/1000;
   var tw=Math.floor(te);
   var re=tw*1000;
   var za=iti-re;
   if(za==0){za="000"}
   if(tw==0){tw="&nbsp;"}
           der.innerHTML="&nbsp;"+tw+"&nbsp;&nbsp;"+za+" руб.";}

