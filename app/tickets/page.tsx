"use client"

import { useState, useEffect } from "react"

interface FormData {
  passType: string
  events: string[]
  guestName: string
  hasPlusOne: string
  plusOneName: string
  hasKids: string
  numKids: string
  kidNames: string[]
  wantsBabysitting: string
  babysittingEvents: string[]
  dietaryRestrictions: Record<string, string[]>
  musicPreferences: string
  mailingAddress: {
    name: string
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  phone: string
  email: string
}

export default function RSVPPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    passType: '',
    events: [],
    guestName: '',
    hasPlusOne: '',
    plusOneName: '',
    hasKids: '',
    numKids: '',
    kidNames: [],
    wantsBabysitting: '',
    babysittingEvents: [],
    dietaryRestrictions: {},
    musicPreferences: '',
    mailingAddress: {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States'
    },
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const events = [
    { id: 'pregame', label: 'Friday, January 16: The Pregame' },
    { id: 'mainstage', label: 'Saturday, January 17: The Mainstage' },
    { id: 'aftershow', label: 'Sunday, January 18: The Aftershow' }
  ]

  const dietaryOptions = [
    'None', 'Vegan', 'Vegetarian', 'Gluten-Free', 'Kosher', 'Nut Allergies', 'Dairy-Free', 'Other'
  ]

