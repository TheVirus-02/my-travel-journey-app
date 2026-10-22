// Entry.jsx
import pin from '../images/locationPin.png';

export default function Entry(props) {
  return (
    <article className="article" id={props.key}>
      <div className="img-container">
        <img src={props.img.src} alt={props.img.alt} className="image" />
      </div>

      <div className="details">
        <div className="location-row">
          <img src={pin} alt="Location Pin" className="locationPin" />
          <span className='state'>{props.state}</span>
          <a
            href={props.googleMapLocation}
            className="mapLink"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.title}</h2>
        <p className="dates">{props.dates}</p>
        <p className="text">{props.text}</p>
      </div>
    </article>
  );
}