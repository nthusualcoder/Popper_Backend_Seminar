
const url = require('url');
const querystring = require('querystring');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    const url_parsed = req.url.split('/');
    var operator = url_parsed[1];    
    var num1 = url_parsed[2] * 1;
    var num2 = url_parsed[3] * 1;

    if(operator == 'add'){
        var resultnum = num1 + num2;
        console.log(resultnum + num1 + num2);
        res.write("<form>resultnum</form>");
        response.end(resultnum);
    }else if(operator == 'sub'){
        var resultnum = num1 - num2;
        res.write("<p>hello2<p>");
        res.end();
    }else if(operator == 'mul'){
        var resultnum = num1 * num2;
        res.write("<p>hello3<p>");
        res.end();
    }else if(operator == 'div'){
        var resultnum = num1 / num2;
        res.write("<p>hello4<p>");
        res.end();
    }
    
});

server.listen(8080,() => {
    console.log("server is running on 8080 port")
})
//과제 수행 실패했습니다.ㅠ
