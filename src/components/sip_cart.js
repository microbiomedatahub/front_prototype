import React, { Component } from 'react'
import ReactSelect from 'react-select'
import request  from 'superagent'
// simplest method: uses precompiled complete bundle from `plotly.js`
import Plot from 'react-plotly.js';
//import PlotData from '../data/test.json'

class RemoveBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      removeItem:""
    }
  }

  render() {
    const handleClick = (e) => {
      console.log("remove item:", this.props.removeItem)
      this.setState({
        removedItem:this.props.removeItem
      })
      this.props.onRemove(this.props.removeItem)
    }

    return (
        <span className="btn btn-warning btn-xs" onClick={handleClick}>X</span>
    )
  }
}

class SipCart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      count: 0,
      viewDetail: false,
      data: []
    }
    
    this.description = this.props.description
    this.reqUrl = this.props.reqUrl
    this.sample = this.props.sample
    this.options = this.props.options
    
    // stateにoptionのnameキーとデフォルトの選択状態を追加
    for (let option of this.options){
      this.state[option["name"]] = option["default"]
    }
    
    this.setItems = function (items) {
      const prevItems = this.state.items

      items.map(function(item, index, ary){
        prevItems.push(item)
        //return hit._id
      })

      const newItems = prevItems.filter((x, i, self) => self.indexOf(x) === i);
      this.setState({
        items: newItems,
        count: newItems.length
      })
    }
    
    this.deleteItems = function(items){
      this.setState({
        items: items,
        count: items.length
      });
    }
    
    this.getItems = function(){
      return this.state.items;
    }
  }
  
  componentDidMount(){
    // 初期値セット
    if(this.props.initItems != undefined) {
      const initItems = this.props.initItems
      this.setState({
        items: initItems,
        count: initItems.length
      })
    }
  }
  
  componentWillMount() {
     /*
    this.setState({
      selectedStanzas: this.stanza_json["default"],
      selectedTaxRanks: this.tax_ranks_json["default"],
      selectedFuncs: this.funcs_json["default"]
    })
    */
  }

  getLabel() {
    if(this.state.viewDetail) {
      return "Hide detail"
    } else {
      return "View detail"
    }
  }

  /*
  renderResponse(){
    const data = this.state.data

    const lis = data.map(function(elem, index, ary){
      const src_strs = elem["stanza_url"].split('/')
      const anchor = "#" + src_strs[src_strs.length - 1]
      const title = elem["stanza_title"]

      if (index == 0) {
        return  <li role="presentation" className="active" key={index}>
          <a data-toggle="tab" href={anchor}>{title}</a>
        </li>
      }  else {
        return  <li role="presentation" key={index}>
          <a data-toggle="tab" href={anchor}>{title}</a>
        </li>
      }
    })
    const ul = React.createElement('ul',{className:'nav nav-tabs', id:'selectTabs', key:"ul"}, lis)

    const iframes = data.map(function(elem, index, ary) {

      const q = Object.keys(elem["params"]).map(function(name, i, array){
        return name + "=" + elem["params"][name]
      })

      const src = elem["stanza_url"] + "?" + q.join("&")
      const src_strs = elem["stanza_url"].split('/')
      const anchor = src_strs[src_strs.length - 1]
      const title = elem["stanza_title"]

      const style = {
        "height": '1000px',
        "width": '1000px'
      }

      if(index == 0){
        return (
            <div className='tab-pane active' id={anchor} key={index}>
              <iframe src={src} title={title}  className="stanza" style={style} ></iframe>
            </div>
        )
      } else {
        return (
            <div className='tab-pane' id={anchor} key={index}>
              <iframe src={src} title={title}  className="stanza" style={style} ></iframe>
            </div>
        )
      }
    })

    const tab_content = React.createElement('div',{className:'tab-content', key:"tab"}, iframes)
    const nav_body = React.createElement('div',{className:'panel-body'}, [ul, tab_content])
    const panel_default = React.createElement('div',{className:'panel panel-default'}, nav_body)
    const div = React.createElement('div',{className:'col-sm-12'}, panel_default)
    return div

  }
  */

  renderPlotlyResponse() {
    const data = this.state.data
    if(data.length > 0) {
      return(
        <Plot
          data = {data}
          layout={ {barmode: "stack", width: 1400, height: 600, margin: {b: 100}, title: 'Data Plot', xaxis: {title: 'ID', tickfont: {size: 9} }, yaxis: {automargin: 'true'}  }  }
        />
      );
    } else {
      return (
        <div></div>
      );
    }
  }


  

  renderOptions () {
    const changeState = (name, val) => {
      console.log(name)
      console.log(val)
      this.setState({
        [name]: val
      })
    }
    // optionの選択を変更した時
    function changeHandler(e) {
      changeState(this.name, e)
    }

    if(this.state.viewDetail) {
      const cart = this
      const selects = this.options.map(function(option, index, ary){
        let name = option["name"]
      
        let option_ary = option["enum"].map(function(elem){
          return {label: elem, value: elem}
        })

        let value = cart.state[name]
        let multi = option["type"] == "array"
            
        return (
            <div className={option["name"]} key={index}>
              <span>{option["name"]}:</span><br/>
              <ReactSelect
                  name={name}
                  closeOnSelect={false}
                  disabled={false}
                  multi={multi}
                  onChange={changeHandler}
                  options={option_ary}
                  placeholder="Select your favourite(s)"
                  removeSelected={true}
                  simpleValue
                  value={value}
              />
            </div>
        )
      })

      return (
          <div>
            <div className="title">Options</div>
            {selects}
          </div>
                          
      )
    }
  }

  renderDetail() {
    // カート内で削除
    const onRemoveHandler = (e) => {
      const items = this.state.items

      for(var i=0; i<items.length; i++) {
        if (items[i] == e) {
          //spliceメソッドで要素を削除
          items.splice(i, 1);
        }
      }

      // stateにセット
      this.setState({
        items:items,
        count: items.length
      })
      // 親に知らせる
      this.props.onRemoveItems(items)
    }

    const onDeselectAllHandler = (e) => {
      const items = []
      this.setState({
        items:items,
        count: items.length
      })
      // 親に知らせる
      // 削除の場合は、そのまま残ったitemsを知らせる
      this.props.onRemoveItems(items)
    }

    if (this.state.viewDetail){
      const title = <div className="title" key="title"><span>Selected Items</span><span><button className="deselect-all-btn btn btn-primary btn-xs" onClick={onDeselectAllHandler}>Deselect All</button></span></div>
      const items = this.state.items.map(function(item, index, ary){
        return (<span key={item} className="item">{item} <RemoveBtn removeItem={item} onRemove={onRemoveHandler}/></span>)
      })
      return [title, items]
    }
  }

  render() {
    const renderOptions = this.renderOptions()
    const renderDetail = this.renderDetail()
    //const renderResponse = this.renderResponse()
    const renderPlotlyResponse = this.renderPlotlyResponse()
    const label = this.getLabel()

    // レスポンスの処理
    const requestCallback = (err, res) => {
      if(err) {
        console.log('error')
        return
      }
      this.setState({
        data:res.body
      })
    }

    // URLを組み立てリクエストを投げる
    // ここでPlotlyで表示するデータを取得する
    const requestHandler = (e) => {
      let URL = this.reqUrl
      const cart = this

      const params = this.state.items
      if(this.state.items.length > 0) {
        console.log(" rrequest します")
        request.get(URL + params.join(',')).end(requestCallback)
      } else {
        this.setState({
          data:[]
        })
      }
    }
  
    // 詳細表示、非表示
    const handleClick = (e) => {
      this.setState({
        viewDetail: !this.state.viewDetail
      })
    }
    
    let notice = ""
    let classNames = "btn btn-info compare"

    return (
        <div>
          <div className="cart" >
            <span className="description">{this.description}</span>
            <button type="button" className="btn btn-default" aria-label="Left Align" onClick={handleClick} >
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </button>
            <div className={classNames} onClick={requestHandler}>Plot
              <span className="badge">{this.state.count}</span>
            </div>
            <div className="notice">{notice}</div>
            <div>
              {/*renderOptions*/}
              {renderDetail}
            </div>
          </div>
          <div className="response">
            {renderPlotlyResponse}
          </div>
        </div>
    )
  }
}

export default SipCart