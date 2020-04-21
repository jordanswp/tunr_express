var React = require('react');

class Login extends React.Component {
  render() {

    return (
      <html>
        <body>
          <div>
            <h1>Login</h1>
            <div>
                <form action="/login" method="POST">
                    <p>
                        name <input name="name"/>
                    </p>
                    <p>
                        password <input name="password"/>
                    </p>
                    <p>

                        <input type="submit"/>
                    </p>
                </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;