const PageTitle = ({ number, text }) => {
    return (
        <div className="pageTitleContainer">
            <p className="pageNumber">{number}</p>
            <p className="pageText">{text}</p>
        </div>
    );
}

export default PageTitle;