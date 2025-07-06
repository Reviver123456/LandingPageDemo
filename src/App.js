import logo from './logo.svg';
import './App.css';
import img1 from './img/07-21.png';
import img2 from './img/07-20.png';
import img3 from './img/04-14.png';
import img4 from './img/02-13.png';
import img5 from './img/05-16.png';
import img6 from './img/DSC_0080_0.jpg';
import img7 from './img/DSC_0115_0.jpg';
import img8 from './img/DSC_0192_0.jpg';
import img9 from './img/DSC_0296_0.jpg';
import img10 from './img/01-12.png';
import img11 from './img/06-17.png';
import img12 from './img/06-18.png';
import img13 from './img/06-19.png';
import img14 from './img/08-22.png';


function App() {
  return (
    <div className="App">
      <div className='bg-container'>
        <div className='container'>
          <div className='header-container'>
            <div>
              <img src={img2} className="head2" alt="head" />
            </div>
            <div>
              <img src={img1} className="head1" alt="head" />
            </div>
            <div>
              <img src={img3} className="head1" alt="head" />
            </div>
          </div>
          <div className='center-container'>
            <div>
              <img src={img4} className="head2" alt="head" />
            </div>
            <div>
              <img src={img5} className="head3" alt="head" />
            </div>
            <div>
              <img src={img10} className="head4" alt="head" />
            </div>
            <div className='box-a'>
              <div>
                <img src={img6} className="head02" alt="head" />
              </div>
              <div>
                <img src={img7} className="head02" alt="head" />
              </div>
              <div>
                <img src={img8} className="head02" alt="head" />
              </div>
              <div>
                <img src={img9} className="head02" alt="head" />
              </div>
            </div>
            <div className='box-b'>
              <div>
                <img src={img11} alt="head" />
              </div>
              <div>
                <img src={img12} alt="head" />
              </div>
              <div>
                <img src={img13} alt="head" />
              </div>
            </div>
            <div>
              <div>
                <img src={img14} alt="head" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
