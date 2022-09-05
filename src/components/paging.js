import React, { Component } from 'react'


import { Pagination } from "searchkit";

/*
 * SerachkitのPaginationクラスの拡張
 * クリックした時に
 * Applicationクラスのstate:selectAll => nullにする
 */
class Paging extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const clickHandler =(e) => {
      this.props.onPaginationChange(null)
    }
    
    return(
        <div onClick={clickHandler} className="paging">
          <Pagination showNumbers={true}/>
        </div>
    )
  }
}

export default Paging