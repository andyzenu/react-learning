import './index.css';
function Summary() {
  return (
    <div className="summary">
			<div className='summary-wrapper'>
				<input type='checkbox' name="summary" /><span>0</span>/<span>3 done</span>
			</div>
			<button type="button" className='clear'>Clear</button>
    </div>
  );
}

export default Summary;
