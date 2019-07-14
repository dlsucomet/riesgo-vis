import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
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
        <section id="marikina" className="active">
          <Typography variant="h3">Marikina City</Typography>
          <Typography>
            A highly urbanized city in the capital region of the Philippines, it lies in a valley surrounded by the mountains of Sierra Madre in the east and the hills of Quezon City in the west. It is near the center of the Pasig-Marikina river basin, with most of the city at an elevation of 15 meters above sea level. (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina">Wikipedia</a></i>)
          </Typography>
          <br></br>
          <Typography>
            A highly urbanized city in the capital region of the Philippines, it lies in a valley surrounded by the mountains of Sierra Madre in the east and the hills of Quezon City in the west. It is near the center of the Pasig-Marikina river basin, with most of the city at an elevation of 15 meters above sea level. (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina">Wikipedia</a></i>)
          </Typography>
        </section>
        <section id="land">
          <Typography variant="h3">A River Runs through It</Typography>
          <Typography>
            The Marikina River runs at the heart of the city, draining off rain water through its tributaries to Laguna de Bay. In its 38 kilometer stretch, its depth ranges from 3 to 21 meters, and its segments can span from 70 to 120 meters. Because it runs through to the lower stretch of the basin, the riverbanks only have elevations as high as 8 down to 2 meters above sea level.
          </Typography>
          <br></br>
          <Typography>
            Acting as its lifeblood, many of Marikina's residential subdivisions, commercial buildings and critical health and education facilities have been built near the river. This coupled with the constant threat of flooding, Marikina has been the focus of the national government’s efforts for flood control and disaster management. (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina_River">Wikipedia</a></i>)
          </Typography>
        </section>
        <section id="typhoon">
          <Typography variant="h3">New Normal</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.</Typography>
        </section>
        <section id="evacuation">
          <Typography variant="h3">Evacuation during Ondoy</Typography>
          <Typography>Nam gravida sodales turpis, at facilisis augue fringilla nec. Maecenas a sem semper, iaculis ante ac, lobortis est. Pellentesque nec vestibulum sapien, quis dictum enim. Etiam id dolor interdum, iaculis orci posuere, dapibus tellus. Nullam metus augue, posuere sed dapibus nec, varius vitae purus. Morbi non dapibus sem. Suspendisse at pretium quam. Praesent fringilla nisi non diam vehicula pharetra. Etiam ullamcorper porta metus id vehicula. Donec maximus dolor neque, vitae consectetur magna luctus ac. Vivamus ante augue, maximus eu tincidunt eu, pellentesque eget tellus. Cras sollicitudin porta dui ac tempor. Proin scelerisque auctor felis, in pulvinar ipsum semper et. Vivamus ut venenatis nunc. Donec sapien leo, pellentesque ac ex eget, dictum luctus ante. In vulputate ante et sollicitudin cursus.</Typography>
        </section>
        <section id="population">
          <Typography variant="h4">Population of Marikina</Typography>
          <Typography>Quisque accumsan augue leo, id ultricies arcu pharetra sed. Nulla facilisi. Aenean tincidunt, mauris non congue maximus, magna turpis lacinia tellus, ac porttitor sapien ante eget risus. Vestibulum sed tincidunt lacus. Morbi ut auctor erat, id dapibus massa. Nunc dignissim tincidunt fringilla. Nunc quis dui sapien. Phasellus eget finibus tellus, sed condimentum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus lorem, cursus vitae sapien in, iaculis sodales nibh. Donec venenatis tellus libero, quis imperdiet risus porta ut. Etiam fermentum nulla quam, ut suscipit leo placerat a. Vivamus imperdiet tortor sem, nec congue tortor fringilla et. Vestibulum quis enim sed velit euismod fringilla.</Typography>
        </section>
        <section id="coverage">
          <Typography variant="h4">Coverage of Evacuation Centers (400m radius)</Typography>
          <Typography>Quisque accumsan augue leo, id ultricies arcu pharetra sed. Nulla facilisi. Aenean tincidunt, mauris non congue maximus, magna turpis lacinia tellus, ac porttitor sapien ante eget risus. Vestibulum sed tincidunt lacus. Morbi ut auctor erat, id dapibus massa. Nunc dignissim tincidunt fringilla. Nunc quis dui sapien. Phasellus eget finibus tellus, sed condimentum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus lorem, cursus vitae sapien in, iaculis sodales nibh. Donec venenatis tellus libero, quis imperdiet risus porta ut. Etiam fermentum nulla quam, ut suscipit leo placerat a. Vivamus imperdiet tortor sem, nec congue tortor fringilla et. Vestibulum quis enim sed velit euismod fringilla.</Typography>
        </section>
        <section id="capacity">
          <Typography variant="h4">Capacity of Evacuation Centers</Typography>
          <Typography>Quisque accumsan augue leo, id ultricies arcu pharetra sed. Nulla facilisi. Aenean tincidunt, mauris non congue maximus, magna turpis lacinia tellus, ac porttitor sapien ante eget risus. Vestibulum sed tincidunt lacus. Morbi ut auctor erat, id dapibus massa. Nunc dignissim tincidunt fringilla. Nunc quis dui sapien. Phasellus eget finibus tellus, sed condimentum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc lacus lorem, cursus vitae sapien in, iaculis sodales nibh. Donec venenatis tellus libero, quis imperdiet risus porta ut. Etiam fermentum nulla quam, ut suscipit leo placerat a. Vivamus imperdiet tortor sem, nec congue tortor fringilla et. Vestibulum quis enim sed velit euismod fringilla.</Typography>
        </section>
        <section id="accessibility">
          <Typography variant="h3">Accessibility</Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.</Typography>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
