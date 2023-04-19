
import {Image} from 'react-bootstrap'
function Header(){
    return(
    <header style={{backgroundColor:"DodgerBlue", height:"60vh",color:"white"}}>
    <Image src='image.jpg'   style={{ width: '150px', height: '150px', cursor: 'pointer',marginTop:'8vh'}} roundedCircle/>
    <h2>Mohmed Amine EL BAHAOUI</h2>
    <h3>Etudiant en 4eme annee IIR</h3>
  </header>
  )
}
export default Header;