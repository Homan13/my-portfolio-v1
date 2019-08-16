import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "CDK Presentation",
    'image': {
      'desc': "My AWS CDK MeetUp Presentation",
      'src': "images/meetUp.png",
      'comment': ""
    }
  },
  {
    'title': "Olive Branch Lodge Website",
    'image': {
      'desc': "Example screenshot of Olive Branch Lodge website",
      'src': "images/oliveBranchLodge_screenCap.png",
      'comment': ""
    }
  },
  {
    'title': "GitHub",
    'image': {
      'desc': "My GitHub Profile",
      'src': "images/gitHub_screenCap.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
