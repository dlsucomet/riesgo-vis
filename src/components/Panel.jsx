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
            A highly urbanized city in the capital region of the Philippines, it lies in a valley surrounded by the mountains of Sierra Madre in the east and the hills of Quezon City in the west. Situated near the center of the Pasig-Marikina river basin, most of the city sits at an elevation of <span class="highlight">15 meters above sea level</span>.
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
          <br></br>
          <Typography variant="h6">CLIMATE &amp; ANNUAL PRECIPITATION</Typography>
          <Typography>
            Like the rest of the country, Marikina experiences a <span class="highlight">tropical monsoon climate</span> with average temperatures from 20 &deg;C to 34 &deg;C. Although these can feel warmer because of high humidity. The dry season starts January through May, bringing around 1.5 inches of rain. For the rest of the year, Marikina experiences its wet season which pours around 5 to 17 inches of rain, with heavy downpours from August to October. Overall in a year, Marikina experiences <span class="highlight">82 inches</span> of rain on average (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina" target="_blank">Wikipedia</a></i>).
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Average precipitation per month in Marikina"></img>
        </section>
        <section id="land">
          <Typography variant="h3">A River Runs through It</Typography>
          <Typography>
            The <span class="highlight">Marikina River</span> runs at the heart of the city, draining off rain water through its tributaries to Laguna de Bay. In its 38 kilometer stretch, its depth ranges from 3 to 21 meters, and its segments can span from 70 to 120 meters. Because it runs through to the lower stretch of the basin, the riverbanks only have elevations as high as 8 down to 2 meters above sea level.
          </Typography>
          <br></br>
          <Typography variant="h6">CALL TO ACTION</Typography>
          <Typography>
            Acting as its lifeblood, many of Marikina's residential subdivisions, commercial buildings and critical health and education facilities have been built near the river. With continuous developments around it coupled with the constant threat of flooding, Marikina remains a focus of the national government’s efforts for flood control and disaster management (<i>Source: <a href="https://en.wikipedia.org/wiki/Marikina_River" target="_blank">Wikipedia</a></i>).
          </Typography>
          <br></br>
          <img class="figure" src="../../data/assets/precip.png" alt="Distribution of buildings in Marikina"></img>
        </section>
        <section id="typhoon">
          <Typography variant="h3">Ondoy, the New Normal</Typography>
          <Typography>
            Like a shield to its southeast asian neighbors, the Philippines welcomes around twenty tropical cyclones in its area of responsibility. Around ten of them become actual typhoons and make landfall, with five of those potentially bringing destructive winds and heavy rains. This makes the Philippines the most exposed to tropical storms &mdash; an unfortunate record to bear (<i>Source: <a href="https://en.wikipedia.org/wiki/Typhoons_in_the_Philippines" target="_blank">Wikipedia</a>, <a href="http://world.time.com/2013/11/11/the-philippines-is-the-most-storm-exposed-country-on-earth/" target="_blank">Time</a></i>).
          </Typography>
          <br></br>
          <Typography variant="h6">EXTENT &amp; IMPACT</Typography>
          <Typography>
            On September 26, 2009, tropical storm “Ondoy” (typhoon “Ketsana”) made landfall and for 12 hours, flooded Metro Manila and Central Luzon. Catching everyone by surprise, it continuously dumped around 341 mm (14 in) of rain in just 6 hours and within 24 hours, a record-high 455 mm (17.9 in) of rainfall was reported. Considered as the worst flooding with heights that reached around 20 feet, its extent reached 14/16 <i>barangays</i> (towns), drowned around 464 people, and caused around 11 billion pesos in damages (<i>Source: <a href="https://en.wikipedia.org/wiki/Typhoon_Ketsana" target="_blank">Wikipedia</a>, <a href="https://newsinfo.inquirer.net/818907/special-report-on-storm-ondoy-marikina-remembers-end-of-the-world" target="_blank">Inquirer</a></i>).
          </Typography>
          <br></br>
          <Typography variant="h6">NEW NORMAL</Typography>
          <Typography>
            While Ondoy was not the wettest nor deadliest in recorded history, the large amount of rain it brought over the national capital region in a short span of time was a definite cause of concern. So much so that the Philippines instituted a more comprehensive working group, the National Disaster Risk Reduction and Management Council, and ramped up the production of flood hazard maps based on the Ondoy aftermath. Since then, people now anticipate and prepare for Ondoy-like flooding whenever new typhoons make landfall. At the same time, disaster preparedness and management for the capital region uses Ondoy as an effective baseline.
          </Typography>
        </section>
        <section id="evacuation">
          <Typography variant="h3">Evacuation during Ondoy</Typography>
          <Typography>
            Nam gravida sodales turpis, at facilisis augue fringilla nec. Maecenas a sem semper, iaculis ante ac, lobortis est. Pellentesque nec vestibulum sapien, quis dictum enim. Etiam id dolor interdum, iaculis orci posuere, dapibus tellus. Nullam metus augue, posuere sed dapibus nec, varius vitae purus. Morbi non dapibus sem. Suspendisse at pretium quam. Praesent fringilla nisi non diam vehicula pharetra. Etiam ullamcorper porta metus id vehicula. Donec maximus dolor neque, vitae consectetur magna luctus ac. Vivamus ante augue, maximus eu tincidunt eu, pellentesque eget tellus. Cras sollicitudin porta dui ac tempor. Proin scelerisque auctor felis, in pulvinar ipsum semper et. Vivamus ut venenatis nunc. Donec sapien leo, pellentesque ac ex eget, dictum luctus ante. In vulputate ante et sollicitudin cursus.
          </Typography>
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
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel tellus facilisis, cursus metus ut, porttitor ipsum. Nulla et nunc porta, viverra nunc eu, sodales dui. Donec ornare ipsum sed leo faucibus faucibus. Etiam posuere nec nulla sed auctor. Suspendisse consectetur efficitur magna sed tempor. Aliquam laoreet fringilla imperdiet. In tincidunt tortor nec nibh volutpat, ac tempor velit dapibus. Nunc eu nunc vel magna dictum tristique non eu quam. Aliquam viverra risus nisl, sed aliquet est consequat ac. Sed eget tortor sagittis arcu sodales lobortis vel non enim.
          </Typography>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
