import React, { useEffect } from 'react';
import './Animations.css';

const Animations: React.FC = () => {
  useEffect(() => {
    // Intersection Observer para animações de scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observar elementos
    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
    elements.forEach((el) => observer.observe(el));

    // Adicionar efeito de parallax suave
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    // Limpar event listeners
    return () => {
      window.removeEventListener('scroll', handleParallax);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default Animations;