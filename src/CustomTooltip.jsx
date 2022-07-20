import './CustomTooltip.scss'

function CustomTooltip ({active, payload}) {

    if(active && payload && payload.length) {
        return (
            <div className="customTooltip">

                ${payload[0].value}
            
            </div>
        )
    }

    return null 
}

export default CustomTooltip