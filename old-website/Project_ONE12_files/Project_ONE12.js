// Created by iWeb 3.0.4 local-build-20120428

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,345),url:'Project_ONE12_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Project_ONE12_files/stroke_1.png'},{rect:new IWRect(1,-1,413,2),url:'Project_ONE12_files/stroke_2.png'},{rect:new IWRect(414,-1,3,2),url:'Project_ONE12_files/stroke_3.png'},{rect:new IWRect(414,1,3,345),url:'Project_ONE12_files/stroke_4.png'},{rect:new IWRect(414,346,3,2),url:'Project_ONE12_files/stroke_5.png'},{rect:new IWRect(1,346,413,2),url:'Project_ONE12_files/stroke_6.png'},{rect:new IWRect(-1,346,2,2),url:'Project_ONE12_files/stroke_7.png'}],new IWSize(415,347))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Project_ONE12_files/Project_ONE12Moz.css')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Project_ONE12_files','shapeimage_1','0');fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
