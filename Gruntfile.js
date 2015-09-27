module.exports = function (grunt) {
    var buildDir = 'target/coins_single_page_project/static/js';
    var devDir = 'public/dev';
    var jsSrc = 'public/js/**/*.js';
    var lessSrc = 'public/css/**/*.less';
    var builtApp = 'target/coins_single_page_project/static/js/bundle.js';
    grunt.initConfig({
            clean: {
                build: [buildDir],
                dev: [devDir]
            },
            browserify: {
                options: {
                    transform: ['brfs'],
                    debug: true
                },
                release: {
                    files: {
                        'target/coins_single_page_project/static/js/bundle.js': jsSrc
                    }
                },
                dev: {
                    files: {
                        'public/dev/js/bundle.js': jsSrc
                    }
                }
            },
            jshint: ['Gruntfile.js', jsSrc],
            less: {
                release: {
                    files: {
                        'target/coins_single_page_project/static/css/compiled.css': [lessSrc]
                    }
                },
                dev: {
                    files: {
                        'public/dev/css/compiled.css' : [lessSrc]
                    }
                }
            },
            uglify: {
                bundle: {
                    files: {
                        'target/coins_single_page_project/static/js/bundle.min.js': builtApp
                    }
                }
            }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('lint', 'Lint javascript code with jshint', ['jshint']);
    grunt.registerTask('buildJS', 'Clean build directory,  bundle and minificate javascript code' ,['clean:build', 'browserify:release', 'uglify:bundle']);
    grunt.registerTask('build', 'Build all', ['lint', 'buildJS', 'less:release']);
    grunt.registerTask('dev', 'Create javascript code ready to test in dev mode', ['clean:dev', 'lint', 'browserify:dev', 'less:dev']);
};