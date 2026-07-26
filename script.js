const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️'; heart.style.position = 'absolute';
        heart.style.left = Math.random() * window.innerWidth + 'px'; heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = `fall ${Math.random() * 2 + 2s}s linear forwards`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
    setTimeout(() => {
        alert('আই অ্যাম সো সরি! তোমার পরীক্ষার ডিস্টার্ব হবে ভেবেই কথা বলিনি... 🙈 এবার একটু হাসো আর ভালো করে পরীক্ষা দাও! বেস্ট অফ লাক! ❤️✨');
    }, 500);
});

const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(${window.innerHeight + 50}px) rotate(360deg); opacity: 0; } }`;
document.head.appendChild(style);
