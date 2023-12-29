import ViewNow from "../pages/ViewNow";
import ViewDetails from "../pages/ViewDetails";

const BedSheet = () =>{
    return (
        <div className='bedsheet-container'>
            <div className='bedsheet-information-container'>
                <h2 style = {{fontSize: '28px'}}>BEDSHEET SETS</h2>
                <div className='bedsheet-price'>
                    <p style = {{color: '#7B5136', fontSize: '28px'}}>&#36;50.00</p>
                    <p style = {{textDecoration: 'line-through', color: '#7B5136', fontSize: '16px'}}>&#36;200.00</p>
                </div>
                <p style = {{color:' #000', fontSize: '16px', fontWeight: '300', lineHeight:'22px'}}>
                    Lorem ipsum dolor sit amet, consectetur
                    <br/>adipiscing elit, sed do eiusmod tempor.
                </p>
                <ViewDetails />
            </div>
        </div>
    )
}

export default BedSheet;

