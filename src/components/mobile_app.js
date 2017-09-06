/**
 * Created by Administrator on 2017/9/4 0004.
 */
import React,{Component} from 'react'
import MobileNewsHeader from './mobile_news_header'
import NewsFooter from './news_footer'
import '../componentsCss/mobile.css'

/*移动端根路由组件*/
class MobileApp extends Component {
    render() {
        return(
            <div>
                <MobileNewsHeader/>
                {this.props.children}
                <NewsFooter/>
            </div>
        )
    }
}

export default MobileApp