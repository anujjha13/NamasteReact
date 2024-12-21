import React from 'react';
import {useRouteError} from 'react-router-dom';
export const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
        <h1>Oopppssss!!!!!!</h1>
        {/* <h2>Url Not Found</h2> */}
        <h3>{err.status + err.statusText}</h3>
    </div>
  )
};
