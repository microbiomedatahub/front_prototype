import { Link } from 'react-router-dom';
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
            <Link to="/analysis/sip" className="lead">Search microbiome data</Link>
          </div>
        </div>
      </div>
     </div>
    );
  } else if(PROJECT_TYPE=="a") {
    return (
      <div className='container-fluid'>
        <div className='row logo-area'>
          <div className='col-sm-12'>
            <a className='main_logo center-block'></a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <blockquote className='lead'>Integrating and representing genome, metagenome, taxonomy resources and the analysis datasets with Semantic Web Technologies.</blockquote>
            <a className='pull-right' href='https://microbedbjp.github.io/document/#repository' target='_blank'>Learn more </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='row'>
              <h3>
                <u>Features</u>
              </h3>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-database'></span>
                  <span>Data sources of MicrobeDB.jp ver. 3</span>
                </h3>
                <div className='col-sm-12'>
                  <a className='btn suggest-category term-meo' href='https://bioportal.bioontology.org/ontologies/MEO' style={{color: white}}>
                    Metagenome and Microbes Environmental Ontology
                    <span className='badge badge-light'>2401</span>
                  </a>
                  <a className='btn suggest-category term-taxonomy' href='https://www.ncbi.nlm.nih.gov/taxonomy' style={{color: white}}>
                    Taxonomy
                    <span className='badge badge-light'>129342</span>
                  </a>
                  <a className='btn suggest-category term-mbgd' href='http://mbgd.genome.ad.jp' style={{color: white}}>
                    Ortholog Groups
                    <span className='badge badge-light'>4203173</span>
                  </a>
                  <a className='btn suggest-category term-mpo' href='https://bioportal.bioontology.org/ontologies/MPO' style={{color: white}}>
                    Microbial Phenotype Ontology
                    <span className='badge badge-light'>277</span>
                  </a>
                  <a className='btn suggest-category term-sample' href='https://www.ncbi.nlm.nih.gov/biosample' style={{color: white}}>
                    Genome and Metagenome Sample
                    <span className='badge badge-light'>1920339</span>
                  </a>
                  <a className='btn suggest-category term-strain' href='http://integbio.jp/rdf/' style={{color: white}}>
                    Culture collections in Japan
                    <span className='badge badge-light'>38414</span>
                  </a>
                  <a className='btn suggest-category term-pdo' href='https://bioportal.bioontology.org/ontologies/PDO' style={{color: white}}>
                    Pathogenic Disease Ontology
                    <span className='badge badge-light'>387</span>
                  </a>
                  <a className='btn suggest-category term-hmado' href='https://bioportal.bioontology.org/ontologies/HMADO' style={{color: white}}>
                    Human Microbiome Associated Disease Ontology
                    <span className='badge badge-light'>305</span>
                  </a>
                  <a className='btn suggest-category term-kegg' href='https://www.genome.jp/kegg/ko.html' style={{color: white}}>
                    KEGG Orthology
                    <span className='badge badge-light'>22421</span>
                  </a>
                </div>
                <span className='h4 pull-right'>Last Modified date: 2020-02-16</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-search'></span>
                  <span>Keyword Search</span>
                </h3>
                <span>MicrobeDB.jp provides a keyword search function with a simple interface. The keyword search gives the user free-text access to the literal fields of all RDF/OWL resources on MicrobeDB.jp. Click</span>
                <a className='btn btn-default active' href='/search' role='button'>
                  Text search
                </a>
                <span>.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-stats'></span>
                  <span>Representation and Visualization</span>
                </h3>
                <span>For representation of database resources and analysis results, MicrobeDB.jp project has developed 197 TogoStanza, whch is a generic Web framework which enables the visualizing of reusable Web components that are embeddable into any Web applications. See</span>
                <a className='btn btn-default active' href='/stanza' role='button'>
                  TogoStanza List
                </a>
                <span>for more information.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-th-list'></span>
                  <span>Comparative Analysis</span>
                </h3>
                <span>MicrobeDB.jp provides Comparative Analysis Tools between the</span>
                <a className='btn btn-default active' href='/analysis/metagenome' target='_blank'>
                  metagenome samples
                </a>
                <span>,</span>
                <a className='btn btn-default disabled' href='/analysis/environment' target='_blank'>
                  the environment terms
                </a>
                <span>,</span>
                <a className='btn btn-default disabled' href='/analysis/taxonomy' target='_blank'>
                  the taxa
                </a>
                <span>, and</span>
                <a className='btn btn-default disabled' href='/analysis/metadata' target='_blank'>
                  sample metadata and taxonomic/functional analysis
                </a>
                <span>based on TogoStanza framework. If you are interested in comparative analysis, it can be visualized by using a comparison tool.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-cloud-upload'></span>
                  <span>Upload Your Data</span>
                </h3>
                <span>By uploading the data to MicrobeDB.jp, you can execute comparative analysis between your data and genomic and metagenomic analysis results on MicrobeDB.jp. For that, you need to</span>
                <a className='btn btn-default active' href='https://tauth.annotation.jp/users/sign_up' target='_blank'>
                  CREATE your account
                </a>
                <span>and</span>
                <a className='btn btn-default active' href='/auth/login?return_to=%2F' target='_blank'>
                  Sign in
                </a>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if(PROJECT_TYPE=="b") {
    return (
      <div className='container-fluid'>
        <div className='row logo-area'>
          <div className='col-sm-12'>
            <a className='main_logo center-block'></a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <blockquote className='lead'>Integrating and representing genome, metagenome, taxonomy resources and the analysis datasets with Semantic Web Technologies.</blockquote>
            <a className='pull-right' href='https://microbedbjp.github.io/document/#repository' target='_blank'>Learn more </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='row'>
              <h3>
                <u>Features</u>
              </h3>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-database'></span>
                  <span>Data sources of MicrobeDB.jp ver. 3</span>
                </h3>
                <div className='col-sm-12'>
                  <a className='btn suggest-category term-meo' href='https://bioportal.bioontology.org/ontologies/MEO' style={{color: white}}>
                    Metagenome and Microbes Environmental Ontology
                    <span className='badge badge-light'>2401</span>
                  </a>
                  <a className='btn suggest-category term-taxonomy' href='https://www.ncbi.nlm.nih.gov/taxonomy' style={{color: white}}>
                    Taxonomy
                    <span className='badge badge-light'>129342</span>
                  </a>
                  <a className='btn suggest-category term-mbgd' href='http://mbgd.genome.ad.jp' style={{color: white}}>
                    Ortholog Groups
                    <span className='badge badge-light'>4203173</span>
                  </a>
                  <a className='btn suggest-category term-mpo' href='https://bioportal.bioontology.org/ontologies/MPO' style={{color: white}}>
                    Microbial Phenotype Ontology
                    <span className='badge badge-light'>277</span>
                  </a>
                  <a className='btn suggest-category term-sample' href='https://www.ncbi.nlm.nih.gov/biosample' style={{color: white}}>
                    Genome and Metagenome Sample
                    <span className='badge badge-light'>1920339</span>
                  </a>
                  <a className='btn suggest-category term-strain' href='http://integbio.jp/rdf/' style={{color: white}}>
                    Culture collections in Japan
                    <span className='badge badge-light'>38414</span>
                  </a>
                  <a className='btn suggest-category term-pdo' href='https://bioportal.bioontology.org/ontologies/PDO' style={{color: white}}>
                    Pathogenic Disease Ontology
                    <span className='badge badge-light'>387</span>
                  </a>
                  <a className='btn suggest-category term-hmado' href='https://bioportal.bioontology.org/ontologies/HMADO' style={{color: white}}>
                    Human Microbiome Associated Disease Ontology
                    <span className='badge badge-light'>305</span>
                  </a>
                  <a className='btn suggest-category term-kegg' href='https://www.genome.jp/kegg/ko.html' style={{color: white}}>
                    KEGG Orthology
                    <span className='badge badge-light'>22421</span>
                  </a>
                </div>
                <span className='h4 pull-right'>Last Modified date: 2020-02-16</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-search'></span>
                  <span>Keyword Search</span>
                </h3>
                <span>MicrobeDB.jp provides a keyword search function with a simple interface. The keyword search gives the user free-text access to the literal fields of all RDF/OWL resources on MicrobeDB.jp. Click</span>
                <a className='btn btn-default active' href='/search' role='button'>
                  Text search
                </a>
                <span>.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-stats'></span>
                  <span>Representation and Visualization</span>
                </h3>
                <span>For representation of database resources and analysis results, MicrobeDB.jp project has developed 197 TogoStanza, whch is a generic Web framework which enables the visualizing of reusable Web components that are embeddable into any Web applications. See</span>
                <a className='btn btn-default active' href='/stanza' role='button'>
                  TogoStanza List
                </a>
                <span>for more information.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-th-list'></span>
                  <span>Comparative Analysis</span>
                </h3>
                <span>MicrobeDB.jp provides Comparative Analysis Tools between the</span>
                <a className='btn btn-default active' href='/analysis/metagenome' target='_blank'>
                  metagenome samples
                </a>
                <span>,</span>
                <a className='btn btn-default disabled' href='/analysis/environment' target='_blank'>
                  the environment terms
                </a>
                <span>,</span>
                <a className='btn btn-default disabled' href='/analysis/taxonomy' target='_blank'>
                  the taxa
                </a>
                <span>, and</span>
                <a className='btn btn-default disabled' href='/analysis/metadata' target='_blank'>
                  sample metadata and taxonomic/functional analysis
                </a>
                <span>based on TogoStanza framework. If you are interested in comparative analysis, it can be visualized by using a comparison tool.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-cloud-upload'></span>
                  <span>Upload Your Data</span>
                </h3>
                <span>By uploading the data to MicrobeDB.jp, you can execute comparative analysis between your data and genomic and metagenomic analysis results on MicrobeDB.jp. For that, you need to</span>
                <a className='btn btn-default active' href='https://tauth.annotation.jp/users/sign_up' target='_blank'>
                  CREATE your account
                </a>
                <span>and</span>
                <a className='btn btn-default active' href='/auth/login?return_to=%2F' target='_blank'>
                  Sign in
                </a>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if(PROJECT_TYPE=="c") {
    return (
      <div className='container-fluid'>
        <div className='row logo-area'>
          <div className='col-sm-12'>
            <a className='main_logo center-block'></a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <blockquote className='lead'>Integrating and representing genome, metagenome, taxonomy resources and the analysis datasets with Semantic Web Technologies.</blockquote>
            <a className='pull-right' href='https://microbedbjp.github.io/document/#repository' target='_blank'>Learn more </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8 col-sm-offset-2'>
            <div className='row'>
              <h3>
                <u>Features</u>
              </h3>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-database'></span>
                  <span>Data sources of MicrobeDB.jp ver. 3</span>
                </h3>
                <div className='col-sm-12'>
                  <a className='btn suggest-category term-meo' href='https://bioportal.bioontology.org/ontologies/MEO' style={{color: white}}>
                    Metagenome and Microbes Environmental Ontology
                    <span className='badge badge-light'>2401</span>
                  </a>
                  <a className='btn suggest-category term-taxonomy' href='https://www.ncbi.nlm.nih.gov/taxonomy' style={{color: white}}>
                    Taxonomy
                    <span className='badge badge-light'>129342</span>
                  </a>
                  <a className='btn suggest-category term-mbgd' href='http://mbgd.genome.ad.jp' style={{color: white}}>
                    Ortholog Groups
                    <span className='badge badge-light'>4203173</span>
                  </a>
                  <a className='btn suggest-category term-mpo' href='https://bioportal.bioontology.org/ontologies/MPO' style={{color: white}}>
                    Microbial Phenotype Ontology
                    <span className='badge badge-light'>277</span>
                  </a>
                  <a className='btn suggest-category term-sample' href='https://www.ncbi.nlm.nih.gov/biosample' style={{color: white}}>
                    Genome and Metagenome Sample
                    <span className='badge badge-light'>1920339</span>
                  </a>
                  <a className='btn suggest-category term-strain' href='http://integbio.jp/rdf/' style={{color: white}}>
                    Culture collections in Japan
                    <span className='badge badge-light'>38414</span>
                  </a>
                  <a className='btn suggest-category term-pdo' href='https://bioportal.bioontology.org/ontologies/PDO' style={{color: white}}>
                    Pathogenic Disease Ontology
                    <span className='badge badge-light'>387</span>
                  </a>
                  <a className='btn suggest-category term-hmado' href='https://bioportal.bioontology.org/ontologies/HMADO' style={{color: white}}>
                    Human Microbiome Associated Disease Ontology
                    <span className='badge badge-light'>305</span>
                  </a>
                  <a className='btn suggest-category term-kegg' href='https://www.genome.jp/kegg/ko.html' style={{color: white}}>
                    KEGG Orthology
                    <span className='badge badge-light'>22421</span>
                  </a>
                </div>
                <span className='h4 pull-right'>Last Modified date: 2020-02-16</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-search'></span>
                  <span>Keyword Search</span>
                </h3>
                <span>MicrobeDB.jp provides a keyword search function with a simple interface. The keyword search gives the user free-text access to the literal fields of all RDF/OWL resources on MicrobeDB.jp. Click</span>
                <a className='btn btn-default active' href='/search' role='button'>
                  Text search
                </a>
                <span>.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-stats'></span>
                  <span>Representation and Visualization</span>
                </h3>
                <span>For representation of database resources and analysis results, MicrobeDB.jp project has developed 197 TogoStanza, whch is a generic Web framework which enables the visualizing of reusable Web components that are embeddable into any Web applications. See</span>
                <a className='btn btn-default active' href='/stanza' role='button'>
                  TogoStanza List
                </a>
                <span>for more information.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-th-list'></span>
                  <span>Comparative Analysis</span>
                </h3>
                <span>MicrobeDB.jp provides Comparative Analysis Tools between the</span>
                <a className='btn btn-default active' href='/analysis/metagenome' target='_blank'>
                  metagenome samples
                </a>
                <span>,</span>
                <a className='btn btn-default disabled' href='/analysis/environment' target='_blank'>
                  the environment terms
                </a>
                <span>,</span>
                <a className='btn btn-default disabled' href='/analysis/taxonomy' target='_blank'>
                  the taxa
                </a>
                <span>, and</span>
                <a className='btn btn-default disabled' href='/analysis/metadata' target='_blank'>
                  sample metadata and taxonomic/functional analysis
                </a>
                <span>based on TogoStanza framework. If you are interested in comparative analysis, it can be visualized by using a comparison tool.</span>
              </div>
              <div className='col-sm-12 top-component'>
                <h3>
                  <span className='glyphicon glyphicon-cloud-upload'></span>
                  <span>Upload Your Data</span>
                </h3>
                <span>By uploading the data to MicrobeDB.jp, you can execute comparative analysis between your data and genomic and metagenomic analysis results on MicrobeDB.jp. For that, you need to</span>
                <a className='btn btn-default active' href='https://tauth.annotation.jp/users/sign_up' target='_blank'>
                  CREATE your account
                </a>
                <span>and</span>
                <a className='btn btn-default active' href='/auth/login?return_to=%2F' target='_blank'>
                  Sign in
                </a>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portal
