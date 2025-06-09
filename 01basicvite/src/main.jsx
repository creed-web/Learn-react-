import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const reactelement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    Children: 'click me to visit google'
}
function MyApp() {
    return (
        <div>
            <h1>
                Custom React App
            </h1>
        </div>
    )
}

const AnotherElement =  (
    <a> href="https://google.com" target='_blank' </a>
)
createRoot(document.getElementById('root')).render(
  
    reactelement
)
