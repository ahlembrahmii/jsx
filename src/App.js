import './App.css';
import video from './MyVideo.mp4'
import image from './imageInSrc.jpg'
import './style.css';
function App() {
  return (
    <div className="container">

     <div style={{border:"solid 1px Red",maxWidth:"100vw"}}/>

 <h1 className="title red">Ahlem brahmi </h1>

 <br />

 <img id="im" src="imageInPublic.jpg" alt="im"/>
<img id ="image" src={image} alt="image" />
 <br />
 <br />
 {/* <iframe title="react video" src = "https://www.youtube.com/embed/uXWycyeTeCs" largeur = {1000} hauteur = {500} > </ iframe >     */}
 <video width="320" height="240" controls>
 <source src={video} type="video/mp4" />
</video>

    </div>
  );
}

export default App;
