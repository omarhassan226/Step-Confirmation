/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const Button = ({backgroundColor, color, onClick, children}) => {
    return (
        <div>
            <button style={{backgroundColor:backgroundColor, color:color}} onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button
