import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const Layout = (props) => {
    return (
        <Aux>
            <Navigation />
            <Grid>
                <main>
                    {props.children}
                </main>
            </Grid>
        </Aux>

    );
}

export default Layout;