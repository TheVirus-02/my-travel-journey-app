import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import Footer from './components/Footer';
import travelData from './data';

export default function App(){
    const travelEntries = travelData.map((data) => (
          <Entry
              key = {data.id}
              state = {data.state} 
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
      <Footer />
     
    </>
 )
}

