/* jqPlot 1.0.8r1250 | (c) 2009-2013 Chris Leonello | jplot.com
   jsDate | (c) 2010-2013 Chris Leonello
 */(function(c){c.jqplot.PointLabels=function(e){this.show=c.jqplot.config.enablePlugins;this.location="n";this.labelsFromSeries=false;this.seriesLabelIndex=null;this.labels=[];this._labels=[];this.stackedValue=false;this.ypadding=6;this.xpadding=6;this.escapeHTML=true;this.edgeTolerance=-5;this.formatter=c.jqplot.DefaultTickFormatter;this.formatString="";this.hideZeros=false;this._elems=[];c.extend(true,this,e)};var a=["nw","n","ne","e","se","s","sw","w"];var d={nw:0,n:1,ne:2,e:3,se:4,s:5,sw:6,w:7};var b=["se","s","sw","w","nw","n","ne","e"];c.jqplot.PointLabels.init=function(j,h,f,g,i){var e=c.extend(true,{},f,g);e.pointLabels=e.pointLabels||{};if(this.renderer.constructor===c.jqplot.BarRenderer&&this.barDirection==="horizontal"&&!e.pointLabels.location){e.pointLabels.location="e"}this.plugins.pointLabels=new c.jqplot.PointLabels(e.pointLabels);this.plugins.pointLabels.setLabels.call(this)};c.jqplot.PointLabels.prototype.setLabels=function(){var f=this.plugins.pointLabels;var h;if(f.seriesLabelIndex!=null){h=f.seriesLabelIndex}else{if(this.renderer.constructor===c.jqplot.BarRenderer&&this.barDirection==="horizontal"){h=(this._plotData[0].length<3)?0:this._plotData[0].length-1}else{h=(this._plotData.length===0)?0:this._plotData[0].length-1}}f._labels=[];if(f.labels.length===0||f.labelsFromSeries){if(f.stackedValue){if(this._plotData.length&&this._plotData[0].length){for(var e=0;e<this._plotData.length;e++){f._labels.push(this._plotData[e][h])}}}else{var g=this.data;if(this.renderer.constructor===c.jqplot.BarRenderer&&this.waterfall){g=this._data}if(g.length&&g[0].length){for(var e=0;e<g.length;e++){f._labels.push(g[e][h])}}g=null}}else{if(f.labels.length){f._labels=f.labels}}};c.jqplot.PointLabels.prototype.xOffset=function(f,e,g){e=e||this.location;g=g||this.xpadding;var h;switch(e){case"nw":h=-f.outerWidth(true)-this.xpadding;break;case"n":h=-f.outerWidth(true)/2;break;case"ne":h=this.xpadding;break;case"e":h=this.xpadding;break;case"se":h=this.xpadding;break;case"s":h=-f.outerWidth(true)/2;break;case"sw":h=-f.outerWidth(true)-this.xpadding;break;case"w":h=-f.outerWidth(true)-this.xpadding;break;default:h=-f.outerWidth(true)-this.xpadding;break}return h};c.jqplot.PointLabels.prototype.yOffset=function(f,e,g){e=e||this.location;g=g||this.xpadding;var h;switch(e){case"nw":h=-f.outerHeight(true)-this.ypadding;break;case"n":h=-f.outerHeight(true)-this.ypadding;break;case"ne":h=-f.outerHeight(true)-this.ypadding;break;case"e":h=-f.outerHeight(true)/2;break;case"se":h=this.ypadding;break;case"s":h=this.ypadding;break;case"sw":h=this.ypadding;break;case"w":h=-f.outerHeight(true)/2;break;default:h=-f.outerHeight(true)-this.ypadding;break}return h};c.jqplot.PointLabels.draw=function(x,j,v){var t=this.plugins.pointLabels;t.setLabels.call(this);for(var w=0;w<t._elems.length;w++){t._elems[w].emptyForce()}t._elems.splice(0,t._elems.length);if(t.show){var r="_"+this._stackAxis+"axis";if(!t.formatString){t.formatString=this[r]._ticks[0].formatString;t.formatter=this[r]._ticks[0].formatter}var E=this._plotData;var D=this._prevPlotData;var A=this._xaxis;var q=this._yaxis;var z,f;for(var w=0,u=t._labels.length;w<u;w++){var o=t._labels[w];if(o==null||(t.hideZeros&&parseInt(o,10)==0)){continue}o=t.formatter(t.formatString,o);f=document.createElement("div");t._elems[w]=c(f);z=t._elems[w];z.addClass("jqplot-point-label jqplot-series-"+this.index+" jqplot-point-"+w);z.css("position","absolute");z.insertAfter(x.canvas);if(t.escapeHTML){z.text(o)}else{z.html(o)}var g=t.location;if((this.fillToZero&&E[w][1]<0)||(this.fillToZero&&this._type==="bar"&&this.barDirection==="horizontal"&&E[w][0]<0)||(this.waterfall&&parseInt(o,10))<0){g=b[d[g]]}var n=A.u2p(E[w][0])+t.xOffset(z,g);var h=q.u2p(E[w][1])+t.yOffset(z,g);if(this._stack&&!t.stackedValue){if(this.barDirection==="vertical"){h=(this._barPoints[w][0][1]+this._barPoints[w][1][1])/2+v._gridPadding.top-0.5*z.outerHeight(true)}else{n=(this._barPoints[w][2][0]+this._barPoints[w][0][0])/2+v._gridPadding.left-0.5*z.outerWidth(true)}}if(this.renderer.constructor==c.jqplot.BarRenderer){if(this.barDirection=="vertical"){n+=this._barNudge}else{h-=this._barNudge}}z.css("left",n);z.css("top",h);var k=n+z.width();var s=h+z.height();var C=t.edgeTolerance;var e=c(x.canvas).position().left;var y=c(x.canvas).position().top;var B=x.canvas.width+e;var m=x.canvas.height+y;if(n-C<e||h-C<y||k+C>B||s+C>m){z.remove()}z=null;f=null}}};c.jqplot.postSeriesInitHooks.push(c.jqplot.PointLabels.init);c.jqplot.postDrawSeriesHooks.push(c.jqplot.PointLabels.draw)})(jQuery);