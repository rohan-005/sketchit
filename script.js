function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle menu visibility
  const isVisible = mobileMenu.style.display === 'block';
  mobileMenu.style.display = isVisible ? 'none' : 'block';

  // If we just opened it, set up a one-time outside click handler
  if (!isVisible) {
    // Timeout prevents immediate closing due to event bubbling from the toggle button itself
    setTimeout(() => {
      function handleClickOutside(event) {
        if (!mobileMenu.contains(event.target)) {
          mobileMenu.style.display = 'none';
          document.removeEventListener('click', handleClickOutside);
        }
      }

      document.addEventListener('click', handleClickOutside);
    }, 0);
  }
}


const images = [{
    image : "assets/images/img1.jpg",
    text : `The artist in me, sees beauty in every place...The artist in me,sees poetry in every face, that can paint a picture with everyword I writewhether it is shimmering of starsor sunrise`
},
{
    image : "assets/images/img2.jpg",
    text : `The artist in me, sees beauty in every place...The artist in me,sees poetry in every face, that can paint a picture with everyword I writewhether it is shimmering of starsor sunrise`
},
{
    image : "assets/images/img3.jpg",
    text : `The artist in me, sees beauty in every place...The artist in me,sees poetry in every face, that can paint a picture with everyword I writewhether it is shimmering of starsor sunrise`
},
{
    image : "assets/images/img4.jpg",
    text : `The artist in me, sees beauty in every place...The artist in me,sees poetry in every face, that can paint a picture with everyword I writewhether it is shimmering of starsor sunrise`
},
{
    image : "assets/images/img5.jpg",
    text : `The artist in me, sees beauty in every place...The artist in me,sees poetry in every face, that can paint a picture with everyword I writewhether it is shimmering of starsor sunrise`
}

];


function slideshow(index){
    const imagepart = document.querySelector(".image-container img");
    const textpart = document.querySelector(".text-container");


    imagepart.src = images[index].image;
    textpart.innerHTML = images[index].text;

}