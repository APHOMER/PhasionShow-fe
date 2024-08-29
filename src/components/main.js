import './main.css'
// import Events from 'events.png'

export default function Landing () {
    return (
      <div className='page-container'>
          <div className='top-section'>
            <div className='header'>
                <div className='left-hand-side'>
                <img src="./events.png" className="suc-img" alt="" />
                </div>
                <div className='right-hand-side'>
                    <p>Schedule</p>
                    <p>Ticket</p>
                    <p>Contact</p>
                    <button>Login</button>
                </div>
            </div>
        </div>
        <div className='middle-section'></div>
        <div className='bottom-section'></div>
      </div>
    )
}