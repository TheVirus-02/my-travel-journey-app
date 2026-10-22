import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import travelData from './data';

export default function App(){
    const travelEntries = travelData.map((data) => (
          <Entry 
              img = {data.img}
              googleMapLocation = {data.googleMapLocation}
              title = {data.title}
              dates = {data.dates}
              text = {data.text}
                />
    ))

 return (
    <>
      <Header />
      {travelEntries}
     
    </>
 )
}

