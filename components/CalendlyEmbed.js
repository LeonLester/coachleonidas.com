import React from 'react';

const CalendlyEmbed = () => {
  return (
    <div
      style={{
        height: '400px', /* Adjust height as needed */
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <iframe
        src="https://calendly.com/leonidaskaragiannis/30min"
        style={{
          width: '400px',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        title="Schedule with Calendly"
      ></iframe>
    </div>
  );
};

export default CalendlyEmbed;
