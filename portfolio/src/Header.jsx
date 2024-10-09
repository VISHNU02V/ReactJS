

function Header(){
    return(
        <header>
            <nav >
                <div className="img"><img src="https://live.staticflickr.com/65535/53895336044_caecd807ed_n.jpg" width="50" height="50" class="logo" alt="logo"/>
                </div>
                <div className="link">
                    <ul>
                        <li><a href="#about" className="nava" id="nava">Home</a></li>
                        <li><a href="#edu" className="nava" id="nava">Education</a></li>
                        <li><a href="#skills" className="nava" id="nava">Skills</a></li>
                        <li><a href="#pro" className="nava" id="nava">Project</a></li>
                        <li><a href="#cer" className="nava" id="nava">Certificate</a></li>
                        <li><a href="#intern" className="nava" id="nava">Internship</a></li> 
                        <li><a href="#footer" className="nava" id="nava">contact</a></li>  
                    </ul>
                </div>
                <div class="mode">
                    <div class="tdnn" id="tdnn">
                        <div class="moon" id="moon">
                       </div>
                   </div>
                </div>

                <div id="scroll-progress"></div>
                
            </nav>
        </header>
        
    );
}

export default Header