import 'file-loader?name=[name].[ext]!../html/index.html'
import '../sass/stylesheet.scss'
import '../md'

import React from 'react'
import { render } from 'react-dom'

import routes from './routes'

render(routes, document.getElementById('root'))
