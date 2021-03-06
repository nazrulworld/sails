
module.exports = function builtInMiddlewareLoader (app, wares, sails) {

	// Use the middleware in the correct order
	if (wares.startRequestTimer) app.use(wares.startRequestTimer);
	if (wares.cookieParser) app.use(wares.cookieParser);
	if (wares.session) app.use(wares.session);
	if (wares.bodyParser) app.use(wares.bodyParser);
	if (wares.handleBodyParserError) app.use(wares.handleBodyParserError);
	if (wares.methodOverride) app.use(wares.methodOverride);
	if (sails.config.express.customMiddleware) {
		// Inject custom middleware
		sails.config.express.customMiddleware(app);
	}
	if (wares.poweredBy) app.use(wares.poweredBy);
	if (wares.router) app.use(wares.router);
	if (wares.www) app.use(wares.www);
	if (wares.favicon) app.use(wares.favicon);
	if (wares[404]) app.use(wares[404]);
	if (wares[500]) app.use(wares[500]);
};
