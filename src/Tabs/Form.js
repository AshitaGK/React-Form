
import React, {Component } from 'react'
import styles from './styles'



class Form extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      // selectedOption: "option1"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange=this.handleOptionChange.bind(this);
    this.submitusersurveyForm = this.submitusersurveyForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }


  // handleOptionChange = changeEvent => {
  //   this.setState({
  //     selectedOption: changeEvent.target.value
  //   });
  // };

  handleOptionChange = (e) => {
   const selectedOption = e.target.value;
   this.setState({ selectedOption});
  };


  // handleOptionChange(e) {
  //   let fields = this.state.selectesdOption
  //    fields[e.target.name] = e.target.value;
  //   this.setState({
  //     fields
  //   });
  // }

  submitusersurveyForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["emailid"] = "";
        fields["mobileno"] = "";
       
        this.setState({fields:fields});
        alert("Survey submitted successfully!");
        localStorage.setItem('document',JSON.stringify(this.state));
    }

  }

  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            
          // username:this.documentData.username,
          // emailid: this.documentData.emailid,
          // mobileno:this.documentData.mobileno
          fields: this.documentData.fields
         
    })
} else {
    this.setState({
      fields: {},
      
    })
}
}
 

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }



    this.setState({
      errors: errors
    });
    return formIsValid;


  }




  render() {

    return (
  <div style={styles.container}>
    <h1 style={styles.title}>Aromatic Bar</h1>
    <h3 style={styles.titles}>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you</h3>
    <div
        style={{
         minHeight: "300px",
          padding: "10px",
          border: "1px solid #e5e5e5",
          backgroundColor: "#FFFFFF",
        }}
      >
    
    <form method="post"  name="usersurveyForm"  onSubmit= {this.submitusersurveyForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
 
 <label>Please rate the quality of the service you received from your host:</label>
<div className="form-check" style={{display:'inline-block'}}>
 
                <label>
                  <input 
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input" 
                  ></input>
               <span style={{marginLeft:'50px'}}>Excellent</span>  
                </label>
              </div>

              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'30px'}}>Good </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'20px'}}>Fair </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'20px'}}>Bad </span> 
                </label>
              </div>

              <span style={{marginLeft: '1px' , display: 'block'}}>Please rate the quality of your beverage.</span>
  <div className="form-check" style={{display:'inline-block' }}>
 
                <label>
                  <input 
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'50px'}}>Excellent</span>  
                </label>
              </div>

              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'30px'}}>Good </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'20px'}}>Fair </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'20px'}}>Bad </span> 
                </label>
              </div>

              <span style={{marginLeft: '1px' , display: 'block'}}>Was our restaurant clean?</span>
  <div className="form-check" style={{display:'inline-block' }}>
 
                <label>
                  <input 
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'50px'}}>Excellent</span>  
                </label>
              </div>

              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'30px'}}>Good </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'20px'}}>Fair </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'20px'}}>Bad </span> 
                </label>
              </div>
              
              <span style={{marginLeft: '1px' , display: 'block'}}>Please rate your overall dining experience.</span>
  <div className="form-check" style={{display:'inline-block' }}>
 
                <label>
                  <input 
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'50px'}}>Excellent</span>  
                </label>
              </div>

              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'30px'}}>Good </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
               <span style={{marginLeft:'20px'}}>Fair </span> 
                </label>
              </div>
              <div className="form-check" style={{display:'inline-block'}}>
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option4"
                    checked={this.state.selectedOption === "option4"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                <span style={{marginLeft:'20px'}}>Bad </span> 
                </label>
              </div>
        <input type="submit" className="button"  value="Submit">
        
          </input>
          
        </form>

   </div>
  
  </div>

);
}


}



export default Form;

