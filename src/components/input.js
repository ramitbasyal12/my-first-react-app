import "./input.css";
function Input(){
    return(
        <div className="input">
            <label htmlFor="username" className="input-label">UserName</label>
            <input type="text" placeholder="Enter your Name" id="username" className="input-field"/>
        </div>
    )
} 

export default Input;