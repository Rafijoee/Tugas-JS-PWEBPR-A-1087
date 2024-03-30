const buttons = document.querySelectorAll('button')

document.getElementById('iya').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    const img = document.getElementById('gambar');
    img.src = './gambar/teknisi.png';
    document.getElementById('judul').innerText = 'Anda Berbohong!';
    document.getElementById('background').style.backgroundColor = '#E12E2E';
    document.getElementById('teks').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('tidak').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    const img = document.getElementById('gambar');
    img.src = './gambar/mahasiswa.png';
    document.getElementById('judul').innerText = 'Anda Benar!';
    document.getElementById('background').style.backgroundColor = '#6FD240';
    document.getElementById('teks').innerText = 'Anda adalah seorang Mahasiswa'
});
