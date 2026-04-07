document.addEventListener('DOMContentLoaded', () => {
    // 1. إضافة تأثيرات حركية خفيفة على القائمة العلوية عند التمرير
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 5%';
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.padding = '1rem 5%';
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = 'none';
        }
    });

    // 2. إعطاء تأثير تفاعلي 3D خفيف للكروت (Glass Cards) عند حركة الماوس
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.
            
            // حساب الزاوية بناءً على موضع الماوس
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; // أقصى دوران 5 درجات
            const rotateY = ((x - centerX) / centerX) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            // إعادة الكرت لوضعه الطبيعي عند خروج الماوس
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            // إزالة وقت الانتقال أثناء حركة الماوس ليكون التجاوب سريع
            card.style.transition = 'none';
        });
    });

    // 3. منع الإرسال الافتراضي للنموذج التجريبي وإظهار رسالة
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'تم الإرسال بنجاح ✅';
            btn.style.background = 'var(--accent-color)';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // 4. تأثير ظهور العناصر تدريجياً (Fade In on Scroll)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // تجهيز العناصر للظهور
    document.querySelectorAll('.glass-card').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});
