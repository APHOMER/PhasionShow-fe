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
                    <button className='login-btn'>Login</button>
                </div>
            </div>
            <div className='slide-show'> 
                <p>SBS MTV The Kpop Show Ticket  Package</p>
                <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.</p>
                <button className='get-ticket-btn'>Get Ticket</button>
                <button className='learn-btn'>Learn More</button>
            </div>
            <div className='search-evts'>
                <div>
                    <p>Search Events</p>
                    <input placeholder='Konser Jazz' className='search'/>
                </div>
                 <div>
                    <p>Place</p>
                    <input placeholder='Konser Jazz' className='place'/>
                 </div>
                 <div>
                    <p>Time</p>
                    <select>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                 </div>          
            </div>
        </div>
        <div className='middle-section'>
            <div className='upcoming-events'>
                <div className='options-conatiner'>
                    <h2>Upcoming Events</h2>
                    <select>
                        <option>Weekdays</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wedesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </select>
                    <select>
                        <option>Event Types</option>
                    </select>
                    <select>
                        <option>Any Category</option>
                    </select>
                </div>
                <div className='events-container'>
                    <div className='event-1'>
                        <div className='thumbnail-container'>
                            <img src="./events.png" className="event-img" alt="" />
                        </div>
                        <div className='event-info-containeri'>
                            <div className='event-calendar'></div>
                            <div className='event-info'>
                                <p>Lagos Fashion Week</p>
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='load-btn'>
                    <button>Load More</button>
                </div>
            </div>
            <div className></div>     
        </div>
        <div className='bottom-section'>
            <div>
                <img alt=''></img>
                <div className='events-column'>
                   <p>Events is a global self    service ticketing platform for live experience that allows anyone to create share, find and attend events that fuels their passions and enrich their lives </p>   
                </div>
            </div>
            <div>
                <h1 className='bottom-header'>Plan Events</h1>
                <p>Create and Set Up</p>
                <p>Sell Tickets</p>
                <p>Online RSVP </p>
                <p>Online Events</p>
            </div>
            <div>
                <h1 className='bottom-header'>About Us</h1>
                <p>Press</p>
                <p>Contact Us</p>
                <p>Help Center </p>
                <p>How it works</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
            <div>
                <h1 className='bottom-header'>Stay in the Loop</h1>
                <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                <input placeholder='Enter Your Email Address'/>
                <button>Subscribe Now</button>
            </div>
            
        </div>
      </div>
    )
}