var router = express.Router();
var bodyParser = require('body-parser');



router.post('/sendmail', function (req, res) {
    console.log("submitting new email");
        name = req.body.name;
        email = req.body.facebookId;
        message = req.body.message;
    let xhr = new XMLHttpRequest();
    let url = "sendmail.php";

    // open a connection 
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    var data = JSON.stringify({ "name": name.value, "email": email.value, "message":message.value }); 

    xhr.send(data);
});