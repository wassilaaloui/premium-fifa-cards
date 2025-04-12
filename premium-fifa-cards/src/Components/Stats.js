import React from 'react';

const Stats = ({ label, value, color }) => {
  const statBarStyle = {
    height: '8px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
    marginBottom: '10px',
    position: 'relative',
  };

  const fillerStyle = {
    height: '100%',
    width: `${value}%`,
    backgroundColor: color,
    borderRadius: 'inherit',
    position: 'absolute',
  };

  const labelStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#fff',
  };

  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={labelStyle}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div style={statBarStyle}>
        <div style={fillerStyle}></div>
      </div>
    </div>
  );
};

export default Stats;