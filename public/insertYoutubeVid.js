function insertYouTubeVideo() {
    const container = document.querySelector('.yt-videos-container');
    
    if (!container) {
        console.warn("Container not found, retrying...");
        setTimeout(insertYouTubeVideo, 0); // Retry 
        return;
    }

    const videoDiv = document.createElement('div');
    videoDiv.classList.add('youtube-vid');

    const iframe = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube.com/embed/K10VXIhYf_A?si=LshFXUQeB5r4aFQ8";
    iframe.title = "YouTube video player";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullScreen = true;

    videoDiv.appendChild(iframe);
    container.appendChild(videoDiv);

    console.log("YouTube video inserted successfully!");
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', insertYouTubeVideo);
