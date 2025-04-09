const PlaylistContent = {
    first: [
        "1부",
        "1. Nocturne Op.9 No.2 - 쇼팽",
        "2. 월광 소나타 - 베토벤",
        "3. Clair de Lune - 클로드 드뷔시",
        "4. Fantaisie Impromptu(즉흥 환상곡) - 쇼팽"
    ],
    Second: [
        "2부",
        "1. Merry go round of life - Joe Hisaishi",
        "2. A Town with an ocean view(바다가 보이는 마을) - Joe Hisaishi",
        "3. No.9 Esther's Waltz - Esther Abrami",
        "4. No.1 A Minor Waltz - Esther Abrami"
    ],
};

const makePlaylistDescription = () => {
    console.log("activated");
    const Playlist = document.querySelectorAll(".middle_playlist_dividebtn");

    let currentplaylist = "";

    for (const list of Playlist) {
        const classList = list.className.split(" ");
        if (classList.includes("selected")) {
            currentplaylist = list.textContent;
        }
    }
    if (currentplaylist === "1부") {
        currentplaylist = "first";
    }
    else {
        currentplaylist = "Second";
    }
    console.log(PlaylistContent["first"]);

    PlaylistContent[currentplaylist].forEach((comment, idx) => {
        const curPlay = document.querySelector(
            `.middle_playlist_playlist .play${idx + 1} p`
        );
        curPlay.textContent = comment;
    });
};

makePlaylistDescription();

const Btnselected = () => {
    const Btnbox = document.querySelectorAll(".middle_playlist_dividebtn");
    let currentBtn = "";
    for (const box of Btnbox) {
        const clslist = box.className.split(" ");
        if (clslist.includes("selected")) {
            currentBtn = box.id;
        }
    }
    currentBtn = currentBtn.trim();
    console.log(currentBtn);
}

Btnselected();

const selectBox = document.querySelectorAll(".middle_playlist_dividebtn");
selectBox.forEach((box, i) => {
    let skill="";
    box.addEventListener("click", (e) => {
        let boxs = document.querySelectorAll(".middle_playlist_dividebtn");
        let skills = box.querySelectorAll(".middle_playlist_dividebtn");
        for (const box of boxs) {
            if (e.target === box) {
                box.className = "middle_playlist_dividebtn selected";
                makePlaylistDescription();
            } else {
                box.className = "middle_playlist_dividebtn";
                makePlaylistDescription();
            }
        }
    });
});

// Kakao Map Api area starting under code

const container = document.getElementById("map");
console.log(container);
const options = {
    center: new kakao.maps.LatLng(37.399878, 126.650182),
    level: 3,
};

const map = new kakao.maps.Map(container, options);
const markerPosition = new kakao.maps.LatLng(37.399878, 126.650182);
const marker = new kakao.maps.Marker({ // Marker 객체에 Markerposition 위치 할당
    position: markerPosition,
});
marker.setMap(map); // 지도 위에 마커 표시

var iwContent = '<div style="padding:5px;"><div style="display:flex; justify-content:center;">집</div><a href="https://kko.kakao.com/wOEmBBrTdo" style="color:blue" target="_blank">큰지도보기</a> <a href="https://kko.kakao.com/dRtZ-fRIsH" style="color:blue" target="_blank">길찾기</a></div>',
    iwPosition = new kakao.maps.LatLng(37.399878, 126.650182); // 중점 포지션 지정
var infowindow = new kakao.maps.InfoWindow({   
    position : iwPosition, 
    content : iwContent                         
});               

infowindow.open(map, marker);  // 지도와 마커 표시

const GotoI = () => {
    window.moveTo(10,2000);
}