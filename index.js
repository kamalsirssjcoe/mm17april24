const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/mm", (req, res) => {
	let messages = ["m1", "m2", "m3", "m4", "m5"];
	let r = parseInt(Math.random() * messages.length);
	msg = messages[r];
	res.send({"msg":msg});
	res.end();
});

app.listen(9000, () => { console.log("ready @ 9000"); } );

