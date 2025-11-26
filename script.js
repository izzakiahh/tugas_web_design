/* ======================================================
   MyDailyShop – SCRIPT JAVASCRIPT
   (Alert – Modal – Form Validation)
   ====================================================== */

// --- Ambil elemen utama ---
const bookingForm = document.getElementById('formOrder');           // Form
const confirmPaymentModalElement = document.getElementById('confirmOrderModal'); 
const confirmPaymentModal = new bootstrap.Modal(confirmPaymentModalElement);
const btnConfirm = document.getElementById('btnConfirmOrder');      // Tombol modal

// --- ALERT NOTIFIKASI ---
const alertElement = document.getElementById('myAlert');

/* ======================================================
   1. Ketika form disubmit → tampilkan modal konfirmasi
   ====================================================== */
bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    confirmPaymentModal.show();
});

/* ======================================================
   2. Fungsi menampilkan alert sukses
   ====================================================== */
function showAlert() {

    alertElement.classList.remove('d-none', 'hidden');
    alertElement.classList.add(
        'position-fixed',
        'top-0',
        'start-50',
        'translate-middle-x',
        'mt-5',
        'w-50',
        'show'
    );
    alertElement.style.zIndex = '2000';

    // Auto hide setelah 5 detik
    setTimeout(() => {
        hideAlert();
    }, 5000);
}

/* ======================================================
   3. Fungsi menyembunyikan alert
   ====================================================== */
function hideAlert() {
    alertElement.classList.remove('show');
    alertElement.classList.add('d-none');
    alertElement.style.zIndex = '';
}

/* ======================================================
   4. Ketika tombol "Ya, Kirim Link Pembayaran" ditekan
   ====================================================== */
btnConfirm.addEventListener('click', function () {
    confirmPaymentModal.hide();
    showAlert();
});
