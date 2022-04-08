const DestinationSelect = ({ setActive, moonActive, marsActive, europaActive, titanActive }) => {

    const handleClick = (e) => {
        setActive(e)
    }

    return (
        <ul className="destinationSelectContainer">
            <li className={`destination ${ moonActive && 'activeDestination' }`} onClick={handleClick}>moon</li>
            <li className={`destination ${ marsActive && 'activeDestination' }`} onClick={handleClick}>mars</li>
            <li className={`destination ${ europaActive && 'activeDestination' }`} onClick={handleClick}>europa</li>
            <li className={`destination ${ titanActive && 'activeDestination' }`} onClick={handleClick}>titan</li>
        </ul>
    );
}

export default DestinationSelect;