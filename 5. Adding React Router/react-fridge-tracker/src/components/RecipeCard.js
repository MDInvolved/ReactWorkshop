import React from 'react'
import PropTypes from "prop-types";

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const RecipeCard = (props) => {
    const model = props.recipeModel;
    return (
        <div>
            {model ? (
                <Card>
                    <CardMedia src={model.imageUrl} >
                        <img src={model.imageUrl} style={{ width: 'auto', height: '200px' }} alt="Not found" />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {model.name}
                        </Typography>
                        <Typography component="p">
                            {model.text}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}

RecipeCard.propTypes = {
    recipeModel: PropTypes.object
};

//add prop checking
export default RecipeCard