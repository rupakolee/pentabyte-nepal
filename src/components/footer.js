export default function Footer(props) {
    return(
        <div className="footer-container">
        <div className="footer">
            <div className="footer-left">
                <div className="footer-name">
                    <img alt="Logo"/>
                    <h1>Pentabyte Nepal</h1>
                </div>
                <div>
                    <h5>Contact</h5>
                    <p><img alt="mail-logo"/> {props.email}</p>
                    <p><img alt="phone-logo"/> {props.phone}</p>
                </div>
            </div>

            <div className="footer-right">
                <h4>Social Links</h4>
                <div>
                    <img alt="social"/>
                    <img alt="social"/>
                    <img alt="social"/>
                    <img alt="social"/>
                </div>
            </div>
        </div>
        <hr className="white-hr"/>

        <div className="copyright">Copyright &copy; PentaByte Nepal. All rights reserved.</div>
        </div>
    )
}