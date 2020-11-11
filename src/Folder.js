import React from 'react';

const Headers = ({ currentTab, selectTab, titles }) => {
    const handleClick = (e) => {
        const idx = parseInt(e.target.id, 10);
        selectTab(idx);
    }

    const tabs = titles.map((title, idx) => {
        const head = (idx === currentTab) ? 'alive' : '';
        return (
            <li key={idx} 
            id={idx} 
            onClick={handleClick}
            className={head}>
                {title}
            </li>
        );
    });
    return (
        <ul className='tab-header'>
            {tabs}
        </ul>
    );
};

class Folder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        }
    }

    selectTab = (idx) => {
        this.setState({ currentTab: idx })
    };

    render() {
        const folder = this.props.folders[this.state.currentTab];

        const titles = this.props.folders.map(folder => folder.title)

        return (
            <div>
                <h1>Tabs</h1>
                <div className='tabs'>
                    <Headers
                    titles={titles}
                    currentTab={this.state.currentTab}
                    selectTab={this.selectTab}
                    />
                    <div className='tab-content'>
                        {folder.content}
                    </div>
                </div>
            </div>
        );
    }
};



export default Folder;