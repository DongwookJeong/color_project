const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

function htmlMaker(head ="", body="") {
  let htmlString = "";
  htmlString += `<!DOCTYPE html><html lang="en">`;
  htmlString += `<head>`;
  htmlString += `${head}`;
  htmlString += `</head>`;
  htmlString += `<body>`;
  htmlString += `${body}`;
  htmlString += `</body>`;
  htmlString += `</html>`;
  return htmlString;
}

function rainObj(){
  let seven = element.innerHTML
  element.innerHTML = html
}

const server = http.createServer((request, response) => {
  let getMethod = request.method;
  switch (getMethod) {
    case 'GET':
      response.writeHead(200, { 'Content-Type': 'text/html' });
      const htmlFile = htmlMaker("", `<div><ul>${rainObj}</ul></div>`);
      response.write(htmlFile);
      response.end();
      break;
    default:
      response.writeHead(405, { 'Content-Type': 'text/html' });
      response.write('Method Not Allowed');
      response.end();
      break;
  }
});
server.listen(3698, (error) => {if(error) throw error});