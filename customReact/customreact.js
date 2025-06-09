function customRender(reactelement, container) {
    /*
   const domElement =  document.createElement('reactelement.type')
   domElement.innerHTML = reactelement.Children
   domElement.setAttribute('href', reactelement.props.href) 
     domElement.setAttribute('target', reactelement.props.href) 
     container.appendChild(domElement)
     */
    const domElement = document.createElement(reactelement.type)
    domElement.innerHTML = reactelement.Children
    for (const prop in reactelement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactelement.props[prop])
        }
        container.appendChild(domElement)
    }

const reactelement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactelement, mainContainer)