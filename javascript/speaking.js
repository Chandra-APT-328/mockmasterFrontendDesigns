// Check for media device availability
if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Your browser does not support audio recording.');
  }
  
  const video = document.getElementById('promptVideo');
  const statusText = document.getElementById('statusText');
  const submitBtn = document.getElementById('submitBtn');
  let mediaRecorder;
  let recordedChunks = [];
  let recordingTimeout;
  
  // When video finishes playing, start recording
  video.onended = () => {
    statusText.textContent = "Recording in progress...";
  
    // Request access to the microphone and start recording
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      mediaRecorder = new MediaRecorder(stream);
  
      mediaRecorder.ondataavailable = event => {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };
  
      mediaRecorder.start();
      submitBtn.classList.remove('hidden');
  
      // Stop recording after 30 seconds if user doesn't click submit
      recordingTimeout = setTimeout(() => {
        stopRecording();
      }, 30000); // 30 seconds
  
    }).catch(err => {
      console.error('Error accessing microphone:', err);
      statusText.textContent = "Error accessing microphone.";
    });
  };
  
  // Stop recording and submit
  function stopRecording() {
    mediaRecorder.stop();
    statusText.textContent = "Recording finished! Preparing to submit...";
    submitBtn.classList.add('hidden');
    
    // Simulate recording submission
    submitRecording();
  }
  
  // Listen for submit button click to stop recording early
  submitBtn.addEventListener('click', () => {
    clearTimeout(recordingTimeout);  // Clear the timeout to avoid double-stop
    stopRecording();
  });
  
  // Simulate recording submission and show playback
  function submitRecording() {
    const recordedBlob = new Blob(recordedChunks, { type: 'audio/webm' });
    const audioURL = URL.createObjectURL(recordedBlob);
    const formData = new FormData();
    formData.append('audio', recordedBlob);
  
    // Display a submission message
    statusText.textContent = "Submitting your recording...";
  
    // Simulate server submission
    setTimeout(() => {
      statusText.textContent = "Recording submitted successfully!";
      
      // Show audio playback
      showAudioPlayer(audioURL);
    }, 2000);
  }
  
  // Function to create and display the audio player
  function showAudioPlayer(audioURL) {
    const audioPlayerContainer = document.createElement('div');
    audioPlayerContainer.className = 'mt-4';
    
    const audioPlayer = document.createElement('audio');
    audioPlayer.controls = true;
    audioPlayer.src = audioURL;
  
    const playerLabel = document.createElement('p');
    playerLabel.className = 'text-lg font-medium';
    playerLabel.textContent = "Your recorded voice:";
  
    audioPlayerContainer.appendChild(playerLabel);
    audioPlayerContainer.appendChild(audioPlayer);
    
    document.querySelector('.max-w-lg').appendChild(audioPlayerContainer);
  }
  

  window.onload = () => {
    const video = document.getElementById('promptVideo');
    
    // Attempt to autoplay the video with sound after the page loads
    video.play().catch(error => {
      console.log('Autoplay failed, muting the video.');
      video.muted = true; // Mute and then try again if autoplay fails
      video.play();
    });
  };
  