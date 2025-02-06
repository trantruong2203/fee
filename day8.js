
var a = document.querySelector("h1");
a.setAttribute("class", "text-danger")

var a = document.getElementById("fruit");
var b = [{
  id :1,
  img: "https://img.freepik.com/premium-vector/tall-green-birch-trees-illustration-flat-vector_9493-102749.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid"
},
{
  id : 2,
  img: "https://img.freepik.com/free-photo/skjolden-norway-may-16-2023-mountain_58702-10986.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid"
},
{
  id : 2,
  img: "https://img.freepik.com/free-photo/russian-landscape-with-birch-forest_1398-3902.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid"
},
{
  id : 2,
  img: "https://img.freepik.com/free-photo/natural-landscape-view_1112-382.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid"
},




];
b.map(e => {
  a.innerHTML += `
<div class="col-lg-3 col-md-6 col-12">
            <div class="fruit-item position-relative rounded mt-4 border border-warning ">
              <div class="fruite-img">
                <img
                  src=${e.img}
                  class="img-fluid rounded-top w-100 " id="ima3" alt="">
              </div>
              <div class="position-absolute rounded-pill text-white bg-warning px-3 py-1"
                style="top: 10px; left: 10px;">Fruits</div>
              <div class="fruit-content p-3">
                <h5 class="text-black text-center">Grapes</h5>
                <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te
                  incididunt</p>
                <div class="d-flex justify-content-between">
                  <span class="">$4.99 / kg</span>
                  <button class="btn btn-warning bg-light  text-success rounded-pill px-3"><i
                      class="fas fa-cart-plus"></i> Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
    `
  var ima3 = document.getElementById('ima3');
  // ima3.setAttribute('src', "https://img.freepik.com/free-photo/horizontal-landscape-with-birches-glove_1398-4449.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid, ")
})
a.setAttribute('src', "https://img.freepik.com/free-vector/snowy-forest-background_23-2147978623.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid", "")

var c = document.getElementById("carousel1")

var carousel1 = [1]
carousel1.map(e => {
  c.innerHTML += `
  <div id="carouselExampleControls" class="carousel slide ms-5   " data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active position-relative ">
                  <img id="ima1" src="https://themewagon.github.io/fruitables/img/hero-img-2.jpg" class="d-block rounded"
                    alt="Fist slide">
                  <span
                    class="btn rounded bg-warning text-white position-absolute top-50 start-50 translate-middle">Fruite</span>
                </div>
                <div class="carousel-item bg-warning rounded">
                  <img id="ima2" src="https://themewagon.github.io/fruitables/img/hero-img-1.png" class="d-block rounded "
                    alt="second slide">
                  <span
                    class="btn rounded bg-success text-white  position-absolute top-50 start-50 translate-middle">vegetable</span>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>`


})
var ima1 = document.getElementById('ima1');

ima1.setAttribute('src', 'https://img.freepik.com/free-photo/birch-grove-autumn_181624-23156.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid');
var ima2 = document.getElementById('ima2');
ima2.setAttribute('src', 'https://img.freepik.com/free-vector/autumn-trees-bush-with-yellow-orange-foliage_74855-10483.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid')
var ima3 = document.getElementById('ima3');
ima3.setAttribute('src', "https://img.freepik.com/free-photo/horizontal-landscape-with-birches-glove_1398-4449.jpg?uid=R179970433&ga=GA1.1.232438409.1734106633&semt=ais_hybrid")

// list
var listInfo = document.querySelector(".list-info");
var addToListInfo = [1, 2, 3, 4, 5, 6]
addToListInfo.map(e => {
  listInfo.innerHTML += `
  <div class="list1 bg-light p-4">
          <div class="content border-bottom border-warning mb-4 py-2">
            <p>Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever
              since the 1500s,
            </p>
          </div>
          <div class="box-content">
            <div class="box-img">
              <img src="https://themewagon.github.io/fruitables/img/testimonial-1.jpg" class="rounded" alt="">
              <div class="content">
                <h2 class="text-nowrap">Client Name</h2>
                <h5 class="fw-light">${e}</h5>
              </div>
            </div>
            <i class="fas fa-quote-left fa-flip-horizontal"></i>
          </div>
   </div>`
})
const list = document.querySelectorAll('.list1');
const next = document.querySelector('.btr-next')
const prev = document.querySelector('.btr-prev')
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex < list.length - 2) ? currentIndex + 1 : 0;
  updateCarousel()
}, 3000);
function updateCarousel() {
  const offset = -currentIndex * 100/6;
  listInfo.style.transform = `translateX(${offset}%)`;
}

next.addEventListener('click', () => {
  currentIndex = (currentIndex < list.length - 1) ? currentIndex + 1 : 0;
  updateCarousel()
})
prev.addEventListener('click', ()=>{
  currentIndex = (currentIndex > 0 ) ? currentIndex -1 : list.length - 1;
  updateCarousel()
} )







