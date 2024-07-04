export default function Item() {
    return (
        <div className="item">
           <img alt="product"></img>
           <h6>Product Name</h6>
           <p>Price</p>
           <div className="item-btns">
              <button>Get Now!</button>
              <button>Visit</button>
           </div>
        </div>
    )
}