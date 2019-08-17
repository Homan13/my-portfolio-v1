import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "CDK Presentation",
    'href': "https://www.youtube.com/watch?v=DBFKqGYh0SU&t=49s",
    'desc': `"This is a presentation I've put together on AWS' Cloud Development Kit (CDK),
             their latest Infrastructure as Code (IaC) tool. The CDK uses actual code to
             define your AWS insfrastructure instead of JSON/YAML or a tool specific language.
             The CDK allows developers, organizations and business to quickly get cloud
             infrastructure up and running with smart defaults lowering the time to get their
             product to market. This video is from my second presentation, the presentation
             is constantly evolving. If you would like me to come present on the topic of the
             CDK, please reach out by email to get me on your calendar."`,
    'image': {
      'desc': "My AWS CDK MeetUp Presentation",
      'src': "images/meetUp.png",
      'comment': ""
    }
  },
  {
    'title': "Olive Branch Lodge Website",
    'href': "https://example.com",
    'desc': `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    'image': {
      'desc': "Example screenshot of Olive Branch Lodge website",
      'src': "images/oliveBranchLodge_screenCap.png",
      'comment': ""
    }
  },
  {
    'title': "GitHub",
    'href': "https://example.com",
    'desc': `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    'image': {
      'desc': "My GitHub Profile",
      'src': "images/gitHub_screenCap.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
