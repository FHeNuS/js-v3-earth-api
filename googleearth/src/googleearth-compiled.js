var j=true,k=window,l=document,n=Math;function o(a,c){return a.width=c}function p(a,c){return a.position=c}function q(a,c){return a.height=c}function r(a,c){return a.zIndex=c}var s="appendChild",t="createElement",u="getCoordinates",w="getView",x="pushLatLngAlt",y="setTimeout",z="style",A="getFeatures",B="InfoWindow",C="maps",D="setStyleSelector",E="earth",F="prototype",G="setGeometry",I="substring",J="parentNode",K="event";
function L(a){if(!google||!google[E])throw"google.earth not loaded";if(!google[E].isSupported())throw"Google Earth API is not supported on this system";if(!google[E].isInstalled())throw"Google Earth API is not installed on this system";this.k="http://maps.google.com/mapfiles/kml/paddle/red-circle.png";this.b=a;this.j=a.getDiv();this.d=false;this.e="Earth";this.g={};this.i=null;this.h=0;aa(this);ba(this)}k.GoogleEarth=L;L.MAP_TYPE_ID="GoogleEarthAPI";L[F].m=function(){return this.a};
L[F].getInstance=L[F].m;
function aa(a){var c=a.b,d={tileSize:new google[C].Size(256,256),maxZoom:19,name:a.e,alt:a.e,getTile:function(b,f,e){return e[t]("DIV")}};c.mapTypes.set("GoogleEarthAPI",d);c.setOptions({mapTypeControlOptions:{mapTypeIds:[google[C].MapTypeId.ROADMAP,google[C].MapTypeId.SATELLITE,"GoogleEarthAPI"]}});google[C][K].addListener(c,"maptypeid_changed",function(){if(a.b.getMapTypeId()=="GoogleEarthAPI"){var b;a:{b='title="'+a.e+'"';for(var f=a.c[J].childNodes,e=0,g;g=f[e];e++)if(g.innerHTML.indexOf(b)!=-1){b=
g;break a}b=void 0}f=b;e=f[z].zIndex;g=a.c[J].childNodes;for(var h=0,i;i=g[h];h++){i.__gme_ozi=i[z].zIndex;r(i[z],0)}f.__gme_ozi=e;r(a.c[z],r(f[z],2E3));f=a.f=l[t]("IFRAME");f.src="javascript:false;";f.scrolling="no";f.frameBorder="0";e=f[z];r(e,-1E5);o(e,q(e,"100%"));p(e,"absolute");e.left=e.top=0;b[s](f);a.c[z].display="";a.d=j;a.a?M(a):ca(a)}else da(a)})}
function M(a){a.g={};N(a,j);for(var c=a.a[A]();c.getFirstChild();)c.removeChild(c.getFirstChild());a.h++;c={};for(var d=O,b=0,f;f=d[b];b++)c[f]=P(a,f);for(d=0;b=c.Marker[d];d++){var e=a;if(b.getPosition()){f=e.a;var g=R(e,b);b.getTitle()&&g.setName(b.getTitle());var h=f.createIcon("");b.getIcon()?h.setHref(b.getIcon()):h.setHref(e.k);e=f.createStyle("");e.getIconStyle().setIcon(h);g[D](e);e=f.createPoint("");e.setLatitude(b.getPosition().lat());e.setLongitude(b.getPosition().lng());g[G](e);f[A]()[s](g)}}for(d=
0;b=c.Polygon[d];d++){h=a;g=b;b=h.a;f=R(h,g);e=b.createPolygon("");f[G](e);h=S(h,g);f[D](h);h=b.createLinearRing("");e.setOuterBoundary(h);e=h[u]();g=g.getPath().getArray();h=0;for(var i=void 0;i=g[h];h++)e[x](i.lat(),i.lng(),0);b[A]()[s](f)}for(d=0;b=c.Polyline[d];d++){e=a;g=b;b=e.a;f=R(e,g);h=b.createLineString("");h.setTessellate(j);f[G](h);e=S(e,g);f[D](e);e=h[u]();g=g.getPath().getArray();h=0;for(i=void 0;i=g[h];h++)e[x](i.lat(),i.lng(),0);b[A]()[s](f)}for(d=0;b=c.Rectangle[d];d++){g=a;var m=
b;b=g.a;e=m.getBounds();f=e.getNorthEast();e=e.getSouthWest();h=R(g,m);h[G](b.createPolygon(""));i=b.createLinearRing("");g=S(g,m);h[D](g);g=i[u]();g[x](f.lat(),f.lng(),0);g[x](f.lat(),e.lng(),0);g[x](e.lat(),e.lng(),0);g[x](e.lat(),f.lng(),0);g[x](f.lat(),f.lng(),0);h.getGeometry().setOuterBoundary(i);h.setName("placemark");b[A]()[s](h)}for(d=0;b=c.Circle[d];d++){i=a;m=b;b=i.a;f=m.getCenter();g=m.getRadius();e=R(i,m);e[G](b.createPolygon(""));h=b.createLinearRing("");i=S(i,m);e[D](i);for(i=0;i<25;i++){var Q=
f,v=g;m=14.4*i;v/=6378137;m*=n.PI/180;var H=Q.lat()*(n.PI/180);Q=Q.lng()*(n.PI/180);var W=n.cos(v);v=n.sin(v);var X=n.sin(H);H=n.cos(H);var Y=W*X+v*H*n.cos(m);m=new google[C].LatLng(n.asin(Y)/(n.PI/180),(Q+n.atan2(v*H*n.sin(m),W-X*Y))/(n.PI/180));h[u]()[x](m.lat(),m.lng(),0)}e.getGeometry().setOuterBoundary(h);e.setName("placemark");b[A]()[s](e)}for(d=0;b=c.KmlLayer[d];d++)ea(a,b.getUrl());for(d=0;b=c.GroundOverlay[d];d++){g=b.getBounds();f=g.getNorthEast();g=g.getSouthWest();e=a.a;h=e.createGroundOverlay("");
h.setLatLonBox(e.createLatLonBox(""));h.getLatLonBox().setBox(f.lat(),g.lat(),f.lng(),g.lng(),0);h.setIcon(e.createIcon(""));h.getIcon().setHref(b.getUrl());e[A]()[s](h)}}
function N(a,c){var d=a.b.getCenter(),b=a.a.createLookAt("");b.setRange(n.pow(2,27-a.b.getZoom()));b.setLatitude(d.lat());b.setLongitude(d.lng());b.setHeading(0);b.setAltitude(0);var f=a.a;if(c){f.getOptions().setFlyToSpeed(5);f[w]().setAbstractView(b);b.setTilt(15);f.getOptions().setFlyToSpeed(0.75);k[y](function(){f[w]().setAbstractView(b)},200);k[y](function(){f.getOptions().setFlyToSpeed(1)},250)}else f[w]().setAbstractView(b)}
function T(a,c){if(a[0]=="#")a=a[I](1,9);if(typeof c=="undefined")c="FF";else{c=parseInt(parseFloat(c)*255,10).toString(16);if(c.length==1)c="0"+c}return[c,a[I](4,6),a[I](2,4),a[I](0,2)].join("")}function R(a,c){var d=a.h+"GEV3_"+c.__gme_id;a.g[d]=c;return a.a.createPlacemark(d)}function ea(a,c){var d=a.a;google[E].fetchKml(d,c,function(b){b?d[A]()[s](b):k[y](function(){alert("Bad or null KML.")},0)})}
function S(a,c){var d=a.a.createStyle(""),b=d.getPolyStyle(),f=d.getLineStyle();f.setWidth(U(a,c,"strokeWeight",3));var e=U(a,c,"strokeOpacity",1),g=U(a,c,"fillOpacity",0.3),h=U(a,c,"strokeColor","#000000"),i=U(a,c,"fillColor","#000000");f.getColor().set(T(h,e));b.getColor().set(T(i,g));return d}function U(a,c,d,b){a=c.get(d);return typeof a=="undefined"?b:a}
function ca(a){google[E].createInstance(a.l,function(c){a.a=c;fa(a);M(a)},function(c){V(a);a.b.setMapTypeId(google[C].MapTypeId.ROADMAP);throw"Google Earth API failed to initialize: "+c;})}
function fa(a){var c=a.a;c.getWindow().setVisibility(j);var d=c.getNavigationControl();d.setVisibility(c.VISIBILITY_AUTO);d=d.getScreenXY();d.setYUnits(c.UNITS_INSET_PIXELS);d.setXUnits(c.UNITS_PIXELS);d=c.getLayerRoot();d.enableLayerById(c.LAYER_BORDERS,j);d.enableLayerById(c.LAYER_ROADS,j);google[C][K].addListener(a.b,"GEInfoWindowOpened",function(b){if(a.d){var f=a.a.createHtmlStringBalloon("");f.setFeature(a.i);f.setContentString(b.getContent());a.a.setBalloon(f)}});google[E].addEventListener(c.getGlobe(),
"click",function(b){var f=b.getTarget(),e=a.g[f.getId()];if(e){b.preventDefault();b=P(a,"InfoWindow");for(var g=0,h;h=b[g];g++)h.close();a.i=f;google[C][K].trigger(e,"click")}})}function ga(a){var c=a.a[w]().copyAsLookAt(a.a.ALTITUDE_RELATIVE_TO_GROUND),d=c.getRange();d=n.round(27-n.log(d)/n.log(2));!a.b.getZoom()==d?a.b.setZoom(d-1):a.b.setZoom(d);a.b.panTo(new google[C].LatLng(c.getLatitude(),c.getLongitude()))}
function da(a){if(a.d){ga(a);k[y](function(){N(a)},50);k[y](function(){V(a)},2200)}}function V(a){for(var c=a.c[J].childNodes,d=0,b;b=c[d];d++)b.__gme_ozi&&r(b[z],b.__gme_ozi);a.f[J].removeChild(a.f);a.f=null;a.c[z].display="none";a.d=false}
function ba(a){var c=a.j,d=a.c=l[t]("DIV");p(d[z],"absolute");o(d[z],0);q(d[z],0);d.index=0;d[z].display="none";var b=a.n=l[t]("DIV");o(b[z],c.clientWidth+"px");q(b[z],c.clientHeight+"px");p(b[z],"absolute");d[s](b);c=a.l=l[t]("DIV");p(c[z],"absolute");o(c[z],"100%");q(c[z],"100%");b[s](c);a.b.controls[google[C].ControlPosition.TOP_LEFT].push(d);google[C][K].addListener(a.b,"resize",function(){var f=a.n[z],e=a.j;o(f,e.clientWidth+"px");q(f,e.clientHeight+"px")})}
function P(a,c){var d=[],b=Z[c],f;for(f in b)if(b.hasOwnProperty(f)){var e=b[f];e.get("map")==a.b&&d.push(e)}return d}var Z={};function ha(a){var c=google[C][a][F];c.__gme_setMapOriginal=c.setMap;Z[a]={};google[C][a][F].setMap=function(d){if(d){if(!this.__gme_id){this.__gme_id=ia++;Z[a][this.__gme_id]=this}}else{delete Z[a][this.__gme_id];this.__gme_id=undefined}this.__gme_setMapOriginal(d)}}
for(var O=["Marker","Polyline","Polygon","Rectangle","Circle","KmlLayer","GroundOverlay","InfoWindow"],ia=0,ja=O,ka=0,$;$=ja[ka];ka++){ha($);if($=="InfoWindow"){google[C][B][F].o=google[C][B][F].open;Z.InfoWindow={};google[C][B][F].open=function(a,c){if(a){if(!this.__gme_id){this.__gme_id=ia++;Z[B][this.__gme_id]=this}}else{delete Z[B][this.__gme_id];this.__gme_id=undefined}google[C][K].trigger(a,"GEInfoWindowOpened",this);this.o(a,c)}}};
