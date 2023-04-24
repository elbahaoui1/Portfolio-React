import { Image } from "react-bootstrap";

function Projet() {
  return (
    <div style={{ paddingTop: '5vh' }}>
      <h1>Projects</h1>
      <section className="row justify-content-center" style={{ padding: '10vh 20vh 10vh 20vh' }}>
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
            <Image src="./goalfinder.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Goal Finder</h5>
              <p className="card-text">Goal finder is a cross platform app football complexes</p>
              <a href="https://github.com/elbahaoui1/GoalFinder-Mobile" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Projet;
