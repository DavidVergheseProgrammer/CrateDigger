import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function ProducersDetail(props) {
  const [producers, setProducers] = useState(null);
  const { id } = useParams();
  const allProducers = props.allProducers;
  const removeProducers = props.removeProducer;
  let oneProducer = '';
  let item = {};
  useEffect(() => {
    if (allProducers.length) {
      allProducers.map((num) => {
        if (num.id === Number(id)) {
          oneProducer = num;
        }
      });
      setProducers(oneProducer)
    }
  }, [allProducers, id])

  return (
    
    <div className="producers-entry">
         {
        props.allProducers.map((index2) => {
          if (producers !== null) {
            if (index2.id === producers.id) {
              console.log(index2);
              item.name = index2.name;
              item.genre = index2.genre;
              item.lifetime = index2.lifetime;
              item.location = index2.location;
            }
          }
      }
      )
      }
      <h3>Name: {item.name}</h3>
      <p>Genre: {item.genre}</p>
      <p>Lifetime: {item.lifetime}</p>
      <p>Location: {item.location}</p> 
      </div>
  )
}
export default ProducersDetail