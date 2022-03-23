var songs=[

    {
        id:1,
        imagSrc:"./img/Kamle-AKASA-500-500.jpg",
        audioSrc:"./song/Kamle Akasa 320 Kbps.mp3",
        title:"Kamle"
    },

    {
        id:2,
        imagSrc:"./img/Maiyya-Mainu-Jersey-500-500.jpg",
        audioSrc:"./song/Maiyya Mainu Jersey 320 Kbps.mp3",
        title:"Maiyya-Mainu"
    },

    {
        id:3,
        imagSrc:"./img/meri-jaan-meri-jaan-bachchhan-paandey-500-500.jpg",
        audioSrc:"./song/Meri Jaan Meri Jaan Bachchhan Paandey 320 Kbps.mp3",
        title:"Meri Jaan Meri Jann"
    },

    {
        id:4,
        imagSrc:"./img/saare-bolo-bewafa-bachchhan-paandey-500-500.jpg",
        audioSrc:"./song/Saare Bolo Bewafa Bachchhan Paandey 320 Kbps.mp3",
        title:"Saare Bolo Bewafa"
    }
]

function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });
    
    document.getElementById("img").src=song.imagSrc;
    document.getElementById("audio1").src=song.audioSrc;
    document.getElementById("title").innerText=song.title;
}

