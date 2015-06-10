module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  uglify: {
    my_target: {
      files: {
        'scripts.min.js': ['../scripts.js']
      }
    }
  },

  jshint: {
    all: ['Gruntfile.js']
  },

  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/css',
      src: ['style.css', 'style.min.css'],
      dest: 'release/css',
      ext: '.min.css'
    }]
  }
},

sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['css/main.scss'],
        dest: 'css/main.css',
        ext: '.css'
      }]
    }
  },

    imagemin: {   
          dynamic: {                         // Another target 
      files: [{
        expand: true,                  // Enable dynamic expansion 
        cwd: 'src/',                   // Src matches are relative to this path 
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
        dest: 'dist/'                  // Destination path prefix 
      }]
    }
  }


});


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  // Load the plugin that provides the "imagemin" task.
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'cssmin', 'sass', 'imagemin']);

};