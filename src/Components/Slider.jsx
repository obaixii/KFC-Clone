// import slidePicture from ".../images/Slider-Images"
function Slider({ }) {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../images/Slider-Images/slider1.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../images/Slider-Images/slider2.png" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="../images/Slider-Images/slider3.png" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
