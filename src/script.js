 $(document).ready(() => {

     const slickOptions = {
         autoplay: true,
         autoplayspeed: 200,
         dots: false,
         prevArrow:
            '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
         nextArrow: 
            '<button type="button" class="slick-next slider__next-arrow">Previous</button>;'
     };
     $(".slider").slick(slickOptions);

     $('.foooter__form-button').on('click', () => {

     const email = $('#email').val();
     Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "email",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );

     })

     })
   

  