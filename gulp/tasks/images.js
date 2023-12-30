import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(`${app.path.srcFolder}/img/**/*.{jpg,png,jpeg,gif,webp}`)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "IMAGES",
      message: "Error: <%= error.message %>"
    })))
    .pipe(app.plugins.newer(`${app.path.buildFolder}/img/`))
    .pipe(webp())
    .pipe(app.gulp.dest(`${app.path.buildFolder}/img/`))
    // .pipe(app.gulp.src(`${app.path.srcFolder}/img/**/*.{jpg,png,jpeg,gif,webp}`))
    // .pipe(app.plugins.newer(`${app.path.buildFolder}/img/`))
    // .pipe(imagemin({
    //   progressive: true,
    //   svgoPlugins: [{ removeViewBox: false }],
    //   interlaced: true,
    //   optimizationLevel: 3 // 0 to 7
    // }))
    .pipe(app.gulp.dest(`${app.path.buildFolder}/img/`))
    .pipe(app.gulp.src(`${app.path.srcFolder}/img/**/*.svg`))
    .pipe(app.gulp.dest(`${app.path.buildFolder}/img/`))
    .pipe(app.plugins.browsersync.stream())

}