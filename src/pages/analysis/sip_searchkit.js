import React, { Component } from 'react'
//import { get } from "lodash";

import {
  Accessor,
  history,
  InitialLoader,
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  RefinementListFilter,
  RangeFilter,
  Hits,
  HitItemProps,
  HitsStats,
  SearchkitComponent,
  SelectedFilters,
  MenuFilter,
  InputFilter,
  HierarchicalMenuFilter,
  HierarchicalRefinementFilter,
  Pagination,
  ResetFilters,
  PageSizeSelector,
  Select,
  Toggle,
  ViewSwitcherHits,
  ViewSwitcherToggle,
  TermQuery,
  FilteredQuery,
  BoolShould,
  MatchQuery,
  BoolMustNot,
  ListComponent,
  Layout,
  TopBar,
  LayoutBody,
  SideBar,
  LayoutResults,
  ActionBar,
  ActionBarRow,
  NoHits,
  ImmutableQuery,
  SimpleQueryString
} from "searchkit";

import {History, createBrowserHistory} from 'history'

import SelectButton from '../../components/select_button'
import Paging from '../../components/paging'
import PageSize from '../../components/page_size'
import SipCart from '../../components/sip_cart'

// 定義jsonの読込
import MetagenomeJson from '../../components/mdb_comparison_tools.json'

class HitsTable extends React.Component {
  
  // ページングした時に、選択されているかどうかボタンが再レンダーされるので
  // 状態がリセットされるために、ここで選択されたitemを保持し、ボタンの
  // selectedItems porpsに渡す
  constructor(props) {
    super(props)
    this.state = {
      items:[],         // 選択状態にあるitemの配列
      selectAll: null   // Select All ボタンがクリックされたらtrue, Deselect All ボタンがクリックされたらfalse, それ以外はnull
    }
    
    // item追加
    this.setItems = function (items) {
      const prevItems = this.state.items
      items.map(function(item, index, ary){
        prevItems.push(item)
      })
      
      // 重複itemを削除
      const newItems = prevItems.filter((x, i, self) => self.indexOf(x) === i);
      
      this.setState({
        items: newItems
      })
    }
    
    // item削除
    // 残ったitemをstateにセット
    this.deleteItems = function(items){
      this.setState({
        items: items
      })
    }
  }
  
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.selectAll === true){
      const items = this.state.items
      
      // hasAnalysisが空配列ではない場合のみ
      this.props.hits.map(function(hit, index, ary){
        if (hit._source["hasAnalysis"].length > 0) {
          items.push(hit._id)
        }
      })
      
      // 重複を削除
      const newItems = items.filter((x, i, self) => self.indexOf(x) === i);
      
      this.setState({
        items: newItems
      })
      
      // 親に知らせる
      this.props.selectedItems(this.state.items)
      
    } else if (nextProps.selectAll === false) {
      const items = this.state.items
      
      this.props.hits.map(function(hit, index, ary){
        for(var i=0; i<items.length; i++) {
          if (items[i] == hit._id) {
            //spliceメソッドで要素を削除
            items.splice(i, 1);
          }
        }
      })
      
      // 削除後のitemをセット
      this.setState({
        items: items
      })
      
      // 親に知らせる
      this.props.deleteItems(this.state.items)
      
    } else {
 
    }
  }
  
  render(){
    const hits  = this.props.hits
    
    // item追加
    const selectItemHandler = (e) => {
      const items = this.state.items
      items.push(e)
      
      this.setState({
        items:items
      })
      // 親に知らせる
      this.props.selectedItems(this.state.items)
    }
    
    // item削除
    const deselectItemHandler = (e) => {
      const items = this.state.items
      
      for(var i=0; i<items.length; i++) {
        if (items[i] == e) {
          //spliceメソッドで要素を削除
          items.splice(i, 1);
        }
      }
      
      this.setState({
        items:items
      })
      // 親に知らせる
      this.props.deleteItems(this.state.items)
    }
    
    const items = this.state.items
    
    return (
        <div style={{width: '100%', boxSizing: 'border-box', padding: 8}}>
          <table className="sk-table sk-table-striped" style={{width: '100%', boxSizing: 'border-box'}}>
            <thead>
            <tr>
              <th className="select">Select</th>
              <th>SIP SampleID</th>
              <th>HostBMI</th>
              <th>sex</th>
              <th>location</th>
              <th>HostAge</th>
              <th>healthy</th>
              <th>AntibioticRegimen</th>
              <th>feces_type</th>
              <th>MEO</th>
              <th>host_taxonomy</th>
              <th>HostEhnicity</th>
              <th>taxonomy</th>
            </tr>
            </thead>
            
            <tbody>
            {hits.map(function(hit, index, ary){
              const id_url = hit._id.startsWith("MDB") ? "/repository/metagenome/" + hit._id :  "/search?q1=" + hit._id + "&q1_cat=sample&q1_param_srs_id=" + hit._id

              let bioproject_link = []
              let sra_link = []
              let srr_link = []

              /*
              if(hit._source["db_xrefs"]){
                let bioproject_url = "http://info.identifiers.org/bioproject/"
                let sra_url = "http://info.identifiers.org/sra/"
                let srr_url = "http://info.identifiers.org/srr/"
                
                hit._source["db_xrefs"].map(function(elem, i, array){
                  if(elem["name"] == "BioProject") {
                    bioproject_url = bioproject_url + elem["identifier"]
                    bioproject_link.push(<span className="link" key={i}><a href={bioproject_url} target="_blank">{elem["identifier"]}</a></span>)
                  }
  
                  if(elem["name"] == "SRA") {
                    sra_url = sra_url + elem["identifier"]
                    sra_link.push(<span className="link" key={i}><a href={sra_url} target="_blank">{elem["identifier"]}</a></span>)
                  }
  
                  if(elem["name"] == "SRR") {
                    srr_url = srr_url + elem["identifier"]
                    srr_link.push(<span className="link" key={i}><a href={srr_url} target="_blank">{elem["identifier"]}</a></span>)
                  }

                })
              }
              
  
     
  
              let taxon_link
              if(hit._source["organism"]["identifier"]){

                const url = "http://info.identifiers.org/taxonomy/" + hit._source["organism"]["identifier"]
                taxon_link = <span className="link" key="0"><a href={url} target="_blank">{hit._source["organism"]["identifier"]}</a></span>
              }
      
              
              let biosample_link
              if(hit._source["identifier"]){
                const url = "http://info.identifiers.org/biosample/" + hit._source["identifier"]
                biosample_link = <span className="link" key="0"><a href={url} target="_blank">{hit._source["identifier"]}</a></span>
              }

              const hasAnalysis = hit._source["hasAnalysis"]
              
              let disabled = false
              if (hasAnalysis.length == 0) {
                disabled = true
              }
              */
              
              console.log(hit)
              let disabled = false
              return (
                  <tr key={hit._id}>
                    <td><SelectButton  title="btn" id={hit._id} onSelectItem={selectItemHandler} onDeselectItem={deselectItemHandler} selectedItems={items} disabled={disabled} /></td>
                    <td>{hit._id}</td>
                    <td>{hit._source["HostBMI"]}</td>
                    <td>{hit._source["sex"]}</td>
                    <td>{hit._source["location"]}</td>
                    <td>{hit._source["HostAge"]}</td>
                    <td>{hit._source["healthy"]}</td>
                    <td>{hit._source["AntibioticRegimen"]}</td>
                    <td>{hit._source["feces_type"]}</td>
                    <td>{hit._source["MEO"]}</td>
                    <td>{hit._source["host_taxonomy"]}</td>
                    <td>{hit._source["HostEhnicity"]}</td>
                    <td>{hit._source["taxonomy"]}</td>
                  </tr>
              )
            })}
            </tbody>
          </table>
        </div>
    )
  }
}

