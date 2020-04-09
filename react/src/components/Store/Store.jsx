import React from 'react';
//import item_example from '../../img/example-product2.png';
import item_example from '../../img/example-product1.png';
import './Store.css';

import Fakes from '../../fakes.js'

class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 'shop' };
  }

  clickTab (tabKey) { // <~~ call this with onClick
    // implement this.setState for activeTab
    this.setState( { activeTab: tabKey.toLowerCase() })
  }

  render () {
    return (
      <div className="Store">
        <div className="Tab-list">
            {Fakes.tabItemArray.map(tab =>
              <div className={"Tab-item-" + tab.key}>
                <p onClick={() => this.clickTab(tab.key)}>
                  {tab.key}
                </p>
              </div>
            )}
        </div>
        
        {/* For debugging: */}
        {/* <div>
          {this.state.activeTab}
        </div> */}

        {Fakes.storeItemArray.map(item =>
          item.tags.includes(this.state.activeTab) ?
            // TODO: Make component with parameters
            <div className={"Store-item-" + item.key} key={item.key}>
              <div className={"Item-container" + item.key}>
                <img src={item.image} className={"Item-image-" + item.key} alt={item.alt} />
                <p className={"Item-description-" + item.key}>{item.name}</p>
                {item.tags.includes("deals") ? <p className={"Deals-banner-" + item.key}>5% off</p> : <br />}
                {item.tags.includes("clearance") ? <p className={"Clearance-banner-" + item.key}>CLEARANCE</p> : <br />}
              </div>
            </div>
          : ""
        )}

      </div>
    );
  }
}

export default ShoppingCart;