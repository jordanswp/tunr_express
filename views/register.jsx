var React = require('react');

class UsersNew extends React.Component {
  render() {

    return (
      <html>
        <body>
          <div>
            <h1>register</h1>
            <div>
                <form action="/registration" method="POST">
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

module.exports = UsersNew;