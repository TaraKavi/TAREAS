console.log(`RAF`);

const block = document.getElementById("test");
var mouseX = 0;
var mouseY = 0;

function updateCords(eventData){
    mouseX = eventData.clientX;
    mouseY = eventData.clientY;

    console.log(mouseX,mouseY);
}

document.addEventListener("mousemove", updateCords);

function updateDOM(){
    block.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    requestAnimationFrame(updateDOM);
}
requestAnimationFrame(updateDOM);
