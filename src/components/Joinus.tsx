import React, { useState } from "react";
import "../router/router.css";
import { Form, Input, Button } from 'antd';
const Joinus = () => {

    const [success, setSuccess] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = async (values: any) => {
        console.log('Form values:', values);
        // You can perform additional actions here (e.g., API call)
        
        setSubmitted(true);
     
        if(validationCheck(values)){
            setIsLoading(true);
            if(await sendRequest(values)){
                setIsLoading(false);
                setSuccess(true);
            }else{
                setIsLoading(false);
                setSuccess(false);
            }
           
        }
        

      };
    
      function validationCheck(values: any){
        console.log("Validation check", values);
        if(values.name === "test"){
            return false;
        }

        return true;
      }


      async function sendRequest(values: any): Promise<boolean>{
        try {
            const response = await fetch('http://localhost:8000/api/hello/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                console.log(response)
                throw new Error('Network response was not ok');
            }

            const jsonResponse = await response.json();
            console.log(jsonResponse); // Handle the response as needed
            return true;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }


        return false;
      } 


      // Handle form submission errors (optional)
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            <h1 className="title">Brahma Jyoti Holding Limited (BJHL)</h1>
            <div className="form-container">
                {!submitted ? (
                    
                <>
                <Form className="form"  onFinish={onFinish} // Success handler
      onFinishFailed={onFinishFailed} >
                    <h2>Join us today!</h2>
                    <p>Please submit this form and we will contact you shortly.</p>
                    <Form.Item label="Name" required tooltip="Enter your full name" name="name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Phone Number" required tooltip="This is a required field" name="phonenumber">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Address" required tooltip="This is a required field" name="address">
                        <   Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </>
                ):
                <>
                {success ?
                 <div className="form">
                    <h1>Thanks for submitting the form. </h1>    
                </div> :
                 <div className="form">
                    <h1>Something went wrong please refresh and try again.</h1>
                 </div>}
                </>
                }
            </div>
        </div>
    )
}


export default Joinus;