
const Footer = () => {
    return(
        <footer className="footer bg-dark text-white py-4" >
            <div className="row text-center">
                <div className="col d-flex justify-content-center">
                    <i class="bi bi-facebook mx-2 fs-3"></i>
                    <i class="bi bi-instagram mx-2 fs-3"></i>
                    <i class="bi bi-twitter mx-2 fs-3"></i>
                    <i class="bi bi-google mx-2 fs-3"></i>
                    <i class="bi bi-youtube mx-2 fs-3"></i>
                </div>
            </div>
            <div className="case mt-3">
                <div className="row text-center">
                    <div className="col d-flex justify-content-center">
                        <h6 className="mx-3">Home</h6>
                        <h6 className="mx-3">News</h6>
                        <h6 className="mx-3">About</h6>
                        <h6 className="mx-3">Contact Us</h6>
                        <h6 className="mx-3">Our Team</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;