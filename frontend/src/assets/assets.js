import login_icon from '../assets/login.png';
import create_icon from '../assets/magic-wand.png';
import well_icon from '../assets/good-heart.png';
export const faq=[
    {
        question:"What is this wellness platform about?",
        answer:"Our platform allows users to register, explore, and participate in various wellness sessions like yoga, meditation, fitness, and mental health workshops. Users can also create and publish their own sessions." 
    },
     {
        question:"How do I register and log in securely?",
        answer:"You can sign up using your email and a strong password. We use secure authentication methods (such as encrypted passwords and JWT tokens) to protect your account."
     },
     {
        question:" Are my personal details safe?",
        answer:"Yes. All user data is encrypted and stored securely. We follow strict data privacy policies and never share your information without consent."
     },
     {
        question:" Can I host my own wellness sessions?",
        answer:"Absolutely! Registered users can draft, schedule, and publish custom sessions. We also offer an auto-save feature so your progress is never lost."
     },
     {
        question:"What types of sessions are available?",
        answer:"We offer yoga, meditation, physical fitness, diet & nutrition, therapy sessions, and more. You can browse by category or search for specific interests."
     },
     {
        question:"How does the auto-save draft feature work?",
        answer:"When you’re creating a session, the system automatically saves your changes in the background so you don’t lose any work in case of interruptions."
     },
     {
        question:"Are the live sessions secure?",
        answer:"Yes, all live sessions are hosted through encrypted video platforms, ensuring your interactions and data remain private."
     },
     {
        question:"Can I join sessions on mobile devices?",
        answer:"Yes. Our platform is mobile-friendly and works on smartphones, tablets, and desktops without additional software."
     },
     {
        question:"Is payment information secure? (if monetized)",
        answer:"Yes. We use trusted third-party payment gateways that comply with PCI-DSS security standards. We never store your card details on our servers."
     },
     {
        question:". Can I access past session recordings?",
        answer:"Some hosts enable recordings of their sessions. If available, you can find them in your 'My Sessions' dashboard."
     }
]
export const cardData=[
    {
       title:"Secure Login for peace of mind",
       description:"Your data is safewith advanced security measures",
       icon:login_icon
    },
    {
       title:"Diverse Wellness Sessions at your fingertips",
       description:"Choose from variety of sessions tailored to your wellness journey",
        icon:well_icon
    },
    {
     title:"Create and share you custom Sessions",
       description:"Easily draft and publish sessions that reflect your style",
        icon:create_icon
    }
]
export const rawData=
[
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Morning Yoga Flow",
    "description": "Start your day with a revitalizing yoga session to enhance flexibility and mindfulness.",
    "tags": ["yoga", "morning", "wellness"],
    "profile": "	https://images.unsplash.com/photo-1594737625785-cba1e9b6fd64?auto=format&fit=crop&w=800&q=80",
    "duration": "60 minutes",
    "location": "Studio A, Mumbai",
    "time": "07:00 AM - 08:00 AM",
    "date": "2025-08-05",
    "seats": 30,
    "booked": 10,
    "price": 299,
    "requirements": ["Yoga mat", "Water bottle"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Evening Meditation",
    "description": "Calm your mind and relax your body with guided meditation.",
    "tags": ["meditation", "evening", "peace"],
    "profile": "https://images.unsplash.com/photo-1587019152595-87d93c70b597?auto=format&fit=crop&w=800&q=80",
    "duration": "45 minutes",
    "location": "Online (Zoom)",
    "time": "06:30 PM - 07:15 PM",
    "date": "2025-08-06",
    "seats": 50,
    "booked": 12,
    "price": 0,
    "requirements": ["Quiet room", "Earphones"],
    "status": "draft"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Guided Breathwork",
    "description": "Learn and practice powerful breath control techniques for health and mental clarity.",
    "tags": ["breathing", "stress relief"],
    "profile": "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    "duration": "30 minutes",
    "location": "Room B, Wellness Center",
    "time": "11:00 AM - 11:30 AM",
    "date": "2025-08-07",
    "seats": 20,
    "booked": 6,
    "price": 199,
    "requirements": ["Comfortable seating"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Strength Training Basics",
    "description": "An introductory session to full-body strength training techniques for beginners.",
    "tags": ["fitness", "strength", "gym"],
    "profile": "https://images.unsplash.com/photo-1605296867423-40eb049c3f34?auto=format&fit=crop&w=800&q=80",
    "duration": "75 minutes",
    "location": "Fitness Room 3, Delhi",
    "time": "05:00 PM - 06:15 PM",
    "date": "2025-08-08",
    "seats": 25,
    "booked": 20,
    "price": 399,
    "requirements": ["Towel", "Training shoes"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Chakra Healing Meditation",
    "description": "Explore chakra balancing techniques using guided energy meditation.",
    "tags": ["chakras", "energy", "healing"],
    "profile": "	https://images.unsplash.com/photo-1620573882056-d3a979e36bb9?auto=format&fit=crop&w=800&q=80",
    "duration": "50 minutes",
    "location": "Spiritual Hall, Pune",
    "time": "08:00 PM - 08:50 PM",
    "date": "2025-08-09",
    "seats": 15,
    "booked": 9,
    "price": 249,
    "requirements": ["Cushion", "Water bottle"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Sound Therapy Session",
    "description": "A relaxing experience of sound bath and frequency healing.",
    "tags": ["therapy", "sound", "relaxation"],
    "profile": "https://images.unsplash.com/photo-1611078489935-7dd8c47e60b3?auto=format&fit=crop&w=800&q=80",
    "duration": "40 minutes",
    "location": "Healing Studio, Jaipur",
    "time": "04:00 PM - 04:40 PM",
    "date": "2025-08-10",
    "seats": 18,
    "booked": 7,
    "price": 150,
    "requirements": ["No metal jewelry"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Pilates for Core Strength",
    "description": "Build a stronger core with this beginner-friendly Pilates session.",
    "tags": ["pilates", "core", "fitness"],
    "profile": "	https://images.unsplash.com/photo-1584467735871-b7f1a2f992cc?auto=format&fit=crop&w=800&q=80https://images.unsplash.com/photo-1584467735871-b7f1a2f992cc",
    "duration": "55 minutes",
    "location": "Gym Studio B, Noida",
    "time": "09:30 AM - 10:25 AM",
    "date": "2025-08-11",
    "seats": 20,
    "booked": 8,
    "price": 249,
    "requirements": ["Pilates mat", "Socks"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Laughter Therapy",
    "description": "Boost your mood and immunity through guided group laughter sessions.",
    "tags": ["fun", "therapy", "laughter"],
    "profile": "	https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    "duration": "30 minutes",
    "location": "Community Center, Bengaluru",
    "time": "10:00 AM - 10:30 AM",
    "date": "2025-08-12",
    "seats": 35,
    "booked": 15,
    "price": 99,
    "requirements": ["Open mind", "Smiles"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Prenatal Yoga Session",
    "description": "Gentle stretches and breathing practices for expecting mothers.",
    "tags": ["prenatal", "yoga", "health"],
    "profile": "https://images.unsplash.com/photo-1588776814546-ec7e1863d109?auto=format&fit=crop&w=800&q=80",
    "duration": "45 minutes",
    "location": "Wellness Hall, Ahmedabad",
    "time": "11:00 AM - 11:45 AM",
    "date": "2025-08-13",
    "seats": 12,
    "booked": 5,
    "price": 349,
    "requirements": ["Doctor's approval"],
    "status": "published"
  },
  {
    "user_id": "64cfc29f9b2e5c24f68b9f71",
    "title": "Mindfulness for Students",
    "description": "Improve focus and mental clarity with simple mindfulness exercises.",
    "tags": ["mindfulness", "students", "focus"],
    "profile": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    "duration": "30 minutes",
    "location": "Online (Google Meet)",
    "time": "04:00 PM - 04:30 PM",
    "date": "2025-08-14",
    "seats": 40,
    "booked": 20,
    "price": 0,
    "requirements": ["Notebook", "Internet connection"],
    "status": "published"
  }
]
