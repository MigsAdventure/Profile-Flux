import React from 'react';


const Interests = props => {
  const {sendInterests} = props;
  return (
    <ul>
      {sendInterests.map( (interest, i) => <li key={i}>{interest}</li>)}
    </ul>
    )

}


module.exports = Interests;