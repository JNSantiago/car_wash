import React, { Component } from 'react'

import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base'

import RegisterCompanyForm from './../forms/RegisterCompanyForm'

class RegisterCompany extends Component {

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <Container>
                <Content padder>
                    <RegisterCompanyForm />
                </Content>
            </Container>
        )
    }
}

export default RegisterCompany