import axios from "axios";
import { useEffect } from "react";
import { request } from "./components/axios_helper";



const Secret = () => {
    
    useEffect(() => {
        request("GET",
            "/api/v1/demo-controller/demo",
            {}            
        ).then((response) => {
            this.setState({data: response.data})
            console.log(response);
        }).catch((err) => {
            console.log("eror", err);
        });
          
          
      }, []);

  return (
    <>
      <div>Hello world</div>
      
    </>
  );
};
export default Secret;