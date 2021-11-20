import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// //инициализируем (достучаться до узла)
const iframe = document.querySelector('iframe');
//создаем экземпляр
const player = new Vimeo.Player(iframe);
// Обновляем в локальном хранилище текущую позицию
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  // data is an object containing properties specific to that event
};
// // Получаем текущую из локального хранилища
const currentTime = localStorage.getItem('videoplayer-current-time');

// устанавливаем на плеере сохраненную текущую позицию
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = фактическое время, которое искал player
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // время было меньше 0 или больше, чем продолжительность
        break;

      default:
        // произошла другая ошибка
        break;
    }
  });

// отслеживаем событие timeupdate
//При запуске просмотра вызываем обработку и передаем текущие
// секунды в onPlay с интервалом в 1 секунду
player.on('timeupdate', throttle(onPlay, 1000));
//data - это объект, содержащий свойства, специфичные для этого события
