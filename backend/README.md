# TODO backend

## Requirements, assuming OS of *nix variety

1. have mongodb installed. eg. downloaded from: https://www.mongodb.com/docs/guides/server/install/
   1. after installing, ensure <mongodb>/bin is in your path
2. <pre><code>npm run install</code></pre>  among other things, this: 
   1. creates a folder: data/db in this folder. this is ignored by git
      
## How to start the backend 

1. start mongodb with <pre><code>npm run startdb</code></pre>  this will leave mongodb running until you stop it. 
2. start todo backend with <pre><code>npm start</code></pre> this runs rha.js.
3. test startup by navigating to http://localhost:3001. expect to see a page with: <pre>TODO service &lt;version&gt;</pre>

## How to build and run docker container

1. docker build -t <imagename>
2. docker run -d -p 3001:3001 <imagename>

