import React from 'react'
import './card.css'

const Card = ({children}) => {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

// class Card extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div className='card'>
//                 <h3>{ this.props.titulo }</h3>
//                 <p>Texto card</p>
//             </div>
//         )
//     }
// }

export default Card