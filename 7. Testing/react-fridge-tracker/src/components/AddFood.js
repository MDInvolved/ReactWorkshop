import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AddFood = (props) => {
    const {
        foodModelToAdd,
        onFoodNameChange,
        onFoodAmountChange,
        onClickAdd
    } = props;

    return (
        <div className="section">
            <Typography variant="title">
                Add Food
            </Typography>
            <div className="col s3">
                <TextField
                    id="foodName"
                    name="name"
                    placeholder="Name of the food"
                    value={foodModelToAdd.name}
                    onChange={onFoodNameChange}
                />
            </div>
            <div className="col s3">
                <TextField
                    id="foodAmount"
                    name="amount"
                    placeholder="Amount of food"
                    value={foodModelToAdd.amount}
                    onChange={onFoodAmountChange}
                    type="number"
                />
            </div>
            <div className="col s6">
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    id="addFoodButton"
                    onClick={onClickAdd}
                    disabled={!foodModelToAdd.name || foodModelToAdd.amount < 1}>
                    Add food
                </Button>
            </div>
        </div>);
}

AddFood.defaultProps = {
    foodModelToAdd: { name: '', amount: 0 }
}

AddFood.propTypes = {
    foodModelToAdd: PropTypes.object.isRequired,
    onFoodNameChange: PropTypes.func.isRequired,
    onFoodAmountChange: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired
}

export default AddFood;