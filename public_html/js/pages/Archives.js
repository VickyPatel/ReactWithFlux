import React from "react";

import Article from "../components/Articles"

export default class Archives extends React.Component {
    constructor(){
        super();
    }
    render() {
        const Articles = [
            <Article  key={1} title={"Sample Title 1"} />,
            <Article  key={2} title={"Sample Title 2"} />,
            <Article  key={3} title={"Sample Title 3"} />,
            <Article  key={4} title={"Sample Title 4"} />,
            <Article  key={5} title={"Sample Title 5"} />
        ];

        return (
            <div>
                <div class='row'>
                    {Articles}
                </div>
            </div>
        );
    }
};