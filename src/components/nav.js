export default function Nav() {
    return (
        <div>
            <div className="grid">
                <div className="nav">
                    <img className="logo" alt="logo"></img>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
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