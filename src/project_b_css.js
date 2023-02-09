//import './application_b.scss'

function ProjectBCss() {
    let background_color = "#003366";
    let font_color_in_cart = "#CCCCCC";
    let font_color_notice = "orange";
    let font_color_in_nav = "#999999";/* header font color */
    let font_size_in_nav = "24pt";
    let logo_image = "url(/images/project_b.png)";
    let nav_image_height = "100px";
    let navi_image_width = "500px";
    let font_color_in_portal_index = "#eeeeee";
    let font_color_in_top_component = "#999999";

    return (
        <div>
          <style jsx="true">{`
            /************************************************************************************* 
            // 検索ページ
            **************************************************************************************/
            .sk-layout {
                margin-top: 64px;
                width: 120%;
            }
                      
            .search {
              &__query {
                position:absolute;
                top:0;
                left:0;
                right:0;
                height:41px;
                display:flex;
                border-bottom:1px solid #ddd;
              }
              .search-box {
                height:40px;    flex:1;
              }
              .search-box__loader {
                display:none
              }
              &__results {
                position:absolute;
                top:41px;
                left:0;
                right:0;
              }
              .hits-hit {
                text-align:center;
                a {
                  text-decoration:none;
                }
                &__poster {
                  max-width:100px;
                  max-height:140px;
                  display:inline-block;
                }
                &__title {
                  font-size:12px;
                  text-align:center;
                  margin-top:5px;
                }
              }
            }
              
            .sk-layout__top-bar {
              position: relative;
            }
            
            .sk-layout__body {
              margin-left: 10px;
              margin-bottom: 10px;
              margin-top: 0px;
            }
            
            div.sk-search-box {
              background-color: lightblue;
            }
                
            th.select {
              width: 100px;
            }
            
            .example-enter {
              animation: inout 0.5s;
              animation-iteration-count: 1;
              -webkit-animation: inout 0.5s; /* Safari & Chrome */
              -webkit-animation-iteration-count: 1;
            }
            
            .example-leave {
              animation: inout 0.5s;
              animation-iteration-count: 1;
              -webkit-animation: inout 0.5s; /* Safari & Chrome */
              -webkit-animation-iteration-count: 1;
            }
              
            @keyframes inout {
              0%   { transform: scale(1, 1); }
              25%   { transform: scale(1.2, 1.2); }
              50%   { transform: scale(0.8, 0.8); }
              100%  { transform: scale(1, 1); }
            }
            @-webkit-keyframes inout { /* Safari & Chrome */
              0%   { -webkit-transform: scale(1, 1); }
              25%  { -webkit-transform: scale(1.2, 1.2); }
              50%  { -webkit-transform: scale(0.8, 0.8); }
              100% { -webkit-transform: scale(1, 1); }
            }
              
            .cart {
              background-color: ${background_color};
              margin: 18px;
              padding: 8px;
              min-height: 40px;
              height: auto !important;
              height: 40px;
              width: 98%;
              /*display:inline-block;*/
            
              border-radius: 5px;		/* CSS3草案 */
              -webkit-border-radius: 5px;	/* Safari,Google Chrome用 */
              -moz-border-radius: 5px;	/* Firefox用 */
            
              .stanza_names {
                margin: 10px;
                display: inline-block;
                width: 500px;
              }
              .tax_rank {
                margin:10px;
                display: inline-block;
                width: 200px;
              }
              .func_type {
                margin:10px;
                display: inline-block;
                width: 200px;
              }
              .description {
                margin-left: 10px;
                margin-right: 10px;
              }
            
              .deselect-all-btn {
                margin-left: 10px;
              }
            }
              
            span.item {
              display: inline-block;
              border: 1px solid #ccc;
              border-radius: 2px;
              background-color: #FFFFFF;
              padding: 1px;
              margin: 2px;
            }
            
            .sk-action-bar__info {
              padding-left: 16px;
            }
            
            .compare {
              margin-left: 10px;
            }
            
            .badge {
              margin-left: 5px;
            }
            
            .select-all {
              margin-left: 10px;
            }
            
            .deselect-all {
              margin-left: 10px;
            }
            
            .paging {
              display: inline-block;
              margin: auto;
            }
            
            .page-size {
              display: inline-block;
            }
            
            .title {
              margin-left: 10px;
              font-weight: bold;
            }
            
            .notice {
              display: inline-block;
              margin-left: 10px;
            }
            
            #stanza {
              width: 100%;
            }
            
            .loader {
              margin-left: 10px;
            }
            
            .page-title {
              display: inline-block;
              .hit-stats {
                margin-left: 10px;
                display: inline-block;
              }
            }
            
            table {
              .link {
                margin-right: 5px;
              }
            }
            
            .hide {
              display: none;
            }
            
            .tab_btn.active {
              font-weight:bold;
              background-color: #f4f4f4;
            }
            
            .tab_btn {
              margin-bottom: 0px;
              padding: 10px;
              background-color: #AAA;
              display: inline-block;
              width: 200px;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              border-left: solid 1px #666;
              border-top: solid 1px #666;
              border-right: solid 1px #666;
            }
            
            .hologenome-cart {
              background-color: #f2f2f2;
            }
              
            div.jbrowse {
              padding: 10px;
            }
            
            div.selection {
              display: flex;
              justify-content: space-between;
            }
            
            .keyword {
              display: inline-block;
              width: 500px;
              margin-left: auto;
              .reset-button {
                margin-left: 10px;
              }
            }
            
            .pagination-ul {
              margin: 5px;
              .pagination-li {
                display: inline-block;
                margin-left: 5px;
              }
              .pagination-active {
                background-color: #337ab7;
                color: white;
                a {
                  color: white;
                }
              }
            }
            
            .input-keyword-title {
              margin-left: 20px;
              font-weight: bold;
            }
            .input-keyword{
              margin-left: 10px;
            }
            
            .select-host{
              display: inline-block;
            }
            
            .select-host-title {
              margin-left: 20px;
              font-weight: bold;
            }
            
            div.response {
              width: 100%;
              padding: 0px;
            }
            
            div.response-panel {
              margin-top: 10px;
              background-color: white;
              padding: 5px;
            }
            
            span.type {
              margin-right: 10px;
              margin-left: 10px;
            }
            
            .sk-layout__results {
              min-height: 200px;
            }
    
            /***************************************************************************************** 
            // 主に検索ページ以外
            ******************************************************************************************/
            @media (min-width: 768px) {
              .dropdown:hover .dropdown-menu {
                display: block;
              }
            }
              
            body,.jumbotron,.container,.container-fluid, .mdb {
              background-color: ${background_color};  
            }

            .container-fluid {
                color: ${font_color_in_portal_index}
            }

            .top-component {
                color: ${font_color_in_top_component}
            }
            
            fieldset.disabled, fieldset.disabled .panel, fieldset.disabled .panel-footer,  fieldset.disabled .panel input, fieldset.disabled .panel select
            {
              background-color: gray !important;
              z-index: 100;
              opacity: 0;
            }
            
            .logo-area {
                margin-top:50px;
            }

            .main_logo, .main_logo:hover {
              background-image: ${logo_image};
              background-repeat: no-repeat;
              height: 160px;
              width: 320px;
              border-style:none;
            }
            
            .navbar-brand {
              /*  background: url("./public/images/logo.jpg") no-repeat left center; */
              background-image: ${logo_image};
              background-repeat: no-repeat;
              background-size: contain;
              height: ${nav_image_height};
              width: ${navi_image_width};
            }
            
            .navbar-nav li a{
              color: $font_color_in_nav !important;
              font-size: ${font_size_in_nav};
            }
            
            .arrow{
              width: 0;
              height: 0;
              border-top: 30px solid #d9534f;
              border-right: 80px solid transparent;
              border-bottom: 30px solid transparent;
              border-left: 80px solid transparent;
            }
            
            .portal-index {
              color: ${font_color_in_portal_index};
            }
    
          `}</style>
        </div>
      );
}

export default ProjectBCss;