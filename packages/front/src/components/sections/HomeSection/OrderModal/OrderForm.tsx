import { Formik } from 'formik';
import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import { IReservationFormProperties } from './IReservationFormProperties';
// import { useForm } from "react-hook-form";
// import * as styles from "./orderModal.module.scss";
import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';
import moment from 'moment';
import pl from 'date-fns/locale/pl'; // the locale you want
import { timePeriodValues } from './OrderModal';
registerLocale('pl', pl); // register it with the name you want

interface IOrderFormProps {
    onSubmit: (values: IReservationFormProperties) => void | Promise<any>;
    formInitialValues: IReservationFormProperties;
}

const validate = (values: IReservationFormProperties) => {
    const errors: any = {};
    if (!/^\d+$/.test(values.peopleNumber)) {
        errors.peopleNumber = 'Niepoprawna liczba osób';
    } else {
        if (parseInt(values.peopleNumber, 10) > 6) {
            errors.peopleNumber = 'Za duża liczba osób (max 6)';
        }
    }
    if (!values.firstName) {
        errors.firstName = 'Imię jest wymagane';
    } else if (!/^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]+$/.test(values.firstName)) {
        errors.firstName = 'Błędne imię';
    }
    if (!values.lastName) {
        errors.lastName = 'Nazwisko jest wymagane';
    } else if (!/^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż]+$/.test(values.lastName)) {
        errors.lastName = 'Błędne nazwisko';
    }
    if (!values.email) {
        errors.email = 'Email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) {
        errors.email = 'Niepoprawny adres email';
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = 'Numer telefonu jest wymagany';
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(values.phoneNumber)) {
        errors.phoneNumber = 'Niepoprawny numer telefonu';
    }

    return errors;
};

export const OrderForm: React.FC<IOrderFormProps> = (props: IOrderFormProps) => {
    const { onSubmit, formInitialValues } = props;
    const [pickedDate, setDate] = React.useState(formInitialValues.startTime);

    // if (moment(pickedDate).day === )

    const filterPassedTime = (timePeriod) => {
        const currentDate = new Date();
        const selectedDate = new Date(timePeriod);
        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <Formik
            initialValues={formInitialValues}
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={onSubmit}
        >
            {
                ({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form onSubmit={handleSubmit} className='mt-3'>
                        <Form.Group controlId='formDatetime'>
                            <Form.Label>Data i godzina</Form.Label>
                            <div>
                                <DatePicker
                                    selected={pickedDate}
                                    onChange={(date) => {
                                        setDate(date);
                                        values.startTime = date;
                                    }}
                                    showTimeSelect
                                    popperPlacement='end'
                                    locale='pl'
                                    filterTime={filterPassedTime}
                                    dateFormat='MMMM d, yyyy  hh:mm aa'
                                    shouldCloseOnSelect={false}
                                    timeIntervals={15}
                                    showDisabledMonthNavigation
                                    // excludeTimes={[
                                    //     setHours(setMinutes(new Date(), 0), 17),
                                    //   ]}
                                    minDate={new Date()}
                                    maxDate={moment().add(3, 'days').toDate()}
                                    minTime={moment().add(2, 'hours').toDate()}
                                    maxTime={moment().set('hour', 20).toDate()}
                                />
                            </div>
                        </Form.Group>
                        <Form.Group onChange={handleChange} controlId='formTimePeriod'>
                            <Form.Label>Czas</Form.Label>
                            <Form.Control as='select'>
                                {timePeriodValues.map((value, index) => (
                                    <option>{value + 'm'}</option>
                                ))}
                                <option>Więcej</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formPersonCnt'>
                            <Form.Label>Liczba osób</Form.Label>
                            <Form.Control
                                type='text'
                                name='peopleNumber'
                                value={values.peopleNumber}
                                onChange={handleChange}
                                placeholder='2'
                                isInvalid={!!errors.peopleNumber}
                                isValid={touched.peopleNumber && !errors.peopleNumber}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.peopleNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='formFistName'>
                            <Form.Label>Imię</Form.Label>
                            <Form.Control
                                type='text'
                                name='firstName'
                                value={values.firstName}
                                onChange={handleChange}
                                placeholder='Jan'
                                isInvalid={!!errors.firstName}
                                isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.firstName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='formBasicLastName'>
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control
                                type='text'
                                name='lastName'
                                value={values.lastName}
                                onChange={handleChange}
                                placeholder='Nowak'
                                isInvalid={!!errors.lastName}
                                isValid={touched.lastName && !errors.lastName}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.lastName}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='formBasicEmailll'>
                            <Form.Label>Adres email</Form.Label>
                            <Form.Control
                                type='text'
                                name='email'
                                placeholder='name@example.com'
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                isValid={touched.email && !errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='formPhoneNr'>
                            <Form.Label>Nr telefonu</Form.Label>
                            <Form.Control
                                type='text'
                                name='phoneNumber'
                                placeholder='516777654'
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.phoneNumber}
                                isValid={touched.phoneNumber && !errors.phoneNumber}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {errors.phoneNumber}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='exampleForm.ControlTextarea1'>
                            <Form.Label>Dodatkowe informacje</Form.Label>
                            <Form.Control as='textarea' rows={3}
                                type='text'
                                name='extraInfo'
                                maxLength={200}
                                value={values.extraInfo}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId='rememberMe'>
                            <Form.Check type='checkbox' label='Zapamiętaj mnie!'
                                value={values.extraInfo}
                                onChange={handleChange} />
                        </Form.Group>

                        {/* {ordered && <AlertBox status={orderStatus} />} */}
                        <Button variant='primary' type='submit' block>
                            Rezerwuj
                    </Button>
                    </Form>
                )
            }
        </Formik >
    );
};
