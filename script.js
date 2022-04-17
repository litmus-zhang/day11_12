const button = document.querySelector('button');
const circles = document.querySelectorAll('.circle');
const card = document.querySelector('.card');

var num
console.log(circles);    
circles.forEach(function (circle)
{
    circle.addEventListener('click', circleChange(circle))
});
function circleChange(circle)
{
    circle.addEventListener('click', function (e)
    {
        
        circle.classList.add('clicked');
        console.log(circle);
   
        num = circle.innerHTML;
        console.log(num);
    });
}
        // 

button.addEventListener('click', createNewcard());

function createNewcard()
{ 
    
    button.addEventListener('click', function (e)
    {
        button.style.backgroundColor = 'white';
        button.style.color = 'var(--primary-color)';
        setInterval(function ()
        {
            card.classList.replace('card', 'card-thank-you');
    card.innerHTML = `
    <div class="top">
      <img src="./images/illustration-thank-you.svg" alt="icon-star" class="Thank-you">
      <p class="rating-value">You chose <span>${num ? num : '0'}</span> out of 5</p>
    </div>
    <div class="bottom">
      <h1>Thank You</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch! </p>
    </div>
    `;
        }, 500);
    
    })
}