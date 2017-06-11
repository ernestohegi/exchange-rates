const rateStyle = {
    marginRight: '10px'
};

const Rate = props => (
    <p>
        <span style={rateStyle}>{ props.currency }</span>
        <span style={rateStyle}>{ props.value }</span>
    </p>
);

export default Rate;