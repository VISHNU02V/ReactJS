import * as Icon from 'react-bootstrap-icons';


function Footer(){
    return(
        <footer className="footer">
            <div className="foot">
                <a href="tel:+6282651787" className="phone" target="_blank" rel="noopener noreferrer"><Icon.TelephoneForwardFill fontSize={'28px'} /></a>
                <a href="http://github.com/vishnu02v" className="git" target="_blank" rel="noopener noreferrer"><Icon.Github fontSize={'28px'}/></a>
                <a href="https://www.linkedin.com/in/vishnu02v/" className="linkedin" target="_blank" rel="noopener noreferrer"><Icon.Linkedin fontSize={'28px'}/></a>
                <a href="https://www.instagram.com/_v_i_s_h_n_u_v__/" className="insta" target="_blank" rel="noopener noreferrer"><Icon.Instagram fontSize={'28px'} /></a>
            </div>
        </footer>
    );
}

export default Footer