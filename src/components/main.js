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
        <div className='bottom-section'>
            <div>
                <img alt=''></img>
                <p>Events is a global self service ticketing platform for live experience that allows anyone to create share, find and attend events that fuels their passions and enrich their lives </p>   
            </div>
            <div>
                <h1>Plan Events</h1>
                <p>Create and Set Up</p>
                <p>Sell Tickets</p>
                <p>Online RSVP </p>
                <p>Online Events</p>
            </div>
            <div>
                <h1>About Us</h1>
                <p>Press</p>
                <p>Contact Us</p>
                <p>Help Center </p>
                <p>How it works</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
            <div>
                <h1>Stay in the Loop</h1>
                <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                <input placeholder='Enter Your Email Address'/>
                <button>Subscribe Now</button>
            </div>
        </div>
      </div>
    )
}