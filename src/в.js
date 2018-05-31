var mp3 = (songs/* string array*/,currentsong/*number value*/)=>{
    let isShuffle = false;
    let getCurrentSong = ()=>{
        return songs.length > currentSong ? songs[currentSong] : null;
    }
    let getNextSong = ()=>{
        //you code here
        var nextSong = document.getElementsByName('songs');
        var song = document.createElement('a');
        song.innerHtml = 'song name';
        song.href = '#';

        element.appendChild(song);
    }
    return {
        getCurrentSong : getCurrentSong,
        shuffle: val => isShuffle = val,
        getNextSong: getNextSong
};
}
Я не знаю как правильно, в данном случае придумал так, что будет добавляться ссылка на слудующуу песню, после songs, тоесть для воспроизведения следующей песни.
    Если это глупость, то посоветуйте мне пожалуйста  ресурс, чтобы я повысил свои знания, до нужного уровня. Я уже год обучаюсь, куча информации в голове, что-то забывается, что-то постоянно новое запоминается, вот такой вот цикл. Мне бы настоящюю практику, пощупать работу, я быстро обучусь всему что нужно, потому что проходил все возможные темы, есть даже сертификат.. мне будет легко понимать материал. Можно сказать, что для меня изучение материала программирования уже как хобби. Мне бы наставника, который бы смог дать направление всей этой каше знаний.