import React from 'react'
import { Grid, Card, CardActionArea, Typography, CardContent } from '@mui/material'







function Categories() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea >
                            <CardContent>
                                <Typography>Click me!</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>Card 2</Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>card 3</Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>Card 4</Card>
                </Grid>

            </Grid>


        </div>



    )
}

export default Categories;