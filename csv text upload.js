function csvUpload(csvText){
    //Split all the text into seperate lines on new lines and carriage return feeds
    var allTextLines = csvText.split(/\r\n|\n/);
    //Split per line on tabs and commas
    var headers = allTextLines[0].split(/\t|,/);
    var lines = [];
    var locations = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(/\t|,/);

        if (data.length == headers.length) {

        var location = {"device_id":data[0], "address":data[1], "city":data[2]};
        locations.push(location);

        }

    }
    return locations;
})