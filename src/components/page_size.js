import React, { Component } from 'react'

import { PageSizeSelector, Select } from "searchkit";

/*
 * SearchkitのPageSizeSelectorクラスの拡張
 * クリックした時に
 * Applicationクラスのstate:selectAll => nullにする
 */
class PageSize extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const clickHandler =(e) => {
      this.props.onPageSizeChange(null)
    }
    
    return(
        <div onClick={clickHandler} className="page-size">
          <PageSizeSelector options={[5,10,50,100]} listComponent={Select} />
        </div>
    )
  }
}

export default  PageSize