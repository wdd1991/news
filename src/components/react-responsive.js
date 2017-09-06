import React from 'react'
import ReactDOM from 'react-dom'
import {Router,hashHistory,IndexRoute,Route} from 'react-router'
import MediaQuery from 'react-responsive'
import App from './app'
import NewsContainer from './news_container'
import NewsDetail from './news_detail'
import UserCenter from './user_center'

import MobileApp from './mobile_app'
import MobileNewsContainer from './mobile_news_container'
import MobileNewsDetail from './mobile_news_detail'
import ModileUserCenter from './mobile_user_center'

ReactDOM.render(
    (
        <div>
            <MediaQuery query="(min-device-width:1224px)">
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={NewsContainer}/>
                        <Route path="/detail/:uniquekey" component={NewsDetail}></Route>
                        <Route path="/usercenter" component={UserCenter}></Route>
                    </Route>
                </Router>
            </MediaQuery>
            <MediaQuery query="(max-device-width:1224px)">
                <Router history={hashHistory}>
                    <Route path="/" component={MobileApp}>
                        <IndexRoute component={MobileNewsContainer}/>
                        <Route path="/detail/:uniquekey" component={MobileNewsDetail}></Route>
                        <Route path="/usercenter" component={ModileUserCenter}/>
                    </Route>
                </Router>
            </MediaQuery>
        </div>
    ),
    document.getElementById('root')

)