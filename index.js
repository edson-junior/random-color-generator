import chalk from 'chalk';
import randomColor from 'randomcolor';

const hue = process.argv[2];
const luminosity = process.argv[3];
const color = randomColor({ hue, luminosity });
const colorOutput = chalk.hex(color);

// console.log({ hue, luminosity, color })

console.log(
  colorOutput(`
###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################
`),
);
