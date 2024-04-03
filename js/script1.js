cdocument.addEventListener('DOMContentLoaded', function () {
    const main_video = document.querySelector('.main-video video');
    const main_video_title = document.querySelector('.main-video .title');
    const video_playlist = document.querySelector('.video-playlist .videos');

    let data = [
        {
            'id': 'a1',
            'title': 'manipulate text background',
            'name': 'manipulate text background.mp4',
            'duration': '2:47',
        },
        // Add other video data objects here
    ];

    // Loop through the data and create HTML elements for each video
    data.forEach((video, i) => {
        let video_element = `
            <div class="video" data-id="${video.id}">
                <img src="images/play.svg" alt="">
                <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                <h3 class="title">${video.title}</h3>
                <p class="time">${video.duration}</p>
            </div>
        `;
        video_playlist.innerHTML += video_element;
    });

    // Add click event listeners to each video element
    let videos = document.querySelectorAll('.video');
    videos[0].classList.add('active');
    videos[0].querySelector('img').src = 'images/pause.svg';

    videos.forEach(selected_video => {
        selected_video.onclick = () => {
            // Remove 'active' class from all videos
            videos.forEach(video => {
                video.classList.remove('active');
                video.querySelector('img').src = 'images/play.svg';
            });

            // Add 'active' class to the clicked video
            selected_video.classList.add('active');
            selected_video.querySelector('img').src = 'images/pause.svg';

            // Update main video source and title
            let match_video = data.find(video => video.id == selected_video.dataset.id);
            main_video.src = 'videos/' + match_video.name;
            main_video_title.innerHTML = match_video.title;
        };
    });
});
