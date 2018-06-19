const chai = require("chai");

const expect = chai.expect;

const app = require("../server")
const chaihttp = require("chai-http");
//register the middleware
chai.use(chaihttp);
//index




describe("index",function(){
	//index should be served
	it("should be served", function(){
		// start the server
		//app is the server written in express which is some path
		chai.request(app).get("/").then(response => {
			expect(response).to.have.status(200);
		})
	})
});

