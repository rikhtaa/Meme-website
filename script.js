const uppernavbar = document.querySelector('.upper-navbar')
const container = document.querySelector('.mainContainer');
const memebox = document.querySelector(".memeDiv")
const mainContainer = document.querySelector(".main_limg")
const memeDivs = document.querySelectorAll('.memeDivs')
const Img = document.querySelectorAll('.Img')

const url = 'https://api.imgflip.com/get_memes';
fetch (url)
  .then(response => {
    if(!response.ok){
    throw new Error('Network was not working')
  }
   return response.json();

  })
  .then(data => {
  console.log(data);

  const memes = data.data.memes
  
  for(let i=0; i<100; i++){
    const memeDivs = document.createElement('div')
    memeDivs.classList.add('memeDivs')
    memebox.appendChild(memeDivs)
  
    const memeimg = document.createElement('img')
    memeimg.classList.add('Img')
    memeDivs.appendChild(memeimg)
    memeimg.src = memes[i].url;
    memeimg.alt = memes[i].name;

    memeimg.style.width =("140%")
    memeimg.style.height=("140%")
    

    const h5 = document.createElement('h5')
    h5.classList.add('h55')
    memebox.appendChild(h5)
    h5.innerHTML = memes[i].name

  }
  
}) 


.catch(error =>  {
  console.error('Error fetching memes:', error);
})  
       
const svg =  document.querySelector('svg')
const svgcon = document.querySelector('.container')
const navbar = document.querySelector('.navbar');
window.addEventListener("scroll", function() {
  console.log("Scroll position:", window.scrollY);
    if (window.scrollY > 300) {
        console.log("Scroll position is greater than 400");
        container.classList.remove('upper-navbar');
        navbar.classList.add('navbar-with-shadow');
        navbar.setAttribute('style', 'box-shadow: 0 20px 30px 0 rgba(28,9,80,0.05);');
        navbar.style.marginTop = '-50px';
        svg.style.marginTop= '54px';
        svg.style.transition = '1s ease-out';
        
    } else {
        console.log("Scroll position is less than or equal to 400");
        navbar.style.boxShadow = 'none';
        navbar.style.marginTop = '0';
        svg.style.marginTop = '100px';
      }
});












  


 

