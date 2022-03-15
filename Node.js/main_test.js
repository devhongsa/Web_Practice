var http = require('http');     // http 모듈 사용
var fs = require('fs');         //file system 모듈 사용
var url = require('url');       //url 모듈 사용
var qs = require('querystring') //data 수신해서 쓰기위한 모듈.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var querydata = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    function templateHTML(title, list, description, control){
      return `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              ${control}
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
    }

    function templateList(filelist){
      var list = '<ul>';
      var i = 0;
      while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
      }
      list = list + '</ul>';
      return list;
    }

    if(pathname === '/'){
      if(querydata.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateList(filelist);
          var template = templateHTML(title,list,description,
            `<a href="/create">create</a>`);
            response.writeHead(200);
            response.end(template);
        })
      }
      else {
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${querydata.id}`,'utf8', function(err,description){
            var title = querydata.id;
            var list = templateList(filelist);      //readFile 함수 안에 html 내용 들어가야됨. description에는 파일읽은내용들어감.
            var template = templateHTML(title,list,description,
              `<a href="/create">create</a> <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
              </form>`);
              //무언가를 삭제하는거는 링크로 만들면 절대안됨.!! 그 링크를 따라 들어가면 delete버튼을 안눌러도 지울수 있기때문 그래서 form으로 만들어야함.

          response.writeHead(200);
          response.end(template);
          });
        });
       }
      }
    else if(pathname === '/create'){              // create버튼 눌렀을때 나오는 html 페이지 설정.
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var description = `<form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
          <textarea name="description" placeholder="text"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
        </form>
        `;   //action에서의 주소는 submit을 눌렀을때 /create_process 페이지로 넘어가고 여기에 input 정보를 보냄.
        var list = templateList(filelist);
        var template = templateHTML(title,list,description,'');
        response.writeHead(200);
        response.end(template);
      })
    }
    else if(pathname === '/create_process'){      //submit을 눌렀을때 /create_process로 넘어오게되고 이페이지를 설정
      var body = ''
      request.on('data', function(data){
        body += data;
        if (body.length > 1e6){                   //너무 많은 데이터는 html이 수용할 수 없기때문에 예외처리
          request.connection.destroy();}
      });
      request.on('end', function(){
        var post = qs.parse(body);          //body를 쿼리스트링으로 변환.
        var title = post.title;             //이렇게 post 쿼리스트링으로 변환된 데이터를 변수에 저장해서 사용가능.
        var description = post.description;
        fs.writeFile(`data/${title}`,description, 'utf8', function(err){        //파일만들고 쓰는 작업.
          response.writeHead(302, {Location: `/?id=${title}`});                 // 다른페이지로 이동해라.
          response.end();
        })
      });
    }
    else if(pathname === '/update'){          //update 눌렀을때 페이지에 뭐 띄울건지
      fs.readdir('./data', function(error, filelist){
        fs.readFile(`data/${querydata.id}`,'utf8', function(err,description){
          var title = querydata.id;
          var list = templateList(filelist);      //readFile 함수 안에 html 내용 들어가야됨. description에는 파일읽은내용들어감.
          var template = templateHTML(title,list,
            `
            <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <p><input type="text" name="title" placeholder="title" value=${title}></p>
            <p>
              <textarea name="description" placeholder="text">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);   //input태그 type의 hidden은 화면에 출력x
        response.writeHead(200);
        response.end(template);
        });
      });
    }
    else if(pathname === '/update_process'){    //수정된 정보를 업데이트하는 과정
      var body = ''
      request.on('data', function(data){
        body += data;
        if (body.length > 1e6){                   //너무 많은 데이터는 html이 수용할 수 없기때문에 예외처리
          request.connection.destroy();}
      });
      request.on('end', function(){
        var post = qs.parse(body);          //body를 쿼리스트링으로 변환.
        var id = post.id;                   //파일제목이 수정되기 전 파일제목.
        var title = post.title;             //수정된 파일제목
        var description = post.description; //수정한 파일내용
        fs.rename(`data/${id}`,`data/${title}`, function(error){
          fs.writeFile(`data/${title}`,description, 'utf8', function(err){        //수정된 제목과 내용들 업데이트
            response.writeHead(302, {Location: `/?id=${title}`});                 // 다른페이지로 이동해라.
            response.end();
          })
        })
        console.log(post);
      });
    }
    else if(pathname === '/delete_process'){
      var body = ''
      request.on('data', function(data){
        body += data;
        if (body.length > 1e6){                   //너무 많은 데이터는 html이 수용할 수 없기때문에 예외처리
          request.connection.destroy();}
      });
      request.on('end', function(){
        var post = qs.parse(body);          //body를 쿼리스트링으로 변환.
        var id = post.id
        fs.unlink(`data/${id}`, function(err){
          response.writeHead(302, {Location:`/`});
          response.end();
        })
      });
    }

    else {
    response.writeHead(404);
    response.end('Not Found');
    }
});

app.listen(3000);
