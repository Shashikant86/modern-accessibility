module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        accessibility: {
            options : {
                accessibilityLevel: 'WCAG2A',
                domElement: false,
                force: true,
                ignore : [
                    'WCAG2A.Principle1.Guideline1_1.1_1_1.G73,G74',
                    'WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81'
                ]
            },
            test : {
                files: [{
                    expand  : true,
                    cwd     : 'html',
                    src     : ['*.html'],
                    dest    : 'reports/',
                    ext     : '-report.txt'
                }]
            }
        },
        a11y: {
            dev: {
                options: {
                    urls: ['www.google.co.uk', 'dist/**/*.html']
                }
            }
        },

        tenon: {
            /* Set most Tenon options in external file */
            options: {
                config: '.tenonrc'
            },

            /* Test em all under default settings */
            all: {
                src: [
                    'html/*.html'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-accessibility');
    grunt.loadNpmTasks('grunt-a11y');
    grunt.loadNpmTasks('grunt-tenon-client');

};
