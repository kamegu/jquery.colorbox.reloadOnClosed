if (jQuery && jQuery.colorbox) {
  jQuery.colorbox.reloadOnClosedSettings = {
  	reloadFunc: function() {location.reload(true);},
		needReloadParent: false
	};
	jQuery.colorbox.reloadOnClosed = function(options) {
		var reloadOnClosedSettings = jQuery.colorbox.reloadOnClosedSettings;
		if (options === undefined) {
			reloadOnClosedSettings.needReloadParent = true;
			return;
		};
		if (options.needReloadParent === true || options.needReloadParent === false) {
			reloadOnClosedSettings.needReloadParent = options.needReloadParent;
		}
		if (options.reloadFunc && (typeof options.reloadFunc === "function")) {
			reloadOnClosedSettings.reloadFunc = options.reloadFunc;
		} else if (options.reloadFunc === null) {
			reloadOnClosedSettings.reloadFunc = null;
		}
	};
	jQuery(document).on('cbox_open', function(){
		jQuery.colorbox.reloadOnClosedSettings.needReloadParent = false;
	});
	jQuery(document).on('cbox_closed', function(){
		var reloadOnClosedSettings = jQuery.colorbox.reloadOnClosedSettings;
		if (reloadOnClosedSettings.needReloadParent === true && reloadOnClosedSettings.reloadFunc && (typeof reloadOnClosedSettings.reloadFunc === "function")) {
			reloadOnClosedSettings.reloadFunc();
		}
	});
}
