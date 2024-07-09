export default function Item(props) {
    return (
        <div className="item">
           <img src={props.img} alt="product"/>
           <h6>{props.name}</h6>    
           <p>{props.price}</p>
           <div className="item-btns">
              <button>Get Now!</button>
              <button>Visit</button>
           </div>
        </div>
    )
}