// ================================================================
// ====== SCRIPT LENGKAP DAPURKODE.ID - PASTI BERHASIL ======
// ================================================================

// ====== 1. FUNGSI MENUTUP POPUP WELCOME ======
function closeWelcome() {
    console.log('🖱️ Tombol Mulai Pesan DIKLIK!');
    
    const popup = document.getElementById('welcome-popup');
    if (popup) {
        // Animasi keluar
        popup.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        popup.style.opacity = '0';
        popup.style.transform = 'scale(0.8)';
        
        // Sembunyikan setelah animasi selesai
        setTimeout(function() {
            popup.style.display = 'none';
            
            // Scroll ke section menu
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            console.log('✅ Popup tertutup, scroll ke menu');
        }, 600);
    } else {
        console.log('❌ Popup tidak ditemukan!');
    }
}

// ====== 2. PASTIKAN TOMBOL BISA DIKLIK (SAAT PAGE LOAD) ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DapurKode.id siap!');
    
    // Cek tombol mulai pesan
    const btnMulai = document.getElementById('btn-mulai-pesan');
    if (btnMulai) {
        console.log('✅ Tombol "Mulai Pesan" ditemukan!');
        
        // Pastikan tombol bisa diklik
        btnMulai.style.cursor = 'pointer';
        btnMulai.style.pointerEvents = 'auto';
        btnMulai.style.position = 'relative';
        btnMulai.style.zIndex = '99999';
        
        // Tambahkan event click sebagai backup
        btnMulai.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Event click kedua terdeteksi!');
            closeWelcome();
        });
        
    } else {
        console.log('❌ Tombol "Mulai Pesan" TIDAK ditemukan!');
        console.log('💡 Cek apakah ID="btn-mulai-pesan" ada di HTML');
    }
    
    // ====== 3. AOS INITIALIZATION ======
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        console.log('✅ AOS animation initialized');
    }
    
    // ====== 4. NAVBAR SCROLL EFFECT ======
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.style.background = 'rgba(0,0,0,0.9)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
            } else {
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
        });
    }
    
    // ====== 5. BACK TO TOP BUTTON ======
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTopBtn.style.display = 'flex';
                backToTopBtn.style.alignItems = 'center';
                backToTopBtn.style.justifyContent = 'center';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ====== 6. MOBILE MENU TOGGLE ======
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
    }
    
    // ====== 7. SMOOTH SCROLL UNTUK NAV LINK ======
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    // Tutup mobile menu
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const icon = menuBtn.querySelector('i');
                        if (icon) icon.className = 'fas fa-bars';
                    }
                    
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    console.log('✅ Semua fitur siap!');
    console.log('💡 Klik "Mulai Pesan" untuk mulai pesan makanan!');
});

// ====== 8. FALLBACK: JIKA TOMBOL TETAP TIDAK BISA DIKLIK ======
// Ini akan mencoba lagi setelah 1 detik
setTimeout(function() {
    const btnMulai = document.getElementById('btn-mulai-pesan');
    if (btnMulai) {
        // Pastikan tombol terlihat dan bisa diklik
        btnMulai.style.display = 'inline-block';
        btnMulai.style.visibility = 'visible';
        btnMulai.style.opacity = '1';
        btnMulai.style.cursor = 'pointer';
        btnMulai.style.pointerEvents = 'auto';
        btnMulai.style.zIndex = '99999';
        
        // Force click handler
        btnMulai.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Fallback click terdeteksi!');
            closeWelcome();
            return false;
        };
        
        console.log('✅ Fallback: Tombol dipastikan bisa diklik!');
    }
}, 1000);

console.log('📦 DapurKode.id - Makanan Kekinian');
console.log('🍔 Selamat menikmati!');