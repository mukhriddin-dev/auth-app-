import React from 'react';

const Footer = () => {
   return (
      <div className='p-3 text-center bg-primary text-light fw-bold w-100'>
         {new Date().getFullYear() }
      </div>
   );
};

export default Footer;