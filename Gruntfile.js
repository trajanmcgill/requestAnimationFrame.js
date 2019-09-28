module.exports = function(grunt)
{
	// Project configuration.
	grunt.initConfig(
		{
			pkg: grunt.file.readJSON("package.json"),


			jshint:
			{
				options:
				{
					bitwise: true, browser: true, curly: false, eqeqeq: true, forin: true, immed: true, latedef: true, laxbreak: true, laxcomma: true, newcap: true,
					noarg: true, noempty: true, nonew: true, quotmark: "double", smarttabs: true, strict: true, trailing: true, undef: true, unused: true, validthis: true
				},

				requestAnimationFrame: { src: ["Source/requestAnimationFrame.js"] }
			}, // end jshint task definitions


			clean:
			{
				requestAnimationFrame: ["Build/**/*"]
			}, // end clean task definitions


			copy:
			{
				requestAnimationFrame: { src: ["Source/requestAnimationFrame.js"], dest: "Build/requestAnimationFrame.js" }
			}, // end copy task defitions


			uglify:
			{
				options: { sequences: false, verbose: true, warnings: true },

				requestAnimationFrame: { options: { banner: "/*! requestAnimationFrame.js */", screwIE8: false }, src: ["Source/requestAnimationFrame.js"], dest: "Build/requestAnimationFrame.min.js" },
				requestAnimationFrame_DeUglify: { options: { beautify: true }, src: ["Build/requestAnimationFrame.min.js"], dest: "Build/requestAnimationFrame.min.max.js" }
			} // end uglify task definitions
		});
	
	
	// Load the plugins
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	

	// Define the user tasks
	grunt.registerTask("lint_all", ["jshint:requestAnimationFrame"]);
	grunt.registerTask("clean_all", ["clean:requestAnimationFrame"]);
	grunt.registerTask("build_all", ["copy:requestAnimationFrame", "uglify:requestAnimationFrame"]);
	grunt.registerTask("rebuild_all", ["clean_all", "build_all"]);
	grunt.registerTask("default", ["lint_all", "rebuild_all"]);
};
