import React from "react";


import {
    MainNavigationBoxImage,MainNavigationBoxTitle,Wrapper
  } from "../../styles/homeStyles.js"




const HomeSkill = ({ description, imageSrc, title }) => {
  return (
    <Wrapper>
      <MainNavigationBoxImage src={imageSrc} />
      <MainNavigationBoxTitle>{title}</MainNavigationBoxTitle>
     
    </Wrapper>
  );
};

export default HomeSkill;