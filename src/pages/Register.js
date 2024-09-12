import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Col, Container, FormGroup, FormLabel, Row } from "react-bootstrap";
import * as Yup from 'yup';
const Regsiter = ()=>{
    const [submitting,setSubmitting] = useState(false);
    const validationSchema = Yup.object({
        fullname: Yup.string()
            .min(6,"Độ dài tối thiểu là 6")
            .required("Vui lòng nhập thông tin"),
        email: Yup.string()
            .email("Vui lòng nhập đúng email")
            .required("Vui lòng nhập thông tin"),
        password: Yup.string()
            .min(6,"Độ dài tối thiểu là 6")
            .required("Vui lòng nhập thông tin"),
        streetAddress: Yup.string()
            .required("The Street Address field is required."),
        extendedAddress: Yup.string(),
        country: Yup.string()
            .required("The Country field is required."),
        state: Yup.string()
            .required("The State field is required."),
        city: Yup.string()
            .required("The City field is required."),
        zipCode: Yup.string()
            .required("The ZIP Code field is required.")
    });
    const values = {
        fullname:'',
        email:'',
        password:'',
        streetAddress: '',
        extendedAddress: '',
        country: 'United States',
        state: '',
        city: '',
        zipCode: ''
    }
    const formsubmit = ()=>{
        setSubmitting(true);
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1>Register</h1>
                    <Formik initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={formsubmit}
                    >
                        <Form>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Fullname</FormLabel>
                                <Field type="text" name="fullname" className="form-control"/>
                                <ErrorMessage name="fullname" component='p' style={{color: 'red'}} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Email</FormLabel>
                                <Field type="email" name="email" className="form-control"/>
                                <ErrorMessage name="email" component='p' style={{color: 'red'}} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Password</FormLabel>
                                <Field type="password" name="password" className="form-control"/>
                                <ErrorMessage name="password" component='p' style={{color: 'red'}} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Street Address</FormLabel>
                                <Field type="text" name="streetAddress" className="form-control"/>
                                <ErrorMessage name="streetAddress" component='p' style={{ color: 'red' }} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Extended Address</FormLabel>
                                <Field type="text" name="extendedAddress" className="form-control"/>
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Country</FormLabel>
                                <Field as="select" name="country" className="form-control">
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="USA">USA</option>
                                    <option value="VietNam">VietNam</option>
                                    <option value="Prance">Prance</option>
                                    <option value="Uc">Uc</option>
                                    {/* Add more options here if needed */}
                                </Field>
                                <ErrorMessage name="country" component='p' style={{ color: 'red' }} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>State</FormLabel>
                                <Field as="select" name="state" className="form-control">
                                    <option value="">Select a State</option>
                                    <option value="California">California</option>
                                    <option value="Texas">Texas</option>
                                    {/* Add more options here if needed */}
                                </Field>
                                <ErrorMessage name="state" component='p' style={{ color: 'red' }} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>City</FormLabel>
                                <Field type="text" name="city" className="form-control"/>
                                <ErrorMessage name="city" component='p' style={{ color: 'red' }} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>ZIP Code</FormLabel>
                                <Field type="text" name="zipCode" className="form-control"/>
                                <ErrorMessage name="zipCode" component='p' style={{ color: 'red' }} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <Button variant="primary" type="submit" disabled={submitting}>Register</Button>
                            </FormGroup>
                        </Form>
                    </Formik>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Regsiter;