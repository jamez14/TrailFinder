module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

//example taken from: http://thecrumb.com/2014/03/15/using-grunt-for-live-reload/
grunt.initConfig({

    connect: {
        server: {
          options: {
            port: 3000,
            //base: '<%= build_dir %>',
            base: 'www/',
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: true,
            open: true
          }
        }
    },
    

    //https://github.com/gruntjs/grunt-contrib-sass
    sass: {
        dist: {
            files: {
                'www/styles/app.css': 'www/sass/app.scss'
            }
        }
    },

    //https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      combine: {
        files: {
          'www/styles/app.min.css': ['www/styles/app.css']
        }
      }
    },

    //combine files like this: 'assets/js/output.js': ['js/input.js', 'js/input2.js']
    uglify: {
        scriptz: {
          files: {
            'www/js/app.min.js': 'www/js/app.js'
          }
        }
    },

    watch: {
        all: {
                files: ['*.html', 'sass/*.scss', 'docs/*'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true
            }
        }
    }

    });

    grunt.registerTask('build', ['sass', 'cssmin', 'uglify']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);

};
    
   
    