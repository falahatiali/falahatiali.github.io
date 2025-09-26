// Simple resume functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add PDF export functionality
    const exportButton = document.createElement('button');
    exportButton.innerHTML = '<i class="fas fa-download"></i> Export PDF';
    exportButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4A90E2;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: 500;
        box-shadow: 0 3px 10px rgba(74, 144, 226, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 12px;
    `;
    
    exportButton.addEventListener('click', () => {
        // Add html2pdf library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = () => {
            const element = document.querySelector('.container');
            const opt = {
                margin: 0.3,
                filename: 'Ali_Falahati_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().set(opt).from(element).save();
        };
        document.head.appendChild(script);
    });
    
    exportButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(74, 144, 226, 0.4)';
    });
    
    exportButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 3px 10px rgba(74, 144, 226, 0.3)';
    });
    
    document.body.appendChild(exportButton);
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print';
    printButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 120px;
        background: #28a745;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: 500;
        box-shadow: 0 3px 10px rgba(40, 167, 69, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        font-size: 12px;
    `;
    
    printButton.addEventListener('click', () => {
        window.print();
    });
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(40, 167, 69, 0.4)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 3px 10px rgba(40, 167, 69, 0.3)';
    });
    
    document.body.appendChild(printButton);
    
    // Hide buttons when printing
    const mediaQuery = window.matchMedia('print');
    mediaQuery.addListener((mq) => {
        if (mq.matches) {
            exportButton.style.display = 'none';
            printButton.style.display = 'none';
        } else {
            exportButton.style.display = 'block';
            printButton.style.display = 'block';
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
    
    // Add smooth scroll to top functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4A90E2;
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 14px;
        box-shadow: 0 3px 10px rgba(74, 144, 226, 0.3);
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
});