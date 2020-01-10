import React, {useState} from 'react';
import MenuItemComponent from "../menu-item/menu-item.component";
import './directory.styles.scss';
import { SECTIONS_DATA } from "./directory.data";

const DirectoryComponent = () => {
  const [sections, setSections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItemComponent
          title={section.title}
        />
        ))}
    </div>
  );
};

export default DirectoryComponent;