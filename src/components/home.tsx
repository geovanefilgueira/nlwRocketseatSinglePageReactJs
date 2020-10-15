import React from 'react'
import { Link } from 'react-router-dom'
//imagens
import childern from'../images/home-children.svg'
import logo from'../images/logo.svg'
import logoTitleText from'../images/title-logo-home.svg'
//styles
import '../styles/globalStyles.css'
/* esta pagina foi criada utlizando os conceitos de flx boxes
e a reutlização de clases como especie de framework especifico
a estrutura esta dividida em 3 colunas que são separadas por: * Separação entre componentes* para melhor identificação

*/


export default()=>{
    return(
        <div id="home-page-index" className="lay-row lay-center bk-linear01">
            <div className="w90 lay-row lay-space-b">
                <div className="lay-column lay-space-a lay-align-start">
                    <img src={logo} alt="logo happy"></img>
                    <img src={logoTitleText} alt="logo happy"></img>
                    <label className="title-model-sub">Visite orfanatos e mude o diade muitas crianças.</label>
                </div>
                {/* Separação entre componentes*/}
                <div>
                    <img src={childern} alt="crianças brincando" ></img>
                </div>
                {/* Separação entre componentes*/}
                <div className="lay-column lay-space-a lay-align-end">
                    <div className="lay-column">
                        <label className="title-model-sub">Rio do Sul</label>
                        <label className="title-model-sub">Santa Catarina</label>
                    </div>
                    <button>
                        <Link to="contact">
                        asdas
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}