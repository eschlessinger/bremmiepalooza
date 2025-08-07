case 'airport':
  return (
    <div className="space-y-10"> {/* FIXED: Increased spacing between containers */}
      {/* Spacer before the intro */}
      <div className="mt-8" /> {/* FIXED: Increased spacing */}

      {/* FIXED: Improved introductory text spacing */}
      <div
        className="text-center"
        style={{
          fontFamily: 'Arial, sans-serif',
          fontSize: '20px',
          lineHeight: '1.8', // FIXED: More relaxed line height
        }}
      >
        <div className="mb-6"> {/* FIXED: Added wrapper for better spacing */}
          <p className="mb-6 font-bold text-white"> {/* FIXED: Increased margin */}
            Once you arrive at Cancun International Airport, the Presidente Intercontinental Hotel is a ~30 minute car ride away.
          </p>
        </div>
        <div className="mb-8"> {/* FIXED: Increased margin */}
          <p className="mb-0 font-bold text-white">
            After extensive Reddit / Google / ChatGPT research, we would recommend the following transportation methods:
          </p>
        </div>
      </div>

      {/* Pre-Arranged Transfer Section */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
        <h3 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-wider" 
            style={{
              fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
              color: '#d81b8c'
            }}>
          Pre-Arranged Transfer
        </h3>
        
        <div className="space-y-6 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
          <p className="text-center italic">
            Great option if you are only planning to drive to / from the hotel!
          </p>
          
          <div>
            <h4 className="font-bold text-lg mb-2" style={{color: 'black'}}>Keep In Mind:</h4>
            <ul className="space-y-2 ml-6 custom-bullets">
              <li>For additional / unforeseen transportation needs, can use Ubers (plentiful around the hotel & cheap) and / or Taxis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-4" style={{color: '#d81b8c'}}>Our Pick: USA Transfers</h4>
            <ul className="space-y-2 ml-6 custom-bullets">
              <li>Appears to be the most beloved and reliable Transfer service</li>
              <li>Round trip for 6 people to and from the hotel is $95 for a Private Van or $170 for a Private SUV (which, relative to the Van, boasts leather seats, a stepping stool, 5-volt power outlets, and fresh towels on arrival)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2" style={{color: 'black'}}>Customer Testimonials</h4>
            <div className="space-y-4 ml-6">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400/50">
                <p className="italic mb-2" style={{color: 'black'}}>"Book USA Transfers every time. We go to Mexico 2 to 3 times a year, they are always there waiting for you. It's a private transfer so no waiting for a bus (Sometimes there's a short wait for your shuttle). It's around $100 round trip. They have always done a great job for us. You can book it online on their website. Once you get your checked bags, you put your head down and keep walking past all the rental car places, don't talk to anyone, until you are outside. USA is usually towards the back of the crowd of shuttle people. Once you are outside, you can ask anyone out there "Where is USA Transfers" and they will point you right to them."</p>
                <p className="text-sm" style={{color: 'black'}}>- RobbieG52726, February 2025 (Reddit)</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400/50">
                <p className="italic mb-2" style={{color: 'black'}}>"USA Transfers booked roundtrip for 5 of us, arriving on foreign and domestic flights, plus Maya Train, and leaving from 4 terminals. They knew about every terminal, each delay, etc. They can turn on a dime, and arrive on time."</p>
                <p className="text-sm" style={{color: 'black'}}>- truckforbiketrader, February 2025 (Reddit)</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400/50">
                <p className="italic mb-2" style={{color: 'black'}}>"Check out USA transfers. Legit company, owned by a Canadian guy. Easy to get a quote on their website or app. Super reliable"</p>
                <p className="text-sm mb-2" style={{color: 'black'}}>- KrazyKen62, 2023 (Reddit)</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://usa-transfers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-black text-3xl px-20 py-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white"
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                minWidth: '280px'
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      {/* Rental Car Section */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
        <h3 className="text-2xl md:text-3xl font-black text-center mb-8 uppercase tracking-wider" 
            style={{
              fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
              color: '#d81b8c'
            }}>
          Rental Car
        </h3>
        
        <div className="space-y-6 text-white/95" style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.6', fontSize: '18px'}}>
          <p className="text-center italic">
            Great option if you are interested in additional flexibility to drive not only to / from the hotel, but also around Cancun!
          </p>
          
        <div>
<h4 className="font-bold text-lg mb-2" style={{ color: 'black' }}>Keep In Mind:</h4>
<ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
  <li>Make sure to book directly and avoid third party sites</li>
  <li>Bring printed or digital copies of your quote and communication</li>
  <li>Purchasing TPL Insurance is required in Mexico (even if you are booking with a Credit Card that offers insurance coverage – which may or may not be valid for Mexico); some rental car companies will take advantage of this and try to massively upcharge you for it upon pickup (see below for our recommendation on which rental car company to use to avoid this)</li>
  <li>Drive cautiously — follow speed limits, keep headlights on (even during the day), and avoid night driving in rural areas</li>
  <li>
    There are a number of scams of which to be aware if you decide you want to rent a car:
    <ol style={{ listStyleType: 'decimal', marginLeft: '1.5rem' }}>
      <li>
        Rental Car Pickup: Check and photograph the car thoroughly during pickup, including scratches, tires, windshield, fuel level, and mileage
      </li>
      <li>
        Police Stops: It's not uncommon for tourists to be pulled over and asked to pay a fine on the spot — sometimes unjustly. These are often "mordidas" (bribes) rather than legitimate tickets. If stopped:
        <ul style={{ listStyleType: 'circle', marginLeft: '1.5rem' }}>
          <li>Ask for a written ticket</li>
          <li>Do not pay in cash on the roadside</li>
          <li>Stay calm, polite, and firm</li>
        </ul>
      </li>
      <li>
        Speed Traps & Sudden Signage Changes: Some highways have sudden speed limit drops (especially near towns or police checkpoints) where speed traps are common
      </li>
      <li>
        Speed Bumps: Many aren't well-marked and can damage your car if hit at full speed
      </li>
      <li>
        Gas Stations:
        <ul style={{ listStyleType: 'circle', marginLeft: '1.5rem' }}>
          <li>Always check the meter is zeroed before fueling</li>
          <li>Always pay in cash (using 200 peso notes or smaller bills, not 500+ peso notes), say the amount you are paying as you are handing it to the attendant, and count your change</li>
          <li>Avoid airport-adjacent gas stations</li>
        </ul>
      </li>
    </ol>
  </li>
</ul>
</div>

          <div>
            <h4 className="font-bold text-lg text-white mb-4" style={{color: '#d81b8c'}}>Our Pick: Avant Rental Cars</h4>
            <ul className="space-y-2 ml-6 custom-bullets">
              <li>Highly rated across platforms, with reviews indicating they book clean, modern vehicles with no hidden fees and provide responsive support and pickup instructions via WhatsApp or email</li>
              <li>Rates starting at ~$103 for 3 days, inclusive of mandatory insurance</li>
              <li>Review <a href="https://www.avantrentacar.com/policies" target="_blank" rel="noopener noreferrer" className="underline" style={{color: '#d81b8c'}}>here</a> for a detailed breakdown of Avant's policies, including Insurance coverage</li> {/* FIXED: Pink link color */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2" style={{color: 'black'}}>Customer Testimonials</h4>
            <div className="space-y-4 ml-6">
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400/50">
                <p className="italic mb-2" style={{color: 'black'}}>"After doing quite a bit of research and comparing prices, I rented from Avant because of the reviews, the competitive price, and the fact that insurance was included. We had a wonderful experience renting from them. The staff was professional and kind. They charged exactly what they said they would for the car rental, did not try to scam us with extra charges or extra scratches when we returned the car. It was a well-maintained vehicle in good condition. Would definitely rent again!"</p>
                <p className="text-sm" style={{color: 'black'}}>– Christen Diehl, July 2025 (Google)</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400/50">
                <p className="italic mb-2" style={{color: 'black'}}>"An amazing car rental company. Much better than the big brand places at the airport. No hidden costs or surprises, they were so professional and friendly with excellent communication. I totally recommend using Avant…The office is a short ride by shuttle from the airport and we didn't have to wait"</p>
                <p className="text-sm" style={{color: 'black'}}>– Mathew Bailey, July 2025 (Google)</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-400/50">
                <p className="italic mb-2" style={{color: 'black'}}>"Look into Avant Rental Car. I had an awesome experience and the price they quoted was the price I paid. No hidden fees. It was like $200 for 4 days. They even dropped the car off for me in PDC and I returned it to them at CUN airport. They have a location right outside the airport and shuttle you over to the terminal"</p>
                <p className="text-sm" style={{color: 'black'}}>– westwoodft, January 2025 (Reddit)</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.avantrentacar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-black text-3xl px-20 py-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-2xl border-4 border-white"
              style={{
                fontFamily: "'ZollaPro', 'Impact', 'Arial Black', sans-serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                minWidth: '280px'
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  )
