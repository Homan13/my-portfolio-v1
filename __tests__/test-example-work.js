import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

  it("Should allow the modal to open and close", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });

});

describe("ExampleWorkBubble component", () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWork[1]}
    openModal={mockOpenModalFn}/>);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the img src set correctly", () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });

  it("Should call the openModal handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  })
});
