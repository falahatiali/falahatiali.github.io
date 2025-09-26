// Smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                bar.classList.add('animated');
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };
    
    // Initial animation
    animateSkillBars();
    
    // Animate on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Add hover effects to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects to tech tags
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add typing effect to name
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const nameText = nameElement.textContent;
        nameElement.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < nameText.length) {
                nameElement.textContent += nameText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Add parallax effect to profile image
    const profileImage = document.querySelector('.profile-image img');
    if (profileImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            profileImage.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add smooth reveal animation to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'scale(1)';
    }, 100);
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Resume';
    printButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4A90E2, #357ABD);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    printButton.addEventListener('click', () => {
        window.print();
    });
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 8px 25px rgba(74, 144, 226, 0.4)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.3)';
    });
    
    document.body.appendChild(printButton);
    
    // Hide print button when printing
    const mediaQuery = window.matchMedia('print');
    mediaQuery.addListener((mq) => {
        if (mq.matches) {
            printButton.style.display = 'none';
        } else {
            printButton.style.display = 'block';
        }
    });
    
    // Add smooth scroll to top functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4A90E2, #357ABD);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        transform: translateY(20px);
    `;
    
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.transform = 'translateY(0)';
        } else {
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.transform = 'translateY(20px)';
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
    
    // Add theme toggle (optional)
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 80px;
        background: linear-gradient(135deg, #4A90E2, #357ABD);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    let isDarkMode = false;
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.style.filter = 'invert(1) hue-rotate(180deg)';
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.style.filter = 'none';
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    document.body.appendChild(themeToggle);
});
