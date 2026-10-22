import pin from '../images/locationPin.png'
export default function Entry(props){
    return (
            <article className="article">

                <div className="img-container">
                    <img src={props.img.src} alt={props.img.alt} className="image"/>
                </div>

                <div className="details">
                    <img src={pin} alt="Location Pin" className='locationPin' />
                    <a href={props.googleMapLocation} className="mapLink" target="_blank">View on the google</a>
                    <h1 className="title">{props.title}</h1>
                    <p className="dates">{props.dates}</p>
                    <p className="text">{props.text}</p>
                </div>


            </article>
    )
}