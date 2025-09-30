document.addEventListener('DOMContentLoaded', function() {
    
    const checkSpecialDate = () => {
        const today = new Date();
        if (today.getDate() === 30 && today.getMonth() === 8) {
            document.body.style.animation = 'specialDayGlow 3s ease-in-out infinite';
            
            setTimeout(() => {
                createFireworks();
            }, 5000);
        }
    };
    
    const createFireworks = () => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.style.position = 'absolute';
                firework.style.width = '4px';
                firework.style.height = '4px';
                firework.style.background = '#ffd700';
                firework.style.borderRadius = '50%';
                firework.style.left = Math.random() * window.innerWidth + 'px';
                firework.style.top = Math.random() * window.innerHeight + 'px';
                firework.style.animation = 'fireworkExplode 2s ease-out forwards';
                firework.style.zIndex = '1000';
                
                document.body.appendChild(firework);
                
                setTimeout(() => {
                    firework.remove();
                }, 2000);
            }, i * 200);
        }
    };
    
    const cars = document.querySelectorAll('.hot-wheels-car');
    cars.forEach((car, index) => {
        car.addEventListener('animationiteration', function() {
            const trail = document.createElement('div');
            trail.style.position = 'absolute';
            trail.style.width = window.innerWidth < 768 ? '30px' : '60px';
            trail.style.height = '3px';
            trail.style.background = 'linear-gradient(to right, rgba(255,0,0,0.6), rgba(255,215,0,0.8), transparent)';
            trail.style.left = this.style.left;
            trail.style.top = '50%';
            trail.style.transform = 'translateY(-50%)';
            trail.style.borderRadius = '2px';
            trail.style.animation = 'trailFade 0.8s ease-out forwards';
            trail.style.zIndex = '5';
            
            this.parentNode.appendChild(trail);
            
            const sparkCount = window.innerWidth < 480 ? 1 : 3;
            for (let i = 0; i < sparkCount; i++) {
                const spark = document.createElement('div');
                spark.style.position = 'absolute';
                spark.style.width = '2px';
                spark.style.height = '2px';
                spark.style.background = '#ffd700';
                spark.style.borderRadius = '50%';
                spark.style.left = (parseInt(this.style.left) + Math.random() * 20 - 10) + 'px';
                spark.style.top = '60%';
                spark.style.animation = 'sparkFade 0.5s ease-out forwards';
                spark.style.zIndex = '8';
                
                this.parentNode.appendChild(spark);
                
                setTimeout(() => {
                    spark.remove();
                }, 500);
            }
            
            setTimeout(() => {
                trail.remove();
            }, 800);
        });
        
        car.addEventListener('mouseenter', function() {
            const scale = window.innerWidth < 768 ? 1.2 : 1.3;
            this.style.transform = `translateY(-50%) scale(${scale})`;
            this.style.filter += ' brightness(1.5) saturate(1.5)';
        });
        
        car.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-50%) scale(1)';
            this.style.filter = this.style.filter.replace(' brightness(1.5) saturate(1.5)', '');
        });
    });
    
    const cr7Number = document.querySelector('.cr7-number');
    
    setInterval(() => {
        cr7Number.style.color = 'rgba(255, 215, 0, 0.4)';
        cr7Number.style.textShadow = '0 0 50px rgba(255, 215, 0, 0.8), 0 0 100px rgba(255, 215, 0, 0.4)';
        cr7Number.style.transform = 'translateX(-50%) scale(1.2) rotate(2deg)';
        
        setTimeout(() => {
            cr7Number.style.color = 'rgba(255, 215, 0, 0.3)';
            cr7Number.style.textShadow = '0 0 30px rgba(255, 215, 0, 0.5)';
            cr7Number.style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
        }, 500);
        
        cr7Number.textContent = '7';
    }, 2000);

    setInterval(() => {
        const maxHearts = window.innerWidth < 768 ? 5 : 8;
        if (document.querySelectorAll('.floating-heart').length < maxHearts) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = '0s';
            
            document.querySelector('.floating-elements').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }
    }, 3000);
    
    const mainMessage = document.querySelector('.animated-text');
    mainMessage.addEventListener('click', function() {
        const heartCount = window.innerWidth < 480 ? 8 : 15;
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.style.position = 'absolute';
                heart.style.left = '50%';
                heart.style.top = '50%';
                heart.style.transform = 'translate(-50%, -50%) rotate(45deg)';
                heart.style.animation = `heartExplode${Math.floor(Math.random() * 8) + 1} 2s ease-out forwards`;
                heart.style.zIndex = '200';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 2000);
            }, i * 100);
        }
        
        this.style.color = '#ffd700';
        this.style.textShadow = '0 0 30px rgba(255, 215, 0, 1)';
        
        setTimeout(() => {
            this.style.color = '#fff';
            this.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(220, 20, 60, 0.6), 3px 3px 0px #000';
        }, 1000);
    });
    
    checkSpecialDate();
});

const additionalCSS = `
@keyframes sparkFade {
    0% { 
        opacity: 1; 
        transform: translateY(0) scale(1);
    }
    100% { 
        opacity: 0; 
        transform: translateY(-20px) scale(0);
    }
}

@keyframes heartExplode1 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(-150px, -100px) rotate(45deg) scale(0); } }
@keyframes heartExplode2 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(150px, -100px) rotate(45deg) scale(0); } }
@keyframes heartExplode3 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(-100px, 100px) rotate(45deg) scale(0); } }
@keyframes heartExplode4 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(100px, 100px) rotate(45deg) scale(0); } }
@keyframes heartExplode5 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(0px, -150px) rotate(45deg) scale(0); } }
@keyframes heartExplode6 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(0px, 150px) rotate(45deg) scale(0); } }
@keyframes heartExplode7 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(-200px, 0px) rotate(45deg) scale(0); } }
@keyframes heartExplode8 { 0% { transform: translate(-50%, -50%) rotate(45deg); } 100% { transform: translate(200px, 0px) rotate(45deg) scale(0); } }

@keyframes number7Glow {
    0% { 
        color: rgba(255, 215, 0, 0.3);
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        transform: translateX(-50%) scale(1) rotate(0deg);
    }
    50% { 
        color: rgba(255, 215, 0, 0.6);
        text-shadow: 0 0 60px rgba(255, 215, 0, 0.9), 0 0 120px rgba(255, 215, 0, 0.5);
        transform: translateX(-50%) scale(1.1) rotate(1deg);
    }
    100% { 
        color: rgba(255, 215, 0, 0.3);
        text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
        transform: translateX(-50%) scale(1) rotate(0deg);
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);
