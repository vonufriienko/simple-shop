import React, {useState} from 'react';
import CollectionPreviewComponent from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from './shop.data';

const ShopComponent = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreviewComponent key={id} {...otherCollectionProps}/>
        ))
      }
    </div>
  );
};

export default ShopComponent;