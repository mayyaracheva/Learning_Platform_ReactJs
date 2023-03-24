const Login = () => {
    return(
        <div>
             <h2>Login</h2>
    <div className="row">
        <form asp-controller="Auth" asp-action="Login" encType="multipart/form-data" method="post">
          
            <div className="form-group">
                <label asp-for="Email"></label>
                <input type="email"asp-for="Email" className="form-control" />
                <span asp-validation-for="Email" className="text-danger"></span>
            </div>
            <div className="form-group">
                <label asp-for="Password"></label>
                <input type="password" asp-for="Password" className="form-control" id="myInput" />

            </div>
            <div className="form-group">
                <input type="checkbox" onclick="myFunction()" />Show Password
                <span asp-validation-for="Password" className="form-error"></span>
            </div>
            <div className="form-group">
                <br />               
                <input type="submit" value="Login" asp-controller="Auth" asp-action="Login" className="btn-primary"/>

            </div>
        </form>
    </div>
        </div>
    )
};

export default Login;