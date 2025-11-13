import React from 'react';
import { Star, Heart } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "María G.",
      location: "Madrid",
      rating: 5,
      text: "Después de 3 meses de silencio, él volvió. Pero lo más importante no es que volvió, es que esta vez se quedó. La mentoría me enseñó cómo mantenerme fuerte incluso cuando quería escribirle a las 3 de la mañana.",
      highlight: "Ahora estamos planeando nuestra boda"
    },
    {
      name: "Carla V.",
      location: "Barcelona",
      rating: 5,
      text: "Pensé que tenía que ser perfecta para que me amara de nuevo. La mentoría me mostró que mi imperfección era mi poder. Cuando dejé de rogar y empecé a irradiar seguridad, él no podía creer cómo había cambiado.",
      highlight: "Me pidió volver en menos de un mes"
    },
    {
      name: "Sofía R.",
      location: "Valencia",
      rating: 5,
      text: "El miedo me paralizaba. Cada mensaje suyo me hacía temblar. Pero tener a alguien que me guiara en cada paso, que me dijera exactamente qué responder... eso cambió todo. No solo recuperé su amor, recuperé mi dignidad.",
      highlight: "Hoy somos más fuertes que nunca"
    }
  ];

  const stats = [
    { number: "847", label: "Mujeres han recuperado su amor" },
    { number: "96%", label: "Tasa de éxito en reencuentros" },
    { number: "<30", label: "Días promedio para ver resultados" }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-content">
          {/* Header */}
          <div className="testimonials-header">
            <h2 className="section-title">
              No estás sola en este viaje
            </h2>
            <p className="section-subtitle">
              847 mujeres ya recuperaron su amor con esta mentoría
            </p>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} color="#FFD700" fill="#FFD700" />
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <p className="testimonial-text">
                    {testimonial.text}
                  </p>
                  <div className="testimonial-highlight">
                    <Heart size={16} color="#FF0099" />
                    <span className="highlight-text">{testimonial.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="testimonials-bottom">
            <div className="bottom-card">
              <h3 className="bottom-title">
                Ellas también pensaban que era imposible
              </h3>
              <p className="bottom-text">
                Y hoy están construyendo el amor que siempre soñaron.
                <br />
                No porque tuvieran superpoderes.
                <br />
                Sino porque decidieron que su amor valía la pena luchar por él,
                <br />
                <strong className="text-magenta">pero luchar con inteligencia, no con desesperación.</strong>
              </p>
              
              <div className="bottom-highlight">
                <p className="highlight-main">
                  Tú también puedes ser la próxima historia de éxito.
                </p>
                <p className="highlight-sub">
                  La única diferencia entre ellas y tú es que ellas dieron el paso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;