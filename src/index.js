import React from 'react';
import ReactDOM  from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 16:45" 
                commentText="Hi! Nice blog"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 13:22" 
                commentText="I love it"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:36" 
                commentText="You're amazing, dude :D"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Sophia" 
                timeAgo="Yesterday at 00:12" 
                commentText="Hahaha"
                avatar={faker.image.avatar()}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
