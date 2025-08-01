import './styles.scss';

const gridBackground = () => {
    return  (
        <div className="grid-container">
            <div className="grid-lines"></div>
            <div className="grid-cells">
                <div className="cell-1"></div>
                <div className="cell-2"></div>
                <div className="cell-3"></div>
                <div className="cell-4"></div>
            </div>
        </div>
    )
};

export default gridBackground