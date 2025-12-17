import './style.css'

const app = document.querySelector('#app')

// --- State Management ---
const state = {
  partnered: false,
  user: null, // { name, email, ... }
  location: null, // 'Pune', etc.
  serviceType: null, // 'online' | 'offline'
  appointment: null, // { companyName, companySize, eventType, date, timeSlot }
  currentView: 'home'
}

// --- Router/Navigation ---
const navigate = (view) => {
  state.currentView = view
  render()
}

// --- Views ---

// 1. Home Page
const renderHome = () => {
  return `
    <nav class="flex justify-between items-center" style="padding: 1.5rem 2rem; background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(10px); position: sticky; top: 0; z-index: 100;">
      <div class="logo" style="font-weight: 700; font-size: 1.5rem; letter-spacing: -1px; color: var(--primary-color);">
        Connect<span style="color: var(--text-main);">Remote</span>
      </div>
      <div class="flex items-center gap-md">
        <a href="#" onclick="window.navigate('home')">Home</a>
        <a href="#" onclick="window.navigate('signup')">Signup</a>
        <button id="partner-btn" class="btn btn-outline" style="font-size: 0.875rem;">
          ${state.partnered ? 'Partnered ✓' : 'Partner with us'}
        </button>
      </div>
    </nav>

    <main class="container text-center mt-lg animate-fade-in" style="min-height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1 style="font-size: 4rem; margin-bottom: 1.5rem; line-height: 1.1; font-weight: 800; background: linear-gradient(to right, #00bcd4, #ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Bridge the Gap Between<br>Remote & Onsite
      </h1>
      <p style="font-size: 1.25rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 3rem;">
        Reimagine workplace coordination. We increase human connection and seamless collaboration for distributed teams.
      </p>
      
      <div class="flex gap-md justify-center">
        <button class="btn btn-primary" onclick="window.navigate('signup')">Get Started</button>
        <button class="btn btn-outline" onclick="window.navigate('about')">Learn More</button>
      </div>
    </main>
    
    <footer class="text-center" style="padding: 4rem 0; color: var(--text-muted); font-size: 0.875rem;">
      <!-- Credits removed -->
    </footer>
  `
}

// 1.5. About / Learn More Page
const renderAbout = () => {
  return `
      <div class="container flex justify-center items-center" style="min-height: 100vh;">
        <div class="card animate-fade-in" style="width: 100%; max-width: 800px;">
          <h2 class="text-center" style="margin-bottom: 2rem; font-size: 2.5rem; color: var(--primary-color);">About Us</h2>
          
          <div class="text-center" style="margin-bottom: 2rem;">
            <p style="font-size: 1.125rem; margin-bottom: 1rem;">
              <strong>ConnectRemote</strong> is dedicated to solving the isolation crisis in distributed teams.
            </p>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">
              We believe that while work can happen anywhere, human connection requires intention. Our platform seamlessly bridges the physical and digital divide by coordinating onsite meetups and high-fidelity virtual bonding sessions.
            </p>
             <p style="color: var(--text-muted);">
              Whether you are a fully remote startup or a hybrid enterprise, we help your employees feel seen, heard, and connected.
            </p>
          </div>
  
          <div class="flex justify-center gap-md">
             <button class="btn btn-primary" onclick="window.navigate('signup')">Join the Revolution</button>
             <button class="btn btn-outline" onclick="window.navigate('home')">Back to Home</button>
          </div>
        </div>
      </div>
    `
}

// 2. Signup Page
const renderSignup = () => {
  return `
    <div class="container flex justify-center items-center" style="min-height: 100vh;">
      <div class="card animate-fade-in" style="width: 100%; max-width: 480px;">
        <h2 class="text-center" style="margin-bottom: 2rem; font-size: 2rem;">Create Your Account</h2>
        <form id="signup-form">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Full Name</label>
            <input type="text" name="name" placeholder="John Doe" required>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Email Address</label>
            <input type="email" name="email" placeholder="john@company.com" required>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem;">Password</label>
            <input type="password" name="password" placeholder="••••••••" required>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Sign Up</button>
        </form>
        <div class="text-center mt-lg">
          <a href="#" onclick="window.navigate('home')" style="font-size: 0.875rem; color: var(--text-muted);">← Back to Home</a>
        </div>
      </div>
    </div>
  `
}

// 3. Location Selection
const renderLocation = () => {
  return `
    <div class="container flex justify-center items-center" style="min-height: 100vh;">
      <div class="card animate-fade-in" style="width: 100%; max-width: 500px; text-center">
        <h2 class="text-center" style="margin-bottom: 1rem;">Where are you located?</h2>
        <p class="text-center" style="color: var(--text-muted); margin-bottom: 2rem;">
          We need your location to connect you with the best onsite services.
        </p>
        
        <form id="location-form">
           <select name="location" required>
            <option value="" disabled selected>Select your city...</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Continue</button>
        </form>
      </div>
    </div>
  `
}

