let adder = (sum, element) => {
    let p = new Promise((resolve) => {
        resolve(sum + element);
    });

    return p;
}


export let loop = (request, h) => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum = 0;

    numbers.forEach(n => {
        console.log(`Trying to add ${n}`);
        adder(sum, n)
            .then(res => {
                console.log(`Current sum is ${n}`);
                sum = res
            });
    });

    return sum;
};

export let csv2json = (request, h) => {
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
    // Returning the JSON result.
    return result;
};