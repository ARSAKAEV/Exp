import Photo1 from"./Group1.png"
import Photo2 from"./Group2.png"
import Photo3 from"./Group3.png"

function Buttons(props) {
    function plus(){
        props.setCounter(props.counter + 3)
    }

    function minus(){
        if(props.counter >= 2){
            props.setCounter(props.counter - 2)
        }
        if(props.counter === 1){
            props.setCounter(props.counter - 1)
        }
    }

    function reset(){
        props.setCounter(0)
    } 

    return (
      <div className="buttons">
        <div className="buttons">
            <div className="button1">
            <button onClick={plus}><img src={Photo1}></img></button>
            </div>
            <div className="button3">
            <button onClick={reset}><img src={Photo3}></img></button>
            </div>
            <div className="button2">
            <button onClick={minus}><img src={Photo2}></img></button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Buttons;