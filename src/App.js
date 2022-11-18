
import './App.css';
import img1 from './d78df6_4517dc1e0b1545bf84dccd915203c870.webp'
import img2 from './d78df6_9f4f79dd27814710b261e3acb931156e.webp'
import img3 from './d78df6_914d12d64a57420c99737b9933ebe7fc (1).webp'
import img4 from './d78df6_3eea4c192eed4667a602ead5652459c5.webp'
import img5 from './d78df6_afe9335eb67640c988d648f7671308e5 (1).webp'
import img6 from './d78df6_b572be78b8984e2db58978eb21e433d7.webp'
import img7 from './d78df6_b9747effc3074458a295cf5674f8c73c.webp'
import img8 from './d78df6_24dc2b5011604bc7ada79cbd953a7c5a.webp'
import img9 from './d78df6_394a136048754355ad8432b30522c761.webp'
import facebook from './facebook_mp.wix_mp'
import flick from './flick.webp'
import twitter from './twitter.webp'
import panterest from './panterest.webp'










function App() {
  return (
    
  <div>


<div className="container1">
<span >
  <p className='name' > Олег Марков</p>
  </span>

  <header>
    <ul>
    <li><a href="#">Главная</a></li>
    <li><a href="#">Обо мне</a></li>
      <li><a href="#">Связаться</a></li>
      
    </ul>
  </header>
  
  <div className="images">
    

 <div className="item img1" >
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img1} className="imgSize1" alt="" />
 </div>

 <div className="item img2" >
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img2} className="imgSize2" alt="" />
 </div>

 <div className="item img3" >
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img3} className="imgSize1" alt="" />
 </div>


 <div className="item img1" style={{top:"322px"}} >
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img4} className="imgSize1" alt="" />
 </div>


 <div className="item img3" style={{top:"322px"}}>
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img5} className="imgSize1" alt="" />
 </div>

 
 <div className="item img2" style={{top:"473px"}}>
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img6} className="imgSize1" alt="" />
 </div>




 <div className="item img1" style={{top:"641px"}} >
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img7} className="imgSize1" alt="" />
 </div>


 <div className="item img3" style={{top:"641px"}}>
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img8} className="imgSize1" alt="" />
 </div>

 
 <div className="item img2" style={{top:"792px"}}>
<div className="overlay" style={{height:"301px"}}>

</div>
<img src={img9} className="imgSize1" alt="" />
 </div>



  </div>

  <div className="links">
  <p>&#169; Олег Марков. Сайт создан на <a href="wix.com">Wix.com</a></p>

  <div className="socSet">
    <ul>
      <li><a href="#"><img src={facebook} alt="" /></a></li>
      <li><a href="#"><img src={flick} alt="" /></a></li>
      <li><a href="#"><img src={twitter} alt="" /></a></li>
      <li><a href="#"><img src={panterest} alt="" /></a></li>
     
    </ul>
  </div>
  </div>

  
</div>

    
  </div>

    
  );
}

export default App;
