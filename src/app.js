import React from 'react'
import ReactDom from 'react-dom'
import * as request from 'superagent'

const app = document.getElementById('app')

class HelloWorld extends React.Component {
  constructor() {
    super()
    this.state = {
      content: {__html: "Hello World!"}
    }
  }

  componentWillMount() {
    request.get('/public/first.html')
      .then((res) => {
        this.setState({
          content: {
            __html: res.text
          }
        })
      })
  }

  render() {
    return <div dangerouslySetInnerHTML={this.state.content}/>
  }
}

ReactDom.render(<HelloWorld/>, app)