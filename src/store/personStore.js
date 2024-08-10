import { makeAutoObservable } from 'mobx';

class PersonStore {
  name = 'Tun Yar Zar Toe';
  age = 23;
  position = 'Web Developer';
  work = ['Kumo Solutions Mandalay', 'Evercomm Singapore Pte Ltd', 'CO2 Connect (CO2X)'];
  education = ['Technological University, Mandalay', 'Self-Learning', 'Online Courses'];
  hobbies = ['Coding', 'Reading', 'Traveling', 'Football'];
  currentLocation = 'Mandalay, Myanmar';
  nextLocations = ['Yangon, Myanmar', 'Tokyo, Japan', 'Singapore'];
  currently = {
    studying: ['Advanced JavaScript', 'React.js', 'Tailwind CSS'],
    reading: ['Clean Code', 'You Don’t Know JS', 'JavaScript: The Good Parts'],
    tinkering: ['Portfolio Website', 'Weather App', 'Carbon Footprint Calculator'],
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const personStore = new PersonStore();
