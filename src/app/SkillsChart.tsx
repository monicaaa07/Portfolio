'use client'
import React, { useEffect } from 'react';
import * as d3 from 'd3';

const SkillsChart: React.FC = () => {

  useEffect(() => {
    // D3 code to create a basic bar chart
    const numericalData: number[] = [5, 6, 8, 7, 6, 6, 6, 9, 2, 2, 1, 2, 6, 10];
    const labelData = ["D3.js", "AmCharts", "Tableau", "Python", "Typescript", "HTML", "CSS", "SQL", "SSRS", "SSIS", "SSAS", "ML", "Node.js", "Linux"];
    // Select the existing chart and remove its contents
    const existingChart = d3.select('#bar-chart');
    existingChart.selectAll('*').remove();
    let svg = existingChart.append('svg').attr('width', 1000).attr('height', 800);

    const barWidth = 50;
    const barPadding = 10;

    // Create a color scale based on the values
    const colorScale = d3.scaleLinear<string>().domain([0, d3.max(numericalData)!]).range(['#ccece6', '#006d2c']);

    svg
      .selectAll('rect')
      .data(numericalData)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (barWidth + barPadding))
      .attr('y', (d) => 400 - 40)
      .attr('width', barWidth)
      .attr('height', (d) => 40)
      .attr('fill', (d) => colorScale(d));

    // Add labels to the center of each bar
    svg
      .selectAll('text')
      .data(numericalData)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * (barWidth + barPadding) + barWidth / 2)
      .attr('y', (d) => 400 - 40 / 2)
      .attr('text-anchor', 'middle') // Center the text horizontally
      .attr('alignment-baseline', 'middle') // Center the text vertically
      .attr('fill', 'white');

    // Add x-axis labels
    svg
      .selectAll('.x-axis-label')
      .data(labelData)
      .enter()
      .append('text')
      .text((d) => d)
      .attr('x', (d, i) => i * (barWidth + barPadding) + barWidth / 3)
      .attr('y', 400 + 30) // Adjust y to position below the x-axis
      .attr('text-anchor', 'middle') // Center the text horizontally
      .attr('alignment-baseline', 'middle') // Center the text vertically
      .attr('fill', 'white')
      .attr('class', 'x-axis-label')
      .attr('transform', (d, i) => `rotate(-45, ${i * (barWidth + barPadding) + barWidth / 2}, ${400 + 20})`) // Rotate each label individually
      .style('font-size', 12);

  }, []);

  return <div id="bar-chart" style={{marginTop:'-25%',marginLeft:'15%'}}></div>;
};

export default SkillsChart;
