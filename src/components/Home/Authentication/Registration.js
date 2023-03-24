const Registration = () => {
    return(
        <div>
    <h2>Register</h2>
    <div className="row">
        <br/>
        <form>           
            <div className="form-group">
                <label htmlFor="FirstName"></label>
                <input type="text" htmlFor="FirstName" className="form-control" required />                
            </div>
            <div className="form-group">
                <label htmlFor="LastName"></label>
                <input type="text" htmlFor="LastName" className="form-control" required />               
            </div>

            <div className="form-group">
                <label htmlFor="Email"></label>
                <input type="email" htmlFor="Email" className="form-control" required />                
            </div>

            <div className="form-group">
                <label htmlFor="Password"></label>
                <input htmlFor="Password" type="password" className="form-control" required />                
            </div>

            <div className="text-danger"></div>
            <div className="form-group">
                <label htmlFor="ImageFile" className="control-label"></label>
                <div className="custom-file">
                    <input htmlFor="ImageFile" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" htmlFor="customFile">Choose File</label>
                </div>                
            </div>


            <div className="form-group">
                <br />
                <input type="submit" value="Register" className="btn-primary" />

            </div>
        </form>
    </div>
        </div>
    )
};

export default Registration;