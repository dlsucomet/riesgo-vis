import React from 'react';
import { chapters } from '../config/options';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  setActiveChapter = (newChapter) => {
    const { chapterName, updateChapter } = this.props;

    if (newChapter === chapterName) return;

    document.getElementById(newChapter).setAttribute('class', 'active');
    document.getElementById(chapterName).setAttribute('class', '');

    updateChapter(newChapter);
  }

   isElementOnScreen = (id) => {
     const element = document.getElementById(id);
     const bounds = element.getBoundingClientRect();
     return bounds.top < window.innerHeight && bounds.bottom > 0;
   }

  handleScroll = (e) => {
    const chapterNames = Object.keys(chapters);
    let i;

    for (i = 0; i < chapterNames.length; i += 1) {
      const chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }


  render() {
    return (
      <div id="features" onScroll={this.handleScroll}>
        <section id="marikina" className='active'>
          <h3>Marikina City</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.</p>
        </section>
        <section id="land">
          <h3>Marikina City</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.</p>
        </section>
        <section id="typhoon">
          <h3>Super typhoon Ondoy</h3>
          <p>Fusce varius, lorem vel cursus facilisis, mi velit mollis quam, quis accumsan nisl nisi a enim. Vestibulum fermentum, lorem quis auctor pulvinar, ante velit pellentesque leo, ac molestie arcu sapien vel enim. In at pellentesque odio. Maecenas ultrices justo vitae mauris cursus ultrices. Fusce mattis tempus arcu. Curabitur elementum convallis leo quis lacinia. Quisque pretium odio a libero dapibus bibendum. Vestibulum mollis ac sapien et sagittis. Duis ac volutpat felis, vel aliquam ex. In diam orci, malesuada nec porttitor nec, aliquam ut urna. Nam urna augue, hendrerit consequat euismod et, facilisis sit amet arcu. Donec ut gravida massa. Quisque felis magna, dignissim nec mauris a, blandit imperdiet felis. Morbi mollis dui ac felis rhoncus, auctor dignissim leo convallis. Curabitur velit ante, aliquam eget porta non, hendrerit quis magna. Duis velit neque, malesuada non fermentum ac, dignissim non sem.</p>
        </section>
        <section id="evacuation">
          <h3>Evacuation during Ondoy</h3>
          <p>Nam gravida sodales turpis, at facilisis augue fringilla nec. Maecenas a sem semper, iaculis ante ac, lobortis est. Pellentesque nec vestibulum sapien, quis dictum enim. Etiam id dolor interdum, iaculis orci posuere, dapibus tellus. Nullam metus augue, posuere sed dapibus nec, varius vitae purus. Morbi non dapibus sem. Suspendisse at pretium quam. Praesent fringilla nisi non diam vehicula pharetra. Etiam ullamcorper porta metus id vehicula. Donec maximus dolor neque, vitae consectetur magna luctus ac. Vivamus ante augue, maximus eu tincidunt eu, pellentesque eget tellus. Cras sollicitudin porta dui ac tempor. Proin scelerisque auctor felis, in pulvinar ipsum semper et. Vivamus ut venenatis nunc. Donec sapien leo, pellentesque ac ex eget, dictum luctus ante. In vulputate ante et sollicitudin cursus.</p>
        </section>
        <section id="population">
          <h3>Capacity of Evacuation Centers and Surrounding Population</h3>
          <p>Quisque accumsan augue leo, id ultricies arcu pharetra sed. Nulla facilisi. Aenean tincidunt, mauris non congue maximus, magna turpis lacinia tellus, ac porttitor sapien ante eget risus. Vestibulum sed tincidunt lacus. Morbi ut auctor erat, id dapibus massa. Nunc dignissim tincidunt fringilla. Nunc quis dui sapien. Phasellus eget finibus tellus, sed condimentum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus lorem, cursus vitae sapien in, iaculis sodales nibh. Donec venenatis tellus libero, quis imperdiet risus porta ut. Etiam fermentum nulla quam, ut suscipit leo placerat a. Vivamus imperdiet tortor sem, nec congue tortor fringilla et. Vestibulum quis enim sed velit euismod fringilla.</p>
        </section>
        <section id="accessibility">
          <h3>Accessibility</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.</p>
        </section>
      </div>
    );
  }
};
