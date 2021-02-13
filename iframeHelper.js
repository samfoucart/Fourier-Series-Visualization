/**
 * CITATION:
 * B. Cameron. "How to Automatically Resize an iframe" Medium, Jul 16 2019
 * https://medium.com/better-programming/how-to-automatically-resize-an-iframe-7be6bfbb1214
 */
window.onload = () => sendPostMessage();
window.onresize = () => sendPostMessage();
let height;
const sendPostMessage = () => {
    if (height !== document.getElementById('container').offsetHeight) {
        height = document.getElementById('container').offsetHeight;
        window.parent.postMessage({
            frameHeight: height
        }, '*');
        console.log(height) // check the message is being sent correctly
    }
}