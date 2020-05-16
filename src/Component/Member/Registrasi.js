import React, { useState } from 'react';
import { Col,Form,Button } from 'react-bootstrap';

const RenderRegistrasi = ({ dataRegistrasi, ...props }) => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ gender, setGender ] = useState('')
    const [ address, setAddress ] = useState('')

    const onSubmitRegistrasi = (e) => {
        e.preventDefault()
        dataRegistrasi({
            name,
            email,
            password,
            gender,
            address
        })
    }

    return (
        <section>
            <Form onSubmit={(e) => onSubmitRegistrasi(e)}>
                <Form.Row>
                    <Form.Group as={Col} xs={12} md={6}>
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={6} md={3}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} xs={6} md={3}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={6} md={3}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" name="gender" onChange={(e) => setGender(e.target.value)}>
                            <option></option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} xs={6} md={6}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" name="address" onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </section>
    )
}

export default RenderRegistrasi;