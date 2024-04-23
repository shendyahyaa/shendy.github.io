document.addEventListener("DOMContentLoaded", function() {
    const btnManualPenyiraman = document.getElementById("btn-manual-penyiraman");
    const btnManualPestisida = document.getElementById("btn-manual-pestisida");
    const btnSetJadwal = document.getElementById("btn-set-jadwal");
    const btnKeluar = document.getElementById("btn-keluar");

    btnManualPenyiraman.addEventListener("click", function() {
        const statusPenyiraman = document.getElementById("status-penyiraman");
        if (statusPenyiraman.textContent === "Otomatis") {
            statusPenyiraman.textContent = "Manual";
            // Kirim permintaan ke server untuk mengubah mode penyiraman menjadi manual
            fetch('/control', { method: 'POST', body: 'watering=manual' })
                .then(response => response.text())
                .then(data => {
                    alert("Lanjutkan untuk penyiraman air menjadi manual!");
                })
                .catch(error => console.error('Error:', error));
        } else {
            statusPenyiraman.textContent = "Otomatis";
            // Kirim permintaan ke server untuk mengubah mode penyiraman menjadi otomatis
            fetch('/control', { method: 'POST', body: 'watering=auto' })
                .then(response => response.text())
                .then(data => {
                    alert("Lanjutkan untuk penyiraman air menjadi otomatis!");
                })
                .catch(error => console.error('Error:', error));
        }
    });

    btnManualPestisida.addEventListener("click", function() {
        const statusPestisida = document.getElementById("status-pestisida");
        if (statusPestisida.textContent === "Otomatis") {
            statusPestisida.textContent = "Manual";
            // Kirim permintaan ke server untuk mengubah mode penyemprotan pestisida menjadi manual
            fetch('/control', { method: 'POST', body: 'pesticide=manual' })
                .then(response => response.text())
                .then(data => {
                    alert("Lanjutkan untuk penyemprotan pestisida menjadi manual!");
                })
                .catch(error => console.error('Error:', error));
        } else {
            statusPestisida.textContent = "Otomatis";
            // Kirim permintaan ke server untuk mengubah mode penyemprotan pestisida menjadi otomatis
            fetch('/control', { method: 'POST', body: 'pesticide=auto' })
                .then(response => response.text())
                .then(data => {
                    alert("Lanjutkan untuk penyemprotan pestisida menjadi otomatis!");
                })
                .catch(error => console.error('Error:', error));
        }
    });

    btnSetJadwal.addEventListener("click", function() {
        // Di sini Anda bisa menambahkan logika untuk mengatur jadwal penyemprotan pestisida
        alert("Jadwal penyemprotan pestisida telah diatur!");
    });

    btnKeluar.addEventListener("click", function() {
        // Di sini Anda bisa menambahkan logika untuk keluar dari sistem monitoring
        alert("Anda telah keluar dari sistem monitoring.");
    });
});
