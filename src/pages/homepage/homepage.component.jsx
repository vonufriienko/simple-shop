import React from 'react';
import DirectoryComponent from "../../components/directory/directory.component";
import './homepage.styles.scss';

const HomepageComponent = () => {
  return (
    <div className="homepage">
      <DirectoryComponent/>
    </div>
  );
};

export default HomepageComponent;