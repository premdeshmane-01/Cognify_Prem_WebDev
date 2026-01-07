// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        fadeInObserver.observe(item);
    });

    // Animate benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        fadeInObserver.observe(card);
    });

    // Animate testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        fadeInObserver.observe(card);
    });
});

// Button click handlers
const setupButtonHandlers = () => {
    // Primary CTA buttons
    const primaryButtons = document.querySelectorAll('.btn-primary, .btn-apply, .btn-cta');
    primaryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showApplicationModal();
        });
    });

    // Secondary button (Watch Overview)
    const watchButton = document.querySelector('.btn-secondary');
    if (watchButton) {
        watchButton.addEventListener('click', (e) => {
            e.preventDefault();
            showVideoModal();
        });
    }

    // Learn more navigation
    const learnMoreLinks = document.querySelectorAll('a[href="#learn"]');
    learnMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const programSection = document.getElementById('program');
            if (programSection) {
                programSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
};

// Modal functions
const showApplicationModal = () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2>Ready to Apply?</h2>
            <p>Our application process is simple and straightforward:</p>
            <ol>
                <li>Fill out the online application form (5 minutes)</li>
                <li>Complete a take-home coding challenge (2-3 hours)</li>
                <li>Interview with our team (30-45 minutes)</li>
            </ol>
            <p>To begin your application, please email us at:</p>
            <a href="mailto:careers@cognifyz.com" class="modal-email">careers@cognifyz.com</a>
            <p class="modal-note">Include your resume and a brief introduction about yourself.</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
            animation: fadeIn 0.2s ease;
        }
        .modal-content {
            position: relative;
            background: white;
            border-radius: 20px;
            padding: 3rem;
            max-width: 500px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #64748b;
            line-height: 1;
            padding: 0.5rem;
            transition: color 0.2s;
        }
        .modal-close:hover {
            color: #0f172a;
        }
        .modal-content h2 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
            color: #0f172a;
        }
        .modal-content p {
            color: #64748b;
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        .modal-content ol {
            margin: 1.5rem 0 1.5rem 1.5rem;
            color: #0f172a;
        }
        .modal-content ol li {
            margin-bottom: 0.75rem;
        }
        .modal-email {
            display: inline-block;
            color: #6366f1;
            font-weight: 600;
            font-size: 1.125rem;
            text-decoration: none;
            padding: 0.75rem 1.5rem;
            background: rgba(99, 102, 241, 0.1);
            border-radius: 8px;
            margin: 1rem 0;
            transition: all 0.2s;
        }
        .modal-email:hover {
            background: rgba(99, 102, 241, 0.2);
            transform: translateY(-2px);
        }
        .modal-note {
            font-size: 0.875rem;
            color: #64748b;
            margin-top: 1rem;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal handlers
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 200);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.style.overflow = '';
        }
    });
};

const showVideoModal = () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content video-modal">
            <button class="modal-close">&times;</button>
            <h2>Program Overview</h2>
            <div class="video-placeholder">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="#6366f1" stroke-width="2"/>
                    <path d="M26 20L44 32L26 44V20Z" fill="#6366f1"/>
                </svg>
                <p style="margin-top: 1rem; color: #64748b;">Video content coming soon!</p>
            </div>
            <p style="margin-top: 2rem;">For more information, feel free to reach out to us at <a href="mailto:careers@cognifyz.com" style="color: #6366f1; font-weight: 600;">careers@cognifyz.com</a></p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const style = document.createElement('style');
    style.textContent = `
        .video-modal {
            max-width: 700px;
        }
        .video-placeholder {
            background: #f8fafc;
            border-radius: 12px;
            padding: 4rem 2rem;
            text-align: center;
            margin: 1rem 0;
        }
    `;
    document.head.appendChild(style);
    
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 200);
    };
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    document.body.style.overflow = 'hidden';
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupButtonHandlers();
});

// Parallax effect for hero gradient orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add ripple effect to buttons
document.querySelectorAll('button, .btn-primary, .btn-secondary, .btn-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);