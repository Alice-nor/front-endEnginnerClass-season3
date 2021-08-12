import React from 'react';
import Grid from '@material-ui/core/Grid';

// 隨機顏色編碼（16進位）
// 顏色由3個256的數字組成，256的3次方 = 16777615
function randomColor() {
    const code = Math.floor(Math.random()*16777615).toString(16);
    return '#'+code;
}

function Grid1() {
    return (
        <div>
            <Grid container>
                <Grid item xs={6} sm={2} md={8} lg={12} xl={3} style={{background:randomColor()}}>
                    This is Grid 1
                </Grid>
                <Grid item xs={6} sm={10} md={4} lg={12} xl={9} style={{background:randomColor()}}>
                    This is Grid 2
                </Grid>
            </Grid>
        </div>
    )
}


function Grid2() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div style={{background:randomColor()}}>Grid 1</div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{background:randomColor()}}>Grid 2</div>
                </Grid>
                <Grid item xs>
                    <div style={{background:randomColor()}}>Grid 3</div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{background:randomColor()}}>Grid 4</div>
                </Grid>
                <Grid item xs>
                    <div style={{background:randomColor()}}>Grid 5</div>
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <div style={{background:randomColor()}}>Grid 1</div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{background:randomColor()}}>Grid 2</div>
                </Grid>
            </Grid>
        </div>
    )
}



function App() {
    return (
        <Grid2 />
    )
}

export default App;
