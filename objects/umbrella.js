const React = require("react");
const { Text, Box } = require("ink");
module.exports = (props) => (
	<Box flexDirection="column" {...props}>
		<Box marginTop={-1} marginLeft={0}>
			<Text>⛱️</Text>
		</Box>
		<Box marginTop={-1} marginLeft={2}>
			<Text>⛱️</Text>
		</Box>
		<Box marginLeft={0}>
			<Text color="#deb887">█</Text>
			<Text color="#deb887">█</Text>
			<Text color="#deb887">█</Text>
			<Text color="#deb887">█</Text>
		</Box>
	</Box>
);
