export default function Nav() {
    return (
        <div>
            <div className="grid">
                <div className="nav">
                    <img className="logo" alt="logo"></img>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                   <div className="right-nav">
                        <img className="login" alt="login"></img>
                        <img className="cart" alt="cart"></img>
                   </div> 
                </div>
                
                <div className="search">
                <hr/>
                    <input type="search" placeholder="Search"></input>
                    <img className="search-btn"></img>
                </div>
            </div>
        </div>
    )
}