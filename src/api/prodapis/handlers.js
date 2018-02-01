const async = require('async');

let adder = (sum, element) => {
    let p = new Promise((resolve) => {
        resolve(sum + element);
    });

    return p;
}


export let loop = (request, h) => {
    console.time('responseTimeMs');
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;

    // Starting teh loop asynchronously, so that it waits for new result and update sum, before starting a new loop.
    // Still, there is a bug in the application, it does not wait for new sum value, and returns back 0.
    async.eachSeries(numbers, function(n, callback) {
        adder(sum, n)
            .then(res => {
                console.log(`Trying to add ${n}`);
                sum = res;
                console.log(`Current sum is ${sum}`);
                callback();
            });
    }, function(err) {
        if (err) {
            console.error('Something went wrong - ', err);
        }
    });
    // Printing the optional stats.
    console.log('method=' + request.method + ' path=' + request.path + ' statusCode=200');
    console.timeEnd('responseTimeMs');
    // It is not returning the correct sum.
    return sum;
};

export let csv2json = (request, h) => {
    console.time('responseTimeMs');
    // Initializing the CSV file to a variable.
    var csv = request.payload.file;
    // Splitting lines seperately.
    var lines = csv.split("\n");
    var result = [];
    // Storing headers seperately.
    var headers = lines[0].split(",");
    // Iterating through the lines.
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[i].split(",");
        // Checking for the line, should not be empty.
        if (currentLine[0] !== '') {
            for (var j = 0; j < headers.length; j++) {
                // Putting each entry into the respective header.
                obj[headers[j]] = currentLine[j];
            }
            result.push(obj);
        };
    }
    // Printing the optional stats.
    console.log('method=' + request.method + ' path=' + request.path + ' statusCode=200');
    console.timeEnd('responseTimeMs');
    // Returning the JSON result.
    return result;
};