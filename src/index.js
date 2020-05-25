import React from 'react'
import { render } from 'react-dom'
import Main from './Tabs/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  fontFamily: 'sans-serif',
  backgroundColor: '#F5F5F5',
  height: 'auto'
}

const App = () => (
  <div style={styles}>
    <Main />
  </div>
)

render(<App />, document.getElementById('root'))
