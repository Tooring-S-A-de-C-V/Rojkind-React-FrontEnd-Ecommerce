import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import FilterStyle from "../filter.style";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const Tags =  () => {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Folk' },
        { key: 1, label: 'Auckland' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <ul className="abc">
            {chipData.map((data) => {
                let icon;
                return (
                    <li key={data.key} className="d-inline-block" style={{color:"#f1573a"}}>
                        <div
                            icon={icon}
                            onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                        >{data.label}<button type="button" className="close" aria-label="Close" style={{color:"#f1573a"}}>
                        <span aria-hidden="true">&times;</span>
                      </button></div>
                    </li>
                );
            })}
            <span className="a133_814 d-inline-block tag-padding" style={{color:"#f1573a"}}>💖 SAVE THIS SEARCH</span>
        </ul>
    );
}
<style jsx>{FilterStyle}</style>
export default Tags;