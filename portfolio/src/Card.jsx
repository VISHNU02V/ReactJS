function Card(){
    return (
        <div className="container" id="pro">
            <div className="card">
                <img src="https://live.staticflickr.com/65535/53900839616_06281621ab_z.jpg" class="mpi" width="640" height="324" alt="Screenshot from 2024-08-04 15-20-44"/>      
                <h1>Main Project : Deep-Fake Detection</h1>
                <p> Deepfake technology utilizes deep neural networks to generate realistic-looking synthetic videos by superimposing one person's face onto another's body, enabling the creation of highly convincing but fabricated content.<br></br>We propose a deep learning-based approach for the detection of deepfake videos.The proposed deepfake detection system offers a promising solution for combating the proliferation of synthetic media and safeguarding the integrity of digital content in online platforms. <br />     <a href="https://github.com/Deep-Fake-Detection/Final_DeepFake" target="_blank" rel="noopener noreferrer"class="link">For more details</a>
                </p>
            </div>
            <div className="card">
                <img src="https://live.staticflickr.com/65535/53900878921_18d1a0c468_z.jpg"  class="cmpi" width="600" height="316" alt="Screenshot from 2024-08-04 15-49-15"/>
                <h1>Mini Project : Civil Plan Generator</h1>
                <p>The Civil Plan Generator website aspires to simplify and enhance the architectural design process. <br />Its features encompass intelligent plot recommendations based on user preferences, real-time visualization of architectural layouts, and automated room allocation algorithms. <br />The proposed website extends its utility not only to individuals seeking custom civil plans but also to urban planning professionals, architects, and property developers. <br /><a href="https://github.com/Civilplangenerator/civilplan" target="_blank" rel="noopener noreferrer"class="link">For more details</a></p>
            </div>
       
        </div> 
    );
}

export default Card