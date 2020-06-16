import React from 'react';

import ActivityBoard from './ActivityBoard';
import DataBoard from './Databoard';
import Schedule from './Schedule';

// import { Container } from './styles';

function Panel(props) {

    const modePanel = props.panel;

    return (
        <>
            { modePanel == 'activityboard' && <ActivityBoard/> }
            { modePanel == 'databoard' && <DataBoard/>}
            { modePanel == 'schedule' && <Schedule/> }
        </>
    );
}

export default Panel;