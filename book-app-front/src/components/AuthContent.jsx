import * as React from "react";

import { request } from "./axios_helper";

export default class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: "login",
            firstName: "" 
        };
    }
}