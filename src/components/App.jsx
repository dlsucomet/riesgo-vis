import React from 'react';
import Panel from './Panel';
import Map from './Map';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chapterName: 'marikina',
    };

    this.updateChapter = this.updateChapter.bind(this);
  }

  updateChapter = (chapterName) => {
    this.setState({
      chapterName,
    });
  }

  render() {
    const { chapterName } = this.state;
    return (
      <div>
        <Map chapterName={chapterName} />
        <Panel chapterName={chapterName} updateChapter={this.updateChapter} />
      </div>
    );
  }
}
