import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { cityName, typeName } from './data';

const RadioButton = ({ type }) => {
    console.log(type);
    const data = type === 'typeName' ? typeName : cityName
    return (
        <>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    {data.map((item) => {
                        return (
                            <>
                                <FormControlLabel
                                    value={item}
                                    control={<Checkbox color="primary" />}
                                    label={item}
                                    labelPlacement={item}
                                />
                            </>
                        )
                    })}
                </FormGroup>
            </FormControl>
        </>
    )
}

export default RadioButton;