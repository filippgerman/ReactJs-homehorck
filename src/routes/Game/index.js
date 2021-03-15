const GamePage = ({ onChangePage }) => {
    const onBackClick = () => {
        onChangePage && onChangePage('app');
    }
    return(
        <div>
            This is game Page!!
            <button onClick={onBackClick}>
                Back on head page
            </button>
        </div>
    );
};

export default GamePage;
