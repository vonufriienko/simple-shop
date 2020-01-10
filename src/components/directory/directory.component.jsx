import React, {useState} from 'react';
import MenuItemComponent from "../menu-item/menu-item.component";
import './directory.styles.scss';
import { SECTIONS_DATA } from "./directory.data";

const DirectoryComponent = () => {
  const [sections] = useState(SECTIONS_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItemComponent
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
        />
        ))}
    </div>
  );
};

export default DirectoryComponent;