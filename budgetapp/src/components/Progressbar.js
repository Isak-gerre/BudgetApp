

const Progressbar = ({ amount, max }) => {
    function getProcent() {
        let procent = (parseInt(amount) / parseInt(max) * 100);
        return procent + "%";
    }
    function getColor() {
        let procent = (parseInt(amount) / parseInt(max) * 100);
            if (procent >= 80) {
            return "red"
            }
            if (procent >= 50) {
            return "yellow"
            }
            return "green"
        
    }

    return <div className="progress">
      <div className="amount" style={{width: getProcent(), backgroundColor: getColor()}}></div>
  </div>;
};



export default Progressbar;
