// window.onload =
function insertYouTubeVideo() {
        try {
            const container = document.getElementsByClassName('yt-videos-container');
            console.log("container", container);
            if (!container) return;
    
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('youtube-vid-2');
    
            const iframe = document.createElement('iframe');
            iframe.width = "560";
            iframe.height = "315";
            iframe.src = `https://www.youtube.com/embed/K10VXIhYf_A?si=LshFXUQeB5r4aFQ8`;
            iframe.title = "YouTube video player";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            iframe.referrerPolicy = "strict-origin-when-cross-origin";
            iframe.allowFullScreen = true;
    
            videoDiv.appendChild(iframe);
            console.log("iframe", iframe);
            console.log("videodiv after", videoDiv);
            container.appendChild(videoDiv); 
        } catch (error) {
            console.log("error here", error)
        }
}

// Call the function to insert the video
insertYouTubeVideo();
