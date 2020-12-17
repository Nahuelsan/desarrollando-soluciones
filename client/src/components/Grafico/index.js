import React from 'react';
function Grafico(){
/*     var w = 500;
    var h = 300;
    var svg = d3.select('body')
                .append('svg')
                .attr('width', w);
    svg.selectAll("rect")
        .data(datos)
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 20)
        .attr('height', 100)

    .attr('X', function(d, i){
        return 1*21 +30
        })
        .attr('height', function(d){
            return d;
        }) */
    return(
        <div>
            <p>2019</p>
            <svg width="400" height="50">
                <rect x="0" y="10" width="300" height="9" fill="steelblue"/>
            </svg>
            <p>2020</p>
            <svg width="400" height="50">
                <rect x="0" y="0" width="800" height="10" fill="crimson" />
            </svg>
        </div>
    )
}

export default Grafico;