  const doodles = [
    "/doodles/tree.png",
    "/doodles/bikini.png", 
    "/doodles/heart.png",
    "/doodles/whiteclaw.png",
    "/doodles/ball.png",
    "/doodles/sunglasses.png",
    "/doodles/star-blue.png",
    "/doodles/music.png"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (name === 'events') {
        const updatedEvents = checked 
          ? [...formData.events, value]
          : formData.events.filter(event => event !== value)
        setFormData(prev => ({ ...prev, events: updatedEvents }))
      } else if (name === 'babysittingEvents') {
        const updatedEvents = checked
          ? [...formData.babysittingEvents, value]
          : formData.babysittingEvents.filter(event => event !== value)
        setFormData(prev => ({ ...prev, babysittingEvents: updatedEvents }))
      }
    } else if (name.startsWith('kidName_')) {
      const index = parseInt(name.split('_')[1])
      const updatedKidNames = [...formData.kidNames]
      updatedKidNames[index] = value
      setFormData(prev => ({ ...prev, kidNames: updatedKidNames }))
    } else if (name.startsWith('address_')) {
      const field = name.split('_')[1]
      setFormData(prev => ({
        ...prev,
        mailingAddress: { ...prev.mailingAddress, [field]: value }
      }))
    } else if (name === 'numKids') {
      const num = parseInt(value) || 0
      const kidNames = Array(num).fill('')
      setFormData(prev => ({ ...prev, numKids: value, kidNames }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleDietaryChange = (guestKey: string, restriction: string, isOther = false, otherValue = '') => {
    setFormData(prev => {
      const currentRestrictions = prev.dietaryRestrictions[guestKey] || []
      let updatedRestrictions
      
      if (isOther && otherValue) {
        updatedRestrictions = [...currentRestrictions.filter(r => !r.startsWith('Other:')), `Other: ${otherValue}`]
      } else if (restriction === 'None') {
        updatedRestrictions = ['None']
      } else {
        if (currentRestrictions.includes('None')) {
          updatedRestrictions = [restriction]
        } else if (currentRestrictions.includes(restriction)) {
          updatedRestrictions = currentRestrictions.filter(r => r !== restriction)
        } else {
          updatedRestrictions = [...currentRestrictions, restriction]
        }
      }
      
      return {
        ...prev,
        dietaryRestrictions: {
          ...prev.dietaryRestrictions,
          [guestKey]: updatedRestrictions
        }
      }
    })
  }

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.startsWith('44')) {
      const match = cleaned.match(/^44(\d{4})(\d{3})(\d{3})$/)
      if (match) return `+44 ${match[1]} ${match[2]} ${match[3]}`
    } else {
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return value
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData(prev => ({ ...prev, phone: formatted }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.passType) newErrors.passType = 'Please select a pass type'
    if (formData.passType !== '3-Day' && formData.events.length === 0) {
      newErrors.events = 'Please select events'
    }
    if (formData.passType === '1-Day' && formData.events.length !== 1) {
      newErrors.events = 'Please select exactly 1 event for 1-Day pass'
    }
    if (formData.passType === '2-Day' && formData.events.length !== 2) {
      newErrors.events = 'Please select exactly 2 events for 2-Day pass'
    }
    if (!formData.guestName.trim()) newErrors.guestName = 'Name is required'
    if (!formData.hasPlusOne) newErrors.hasPlusOne = 'Please indicate if you have a +1'
    if (formData.hasPlusOne === 'yes' && !formData.plusOneName.trim()) {
      newErrors.plusOneName = '+1 name is required'
    }
    if (!formData.hasKids) newErrors.hasKids = 'Please indicate if you have kids'
    if (formData.hasKids === 'yes' && !formData.numKids) {
      newErrors.numKids = 'Number of kids is required'
    }
    if (formData.hasKids === 'yes' && formData.kidNames.some(name => !name.trim())) {
      newErrors.kidNames = 'All kid names are required'
    }

    // Validate dietary restrictions - each guest must have at least one selection
    const allGuests = getAllGuests()
    if (allGuests.length > 0) {
      const guestsWithoutDietaryInfo = allGuests.filter(guest => 
        !formData.dietaryRestrictions[guest.key] || formData.dietaryRestrictions[guest.key].length === 0
      )
      if (guestsWithoutDietaryInfo.length > 0) {
        newErrors.dietaryRestrictions = 'Please select dietary restrictions for all guests (select "None" if no restrictions)'
      }
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    
    if (!formData.mailingAddress.name.trim()) newErrors.addressName = 'Name is required'
    if (!formData.mailingAddress.street.trim()) newErrors.addressStreet = 'Street address is required'
    if (!formData.mailingAddress.city.trim()) newErrors.addressCity = 'City is required'
    if (!formData.mailingAddress.state.trim()) newErrors.addressState = 'State/Province is required'
    if (!formData.mailingAddress.zip.trim()) newErrors.addressZip = 'ZIP/Postal code is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const submitData = {
        ...formData,
        events: formData.passType === '3-Day' ? ['pregame', 'mainstage', 'aftershow'] : formData.events,
        timestamp: new Date().toISOString()
      }

      console.log('Form submitted:', submitData)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real implementation, redirect to success page
      // For now, show success message and redirect after delay
      window.location.href = '/tickets/success' // This would be your success page URL
      
    } catch (error) {
      console.error('Submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getAllGuests = () => {
    const guests: Array<{key: string, name: string}> = []
    if (formData.guestName.trim()) {
      guests.push({ key: 'main', name: formData.guestName })
    }
    if (formData.hasPlusOne === 'yes' && formData.plusOneName.trim()) {
      guests.push({ key: 'plus_one', name: formData.plusOneName })
    }
    formData.kidNames.forEach((name, index) => {
      if (name.trim()) {
        guests.push({ key: `kid_${index}`, name: name })
      }
    })
    return guests
  }

  const attendingEvents = formData.passType === '3-Day' 
    ? events 
    : events.filter(event => formData.events.includes(event.id))

  return (
    <main className="relative min-h-screen">
      <div
        className="fixed inset-0 animate-gradient-shift"
        style={{
          background: "linear-gradient(135deg, #ff0099, #ff6600, #ffcc00, #22cc88, #00ccff, #cc88ff, #ff0099)",
          backgroundSize: "600% 600%",
        }}
      />

      <div className="relative z-10">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="flex justify-center">
            <a href="/" className="w-full max-w-sm md:max-w-md">
              <img
                src="/bremmiepalooza-logo-for-cta.png"
                alt="Bremmiepalooza 2026"
                className="w-full h-auto mx-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Navigation Banner */}
        <section className="w-full z-20">
          <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300">
            <div className="h-28 sm:h-32 md:h-40 flex items-center">
              <div
                className="
                  grid items-center mx-auto
                  w-full md:w-auto
                  grid-cols-[auto,1fr,auto] md:grid-cols-[auto,auto,auto]
                  [--icon:26px] md:[--icon:56px] lg:[--icon:64px]
                  [--gap:6px] md:[--gap:18px] lg:[--gap:20px]
                  [--pad:10px] md:[--pad:24px]
                  [--title-max:calc(100vw-2*(4*var(--icon)+3*var(--gap))-2*var(--pad))]
                  md:[--title-max:unset]
                "
              >
                {/* LEFT ICONS */}
                <div className="flex items-center" style={{ gap: 'var(--gap)', paddingLeft: 'var(--pad)' }}>
                  {doodles.slice(0, 4).map((d, i) => (
                    <img
                      key={`L${i}`}
                      src={d}
                      alt=""
                      aria-hidden="true"
                      className="doodle-animation block object-contain"
                      style={{ width: 'var(--icon)', height: 'var(--icon)', animationDelay: `${i * 0.08}s` }}
                    />
                  ))}
                </div>

                {/* TITLE */}
                <div
                  className="min-w-0 px-2 md:px-4 text-center"
                  style={{ maxWidth: 'var(--title-max)' }}
                >
                  <h1
                    className="
                      font-black uppercase leading-[0.95] tracking-tight sm:tracking-wider text-center
                      md:whitespace-nowrap md:text-[54px] lg:text-[64px]
                    "
                    style={{
                      fontFamily: "'ZollaPro','Impact','Arial Black',sans-serif",
                      color: '#d81b8c',
                      textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                      fontSize: 'clamp(16px, 6.8vw, 38px)',
                    }}
                  >
                    <span className="hidden md:inline">SECURE YOUR TICKETS</span>
                    <span className="md:hidden">SECURE<br/>YOUR<br/>TICKETS</span>
                  </h1>
                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center justify-end" style={{ gap: 'var(--gap)', paddingRight: 'var(--pad)' }}>
                  {doodles.slice(4, 8).map((d, i) => (
                    <img
                      key={`R${i}`}
                      src={d}
                      alt=""
                      aria-hidden="true"
                      className="doodle-animation block object-contain"
                      style={{ width: 'var(--icon)', height: 'var(--icon)', animationDelay: `${(i + 4) * 0.08}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content with spacing after banner */}
        <div className="px-4 pb-12 mt-6 sm:mt-8 md:mt-10 lg:mt-12" style={{ paddingBottom: '30vh' }}>
            <div className="max-w-4xl mx-auto">
              {/* Festival Events */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20 mb-8">
                <h2 
                  className="text-2xl md:text-3xl font-black text-center mb-6 uppercase tracking-wider" 
                  style={{
                    fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    color: '#fff'
                  }}
                >
                  Festival Events
                </h2>
                <div className="space-y-4" style={{fontFamily: 'Arial, sans-serif', fontSize: '18px'}}>
                  <div style={{color: '#000'}}>
                    <strong>Friday, January 16th: The Pregame</strong> - <em>Welcome drinks & games on the beach. Think beer pong, ladder ball, baggo / cornhole / bags with hamburgers, hot dogs, and french fries!</em>
                  </div>
                  <div style={{color: '#000'}}>
                    <strong>Saturday, January 17th: The Main Stage</strong> - <em>Dance & celebrate with us all night!</em>
                  </div>
                  <div style={{color: '#000'}}>
                    <strong>Sunday, January 18th: The Aftershow</strong> - <em>Final celebration...on a boat!</em>
                  </div>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border-2 border-red-400/50 rounded-xl text-center">
                  <p className="text-white font-semibold" style={{fontFamily: 'Arial, sans-serif'}}>
                    ❌ Sorry, there was an error submitting your RSVP. Please try again or email us at info@bremmiepalooza.com
                  </p>
                </div>
              )}

              {/* RSVP Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                {/* Pass Type */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    Would you like 1-Day, 2-Day, or 3-Day pass(es)?
                  </label>
                  <div className="space-y-3">
                    {['1-Day', '2-Day', '3-Day'].map(option => (
                      <label key={option} className="flex items-center text-white text-lg cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                        <input
                          type="radio"
                          name="passType"
                          value={option}
                          checked={formData.passType === option}
                          onChange={handleInputChange}
                          className="mr-3 w-5 h-5"
                          style={{accentColor: '#d81b8c'}}
                        />
                        {option} Pass
                      </label>
                    ))}
                  </div>
                  {errors.passType && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.passType}</p>}
                </div>

                {/* Event Selection */}
                {formData.passType && formData.passType !== '3-Day' && (
                  <div className="mb-8">
                    <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                      Which events do you plan to attend?
                      <span className="text-sm font-normal"> (Select {formData.passType === '1-Day' ? '1' : '2'} event{formData.passType === '2-Day' ? 's' : ''})</span>
                    </label>
                    <div className="space-y-3">
                      {events.map(event => (
                        <label key={event.id} className="flex items-center text-white text-lg cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                          <input
                            type="checkbox"
                            name="events"
                            value={event.id}
                            checked={formData.events.includes(event.id)}
                            onChange={handleInputChange}
                            className="mr-3 w-5 h-5"
                            style={{accentColor: '#d81b8c'}}
                          />
                          {event.label}
                        </label>
                      ))}
                    </div>
                    {errors.events && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.events}</p>}
                  </div>
                )}

                {/* Name */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                    style={{fontFamily: 'Arial, sans-serif'}}
                    placeholder="Your full name"
                  />
                  {errors.guestName && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.guestName}</p>}
                </div>

                {/* Plus One */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    Are you bringing a +1?
                  </label>
                  <div className="space-y-3">
                    {['yes', 'no'].map(option => (
                      <label key={option} className="flex items-center text-white text-lg cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                        <input
                          type="radio"
                          name="hasPlusOne"
                          value={option}
                          checked={formData.hasPlusOne === option}
                          onChange={handleInputChange}
                          className="mr-3 w-5 h-5"
                          style={{accentColor: '#d81b8c'}}
                        />
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </label>
                    ))}
                  </div>
                  {errors.hasPlusOne && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.hasPlusOne}</p>}
                </div>

                {/* Plus One Name */}
                {formData.hasPlusOne === 'yes' && (
                  <div className="mb-8">
                    <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                      Name of +1
                    </label>
                    <input
                      type="text"
                      name="plusOneName"
                      value={formData.plusOneName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                      style={{fontFamily: 'Arial, sans-serif'}}
                      placeholder="Full name of your +1"
                    />
                    {errors.plusOneName && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.plusOneName}</p>}
                  </div>
                )}

                {/* Kids */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    Are you bringing kids?
                  </label>
                  <div className="space-y-3">
                    {['yes', 'no'].map(option => (
                      <label key={option} className="flex items-center text-white text-lg cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                        <input
                          type="radio"
                          name="hasKids"
                          value={option}
                          checked={formData.hasKids === option}
                          onChange={handleInputChange}
                          className="mr-3 w-5 h-5"
                          style={{accentColor: '#d81b8c'}}
                        />
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </label>
                    ))}
                  </div>
                  {errors.hasKids && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.hasKids}</p>}
                </div>

                {/* Kids Details */}
                {formData.hasKids === 'yes' && (
                  <>
                    <div className="mb-8">
                      <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                        How many kids?
                      </label>
                      <select
                        name="numKids"
                        value={formData.numKids}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                        style={{fontFamily: 'Arial, sans-serif'}}
                      >
                        <option value="">Select number of kids</option>
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num} className="bg-gray-800">{num}</option>
                        ))}
                      </select>
                      {errors.numKids && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.numKids}</p>}
                    </div>

                    {formData.numKids && (
                      <div className="mb-8">
                        <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                          Name of Kid(s)
                        </label>
                        <div className="space-y-3">
                          {Array.from({length: parseInt(formData.numKids)}, (_, index) => (
                            <input
                              key={index}
                              type="text"
                              name={`kidName_${index}`}
                              value={formData.kidNames[index] || ''}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                              style={{fontFamily: 'Arial, sans-serif'}}
                              placeholder={`Name of Kid #${index + 1}`}
                            />
                          ))}
                        </div>
                        {errors.kidNames && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.kidNames}</p>}
                      </div>
                    )}

                    <div className="mb-8">
                      <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                        Are you interested in babysitting services for your kids?
                      </label>
                      <div className="space-y-3">
                        {['yes', 'no'].map(option => (
                          <label key={option} className="flex items-center text-white text-lg cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                            <input
                              type="radio"
                              name="wantsBabysitting"
                              value={option}
                              checked={formData.wantsBabysitting === option}
                              onChange={handleInputChange}
                              className="mr-3 w-5 h-5"
                              style={{accentColor: '#d81b8c'}}
                            />
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </label>
                        ))}
                      </div>
                    </div>

                    {formData.wantsBabysitting === 'yes' && attendingEvents.length > 0 && (
                      <div className="mb-8">
                        <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                          For which events?
                        </label>
                        <div className="space-y-3">
                          {attendingEvents.map(event => (
                            <label key={event.id} className="flex items-center text-white text-lg cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                              <input
                                type="checkbox"
                                name="babysittingEvents"
                                value={event.id}
                                checked={formData.babysittingEvents.includes(event.id)}
                                onChange={handleInputChange}
                                className="mr-3 w-5 h-5"
                                style={{accentColor: '#d81b8c'}}
                              />
                              {event.label}
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Dietary Restrictions */}
                {getAllGuests().length > 0 && (
                  <div className="mb-8">
                    <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                      Do you or your guests have any dietary restrictions?
                    </label>
                    <div className="space-y-6">
                      {getAllGuests().map(guest => (
                        <div key={guest.key} className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-white font-semibold mb-3 text-lg" style={{fontFamily: 'Arial, sans-serif'}}>
                            {guest.name}
                          </h4>
                          <div className="space-y-2">
                            {dietaryOptions.map(option => (
                              <label key={option} className="flex items-center text-white cursor-pointer" style={{fontFamily: 'Arial, sans-serif'}}>
                                <input
                                  type="checkbox"
                                  checked={(formData.dietaryRestrictions[guest.key] || []).includes(option)}
                                  onChange={() => handleDietaryChange(guest.key, option)}
                                  className="mr-2 w-4 h-4"
                                  style={{accentColor: '#d81b8c'}}
                                />
                                {option}
                              </label>
                            ))}
                            {(formData.dietaryRestrictions[guest.key] || []).some(r => r.startsWith('Other')) && (
                              <input
                                type="text"
                                placeholder="Please specify..."
                                className="w-full px-3 py-2 rounded bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm"
                                style={{fontFamily: 'Arial, sans-serif'}}
                                onChange={(e) => handleDietaryChange(guest.key, 'Other', true, e.target.value)}
                              />
                            )}
                          </div>
                          {(formData.dietaryRestrictions[guest.key] || []).length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {(formData.dietaryRestrictions[guest.key] || []).map(restriction => (
                                <span key={restriction} className="bg-pink-500/30 text-white px-2 py-1 rounded text-sm flex items-center">
                                  {restriction}
                                  <button
                                    type="button"
                                    onClick={() => handleDietaryChange(guest.key, restriction)}
                                    className="ml-2 text-white hover:text-red-300"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    {errors.dietaryRestrictions && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.dietaryRestrictions}</p>}
                  </div>
                )}

                {/* Music Preferences */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    What songs are you most excited to hear at Bremmiepalooza?
                  </label>
                  <textarea
                    name="musicPreferences"
                    value={formData.musicPreferences}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm resize-vertical text-lg"
                    style={{fontFamily: 'Arial, sans-serif'}}
                    placeholder="Tell us your favorite songs, artists, or genres..."
                  />
                </div>

                {/* Mailing Address */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    What is your complete mailing address?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="address_name"
                      value={formData.mailingAddress.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                      style={{fontFamily: 'Arial, sans-serif'}}
                      placeholder="Full Name"
                    />
                    {errors.addressName && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold md:col-span-2">{errors.addressName}</p>}
                    <input
                      type="text"
                      name="address_street"
                      value={formData.mailingAddress.street}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg md:col-span-2"
                      style={{fontFamily: 'Arial, sans-serif'}}
                      placeholder="Street Address"
                    />
                    {errors.addressStreet && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold md:col-span-2">{errors.addressStreet}</p>}
                    <input
                      type="text"
                      name="address_city"
                      value={formData.mailingAddress.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                      style={{fontFamily: 'Arial, sans-serif'}}
                      placeholder="City"
                    />
                    {errors.addressCity && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.addressCity}</p>}
                    <input
                      type="text"
                      name="address_state"
                      value={formData.mailingAddress.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                      style={{fontFamily: 'Arial, sans-serif'}}
                      placeholder="State/Province"
                    />
                    {errors.addressState && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.addressState}</p>}
                    <input
                      type="text"
                      name="address_zip"
                      value={formData.mailingAddress.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                      style={{fontFamily: 'Arial, sans-serif'}}
                      placeholder="ZIP/Postal Code"
                    />
                    {errors.addressZip && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.addressZip}</p>}
                    <select
                      name="address_country"
                      value={formData.mailingAddress.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                      style={{fontFamily: 'Arial, sans-serif'}}
                    >
                      <option value="United States" className="bg-gray-800">United States</option>
                      <option value="United Kingdom" className="bg-gray-800">United Kingdom</option>
                      <option value="Canada" className="bg-gray-800">Canada</option>
                      <option value="Australia" className="bg-gray-800">Australia</option>
                      <option value="Other" className="bg-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                    style={{fontFamily: 'Arial, sans-serif'}}
                    placeholder="(XXX) XXX-XXXX or +44 XXXX XXX XXX"
                  />
                  {errors.phone && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label className="block text-white font-bold mb-4 text-xl" style={{fontFamily: 'Arial, sans-serif'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border-2 border-white/30 text-white placeholder-white/60 focus:border-white/60 focus:outline-none backdrop-blur-sm text-lg"
                    style={{fontFamily: 'Arial, sans-serif'}}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-600 bg-white/90 px-3 py-2 rounded-lg mt-2 font-semibold">{errors.email}</p>}
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`bg-transparent hover:bg-white/10 text-white font-black text-4xl md:text-5xl px-20 py-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{
                      fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      minWidth: '280px'
                    }}
                  >
                    {isSubmitting ? 'SECURING...' : 'SECURE MY TICKETS'}
                  </button>
                  
                  {/* Form validation error message - moved below button */}
                  {Object.keys(errors).length > 0 && (
                    <div className="mt-6">
                      <p className="text-red-600 bg-white/90 px-4 py-3 rounded-lg font-semibold text-lg" style={{fontFamily: 'Arial, sans-serif'}}>
                        Please review and correct errors in the form to submit
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Wave Footer - Fixed to bottom */}
      <div className="fixed left-0 w-full bottom-0 z-10" style={{ height: "24vh" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0 100L48 87.5C96 75 192 50 288 58.3C384 66.7 480 108.3 576 125C672 141.7 768 133.3 864 116.7C960 100 1056 75 1152 66.7C1248 58.3 1344 66.7 1392 70.8L1440 75V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V100Z"
            fill="url(#paint0_linear_desktop)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_desktop"
              x1="720"
              y1="0"
              x2="720"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EC4899" />
              <stop offset="0.333333" stopColor="#FACC15" />
              <stop offset="0.666667" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bremmie doodle - Fixed to bottom */}
      <div
        className="fixed pointer-events-none z-20"
        style={{
          right: "6%",
          bottom: "60px",
          width: "20vmin",
          height: "20vmin",
        }}
      >
        <div className="relative w-full h-full">
          <img 
            src="/doodles/bremmie.png" 
            alt="Bremmie on the beach" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'ZollaPro';
          src: url('/fonts/Zolla%20Pro.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'ZollaProOutlined';
          src: url('/fonts/Zolla-Pro-Outlined.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-shift {
          background-size: 600% 600%;
          animation: gradient-shift 10s ease infinite;
        }

        @keyframes doodlePop {
          0% {
            opacity: 0;
            transform: scale(0.6) rotate(0deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.15) rotate(var(--rotation, 0deg));
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(var(--rotation, 0deg));
          }
        }

        .doodle-animation {
          opacity: 0;
          animation: doodlePop 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
