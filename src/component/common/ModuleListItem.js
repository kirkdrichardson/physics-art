// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import type { ModuleListItemType } from 'module';

type Props = {
    data: ModuleListItemType
};

class ModuleListItem extends React.Component<Props> {
    render() {
        const { data } = this.props;

        return (
            <div>
                {data.title}
            </div>
        );
    }
}

export default ModuleListItem;