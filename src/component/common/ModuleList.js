// @flow strict

import * as React from 'react';
import type { ModuleType, ModuleListItemType } from 'module';

import ModuleListItem from 'component/common/ModuleListItem';

type Props = {
    type: ModuleType
};

type State = {
    loading: boolean,
    items: ModuleListItemType[]
};

// temporary faux data factory
const getListItem = () => ({
    id: Math.floor(Math.random() * 10000),
    title: 'Normal Bubbles',
    shortDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem',
    imageUrl: 'https://picsum.photos/200/300/?random'
});

class ModuleList extends React.Component<Props, State> {

    state = {
        loading: true,
        items: []
    };

    componentDidMount() {
        console.log(`TODO - use "${this.props.type}" to fetch data`);

        setTimeout(() => {
            this.setState({
                loading: false,
                items: [...new Array(20)].map(e => getListItem())
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => <ModuleListItem key={item.id} data={item} />)}
            </div>
        );
    }
}

export default ModuleList;