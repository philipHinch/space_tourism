const DestinationSelect = ({ setActiveIndex, setActiveDestination, moonActive, marsActive, europaActive, titanActive }) => {

    const handleClick = (e) => {
        setActiveIndex(parseInt(e.target.id))
        setActiveDestination(e)
    }

    return (
        <ul className="destinationSelectContainer">
            <li id='0' className={`destination ${ moonActive && 'activeDestination' }`} onClick={handleClick}>moon</li>
            <li id='1' className={`destination ${ marsActive && 'activeDestination' }`} onClick={handleClick}>mars</li>
            <li id='2' className={`destination ${ europaActive && 'activeDestination' }`} onClick={handleClick}>europa</li>
            <li id='3' className={`destination ${ titanActive && 'activeDestination' }`} onClick={handleClick}>titan</li>
        </ul>
    );
}

export default DestinationSelect;