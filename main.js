let url = "https://github.com/topics";
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const fs = require("fs");
const repoPageBody = require("./repoPage");
const getAllIssues = require("./issuesPage");

request(url,cb);
function cb(err,res,body){
    if(err){
        console.log("error",err);
    }
    else{
        //console.log(body);
        handleHTML(body);
    }
}



function handleHTML(html){
    let selecTool = cheerio.load(html);
    let anchoreElem = selecTool('.no-underline.d-flex.flex-column.flex-justify-center');
    //console.log(anchore);
    for(let i = 0; i < anchoreElem.length;i++){
       let relativeLink = selecTool(anchoreElem[i]).attr("href");
       // console.log(relativeLink);
       let topic = relativeLink.split("/").pop();
       console.log(topic);
       let fullLink = "https://github.com" + relativeLink;
        //   console.log(fullLink);
        repoPageBody(fullLink);

    }
}

