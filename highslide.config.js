// Site-specific configuration settings for Highslide JS //
hs.graphicsDir = '/highslide/graphics/';
hs.showCredits = false;
hs.outlineType = 'custom';
hs.dimmingOpacity = .7;
hs.dimmingDuration = 200;
hs.align = 'center';
hs.allowMultipleInstances = false;
hs.blockRightClick = true;
hs.registerOverlay({
  html: '<div class="closebutton" onclick="return hs.close(this)" title="Close"></div>',
  position: 'top right',
  useOnHTML: true,
  fade: 2 // fading the semi-transparent overlay looks bad in IE
});
  
