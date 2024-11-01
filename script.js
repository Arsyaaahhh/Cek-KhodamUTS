
function cekKhodam() {
  const nama = document.getElementById("nama").value.trim();

  if (!nama) {
    alert("Silakan masukkan nama Anda.");
    return;
  }

  const khodamList = [
    "Harimau",
    "Xiaomi",
    "Kak Gem",
    "Kapal Laut",
    "Kucing",
    "Bandeng",
    "Bryant Karbu",
  ];

  const khodamImages = {
    Harimau: "images/harimau-merem.jpg",
    Xiaomi: "images/xiaomi.jpg",
    "Kak Gem": "images/kakgem.jpg",
    "Kapal Laut": "images/kapal.jpg",
    Kucing: "/images/kucing.jpg",
    Bandeng: "/images/bandeng.jpg",
    "Bryant Karbu": "/images/bryant-karbu.jpg",
  };

  const khodamSounds = {
    Kucing: "musik-asik/singa.mp3",
    "Kak Gem": "musik-asik/kak-gem-paham.mp3",
    "Kapal Laut": "musik-asik/budiono-siregar.mp3",
    Bandeng: "musik-asik/bandeng.mp3",
    "Bryant Karbu": "musik-asik/yong.mp3",
    Xiaomi: "musik-asik/siao.mp3",
    Harimau: "musik-asik/rawr.mp3",
  };

  const randomIndex = Math.floor(Math.random() * khodamList.length);
  const khodam = khodamList[randomIndex];

  const resultText = document.getElementById("result");
  resultText.innerText = `${nama}, khodam kamu adalah: ${khodam}`;

  const khodamImageDiv = document.getElementById("khodamImage");
  khodamImageDiv.innerHTML = "";

  if (khodamImages[khodam]) {
    const img = document.createElement("img");
    img.src = khodamImages[khodam];
    img.alt = khodam;
    khodamImageDiv.appendChild(img);
  }

  if (khodamSounds[khodam]) {
    const audio = new Audio(khodamSounds[khodam]);
    audio.play();
  }

  document.querySelector(".container").style.display = "none";
  document.getElementById("khodamBox").style.display = "block";
}

// Fungsi untuk menutup box khodam dan kembali ke tampilan awal
function closeKhodamBox() {
  document.getElementById("khodamBox").style.display = "none";
  document.querySelector(".container").style.display = "block";
}

// Menunggu hingga dokumen siap sebelum menerapkan efek Vanta Waves
document.addEventListener("DOMContentLoaded", function () {
  VANTA.WAVES({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x30a0a,
  });
});
