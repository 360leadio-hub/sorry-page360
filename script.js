const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('mouseover', moveButton);
yesBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

function moveButton() {
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
}

noBtn.addEventListener('click', () => {
    // স্ক্রিন জুড়ে সুন্দরভাবে হার্ট ঝরে পড়ার রিচ অ্যানিমেশন ইফেক্ট
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️'; heart.style.position = 'absolute';
        heart.style.left = Math.random() * window.innerWidth + 'px'; 
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 25 + 15 + 'px';
        heart.style.opacity = Math.random();
        heart.style.animation = `fall ${Math.random() * 2 + 1.5s}s linear forwards`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3500);
    }
    
    setTimeout(() => {
        alert('আমি জানতাম আমার কিউট বান্ধবীটা আমার ওপর বেশিক্ষণ অভিমান করে থাকতে পারবে না! 🙈 থ্যাংক ইউ সো মাচ! এবার রাগ ভুলে একটু হাসো আর মন দিয়ে পরীক্ষার প্রস্তুতি নাও। বেস্ট অফ লাক! আর কোনো ডিস্টার্ব করব না... 🥰❤️✨');
    }, 500);
});

const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(${window.innerHeight + 50}px) rotate(360deg); opacity: 0; } }`;
document.head.appendChild(style);
