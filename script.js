// Mobile Menu Toggle (Basic implementation)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const desktopNav = document.querySelector('.desktop-nav');

if (mobileMenuToggle && desktopNav) {
    mobileMenuToggle.addEventListener('click', () => {
        // In a real app, this would toggle a mobile-specific menu overlay
        // For this demo, we can just log or add a basic class
        console.log('Mobile menu toggled');
    });
}

// Simple Slider Implementation
const setupSlider = (containerId) => {
    const container = document.querySelector(containerId);
    if (!container) return;

    const track = container.querySelector('.slider-track') || container.querySelector('.testimonial-track');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    if (!track || !prevBtn || !nextBtn) return;

    let scrollPosition = 0;
    
    // Very basic scroll implementation
    nextBtn.addEventListener('click', () => {
        const itemWidth = track.children[0].getBoundingClientRect().width;
        const gap = 32; // Assuming 2rem gap
        scrollPosition += (itemWidth + gap);
        
        // Prevent scrolling too far
        if (scrollPosition > track.scrollWidth - track.clientWidth) {
            scrollPosition = track.scrollWidth - track.clientWidth;
        }
        
        track.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = track.children[0].getBoundingClientRect().width;
        const gap = 32;
        scrollPosition -= (itemWidth + gap);
        
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        
        track.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sliders if they exist
    setupSlider('.bestsellers .slider-container');
    setupSlider('.testimonials .slider-container');
});
