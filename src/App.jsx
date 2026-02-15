import React from 'react'
import Card from './components/Card'
import google from './assets/google.webp'
import meta from './assets/meta.jpeg'
import amazon from './assets/amazon.png'
import apple from './assets/apple.jpg'
import netflix from './assets/netflix.png'
import microsoft from './assets/microsoft.svg'
import adobe from './assets/adobe.jpg'
import uber from './assets/uber.webp'
import airbnb from './assets/airbnb.jpeg'
import salesforce from './assets/salesforce.png'

const App = () => {

  const jobs = [
    {
      id: 1,
      logo: google,
      company: "Google",
      posted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      id: 2,
      logo: meta,
      company: "Meta",
      posted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India"
    },
    {
      id: 6,
      logo: microsoft,
      company: "Microsoft",
      posted: "4 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Noida, India"
    },
    {
      id: 3,
      logo: amazon,
      company: "Amazon",
      posted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$40/hr",
      location: "Chennai, India"
    },
    {
      id: 4,
      logo: apple,
      company: "Apple",
      posted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior",
      pay: "$70/hr",
      location: "Remote, India"
    },

    {
      id: 5,
      logo: netflix,
      company: "Netflix",
      posted: "1 week ago",
      post: "Web UI Developer",
      tag1: "Contract",
      tag2: "Senior",
      pay: "$80/hr",
      location: "Remote"
    },

    {
      id: 7,
      logo: adobe,
      company: "Adobe",
      posted: "8 days ago",
      post: "UI Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$42/hr",
      location: "Pune, India"
    },
    {
      id: 8,
      logo: uber,
      company: "Uber",
      posted: "6 days ago",
      post: "Frontend Engineer (React)",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Bangalore, India"
    },
    {
      id: 9,
      logo: airbnb,
      company: "Airbnb",
      posted: "10 weeks ago",
      post: "Web Engineer",
      tag1: "Contract",
      tag2: "Senior",
      pay: "$75/hr",
      location: "Remote"
    },
    {
      id: 10,
      logo: salesforce,
      company: "Salesforce",
      posted: "12 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior",
      pay: "$48/hr",
      location: "Hyderabad, India"
    }
  ];

  return (

    <>
      <header className="header">
        <div className="header-content">
          <h1>JOB OPENINGS</h1>
          <p>Find your next frontend role</p>
        </div>
      </header>
      <div className="parent">


        {jobs.map(function (e) {

          return <Card logo={e.logo} company={e.company} post={e.post} posted={e.posted} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location} />
        })}

      </div>
    </>
  )
}

export default App
