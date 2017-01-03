import './Header.scss';
import {Link} from 'react-router';

export default class HeaderPage extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Home</a>
                        </div>
                        <ul className="nav navbar-nav active navbar-right">
                            <li><Link to="/settings" onlyActiveOnIndex={true}>Settings</Link></li>
                            <li><Link to="/register" onlyActiveOnIndex={true}>Registration</Link></li>
                            <li><Link to="/login" onlyActiveOnIndex={true}>Login</Link></li>
                            <li><Link to="/logout" onlyActiveOnIndex={true} onClick={this.logout}>Logout</Link></li>
                        </ul>
                    </div>
                </nav>
                { this.props.children }
            </div>
        );
    }
}