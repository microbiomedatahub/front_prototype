import React, { Component } from 'react'

/*
 * テーブル内に表示される選択ボタン
 */
class SelectButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected:false
    }
    
    // 選択状態にあるitemの配列、親(HitsTable)から渡される
    const selectedItems = props.selectedItems
    
    if (selectedItems.indexOf(this.props.id) >= 0){
      // 存在する
      this.state = {
        selected:true
      }
    }
  }
  
  // 親からselectedItemsの変更があった場合
  componentWillReceiveProps(nextProps) {
    if(nextProps.selectAll) {
      this.setState({
        selected:true
      })
    } else {
      this.setState({
        selected:false
      })
    }
    
    if (nextProps.selectedItems.indexOf(this.props.id) >= 0){
      // 存在する
      this.setState({
        selected:true
      })
      
    } else {
      this.setState({
        selected:false
      })
    }
  }
  
  getButtonLabel () {
    if(this.state.selected){
      return 'Remove'
    } else {
      return 'Add'
    }
  }
  
  getClassName () {
    if(this.state.selected){
      return 'btn btn-warning btn-sm'
    } else {
      if (this.props.disabled) {
        return 'btn btn-primary btn-sm disabled'
      }
      return 'btn btn-primary btn-sm'
    }
  }
  
  render() {
    const label = this.getButtonLabel()
    const className = this.getClassName()
    const disabled = this.props.disabled
    
    const clickHandler = (e) => {
      
      if(this.state.selected){
        this.setState({
          selected:false
        })
        // 親に知らせる
        this.props.onDeselectItem(this.props.id)
      } else {
        this.setState({
          selected:true
        })
        // 親に知らせる
        this.props.onSelectItem(this.props.id)
      }
    }
    
    return (
        <button className={className} onClick={clickHandler} ref={this.props.id} id={this.props.id} disabled={disabled}>
          {label}
        </button>
    )
    
  }
}

export default SelectButton