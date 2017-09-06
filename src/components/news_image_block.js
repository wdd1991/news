import React from 'react'
import {
    Card
} from 'antd'
import {Link} from 'react-router'
import axios from 'axios'

/**
 * Created by xfzhang on 2017/3/5.
 * 新闻列表组件(带图片)
 */
export default class NewsImageBlock extends React.Component{

    constructor (props) {
        super(props)
        this.state = {
            newsArr: []
        }
    }

    componentDidMount () {
        const {type, count} = this.props
        const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
        axios.get(url)
            .then(response => {
                const newsArr = response.data
                this.setState({newsArr})
            })
    }

    render () {
        const imageStyle = {
            width: this.props.imageWidth,
            height: "90px",
            display: 'block'
        }
        const titleStyle = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap", // 不进行换行
            overflow: "hidden", // 超出部分自动隐藏
            textOverflow: "ellipsis" // 显示省略号
        };
        const {newsArr} = this.state
        const newsList = newsArr.length
            ? newsArr.map((news, index) => (
                <div key={index} className="imageblock">
                  <Link to={`/news_detail/${news.uniquekey}`}>
                    <div>
                      <img src={news.thumbnail_pic_s} alt="" style={imageStyle}/>
                    </div>
                    <div className="custom-card">
                      <h3 style={titleStyle}>{news.title}</h3>
                      <p>{news.author_name}</p>
                    </div>
                  </Link>
                </div>
            ))
            : '请稍等……'

        const {cardTitle, cardWidth} = this.props
        return (
            <Card title={cardTitle} style={{width:cardWidth}} className="topNewsList">
                {newsList}
            </Card>
        )
    }
}

NewsImageBlock.propTypes = {
    cardTitle: React.PropTypes.string.isRequired,
    cardWidth: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired,
    imageWidth: React.PropTypes.string.isRequired,
}
