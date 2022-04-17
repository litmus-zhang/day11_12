const button = document.querySelector('button');
const circles = document.querySelectorAll('.circle');
const card = document.querySelector('.card');

var num
console.log(circles);    
circles.forEach(function (circle)
{
    circle.addEventListener('click', function (e)
{
    circle.classList.add = 'clicked';
   
    console.log('clicked');
 } );
 });

button.addEventListener('click', function (e)
{ 
    console.log('clicked');
    button.style.backgroundColor = 'white';
    button.style.color = 'var(--primary-color)';

//     card.appendChild(`div class="card thank-you">
//     <div class="top">
//       <img src="./images/illustration-thank-you.svg" alt="icon-star" class="Thank-you">
//       <p class="rating-value">You chose <span>4</span> out of 5</p>
//     </div>
//     <div class="bottom">
//       <h1>Thank You</h1>
//       <p>We appreciate you taking the time to give a rating. If you ever need more support, 
//         don’t hesitate to get in touch! </p>
//     </div>
//   </div>`);

});