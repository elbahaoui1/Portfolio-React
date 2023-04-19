import { Image } from "react-bootstrap";

function Projet() {
  return (
    <div style={{ paddingTop: '5vh' }}>
      <h1>Projects</h1>
      <section className="row justify-content-center" style={{ padding: '10vh 20vh 10vh 20vh' }}>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./projet1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">project Number 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./projet2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">project Number 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./projet3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">project Number 3</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./projet3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">project Number 4</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./projet3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">project Number 5</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./projet3.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">project Number 6</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projet;
