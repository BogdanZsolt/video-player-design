const mainVideo = document.querySelector('.main-video video');
const mainVideoTitle = document.querySelector('.main-video .title');
const videoPlaylist = document.querySelector('.video-playlist .videos');

let data = [
  {
    id: "a1",
    title: "manipulate text background",
    name: "manipulate text background.mp4",
    duration: "2:47",
  },
  {
    id: "a2",
    title: "build gauge with css",
    name: "build gauge with css.mp4",
    duration: "2:45",
  },
  {
    id: "a3",
    title: "3D popup card",
    name: "3D popup card.mp4",
    duration: "24:49",
  },

  {
    id: "a4",
    title: "customize HTML5 form elements",
    name: "customize HTML5 form elements.mp4",
    duration: "3:59",
  },
  {
    id: "a5",
    title: "custom select box",
    name: "custom select box.mp4",
    duration: "4:25",
  },
  {
    id: "a6",
    title: "embed google map to contact form",
    name: "embed google map to contact form.mp4",
    duration: "5:33",
  },
  {
    id: "a7",
    title: "password strength checker javascript web app",
    name: "password strength checker javascript web app.mp4",
    duration: "0:29",
  },

  {
    id: "a8",
    title: "custom range slider",
    name: "custom range slider.mp4",
    duration: "1:12",
  },
  {
    id: "a9",
    title: "animated shopping cart",
    name: "animated shopping cart.mp4",
    duration: "3:38",
  },
];

data.forEach((video, index) => {
  let videoElement = `
    <div class="video" data-id="${video.id}">
      <img src="./img/play.svg" alt="">
      <p>0${index+1}. </p>
      <h3 class="title">${video.title}</h3>
      <p class="time">${video.duration}</p>
    </div>
  `;
  videoPlaylist.innerHTML +=videoElement;
})

let videos = document.querySelectorAll('.video');
console.log(videos[0]);
videos[0].classList.add('active');
videos[0].querySelector('img').src = './img/pause.svg';

videos.forEach(selectedVideo => {
  selectedVideo.onclick = () => {
    for(allVideos of videos) {
      allVideos.classList.remove('active');
      allVideos.querySelector("img").src = "./img/play.svg";
    }
    selectedVideo.classList.add('active');
    selectedVideo.querySelector("img").src = "./img/pause.svg";
    let matchVideo = data.find(video => video.id == selectedVideo.dataset.id)
    mainVideoTitle.innerHTML = matchVideo.title;
    mainVideo.src = 'videos/' + matchVideo.name;
  }
})