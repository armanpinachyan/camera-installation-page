
const boxs = document.querySelectorAll('.page4 .container .boxs .box')
const text = document.querySelectorAll('.page4 .container .boxs .box .text1')
const tetxpages = document.querySelectorAll('.page2 .container .box-orange .content h3')
const buutonnext = document.querySelector('.page2 .container .box-orange .pricebutton .next')
const backbutton = document.querySelector('.page2 .box-orange .pricebutton .backbutton')
const price = document.querySelector('.page2 .box-orange .pricebutton h3')
const white = document.querySelectorAll('.page2 .container .box-orange .white')
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnText = document.getElementById("myBtn");
const menu_bar = document.getElementById('menu-bar')
const menux = document.getElementById('menux')
const navbar = document.querySelector('nav')



boxs.forEach((box,index) =>{
    box.addEventListener('click', ()=>{
        if(index == 0){
            text[0].classList.toggle('actives')
        }
        else if(index == 1){
            text[1].classList.toggle('actives')
        }
        else if(index == 2){
            text[2].classList.toggle('actives')
        }
        else if(index == 3){
            text[3].classList.toggle('actives')
        }
        else if(index == 4){
            text[4].classList.toggle('actives')
        }
        else if(index == 5){
            text[5].classList.toggle('actives')
        }
    })
})

function myFunction() {
  const aboutText = document.querySelector('.about-text');
    
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Читать больше"; 
      moreText.style.display = "none";
      aboutText.classList.add('text')
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Читать меньше"; 
      moreText.style.display = "inline";
      aboutText.classList.remove('text')
    }
  }
  
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

let num = 0
let back = 0

buutonnext.onclick = () => changebox('plus')
backbutton.onclick = () => changebox('minus')



function changebox(numStatus){

    numStatus == 'plus' ? num++ : num--

    if(num >= white.length-1){
      num = white.length-1
    } else if(num < 0){
      num = 0
  }
  console.log(num);

  clearacrive()
  white[num].classList.add('active')
  backbutton.classList.add('active')
  price.classList.add('d-none')
  if(num == 0){
    price.classList.remove('d-none')
    backbutton.classList.remove('active')
  }

}


// buutonnext.addEventListener('click', ()=>{
//   clearacrive()
//   if(num == 0){
//          white[0].classList.add('active')
//          num = 1
//        }
//          else if(num == 1){
//            white[1].classList.add('active')
//            backbutton.classList.add('active')
//            price.classList.add('d-none')
//            num++
//          }
//          else if(num == 2){
//            white[2].classList.add('active')
//            num++
//          }
//          else if(num == 3){
//            white[3].classList.add('active')
//            num++
//          }
//         else if(num == 4){
//            white[4].classList.add('active')
//            num++
//          }
//         else if(num == 5){
//             white[5].classList.add('active')
//             num = 5
//             }
// })

// backbutton.addEventListener('click',()=>{
//   clearacrive()
//   if(back == 0){
//     white[0].classList.add('active')
//     back = 1
//   }
//     else if(back == 1){
//       white[0].classList.add('active')
//       backbutton.classList.add('active')
//       price.classList.add('d-none')
//       --back
//     }
//     else if(back == 2){
//       white[1].classList.add('active')
//       --back
//     }
//     else if(back == 3){
//       white[2].classList.add('active')
//       --back
//     }
//    else if(back == 4){
//       white[3].classList.add('active')
//       --back
//       console.log(num);
//     }
//    else if(back == 5){
//         --back
//        white[4].classList.add('active')
//        }
// })


      

function clearacrive(){
  white.forEach(box =>{
    if(box.classList.contains('active')){
      box.classList.remove('active')
    }
  })
}



//   tetxpages.forEach((h3,index) => {
//     h3.addEventListener('click',  ()=>{
//       clearacrive()
//       if(index == 0){
//         white[0].classList.add('active')
//       }
//         else if(index == 1){
//           white[1].classList.add('active')
//         }
//         else if(index == 2){
//           white[2].classList.add('active')
//         }
//         else if(index == 3){
//           white[3].classList.add('active')
//         }
//        else if(index == 4){
//           white[4].classList.add('active')
//         }
//        else if(index == 5){
//           white[5].classList.add('active')
//         }
//     })
//   })


  menu_bar.addEventListener('click', (e)=>{
    navbar.classList.toggle('active')
    if(navbar.classList.contains('active')){
      menux.classList.add('active')
      menu_bar.classList.add('active')
    }
})


menux.addEventListener('click', (e)=>{
  menux.classList.remove('active')
  menu_bar.classList.remove('active')
  navbar.classList.remove('active')
})

  