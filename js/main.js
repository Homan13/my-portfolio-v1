import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "CDK Presentation",
    'href': "https://www.youtube.com/watch?v=DBFKqGYh0SU&t=49s",
    'desc': `This is a presentation I've put together on AWS' Cloud Development Kit (CDK),
             their latest Infrastructure as Code (IaC) tool. The CDK uses actual code to
             define your AWS insfrastructure instead of JSON/YAML or a tool specific language.
             The CDK allows developers, organizations and business to quickly get cloud
             infrastructure up and running with smart defaults lowering the time to get their
             product to market. This video is from my second presentation, the presentation
             is constantly evolving. If you would like me to come present on the topic of the
             CDK, please reach out by email to get me on your calendar.`,
    'image': {
      'desc': "My AWS CDK MeetUp Presentation",
      'src': "images/meetUp.png",
      'comment': ""
    }
  },
  {
    'title': "Olive Branch Lodge Website",
    'href': "http://www.olivebranch114.org/index.html",
    'desc': `This is the existing website of Olive Branch Lodge No. 114, AF&AM that I
             took over management of this year. The site is currently built and run with
             iPage, and my intention is to migrate the site over to a static site built
             with GatsbyJS, and hosted on AWS statically with the use of S3.`,
    'image': {
      'desc': "Example screenshot of Olive Branch Lodge website",
      'src': "images/oliveBranchLodge_screenCap.png",
      'comment': ""
    }
  },
  {
    'title': "GitHub",
    'href': "https://github.com/Homan13",
    'desc': `My personal GitHub page. Currently just a placeholder until I can add another
             project to this portfolio page.`,
    'image': {
      'desc': "My GitHub Profile",
      'src': "images/gitHub_screenCap.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
