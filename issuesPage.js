const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");
function getAllIssues(url) {
    request(url, cb)
}

function cb(err, res, body) {
    if (err) {
        console.log(err);
    }
    else {
        //  console.log(body);
        getAllIssuesLink(body);
    }
}

function getAllIssuesLink(html) {
    let selecTool = cheerio.load(html);
    let issuess = selecTool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    //console.log(issuess);
    //console.log(issuess.length);
    let arr =[];
    for(let i = 0; issuess.length; i++){
        let issu = selecTool(issuess[i]).attr("href");
        // console.log(issu);
        arr.push(issu);

       
    }
   
   
   
}

module.exports = getAllIssues;


