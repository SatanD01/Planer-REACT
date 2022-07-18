import "./CostItem.css"

function CostItem() {
    return (
        <div className='costItem'>
            <div>Март 2022 12</div>
            <div className='costItem_description'>
                <h2>Холодильник</h2>
                <div className='costItem_price'>999,99$</div>
            </div>
        </div>
    );
}

export default CostItem;