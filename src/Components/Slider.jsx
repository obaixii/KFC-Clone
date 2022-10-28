function Slider() {
  return (
    <div className="sliderContent mb-4">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/Slider-Images/slider1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../images/Slider-Images/slider2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../images/Slider-Images/slider3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
