function About(){
    const content1 = "Hello ! I am VISHNU V "
    const content2 = " Greetings , I am a seasoned artisan in the realm of Computer Science and Engineering, weaving intricate tapestries of code and technological marvels . Possessing a bouquet of skills in software alchemy,my unwavering commitment to excellence propels me towards orchestrating innovation and elevating the landscape of Computer Science and Engineering."
    return(
        <div className="about" id="about">
            <div className="profilepic">
                <img src="https://live.staticflickr.com/65535/53896782014_519ca74d5b_m.jpg" width="164" height="240" class="proimg" alt="profile pic"/>
            </div>
            <p>
                {content1} <br></br>
                {content2}  
            </p> 
        </div>
              
    );

}

export default About