/* <== JavaScript Responsive time of an event

Responsive time of an event is the time taken to load the 
result of that event and the time taken to start that 
event. In this post, various shapes have been used using 
Math.random() function. The task is to find out the responsive 
time of changing these shapes. As soon as you click the 
shape, it gets disappears and shows the response time on 
the top of the web page and a new shape get appears while 
the previous one gets disappeared. 

JavaScript code to change the shapes and find their 
responsive time 

Example: In this example, we will see the response time 
of loading of each shape on the screen ==> */

{/* <style type="text/css">
    #s1 {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        display: none;
    }
 
    #s2 {
        height: 200px;
        width: 200px;
        display: none;
    }
 
    #s3 {
        height: 140px;
        width: 200px;
        display: none;
    }
 
    #button {
        position: absolute;
        left: 100px;
        top: 100px;
        height: 70px;
        width: 300px;
        font-size: 25px;
        background-color: darkseagreen;
    }
</style>
 
<button id="button" onclick="myfun()">START GAME</button>
<p id="time"></p>
<div id="s1"></div>
<div id="s2"></div>
<div id="s3"></div>
<script type="text/javascript">
    function myfun() {
        document.getElementById("button").style.display="none";
        var shape=Math.floor((Math.random()*3)+1);
        var shape1="s"+shape;
        var a=new Array(6);
        var text="";
        text=text+"#";
        for(i=0;i<6;i++) {
            a[i]=(Math.floor(Math.random()*15)+1);
            if(a[i]==10) {
                text=text+"A";
            } else if(a[i]==11) {
                text=text+"B";
            } else if(a[i]==12) {
                text=text+"C";
            } else if(a[i]==13) {
                text=text+"D";
            } else if(a[i]==14) {
                text=text+"E";
            } else if(a[i]==15) {
                text=text+"F";
            } else {
                text=text+a[i];
            }
        }
 
        document.getElementById(shape1).style.backgroundColor=text;
        var a=document.getElementById(shape1);
        random1=Math.floor(Math.random()*250)+1;
        random2=Math.floor(Math.random()*300)+1;
        a.style.position="absolute";
        a.style.left=random1;
        a.style.top=random2;
        document.getElementById(shape1).style.display="block";
        var start=Date.now();
        document.getElementById(shape1).onclick=function() {
            var end=Date.now();
            document.getElementById(shape1).style.display="none";
            var diff=end-start;
            var diff1=diff/1000;
            document.getElementById("time").innerHTML=diff1;
            myfun();
        }
 
    }
</script> */}