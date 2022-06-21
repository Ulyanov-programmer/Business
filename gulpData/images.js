import squoosh from 'gulp-libsquoosh';
import imagemin from 'gulp-imagemin';

export function images() {
	return gulp.src(paths.scr.images)
		.pipe(
			global.if(global.isProd, gulp.dest(paths.build.images))
		)
		.pipe(
			global.if(global.isProd,
				imagemin({}),
			)
		)
		.pipe(
			global.if(global.isProd,
				squoosh({
					webp: {},
					avif: {},
				}),
			)
		)

		.pipe(gulp.dest(paths.build.images))
		.pipe(browsersync.stream());
}