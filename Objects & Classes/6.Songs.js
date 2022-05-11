// 6.	Songs
 
function songsProblem(arr){
    let countSongs = arr.shift();
    let typeListSong = arr.pop();
    let songsArray = [];
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
 
    for(let i = 0; i <arr.length; i++){
        let tokens = arr[i].split("_");
        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];
        let song = new Song(typeList, name, time);
        songsArray.push(song)
    }
 
    for(let song of songsArray){
        if (typeListSong === song.typeList) {
            console.log(song.name);
        } else if (typeListSong == "all"){
            console.log(song.name);
        }
    }
}
 
songsProblem([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
 
console.log(" ----- ");
songsProblem([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
 
console.log(" ----- ");
songsProblem([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);
