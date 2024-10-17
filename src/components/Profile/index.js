import doctorProfile from '../../assets/doctor-profile.png'
import rating from '../../assets/rating.png'
import womensHealth from '../../assets/womens-health.png'
import skinCare from '../../assets/skincare.png'
import Immunity from '../../assets/immunity.png'
import hairCare from '../../assets/Haircare.png'
import verified from '../../assets/verified-sign.png'
import follow from '../../assets/foloow-us.png'
import townImage from '../../assets/town-image.png'
import reviewPerson from '../../assets/review-person.png'
import stars from '../../assets/stars.png'
import calender from '../../assets/calender.png'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import selected from '../../assets/selected.png'
import './index.css'

const concernsData=["Skin Treatment","Pregnency","Period Doubts","Endometriosis","Pelvic Pain"]

const morning=["9:00 AM","9:30 AM","10:00 AM","10:30 AM"]

const evening=["4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM"]

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='inside-container'>
      <div>
        <div className='image-name-container'>
        <img src={doctorProfile} alt=""/>
        <div className='name-section'>
          <div>
          <span>Dr.Bruce Willis</span>
          <img src={verified} alt=""/>
          </div>
           <span>Gynecologist</span>
           <img src={rating} alt=""/>
        </div>
        </div>
        <div className='followers-container'>
            <span>Followers</span>
            <p>850</p>
        </div>
        <div className='following-container'>
            <span>Following</span>
            <p>18k</p>
        </div>
        <div className='posts-container'>
            <span>Posts</span>
            <p>250</p>
        </div>
       <button type="button" className='book-appointment-btn'>Book an Appointment</button>
      </div>
    </div>

    <div className='doctors-description'>
      <div className='doctors-description-left'>
        <div className='about-container'>
          <div className='about-top'>
            <h4>A Little About me</h4>
            <button typw="button">Follow +</button>
          </div>
          <span>Hello I'm Dr.Bruce willish a Gycnologist in multispeciality Hospital.</span>
          <div className='readmore-container'>
           <hr width="70%"/>
           <p>Read more...</p>
          </div>
          <div className='language-spoken'>
            <p>Language Spoken</p>
            <span>English</span>
            <span>Hindi</span>
            <span>Telugu</span>
          </div>
          <img src={follow} alt=""/>
        </div>
        <div className='specialization-container'>
          <h3>I Specialize In</h3>
          <div className='cards-container'>
            <li>
              <img src={womensHealth} alt=""/>
              <span>Women's Health</span>
            </li>
            <li>
              <img src={skinCare} alt=""/>
              <span>Skin Care</span>
            </li>
            <li>
              <img src={Immunity} alt=""/>
              <span>Immunity</span>
            </li>
            <li>
              <img src={hairCare} alt=""/>
              <span>Hair Care</span>
            </li>
          </div>
        </div>
        <div className='concerns-container'>
          <h3>The Concerns Treat</h3>
          <div>
          {
            concernsData.map(concern=>(
              <li>{concern}</li>
            ))
          }
          <li>+ 5 More</li>
          </div>
        </div>
        <div className='work-experience'>
           <p>My Work Experience </p>
           <p> HAVE BEEN IN PRACTICE FOR: 7+ YEARS</p>
           <hr width="80%"/>
           <div className='town-container'>
            <img src={townImage} alt=""/>
            <div className='name-container'>
              <p>Midtown Medical Clinic</p>
              <span>Senior Doctor</span>
            </div>
            <span>2016-PRESENT</span>
           </div>

           <div className='town-container'>
            <img src={townImage} alt=""/>
            <div className='name-container'>
              <p>Midtown Medical Clinic</p>
              <span>Senior Doctor</span>
            </div>
            <span>2010-2015</span>
           </div>
        </div>
        <div className='reviews-container'>
          <h3>Featured Reviews(102)</h3>
          <div className='review-person-container'>
          <div className='person-container'>
            <img src={reviewPerson} alt=""/>
            <div className='name-container'>
              <p>Alicent Hightower</p>
              <span>Consultant for skin care</span>
            </div>
            <span>20 Jan 2023</span>
           </div>
           <img src={stars} alt=""/>
           <p>Might be bit early to confirm but yes i can noticeable difference in my hairfall.</p>
        </div>
        <div className='person-container'>
            <img src={reviewPerson} alt=""/>
            <div className='name-container'>
              <p>Alicent Hightower</p>
              <span>Consultant for skin care</span>
            </div>
            <span>20 Jan 2023</span>
           </div>
           <p>Might be bit early to confirm but yes i can noticeable difference in my hairfall.</p>
        </div>
        
      </div>
      <div className='doctors-description-right'>
        <div className='appointment-fee-container'>
          <p>Appointment Fee</p>
          <span>$800</span>
        </div>
        <div className='select-mode-heading'>
          <span>Select your mode of session</span>
          <hr width="30%"/>
        </div>
        <div className='select-mode-containers'>
          <div>
            <p>In-Clinic</p>
            <span>45min</span>
          </div>
          <div className='selected'>
            <p>Video<span><img src={selected} alt=""/></span></p>
            <span>45min</span>
          </div>
          <div>
            <p>Chat</p>
            <span>45min</span>
          </div>
        </div>

        <div className='pick-slot-heading'>
          <span>Pick a time slot</span>
          <hr width="50%"/>
          <img src={calender} alt=""/>
        </div>
        <div className='pick-slot-containers'>
        <img src={leftArrow} alt=""/>
          <div className='selected'>
            <p>Mon, 10 Oct</p>
            <span>10 slots</span>
          </div>
          <div>
            <p>Tue, 11 Oct</p>
            <span>2 slots</span>
          </div>
          <div>
            <p>Wed, 12 Oct</p>
            <span>5 slots</span>
          </div>
          <img src={rightArrow} alt=""/>
        </div>
       <h3>Morning</h3>
       <div className='morning-container'>
        {
          morning.map(time=>(
            <li>{time}</li>
          ))
        }
        <li className='selected'>11:00 AM</li>
       </div>
      <h3>Evening</h3>
      <div className='evening-container'>
        {
          evening.map(time=>(
            <li>{time}</li>
          ))
        }
       </div>
       <button type="button"  className='book-appointment-btn'>Make an Appointment</button>
      </div>
    </div>
    </div>
  )
}

export default Profile
