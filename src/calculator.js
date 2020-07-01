import React from 'react';
import {Button,  Grid} from '@material-ui/core';
import classes from './Calculator.module.css';

function calculator(props) {
    return(
        <div>
            <Grid  container  style={{width: '320px', height: '420px', margin: 'auto', marginTop: '5%', border: '2px solid #ff5722', boxShadow: '0px 10px 20px 15px #ffe0b2, 15px 10px 20px 0 #ffe0b2'}}>
                <Grid style={{height: '0px'}} container item xs={12}>
                    
                    <input   value={props.curVal} className={classes.inputEl} readOnly type="text" />
                </Grid>
                <Grid container item xs={12} style={{height: '0px'}}>
                    <Grid item>
                        <Button onClick={props.handleACClick}  style={{height: '70px', width: '160px'}} size="large" color='default' variant="contained">AC</Button>

                    </Grid>
                    <Grid >
                        <Button onClick={props.handleDeleteClick} className={classes.border} size="large" color='secondary' variant="contained">DEL</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={props.handleOperations} style={{height: '70px', width: '76px'}} size="large" color='secondary' variant="contained">/</Button>

                    </Grid>

                </Grid>
               
                <Grid   style={{height: '0px'}} container item xs={12} >
                    <Grid >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">1</Button>
                    </Grid>
                    <Grid >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">2</Button>
                    </Grid>
                    <Grid >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">3</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleOperations} style={{height: '70px', width: '76px'}} size="large" color='secondary' variant="contained">x</Button>
                    </Grid>
                </Grid>
                <Grid style={{height: '0px'}} container item xs={12} >
                    <Grid >
                        <Button onClick={props.handleCurValueClick} className={classes.border}  size="large" color='primary' variant="contained">4</Button>
                    </Grid>
                    <Grid >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">5</Button>
                    </Grid>
                    <Grid >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">6</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleOperations} style={{height: '70px', width: '76px'}} size="large" color='secondary' variant="contained">-</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{height: '0px'}}>
                    <Grid item>
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">7</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">8</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">9</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleOperations} style={{height: '70px', width: '76px'}} size="large" color='secondary' variant="contained">+</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{height: '0px'}}>
                    <Grid item >
                        <Button onClick={props.handleCurValueClick} className={classes.border} size="large" color='primary' variant="contained">0</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleDot} className={classes.border} size="large" color='primary' variant="contained">.</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleMinusClick} className={classes.border} size="large" color='primary' variant="contained">-</Button>
                    </Grid>
                    <Grid item >
                        <Button onClick={props.handleFinalValue} style={{height: '70px', width: '76px'}} size="large" color='default' variant="contained">=</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default  calculator;
