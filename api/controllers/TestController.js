/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	getTest: async (req, res) => {
		let createTest = await Test.create({name: "test"});
		console.log('In TestController: createTest: ', createTest);
		return res.json({
			success: true,
			data: createTest,
			message: 'A new test created successfully!'
		})
	}
};

