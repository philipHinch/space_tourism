const PageTitle = ({ number, text, crewPageTitle }) => {
    return (
        <div className={`pageTitleContainer ${ crewPageTitle ? 'crewPageTitle' : '' }`}>
            <p className="pageNumber">{number}</p>
            <p className="pageText">{text}</p>
        </div>
    );
}

export default PageTitle;