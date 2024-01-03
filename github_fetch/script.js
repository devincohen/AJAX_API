
var returnData = document.querySelector('#user');
var returnData2 = document.querySelector('#data');


async function getCoderData() {
        // The await keyword lets js know that it needs to wait until it gets a response back to continue.
        var response = await fetch("https://api.github.com/users/devincohen");
        // We then need to convert the data into JSON format.
        var coderData = await response.json();
        returnData.innerHTML = "<p>" + coderData.name + "'s followers = "+ coderData.followers +"</p>"
        var data = Object.entries(coderData);
        var returnString = "";
        for (let i = 0; i < data.length; i++){
            returnString += "<p>" + data[i] + "</p>";
        }

        returnData2.innerHTML = returnString;
        return coderData;
    }
        


var data = getCoderData()
console.log(data);
    