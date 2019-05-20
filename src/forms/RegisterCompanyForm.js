import React, { Component } from 'react'

import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base'
import { Field, reduxForm } from 'redux-form';

import validate from './../validations/RegisterCompanyValidations'

class RegisterCompanyForm extends Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this);
    }

    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Input {...input} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <Container>
                <Content padder>
                    <Field name="name" component={this.renderInput} />
                    
                    <Button block primary onPress={reset}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default reduxForm({
    form: 'registerCompanyForm',
    validate
})(RegisterCompanyForm)