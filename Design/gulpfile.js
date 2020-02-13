const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
 
function scssTask(){    
  return src('./sass/*scss')
      .pipe(sass())
      .pipe(postcss([ autoprefixer(), cssnano() ]))
      .pipe(dest('dist')
  );
}

function watchTask(){
  watch('./sass/*scss', scssTask);
}

exports.default = series(scssTask, watchTask);