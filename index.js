const express = require('express');
const format = require('date-format');
const app = express();
const PORT = 4000 || process.env.PORT;

app.get("/api/v1/instagram", (req, res)=>{
	const instaSocial = {
		userName: "sumanshadangi",
		followers: 400,
		following: 300,
		date: format("dd-MM-yyyy hh:mm:ss",new Date()),
	};
	res.status(200).json(instaSocial);
})

app.get("/api/v1/facebook", (req, res)=>{
	const facebookSocial = {
		userName: "suman shadangi",
		followers: 200,
		following: 200,
		date: format("dd-MM-yyyy hh:mm:ss",new Date()),
	};
	res.status(200).json(facebookSocial);
})

app.get("/api/v1/linkedIn", (req, res)=>{
	const LinkedInSocial = {
		userName: "sumanshadangi",
		followers: 500,
		following: 400,
		date: format("dd-MM-yyyy hh:mm:ss",new Date()),
	};
	res.status(200).json(LinkedInSocial);
})

app.get("/api/v1/:token", (req, res) => {
	res.status(200).json({param: req.params.token});
})

app.listen(PORT,()=>{
	console.log(`Server running at port ${PORT}`);
})