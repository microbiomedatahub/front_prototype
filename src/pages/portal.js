import '../portal.css'
import '../microbedb.css';

const PROJECT_TYPE = process.env.REACT_APP_PROJECT_TYPE

function Portal() {
  const white = '#ffffff'

  if(PROJECT_TYPE=="sip") {
    return (
      <div className='container-fluid'>
        <div className='row logo-area'>
          <div className='col-sm-12'>
            <a className='main_logo center-block'></a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <blockquote className='lead'>This web site is a Japanese gut microbiome database (JGMDB) of the Cross-ministerial Strategic Innovation Promotion Program (SIP) "Technologies for Smart Bio-industry and Agriculture" project.</blockquote>
            <blockquote className='lead'>This database contains 1251 Japanese gut metagenome data obtained from the comprehensive survey for the construction of an integrated database of food, gut microbiome, and health information (the "Sukoyaka Health Survey"). Users can search samples by several metadata (area, sex, health status, etc.) and can compare microbial taxonomic composition among samples. The genus level taxonomic composition was calculated from the Illumina NovaSeq 6000 shotgun metagenomic short read sequencing data by using the MicrobeDB.jp's microbiome analysis pipeline.</blockquote>
            <a className='pull-right' href='https://www.naro.go.jp/laboratory/brain/sip/sip2/index.html' target='_blank'>Learn SIP "Technologies for Smart Bio-industry and Agriculture" project</a>
            <blockquote className='lead'>If users want to analyze more detail relationships among gut microbiome, gut and blood metabolome, metadata, and human genome, please visit SIP Healthcare Group Sharing Database (SHD).</blockquote>
            <a className='pull-right' href='https://gr-sharingdbs.biosciencedbc.jp/shd' target='_blank'>access SHD summary page</a>
            <blockquote className='lead'>JGMDB is maintained by the Genome Diversity Laboratory and the Genome Evolution Laboratory at the National Institute of Genetics, Japan. If users have any questions about JGMDB, please email hmori at nig.ac.jp.</blockquote>

          </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <a className='lead' href='/analysis/sip' target='_blank'>Search microbiome data</a>
          </div>
        </div>
      </div>
            </div>
    );
  }
}

export default Portal
