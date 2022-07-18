import "./CostItem.css"

function CostItem() {
    const costDate = new Date(2022, 2, 12);
    const costDescription = "Холодильник";
    const costAmount = 999.99;

    return (
        <div className='costItem'>
            <div>{costDate.toISOString()}</div>
            <div className='costItem_description'>
                <h2>{costDescription}</h2>
                <div className='costItem_price'>{costAmount}$</div>
            </div>
        </div>
    );
}

export default CostItem;