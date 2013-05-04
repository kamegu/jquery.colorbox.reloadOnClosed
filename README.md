jquery.colorbox.reloadOnClosed
==============================

This is plugin for [colorbox](http://www.jacklmoore.com/colorbox/).

With this, you can reload(refresh) parent page easily when box is closed.

If you want to reload, call $.colorbox.reloadOnClosed() before closing box.
By default, reloading function is location.reload(true), and you can change with  $.colorbox.reloadOnClosed({reloadFunc: function(){.....};}).
