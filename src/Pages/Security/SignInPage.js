import React, {Component} from 'react';
import $ from 'jquery/dist/jquery.min';
import SecurityLayout from '../../Components/Layouts/SecurityLayout';
import SignInForm from '../../Components/Security/SignInForm';

class SignInPage extends Component {

    componentWillMount() {
        const body = $('body');
        body.removeClass("login-container login-cover");
    }

    componentDidMount() {
        const body = $('body');
        body.addClass("login-container login-cover");
    }

    render() {
        return (
            <div>
                <SecurityLayout>
                    <SignInForm />
                </SecurityLayout>
            </div>
        );
    }
}

export default SignInPage;