// 3 parameters (strings)
// The first string is the name of the band
// The second string is the name of the album
// The third is holding a song name from the album
// You have to find out how many times the plate will rotate the given song from the album.
// The plate makes a full rotation every 2.5 seconds.

function gramophone(band, album, song){
    let fullRotation = 2.5;
    let songDuration = (album.length * band.length) * song.length / 2;
    let rotations = songDuration / fullRotation;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`  );
}
