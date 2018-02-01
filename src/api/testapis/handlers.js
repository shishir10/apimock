export let hello = (request, h) => {
	console.log(request.query);
	// Initializing the variable to store name in case there is a name.
	let name = "World";
	// Checking for parameters.
	if (request.query.name !== undefined) {
		// Capitalizing the name, and assigning it to the variable.
		name = request.query.name.charAt(0).toUpperCase() + request.query.name.slice(1);
	};
	// Returning the string.
  return 'Hello,' + name;
};

