$(document).ready(function(){
  /* jshint strict: false */
  /*jshint camelcase: false */

  //MAIN SLIDER
  $('.bxslider').bxSlider({
    auto: true,
    randomStart: true,
    pager: false,
    speed: 800
  });

  // validate contact form
  $(function() {
      $('#contact').validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: 'your name is required',
                  minlength: 'your name must consist of at least 2 characters'
              },
              email: {
                  required: 'no email, no sign up'
              }
          },
          submitHandler: function(form) {
              $(form).ajaxSubmit({
                  type:'POST',
                  data: $(form).serialize(),
                  url:'process.php',
                  success: function() {
                      $('#contact :input').attr('disabled', 'disabled');
                      $('#contact').fadeTo( 'slow', 0.15, function() {
                          $(this).find(':input').attr('disabled', 'disabled');
                          $(this).find('label').css('cursor','default');
                          $('#success').fadeIn();
                      });
                  },
                  error: function() {
                      $('#contact').fadeTo( 'slow', 0.15, function() {
                          $('#error').fadeIn();
                      });
                  }
              });
          }
      });
  });

});