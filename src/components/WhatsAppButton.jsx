import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = '918089957682', message = 'Hello Neovita, I would like to know more about your fertility treatments and services.' }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-pill"
        title="Chat with Neovita on WhatsApp"
        aria-label="Chat with Neovita on WhatsApp at 8089957682"
      >
        {/* Luminous Neon Reflection Light Beam */}
        <span className="neon-reflection-beam" aria-hidden="true" />

        {/* WhatsApp Circular Icon */}
        <div className="whatsapp-icon-circle">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="whatsapp-svg"
          >
            <path
              d="M17.472 14.382c-.3-.15-1.774-.876-2.048-.976-.275-.1-.475-.15-.675.15-.2.3-.774.976-.95 1.176-.174.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.704-2.146-1.904-2.521-.2-.375-.02-.577.13-.727.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.506-.675-.515-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.502 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.123 4.53 3.008 1.3 3.008.867 3.558.817.55-.05 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"
              fill="#ffffff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2.1 21.9l4.872-1.302A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 01-4.223-1.174l-.303-.18-2.888.772.772-2.842-.197-.318A8.16 8.16 0 013.8 12c0-4.529 3.671-8.2 8.2-8.2 4.529 0 8.2 3.671 8.2 8.2 0 4.529-3.671 8.2-8.2 8.2z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
