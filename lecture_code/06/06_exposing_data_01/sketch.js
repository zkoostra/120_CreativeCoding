function setup() {
    createCanvas( windowWidth, 600 );
}

// declare an independent variable for x_pos
var x_pos = 0;

function draw() {
    background( 'rgb(33, 66, 62)' );

    // Map the x_pos to an exponential based Y-position
    var y_pos = height - ((x_pos / width) ** 3) * height;
    // expose the value of the x and y loc's variable
    noStroke();
    text( x_pos, 20, 80 );
    text( y_pos, 20, 100 );

    // draw an ellipse
    noStroke();
    fill(255);
    ellipse( x_pos, y_pos, 30 );

    // draw a reference diagonal line
    stroke('red');
    line(0, height, width, 0);

    // update the x_pos, bound it by the screen
    x_pos += 5;
    x_pos %= width;
}
