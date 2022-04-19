const cheerio = require("cheerio");
const request = require("request");
const getIssuesPage = require("./issuesPage");

function getAllRepo (url){
    request(url,cb)
}
function cb(err,res,body){
    if(err){
        console.log(err);
    }
    else{
        //  console.log(body);
        getTopicLink(body);
    }
}

function getTopicLink(html){
    let selecTool = cheerio.load(html);
    let headingArr = selecTool('.f3.color-fg-muted.text-normal.lh-condensed');
    console.log(headingArr.length);
    for(let i = 0; i < 3; i++){
        let hrefLink = selecTool(headingArr[i]).find("a");
        let link = selecTool(hrefLink[1]).attr("href")
        // console.log(link);
        // let repoName = link.split("/").pop();
        let issuesLink = "https://github.com" + link;
        getIssuesPage(issuesLink);
         console.log(issuesLink);
        
    }

    console.log("``````````````````````````````````````````````````");
}

module.exports = getAllRepo;