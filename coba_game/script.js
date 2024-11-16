document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah submit form default

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Tampilkan pesan terima kasih di konsol
        console.log(`Nama: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Pesan: ${message}`);
        alert('Terima kasih telah menghubungi kami!');

        // Reset form setelah submit
        contactForm.reset();
    });
});
