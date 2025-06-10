function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
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