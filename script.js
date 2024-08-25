// Get the video element
const videoElement = document.getElementById('screenVideo');

// Function to start screen sharing
async function startScreenShare() {
    try {
        // Request the screen media
        const screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        videoElement.srcObject = screenStream;
    } catch (error) {
        console.error('Error: Unable to share screen', error);
    }
}

// Start screen sharing when the page loads
window.onload = startScreenShare;

// Button click actions
document.getElementById('button1').addEventListener('click', () => {
    console.log('Button 1 clicked');
    alert('Button 1 clicked!');
});

document.getElementById('button2').addEventListener('click', () => {
    console.log('Button 2 clicked');
    alert('Button 2 clicked!');
});
