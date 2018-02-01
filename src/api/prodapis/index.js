import * as handlers from './handlers';

let routes = [
  {
    method: 'GET',
    path: '/loop',
    handler: handlers.loop
  },{
  	// Adding a new endpoint to accept a CSV file and convert it to a json object.
  	// It will accept a parameter called 'file', as a normal form data.
  	method: 'POST',
    path: '/csv2json',
    handler: handlers.csv2json
  }
];

export default routes;
