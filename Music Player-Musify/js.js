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
    },

    {
        id:5,
        imagSrc:"./img/Toofan-KGF-Chapter-2-500-500.jpg",
        audioSrc:"./song/Toofan Kgf Chapter 2 320 Kbps.mp3",
        title:"Toofan"
    },
    
    {
        id:6,
        imagSrc:"./img/Dholida-Gangubai-Kathiawadi-500-500.jpg",
        audioSrc:"./song/Dholida Gangubai Kathiawadi 320 Kbps.mp3",
        title:"Dolida"
    },

    {
        id:7,
        imagSrc:"./img/maar-khayegaa-bachchhan-paandey-500-500.jpg",
        audioSrc:"./song/Maar Khayegaa Bachchhan Paandey 320 Kbps.mp3",
        title:"Maar Khayegaa"
    },

    {
        id:8,
        imagSrc:"./img/main-ishq-mein-hoon-radhe-shyam-hindi-2021-500-500.jpg",
        audioSrc:"./song/Main Ishq Mein Hoon Radhe Shyam Hindi 320 Kbps.mp3",
        title:"Main Ishq mein hoon"
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

