import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('play', onPlay);

// import throttle from 'lodash.throttle';

// //инициализируем (достучаться до узла)
// const iframe = document.querySelector('#vimeo-player');

// //создаем экземпляр
// const iframePlayer = new Vimeo.Player(iframe);

// // Обновляем в локальном хранилище текущую позицию
// const onPlay = function (data) {
//     localStorage.setItem("videoplayer-current-time", data.seconds)
//     // data is an object containing properties specific to that event
// };

// // Получаем текущую из локального хранилища
// const currentTime = localStorage.getItem("videoplayer-current-time");

// // устанавливаем на плеере сохраненную текущую позицию
// iframePlayer.setCurrentTime(currentTime).then(function(seconds) {
//     // seconds = фактическое время, которое искал player
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // время было меньше 0 или больше, чем продолжительность
//             break;

//         default:
//             //произошла другая ошибка
//             break;
//     }
// });

// // отслеживаем событие timeupdate
// //При запуске просмотра вызываем обработку и передаем текущие
//  // секунды в onPlay с интервалом в 1 секунду
// iframePlayer.on('timeupdate', throttle(onPlay, 1000));
// //data - это объект, содержащий свойства, специфичные для этого события
