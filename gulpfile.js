var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');
var download = require("gulp-download");

var xml_url = 'http://events.skokielibrary.info/evanced/lib/eventsxml.asp?dm=exml&lib=all&pub=0&nd=7';

gulp.task('events', function() {
  return download(xml_url)
    .pipe(rename('events.xml'))
    .pipe(gulp.dest('data'));
});

gulp.task('events_json', ['events'], function(){
    gulp.src('data/events.xml')
        .pipe(xml2json())
        .pipe(rename('events.json'))
        .pipe(gulp.dest('data'));
});

gulp.task('default', ['events', 'events_json']);