class Sip extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addedItem:"", // HitsTableで追加されたitem
      removedItem:"", // HitsTableで削除されたitem
      selectAll: null, // SelectAllボタンがクリックされたらtrue, Deselect All ボタンがクリックされたらfalse、その他の場合はnull
      items: [],      // 選択状態にあるitemの配列
    }
  
    /*
     *  以下はCartコンポーネントに渡すprops
     */
    // cartのタイトル
    this.description = MetagenomeJson["paths"]["/metagenome"]["get"]["description"]  // description
    
    // id として渡すパラメーター
    this.sample_json = MetagenomeJson["paths"]["/metagenome"]["get"]["parameters"][0] // sample_id
    
    // optiontとして渡すパラメーター
    this.stanza_json = MetagenomeJson["paths"]["/metagenome"]["get"]["parameters"][3] // stanza
    this.tax_ranks_json = MetagenomeJson["paths"]["/metagenome"]["get"]["parameters"][1] // tax_runks
    this.funcs_json = MetagenomeJson["paths"]["/metagenome"]["get"]["parameters"][2] //funcs
    
    // PlotlyのURL
    this.reqUrl = process.env.REACT_APP_PLOTLY_URL
  }
  

  render() {
    let accessor = new Accessor()
    console.log("accessor:", accessor)
    console.log("accessor.getResults():", accessor.getResults())

    /*
     * elasticsearch_controller#metagneome_search
     * 環境変数からelasticsearchのURLを読み込む
     */
    const host = process.env.REACT_APP_ELASTICSEARCH_HOST
    //const host = "/es/mdb_common/"
    //const host = "http://localhost:9200/facet_metagenome_public"
    //const host = "http://192.168.10.106:9200/facet_metagenome_public"
    //const host = "http://localhost:9200/test/sample_metadata"
    const sk = new SearchkitManager(host, {timeout:20000, getLocation:this.location, createHistory:this.createHistory, useHistory:true})
   
    
    /*
     * default queryの組み立て
     * 以下のクエリになるようにする
     */
    /*
     sk.addDefaultQuery((query)=> {
      return query.addQuery(
        BoolShould([
          MatchQuery("group.id", 6),
          MatchQuery("group.id", 7),
          BoolMustNot(
            ({"exists": {"field": "group"}}),
          )
        ])
      )
     })
    */
    
    // sk.searchFromUrlQuery(window.location + "?aaa=bbb")
    // id=groupsに埋め込まれたgroup idのリストを取得
    //const group_ids = document.getElementById('groups').value
  
    const group_ids = "";
    /*
     * 生のクエリだと以下になる
     GET /metagenome_private,metagenome_public/_search
     {
      "query": {
        "bool": {
          "should": [
            { "match": {"group.id": 6 }},
            { "match": {"group.id": 7 }},
            {
              "bool": {
                "must_not": {
                  "exists": {
                    "field": "group"
                  }
                }
              }
            }
          ]
        }
      }
     }
     */


    
    const queries = group_ids.split(',').map(function(id, index, ary){
      return MatchQuery("group.id", id)
    })

    queries.push(BoolMustNot(
        ({"exists": {"field": "group"}}),
    ))
    sk.addDefaultQuery((query)=> {
      return query.addQuery(
          BoolShould(queries)
      )
    })
    

    const selectedItemsHandler = (e) => {
      this.refs.hitsTable.setItems(e)
      this.refs.cart.setItems(e)
    }

    const deleteItemsHandler = (e) => {
      this.refs.hitsTable.deleteItems(e)
      this.refs.cart.deleteItems(e)
    }

    // 一旦stateのselectAllをnullにセット
    const setSelectAllNullHandler =(e) => {
      this.setState({
        selectAll:null
      })
    }
    

    // HitsTableクラスに以下の propsを追加
    const newProps = { selectedItems:selectedItemsHandler, deleteItems:deleteItemsHandler, selectAll:this.state.selectAll}
    const hitsTable = <HitsTable ref="hitsTable"/>
    let newHitsTable = React.cloneElement(hitsTable, newProps)

    // 削除された後のitem配列
    // itemの配列をそのままセットする
    const onRemoveHandler = (e) => {
      this.refs.hitsTable.deleteItems(e)
      this.refs.cart.deleteItems(e)
    }

    // Select All
    const selectAllHandler = (e) => {
      this.setState({
        selectAll: true
      })
    }

    // Deselect All
    const deselectAllHandler = (e) => {
      this.setState({
        selectAll: false
      })
    }

    const InitialLoaderComponent = (props) => (
        <div className="loader">
          <h2>loading please wait...</h2>
        </div>
    )

    const items = this.state.items

    return (
        <div>
          <SearchkitProvider searchkit={sk}>
            <Layout>
              <LayoutBody>
                
                <SideBar>                  
                  <SearchBox queryFields={["_id","db_xrefs.identifier"]} prefixQueryFields={["_id","db_xrefs.identifier"]} placeholder="Search id ..." searchOnChange={false}/>
                  <br/>
                  <RefinementListFilter title="Index" id="type" field="_index"/>
                  <br />
                  <RefinementListFilter id="sex" title="sex" field="sex" />
                  <br />
                  <RefinementListFilter id="location" title="location" field="location" />
                  <br />
                  <RefinementListFilter id="healthy" title="healthy" field="healthy" />
                  <br />
                  <RefinementListFilter id="AntibioticRegimen" title="AntibioticRegimen" field="AntibioticRegimen" />
                  <br />
                  <RefinementListFilter id="feces_type" title="feces_type" field="feces_type" />
                  <br />
                </SideBar>

                <LayoutResults>
                  <ActionBar>
                    <ActionBarRow>
                      <div className="h3 page-title"><u>Metagenomic samples</u><div className="hit-stats"><HitsStats/></div></div>
                    </ActionBarRow>
                    <ActionBarRow>
                      <SelectedFilters/>
                      <ResetFilters/>
                    </ActionBarRow>
                    <ActionBarRow>
                      <Paging onPaginationChange={setSelectAllNullHandler} />
                    </ActionBarRow>
                  </ActionBar>

                  <div className="sk-action-bar__info">
                    <PageSize onPageSizeChange={setSelectAllNullHandler}/>
                    <button className="btn btn-primary btn-sm select-all" onClick={selectAllHandler}>Select All</button>
                    <button className="btn btn-primary btn-sm deselect-all" onClick={deselectAllHandler}>Deselect All</button>
                  </div>

                  <Hits hitsPerPage={10} listComponent={newHitsTable} />
                  <InitialLoader component={InitialLoaderComponent}/>
                  <NoHits/>

                  <div>
                    <SipCart title="sip_cart" ref="cart" description={this.description} sample={this.sample_json} options={[this.stanza_json, this.tax_ranks_json, this.funcs_json]} reqUrl={this.reqUrl}  addedItem={this.state.addedItem} removedItem={this.state.removedItem} onRemoveItems={onRemoveHandler}/>
                  </div>

                </LayoutResults>
              </LayoutBody>
            </Layout>
          </SearchkitProvider>
      </div>
    );
  }

}

export default Sip;

