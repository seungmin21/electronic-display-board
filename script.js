const stations = [
  "다음 역은 강남입니다",
  "다음 역은 역삼입니다",
  "다음 역은 선릉입니다",
  "다음 역은 삼성입니다"
];

let index = 0;
function updateStation() {
  const nextStationElement = document.getElementById('next-station');
  nextStationElement.textContent = stations[index];
  index = (index + 1) % stations.length;
}

// 초기 업데이트
updateStation();

// 10초마다 업데이트
setInterval(updateStation, 10000);