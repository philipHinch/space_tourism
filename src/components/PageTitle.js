const PageTitle = ({ number, text, crewPageTitle, techPageTitle }) => {
    return (
        <div className={`pageTitleContainer ${ crewPageTitle ? 'crewPageTitle' : '' } ${ techPageTitle ? techPageTitle : '' }`}>
            <p className="pageNumber">{number}</p>
            <p className="pageText">{text}</p>
        </div>
    );
}

export default PageTitle;