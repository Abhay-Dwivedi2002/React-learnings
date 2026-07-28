import React from "react";
import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
      name: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
      name: "Microsoft",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfF18w3_fwqCkMiefhHEPYOf_Zk3rhmuxB6tj9ifCKlUDfKX5k7ukf5mrG&s=10",
      name: "Apple",
      datePosted: "1 week ago",
      post: "iOS Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
      name: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      name: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Chennai, India",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wWTzFBEyu3_TXJwxAjevI7UJLSHKhq6qXLWQnd07fg&s",
      name: "Netflix",
      datePosted: "4 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Remote",
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/44/1/nvidia-logo-png_seeklogo-443363.png",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      name: "Adobe",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_oracle.jpg",
      name: "Oracle",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/salesforce-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-208332853.jpg",
      name: "Salesforce",
      datePosted: "1 day ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Hyderabad, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, indx) {
        console.log(indx);
        return (
          <div key={indx}>
            <Card
              name={elem.name}
              company={elem.name}
              time={elem.datePosted}
              role={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              brandLogo={elem.brandLogo}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
