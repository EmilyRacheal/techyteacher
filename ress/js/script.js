// nav scroll 
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("mycolor");
      $("nav.fixed-top .nav-link").addClass("mycol");
      $(".navbar").fadeIn();
    } else {
      $(".navbar").removeClass("mycolor");
      $("nav.fixed-top .nav-link").removeClass("mycol");
      $(".navbar").fadeIn();
    }
});


// Back to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// styling for the counter section
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
    
  
  });

function login() {
  fetch("https://techy-teachers.herokuapp.com/api/v1/videos/",{
    method:"GET",
    credentials:"include",
    headers:new Headers({
      "content-type":"application/json",
      Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MzU0NTE3NSwianRpIjoiZDg1YzY3MzYtNzUyZi00MzE2LThiNzQtMGY0ZGExYjUxZjFiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MiwibmJmIjoxNjQzNTQ1MTc1LCJleHAiOjE2NDM2MzE1NzV9._lAUqekNR8SHctYkn0V9AwAydWYmUgy8MeBXOiru-_s`
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error))
}


login()