// 4. Booking (Online/Offline)
const renderBooking = () => {
  return `
    <div class="container flex justify-center items-center" style="min-height: 100vh;">
      <div class="card animate-fade-in" style="width: 100%; max-width: 800px;">
        <h2 class="text-center" style="margin-bottom: 3rem;">CHOOSE SERVICE TYPE</h2>
        
        <div class="flex gap-md" style="justify-content: stretch;">
          <!-- Offline Option -->
          <div class="card service-card" onclick="window.handleServiceSelect('offline')" 
               style="flex: 1; cursor: pointer; border: 2px solid transparent; transition: all 0.2s; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🏢</div>
            <h3>Offline Service</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem; font-size: 0.9rem;">
              Meet in-person at a coworking space or office hub.
            </p>
          </div>

          <!-- Online Option -->
          <div class="card service-card" onclick="window.handleServiceSelect('online')" 
               style="flex: 1; cursor: pointer; border: 2px solid transparent; transition: all 0.2s; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🌐</div>
            <h3>Online Service</h3>
            <p style="color: var(--text-muted); margin-top: 0.5rem; font-size: 0.9rem;">
              Virtual team building & coordination session.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
}

// 5. Book Appointment Page (for Online Service)
const renderBookAppointment = () => {
  // Generate next 7 days for date picker
  const today = new Date()
  const dates = []
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    dates.push(d)
  }

  const formatDate = (d) => d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
  const formatDateValue = (d) => d.toISOString().split('T')[0]

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']

  return `
    <div class="container" style="min-height: 100vh; padding: 3rem 1rem;">
      <div class="animate-fade-in" style="max-width: 900px; margin: 0 auto;">
        
        <!-- Header -->
        <div class="text-center" style="margin-bottom: 3rem;">
          <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; background: linear-gradient(to right, #00bcd4, #ffffff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Book an Appointment</h1>
          <p style="color: var(--text-muted); font-size: 1.1rem;">Schedule a call with our team to discuss your event</p>
        </div>

        <form id="appointment-form">
          <div class="flex gap-md" style="flex-wrap: wrap;">
            
            <!-- Left Column: Company Details -->
            <div class="card" style="flex: 1; min-width: 300px;">
              <h3 style="margin-bottom: 1.5rem; color: var(--primary-color); display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.5rem;">🏢</span> Company Details
              </h3>
              
              <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Company Name *</label>
                <input type="text" name="companyName" placeholder="Acme Corporation" required>
              </div>
              
              <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Company Size *</label>
                <select name="companySize" required>
                  <option value="" disabled selected>Select team size...</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
              </div>
              
              <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Event Type *</label>
                <select name="eventType" required>
                  <option value="" disabled selected>What are you looking for?</option>
                  <option value="team-building">Team Building Activities</option>
                  <option value="virtual-offsite">Virtual Offsite</option>
                  <option value="icebreakers">Icebreakers & Games</option>
                  <option value="workshops">Workshops & Training</option>
                  <option value="custom">Custom Event</option>
                </select>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Additional Notes</label>
                <textarea name="notes" rows="3" placeholder="Tell us about your team or event requirements..." style="resize: vertical;"></textarea>
              </div>
            </div>

            <!-- Right Column: Date & Time -->
            <div class="card" style="flex: 1; min-width: 300px;">
              <h3 style="margin-bottom: 1.5rem; color: var(--primary-color); display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.5rem;">📅</span> Select Date & Time
              </h3>
              
              <!-- Date Picker -->
              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.75rem; font-size: 0.875rem; color: var(--text-muted);">Choose a Date *</label>
                <div class="date-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
                  ${dates.map((d, i) => `
                    <label class="date-option" style="display: block; cursor: pointer;">
                      <input type="radio" name="date" value="${formatDateValue(d)}" ${i === 0 ? 'required' : ''} style="display: none;">
                      <div class="date-card" style="padding: 0.75rem 0.5rem; border: 2px solid var(--border-color); border-radius: 0.5rem; text-align: center; transition: all 0.2s;">
                        <div style="font-size: 0.75rem; color: var(--text-muted);">${d.toLocaleDateString('en-IN', { weekday: 'short' })}</div>
                        <div style="font-size: 1.25rem; font-weight: 600;">${d.getDate()}</div>
                        <div style="font-size: 0.7rem; color: var(--text-muted);">${d.toLocaleDateString('en-IN', { month: 'short' })}</div>
                      </div>
                    </label>
                  `).join('')}
                </div>
              </div>
              
              <!-- Time Slots -->
              <div>
                <label style="display: block; margin-bottom: 0.75rem; font-size: 0.875rem; color: var(--text-muted);">Choose a Time Slot *</label>
                <div class="time-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
                  ${timeSlots.map((slot, i) => `
                    <label class="time-option" style="display: block; cursor: pointer;">
                      <input type="radio" name="timeSlot" value="${slot}" ${i === 0 ? 'required' : ''} style="display: none;">
                      <div class="time-card" style="padding: 0.75rem; border: 2px solid var(--border-color); border-radius: 0.5rem; text-align: center; transition: all 0.2s; font-size: 0.9rem;">
                        ${slot}
                      </div>
                    </label>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="text-center" style="margin-top: 2rem;">
            <button type="submit" class="btn btn-primary" style="padding: 1rem 3rem; font-size: 1.1rem;">
              Confirm Appointment 🚀
            </button>
            <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-muted);">You will receive a confirmation email with call details</p>
          </div>
        </form>
        
        <div class="text-center" style="margin-top: 2rem;">
          <a href="#" onclick="window.navigate('booking')" style="font-size: 0.875rem; color: var(--text-muted);">← Back to Service Selection</a>
        </div>
      </div>
    </div>
  `
}

// 6. Success
const renderSuccess = () => {
  const appointmentInfo = state.appointment ? `
    <div class="card" style="margin-top: 2rem; text-align: left; max-width: 400px;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);">📋 Appointment Details</h4>
      <p style="margin-bottom: 0.5rem;"><strong>Company:</strong> ${state.appointment.companyName}</p>
      <p style="margin-bottom: 0.5rem;"><strong>Date:</strong> ${state.appointment.date}</p>
      <p style="margin-bottom: 0.5rem;"><strong>Time:</strong> ${state.appointment.timeSlot}</p>
      <p><strong>Event:</strong> ${state.appointment.eventType}</p>
    </div>
  ` : ''

  return `
    <div class="container flex justify-center items-center flex-col" style="min-height: 100vh; text-align: center;">
      <div class="animate-fade-in">
        <h1 style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;">All Set! 🎉</h1>
        <p style="font-size: 1.25rem; color: var(--text-main);">
          You have booked an <strong>${state.serviceType}</strong> service in <strong>${state.location}</strong>.
        </p>
        <p style="margin-top: 1rem; color: var(--text-muted);">We will be in touch shortly.</p>
        ${appointmentInfo}
        <button class="btn btn-outline mt-lg" onclick="window.navigate('home')">Back to Home</button>
      </div>
    </div>
  `
}

// --- Main Render Function ---
const render = () => {
  let html = ''
  switch (state.currentView) {
    case 'home': html = renderHome(); break;
    case 'about': html = renderAbout(); break;
    case 'signup': html = renderSignup(); break;
    case 'location': html = renderLocation(); break;
    case 'booking': html = renderBooking(); break;
    case 'book-appointment': html = renderBookAppointment(); break;
    case 'success': html = renderSuccess(); break;
    default: html = renderHome();
  }
  app.innerHTML = html
  setupEventListeners()
}

// --- Event Listeners Integration ---
const setupEventListeners = () => {
  // Home: Partner Button
  const partnerBtn = document.getElementById('partner-btn')
  if (partnerBtn) {
    partnerBtn.addEventListener('click', () => {
      state.partnered = !state.partnered
      render() // Re-render to show updated status
    })
  }

  // Signup Form
  const signupForm = document.getElementById('signup-form')
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault()
      // Simulate signup
      const formData = new FormData(signupForm)
      state.user = Object.fromEntries(formData)
      navigate('location')
    })
  }

  // Location Form
  const locForm = document.getElementById('location-form')
  if (locForm) {
    locForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(locForm)
      state.location = formData.get('location')
      navigate('booking')
    })
  }

  // Appointment Form
  const appointmentForm = document.getElementById('appointment-form')
  if (appointmentForm) {
    // Add interactive styles for date/time cards
    const setupCardSelection = (containerClass) => {
      const cards = document.querySelectorAll(`.${containerClass} input[type="radio"]`)
      cards.forEach(radio => {
        radio.addEventListener('change', () => {
          // Remove selected style from all cards in this group
          document.querySelectorAll(`.${containerClass} .date-card, .${containerClass} .time-card`).forEach(card => {
            card.style.borderColor = 'var(--border-color)'
            card.style.background = 'transparent'
          })
          // Add selected style
          const selectedCard = radio.nextElementSibling
          if (selectedCard) {
            selectedCard.style.borderColor = 'var(--primary-color)'
            selectedCard.style.background = 'rgba(0, 188, 212, 0.1)'
          }
        })
      })
    }
    setupCardSelection('date-grid')
    setupCardSelection('time-grid')

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(appointmentForm)
      state.appointment = {
        companyName: formData.get('companyName'),
        companySize: formData.get('companySize'),
        eventType: formData.get('eventType'),
        date: formData.get('date'),
        timeSlot: formData.get('timeSlot'),
        notes: formData.get('notes')
      }
      navigate('success')
    })
  }
}

// --- Global Handlers (for onclick in HTML strings) ---
window.navigate = navigate
window.handleServiceSelect = (type) => {
  state.serviceType = type
  if (type === 'online') {
    navigate('book-appointment')
  } else {
    navigate('success')
  }
}

// Initial Render
render()
