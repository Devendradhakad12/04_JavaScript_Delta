document.addEventListener('DOMContentLoaded', async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
       console.log("stream",stream)
      const videoElement = document.getElementById('camera-preview');
      videoElement.srcObject = stream;
      console.log(videoElement.srcObject)
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  });
  