// $(function() {
//     if (document.documentElement.clientWidth > 400){
//         $('#menu-tabs a').click(function(){
//             var thisClass = this.className.slice(0,2);
//             $('div.t1').hide();
//             $('div.t2').hide();
//             $('div.t3').hide();
//             $('div.t4').hide();
//             $('div.' + thisClass).fadeIn(500);
//             $('#menu-tabs a').removeClass('active');
//             $(this).addClass('active');
//             return false;
//         });
//         $('#menu-tabs a.t1').click();
//     }

//     $('.group h4').click(function(e) {
//         e.preventDefault();
//         $(this).toggleClass('open');
//         var $this = $(this);
//         if ($this.next().hasClass('show')) {
//             $this.next().removeClass('show');
//             $this.next().hide('middle');
//         } else {
//             $this.parent().parent().find('.group').find('.box').removeClass('show');
//             $this.parent().parent().find('.group').find('.box').hide('middle');
//             $this.next().toggleClass('show');
//             $this.next().show('middle');
//             $('html, body').animate({
//                 scrollTop: $("header ").offset().top
//             }, 0);
//         }
//     });

//     $('.nav-header .burger-li').click(function(){
//         $('.burger-li').toggleClass('open');
//         $('.links').toggleClass('open');
//         $(this).parent().parent().parent().parent().toggleClass('open');
//     });
   
// });