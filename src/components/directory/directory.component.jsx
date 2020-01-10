import React, {useState} from 'react';
import MenuItemComponent from "../menu-item/menu-item.component";
import './directory.styles.scss';
import { SECTIONS_DATA } from "./directory.data";

const DirectoryComponent = () => {
  const [sections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({  id, ...otherSectionProps }) => (
        <MenuItemComponent key={id} {...otherSectionProps} />
        ))}
    </div>
  );
};

export default DirectoryComponent;