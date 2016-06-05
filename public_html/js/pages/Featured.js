import React from "react";
import Article from '../components/Articles';

export default class Featured extends React.Component {
    constructor() {
        super();
    }
    render() {
        const Articles = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
        ].map((title, i) => <Article key={i} title={title}/>);

        return (
            <div>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="well text-center">
                    </div>
                  </div>
                </div>
                <div class="row">{Articles}</div>
            </div>
        );
    }
};
