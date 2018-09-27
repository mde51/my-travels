import React from "react";

import Travel from "./Travel";
// src/travel.js
const Travels = [
  {
    destination: "Londres",
    country: "Grande Bretagne",
    distance: "500 km",
    image:
      "https://media.aircorsica.com/sites/default/files/styles/main_image/public/2017-09/destinations-londres-2.png?itok=8WNnq-QJ"
  },
  {
    destination: "Barcelone",
    country: "Espagne",
    distance: "1200 km",
    image:
      "https://i2.wp.com/unepartdumonde.fr/wp-content/uploads/2017/07/barcelone-sagrada-familia.jpg?resize=768%2C1024&ssl=1"
  },
  {
    destination: "Rome",
    country: "Italie",
    distance: "1200 km",
    image:
      "https://d3hnyzq4jj54js.cloudfront.net/orig/pictures/12/31/123137/ctic-Rome-coliseum.jpg"
  },
  {
    destination: "Bruxelles",
    country: "Belgique",
    distance: "300 km",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/00/17/9d/d0/the-recently-renovated.jpg"
  },
  {      
    destination: "Paris",
    country: "France",
    distance: "150 km",
    image: 
      "https://www.sortiraparis.com/images/55/1467/387504-que-faire-ce-week-end-a-paris-du-21-22-et-23-septembre-2018.jpg"
  },
];

const travels = () => (
  <div>
    {Travels.map(Travels => (
      <Travel
        destination={Travels.destination}
        country={Travels.country}
        image={Travels.image}
        distance={Travels.distance}
      />
    ))}
  </div>
);

export default travels;
