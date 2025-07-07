import React from 'react';
import PortfolioMoments from '../Componets/PortfolioMoments'
import PortfolioEducation from './PortfolioEducation';
import PortfolioLife from './PortfolioLife';
import PortfolioNature from '../Componets/PortfolioNature'
import PortfolioSector from '../Componets/PortfolioSector'

const PortfolioAll = () => {
  return (
  <div>
    <PortfolioEducation/>
  <PortfolioLife/>
  <PortfolioMoments/>
 <PortfolioNature/>
 <PortfolioSector/>

 
  </div>
  );
};

export default PortfolioAll;
