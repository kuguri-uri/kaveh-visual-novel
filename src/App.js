import dude from './resources/img/dude.png';
import face from './resources/img/dude_face.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="buttons"></div>

      <div className="dude">
        <div className="body">
          <img src={dude} alt="dude" />
        </div>
      </div>

      <div className="textarea">
        <div className="title">Kaveh</div>
        <span></span>
        <div className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae vero consequuntur quo nesciunt exercitationem corporis, repellendus consectetur repellat quia suscipit molestias aliquam nemo. Eaque ad accusantium quae quidem sequi!</div>
      </div>
    </div>
  );
}

export default App;
