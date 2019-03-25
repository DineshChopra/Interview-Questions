## What is Critical rendering path
Create DOM tree
download css and js files asynchronously
create CSSOM tree
Merge CSSOM and DOM tree, create Render tree
paint the Render tree on browser

## Critical rendering path optimizations
	Minify
	Compress
	Cache
Css files are rendering blocking
<link rel="stylesheet" href="style-print.css" media="print">
media="print" --> it will not block rendering 
<script src="...." async/defer></script>
async and defer -- it will now block rendering
    async - download script file asynchronously. After downloading start its execution
    defer - download script file asynchronously. It delays execution of the script till the time HTML parser is running. This reduces the loading time of web pages and they get displayed faster.