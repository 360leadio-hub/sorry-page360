const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// 'হ্যাঁ' বাটনে মাউস নিলে বা আঙুল ছোঁয়ালে সেটি দূরে সরে যাবে
yesBtn.addEventListener('mouseover', moveButton);
yesBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

function moveButton() {
    // বাটনটিকে স্ক্রিনে স্বাধীন করার জন্য পজিশন ফিক্সড করা হলো
    yesBtn.style.position = 'fixed';
    
    // স্ক্রিনের সীমানার মধ্যে র্যান্ডম পজিশন হিসাব করা
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
}

// 'না' বাটনে ক্লিক করলে যে সুন্দর মেসেজটি আসবে
noBtn.addEventListener('click', () => {
    // স্ক্রিন জুড়ে হার্ট ঝরে পড়ার রিচ অ্যানিমেশন
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️'; heart.style.position = 'absolute';
        heart.style.left = Math.random() * window.innerWidth + 'px'; 
        heart.style.top = '-20px';
        heart.style.fontSize = Math.random() * 25 + 15 + 'px';
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
