import * as React from 'react';
import { Modal, Button, Tab, Row, Col, Nav } from 'react-bootstrap';
// import * as styles from "./orderModal.module.scss";
import './styles.scss';
import './darkStyles.scss';
import { OrderForm } from './OrderForm';
import { IReservationFormProperties } from './IReservationFormProperties';
import axios from 'axios';
import { IReservation } from '../../../../shared/interfaces/IReservation';
import { AlertBox } from './AlertBox';
import SpinnerOverlay from '../../../../shared/components/SpinnerOverlay';
import { useAppContext, Themes } from '../../../../context/AppContext';
import moment from 'moment';

interface IOrderModalProps {
    show: boolean;
    handleShow(state: boolean): void;
}

export const timePeriodValues = [15, 30, 60, 120];

export const formInitialValues: IReservationFormProperties = {
    startTime: new Date(),
    timePeriod: timePeriodValues[0],
    peopleNumber: '2',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    extraInfo: '',
    rememberMe: false,
};

const useCurrentReservations = () => {
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchCurrentReservations = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Partial<IReservation[]>>('http://10.10.10.61:3000/reservations/current');
                setResult(
                    response.data.map(item => {
                        return item;
                    }),
                );
                setLoading(false);
            } catch (error) {
                setError('Coś poszło nie tak!');
                setLoading(false);
            }
        };

        fetchCurrentReservations();
    }, []);

    return [result, loading, error];
};

const useReservationRequestHandler = (reservationDto: IReservation, immediate = true) => {
    const [result, setResult] = React.useState<IReservation>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const requestReservation = async () => {
        try {
            setLoading(true);
            const response = await axios.post<IReservation>('http://10.10.10.61:3000/reservations', reservationDto);
            setResult(response.data);
            setLoading(false);
        } catch (error) {
            setError('Coś poszło nie tak!');
            setLoading(false);
        }
    };

    const execute = React.useCallback(() => {
        return requestReservation();
    }, [reservationDto]);

    React.useEffect(() => {

        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return [execute as () => Promise<void>, result, loading, error];
};

export const OrderModal: React.FC<IOrderModalProps> = ({
    handleShow,
    show,
}: IOrderModalProps) => {
    const [formValues, updateFormValues] = React.useState<IReservationFormProperties>(null);
    const [requestBody, setRequestBody] = React.useState<IReservation>(null);
    const [orderStatus, setOrderStatus] = React.useState(false);
    const [reservations, reservationsLoading, reservationsError] = useCurrentReservations();
    const [appState, dispatch] = useAppContext();
    const [execute, orderResponse, orderLoading, orderError] = useReservationRequestHandler(requestBody, false);

    React.useEffect(() => {
        setOrderStatus(false);
    }, [show]);

    const onOrderFormSubmit = (values: IReservationFormProperties) => {
        // tslint:disable-next-line:no-console
        console.dir(values);
        updateFormValues(values);

        const requestBodyObj: IReservation = {
            endTime: moment(values.startTime).add(values.timePeriod, 'minutes').toDate(),
            startTime: values.startTime,
            sits: parseInt(values.peopleNumber, 10),
            user: {
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                passwordHash: 'hash',
                phone: values.phoneNumber,
                phoneVerified: false,
                roles: [{ name: 'client' }],
            },
        };
        setOrderStatus(true);
        setRequestBody(requestBodyObj);
        // @ts-ignore
        execute();
    };
    return (
        <Modal show={show} onHide={() => handleShow(false)}>
            <div className={`modal-${appState.theme === Themes.light ? 'light' : 'dark'}`}>
                <Modal.Header closeButton>
                    <Modal.Title>Formularz rezerwacji</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                        <Row>
                            <Col sm={12}>
                                <Nav variant='pills' className='flex-row justify-content-center'>
                                    {/* <Nav.Item>
                                    <Nav.Link eventKey='first'>stolik</Nav.Link>
                                </Nav.Item> */}
                                    {/* <Nav.Item>
                                    <Nav.Link eventKey='second'>wydarzenie</Nav.Link>
                                </Nav.Item> */}
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey='first'>
                                        {
                                            reservationsLoading ?
                                                <SpinnerOverlay />
                                                :
                                                !orderStatus ?
                                                    <OrderForm
                                                        onSubmit={onOrderFormSubmit}
                                                        formInitialValues={formInitialValues}
                                                    />
                                                    :
                                                    <>
                                                        <AlertBox status={orderStatus} />
                                                    </>
                                        }
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => handleShow(false)}>
                        Zamknij
                </Button>
                </Modal.Footer>
            </div>
        </Modal>
    );
};
