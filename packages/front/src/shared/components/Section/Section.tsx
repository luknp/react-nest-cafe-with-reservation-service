import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as styles from './section.module.scss';

interface SectionProps {
    children?: React.ReactNode;
    isFullHeight?: boolean;
    style?: React.CSSProperties;
    id?: string;
}

export const Section: React.FC<SectionProps> = (props: SectionProps) => {
    const sectionClassNames = props.isFullHeight ?
        [styles.pageSection, styles.pageSectionFullHeight].join(' ') :
        styles.pageSection;

    return (
        <section style={props.style} className={sectionClassNames} id={props.id}>
            <Container>
                <Row>
                    <Col className={styles.pageSectionCol}>
                        {props.children}
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Section;
