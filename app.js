// $(document).ready(function(){
//     $('#profile_ripple').ripples({
//         resolution: 512,
//         dropRadius: 10
//     });



//     const bars= document.querySelectorAll('progress_bar');
//     console.log(bars);
// });

const bars= document.querySelectorAll('.progress__bar');
// console.log(bars);
bars.forEach(function(bar)
{
  let percentage = bar.dataset.percent;
  let tooltip=bar.children[0];
  tooltip.innerHTML = percentage+ '%';
  bar.style.width = percentage+'%';
  console.log(percentage);
});



// counter
// cosnt counters= document.querySelectorAll('')


// let $wrapper = document.querySelector('.portfolio__wrapper');
// $(document).ready(function() {
//   var $wrapper = $('.portfolio__wrapper');

//   // Initialize Isotope
//   $wrapper.isotope({
//     filter: '*',
//     layoutMode: 'masonry',
//     animationOptions: {
//       duration: 750,
//       easing: 'linear'
//     }
//   });
// });

// let links = document.querySelectorAll('.tabs a');
// console.log(links);

// links.forEach(link => {
//   let selector = link.dataset.filter;
//   console.log(selector);
  
//   link.addEventListener("click", function(e) {
//     e.preventDefault();

//     // Filter Isotope items based on the clicked link's data-filter attribute
//     $wrapper.isotope({
//       filter: selector,
//       layoutMode: 'masonry',
//       animationOptions: {
//         duration: 750,
//         easing: 'linear'
//       }
//     });
//   });
// });

// $(document).ready(function() {
//   var $wrapper = $('.portfolio__wrapper');
  
//   // Initialize Isotope
//   $wrapper.isotope({
//     filter: '*',
//     layoutMode: 'masonry',
//     animationOptions: {
//       duration: 750,
//       easing: 'linear'
//     }
//   });
  
//   // Select all links inside .tabs and add event listeners
//   var links = document.querySelectorAll('.tabs a');
//   console.log(links);
  
//   links.forEach(function(link) {
//     var selector = link.dataset.filter;
//     console.log(selector);
    
//     link.addEventListener("click", function(e) {
//       e.preventDefault();
      
//       // Filter Isotope items based on the clicked link's data-filter attribute
//       $wrapper.isotope({
//         filter: selector,
//         layoutMode: 'masonry',
//         animationOptions: {
//           duration: 750,
//           easing: 'linear'
//         }
//       });
//       e.target.calssList.add('active');
//     });
//   });
// });

$(document).ready(function() {
  var $wrapper = $('.portfolio__wrapper');

  // Initialize Isotope
  $wrapper.isotope({
    filter: '*',
    layoutMode: 'masonry',
    animationOptions: {
      duration: 750,
      easing: 'linear'
    }
  });

  // Select all links inside .tabs and add event listeners
  var links = document.querySelectorAll('.tabs a');
  console.log(links);

  links.forEach(function(link) {
    var selector = link.dataset.filter;
    console.log(selector);

    link.addEventListener("click", function(e) {
      e.preventDefault();

      // Filter Isotope items based on the clicked link's data-filter attribute
      $wrapper.isotope({
        filter: selector,
        layoutMode: 'masonry',
        animationOptions: {
          duration: 750,
          easing: 'linear'
        }
      });

      // Add 'active' class to the clicked link
      links.forEach(function(link) {
        link.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });
});

