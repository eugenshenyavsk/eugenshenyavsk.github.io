module.exports= function (grunt) {


    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/dist/script.main.min.js'
            }
        },
        uglify: {
            dist:
                {
                    src: ['js/dist/script.main.min.js'],
                    dest: 'js/dist/script.main.min.js'
                }
        },
        concat_css: {
            dist: {
                src: ['css/src/*.css'],
                dest: 'css/dist/style.main.css'
            }
        },
        revizor: {
            options: {},
            src: ['css/dist/style.main.css'],
            dest: 'dist/'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-revizor');


    grunt.registerTask('default',['concat','uglify','concat_css','revizor']);

};