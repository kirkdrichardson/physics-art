// @flow strict

import * as React from 'react';
import LessonCard from 'component/common/card/LessonCard';

type Props = {||};

class Home extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <LessonCard
                    lesson={{
                        title: "Normally Distributed Bubbles",
                        imageSrc: 'https://picsum.photos/300/200',
                        shortDescription: "Play with bubbles. Learn about normal distributions to auto generate the size and color.",
                        longDescription: `Cras volutpat varius mattis. Mauris facilisis lobortis sem. Praesent laoreet enim sed elit auctor, at imperdiet lorem luctus. Nullam in efficitur felis. Suspendisse laoreet, lectus et sodales sollicitudin, turpis quam rutrum ipsum, a porttitor tortor nibh vel quam. Aliquam erat volutpat. Fusce consequat nisl lacus, ac placerat sapien ullamcorper at. Etiam ac ullamcorper ligula, a mollis est. Praesent luctus, nisl et iaculis cursus, justo nisi rutrum neque, eleifend dictum ex tortor quis metus. Aenean id congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur viverra ipsum urna. Curabitur rhoncus, erat congue pellentesque tincidunt, tortor lacus molestie risus, at molestie felis elit eu quam. Suspendisse potenti. Cras ut commodo elit.

                        Nam auctor, sem tincidunt pellentesque aliquet, massa risus eleifend erat, a sagittis dui nisl quis metus. Donec ut mauris sit amet lorem dictum dignissim. Sed volutpat neque pulvinar quam porttitor, quis ultrices enim convallis. Vivamus elementum ex id risus pharetra molestie. Ut sit amet nisi ac libero bibendum sagittis. Fusce ac elit at orci tincidunt fermentum. Sed euismod aliquam lacus. Sed sed dictum ipsum, id vestibulum odio. Morbi viverra mattis eros ut ornare. Aliquam malesuada quam vitae.`

                    }}
                />

                
                <LessonCard
                lesson={{
                    title: "Normally Distributed Bubbles",
                    imageSrc: 'https://picsum.photos/300/200',
                    shortDescription: "Play with bubbles. Learn about normal distributions to auto generate the size and color.",
                    longDescription: `Cras volutpat varius mattis. Mauris facilisis lobortis sem. Praesent laoreet enim sed elit auctor, at imperdiet lorem luctus. Nullam in efficitur felis. Suspendisse laoreet, lectus et sodales sollicitudin, turpis quam rutrum ipsum, a porttitor tortor nibh vel quam. Aliquam erat volutpat. Fusce consequat nisl lacus, ac placerat sapien ullamcorper at. Etiam ac ullamcorper ligula, a mollis est. Praesent luctus, nisl et iaculis cursus, justo nisi rutrum neque, eleifend dictum ex tortor quis metus. Aenean id congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur viverra ipsum urna. Curabitur rhoncus, erat congue pellentesque tincidunt, tortor lacus molestie risus, at molestie felis elit eu quam. Suspendisse potenti. Cras ut commodo elit.

                    Nam auctor, sem tincidunt pellentesque aliquet, massa risus eleifend erat, a sagittis dui nisl quis metus. Donec ut mauris sit amet lorem dictum dignissim. Sed volutpat neque pulvinar quam porttitor, quis ultrices enim convallis. Vivamus elementum ex id risus pharetra molestie. Ut sit amet nisi ac libero bibendum sagittis. Fusce ac elit at orci tincidunt fermentum. Sed euismod aliquam lacus. Sed sed dictum ipsum, id vestibulum odio. Morbi viverra mattis eros ut ornare. Aliquam malesuada quam vitae.`

                }}
            />
            </div>
        );
    }
}

export default Home;