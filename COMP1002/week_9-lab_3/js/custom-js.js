// Make sure that all our HTML has been rendered.
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // Test if JS is connected
    console.log("JS Connected");

    //Declare vars
    //let & var is writable
    let a = 200;
    let b = 180;
    let c = a + b;
    
    //const is fixed
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    
    //Output HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>"+"<p>Let: The value of C is " + c + "</p>" + 
    "<p>Const: The total is "+ total +"</p>";
    //Style the HTML with JS
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";

    //Creating Global Header
    document.getElementById("lesson-global-header").innerHTML = 
        "<div id = 'logo-container'>" +
            "<a href='index.html'>" +
                "<img id='logo' src='./img/logo.png' alt='Header Logo'>" +
            "</a>" +
        "</div>" +
        "<nav><menu>" +
            "<li><a href = '#'>Item 1</a></li>" +
            "<li><a href = '#'>Item 2</a></li>" +
            "<li><a href = '#'>Item 3</a></li>" +
        "</menu></nav>";
    
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height: 125px; background-color: #f8f8f8; align-items: clearInterval;"
    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height: 110px; width: auto";
    document.getElementById("logo").style.cssText = "width: auto; height: 100%;";

    //LAB 3
    document.getElementById("lab-main").innerHTML = 
        "<section class = 'lesson-two-col'>" +
            "<div>" +
                "<h3>Place Holder Header</h3>" +
                "<p>BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH</p>" +
            "</div>" +

            "<img src='./img/image-3.jpg' alt='Image from and earlier lesson' id='main-img'>" +
        "</section>";
    
    document.getElementById('main-img').style.cssText = "width: 50%; height: auto;"
});