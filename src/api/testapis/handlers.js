export let hello = (request, h) => {
    console.time('responseTimeMs');
    // Initializing the variable to store name in case there is a name.
    let name = "World";
    // Checking for parameters.
    if (request.query.name !== undefined) {
        // Capitalizing the name, and assigning it to the variable.
        name = request.query.name.charAt(0).toUpperCase() + request.query.name.slice(1);
    };
    // Printing the optional stats.
    console.log('method=' + request.method + ' path=' + request.path + ' statusCode=200');
    console.timeEnd('responseTimeMs')
    // Returning the string.
    return 'Hello,' + name;
};