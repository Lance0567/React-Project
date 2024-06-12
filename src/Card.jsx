import profilePicture from './assets/picture.jpg'

function Card() {
    
    return(
        <div className='card'>
            <img className='card-image' src={profilePicture} alt="Profile picture"></img>
            <h2 className='card-title'>Lance Esurena</h2>
            <p className='card-text'>Computer Engineer</p>
        </div>
    );
}

export default Card