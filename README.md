# Simple File Studio (alpha)

The idea of this project is to build a file formatter and converter without uploading the files to server to avoid the server's dependency. Here, instead of the files to get uploaded to server, the logic/algorithm needed will be passed to the browser and formats files on-the-fly.

The webapp is built on Angular.
For formatting pdf files, it uses a npm package pdf-lib. The services include extract pages from pdf and merge pdf files.
For formatting video files, the service was developed using Webassembly and ECMAScripten that compiles ffmpeg package (available in C++) into a node package and use that package as the needed service. As of now, only files less than 4GB can be converted and still under development. Its scope is to use any kind of formatting in any user device just by visiting the below link.

Live Page:
[simplefilestudio.web.app](https://simplefilestudio.web.app/)
