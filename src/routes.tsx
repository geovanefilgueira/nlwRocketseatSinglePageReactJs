import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home'
import PageMaps from './components/pageMaps'
// npm install @types/react-router-dom para reconhecer o routerdom types
// e npm install @ types / react
//npm install --save @types/react e funcionou
//npm install --save @types/react-dom
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={PageMaps} />
            </Switch>  
        </BrowserRouter>
    );
}

export default Routes;