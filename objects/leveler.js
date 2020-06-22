const React = require("react");
const { Text, Box } = require("ink");
module.exports = (props) => (
	<Box marginLeft={props.x + props.minX} {...props}>
		<Text>{props.char}</Text>
	</Box>
);
