! function() {
  function e() {}
  for (var n, o = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = o.length, r = window.console = window.console || {}; i--;) r[n = o[i]] || (r[n] = e)
}();


! function(n) {
  "use strict";
  n.fn.meanmenu = function(P) {
    var e = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: ".menu-area",
      meanMenuClose: "X",
      meanMenuCloseSize: "25px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "767",
      meanNavPush: "",
      meanShowChildren: !0,
      meanExpandableChildren: !0,
      meanExpand: "+",
      meanContract: "-",
      meanRemoveAttrs: !1,
      onePage: !1,
      meanDisplay: "block",
      removeElements: ""
    };
    P = n.extend(e, P);
    var W = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function() {
      var a = P.meanMenuTarget,
        t = P.meanMenuContainer,
        r = P.meanMenuClose,
        i = P.meanMenuCloseSize,
        u = P.meanMenuOpen,
        n = P.meanRevealPosition,
        e = P.meanRevealPositionDistance,
        m = P.meanRevealColour,
        s = P.meanScreenWidth,
        l = P.meanNavPush,
        o = ".meanmenu-reveal",
        c = P.meanShowChildren,
        h = P.meanExpandableChildren,
        v = P.meanExpand,
        d = P.meanContract,
        y = P.meanRemoveAttrs,
        j = P.onePage,
        Q = P.meanDisplay,
        f = P.removeElements,
        g = !1;
      (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (g = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");

      function p() {
        var e;
        "center" === n && (e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px", C = "left:" + e + ";right:auto;", g ? jQuery(".meanmenu-reveal").animate({
          left: e
        }) : jQuery(".meanmenu-reveal").css("left", e))
      }
      var C = "",
        w = !1,
        x = !1;
      "right" === n && (C = "right:" + e + ";left:auto;"), "left" === n && (C = "left:" + e + ";right:auto;"), p();

      function A() {
        jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(a).css("display", Q), x = w = !1, jQuery(f).removeClass("mean-remove")
      }

      function E() {
        var e, n = "background:" + m + ";color:" + m + ";" + C;
        W <= s ? (jQuery(f).addClass("mean-remove"), x = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>'), e = jQuery(a).html(), jQuery(".mean-nav").html(e), y && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
          jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
        }), jQuery(a).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", l), jQuery(a).hide(), jQuery(".meanmenu-reveal").show(), jQuery(o).html(u), M = jQuery(o), jQuery(".mean-nav ul").hide(), c ? h ? (jQuery(".mean-nav ul ul").each(function() {
          jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + v + "</a>")
        }), jQuery(".mean-expand").on("click", function(e) {
          e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(v), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(d), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) {
          e.preventDefault(), w = !1 === w ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), !0) : (jQuery(".mean-nav ul:first").slideUp(), !1), M.toggleClass("meanclose"), jQuery(M).is(".meanmenu-reveal.meanclose") ? M.html(r) : M.html(u), jQuery(f).addClass("mean-remove")
        }), j && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
          jQuery(".mean-nav ul:first").slideUp(), w = !1, jQuery(M).toggleClass("meanclose").html(u)
        })) : A()
      }
      var M = "";
      g || jQuery(window).resize(function() {
        W = window.innerWidth || document.documentElement.clientWidth, A(), W <= s ? (E(), p()) : A()
      }), jQuery(window).resize(function() {
        W = window.innerWidth || document.documentElement.clientWidth, g ? (p(), W <= s ? !1 === x && E() : A()) : (A(), W <= s && (E(), p()))
      }), E()
    })
  }
}(jQuery);


/**
 * MapIt
 *
 * @copyright Copyright 2013, Dimitris Krestos
 * @license   Apache License, Version 2.0 (http://www.opensource.org/licenses/apache2.0.php)
 * @link      http://vdw.staytuned.gr
 * @version   v0.3.0
 */

! function($, window, undefined) {
  "use strict";
  $.fn.mapit = function(options) {
    var defaults = {
        latitude: 37.970996,
        longitude: 23.730542,
        zoom: 16,
        type: "ROADMAP",
        scrollwheel: !1,
        marker: {
          latitude: 37.970996,
          longitude: 23.730542,
          icon: "",
          title: "",
          open: !1,
          center: !0
        },
        address: "",
        styles: "GRAYSCALE",
        locations: [],
        origins: []
      },
      options = $.extend(defaults, options);
    $(this).each(function() {
      var $this = $(this),
        directionsDisplay = new google.maps.DirectionsRenderer,
        mapOptions = {
          scrollwheel: options.scrollwheel,
          scaleControl: !1,
          center: options.marker.center ? new google.maps.LatLng(options.marker.latitude, options.marker.longitude) : new google.maps.LatLng(options.latitude, options.longitude),
          zoom: options.zoom,
          mapTypeId: eval("google.maps.MapTypeId." + options.type)
        },
        map = new google.maps.Map(document.getElementById($this.attr("id")), mapOptions);
      if (directionsDisplay.setMap(map), options.styles) {
        var GRAYSCALE_style = [{
            featureType: "all",
            elementType: "all",
            stylers: [{
              saturation: -100
            }]
          }],
          MIDNIGHT_style = [{
            featureType: "water",
            stylers: [{
              color: "#021019"
            }]
          }, {
            featureType: "landscape",
            stylers: [{
              color: "#08304b"
            }]
          }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
              color: "#0c4152"
            }, {
              lightness: 5
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
              color: "#000000"
            }]
          }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#0b434f"
            }, {
              lightness: 25
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{
              color: "#000000"
            }]
          }, {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#0b3d51"
            }, {
              lightness: 16
            }]
          }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
              color: "#000000"
            }]
          }, {
            elementType: "labels.text.fill",
            stylers: [{
              color: "#ffffff"
            }]
          }, {
            elementType: "labels.text.stroke",
            stylers: [{
              color: "#000000"
            }, {
              lightness: 13
            }]
          }, {
            featureType: "transit",
            stylers: [{
              color: "#146474"
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
              color: "#000000"
            }]
          }, {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{
              color: "#144b53"
            }, {
              lightness: 14
            }, {
              weight: 1.4
            }]
          }],
          BLUE_style = [{
            featureType: "water",
            stylers: [{
              color: "#46bcec"
            }, {
              visibility: "on"
            }]
          }, {
            featureType: "landscape",
            stylers: [{
              color: "#f2f2f2"
            }]
          }, {
            featureType: "road",
            stylers: [{
              saturation: -100
            }, {
              lightness: 45
            }]
          }, {
            featureType: "road.highway",
            stylers: [{
              visibility: "simplified"
            }]
          }, {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{
              color: "#444444"
            }]
          }, {
            featureType: "transit",
            stylers: [{
              visibility: "off"
            }]
          }, {
            featureType: "poi",
            stylers: [{
              visibility: "off"
            }]
          }],
          mapType = new google.maps.StyledMapType(eval(options.styles + "_style"), {
            name: options.styles
          });
        map.mapTypes.set(options.styles, mapType), map.setMapTypeId(options.styles)
      }
      var home = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(options.marker.latitude, options.marker.longitude),
          icon: new google.maps.MarkerImage(options.marker.icon),
          title: options.marker.title
        }),
        info = new google.maps.InfoWindow({
          content: options.address
        });
      options.marker.open ? info.open(map, home) : google.maps.event.addListener(home, "click", function() {
        info.open(map, home)
      });
      var infowindow = new google.maps.InfoWindow,
        marker, i, markers = [];
      for (i = 0; i < options.locations.length; i++) marker = new google.maps.Marker({
        position: new google.maps.LatLng(options.locations[i][0], options.locations[i][1]),
        map: map,
        icon: new google.maps.MarkerImage(options.locations[i][2] || options.marker.icon),
        title: options.locations[i][3]
      }), markers.push(marker), google.maps.event.addListener(marker, "click", function(e, o) {
        return function() {
          infowindow.setContent(options.locations[o][4]), infowindow.open(map, e)
        }
      }(marker, i));
      var directionsService = new google.maps.DirectionsService;
      $this.on("route", function(e, o) {
        var t = {
          origin: new google.maps.LatLng(options.origins[o][0], options.origins[o][1]),
          destination: new google.maps.LatLng(options.marker.latitude, options.marker.longitude),
          travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(t, function(e, o) {
          o == google.maps.DirectionsStatus.OK && directionsDisplay.setDirections(e)
        })
      }), $this.on("hide_all", function() {
        for (var e = 0; e < options.locations.length; e++) markers[e].setVisible(!1)
      }), $this.on("show", function(e, o) {
        $this.trigger("hide_all"), $this.trigger("reset");
        for (var t = new google.maps.LatLngBounds, i = 0; i < options.locations.length; i++) options.locations[i][6] == o && markers[i].setVisible(!0), t.extend(markers[i].position);
        map.fitBounds(t)
      }), $this.on("hide", function(e, o) {
        for (var t = 0; t < options.locations.length; t++) options.locations[t][6] == o && markers[t].setVisible(!1)
      }), $this.on("clear", function() {
        if (markers)
          for (var e = 0; e < markers.length; e++) markers[e].setMap(null)
      }), $this.on("reset", function() {
        map.setCenter(new google.maps.LatLng(options.latitude, options.longitude), options.zoom)
      }), $this.trigger("hide_all")
    })
  }, $(document).ready(function() {
    $('[data-toggle="mapit"]').mapit()
  })
}(jQuery);


/**
 * Owl Carousel v2.3.3
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */

! function(a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Workers, a.proxy(function(b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function() {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      var b = this.settings.margin || "",
        c = !this.settings.autoWidth,
        d = this.settings.rtl,
        e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
      !c && this.$stage.children().css(e), a.css = e
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        c = null,
        d = this._items.length,
        e = !this.settings.autoWidth,
        f = [];
      for (a.items = {
          merge: !1,
          width: b
        }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      this._widths = f
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      var b = [],
        c = this._items,
        d = this.settings,
        e = Math.max(2 * d.items, 4),
        f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
        h = "",
        i = "";
      for (g /= 2; g > 0;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i, g -= 1;
      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      this._coordinates = f
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var a = this.settings.stagePadding,
        b = this._coordinates,
        c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
      this.$stage.css(c)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      var b = this._coordinates.length,
        c = !this.settings.autoWidth,
        d = this.$stage.children();
      if (c && a.items.merge)
        for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      else c && (a.css.width = a.items.width, d.css(a.css))
    }
  }, {
    filter: ["items"],
    run: function() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
    }
  }, {
    filter: ["position"],
    run: function() {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function() {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
    }
  }], e.prototype.initializeStage = function() {
    this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()))
  }, e.prototype.initializeItems = function() {
    var b = this.$element.find(".owl-item");
    if (b.length) return this._items = b.get().map(function(b) {
      return a(b)
    }), this._mergers = this._items.map(function() {
      return 1
    }), void this.refresh();
    this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
  }, e.prototype.initialize = function() {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var a, b, c;
      a = this.$element.find("img"), b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, c = this.$element.children(b).width(), a.length && c <= 0 && this.preloadAutoWidthImages(a)
    }
    this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.isVisible = function() {
    return !this.settings.checkVisibility || this.$element.is(":visible")
  }, e.prototype.setup = function() {
    var b = this.viewport(),
      c = this.options.responsive,
      d = -1,
      e = null;
    c ? (a.each(c, function(a) {
      a <= b && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    })
  }, e.prototype.optionsLogic = function() {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function(b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data
  }, e.prototype.update = function() {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
        return this[a]
      }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function(a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function() {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function() {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function() {
    return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
  }, e.prototype.registerEventHandlers = function() {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function(b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, e.prototype.onDragMove = function(a) {
    var b = null,
      c = null,
      d = null,
      e = this.difference(this._drag.pointer, this.pointer(a)),
      f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function(b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
      e = this._drag.stage.current,
      f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function(b, c) {
    var e = -1,
      f = 30,
      g = this.width(),
      h = this.coordinates();
    return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
      return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a), -1 === e
    }, this)), this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())), e
  }, e.prototype.animate = function(b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    })
  }, e.prototype.is = function(a) {
    return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function(a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function(b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
      return b
    })
  }, e.prototype.reset = function(a) {
    (a = this.normalize(a)) !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function(a, b) {
    var c = this._items.length,
      e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
  }, e.prototype.relative = function(a) {
    return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function(a) {
    var b, c, d, e = this.settings,
      f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
    else if (e.autoWidth || e.merge) {
      if (b = this._items.length)
        for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d););
      f = b + 1
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0)
  }, e.prototype.minimum = function(a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function(a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function(a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function(b) {
    var c = this._clones.length / 2,
      e = c + this._items.length,
      f = function(a) {
        return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
      };
    return b === d ? a.map(this._clones, function(a, b) {
      return f(b)
    }) : a.map(this._clones, function(a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function(a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function(b) {
    var c, e = 1,
      f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
  }, e.prototype.duration = function(a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function(a, b) {
    var c = this.current(),
      d = null,
      e = a - this.relative(c),
      f = (e > 0) - (e < 0),
      g = this._items.length,
      h = this.minimum(),
      i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.isVisible() && this.update()
  }, e.prototype.next = function(a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function(a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function(a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated")
  }, e.prototype.viewport = function() {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
  }, e.prototype.replace = function(b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
      return 1 === this.nodeType
    }).each(a.proxy(function(a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function(b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    })
  }, e.prototype.remove = function(a) {
    (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.preloadAutoWidthImages = function(b) {
    b.each(a.proxy(function(b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
    }, this))
  }, e.prototype.destroy = function() {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function(a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case "<":
        return d ? a > c : a < c;
      case ">":
        return d ? a < c : a > c;
      case ">=":
        return d ? a <= c : a >= c;
      case "<=":
        return d ? a >= c : a <= c
    }
  }, e.prototype.on = function(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function(a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function(b, c, d, f, g) {
    var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      i = a.camelCase(a.grep(["on", b, d], function(a) {
        return a
      }).join("-").toLowerCase()),
      j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
    return this._supress[b] || (a.each(this._plugins, function(a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function(b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
    }, this))
  }, e.prototype.leave = function(b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
      this._states.current[b]--
    }, this))
  }, e.prototype.register = function(b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function(a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
        }, a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  }, e.prototype.suppress = function(b) {
    a.each(b, a.proxy(function(a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function(b) {
    a.each(b, a.proxy(function(a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.pointer = function(a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.isNumeric = function(a) {
    return !isNaN(parseFloat(a))
  }, e.prototype.difference = function(a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  }, a.fn.owlCarousel = function(b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var d = a(this),
        f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function() {
    this._interval || (this._visible = this._core.isVisible(), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function() {
    this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function() {
    var a, c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
          for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && -1 * e || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
              this.load(b)
            }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function(c) {
    var d = this._core.$stage.children().eq(c),
      e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
        this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("srcset", g) : (e = new Image, e.onload = a.proxy(function() {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function() {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(c) {
    this._core = c, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoHeight && "position" === a.property.name && (console.log("update called"), this.update())
      }, this),
      "loaded.owl.lazy": a.proxy(function(a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
    var d = this;
    a(b).on("load", function() {
      d._core.settings.autoHeight && d.update()
    }), a(b).resize(function() {
      d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId), d._intervalId = setTimeout(function() {
        d.update()
      }, 250))
    })
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function() {
    var b = this._core._current,
      c = b + this._core.settings.items,
      d = this._core.$stage.children().toArray().slice(b, c),
      e = [],
      f = 0;
    a.each(d, function(b, c) {
      e.push(a(c).height())
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function() {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        })
      }, this),
      "resize.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this),
      "refreshed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this),
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": a.proxy(function(b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function(a, b) {
    var c = function() {
        return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
      }(),
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
    else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
    else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function(b, c) {
    var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
      h = b.find("img"),
      i = "src",
      j = "",
      k = this._core.settings,
      l = function(a) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
      };
    if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function(a) {
        f = a[0].thumbnail_large, l(f)
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function(a) {
        f = a.framegrab_url, l(f)
      }
    })
  }, e.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function(b) {
    var c, d = a(b.target),
      e = d.closest("." + this._core.settings.itemClass),
      f = this._videos[e.attr("data-video")],
      g = f.width || "100%",
      h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function() {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function() {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function(a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
        a.namespace && (this.swapping = "translated" == a.type)
      }, this),
      "translate.owl.carousel": a.proxy(function(a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function() {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this),
        d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        f = this.core.settings.animateIn,
        g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
    }
  }, e.prototype.clear = function(b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, e.prototype.destroy = function() {
    var a, b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
      }, this),
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this),
      "play.owl.autoplay": a.proxy(function(a, b, c) {
        a.namespace && this.play(b, c)
      }, this),
      "stop.owl.autoplay": a.proxy(function(a) {
        a.namespace && this.stop()
      }, this),
      "mouseover.owl.autoplay": a.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this),
      "touchstart.owl.core": a.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "touchend.owl.core": a.proxy(function() {
        this._core.settings.autoplayHoverPause && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype._next = function(d) {
    this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
  }, e.prototype.read = function() {
    return (new Date).getTime() - this._time
  }, e.prototype.play = function(c, d) {
    var e;
    this._core.is("rotating") || this._core.enter("rotating"), c = c || this._core.settings.autoplayTimeout, e = Math.min(this._time % (this._timeout || c), c), this._paused ? (this._time = this.read(), this._paused = !1) : b.clearTimeout(this._call), this._time += this.read() % c - e, this._timeout = c, this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
  }, e.prototype.stop = function() {
    this._core.is("rotating") && (this._time = 0, this._paused = !0, b.clearTimeout(this._call), this._core.leave("rotating"))
  }, e.prototype.pause = function() {
    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, b.clearTimeout(this._call))
  }, e.prototype.destroy = function() {
    var a, b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function(b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
      }, this),
      "added.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this),
      "remove.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && "position" == a.property.name && this.draw()
      }, this),
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this),
      "refreshed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
    navSpeed: !1,
    navElement: 'button type="button" role="presentation"',
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function() {
    var b, c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
      this.prev(c.navSpeed)
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
      this.next(c.navSpeed)
    }, this)), c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", a.proxy(function(b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function() {
    var a, b, c, d, e;
    e = this._core.settings;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function() {
    var a, b, c, d = this._core.clones().length / 2,
      e = d + this._core.items().length,
      f = this._core.maximum(!0),
      g = this._core.settings,
      h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
              start: Math.min(f, a - d),
              end: a - d + h - 1
            }), Math.min(f, a - d) === f) break;
          b = 0, ++c
        }
        b += this._core.mergers(this._core.relative(a))
      }
  }, e.prototype.draw = function() {
    var b, c = this._core.settings,
      d = this._core.items().length <= c.items,
      e = this._core.relative(this._core.current()),
      f = c.loop || c.rewind;
    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function(b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  }, e.prototype.current = function() {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function(a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  }, e.prototype.getPosition = function(b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function(b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function(b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function(b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function(c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": a.proxy(function(b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this),
      "changed.owl.carousel": a.proxy(function(c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
            e = a.map(this._hashes, function(a, b) {
              return a === d ? b : null
            }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
      var c = b.location.hash.substring(1),
        e = this._core.$stage.children(),
        f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function() {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  function e(b, c) {
    var e = !1,
      f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
      if (g[b] !== d) return e = !c || b, !1
    }), e
  }

  function f(a) {
    return e(a, !0)
  }
  var g = a("<support>").get(0).style,
    h = "Webkit Moz O ms".split(" "),
    i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
    j = {
      csstransforms: function() {
        return !!e("transform")
      },
      csstransforms3d: function() {
        return !!e("perspective")
      },
      csstransitions: function() {
        return !!e("transition")
      },
      cssanimations: function() {
        return !!e("animation")
      }
    };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


/**
 * Swiper 4.2.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 1, 2018
 */

! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
  "use strict";
  var e = "undefined" == typeof document ? {
      body: {},
      addEventListener: function() {},
      removeEventListener: function() {},
      activeElement: {
        blur: function() {},
        nodeName: ""
      },
      querySelector: function() {
        return null
      },
      querySelectorAll: function() {
        return []
      },
      getElementById: function() {
        return null
      },
      createEvent: function() {
        return {
          initEvent: function() {}
        }
      },
      createElement: function() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function() {},
          getElementsByTagName: function() {
            return []
          }
        }
      },
      location: {
        hash: ""
      }
    } : document,
    t = "undefined" == typeof window ? {
      document: e,
      navigator: {
        userAgent: ""
      },
      location: {},
      history: {},
      CustomEvent: function() {
        return this
      },
      addEventListener: function() {},
      removeEventListener: function() {},
      getComputedStyle: function() {
        return {
          getPropertyValue: function() {
            return ""
          }
        }
      },
      Image: function() {},
      Date: function() {},
      screen: {},
      setTimeout: function() {},
      clearTimeout: function() {}
    } : window,
    i = function(e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return this.length = e.length, this
    };

  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s)
      if ("string" == typeof s) {
        var o, l, d = s.trim();
        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
          var h = "div";
          for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
        } else
          for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
      } else if (s.nodeType || s === t || s === e) r.push(s);
    else if (s.length > 0 && s[0].nodeType)
      for (n = 0; n < s.length; n += 1) r.push(s[n]);
    return new i(r)
  }

  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
    return t
  }
  s.fn = i.prototype, s.Class = i, s.Dom7 = i;
  var r = {
    addClass: function(e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
      return this
    },
    removeClass: function(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
      return this
    },
    hasClass: function(e) {
      return !!this[0] && this[0].classList.contains(e)
    },
    toggleClass: function(e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
      return this
    },
    attr: function(e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1)
        if (2 === i.length) this[s].setAttribute(e, t);
        else
          for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
      return this
    },
    removeAttr: function(e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this
    },
    data: function(e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        return this
      }
      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0
      }
    },
    transform: function(e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransform = e, i.transform = e
      }
      return this
    },
    transition: function(e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e
      }
      return this
    },
    on: function() {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
      var a = t[0],
        r = t[1],
        n = t[2],
        o = t[3];

      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.unshift(e), s(t).is(r)) n.apply(t, i);
          else
            for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
        }
      }

      function d(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];
        t.unshift(e), n.apply(this, t)
      }
      "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({
            type: a,
            listener: n,
            proxyListener: l
          }), u.addEventListener(p[h], l, o);
        else
          for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({
            type: a,
            listener: n,
            proxyListener: d
          }), u.addEventListener(p[h], d, o)
      }
      return this
    },
    off: function() {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
      var s = t[0],
        a = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
      for (var o = s.split(" "), l = 0; l < o.length; l += 1)
        for (var d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (a) {
            if (h.dom7LiveListeners)
              for (var p = 0; p < h.dom7LiveListeners.length; p += 1) r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
          } else if (h.dom7Listeners)
            for (var c = 0; c < h.dom7Listeners.length; c += 1) r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
        }
      return this
    },
    trigger: function() {
      for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
        for (var o = 0; o < this.length; o += 1) {
          var l = void 0;
          try {
            l = new t.CustomEvent(a[n], {
              detail: r,
              bubbles: !0,
              cancelable: !0
            })
          } catch (t) {
            (l = e.createEvent("Event")).initEvent(a[n], !0, !0), l.detail = r
          }
          this[o].dom7EventData = i.filter(function(e, t) {
            return t > 0
          }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
        }
      return this
    },
    transitionEnd: function(e) {
      var t, i = ["webkitTransitionEnd", "transitionend"],
        s = this;

      function a(r) {
        if (r.target === this)
          for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
      }
      if (e)
        for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this
    },
    outerWidth: function(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    },
    outerHeight: function(e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    },
    offset: function() {
      if (this.length > 0) {
        var i = this[0],
          s = i.getBoundingClientRect(),
          a = e.body,
          r = i.clientTop || a.clientTop || 0,
          n = i.clientLeft || a.clientLeft || 0,
          o = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return {
          top: s.top + o - r,
          left: s.left + l - n
        }
      }
      return null
    },
    css: function(e, i) {
      var s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (var a in e) this[s].style[a] = e[a];
          return this
        }
        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
        return this
      }
      return this
    },
    each: function(e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this
    },
    html: function(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this
    },
    text: function(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this
    },
    is: function(a) {
      var r, n, o = this[0];
      if (!o || void 0 === a) return !1;
      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);
        for (r = s(a), n = 0; n < r.length; n += 1)
          if (r[n] === o) return !0;
        return !1
      }
      if (a === e) return o === e;
      if (a === t) return o === t;
      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
          if (r[n] === o) return !0;
        return !1
      }
      return !1
    },
    index: function() {
      var e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e
      }
    },
    eq: function(e) {
      if (void 0 === e) return this;
      var t, s = this.length;
      return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
    },
    append: function() {
      for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
      for (var r = 0; r < s.length; r += 1) {
        t = s[r];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            var o = e.createElement("div");
            for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
          } else if (t instanceof i)
          for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
        else this[n].appendChild(t)
      }
      return this
    },
    prepend: function(t) {
      var s, a;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof t) {
          var r = e.createElement("div");
          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
        } else if (t instanceof i)
        for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
      else this[s].insertBefore(t, this[s].childNodes[0]);
      return this
    },
    next: function(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
    },
    nextAll: function(e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.nextElementSibling;) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r
      }
      return new i(t)
    },
    prev: function(e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
      }
      return new i([])
    },
    prevAll: function(e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.previousElementSibling;) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), a = r
      }
      return new i(t)
    },
    parent: function(e) {
      for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      return s(a(t))
    },
    parents: function(e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
      return s(a(t))
    },
    closest: function(e) {
      var t = this;
      return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    },
    find: function(e) {
      for (var t = [], s = 0; s < this.length; s += 1)
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
      return new i(t)
    },
    children: function(e) {
      for (var t = [], r = 0; r < this.length; r += 1)
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
      return new i(a(t))
    },
    remove: function() {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this
    },
    add: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var i, a;
      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);
        for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
      }
      return this
    },
    styles: function() {
      return this[0] ? t.getComputedStyle(this[0], null) : {}
    }
  };
  Object.keys(r).forEach(function(e) {
    s.fn[e] = r[e]
  });
  var n, o, l, d = {
      deleteProps: function(e) {
        var t = e;
        Object.keys(t).forEach(function(e) {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        })
      },
      nextTick: function(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      },
      now: function() {
        return Date.now()
      },
      getTranslate: function(e, i) {
        var s, a, r;
        void 0 === i && (i = "x");
        var n = t.getComputedStyle(e, null);
        return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
          return e.replace(",", ".")
        }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
      },
      parseUrlQuery: function(e) {
        var i, s, a, r, n = {},
          o = e || t.location.href;
        if ("string" == typeof o && o.length)
          for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
              return "" !== e
            })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
        return n
      },
      isObject: function(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
      },
      extend: function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (void 0 !== a && null !== a)
            for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
              var l = r[n],
                h = Object.getOwnPropertyDescriptor(a, l);
              void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
            }
        }
        return i
      }
    },
    h = (l = e.createElement("div"), {
      touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
      pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
      prefixedPointerEvents: !!t.navigator.msPointerEnabled,
      transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
      transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
      flexbox: function() {
        for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
          if (t[i] in e) return !0;
        return !1
      }(),
      observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
      passiveListener: function() {
        var e = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          t.addEventListener("testPassiveListener", null, i)
        } catch (e) {}
        return e
      }(),
      gestures: "ongesturestart" in t
    }),
    p = function(e) {
      void 0 === e && (e = {});
      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
        t.on(e, t.params.on[e])
      })
    },
    c = {
      components: {
        configurable: !0
      }
    };
  p.prototype.on = function(e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return e.split(" ").forEach(function(e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
    }), s
  }, p.prototype.once = function(e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    return s.on(e, function i() {
      for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];
      t.apply(s, a), s.off(e, i)
    }, i)
  }, p.prototype.off = function(e, t) {
    var i = this;
    return i.eventsListeners ? (e.split(" ").forEach(function(e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) {
        s === t && i.eventsListeners[e].splice(a, 1)
      })
    }), i) : i
  }, p.prototype.emit = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var i, s, a, r = this;
    return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function(e) {
          t.push(e)
        }), t.forEach(function(e) {
          e.apply(a, s)
        })
      }
    }), r) : r
  }, p.prototype.useModulesParams = function(e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function(i) {
      var s = t.modules[i];
      s.params && d.extend(e, s.params)
    })
  }, p.prototype.useModules = function(e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function(i) {
      var s = t.modules[i],
        a = e[i] || {};
      s.instance && Object.keys(s.instance).forEach(function(e) {
        var i = s.instance[e];
        t[e] = "function" == typeof i ? i.bind(t) : i
      }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
        t.on(e, s.on[e])
      }), s.create && s.create.bind(t)(a)
    })
  }, c.components.set = function(e) {
    this.use && this.use(e)
  }, p.installModule = function(e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
    var s = this;
    s.prototype.modules || (s.prototype.modules = {});
    var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
      s.prototype[t] = e.proto[t]
    }), e.static && Object.keys(e.static).forEach(function(t) {
      s[t] = e.static[t]
    }), e.install && e.install.apply(s, t), s
  }, p.use = function(e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
    var s = this;
    return Array.isArray(e) ? (e.forEach(function(e) {
      return s.installModule(e)
    }), s) : s.installModule.apply(s, [e].concat(t))
  }, Object.defineProperties(p, c);
  var u = {
    updateSize: function() {
      var e, t, i = this.$el;
      e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
        width: e,
        height: t,
        size: this.isHorizontal() ? e : t
      }))
    },
    updateSlides: function() {
      var e = this.params,
        i = this.$wrapperEl,
        s = this.size,
        a = this.rtlTranslate,
        r = this.wrongRTL,
        n = i.children("." + this.params.slideClass),
        o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length,
        l = [],
        p = [],
        c = [],
        u = e.slidesOffsetBefore;
      "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
      var v = e.slidesOffsetAfter;
      "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
      var f = o,
        m = this.snapGrid.length,
        g = this.snapGrid.length,
        b = e.spaceBetween,
        w = -u,
        y = 0,
        x = 0;
      if (void 0 !== s) {
        var E, T;
        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({
          marginLeft: "",
          marginTop: ""
        }) : n.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
        for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
          T = 0;
          var P = n.eq(k);
          if (e.slidesPerColumn > 1) {
            var $ = void 0,
              L = void 0,
              I = void 0;
            "column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({
              "-webkit-box-ordinal-group": $,
              "-moz-box-ordinal-group": $,
              "-ms-flex-order": $,
              "-webkit-order": $,
              order: $
            })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I)
          }
          if ("none" !== P.css("display")) {
            if ("auto" === e.slidesPerView) {
              var D = t.getComputedStyle(P[0], null);
              T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), e.roundLengths && (T = Math.floor(T))
            } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px");
            n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1
          }
        }
        if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
            width: this.virtualSize + e.spaceBetween + "px"
          }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
            width: this.virtualSize + e.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + e.spaceBetween + "px"
          })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
            width: this.virtualSize + e.spaceBetween + "px"
          }) : i.css({
            height: this.virtualSize + e.spaceBetween + "px"
          }), e.centeredSlides)) {
          S = [];
          for (var O = 0; O < l.length; O += 1) l[O] < this.virtualSize + l[0] && S.push(l[O]);
          l = S
        }
        if (!e.centeredSlides) {
          S = [];
          for (var A = 0; A < l.length; A += 1) l[A] <= this.virtualSize - s && S.push(l[A]);
          l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s)
        }
        0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({
          marginLeft: b + "px"
        }) : n.css({
          marginRight: b + "px"
        }) : n.css({
          marginBottom: b + "px"
        })), d.extend(this, {
          slides: n,
          snapGrid: l,
          slidesGrid: p,
          slidesSizesGrid: c
        }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
      }
    },
    updateAutoHeight: function(e) {
      var t, i = [],
        s = 0;
      if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
          var a = this.activeIndex + t;
          if (a > this.slides.length) break;
          i.push(this.slides.eq(a)[0])
        } else i.push(this.slides.eq(this.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s
        } s && this.$wrapperEl.css("height", s + "px")
    },
    updateSlidesOffset: function() {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
    },
    updateSlidesProgress: function(e) {
      void 0 === e && (e = this.translate || 0);
      var t = this.params,
        i = this.slides,
        s = this.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var a = -e;
        s && (a = e), i.removeClass(t.slideVisibleClass);
        for (var r = 0; r < i.length; r += 1) {
          var n = i[r],
            o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
          if (t.watchSlidesVisibility) {
            var l = -(a - n.swiperSlideOffset),
              d = l + this.slidesSizesGrid[r];
            (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
          }
          n.progress = s ? -o : o
        }
      }
    },
    updateProgress: function(e) {
      void 0 === e && (e = this.translate || 0);
      var t = this.params,
        i = this.maxTranslate() - this.minTranslate(),
        s = this.progress,
        a = this.isBeginning,
        r = this.isEnd,
        n = a,
        o = r;
      0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
        progress: s,
        isBeginning: a,
        isEnd: r
      }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
    },
    updateSlidesClasses: function() {
      var e, t = this.slides,
        i = this.params,
        s = this.$wrapperEl,
        a = this.activeIndex,
        r = this.realIndex,
        n = this.virtual && i.virtual.enabled;
      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
      var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
    },
    updateActiveIndex: function(e) {
      var t, i = this.rtlTranslate ? this.translate : -this.translate,
        s = this.slidesGrid,
        a = this.snapGrid,
        r = this.params,
        n = this.activeIndex,
        o = this.realIndex,
        l = this.snapIndex,
        h = e;
      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
      }
      if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
        var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
        d.extend(this, {
          snapIndex: t,
          realIndex: c,
          previousIndex: n,
          activeIndex: h
        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange")
      } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
    },
    updateClickedSlide: function(e) {
      var t = this.params,
        i = s(e.target).closest("." + t.slideClass)[0],
        a = !1;
      if (i)
        for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
      if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
      this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
    }
  };
  var v = {
    getTranslate: function(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        i = this.rtlTranslate,
        s = this.translate,
        a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      var r = d.getTranslate(a[0], e);
      return i && (r = -r), r || 0
    },
    setTranslate: function(e, t) {
      var i = this.rtlTranslate,
        s = this.params,
        a = this.$wrapperEl,
        r = this.progress,
        n = 0,
        o = 0;
      this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
      var l = this.maxTranslate() - this.minTranslate();
      (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
    },
    minTranslate: function() {
      return -this.snapGrid[0]
    },
    maxTranslate: function() {
      return -this.snapGrid[this.snapGrid.length - 1]
    }
  };
  var f = {
    setTransition: function(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
    },
    transitionStart: function(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.params,
        a = this.previousIndex;
      s.autoHeight && this.updateAutoHeight();
      var r = t;
      if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
        if ("reset" === r) return void this.emit("slideResetTransitionStart");
        this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
      }
    },
    transitionEnd: function(e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.previousIndex;
      this.animating = !1, this.setTransition(0);
      var a = t;
      if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
        if ("reset" === a) return void this.emit("slideResetTransitionEnd");
        this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
      }
    }
  };
  var m = {
    slideTo: function(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = this,
        r = e;
      r < 0 && (r = 0);
      var n = a.params,
        o = a.snapGrid,
        l = a.slidesGrid,
        d = a.previousIndex,
        p = a.activeIndex,
        c = a.rtlTranslate,
        u = a.$wrapperEl;
      if (a.animating && n.preventIntercationOnTransition) return !1;
      var v = Math.floor(r / n.slidesPerGroup);
      v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
      var f, m = -o[v];
      if (a.updateProgress(m), n.normalizeSlideIndex)
        for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
      if (a.initialized && r !== p) {
        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
        if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1
      }
      return f = r > p ? "next" : r < p ? "prev" : "reset", c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, u.transitionEnd(function() {
        a && !a.destroyed && a.transitionEnd(i, f)
      }))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)), !0)
    },
    slideToLoop: function(e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = e;
      return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
    },
    slideNext: function(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating;
      return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
    },
    slidePrev: function(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.snapGrid,
        n = this.slidesGrid,
        o = this.rtlTranslate;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
      }
      var l, d = o ? this.translate : -this.translate,
        h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);
      return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i)
    },
    slideReset: function(e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
    },
    slideToClosest: function(e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.activeIndex,
        a = Math.floor(s / this.params.slidesPerGroup);
      if (a < this.snapGrid.length - 1) {
        var r = this.rtlTranslate ? this.translate : -this.translate,
          n = this.snapGrid[a];
        r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup)
      }
      return this.slideTo(s, e, t, i)
    },
    slideToClickedSlide: function() {
      var e, t = this,
        i = t.params,
        a = t.$wrapperEl,
        r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
        n = t.clickedIndex;
      if (i.loop) {
        if (t.animating) return;
        e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
          t.slideTo(n)
        })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
          t.slideTo(n)
        })) : t.slideTo(n)
      } else t.slideTo(n)
    }
  };
  var g = {
    loopCreate: function() {
      var t = this,
        i = t.params,
        a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);
      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
            a.append(l)
          }
          r = a.children("." + i.slideClass)
        }
      }
      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
        h = [];
      r.each(function(e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
      });
      for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
    },
    loopFix: function() {
      var e, t = this.params,
        i = this.activeIndex,
        s = this.slides,
        a = this.loopedSlides,
        r = this.allowSlidePrev,
        n = this.allowSlideNext,
        o = this.snapGrid,
        l = this.rtlTranslate;
      this.allowSlidePrev = !0, this.allowSlideNext = !0;
      var d = -o[i] - this.getTranslate();
      i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
      this.allowSlidePrev = r, this.allowSlideNext = n
    },
    loopDestroy: function() {
      var e = this.$wrapperEl,
        t = this.params,
        i = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
    }
  };
  var b = {
    setGrabCursor: function(e) {
      if (!h.touch && this.params.simulateTouch) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
      }
    },
    unsetGrabCursor: function() {
      h.touch || (this.el.style.cursor = "")
    }
  };
  var w = {
      appendSlide: function(e) {
        var t = this.$wrapperEl,
          i = this.params;
        if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
          for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
        else t.append(e);
        i.loop && this.loopCreate(), i.observer && h.observer || this.update()
      },
      prependSlide: function(e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
          a = s + e.length
        } else i.prepend(e);
        t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
      },
      removeSlide: function(e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
        var a, r = s;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
          r = Math.max(r, 0)
        } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
        t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
      },
      removeAllSlides: function() {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e)
      }
    },
    y = function() {
      var i = t.navigator.userAgent,
        s = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: t.cordova || t.phonegap,
          phonegap: t.cordova || t.phonegap
        },
        a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
        n = i.match(/(iPad).*OS\s([\d_]+)/),
        o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
        var d = s.osVersion.split("."),
          h = e.querySelector('meta[name="viewport"]');
        s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
      }
      return s.pixelRatio = t.devicePixelRatio || 1, s
    }();

  function x() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
        var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
        this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
      } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
      this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
    }
  }
  var E = {
    attachEvents: function() {
      var i = this.params,
        a = this.touchEvents,
        r = this.el,
        n = this.wrapperEl;
      this.onTouchStart = function(i) {
        var a = this.touchEventsData,
          r = this.params,
          n = this.touches;
        if (!this.animating || !r.preventIntercationOnTransition) {
          var o = i;
          if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved))
            if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
            else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
            var l = n.currentX,
              h = n.currentY;
            if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
              if (d.extend(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                var p = !0;
                s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault()
              }
              this.emit("touchStart", o)
            }
          }
        }
      }.bind(this), this.onTouchMove = function(t) {
        var i = this.touchEventsData,
          a = this.params,
          r = this.touches,
          n = this.rtlTranslate,
          o = t;
        if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "mousemove" !== o.type) {
            var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
              h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
            if (o.preventedByNestedSwiper) return r.startX = l, void(r.startY = h);
            if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (d.extend(r, {
              startX: l,
              startY: h,
              currentX: l,
              currentY: h
            }), i.touchStartTime = d.now()));
            if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
              if (this.isVertical()) {
                if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
              } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
            if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
            if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
              r.currentX = l, r.currentY = h;
              var p, c = r.currentX - r.startX,
                u = r.currentY - r.startY;
              if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
              else if (i.startMoving) {
                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                var v = this.isHorizontal() ? c : u;
                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                var f = !0,
                  m = a.resistanceRatio;
                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                  if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                }
                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                  position: r[this.isHorizontal() ? "startX" : "startY"],
                  time: i.touchStartTime
                }), i.velocities.push({
                  position: r[this.isHorizontal() ? "currentX" : "currentY"],
                  time: d.now()
                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
              }
            }
          }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
      }.bind(this), this.onTouchEnd = function(e) {
        var t = this,
          i = t.touchEventsData,
          s = t.params,
          a = t.touches,
          r = t.rtlTranslate,
          n = t.$wrapperEl,
          o = t.slidesGrid,
          l = t.snapGrid,
          h = e;
        if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = d.now(),
          u = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
            t && !t.destroyed && t.emit("click", h)
          }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function() {
            t.destroyed || (t.allowClick = !0)
          }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
          if (s.freeModeMomentum) {
            if (i.velocities.length > 1) {
              var v = i.velocities.pop(),
                f = i.velocities.pop(),
                m = v.position - f.position,
                g = v.time - f.time;
              t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
            var b = 1e3 * s.freeModeMomentumRatio,
              w = t.velocity * b,
              y = t.translate + w;
            r && (y = -y);
            var x, E, T = !1,
              S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
            else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
            else if (s.freeModeSticky) {
              for (var C, M = 0; M < l.length; M += 1)
                if (l[M] > -y) {
                  C = M;
                  break
                } y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
            }
            if (E && t.once("transitionEnd", function() {
                t.loopFix()
              }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
            else if (s.freeModeSticky) return void t.slideToClosest();
            s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
              t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function() {
                t && !t.destroyed && t.transitionEnd()
              }))
            })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
              t && !t.destroyed && t.transitionEnd()
            }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
          } else if (s.freeModeSticky) return void t.slideToClosest();
          (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
          for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
          var $ = (p - o[z]) / k;
          if (u > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z))
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z)
          }
        }
      }.bind(this), this.onClick = function(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      }.bind(this);
      var o = "container" === i.touchEventsTarget ? r : n,
        l = !!i.nested;
      if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
            passive: !1,
            capture: l
          } : l), o.addEventListener(a.end, this.onTouchEnd, p)
        }(i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
      } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0)
    },
    detachEvents: function() {
      var t = this.params,
        i = this.touchEvents,
        s = this.el,
        a = this.wrapperEl,
        r = "container" === t.touchEventsTarget ? s : a,
        n = !!t.nested;
      if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
        if (h.touch) {
          var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o)
        }(t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1))
      } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
      (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x)
    }
  };
  var T = {
      setBreakpoint: function() {
        var e = this.activeIndex,
          t = this.loopedSlides;
        void 0 === t && (t = 0);
        var i = this.params,
          s = i.breakpoints;
        if (s && (!s || 0 !== Object.keys(s).length)) {
          var a = this.getBreakpoint(s);
          if (a && this.currentBreakpoint !== a) {
            var r = a in s ? s[a] : this.originalParams,
              n = i.loop && r.slidesPerView !== i.slidesPerView;
            d.extend(this.params, r), d.extend(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
          }
        }
      },
      getBreakpoint: function(e) {
        if (e) {
          var i = !1,
            s = [];
          Object.keys(e).forEach(function(e) {
            s.push(e)
          }), s.sort(function(e, t) {
            return parseInt(e, 10) - parseInt(t, 10)
          });
          for (var a = 0; a < s.length; a += 1) {
            var r = s[a];
            r >= t.innerWidth && !i && (i = r)
          }
          return i || "max"
        }
      }
    },
    S = function() {
      return {
        isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
        isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
      };
      var e
    }();
  var C = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventIntercationOnTransition: !1,
      iOSEdgeSwipeDetection: !1,
      iOSEdgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
    M = {
      update: u,
      translate: v,
      transition: f,
      slide: m,
      loop: g,
      grabCursor: b,
      manipulation: w,
      events: E,
      breakpoints: T,
      checkOverflow: {
        checkOverflow: function() {
          var e = this.isLocked;
          this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
        }
      },
      classes: {
        addClasses: function() {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function(i) {
            e.push(t.containerModifierClass + i)
          }), s.addClass(e.join(" "))
        },
        removeClasses: function() {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "))
        }
      },
      images: {
        loadImage: function(e, i, s, a, r, n) {
          var o;

          function l() {
            n && n()
          }
          e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
        },
        preloadImages: function() {
          var e = this;

          function t() {
            void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
          }
        }
      }
    },
    z = {},
    k = function(e) {
      function t() {
        for (var i, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];
        1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function(e) {
          Object.keys(M[e]).forEach(function(i) {
            t.prototype[i] || (t.prototype[i] = M[e][i])
          })
        });
        var l = this;
        void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
          var t = l.modules[e];
          if (t.params) {
            var i = Object.keys(t.params)[0],
              s = t.params[i];
            if ("object" != typeof s) return;
            if (!(i in r && "enabled" in s)) return;
            !0 === r[i] && (r[i] = {
              enabled: !0
            }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
              enabled: !1
            })
          }
        });
        var p = d.extend({}, C);
        l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
        var c = s(l.params.el);
        if (a = c[0]) {
          if (c.length > 1) {
            var u = [];
            return c.each(function(e, i) {
              var s = d.extend({}, r, {
                el: i
              });
              u.push(new t(s))
            }), u
          }
          a.swiper = l, c.data("swiper", l);
          var v, f, m = c.children("." + l.params.wrapperClass);
          return d.extend(l, {
            $el: c,
            el: a,
            $wrapperEl: m,
            wrapperEl: m[0],
            classNames: [],
            slides: s(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function() {
              return "horizontal" === l.params.direction
            },
            isVertical: function() {
              return "vertical" === l.params.direction
            },
            rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
            rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
            wrongRTL: "-webkit-box" === m.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
              start: v[0],
              move: v[1],
              end: v[2]
            }, l.touchEventsDesktop = {
              start: f[0],
              move: f[1],
              end: f[2]
            }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: d.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), l.useModules(), l.params.init && l.init(), l
        }
      }
      e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
      var i = {
        extendedDefaults: {
          configurable: !0
        },
        defaults: {
          configurable: !0
        },
        Class: {
          configurable: !0
        },
        $: {
          configurable: !0
        }
      };
      return t.prototype.slidesPerViewDynamic = function() {
        var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;
        if (e.centeredSlides) {
          for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
          for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
        } else
          for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
        return r
      }, t.prototype.update = function() {
        var e = this;
        if (e && !e.destroyed) {
          var t = e.snapGrid,
            i = e.params;
          i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        function s() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
        }
      }, t.prototype.init = function() {
        this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
      }, t.prototype.destroy = function(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          n = i.slides;
        i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
          i.off(e)
        }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0
      }, t.extendDefaults = function(e) {
        d.extend(z, e)
      }, i.extendedDefaults.get = function() {
        return z
      }, i.defaults.get = function() {
        return C
      }, i.Class.get = function() {
        return e
      }, i.$.get = function() {
        return s
      }, Object.defineProperties(t, i), t
    }(p),
    P = {
      name: "device",
      proto: {
        device: y
      },
      static: {
        device: y
      }
    },
    $ = {
      name: "support",
      proto: {
        support: h
      },
      static: {
        support: h
      }
    },
    L = {
      name: "browser",
      proto: {
        browser: S
      },
      static: {
        browser: S
      }
    },
    I = {
      name: "resize",
      create: function() {
        var e = this;
        d.extend(e, {
          resize: {
            resizeHandler: function() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
            },
            orientationChangeHandler: function() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange")
            }
          }
        })
      },
      on: {
        init: function() {
          t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
        },
        destroy: function() {
          t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
        }
      }
    },
    D = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function(e, t) {
        void 0 === t && (t = {});
        var i = this,
          s = new(0, D.func)(function(e) {
            e.forEach(function(e) {
              i.emit("observerUpdate", e)
            })
          });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), i.observer.observers.push(s)
      },
      init: function() {
        if (h.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: !1
          }), this.observer.attach(this.$wrapperEl[0], {
            attributes: !1
          })
        }
      },
      destroy: function() {
        this.observer.observers.forEach(function(e) {
          e.disconnect()
        }), this.observer.observers = []
      }
    },
    O = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1
      },
      create: function() {
        d.extend(this, {
          observer: {
            init: D.init.bind(this),
            attach: D.attach.bind(this),
            destroy: D.destroy.bind(this),
            observers: []
          }
        })
      },
      on: {
        init: function() {
          this.observer.init()
        },
        destroy: function() {
          this.observer.destroy()
        }
      }
    },
    A = {
      update: function(e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.virtual,
          o = n.from,
          l = n.to,
          h = n.slides,
          p = n.slidesGrid,
          c = n.renderSlide,
          u = n.offset;
        t.updateActiveIndex();
        var v, f, m, g = t.activeIndex || 0;
        v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
        var b = Math.max((g || 0) - m, 0),
          w = Math.min((g || 0) + f, h.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

        function x() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
        }
        if (d.extend(t.virtual, {
            from: b,
            to: w,
            offset: y,
            slidesGrid: t.slidesGrid
          }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: y,
          from: b,
          to: w,
          slides: function() {
            for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
            return e
          }()
        }), void x();
        var E = [],
          T = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
        for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
        T.forEach(function(e) {
          t.$wrapperEl.append(c(h[e], e))
        }), E.sort(function(e, t) {
          return e < t
        }).forEach(function(e) {
          t.$wrapperEl.prepend(c(h[e], e))
        }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x()
      },
      renderSlide: function(e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
      },
      appendSlide: function(e) {
        this.virtual.slides.push(e), this.virtual.update(!0)
      },
      prependSlide: function(e) {
        if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
          var t = this.virtual.cache,
            i = {};
          Object.keys(t).forEach(function(e) {
            i[e + 1] = t[e]
          }), this.virtual.cache = i
        }
        this.virtual.update(!0), this.slideNext(0)
      }
    },
    G = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null
        }
      },
      create: function() {
        d.extend(this, {
          virtual: {
            update: A.update.bind(this),
            appendSlide: A.appendSlide.bind(this),
            prependSlide: A.prependSlide.bind(this),
            renderSlide: A.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {}
          }
        })
      },
      on: {
        beforeInit: function() {
          if (this.params.virtual.enabled) {
            this.classNames.push(this.params.containerModifierClass + "virtual");
            var e = {
              watchSlidesProgress: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
          }
        },
        setTranslate: function() {
          this.params.virtual.enabled && this.virtual.update()
        }
      }
    },
    H = {
      handle: function(i) {
        var s = this.rtlTranslate,
          a = i;
        a.originalEvent && (a = a.originalEvent);
        var r = a.keyCode || a.charCode;
        if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
        if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
          if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
            var n = !1;
            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
            var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
            s && (d.left -= this.$el[0].scrollLeft);
            for (var h = [
                [d.left, d.top],
                [d.left + this.width, d.top],
                [d.left, d.top + this.height],
                [d.left + this.width, d.top + this.height]
              ], p = 0; p < h.length; p += 1) {
              var c = h[p];
              c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
            }
            if (!n) return
          }
          this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r)
        }
      },
      enable: function() {
        this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
      },
      disable: function() {
        this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
      }
    },
    N = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0
        }
      },
      create: function() {
        d.extend(this, {
          keyboard: {
            enabled: !1,
            enable: H.enable.bind(this),
            disable: H.disable.bind(this),
            handle: H.handle.bind(this)
          }
        })
      },
      on: {
        init: function() {
          this.params.keyboard.enabled && this.keyboard.enable()
        },
        destroy: function() {
          this.keyboard.enabled && this.keyboard.disable()
        }
      }
    };
  var B = {
      lastScrollTime: d.now(),
      event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
        var t = "onwheel" in e;
        if (!t) {
          var i = e.createElement("div");
          i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
        }
        return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
      }() ? "wheel" : "mousewheel",
      normalize: function(e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
          spinX: t,
          spinY: i,
          pixelX: s,
          pixelY: a
        }
      },
      handleMouseEnter: function() {
        this.mouseEntered = !0
      },
      handleMouseLeave: function() {
        this.mouseEntered = !1
      },
      handle: function(e) {
        var i = e,
          s = this,
          a = s.params.mousewheel;
        if (!s.mouseEntered && !a.releaseOnEdges) return !0;
        i.originalEvent && (i = i.originalEvent);
        var r = 0,
          n = s.rtlTranslate ? -1 : 1,
          o = B.normalize(i);
        if (a.forceToAxis)
          if (s.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            r = o.pixelX * n
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            r = o.pixelY
          }
        else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
        if (0 === r) return !0;
        if (a.invert && (r = -r), s.params.freeMode) {
          s.params.loop && s.loopFix();
          var l = s.getTranslate() + r * a.sensitivity,
            h = s.isBeginning,
            p = s.isEnd;
          if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function() {
              s.slideToClosest()
            }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0
        } else {
          if (d.now() - s.mousewheel.lastScrollTime > 60)
            if (r < 0)
              if (s.isEnd && !s.params.loop || s.animating) {
                if (a.releaseOnEdges) return !0
              } else s.slideNext(), s.emit("scroll", i);
          else if (s.isBeginning && !s.params.loop || s.animating) {
            if (a.releaseOnEdges) return !0
          } else s.slidePrev(), s.emit("scroll", i);
          s.mousewheel.lastScrollTime = (new t.Date).getTime()
        }
        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
      },
      enable: function() {
        if (!B.event) return !1;
        if (this.mousewheel.enabled) return !1;
        var e = this.$el;
        return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
      },
      disable: function() {
        if (!B.event) return !1;
        if (!this.mousewheel.enabled) return !1;
        var e = this.$el;
        return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
      }
    },
    X = {
      update: function() {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
        }
      },
      init: function() {
        var e, t, i = this,
          a = i.params.navigation;
        (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function(e) {
          e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
        }), t && t.length > 0 && t.on("click", function(e) {
          e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
        }), d.extend(i.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }))
      },
      destroy: function() {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
      }
    },
    Y = {
      update: function() {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
          if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
            var o, l, d, h = this.pagination.bullets;
            if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function(e, a) {
              var r = s(a),
                n = r.index();
              n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
            });
            else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
              p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
            }
            if (t.dynamicBullets) {
              var v = Math.min(h.length, t.dynamicMainBullets + 4),
                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                m = e ? "right" : "left";
              h.css(this.isHorizontal() ? m : "top", f + "px")
            }
          }
          if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
            var g;
            g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
            var b = (i + 1) / n,
              w = 1,
              y = 1;
            "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed)
          }
          "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
        }
      },
      render: function() {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
            i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
          }
          "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
        }
      },
      init: function() {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = s(t.el);
          0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
            t.preventDefault();
            var i = s(this).index() * e.params.slidesPerGroup;
            e.params.loop && (i += e.loopedSlides), e.slideTo(i)
          }), d.extend(e.pagination, {
            $el: i,
            el: i[0]
          }))
        }
      },
      destroy: function() {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
        }
      }
    },
    V = {
      setTranslate: function() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
            n[0].style.opacity = 0, n.transition(400)
          }, 1e3))
        }
      },
      setTransition: function(e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
      },
      updateSize: function() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          t[0].style.width = "", t[0].style.height = "";
          var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
            trackSize: a,
            divider: r,
            moveDivider: n,
            dragSize: s
          }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
        }
      },
      setDragPosition: function(e) {
        var t, i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize;
        t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
      },
      onDragStart: function(e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
      },
      onDragMove: function(e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
      },
      onDragEnd: function(e) {
        var t = this.params.scrollbar,
          i = this.scrollbar.$el;
        this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() {
          i.css("opacity", 0), i.transition(400)
        }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
      },
      enableDraggable: function() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && {
              passive: !1,
              capture: !1
            },
            o = !(!h.passiveListener || !a.passiveListener) && {
              passive: !0,
              capture: !1
            };
          h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
        }
      },
      disableDraggable: function() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && {
              passive: !1,
              capture: !1
            },
            o = !(!h.passiveListener || !a.passiveListener) && {
              passive: !0,
              capture: !1
            };
          h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
        }
      },
      init: function() {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
          this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
          var r = a.find("." + this.params.scrollbar.dragClass);
          0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
            $el: a,
            el: a[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && e.enableDraggable()
        }
      },
      destroy: function() {
        this.scrollbar.disableDraggable()
      }
    },
    R = {
      setTransform: function(e, t) {
        var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");
        if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          a[0].style.opacity = p
        }
        if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
        else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
        }
      },
      setTranslate: function() {
        var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
          e.parallax.setTransform(i, a)
        }), i.each(function(t, i) {
          var n = i.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
            e.parallax.setTransform(i, n)
          })
        })
      },
      setTransition: function(e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
          var a = s(i),
            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (r = 0), a.transition(r)
        })
      }
    },
    F = {
      getDistanceBetweenTouches: function(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
      },
      onGestureStart: function(e) {
        var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e)
        }
        a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
      },
      onGestureChange: function(e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!h.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e)
        }
        s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
      },
      onGestureEnd: function(e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!h.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
          i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
        }
        s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
      },
      onTouchStart: function(e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
      },
      onTouchMove: function(e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
              if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
              if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
            }
            e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
          }
        }
      },
      onTouchEnd: function() {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
          i.isTouched = !1, i.isMoved = !1;
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          i.currentX = o, i.currentY = d;
          var p = i.width * e.scale,
            c = i.height * e.scale;
          i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
        }
      },
      onTransitionEnd: function() {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
      },
      toggle: function(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e)
      },
      in: function(e) {
        var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
      },
      out: function() {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
      },
      enable: function() {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
        }
      },
      disable: function() {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
        }
      }
    },
    W = {
      loadInSlide: function(e, t) {
        void 0 === t && (t = !0);
        var i = this,
          a = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
          !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
            var o = s(n);
            o.addClass(a.loadingClass);
            var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes");
            i.loadImage(o[0], d || l, h, p, !1, function() {
              if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                  var e = r.attr("data-swiper-slide-index");
                  if (r.hasClass(i.params.slideDuplicateClass)) {
                    var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                    i.lazy.loadInSlide(s.index(), !1)
                  } else {
                    var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    i.lazy.loadInSlide(n.index(), !1)
                  }
                }
                i.emit("lazyImageReady", r[0], o[0])
              }
            }), i.emit("lazyImageLoad", r[0], o[0])
          })
        }
      },
      load: function() {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;

        function d(e) {
          if (n) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
          } else if (a[e]) return !0;
          return !1
        }

        function h(e) {
          return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
        }
        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
          var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
          e.lazy.loadInSlide(a)
        });
        else if (l > 1)
          for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
            for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
            for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
          } else {
            var b = t.children("." + i.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(h(b));
            var w = t.children("." + i.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(h(w))
          }
      }
    },
    q = {
      LinearSpline: function(e, t) {
        var i, s, a, r, n, o = function(e, t) {
          for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
          return i
        };
        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
        }, this
      },
      getInterpolateFunction: function(e) {
        this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid))
      },
      setTranslate: function(e, t) {
        var i, s, a = this,
          r = a.controller.control;

        function n(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]);
        else r instanceof k && t !== r && n(r)
      },
      setTransition: function(e, t) {
        var i, s = this,
          a = s.controller.control;

        function r(t) {
          t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
            a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
          }))
        }
        if (Array.isArray(a))
          for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]);
        else a instanceof k && t !== a && r(a)
      }
    },
    j = {
      makeElFocusable: function(e) {
        return e.attr("tabIndex", "0"), e
      },
      addElRole: function(e, t) {
        return e.attr("role", t), e
      },
      addElLabel: function(e, t) {
        return e.attr("aria-label", t), e
      },
      disableEl: function(e) {
        return e.attr("aria-disabled", !0), e
      },
      enableEl: function(e) {
        return e.attr("aria-disabled", !1), e
      },
      onEnterKey: function(e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = s(e.target);
          this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
        }
      },
      notify: function(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e))
      },
      updateNavigation: function() {
        if (!this.params.loop) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
        }
      },
      updatePagination: function() {
        var e = this,
          t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
          var r = s(a);
          e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
        })
      },
      init: function() {
        this.$el.append(this.a11y.liveRegion);
        var e, t, i = this.params.a11y;
        this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
      },
      destroy: function() {
        var e, t;
        this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
      }
    },
    K = {
      init: function() {
        if (this.params.history) {
          if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
          var e = this.history;
          e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
        }
      },
      destroy: function() {
        this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
      },
      setHistoryPopState: function() {
        this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
      },
      getPathValues: function() {
        var e = t.location.pathname.slice(1).split("/").filter(function(e) {
            return "" !== e
          }),
          i = e.length;
        return {
          key: e[i - 2],
          value: e[i - 1]
        }
      },
      setHistory: function(e, i) {
        if (this.history.initialized && this.params.history.enabled) {
          var s = this.slides.eq(i),
            a = K.slugify(s.attr("data-history"));
          t.location.pathname.includes(e) || (a = e + "/" + a);
          var r = t.history.state;
          r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
            value: a
          }, null, a) : t.history.pushState({
            value: a
          }, null, a))
        }
      },
      slugify: function(e) {
        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
      },
      scrollToSlide: function(e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
              var n = r.index();
              this.slideTo(n, e, i)
            }
          } else this.slideTo(0, e, i)
      }
    },
    U = {
      onHashCange: function() {
        var t = e.location.hash.replace("#", "");
        t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
      },
      setHash: function() {
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
          if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            e.location.hash = s || ""
          }
      },
      init: function() {
        if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i)
            for (var a = 0, r = this.slides.length; a < r; a += 1) {
              var n = this.slides.eq(a);
              if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                var o = n.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
              }
            }
          this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
        }
      },
      destroy: function() {
        this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
      }
    },
    _ = {
      run: function() {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
        }, i)
      },
      start: function() {
        return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
      },
      stop: function() {
        return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
      },
      pause: function(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
          t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
        }) : (t.autoplay.paused = !1, t.autoplay.run())))
      }
    },
    Z = {
      setTranslate: function() {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || (a = s, s = 0);
          var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: r
          }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
        }
      },
      setTransition: function(e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
          var a = !1;
          i.transitionEnd(function() {
            if (!a && t && !t.destroyed) {
              a = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
            }
          })
        }
      }
    },
    Q = {
      setTranslate: function() {
        var e, t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
        for (var u = 0; u < a.length; u += 1) {
          var v = a.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && (m = -m, g = Math.floor(-m / 360));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
          var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
          if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
            var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0))
          }
        }
        if (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px"
          }), d.shadow)
          if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
          else {
            var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
              z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
              k = d.shadowScale,
              P = d.shadowScale / z,
              $ = d.shadowOffset;
            e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
          } var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
        i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
      },
      setTransition: function(e) {
        var t = this.$el;
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
      }
    },
    J = {
      setTranslate: function() {
        for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
          var a = e.eq(i),
            r = a[0].progress;
          this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;
          if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
            var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
            0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
          }
          a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
        }
      },
      setTransition: function(e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          i.eq(s).transitionEnd(function() {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
            }
          })
        }
      }
    },
    ee = {
      setTranslate: function() {
        for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
          var f = i.eq(u),
            m = r[u],
            g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = o ? 0 : n.stretch * g,
            E = o ? n.stretch * g : 0;
          Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
          var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
          if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
            var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
          }
        }(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
      },
      setTransition: function(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
      }
    },
    te = [P, $, L, I, O, G, N, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container"
        }
      },
      create: function() {
        d.extend(this, {
          mousewheel: {
            enabled: !1,
            enable: B.enable.bind(this),
            disable: B.disable.bind(this),
            handle: B.handle.bind(this),
            handleMouseEnter: B.handleMouseEnter.bind(this),
            handleMouseLeave: B.handleMouseLeave.bind(this),
            lastScrollTime: d.now()
          }
        })
      },
      on: {
        init: function() {
          this.params.mousewheel.enabled && this.mousewheel.enable()
        },
        destroy: function() {
          this.mousewheel.enabled && this.mousewheel.disable()
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function() {
        d.extend(this, {
          navigation: {
            init: X.init.bind(this),
            update: X.update.bind(this),
            destroy: X.destroy.bind(this)
          }
        })
      },
      on: {
        init: function() {
          this.navigation.init(), this.navigation.update()
        },
        toEdge: function() {
          this.navigation.update()
        },
        fromEdge: function() {
          this.navigation.update()
        },
        destroy: function() {
          this.navigation.destroy()
        },
        click: function(e) {
          var t = this.navigation,
            i = t.$nextEl,
            a = t.$prevEl;
          !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function() {
        d.extend(this, {
          pagination: {
            init: Y.init.bind(this),
            render: Y.render.bind(this),
            update: Y.update.bind(this),
            destroy: Y.destroy.bind(this),
            dynamicBulletIndex: 0
          }
        })
      },
      on: {
        init: function() {
          this.pagination.init(), this.pagination.render(), this.pagination.update()
        },
        activeIndexChange: function() {
          this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
        },
        snapIndexChange: function() {
          this.params.loop || this.pagination.update()
        },
        slidesLengthChange: function() {
          this.params.loop && (this.pagination.render(), this.pagination.update())
        },
        snapGridLengthChange: function() {
          this.params.loop || (this.pagination.render(), this.pagination.update())
        },
        destroy: function() {
          this.pagination.destroy()
        },
        click: function(e) {
          this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function() {
        d.extend(this, {
          scrollbar: {
            init: V.init.bind(this),
            destroy: V.destroy.bind(this),
            updateSize: V.updateSize.bind(this),
            setTranslate: V.setTranslate.bind(this),
            setTransition: V.setTransition.bind(this),
            enableDraggable: V.enableDraggable.bind(this),
            disableDraggable: V.disableDraggable.bind(this),
            setDragPosition: V.setDragPosition.bind(this),
            onDragStart: V.onDragStart.bind(this),
            onDragMove: V.onDragMove.bind(this),
            onDragEnd: V.onDragEnd.bind(this),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        })
      },
      on: {
        init: function() {
          this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
        },
        update: function() {
          this.scrollbar.updateSize()
        },
        resize: function() {
          this.scrollbar.updateSize()
        },
        observerUpdate: function() {
          this.scrollbar.updateSize()
        },
        setTranslate: function() {
          this.scrollbar.setTranslate()
        },
        setTransition: function(e) {
          this.scrollbar.setTransition(e)
        },
        destroy: function() {
          this.scrollbar.destroy()
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function() {
        d.extend(this, {
          parallax: {
            setTransform: R.setTransform.bind(this),
            setTranslate: R.setTranslate.bind(this),
            setTransition: R.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
        },
        init: function() {
          this.params.parallax && this.parallax.setTranslate()
        },
        setTranslate: function() {
          this.params.parallax && this.parallax.setTranslate()
        },
        setTransition: function(e) {
          this.params.parallax && this.parallax.setTransition(e)
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function() {
        var e = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
          t[i] = F[i].bind(e)
        }), d.extend(e, {
          zoom: t
        })
      },
      on: {
        init: function() {
          this.params.zoom.enabled && this.zoom.enable()
        },
        destroy: function() {
          this.zoom.disable()
        },
        touchStart: function(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e)
        },
        touchEnd: function(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e)
        },
        doubleTap: function(e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
        },
        transitionEnd: function() {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function() {
        d.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: W.load.bind(this),
            loadInSlide: W.loadInSlide.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
        },
        init: function() {
          this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
        },
        scroll: function() {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
        },
        resize: function() {
          this.params.lazy.enabled && this.lazy.load()
        },
        scrollbarDragMove: function() {
          this.params.lazy.enabled && this.lazy.load()
        },
        transitionStart: function() {
          this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
        },
        transitionEnd: function() {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function() {
        d.extend(this, {
          controller: {
            control: this.params.controller.control,
            getInterpolateFunction: q.getInterpolateFunction.bind(this),
            setTranslate: q.setTranslate.bind(this),
            setTransition: q.setTransition.bind(this)
          }
        })
      },
      on: {
        update: function() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
        },
        resize: function() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
        },
        observerUpdate: function() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
        },
        setTranslate: function(e, t) {
          this.controller.control && this.controller.setTranslate(e, t)
        },
        setTransition: function(e, t) {
          this.controller.control && this.controller.setTransition(e, t)
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}"
        }
      },
      create: function() {
        var e = this;
        d.extend(e, {
          a11y: {
            liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          }
        }), Object.keys(j).forEach(function(t) {
          e.a11y[t] = j[t].bind(e)
        })
      },
      on: {
        init: function() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
        },
        toEdge: function() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        },
        fromEdge: function() {
          this.params.a11y.enabled && this.a11y.updateNavigation()
        },
        paginationUpdate: function() {
          this.params.a11y.enabled && this.a11y.updatePagination()
        },
        destroy: function() {
          this.params.a11y.enabled && this.a11y.destroy()
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: "slides"
        }
      },
      create: function() {
        d.extend(this, {
          history: {
            init: K.init.bind(this),
            setHistory: K.setHistory.bind(this),
            setHistoryPopState: K.setHistoryPopState.bind(this),
            scrollToSlide: K.scrollToSlide.bind(this),
            destroy: K.destroy.bind(this)
          }
        })
      },
      on: {
        init: function() {
          this.params.history.enabled && this.history.init()
        },
        destroy: function() {
          this.params.history.enabled && this.history.destroy()
        },
        transitionEnd: function() {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function() {
        d.extend(this, {
          hashNavigation: {
            initialized: !1,
            init: U.init.bind(this),
            destroy: U.destroy.bind(this),
            setHash: U.setHash.bind(this),
            onHashCange: U.onHashCange.bind(this)
          }
        })
      },
      on: {
        init: function() {
          this.params.hashNavigation.enabled && this.hashNavigation.init()
        },
        destroy: function() {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy()
        },
        transitionEnd: function() {
          this.hashNavigation.initialized && this.hashNavigation.setHash()
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create: function() {
        d.extend(this, {
          autoplay: {
            running: !1,
            paused: !1,
            run: _.run.bind(this),
            start: _.start.bind(this),
            stop: _.stop.bind(this),
            pause: _.pause.bind(this)
          }
        })
      },
      on: {
        init: function() {
          this.params.autoplay.enabled && this.autoplay.start()
        },
        beforeTransitionStart: function(e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
        },
        sliderFirstMove: function() {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
        },
        destroy: function() {
          this.autoplay.running && this.autoplay.stop()
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function() {
        d.extend(this, {
          fadeEffect: {
            setTranslate: Z.setTranslate.bind(this),
            setTransition: Z.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          if ("fade" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "fade");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e)
          }
        },
        setTranslate: function() {
          "fade" === this.params.effect && this.fadeEffect.setTranslate()
        },
        setTransition: function(e) {
          "fade" === this.params.effect && this.fadeEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function() {
        d.extend(this, {
          cubeEffect: {
            setTranslate: Q.setTranslate.bind(this),
            setTransition: Q.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          if ("cube" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e)
          }
        },
        setTranslate: function() {
          "cube" === this.params.effect && this.cubeEffect.setTranslate()
        },
        setTransition: function(e) {
          "cube" === this.params.effect && this.cubeEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function() {
        d.extend(this, {
          flipEffect: {
            setTranslate: J.setTranslate.bind(this),
            setTransition: J.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          if ("flip" === this.params.effect) {
            this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
            var e = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            d.extend(this.params, e), d.extend(this.originalParams, e)
          }
        },
        setTranslate: function() {
          "flip" === this.params.effect && this.flipEffect.setTranslate()
        },
        setTransition: function(e) {
          "flip" === this.params.effect && this.flipEffect.setTransition(e)
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function() {
        d.extend(this, {
          coverflowEffect: {
            setTranslate: ee.setTranslate.bind(this),
            setTransition: ee.setTransition.bind(this)
          }
        })
      },
      on: {
        beforeInit: function() {
          "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
        },
        setTranslate: function() {
          "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
        },
        setTransition: function(e) {
          "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
        }
      }
    }];
  return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k
});


/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

! function(l) {
  var c = l(window),
    f = c.height();
  c.resize(function() {
    f = c.height()
  }), l.fn.parallax = function(i, e, n) {
    var r, u, h = l(this);

    function t() {
      var o = c.scrollTop();
      h.each(function() {
        var n = l(this),
          t = n.offset().top;
        t + r(n) < o || o + f < t || h.css("backgroundPosition", i + " " + Math.round((u - o) * e) + "px")
      })
    }
    h.each(function() {
      u = h.offset().top
    }), r = n ? function(n) {
      return n.outerHeight(!0)
    } : function(n) {
      return n.height()
    }, (arguments.length < 1 || null === i) && (i = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === n) && (n = !0), c.bind("scroll", t).resize(t), t()
  }
}(jQuery);


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
  "use strict";
  var b = window.Slick || {};
  b = function() {
    function c(c, d) {
      var f, e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
    }
    var b = 0;
    return c
  }(), b.prototype.activateADA = function() {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;
    else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function() {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed)
    }
  }, b.prototype.animateSlide = function(b, c) {
    var d = {},
      e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function() {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.getNavTarget = function() {
    var b = this,
      c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c
  }, b.prototype.asNavFor = function(b) {
    var c = this,
      d = c.getNavTarget();
    null !== d && "object" == typeof d && d.each(function() {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function(a) {
    var b = this,
      c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function() {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function() {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function() {
    var a = this,
      b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
  }, b.prototype.buildArrows = function() {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, b.prototype.buildDots = function() {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function() {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function() {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function(b, c) {
    var e, f, g, d = this,
      h = !1,
      i = d.$slider.width(),
      j = window.innerWidth || a(window).width();
    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;
      for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
    }
  }, b.prototype.changeSlide = function(b, c) {
    var f, g, h, d = this,
      e = a(b.currentTarget);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function(a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
    else
      for (var e in c) {
        if (a < c[e]) {
          a = d;
          break
        }
        d = c[e]
      }
    return a
  }, b.prototype.cleanUpEvents = function() {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpSlideEvents = function() {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.cleanUpRows = function() {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
  }, b.prototype.clickHandler = function(a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function(b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function(a) {
    var b = this,
      c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function(a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function() {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.fadeSlideOut = function(a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.focusHandler = function() {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function() {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
      }, 0)
    })
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function() {
    var a = this,
      b = 0,
      c = 0,
      d = 0;
    if (a.options.infinite === !0)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else if (a.options.centerMode === !0) d = a.slideCount;
    else if (a.options.asNavFor)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1
  }, b.prototype.getLeft = function(a) {
    var c, d, f, b = this,
      e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function() {
    var e, a = this,
      b = 0,
      c = 0,
      d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function() {
    return this
  }, b.prototype.getSlideCount = function() {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b)
  }, b.prototype.init = function(b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
  }, b.prototype.initADA = function() {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      })
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
  }, b.prototype.initArrowEvents = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide))
  }, b.prototype.initDotEvents = function() {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.initSlideEvents = function() {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
  }, b.prototype.initializeEvents = function() {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
  }, b.prototype.keyHandler = function(a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }))
  }, b.prototype.lazyLoad = function() {
    function g(c) {
      a("img[data-lazy]", c).each(function() {
        var c = a(this),
          d = a(this).attr("data-lazy"),
          e = document.createElement("img");
        e.onload = function() {
          c.animate({
            opacity: 0
          }, 100, function() {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function() {
              c.removeAttr("data-lazy").removeClass("slick-loading")
            }), b.$slider.trigger("lazyLoaded", [b, c, d])
          })
        }, e.onerror = function() {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
        }, e.src = d
      })
    }
    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function() {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function() {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.orientationChange = function() {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function() {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function() {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
  }, b.prototype.postSlide = function(a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
  }, b.prototype.prev = b.prototype.slickPrev = function() {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, b.prototype.preventDefault = function(a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function(b) {
    b = b || 1;
    var e, f, g, c = this,
      d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
    }, g.onerror = function() {
      3 > b ? setTimeout(function() {
        c.progressiveLazyLoad(b + 1)
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
  }, b.prototype.refresh = function(b) {
    var d, e, c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.registerBreakpoints = function() {
    var c, d, e, b = this,
      f = b.options.responsive || null;
    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";
      for (c in f)
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
        } b.breakpoints.sort(function(a, c) {
        return b.options.mobileFirst ? a - c : c - a
      })
    }
  }, b.prototype.reinit = function() {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
  }, b.prototype.resize = function() {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
  }, b.prototype.setCSS = function(a) {
    var d, e, b = this,
      c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function() {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function() {
    var c, b = this;
    b.$slides.each(function(d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      })
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    })
  }, b.prototype.setHeight = function() {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function() {
    var c, d, e, f, h, b = this,
      g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
    else if ("multiple" === h) a.each(e, function(a, c) {
      b.options[a] = c
    });
    else if ("responsive" === h)
      for (d in f)
        if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
        else {
          for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
          b.options.responsive.push(f[d])
        } g && (b.unload(), b.reinit())
  }, b.prototype.setPosition = function() {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function() {
    var a = this,
      b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function(a) {
    var c, d, e, f, b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
      d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function() {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.interrupt = function(a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a
  }, b.prototype.selectHandler = function(b) {
    var c = this,
      d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
  }, b.prototype.slideHandler = function(a, b, c) {
    var d, e, f, g, j, h = null,
      i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
      i.postSlide(d)
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
      i.postSlide(d)
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
      i.postSlide(e)
    })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
      i.postSlide(e)
    }) : i.postSlide(e))))
  }, b.prototype.startLoad = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function() {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
  }, b.prototype.swipeEnd = function(a) {
    var c, d, b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;
        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
      }
      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function(a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;
      case "move":
        b.swipeMove(a);
        break;
      case "end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function(a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
  }, b.prototype.swipeStart = function(a) {
    var c, b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function() {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function(a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function() {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, b.prototype.updateDots = function() {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function() {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
  }, a.fn.slick = function() {
    var f, g, a = this,
      c = arguments[0],
      d = Array.prototype.slice.call(arguments, 1),
      e = a.length;
    for (f = 0; e > f; f++)
      if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    return a
  }
});


// instafeed 1.4.1
// Generated by CoffeeScript 1.9.3

(function() {
  var t, e, o;

  function i(t, e) {
    var o, i;
    if (this.options = {
        target: "instafeed",
        get: "popular",
        resolution: "thumbnail",
        sortBy: "none",
        links: !0,
        mock: !1,
        useHttp: !1
      }, "object" == typeof t)
      for (o in t) i = t[o], this.options[o] = i;
    this.context = null != e ? e : this, this.unique = this._genKey()
  }
  i.prototype.hasNext = function() {
    return "string" == typeof this.context.nextUrl && 0 < this.context.nextUrl.length
  }, i.prototype.next = function() {
    return !!this.hasNext() && this.run(this.context.nextUrl)
  }, i.prototype.run = function(t) {
    var e, o;
    if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
    if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
    return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && ((o = document.createElement("script")).id = "instafeed-fetcher", o.src = t || this._buildUrl(), document.getElementsByTagName("head")[0].appendChild(o), e = "instafeedCache" + this.unique, window[e] = new i(this.options, this), window[e].unique = this.unique), !0
  }, i.prototype.parse = function(t) {
    var e, o, i, n, r, s, a, p, l, h, c, u, d, f, m, g, y, w, k, b, _, E, I, x, v, N, B, j;
    if ("object" != typeof t) {
      if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
      throw new Error("Invalid JSON response")
    }
    if (200 !== t.meta.code) {
      if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, t.meta.error_message), !1;
      throw new Error("Error from Instagram: " + t.meta.error_message)
    }
    if (0 === t.data.length) {
      if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
      throw new Error("No images were returned from Instagram")
    }
    if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, t), this.context.nextUrl = "", null != t.pagination && (this.context.nextUrl = t.pagination.next_url), "none" !== this.options.sortBy) switch (v = "least" === (N = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"))[0], N[1]) {
      case "random":
        t.data.sort(function() {
          return .5 - Math.random()
        });
        break;
      case "recent":
        t.data = this._sortBy(t.data, "created_time", v);
        break;
      case "liked":
        t.data = this._sortBy(t.data, "likes.count", v);
        break;
      case "commented":
        t.data = this._sortBy(t.data, "comments.count", v);
        break;
      default:
        throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
    }
    if ("undefined" != typeof document && null !== document && !1 === this.options.mock) {
      if (u = t.data, x = parseInt(this.options.limit, 10), null != this.options.limit && u.length > x && (u = u.slice(0, x)), s = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (u = this._filter(u, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
        for (a = "", j = document.createElement("div"), p = 0, b = u.length; p < b; p++) {
          if ("object" != typeof(h = (l = u[p]).images[this.options.resolution])) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
          g = h.width, m = "square", (f = h.height) < g && (m = "landscape"), g < f && (m = "portrait"), c = h.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (c = c.replace(/https?:\/\//, "//")), a += this._makeTemplate(this.options.template, {
            model: l,
            id: l.id,
            link: l.link,
            type: l.type,
            image: c,
            width: g,
            height: f,
            orientation: m,
            caption: this._getObjectProperty(l, "caption.text"),
            likes: l.likes.count,
            comments: l.comments.count,
            location: this._getObjectProperty(l, "location.name")
          })
        }
        for (j.innerHTML = a, n = [], i = 0, o = j.childNodes.length; i < o;) n.push(j.childNodes[i]), i += 1;
        for (w = 0, _ = n.length; w < _; w++) I = n[w], s.appendChild(I)
      } else
        for (k = 0, E = u.length; k < E; k++) {
          if (l = u[k], d = document.createElement("img"), "object" != typeof(h = l.images[this.options.resolution])) throw r = "No image found for resolution: " + this.options.resolution + ".", new Error(r);
          c = h.url, 0 <= window.location.protocol.indexOf("http") && !this.options.useHttp && (c = c.replace(/https?:\/\//, "//")), d.src = c, !0 === this.options.links ? ((e = document.createElement("a")).href = l.link, e.appendChild(d), s.appendChild(e)) : s.appendChild(d)
        }
      if ("string" == typeof(B = this.options.target) && (B = document.getElementById(B)), null == B) throw r = 'No element with id="' + this.options.target + '" on page.', new Error(r);
      B.appendChild(s), document.getElementsByTagName("head")[0].removeChild(document.getElementById("instafeed-fetcher")), y = "instafeedCache" + this.unique, window[y] = void 0;
      try {
        delete window[y]
      } catch (t) {}
    }
    return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
  }, i.prototype._buildUrl = function() {
    var t, e;
    switch (this.options.get) {
      case "popular":
        t = "media/popular";
        break;
      case "tagged":
        if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
        t = "tags/" + this.options.tagName + "/media/recent";
        break;
      case "location":
        if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
        t = "locations/" + this.options.locationId + "/media/recent";
        break;
      case "user":
        if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
        t = "users/" + this.options.userId + "/media/recent";
        break;
      default:
        throw new Error("Invalid option for get: '" + this.options.get + "'.")
    }
    return e = "https://api.instagram.com/v1/" + t, null != this.options.accessToken ? e += "?access_token=" + this.options.accessToken : e += "?client_id=" + this.options.clientId, null != this.options.limit && (e += "&count=" + this.options.limit), e += "&callback=instafeedCache" + this.unique + ".parse"
  }, i.prototype._genKey = function() {
    var t = function() {
      return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    };
    return "" + t() + t() + t() + t()
  }, i.prototype._makeTemplate = function(t, e) {
    for (var o, i, n, r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, s = t; r.test(s);) i = s.match(r)[1], n = null != (o = this._getObjectProperty(e, i)) ? o : "", s = s.replace(r, function() {
      return "" + n
    });
    return s
  }, i.prototype._getObjectProperty = function(t, e) {
    for (var o, i = (e = e.replace(/\[(\w+)\]/g, ".$1")).split("."); i.length;) {
      if (o = i.shift(), !(null != t && o in t)) return null;
      t = t[o]
    }
    return t
  }, i.prototype._sortBy = function(t, n, r) {
    var e = function(t, e) {
      var o = this._getObjectProperty(t, n),
        i = this._getObjectProperty(e, n);
      return r ? i < o ? 1 : -1 : o < i ? 1 : -1
    };
    return t.sort(e.bind(this)), t
  }, i.prototype._filter = function(t, e) {
    for (var o = [], i = function(t) {
        if (e(t)) return o.push(t)
      }, n = 0, r = t.length; n < r; n++) i(t[n]);
    return o
  }, t = i, e = this, o = function() {
    return t
  }, "function" == typeof define && define.amd ? define([], o) : "object" == typeof module && module.exports ? module.exports = t : e.Instafeed = t
}).call(this);


// ==================================================
// fancyBox v3.3.1
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================

! function(t, e, n, o) {
  "use strict";

  function i(t, e) {
    var o, i, a = [],
      s = 0;
    t && t.isDefaultPrevented() || (t.preventDefault(), e = t && t.data ? t.data.options : e || {}, o = e.$target || n(t.currentTarget), i = o.attr("data-fancybox") || "", i ? (a = e.selector ? n(e.selector) : t.data ? t.data.items : [], a = a.length ? a.filter('[data-fancybox="' + i + '"]') : n('[data-fancybox="' + i + '"]'), s = a.index(o), s < 0 && (s = 0)) : a = [o], n.fancybox.open(a, e, s))
  }
  if (t.console = t.console || {
      info: function(t) {}
    }, n) {
    if (n.fn.fancybox) return void console.info("fancyBox already initialized");
    var a = {
        loop: !1,
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
          preload: !1
        },
        ajax: {
          settings: {
            data: {
              fancybox: !0
            }
          }
        },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {
            scrolling: "auto"
          }
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
          smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
          arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
          arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'
        },
        parentEl: "body",
        autoFocus: !1,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
          autoStart: !1
        },
        touch: {
          vertical: !0,
          momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
          autoStart: !1,
          speed: 4e3
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function(t, e) {
          return "image" === t.type && "zoom"
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          idleTime: !1,
          clickContent: function(t, e) {
            return "image" === t.type && "toggleControls"
          },
          clickSlide: function(t, e) {
            return "image" === t.type ? "toggleControls" : "close"
          },
          dblclickContent: function(t, e) {
            return "image" === t.type && "zoom"
          },
          dblclickSlide: function(t, e) {
            return "image" === t.type && "zoom"
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom"
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zurück",
            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Maßstab"
          }
        }
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function(t) {
        return t && t.hasOwnProperty && t instanceof n
      },
      d = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
          return t.setTimeout(e, 1e3 / 60)
        }
      }(),
      u = function() {
        var t, n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (t in i)
          if (n.style[t] !== o) return i[t];
        return "transitionend"
      }(),
      f = function(t) {
        return t && t.length && t[0].offsetHeight
      },
      p = function(t, e) {
        var o = n.extend(!0, {}, t, e);
        return n.each(e, function(t, e) {
          n.isArray(e) && (o[t] = e)
        }), o
      },
      h = function(t, o, i) {
        var a = this;
        a.opts = p({
          index: i
        }, n.fancybox.defaults), n.isPlainObject(o) && (a.opts = p(a.opts, o)), n.fancybox.isMobile && (a.opts = p(a.opts, a.opts.mobile)), a.id = a.opts.id || ++c, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(t), a.group.length && (a.$lastFocus = n(e.activeElement).trigger("blur"), a.init())
      };
    n.extend(h.prototype, {
      init: function() {
        var i, a, r, c = this,
          l = c.group[c.currIndex],
          d = l.opts,
          u = n.fancybox.scrollbarWidth;
        "image" === l.type || !/iPad|iPhone|iPod/.test(navigator.userAgent) || t.MSStream || n("body").hasClass("fancybox-iosfix") || n("body").addClass("fancybox-iosfix").css("top", -s.scrollTop()), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (u === o && (i = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), u = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth, i.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), r = "", n.each(d.buttons, function(t, e) {
          r += d.btnTpl[e] || ""
        }), a = n(c.translate(c, d.baseTpl.replace("{{buttons}}", r).replace("{{arrows}}", d.btnTpl.arrowLeft + d.btnTpl.arrowRight))).attr("id", "fancybox-container-" + c.id).addClass("fancybox-is-hidden").addClass(d.baseClass).data("FancyBox", c).appendTo(d.parentEl), c.$refs = {
          container: a
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
          c.$refs[t] = a.find(".fancybox-" + t)
        }), c.trigger("onInit"), c.activate(), c.jumpTo(c.currIndex)
      },
      translate: function(t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
          var i = n[e];
          return i === o ? t : i
        })
      },
      addContent: function(t) {
        var e, i = this,
          a = n.makeArray(t);
        n.each(a, function(t, e) {
          var a, s, r, c, l, d = {},
            u = {};
          n.isPlainObject(e) ? (d = e, u = e.opts || e) : "object" === n.type(e) && n(e).length ? (a = n(e), u = a.data() || {}, u = n.extend(!0, {}, u, u.options), u.$orig = a, d.src = i.opts.src || u.src || a.attr("href"), d.type || d.src || (d.type = "inline", d.src = e)) : d = {
            type: "html",
            src: e + ""
          }, d.opts = n.extend(!0, {}, i.opts, u), n.isArray(u.buttons) && (d.opts.buttons = u.buttons), s = d.type || d.opts.type, c = d.src || "", !s && c && ((r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (s = "video", d.opts.videoFormat || (d.opts.videoFormat = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : c.match(/\.(pdf)((\?|#).*)?$/i) ? s = "iframe" : "#" === c.charAt(0) && (s = "inline")), s ? d.type = s : i.trigger("objectNeedsType", d), d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = i.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.opts.$trigger && d.index === i.opts.index && (d.opts.$thumb = d.opts.$trigger.find("img:first")), d.opts.$thumb && d.opts.$thumb.length || !d.opts.$orig || (d.opts.$thumb = d.opts.$orig.find("img:first")), "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [i, d])), "function" === n.type(i.opts.caption) && (d.opts.caption = i.opts.caption.apply(e, [i, d])), d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === o ? "" : d.opts.caption + ""), "ajax" === d.type && (l = c.split(/\s+/, 2), l.length > 1 && (d.src = l.shift(), d.opts.filter = l.shift())), d.opts.modal && (d.opts = n.extend(!0, d.opts, {
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), i.group.push(d)
        }), Object.keys(i.slides).length && (i.updateControls(), e = i.Thumbs, e && e.isActive && (e.create(), e.focus()))
      },
      addEvents: function() {
        var o = this;
        o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
          t.stopPropagation(), t.preventDefault(), o.close(t)
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
          t.stopPropagation(), t.preventDefault(), o.previous()
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
          t.stopPropagation(), t.preventDefault(), o.next()
        }).on("click.fb", "[data-fancybox-zoom]", function(t) {
          o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
        }), s.on("orientationchange.fb resize.fb", function(t) {
          t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
            o.update()
          }) : (o.$refs.stage.hide(), setTimeout(function() {
            o.$refs.stage.show(), o.update()
          }, n.fancybox.isMobile ? 600 : 250))
        }), r.on("focusin.fb", function(t) {
          var o = n.fancybox ? n.fancybox.getInstance() : null;
          o.isClosing || !o.current || !o.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || o && "fixed" !== n(t.target).css("position") && !o.$refs.container.has(t.target).length && (t.stopPropagation(), o.focus())
        }), r.on("keydown.fb", function(t) {
          var e = o.current,
            i = t.keyCode || t.which;
          if (e && e.opts.keyboard && !(t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input") || n(t.target).is("textarea"))) return 8 === i || 27 === i ? (t.preventDefault(), void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void o.next()) : void o.trigger("afterKeydown", t, i)
        }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
          o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
        }), o.idleInterval = t.setInterval(function() {
          o.idleSecondsCounter++, o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
        }, 1e3))
      },
      removeEvents: function() {
        var e = this;
        s.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), e.idleInterval && (t.clearInterval(e.idleInterval), e.idleInterval = null)
      },
      previous: function(t) {
        return this.jumpTo(this.currPos - 1, t)
      },
      next: function(t) {
        return this.jumpTo(this.currPos + 1, t)
      },
      jumpTo: function(t, e) {
        var i, a, s, r, c, l, d, u = this,
          p = u.group.length;
        if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
          if (t = parseInt(t, 10), a = u.current ? u.current.opts.loop : u.opts.loop, !a && (t < 0 || t >= p)) return !1;
          if (i = u.firstRun = !Object.keys(u.slides).length, !(p < 2 && !i && u.isDragging)) {
            if (r = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, s = u.createSlide(t), p > 1 && ((a || s.index > 0) && u.createSlide(t - 1), (a || s.index < p - 1) && u.createSlide(t + 1)), u.current = s, u.currIndex = s.index, u.currPos = s.pos, u.trigger("beforeShow", i), u.updateControls(), l = n.fancybox.getTranslate(s.$slide), s.isMoved = (0 !== l.left || 0 !== l.top) && !s.$slide.hasClass("fancybox-animated"), s.forcedDuration = o, n.isNumeric(e) ? s.forcedDuration = e : e = s.opts[i ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), i) return s.opts.animationEffect && e && u.$refs.container.css("transition-duration", e + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), f(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), f(u.$refs.container), s.$slide.addClass("fancybox-slide--previous"), u.loadSlide(s), s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void u.preload("image");
            n.each(u.slides, function(t, e) {
              n.fancybox.stop(e.$slide)
            }), s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), s.isMoved ? (c = Math.round(s.$slide.width()), n.each(u.slides, function(t, o) {
              var i = o.pos - s.pos;
              n.fancybox.animate(o.$slide, {
                top: 0,
                left: i * c + i * o.opts.gutter
              }, e, function() {
                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), o.pos === u.currPos && (s.isMoved = !1, u.complete())
              })
            })) : u.$refs.stage.children().removeAttr("style"), s.isLoaded ? u.revealContent(s) : u.loadSlide(s), u.preload("image"), r.pos !== s.pos && (d = "fancybox-slide--" + (r.pos > s.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, e && (s.isMoved || s.opts.transitionEffect) && (s.isMoved ? r.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + s.opts.transitionEffect, n.fancybox.animate(r.$slide, d, e, function() {
              r.$slide.removeClass(d).removeAttr("style")
            }))))
          }
        }
      },
      createSlide: function(t) {
        var e, o, i = this;
        return o = t % i.group.length, o = o < 0 ? i.group.length + o : o, !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = n.extend(!0, {}, i.group[o], {
          pos: t,
          $slide: e,
          isLoaded: !1
        }), i.updateSlide(i.slides[t])), i.slides[t]
      },
      scaleToActual: function(t, e, i) {
        var a, s, r, c, l, d = this,
          u = d.current,
          f = u.$content,
          p = n.fancybox.getTranslate(u.$slide).width,
          h = n.fancybox.getTranslate(u.$slide).height,
          g = u.width,
          b = u.height;
        !d.isAnimating && f && "image" == u.type && u.isLoaded && !u.hasError && (n.fancybox.stop(f), d.isAnimating = !0, t = t === o ? .5 * p : t, e = e === o ? .5 * h : e, a = n.fancybox.getTranslate(f), a.top -= n.fancybox.getTranslate(u.$slide).top, a.left -= n.fancybox.getTranslate(u.$slide).left, c = g / a.width, l = b / a.height, s = .5 * p - .5 * g, r = .5 * h - .5 * b, g > p && (s = a.left * c - (t * c - t), s > 0 && (s = 0), s < p - g && (s = p - g)), b > h && (r = a.top * l - (e * l - e), r > 0 && (r = 0), r < h - b && (r = h - b)), d.updateCursor(g, b), n.fancybox.animate(f, {
          top: r,
          left: s,
          scaleX: c,
          scaleY: l
        }, i || 330, function() {
          d.isAnimating = !1
        }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
      },
      scaleToFit: function(t) {
        var e, o = this,
          i = o.current,
          a = i.$content;
        !o.isAnimating && a && "image" == i.type && i.isLoaded && !i.hasError && (n.fancybox.stop(a), o.isAnimating = !0, e = o.getFitPos(i), o.updateCursor(e.width, e.height), n.fancybox.animate(a, {
          top: e.top,
          left: e.left,
          scaleX: e.width / a.width(),
          scaleY: e.height / a.height()
        }, t || 330, function() {
          o.isAnimating = !1
        }))
      },
      getFitPos: function(t) {
        var e, n, o, i, a, s = this,
          r = t.$content,
          c = t.width || t.opts.width,
          l = t.height || t.opts.height,
          d = {};
        return !!(t.isLoaded && r && r.length) && (i = {
          top: parseInt(t.$slide.css("paddingTop"), 10),
          right: parseInt(t.$slide.css("paddingRight"), 10),
          bottom: parseInt(t.$slide.css("paddingBottom"), 10),
          left: parseInt(t.$slide.css("paddingLeft"), 10)
        }, e = parseInt(s.$refs.stage.width(), 10) - (i.left + i.right), n = parseInt(s.$refs.stage.height(), 10) - (i.top + i.bottom), c && l || (c = e, l = n), o = Math.min(1, e / c, n / l), c = Math.floor(o * c), l = Math.floor(o * l), "image" === t.type ? (d.top = Math.floor(.5 * (n - l)) + i.top, d.left = Math.floor(.5 * (e - c)) + i.left) : "video" === t.contentType && (a = t.opts.width && t.opts.height ? c / l : t.opts.ratio || 16 / 9, l > c / a ? l = c / a : c > l * a && (c = l * a)), d.width = c, d.height = l, d)
      },
      update: function() {
        var t = this;
        n.each(t.slides, function(e, n) {
          t.updateSlide(n)
        })
      },
      updateSlide: function(t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height;
        i && (a || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(i), n.fancybox.setTranslate(i, o.getFitPos(t)), t.pos === o.currPos && (o.isAnimating = !1, o.updateCursor())), t.$slide.trigger("refresh"), o.$refs.toolbar.toggleClass("compensate-for-scrollbar", t.$slide.get(0).scrollHeight > t.$slide.get(0).clientHeight), o.trigger("onUpdate", t)
      },
      centerSlide: function(t, e) {
        var i, a, s = this;
        s.current && (i = Math.round(t.$slide.width()), a = t.pos - s.current.pos, n.fancybox.animate(t.$slide, {
          top: 0,
          left: a * i + a * t.opts.gutter,
          opacity: 1
        }, e === o ? 0 : e, null, !1))
      },
      updateCursor: function(t, e) {
        var o, i = this,
          a = i.current,
          s = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
        a && !i.isClosing && (o = i.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), n("[data-fancybox-zoom]").prop("disabled", !o), o && ("zoom" === a.opts.clickContent || n.isFunction(a.opts.clickContent) && "zoom" === a.opts.clickContent(a)) ? i.isScaledDown(t, e) ? s.addClass("fancybox-can-zoomIn") : a.opts.touch ? s.addClass("fancybox-can-drag") : s.addClass("fancybox-can-zoomOut") : a.opts.touch && "video" !== a.contentType && s.addClass("fancybox-can-drag"))
      },
      isZoomable: function() {
        var t, e = this,
          n = e.current;
        if (n && !e.isClosing && "image" === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (t = e.getFitPos(n), n.width > t.width || n.height > t.height) return !0
        }
        return !1
      },
      isScaledDown: function(t, e) {
        var i = this,
          a = !1,
          s = i.current,
          r = s.$content;
        return t !== o && e !== o ? a = t < s.width && e < s.height : r && (a = n.fancybox.getTranslate(r), a = a.width < s.width && a.height < s.height), a
      },
      canPan: function() {
        var t, e = this,
          n = !1,
          o = e.current;
        return "image" === o.type && (t = o.$content) && !o.hasError && (n = e.getFitPos(o), n = Math.abs(t.width() - n.width) > 1 || Math.abs(t.height() - n.height) > 1), n
      },
      loadSlide: function(t) {
        var e, o, i, a = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (t.isLoading = !0, a.trigger("beforeLoad", t), e = t.type, o = t.$slide, o.off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
            case "image":
              a.setImage(t);
              break;
            case "iframe":
              a.setIframe(t);
              break;
            case "html":
              a.setContent(t, t.src || t.content);
              break;
            case "video":
              a.setContent(t, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + t.src + '" type="' + t.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");
              break;
            case "inline":
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case "ajax":
              a.showLoading(t), i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                url: t.src,
                success: function(e, n) {
                  "success" === n && a.setContent(t, e)
                },
                error: function(e, n) {
                  e && "abort" !== n && a.setError(t)
                }
              })), o.one("onReset", function() {
                i.abort()
              });
              break;
            default:
              a.setError(t)
          }
          return !0
        }
      },
      setImage: function(e) {
        var o, i, a, s, r, c = this,
          l = e.opts.srcset || e.opts.image.srcset;
        if (e.timouts = setTimeout(function() {
            var t = e.$image;
            !e.isLoading || t && t[0].complete || e.hasError || c.showLoading(e)
          }, 300), l) {
          s = t.devicePixelRatio || 1, r = t.innerWidth * s, a = l.split(",").map(function(t) {
            var e = {};
            return t.trim().split(/\s+/).forEach(function(t, n) {
              var o = parseInt(t.substring(0, t.length - 1), 10);
              return 0 === n ? e.url = t : void(o && (e.value = o, e.postfix = t[t.length - 1]))
            }), e
          }), a.sort(function(t, e) {
            return t.value - e.value
          });
          for (var d = 0; d < a.length; d++) {
            var u = a[d];
            if ("w" === u.postfix && u.value >= r || "x" === u.postfix && u.value >= s) {
              i = u;
              break
            }
          }!i && a.length && (i = a[a.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = l)
        }
        e.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), o = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), e.opts.preload !== !1 && e.opts.width && e.opts.height && o && (e.width = e.opts.width, e.height = e.opts.height, e.$ghost = n("<img />").one("error", function() {
          n(this).remove(), e.$ghost = null
        }).one("load", function() {
          c.afterLoad(e)
        }).addClass("fancybox-image").appendTo(e.$content).attr("src", o)), c.setBigImage(e)
      },
      setBigImage: function(t) {
        var e = this,
          o = n("<img />");
        t.$image = o.one("error", function() {
          e.setError(t)
        }).one("load", function() {
          var n;
          t.$ghost || (e.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), e.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), e.isClosing || (t.opts.srcset && (n = t.opts.sizes, n && "auto" !== n || (n = (t.width / t.height > 1 && s.width() / s.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", n).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
            t.$ghost && !e.isClosing && t.$ghost.hide()
          }, Math.min(300, Math.max(1e3, t.height / 1600))), e.hideLoading(t))
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o[0].complete || "complete" == o[0].readyState) && o[0].naturalWidth && o[0].naturalHeight ? o.trigger("load") : o[0].error && o.trigger("error")
      },
      resolveImageSlideSize: function(t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10);
        t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
      },
      setIframe: function(t) {
        var e, i = this,
          a = t.opts.iframe,
          s = t.$slide;
        t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), s.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content), a.preload ? (i.showLoading(t), e.on("load.fb error.fb", function(e) {
          this.isReady = 1, t.$slide.trigger("refresh"), i.afterLoad(t)
        }), s.on("refresh.fb", function() {
          var n, i, s = t.$content,
            r = a.css.width,
            c = a.css.height;
          if (1 === e[0].isReady) {
            try {
              n = e.contents(), i = n.find("body")
            } catch (t) {}
            i && i.length && i.children().length && (s.css({
              width: "",
              height: ""
            }), r === o && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), r && s.width(r), c === o && (c = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), c && s.height(c)), s.removeClass("fancybox-is-hidden")
          }
        })) : this.afterLoad(t), e.attr("src", t.src), s.one("onReset", function() {
          try {
            n(this).find("iframe").hide().unbind().attr("src", "//about:blank")
          } catch (t) {}
          n(this).off("refresh.fb").empty(), t.isLoaded = !1
        })
      },
      setContent: function(t, e) {
        var o = this;
        o.isClosing || (o.hideLoading(t), t.$content && n.fancybox.stop(t.$content), t.$slide.empty(), l(e) && e.parent().length ? (e.parent().parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = n("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(), 3 === e[0].nodeType && (e = n("<div>").html(e))), t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
          n(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (n(this).empty(), t.isLoaded = !1)
        }), n(e).appendTo(t.$slide), n(e).is("video,audio") && (n(e).addClass("fancybox-video"), n(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || n(e).attr("width"), t.opts.height = t.opts.height || n(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
      },
      setError: function(t) {
        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
      },
      showLoading: function(t) {
        var e = this;
        t = t || e.current, t && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide))
      },
      hideLoading: function(t) {
        var e = this;
        t = t || e.current, t && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
      },
      afterLoad: function(t) {
        var e = this;
        e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), t.pos === e.currPos && e.updateCursor(), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).prependTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
          return 2 == t.button && t.preventDefault(), !0
        }), "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.revealContent(t))
      },
      revealContent: function(t) {
        var e, i, a, s, r = this,
          c = t.$slide,
          l = !1,
          d = !1;
        return e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], a = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !t.isMoved && t.pos === r.currPos && a || (e = !1), "zoom" === e && (t.pos === r.currPos && a && "image" === t.type && !t.hasError && (d = r.getThumbPos(t)) ? l = r.getFitPos(t) : e = "fade"), "zoom" === e ? (l.scaleX = l.width / d.width, l.scaleY = l.height / d.height, s = t.opts.zoomOpacity, "auto" == s && (s = Math.abs(t.width / t.height - d.width / d.height) > .1), s && (d.opacity = .1, l.opacity = 1), n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d), f(t.$content), void n.fancybox.animate(t.$content, l, a, function() {
          r.isAnimating = !1, r.complete()
        })) : (r.updateSlide(t), e ? (n.fancybox.stop(c), i = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), t.$content.removeClass("fancybox-is-hidden"), f(c), void n.fancybox.animate(c, "fancybox-slide--current", a, function(e) {
          c.removeClass(i).removeAttr("style"), t.pos === r.currPos && r.complete()
        }, !0)) : (f(c), t.$content.removeClass("fancybox-is-hidden"), void(t.pos === r.currPos && r.complete())))
      },
      getThumbPos: function(o) {
        var i, a = this,
          s = !1,
          r = o.opts.$thumb,
          c = r ? r.offset() : 0,
          l = function(e) {
            for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
            return o = s.every(function(t) {
              var e = Math.min(a.right, t.right) - Math.max(a.left, t.left),
                n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
              return e > 0 && n > 0
            }), o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
          };
        return c && r[0].ownerDocument === e && l(r) && (i = a.$refs.stage.offset(), s = {
          top: c.top - i.top + parseFloat(r.css("border-top-width") || 0),
          left: c.left - i.left + parseFloat(r.css("border-left-width") || 0),
          width: r.width(),
          height: r.height(),
          scaleX: 1,
          scaleY: 1
        }), s
      },
      complete: function() {
        var t = this,
          o = t.current,
          i = {};
        !o.isMoved && o.isLoaded && (o.isComplete || (o.isComplete = !0, o.$slide.siblings().trigger("onReset"), t.preload("inline"), f(o.$slide), o.$slide.addClass("fancybox-slide--complete"), n.each(t.slides, function(e, o) {
          o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
        }), t.slides = i), t.isAnimating = !1, t.updateCursor(), t.trigger("afterShow"), o.$slide.find("video,audio").filter(":visible:first").trigger("play"), (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
      },
      preload: function(t) {
        var e = this,
          n = e.slides[e.currPos + 1],
          o = e.slides[e.currPos - 1];
        n && n.type === t && e.loadSlide(n), o && o.type === t && e.loadSlide(o)
      },
      focus: function() {
        var t, e = this.current;
        this.isClosing || e && e.isComplete && e.$content && (t = e.$content.find("input[autofocus]:enabled:visible:first"), t.length || (t = e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")), t = t && t.length ? t : e.$content, t.trigger("focus"))
      },
      activate: function() {
        var t = this;
        n(".fancybox-container").each(function() {
          var e = n(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
      },
      close: function(t, e) {
        var o, i, a, s, r, c, l, p = this,
          h = p.current,
          g = function() {
            p.cleanUp(t)
          };
        return !p.isClosing && (p.isClosing = !0, p.trigger("beforeClose", t) === !1 ? (p.isClosing = !1, d(function() {
          p.update()
        }), !1) : (p.removeEvents(), h.timouts && clearTimeout(h.timouts), a = h.$content, o = h.opts.animationEffect, i = n.isNumeric(e) ? e : o ? h.opts.animationDuration : 0, h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), h.$slide.siblings().trigger("onReset").remove(), i && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(h), p.hideControls(), p.updateCursor(), "zoom" !== o || t !== !0 && a && i && "image" === h.type && !h.hasError && (l = p.getThumbPos(h)) || (o = "fade"), "zoom" === o ? (n.fancybox.stop(a), s = n.fancybox.getTranslate(a), c = {
          top: s.top,
          left: s.left,
          scaleX: s.width / l.width,
          scaleY: s.height / l.height,
          width: l.width,
          height: l.height
        }, r = h.opts.zoomOpacity, "auto" == r && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), r && (l.opacity = 0), n.fancybox.setTranslate(a, c), f(a), n.fancybox.animate(a, l, i, g), !0) : (o && i ? t === !0 ? setTimeout(g, i) : n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, g) : g(), !0)))
      },
      cleanUp: function(t) {
        var e, o, i = this,
          a = n("body");
        i.current.$slide.trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", t), i.$lastFocus && i.current.opts.backFocus && i.$lastFocus.trigger("focus"), i.current = null, e = n.fancybox.getInstance(), e ? e.activate() : (a.removeClass("fancybox-active compensate-for-scrollbar"), n("#fancybox-style-noscroll").remove(), a.hasClass("fancybox-iosfix") && (o = parseInt(a[0].style.top, 10), a.css("top", "").removeClass("fancybox-iosfix"), s.scrollTop(-o)))
      },
      trigger: function(t, e) {
        var o, i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        return s ? i.unshift(s) : s = a, i.unshift(a), n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)), o === !1 ? o : void("afterClose" !== t && a.$refs ? a.$refs.container.trigger(t + ".fb", i) : r.trigger(t + ".fb", i))
      },
      updateControls: function(t) {
        var e = this,
          n = e.current,
          o = n.index,
          i = n.opts.caption,
          a = e.$refs.container,
          s = e.$refs.caption;
        n.$slide.trigger("refresh"), e.$caption = i && i.length ? s.html(i) : null, e.isHiddenControls || e.isIdle || e.showControls(), a.find("[data-fancybox-count]").html(e.group.length), a.find("[data-fancybox-index]").html(o + 1), a.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && o <= 0), a.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && o >= e.group.length - 1), "image" === n.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
      },
      hideControls: function() {
        this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
      },
      showControls: function() {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
      },
      toggleControls: function() {
        this.isHiddenControls ? this.showControls() : this.hideControls()
      }
    }), n.fancybox = {
      version: "3.3.1",
      defaults: a,
      getInstance: function(t) {
        var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          o = Array.prototype.slice.call(arguments, 1);
        return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o), e)
      },
      open: function(t, e, n) {
        return new h(t, e, n)
      },
      close: function(t) {
        var e = this.getInstance();
        e && (e.close(), t === !0 && this.close())
      },
      destroy: function() {
        this.close(!0), r.add("body").off("click.fb-start", "**")
      },
      isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: function() {
        var n = e.createElement("div");
        return t.getComputedStyle && t.getComputedStyle(n) && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
      }(),
      getTranslate: function(t) {
        var e;
        return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {
          top: e.top || 0,
          left: e.left || 0,
          width: e.width,
          height: e.height,
          opacity: parseFloat(t.css("opacity"))
        })
      },
      setTranslate: function(t, e) {
        var n = "",
          i = {};
        if (t && e) return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== o && (i.opacity = e.opacity), e.width !== o && (i.width = e.width), e.height !== o && (i.height = e.height), t.css(i)
      },
      animate: function(t, e, i, a, s) {
        var r = !1;
        n.isFunction(i) && (a = i, i = null), n.isPlainObject(e) || t.removeAttr("style"), n.fancybox.stop(t), t.on(u, function(o) {
          (!o || !o.originalEvent || t.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (n.fancybox.stop(t), r && n.fancybox.setTranslate(t, r), n.isPlainObject(e) ? s === !1 && t.removeAttr("style") : s !== !0 && t.removeClass(e), n.isFunction(a) && a(o))
        }), n.isNumeric(i) && t.css("transition-duration", i + "ms"), n.isPlainObject(e) ? (e.scaleX !== o && e.scaleY !== o && (r = n.extend({}, e, {
          width: t.width() * e.scaleX,
          height: t.height() * e.scaleY,
          scaleX: 1,
          scaleY: 1
        }), delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), n.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
          t.trigger("transitionend")
        }, i + 16))
      },
      stop: function(t) {
        t && t.length && (clearTimeout(t.data("timer")), t.off("transitionend").css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
      }
    }, n.fn.fancybox = function(t) {
      var e;
      return t = t || {}, e = t.selector || !1, e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
        options: t
      }, i) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: t
      }, i), this
    }, r.on("click.fb-start", "[data-fancybox]", i), r.on("click.fb-start", "[data-trigger]", function(t) {
      i(t, {
        $target: n('[data-fancybox="' + n(t.currentTarget).attr("data-trigger") + '"]').eq(n(t.currentTarget).attr("data-index") || 0),
        $trigger: n(this)
      })
    })
  }
}(window, document, window.jQuery || jQuery),
function(t) {
  "use strict";
  var e = function(e, n, o) {
      if (e) return o = o || "", "object" === t.type(o) && (o = t.param(o, !0)), t.each(n, function(t, n) {
        e = e.replace("$" + t, n || "")
      }), o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o), e
    },
    n = {
      youtube: {
        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
        params: {
          autoplay: 1,
          autohide: 1,
          fs: 1,
          rel: 0,
          hd: 1,
          wmode: "transparent",
          enablejsapi: 1,
          html5: 1
        },
        paramPlace: 8,
        type: "iframe",
        url: "//www.youtube.com/embed/$4",
        thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
      },
      vimeo: {
        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
        params: {
          autoplay: 1,
          hd: 1,
          show_title: 1,
          show_byline: 1,
          show_portrait: 0,
          fullscreen: 1,
          api: 1
        },
        paramPlace: 3,
        type: "iframe",
        url: "//player.vimeo.com/video/$2"
      },
      instagram: {
        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
        type: "image",
        url: "//$1/p/$2/media/?size=l"
      },
      gmap_place: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
        type: "iframe",
        url: function(t) {
          return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        }
      },
      gmap_search: {
        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
        type: "iframe",
        url: function(t) {
          return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
        }
      }
    };
  t(document).on("objectNeedsType.fb", function(o, i, a) {
    var s, r, c, l, d, u, f, p = a.src || "",
      h = !1;
    s = t.extend(!0, {}, n, a.opts.media), t.each(s, function(n, o) {
      if (c = p.match(o.matcher)) {
        if (h = o.type, f = n, u = {}, o.paramPlace && c[o.paramPlace]) {
          d = c[o.paramPlace], "?" == d[0] && (d = d.substring(1)), d = d.split("&");
          for (var i = 0; i < d.length; ++i) {
            var s = d[i].split("=", 2);
            2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")))
          }
        }
        return l = t.extend(!0, {}, o.params, a.opts[n], u), p = "function" === t.type(o.url) ? o.url.call(this, c, l, a) : e(o.url, c, l), r = "function" === t.type(o.thumb) ? o.thumb.call(this, c, l, a) : e(o.thumb, c), "vimeo" === n && (p = p.replace("&%23", "#")), !1
      }
    }), h ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = r), "iframe" === h && (a.opts = t.extend(!0, a.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), t.extend(a, {
      type: h,
      src: p,
      origSrc: a.src,
      contentSource: f,
      contentType: "image" === h ? "image" : "gmap_place" == f || "gmap_search" == f ? "map" : "video"
    })) : p && (a.type = a.opts.defaultType)
  })
}(window.jQuery || jQuery),
function(t, e, n) {
  "use strict";
  var o = function() {
      return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
        return t.setTimeout(e, 1e3 / 60)
      }
    }(),
    i = function() {
      return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
        t.clearTimeout(e)
      }
    }(),
    a = function(e) {
      var n = [];
      e = e.originalEvent || e || t.e, e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
      for (var o in e) e[o].pageX ? n.push({
        x: e[o].pageX,
        y: e[o].pageY
      }) : e[o].clientX && n.push({
        x: e[o].clientX,
        y: e[o].clientY
      });
      return n
    },
    s = function(t, e, n) {
      return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    },
    r = function(t) {
      if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || n.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
      for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
        if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
      return !1
    },
    c = function(e) {
      var n = t.getComputedStyle(e)["overflow-y"],
        o = t.getComputedStyle(e)["overflow-x"],
        i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
        a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
      return i || a
    },
    l = function(t) {
      for (var e = !1;;) {
        if (e = c(t.get(0))) break;
        if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
      }
      return e
    },
    d = function(t) {
      var e = this;
      e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
  d.prototype.destroy = function() {
    this.$container.off(".fb.touch")
  }, d.prototype.ontouchstart = function(o) {
    var i = this,
      c = n(o.target),
      d = i.instance,
      u = d.current,
      f = u.$content,
      p = "touchstart" == o.type;
    if (p && i.$container.off("mousedown.fb.touch"), (!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && (c.is("img") || !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
      if (!u || d.isAnimating || d.isClosing) return o.stopPropagation(), void o.preventDefault();
      if (i.realPoints = i.startPoints = a(o), i.startPoints.length) {
        if (o.stopPropagation(), i.startEvent = o, i.canTap = !0, i.$target = c, i.$content = f, i.opts = u.opts.touch, i.isPanning = !1, i.isSwiping = !1, i.isZooming = !1, i.isScrolling = !1, i.startTime = (new Date).getTime(), i.distanceX = i.distanceY = i.distance = 0, i.canvasWidth = Math.round(u.$slide[0].clientWidth), i.canvasHeight = Math.round(u.$slide[0].clientHeight), i.contentLastPos = null, i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
            top: 0,
            left: 0
          }, i.sliderStartPos = i.sliderLastPos || n.fancybox.getTranslate(u.$slide), i.stagePos = n.fancybox.getTranslate(d.$refs.stage), i.sliderStartPos.top -= i.stagePos.top, i.sliderStartPos.left -= i.stagePos.left, i.contentStartPos.top -= i.stagePos.top, i.contentStartPos.left -= i.stagePos.left, n(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")), n.fancybox.isMobile && e.addEventListener("scroll", i.onscroll, !0), !i.opts && !d.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length) return void(c.is(".fancybox-image") && o.preventDefault());
        n.fancybox.isMobile && (l(c) || l(c.parent())) || o.preventDefault(), (1 === i.startPoints.length || u.hasError) && (i.instance.canPan() ? (n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.isPanning = !0) : i.isSwiping = !0, i.$container.addClass("fancybox-controls--isGrabbing")), 2 === i.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (i.canTap = !1, i.isSwiping = !1, i.isPanning = !1, i.isZooming = !0, n.fancybox.stop(i.$content), i.$content.css("transition-duration", ""), i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(), i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(), i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width, i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height, i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
      }
    }
  }, d.prototype.onscroll = function(t) {
    var n = this;
    n.isScrolling = !0, e.removeEventListener("scroll", n.onscroll, !0)
  }, d.prototype.ontouchmove = function(t) {
    var e = this,
      o = n(t.target);
    return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling || !o.is(e.$stage) && !e.$stage.find(o).length ? void(e.canTap = !1) : (e.newPoints = a(t), void((e.opts || e.instance.canPan()) && e.newPoints.length && e.newPoints.length && (e.isSwiping && e.isSwiping === !0 || t.preventDefault(), e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"), e.distance = s(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
  }, d.prototype.onSwipe = function(e) {
    var a, s = this,
      r = s.isSwiping,
      c = s.sliderStartPos.left || 0;
    if (r !== !0) "x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX), s.sliderLastPos = {
      top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
      left: c
    }, s.requestId && (i(s.requestId), s.requestId = null), s.requestId = o(function() {
      s.sliderLastPos && (n.each(s.instance.slides, function(t, e) {
        var o = e.pos - s.instance.currPos;
        n.fancybox.setTranslate(e.$slide, {
          top: s.sliderLastPos.top,
          left: s.sliderLastPos.left + o * s.canvasWidth + o * e.opts.gutter
        })
      }), s.$container.addClass("fancybox-is-sliding"))
    });
    else if (Math.abs(s.distance) > 10) {
      if (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isDragging || s.opts.vertical === !1 || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = a > 45 && a < 135 ? "y" : "x"), s.canTap = !1, "y" === s.isSwiping && n.fancybox.isMobile && (l(s.$target) || l(s.$target.parent()))) return void(s.isScrolling = !0);
      s.instance.isDragging = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function(t, e) {
        n.fancybox.stop(e.$slide), e.$slide.css("transition-duration", ""), e.inTransition = !1, e.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left - n.fancybox.getTranslate(s.instance.$refs.stage).left)
      }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()
    }
  }, d.prototype.onPan = function() {
    var t = this;
    return s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? void(t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && (i(t.requestId), t.requestId = null), void(t.requestId = o(function() {
      n.fancybox.setTranslate(t.$content, t.contentLastPos)
    })))
  }, d.prototype.limitMovement = function() {
    var t, e, n, o, i, a, s = this,
      r = s.canvasWidth,
      c = s.canvasHeight,
      l = s.distanceX,
      d = s.distanceY,
      u = s.contentStartPos,
      f = u.left,
      p = u.top,
      h = u.width,
      g = u.height;
    return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
      top: a,
      left: i
    }
  }, d.prototype.limitPosition = function(t, e, n, o) {
    var i = this,
      a = i.canvasWidth,
      s = i.canvasHeight;
    return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {
      top: e,
      left: t
    }
  }, d.prototype.onZoom = function() {
    var e = this,
      a = e.contentStartPos,
      r = a.width,
      c = a.height,
      l = a.left,
      d = a.top,
      u = s(e.newPoints[0], e.newPoints[1]),
      f = u / e.startDistanceBetweenFingers,
      p = Math.floor(r * f),
      h = Math.floor(c * f),
      g = (r - p) * e.percentageOfImageAtPinchPointX,
      b = (c - h) * e.percentageOfImageAtPinchPointY,
      m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
      y = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
      v = m - e.centerPointStartX,
      x = y - e.centerPointStartY,
      w = l + (g + v),
      $ = d + (b + x),
      S = {
        top: $,
        left: w,
        scaleX: f,
        scaleY: f
      };
    e.canTap = !1, e.newWidth = p, e.newHeight = h, e.contentLastPos = S, e.requestId && (i(e.requestId), e.requestId = null), e.requestId = o(function() {
      n.fancybox.setTranslate(e.$content, e.contentLastPos)
    })
  }, d.prototype.ontouchend = function(t) {
    var o = this,
      s = Math.max((new Date).getTime() - o.startTime, 1),
      r = o.isSwiping,
      c = o.isPanning,
      l = o.isZooming,
      d = o.isScrolling;
    return o.endPoints = a(t), o.$container.removeClass("fancybox-controls--isGrabbing"), n(e).off(".fb.touch"), e.removeEventListener("scroll", o.onscroll, !0), o.requestId && (i(o.requestId), o.requestId = null), o.isSwiping = !1, o.isPanning = !1, o.isZooming = !1, o.isScrolling = !1, o.instance.isDragging = !1, o.canTap ? o.onTap(t) : (o.speed = 366, o.velocityX = o.distanceX / s * .5, o.velocityY = o.distanceY / s * .5, o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)), void(c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, d)))
  }, d.prototype.endSwiping = function(t, e) {
    var o = this,
      i = !1,
      a = o.instance.group.length;
    o.sliderLastPos = null, "y" == t && !e && Math.abs(o.distanceY) > 50 ? (n.fancybox.animate(o.instance.current.$slide, {
      top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
      opacity: 0
    }, 200), i = o.instance.close(!0, 200)) : "x" == t && o.distanceX > 50 && a > 1 ? i = o.instance.previous(o.speedX) : "x" == t && o.distanceX < -50 && a > 1 && (i = o.instance.next(o.speedX)), i !== !1 || "x" != t && "y" != t || (e || a < 2 ? o.instance.centerSlide(o.instance.current, 150) : o.instance.jumpTo(o.instance.current.index)), o.$container.removeClass("fancybox-is-sliding")
  }, d.prototype.endPanning = function() {
    var t, e, o, i = this;
    i.contentLastPos && (i.opts.momentum === !1 ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height), o.width = i.contentStartPos.width, o.height = i.contentStartPos.height, n.fancybox.animate(i.$content, o, 330))
  }, d.prototype.endZooming = function() {
    var t, e, o, i, a = this,
      s = a.instance.current,
      r = a.newWidth,
      c = a.newHeight;
    a.contentLastPos && (t = a.contentLastPos.left, e = a.contentLastPos.top, i = {
      top: e,
      left: t,
      width: r,
      height: c,
      scaleX: 1,
      scaleY: 1
    }, n.fancybox.setTranslate(a.$content, i), r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c), n.fancybox.setTranslate(a.$content, n.fancybox.getTranslate(a.$content)), n.fancybox.animate(a.$content, o, 150)))
  }, d.prototype.onTap = function(e) {
    var o, i = this,
      s = n(e.target),
      r = i.instance,
      c = r.current,
      l = e && a(e) || i.startPoints,
      d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
      u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
      f = function(t) {
        var o = c.opts[t];
        if (n.isFunction(o) && (o = o.apply(r, [c, e])), o) switch (o) {
          case "close":
            r.close(i.startEvent);
            break;
          case "toggleControls":
            r.toggleControls(!0);
            break;
          case "next":
            r.next();
            break;
          case "nextOrClose":
            r.group.length > 1 ? r.next() : r.close(i.startEvent);
            break;
          case "zoom":
            "image" == c.type && (c.isLoaded || c.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(d, u) : r.group.length < 2 && r.close(i.startEvent))
        }
      };
    if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
      if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) o = "Outside";
      else if (s.is(".fancybox-slide")) o = "Slide";
      else {
        if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
        o = "Content"
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50) return this;
        f("dblclick" + o)
      } else i.tapX = d, i.tapY = u, c.opts["dblclick" + o] && c.opts["dblclick" + o] !== c.opts["click" + o] ? i.tapped = setTimeout(function() {
        i.tapped = null, f("click" + o)
      }, 500) : f("click" + o);
      return this
    }
  }, n(e).on("onActivate.fb", function(t, e) {
    e && !e.Guestures && (e.Guestures = new d(e))
  })
}(window, document, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3
    }
  });
  var n = function(t) {
    this.instance = t, this.init()
  };
  e.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function() {
      var t = this;
      t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
        t.toggle()
      }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
    },
    set: function(t) {
      var e = this;
      e.instance && e.instance.current && (t === !0 || e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
        e.isActive && e.instance.jumpTo((e.instance.currIndex + 1) % e.instance.group.length)
      }, e.instance.current.opts.slideShow.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, e.instance.showControls())
    },
    clear: function() {
      var t = this;
      clearTimeout(t.timer), t.timer = null
    },
    start: function() {
      var t = this,
        e = t.instance.current;
      e && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.set(!0))
    },
    stop: function() {
      var t = this,
        e = t.instance.current;
      t.clear(), t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1
    },
    toggle: function() {
      var t = this;
      t.isActive ? t.stop() : t.start()
    }
  }), e(t).on({
    "onInit.fb": function(t, e) {
      e && !e.SlideShow && (e.SlideShow = new n(e))
    },
    "beforeShow.fb": function(t, e, n, o) {
      var i = e && e.SlideShow;
      o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
    },
    "afterShow.fb": function(t, e, n) {
      var o = e && e.SlideShow;
      o && o.isActive && o.set()
    },
    "afterKeydown.fb": function(n, o, i, a, s) {
      var r = o && o.SlideShow;
      !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(), r.toggle())
    },
    "beforeClose.fb onDeactivate.fb": function(t, e) {
      var n = e && e.SlideShow;
      n && n.stop()
    }
  }), e(t).on("visibilitychange", function() {
    var n = e.fancybox.getInstance(),
      o = n && n.SlideShow;
    o && o.isActive && (t.hidden ? o.clear() : o.set())
  })
}(document, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  var n = function() {
    for (var e = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
      ], n = {}, o = 0; o < e.length; o++) {
      var i = e[o];
      if (i && i[1] in t) {
        for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
        return n
      }
    }
    return !1
  }();
  if (!n) return void(e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1));
  var o = {
    request: function(e) {
      e = e || t.documentElement, e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
    },
    exit: function() {
      t[n.exitFullscreen]()
    },
    toggle: function(e) {
      e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
    },
    isFullscreen: function() {
      return Boolean(t[n.fullscreenElement])
    },
    enabled: function() {
      return Boolean(t[n.fullscreenEnabled])
    }
  };
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
    },
    fullScreen: {
      autoStart: !1
    }
  }), e(t).on({
    "onInit.fb": function(t, e) {
      var n;
      e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
        t.stopPropagation(), t.preventDefault(), o.toggle()
      }), e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
    },
    "afterKeydown.fb": function(t, e, n, o, i) {
      e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
    },
    "beforeClose.fb": function(t, e) {
      e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
    }
  }), e(t).on(n.fullscreenchange, function() {
    var t = o.isFullscreen(),
      n = e.fancybox.getInstance();
    n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", t), n.$refs.container.toggleClass("fancybox-is-fullscreen", t))
  })
}(document, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  var n = "fancybox-thumbs",
    o = n + "-active",
    i = n + "-loading";
  e.fancybox.defaults = e.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, e.fancybox.defaults);
  var a = function(t) {
    this.init(t)
  };
  e.extend(a.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function(t) {
      var e, n, o = this;
      o.instance = t, t.Thumbs = o, o.opts = t.group[t.currIndex].opts.thumbs, e = t.group[0], e = e.opts.thumb || !(!e.opts.$thumb || !e.opts.$thumb.length) && e.opts.$thumb.attr("src"), t.group.length > 1 && (n = t.group[1], n = n.opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), o.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]"), o.opts && e && n && e && n ? (o.$button.show().on("click", function() {
        o.toggle()
      }), o.isActive = !0) : o.$button.hide()
    },
    create: function() {
      var t, o = this,
        a = o.instance,
        s = o.opts.parentEl,
        r = [];
      o.$grid || (o.$grid = e('<div class="' + n + " " + n + "-" + o.opts.axis + '"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)), o.$grid.on("click", "li", function() {
        a.jumpTo(e(this).attr("data-index"))
      })), o.$list || (o.$list = e("<ul>").appendTo(o.$grid)), e.each(a.group, function(e, n) {
        t = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null), t || "image" !== n.type || (t = n.src), r.push('<li data-index="' + e + '" tabindex="0" class="' + i + '"' + (t && t.length ? ' style="background-image:url(' + t + ')" />' : "") + "></li>")
      }), o.$list[0].innerHTML = r.join(""), "x" === o.opts.axis && o.$list.width(parseInt(o.$grid.css("padding-right"), 10) + a.group.length * o.$list.children().eq(0).outerWidth(!0))
    },
    focus: function(t) {
      var e, n, i = this,
        a = i.$list,
        s = i.$grid;
      i.instance.current && (e = a.children().removeClass(o).filter('[data-index="' + i.instance.current.index + '"]').addClass(o), n = e.position(), "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - e.outerHeight()) ? a.stop().animate({
        scrollTop: a.scrollTop() + n.top
      }, t) : "x" === i.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && a.parent().stop().animate({
        scrollLeft: n.left
      }, t))
    },
    update: function() {
      var t = this;
      t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
    },
    hide: function() {
      this.isVisible = !1, this.update()
    },
    show: function() {
      this.isVisible = !0, this.update()
    },
    toggle: function() {
      this.isVisible = !this.isVisible, this.update()
    }
  }), e(t).on({
    "onInit.fb": function(t, e) {
      var n;
      e && !e.Thumbs && (n = new a(e), n.isActive && n.opts.autoStart === !0 && n.show())
    },
    "beforeShow.fb": function(t, e, n, o) {
      var i = e && e.Thumbs;
      i && i.isVisible && i.focus(o ? 0 : 250)
    },
    "afterKeydown.fb": function(t, e, n, o, i) {
      var a = e && e.Thumbs;
      a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
    },
    "beforeClose.fb": function(t, e) {
      var n = e && e.Thumbs;
      n && n.isVisible && n.opts.hideOnClose !== !1 && n.$grid.hide()
    }
  })
}(document, window.jQuery || jQuery),
function(t, e) {
  "use strict";

  function n(t) {
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(t).replace(/[&<>"'`=\/]/g, function(t) {
      return e[t]
    })
  }
  e.extend(!0, e.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
    },
    share: {
      url: function(t, e) {
        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
    }
  }), e(t).on("click", "[data-fancybox-share]", function() {
    var t, o, i = e.fancybox.getInstance(),
      a = i.current || null;
    a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [i, a])), o = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, n(t)).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), e.fancybox.open({
      src: i.translate(i, o),
      type: "html",
      opts: {
        animationEffect: !1,
        afterLoad: function(t, e) {
          i.$refs.container.one("beforeClose.fb", function() {
            t.close(null, 0)
          }), e.$content.find(".fancybox-share__links a").click(function() {
            return window.open(this.href, "Share", "width=550, height=450"), !1
          })
        }
      }
    }))
  })
}(document, window.jQuery || jQuery),
function(t, e, n) {
  "use strict";

  function o() {
    var t = e.location.hash.substr(1),
      n = t.split("-"),
      o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
      i = n.join("-");
    return {
      hash: t,
      index: o < 1 ? 1 : o,
      gallery: i
    }
  }

  function i(t) {
    var e;
    "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).trigger("click.fb-start"))
  }

  function a(t) {
    var e, n;
    return !!t && (e = t.current ? t.current.opts : t.opts, n = e.hash || (e.$orig ? e.$orig.data("fancybox") : ""), "" !== n && n)
  }
  n.escapeSelector || (n.escapeSelector = function(t) {
    var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
      n = function(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
      };
    return (t + "").replace(e, n)
  }), n(function() {
    n.fancybox.defaults.hash !== !1 && (n(t).on({
      "onInit.fb": function(t, e) {
        var n, i;
        e.group[e.currIndex].opts.hash !== !1 && (n = o(), i = a(e), i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
      },
      "beforeShow.fb": function(n, o, i, s) {
        var r;
        i && i.opts.hash !== !1 && (r = a(o), r && (o.currentHash = r + (o.group.length > 1 ? "-" + (i.index + 1) : ""), e.location.hash !== "#" + o.currentHash && (o.origHash || (o.origHash = e.location.hash), o.hashTimer && clearTimeout(o.hashTimer), o.hashTimer = setTimeout(function() {
          "replaceState" in e.history ? (e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + o.currentHash), s && (o.hasCreatedHistory = !0)) : e.location.hash = o.currentHash, o.hashTimer = null
        }, 300))))
      },
      "beforeClose.fb": function(n, o, i) {
        var s;
        i.opts.hash !== !1 && (s = a(o), o.currentHash && o.hasCreatedHistory ? e.history.back() : o.currentHash && ("replaceState" in e.history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + (o.origHash || "")) : e.location.hash = o.origHash), o.currentHash = null, clearTimeout(o.hashTimer))
      }
    }), n(e).on("hashchange.fb", function() {
      var t, e = o();
      n.each(n(".fancybox-container").get().reverse(), function(e, o) {
        var i = n(o).data("FancyBox");
        if (i.currentHash) return t = i, !1
      }), t ? !t.currentHash || t.currentHash === e.gallery + "-" + e.index || 1 === e.index && t.currentHash == e.gallery || (t.currentHash = null, t.close()) : "" !== e.gallery && i(e)
    }), setTimeout(function() {
      n.fancybox.getInstance() || i(o())
    }, 50))
  })
}(document, window, window.jQuery || jQuery),
function(t, e) {
  "use strict";
  var n = (new Date).getTime();
  e(t).on({
    "onInit.fb": function(t, e, o) {
      e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
        var o = e.current,
          i = (new Date).getTime();
        e.group.length < 2 || o.opts.wheel === !1 || "auto" === o.opts.wheel && "image" !== o.type || (t.preventDefault(), t.stopPropagation(), o.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - n < 250 || (n = i, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
      })
    }
  })
}(document, window.jQuery || jQuery);


// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

! function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(l) {
  function t() {
    for (var t = h.scrollTop(), e = u.height(), i = e - m, n = i < t ? i - t : 0, r = 0, s = g.length; r < s; r++) {
      var o, c, p, a = g[r],
        d = a.stickyWrapper.offset().top - a.topSpacing - n;
      a.stickyWrapper.css("height", a.stickyElement.outerHeight()), t <= d ? null !== a.currentTop && (a.stickyElement.css({
        width: "",
        position: "",
        top: "",
        "z-index": ""
      }), a.stickyElement.parent().removeClass(a.className), a.stickyElement.trigger("sticky-end", [a]), a.currentTop = null) : ((o = e - a.stickyElement.outerHeight() - a.topSpacing - a.bottomSpacing - t - n) < 0 ? o += a.topSpacing : o = a.topSpacing, a.currentTop !== o && (a.getWidthFrom ? (padding = a.stickyElement.innerWidth() - a.stickyElement.width(), c = l(a.getWidthFrom).width() - padding || null) : a.widthFromWrapper && (c = a.stickyWrapper.width()), null == c && (c = a.stickyElement.width()), a.stickyElement.css("width", c).css("position", "fixed").css("top", o).css("z-index", a.zIndex), a.stickyElement.parent().addClass(a.className), null === a.currentTop ? a.stickyElement.trigger("sticky-start", [a]) : a.stickyElement.trigger("sticky-update", [a]), a.currentTop === a.topSpacing && a.currentTop > o || null === a.currentTop && o < a.topSpacing ? a.stickyElement.trigger("sticky-bottom-reached", [a]) : null !== a.currentTop && o === a.topSpacing && a.currentTop < o && a.stickyElement.trigger("sticky-bottom-unreached", [a]), a.currentTop = o), p = a.stickyWrapper.parent(), a.stickyElement.offset().top + a.stickyElement.outerHeight() >= p.offset().top + p.outerHeight() && a.stickyElement.offset().top <= a.topSpacing ? a.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : a.stickyElement.css("position", "fixed").css("top", o).css("bottom", "").css("z-index", a.zIndex))
    }
  }

  function e() {
    m = h.height();
    for (var t = 0, e = g.length; t < e; t++) {
      var i = g[t],
        n = null;
      i.getWidthFrom ? i.responsiveWidth && (n = l(i.getWidthFrom).width()) : i.widthFromWrapper && (n = i.stickyWrapper.width()), null != n && i.stickyElement.css("width", n)
    }
  }
  var i = Array.prototype.slice,
    n = Array.prototype.splice,
    c = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: "is-sticky",
      wrapperClassName: "sticky-wrapper",
      center: !1,
      getWidthFrom: "",
      widthFromWrapper: !0,
      responsiveWidth: !1,
      zIndex: "inherit"
    },
    h = l(window),
    u = l(document),
    g = [],
    m = h.height(),
    p = {
      init: function(o) {
        return this.each(function() {
          var t = l.extend({}, c, o),
            e = l(this),
            i = e.attr("id"),
            n = i ? i + "-" + c.wrapperClassName : c.wrapperClassName,
            r = l("<div></div>").attr("id", n).addClass(t.wrapperClassName);
          e.wrapAll(function() {
            if (0 == l(this).parent("#" + n).length) return r
          });
          var s = e.parent();
          t.center && s.css({
            width: e.outerWidth(),
            marginLeft: "auto",
            marginRight: "auto"
          }), "right" === e.css("float") && e.css({
            float: "none"
          }).parent().css({
            float: "right"
          }), t.stickyElement = e, t.stickyWrapper = s, t.currentTop = null, g.push(t), p.setWrapperHeight(this), p.setupChangeListeners(this)
        })
      },
      setWrapperHeight: function(t) {
        var e = l(t),
          i = e.parent();
        i && i.css("height", e.outerHeight())
      },
      setupChangeListeners: function(e) {
        window.MutationObserver ? new window.MutationObserver(function(t) {
          (t[0].addedNodes.length || t[0].removedNodes.length) && p.setWrapperHeight(e)
        }).observe(e, {
          subtree: !0,
          childList: !0
        }) : window.addEventListener ? (e.addEventListener("DOMNodeInserted", function() {
          p.setWrapperHeight(e)
        }, !1), e.addEventListener("DOMNodeRemoved", function() {
          p.setWrapperHeight(e)
        }, !1)) : window.attachEvent && (e.attachEvent("onDOMNodeInserted", function() {
          p.setWrapperHeight(e)
        }), e.attachEvent("onDOMNodeRemoved", function() {
          p.setWrapperHeight(e)
        }))
      },
      update: t,
      unstick: function(t) {
        return this.each(function() {
          for (var t = l(this), e = -1, i = g.length; 0 < i--;) g[i].stickyElement.get(0) === this && (n.call(g, i, 1), e = i); - 1 !== e && (t.unwrap(), t.css({
            width: "",
            position: "",
            top: "",
            float: "",
            "z-index": ""
          }))
        })
      }
    };
  window.addEventListener ? (window.addEventListener("scroll", t, !1), window.addEventListener("resize", e, !1)) : window.attachEvent && (window.attachEvent("onscroll", t), window.attachEvent("onresize", e)), l.fn.sticky = function(t) {
    return p[t] ? p[t].apply(this, i.call(arguments, 1)) : "object" != typeof t && t ? void l.error("Method " + t + " does not exist on jQuery.sticky") : p.init.apply(this, arguments)
  }, l.fn.unstick = function(t) {
    return p[t] ? p[t].apply(this, i.call(arguments, 1)) : "object" != typeof t && t ? void l.error("Method " + t + " does not exist on jQuery.sticky") : p.unstick.apply(this, arguments)
  }, l(function() {
    setTimeout(t, 0)
  })
});


/* ========================================================================
 * bootstrap-spin - v1.0
 * https://github.com/wpic/bootstrap-spin
 * ========================================================================
 * Copyright 2014 WPIC, Hamed Abdollahpour
 *
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

! function(l) {
  l.fn.bootstrapNumber = function(t) {
    var i = l.extend({
      upClass: "default",
      downClass: "default",
      upText: "+",
      downText: "-",
      center: !0
    }, t);
    return this.each(function(t) {
      var e = l(this),
        a = e.clone(!0, !0),
        r = e.attr("min"),
        o = e.attr("max"),
        n = parseInt(e.attr("step")) || 1;

      function p(t) {
        return !(isNaN(t) || r && t < r || o && o < t) && (a.focus().val(t), a.trigger("change"), 1)
      }
      var s = l("<div class='input-group'></div>"),
        u = l("<button type='button'>" + i.downText + "</button>").attr("class", "btn btn-" + i.downClass).click(function() {
          p(parseInt(a.val() || a.attr("value")) - n)
        }),
        c = l("<button type='button'>" + i.upText + "</button>").attr("class", "btn btn-" + i.upClass).click(function() {
          p(parseInt(a.val() || a.attr("value")) + n)
        });
      l("<span class='input-group-btn'></span>").append(u).appendTo(s), a.appendTo(s), a && i.center && a.css("text-align", "center"), l("<span class='input-group-btn'></span>").append(c).appendTo(s), a.prop("type", "text").keydown(function(t) {
        var e, n; - 1 !== l.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == t.keyCode && !0 === t.ctrlKey || 35 <= t.keyCode && t.keyCode <= 39 || ((t.shiftKey || t.keyCode < 48 || 57 < t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault(), e = String.fromCharCode(t.which), n = parseInt(a.val() + e), (r && n < r || o && o < n) && t.preventDefault())
      }), e.replaceWith(s)
    })
  }
}(jQuery);


/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  "use strict";

  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
    throw new Error("Couldn't cast `" + a + "` to a date object.")
  }

  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b)
  }

  function d(a) {
    return function(b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
        }
      return b = b.replace(/%%/, "%")
    }
  }

  function e(a, b) {
    var c = "s",
      d = "";
    return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
  }
  var f = [],
    g = [],
    h = {
      precision: 100,
      elapse: !1,
      defer: !1
    };
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds"
    },
    j = function(b, c, d) {
      this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
    };
  a.extend(j.prototype, {
    start: function() {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(), this.interval = setInterval(function() {
        a.update.call(a)
      }, this.options.precision)
    },
    stop: function() {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
    },
    toggle: function() {
      this.interval ? this.stop() : this.start()
    },
    pause: function() {
      this.stop()
    },
    resume: function() {
      this.start()
    },
    remove: function() {
      this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
    },
    setFinalDate: function(a) {
      this.finalDate = b(a)
    },
    update: function() {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var b, c = void 0 !== a._data(this.el, "events"),
        d = new Date;
      b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && b < 0 ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
        totalMinutes: Math.floor(this.totalSecsLeft / 60),
        totalSeconds: this.totalSecsLeft
      }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
    },
    dispatchEvent: function(b) {
      var c = a.Event(b + ".countdown");
      c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
    }
  }), a.fn.countdown = function() {
    var b = Array.prototype.slice.call(arguments, 0);
    return this.each(function() {
      var c = a(this).data("countdown-instance");
      if (void 0 !== c) {
        var d = f[c],
          e = b[0];
        j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
      } else new j(this, b[0], b[1])
    })
  }
});


/* jquery.nicescroll 3.6.8 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */

! function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(g) {
  var f = !1,
    w = !1,
    v = 0,
    h = 2e3,
    b = 0,
    e = ["webkit", "ms", "moz", "o"],
    y = window.requestAnimationFrame || !1,
    x = window.cancelAnimationFrame || !1;
  if (!y)
    for (var o in e) {
      var t = e[o];
      if (y = window[t + "RequestAnimationFrame"]) {
        x = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"];
        break
      }
    }

  function r(e, o) {
    function t() {
      var e = p.doc.css(m.trstyle);
      return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
    }

    function n(e, o, t) {
      return o = e.css(o), e = parseFloat(o), isNaN(e) ? (t = 3 == (e = u[o] || 0) ? t ? p.win.outerHeight() - p.win.innerHeight() : p.win.outerWidth() - p.win.innerWidth() : 1, p.isie8 && e && (e += 1), t ? e : 0) : e
    }

    function r(t, i, r, e) {
      p._bind(t, i, function(e) {
        var o = {
          original: e = e || window.event,
          target: e.target || e.srcElement,
          type: "wheel",
          deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1,
          deltaX: 0,
          deltaZ: 0,
          preventDefault: function() {
            return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
          },
          stopImmediatePropagation: function() {
            e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.cancelBubble = !0
          }
        };
        return "mousewheel" == i ? (e.wheelDeltaX && (o.deltaX = -.025 * e.wheelDeltaX), e.wheelDeltaY && (o.deltaY = -.025 * e.wheelDeltaY), o.deltaY || o.deltaX || (o.deltaY = -.025 * e.wheelDelta)) : o.deltaY = e.detail, r.call(t, o)
      }, e)
    }

    function i(e, o, t) {
      var i, r;
      if (0 == e.deltaMode ? (i = -Math.floor(p.opt.mousescrollstep / 54 * e.deltaX), r = -Math.floor(p.opt.mousescrollstep / 54 * e.deltaY)) : 1 == e.deltaMode && (i = -Math.floor(e.deltaX * p.opt.mousescrollstep), r = -Math.floor(e.deltaY * p.opt.mousescrollstep)), o && p.opt.oneaxismousemode && 0 == i && r && (i = r, r = 0, t && (i < 0 ? p.getScrollLeft() >= p.page.maxw : p.getScrollLeft() <= 0) && (r = i, i = 0)), p.isrtlmode && (i = -i), i && (p.scrollmom && p.scrollmom.stop(), p.lastdeltax += i, p.debounced("mousewheelx", function() {
          var e = p.lastdeltax;
          p.lastdeltax = 0, p.rail.drag || p.doScrollLeftBy(e)
        }, 15)), r) {
        if (p.opt.nativeparentscrolling && t && !p.ispage && !p.zoomactive)
          if (r < 0) {
            if (p.getScrollTop() >= p.page.maxh) return !0
          } else if (p.getScrollTop() <= 0) return !0;
        p.scrollmom && p.scrollmom.stop(), p.lastdeltay += r, p.synched("mousewheely", function() {
          var e = p.lastdeltay;
          p.lastdeltay = 0, p.rail.drag || p.doScrollBy(e)
        }, 15)
      }
      return e.stopImmediatePropagation(), e.preventDefault()
    }
    var s, p = this;
    if (this.version = "3.6.8", this.name = "nicescroll", this.me = o, this.opt = {
        doc: g("body"),
        win: !1
      }, g.extend(this.opt, z), this.opt.snapbackspeed = 80, e)
      for (var l in p.opt) void 0 !== e[l] && (p.opt[l] = e[l]);
    for (p.opt.disablemutationobserver && (S = !1), this.iddoc = (this.doc = p.opt.doc) && this.doc[0] && this.doc[0].id || "", this.ispage = /^BODY|HTML/.test(p.opt.win ? p.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== p.opt.win, this.win = p.opt.win || (this.ispage ? g(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? g(window) : this.win, this.body = g("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != p.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
        x: 0,
        y: 0
      }, this.scrollratio = {
        x: 0,
        y: 0
      }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode ? "horizontal-tb" == (s = (l = this.win[0] == window ? this.body : this.win).css("writing-mode") || l.css("-webkit-writing-mode") || l.css("-ms-writing-mode") || l.css("-moz-writing-mode")) || "lr-tb" == s || "" == s ? (this.isrtlmode = "rtl" == l.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == s || "tb" == s || "tb-rl" == s || "rl-tb" == s, this.isvertical = "vertical-rl" == s || "tb" == s || "tb-rl" == s) : (this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1), this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1; this.id = "ascrail" + h++, document.getElementById(this.id););
    this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = this.railslocked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = p.opt.overflowx, this.overflowy = p.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = function() {
      if (T) return T;
      var e = document.createElement("DIV"),
        o = e.style,
        t = navigator.userAgent,
        i = navigator.platform,
        r = {
          haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
        };
      r.isopera = "opera" in window, r.isopera12 = r.isopera && "getUserMedia" in navigator, r.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), r.isie = "all" in document && "attachEvent" in e && !r.isopera, r.isieold = r.isie && !("msInterpolationMode" in o), r.isie7 = r.isie && !r.isieold && (!("documentMode" in document) || 7 == document.documentMode), r.isie8 = r.isie && "documentMode" in document && 8 == document.documentMode, r.isie9 = r.isie && "performance" in window && 9 == document.documentMode, r.isie10 = r.isie && "performance" in window && 10 == document.documentMode, r.isie11 = "msRequestFullscreen" in e && 11 <= document.documentMode, r.isieedge12 = navigator.userAgent.match(/Edge\/12\./), r.isieedge = "msOverflowStyle" in e, r.ismodernie = r.isie11 || r.isieedge, r.isie9mobile = /iemobile.9/i.test(t), r.isie9mobile && (r.isie9 = !1), r.isie7mobile = !r.isie9mobile && r.isie7 && /iemobile/i.test(t), r.ismozilla = "MozAppearance" in o, r.iswebkit = "WebkitAppearance" in o, r.ischrome = "chrome" in window, r.ischrome38 = r.ischrome && "touchAction" in o, r.ischrome22 = !r.ischrome38 && r.ischrome && r.haspointerlock, r.ischrome26 = !r.ischrome38 && r.ischrome && "transition" in o, r.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, r.hasw3ctouch = !!window.PointerEvent && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints), r.hasmstouch = !r.hasw3ctouch && (window.MSPointerEvent || !1), r.ismac = /^mac$/i.test(i), r.isios = r.cantouch && /iphone|ipad|ipod/i.test(i), r.isios4 = r.isios && !("seal" in Object), r.isios7 = r.isios && "webkitHidden" in document, r.isios8 = r.isios && "hidden" in document, r.isandroid = /android/i.test(t), r.haseventlistener = "addEventListener" in e, r.trstyle = !1, r.hastransform = !1, r.hastranslate3d = !1, r.transitionstyle = !1, r.hastransition = !1, r.transitionend = !1, i = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
      for (t = 0; t < i.length; t++)
        if (void 0 !== o[i[t]]) {
          r.trstyle = i[t];
          break
        } r.hastransform = !!r.trstyle, r.hastransform && (o[r.trstyle] = "translate3d(1px,2px,3px)", r.hastranslate3d = /translate3d/.test(o[r.trstyle])), r.transitionstyle = !1, r.prefixstyle = "", r.transitionend = !1;
      for (var i = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), n = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), s = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), t = 0; t < i.length; t++)
        if (i[t] in o) {
          r.transitionstyle = i[t], r.prefixstyle = n[t], r.transitionend = s[t];
          break
        } r.ischrome26 && (r.prefixstyle = n[1]), r.hastransition = r.transitionstyle;
      e: {
        for (t = ["grab", "-webkit-grab", "-moz-grab"], (r.ischrome && !r.ischrome38 || r.isie) && (t = []), i = 0; i < t.length; i++)
          if (n = t[i], o.cursor = n, o.cursor == n) {
            o = n;
            break e
          } o = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
      }
      return r.cursorgrabvalue = o, r.hasmousecapture = "setCapture" in e, r.hasMutationObserver = !1 !== S, T = r
    }();
    var m = g.extend({}, this.detected);
    this.ishwscroll = (this.canhwscroll = m.hastransform && p.opt.hwacceleration) && p.haswrapper, this.hasreversehr = !!this.isrtlmode && (this.isvertical ? !(m.iswebkit || m.isie || m.isie11) : !(m.iswebkit || m.isie && !m.isie10 && !m.isie11)), this.istouchcapable = !1, (m.cantouch || !m.hasw3ctouch && !m.hasmstouch) && (!m.cantouch || m.isios || m.isandroid || !m.iswebkit && !m.ismozilla) || (this.istouchcapable = !0), p.opt.enablemouselockapi || (m.hasmousecapture = !1, m.haspointerlock = !1);
    var a, c = !(this.debounced = function(e, o, t) {
      p && (p.delaylist[e] || (o.call(p), p.delaylist[e] = {
        h: y(function() {
          p.delaylist[e].fn.call(p), p.delaylist[e] = !1
        }, t)
      }), p.delaylist[e].fn = o)
    });

    function d(e, o, t, i, r, n, s) {
      this.st = e, this.ed = o, this.spd = t, this.p1 = i || 0, this.p2 = r || 1, this.p3 = n || 0, this.p4 = s || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
    }
    this.synched = function(e, o) {
      return p.synclist[e] = o, c || (y(function() {
        if (p)
          for (var e in c = !1, p.synclist) {
            var o = p.synclist[e];
            o && o.call(p), p.synclist[e] = !1
          }
      }), c = !0), e
    }, this.unsynched = function(e) {
      p.synclist[e] && (p.synclist[e] = !1)
    }, this.css = function(e, o) {
      for (var t in o) p.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
    }, this.scrollTop = function(e) {
      return void 0 === e ? p.getScrollTop() : p.setScrollTop(e)
    }, this.scrollLeft = function(e) {
      return void 0 === e ? p.getScrollLeft() : p.setScrollLeft(e)
    }, d.prototype = {
      B2: function(e) {
        return 3 * e * e * (1 - e)
      },
      B3: function(e) {
        return 3 * e * (1 - e) * (1 - e)
      },
      B4: function(e) {
        return (1 - e) * (1 - e) * (1 - e)
      },
      getNow: function() {
        var e = 1 - ((new Date).getTime() - this.ts) / this.spd,
          o = this.B2(e) + this.B3(e) + this.B4(e);
        return e < 0 ? this.ed : this.st + Math.round(this.df * o)
      },
      update: function(e, o) {
        return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
      }
    }, this.ishwscroll ? (this.doc.translate = {
      x: 0,
      y: 0,
      tx: "0px",
      ty: "0px"
    }, m.hastranslate3d && m.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function(e) {
      if (!e) {
        if (e = t()) return 16 == e.length ? -e[13] : -e[5];
        if (p.timerscroll && p.timerscroll.bz) return p.timerscroll.bz.getNow()
      }
      return p.doc.translate.y
    }, this.getScrollLeft = function(e) {
      if (!e) {
        if (e = t()) return 16 == e.length ? -e[12] : -e[4];
        if (p.timerscroll && p.timerscroll.bh) return p.timerscroll.bh.getNow()
      }
      return p.doc.translate.x
    }, this.notifyScrollEvent = function(e) {
      var o = document.createEvent("UIEvents");
      o.initUIEvent("scroll", !1, !0, window, 1), o.niceevent = !0, e.dispatchEvent(o)
    }, a = this.isrtlmode ? 1 : -1, m.hastranslate3d && p.opt.enabletranslate3d ? (this.setScrollTop = function(e, o) {
      p.doc.translate.y = e, p.doc.translate.ty = -1 * e + "px", p.doc.css(m.trstyle, "translate3d(" + p.doc.translate.tx + "," + p.doc.translate.ty + ",0px)"), o || p.notifyScrollEvent(p.win[0])
    }, this.setScrollLeft = function(e, o) {
      p.doc.translate.x = e, p.doc.translate.tx = e * a + "px", p.doc.css(m.trstyle, "translate3d(" + p.doc.translate.tx + "," + p.doc.translate.ty + ",0px)"), o || p.notifyScrollEvent(p.win[0])
    }) : (this.setScrollTop = function(e, o) {
      p.doc.translate.y = e, p.doc.translate.ty = -1 * e + "px", p.doc.css(m.trstyle, "translate(" + p.doc.translate.tx + "," + p.doc.translate.ty + ")"), o || p.notifyScrollEvent(p.win[0])
    }, this.setScrollLeft = function(e, o) {
      p.doc.translate.x = e, p.doc.translate.tx = e * a + "px", p.doc.css(m.trstyle, "translate(" + p.doc.translate.tx + "," + p.doc.translate.ty + ")"), o || p.notifyScrollEvent(p.win[0])
    })) : (this.getScrollTop = function() {
      return p.docscroll.scrollTop()
    }, this.setScrollTop = function(e) {
      return setTimeout(function() {
        p && p.docscroll.scrollTop(e)
      }, 1)
    }, this.getScrollLeft = function() {
      return p.hasreversehr ? p.detected.ismozilla ? p.page.maxw - Math.abs(p.docscroll.scrollLeft()) : p.page.maxw - p.docscroll.scrollLeft() : p.docscroll.scrollLeft()
    }, this.setScrollLeft = function(e) {
      return setTimeout(function() {
        if (p) return p.hasreversehr && (e = p.detected.ismozilla ? -(p.page.maxw - e) : p.page.maxw - e), p.docscroll.scrollLeft(e)
      }, 1)
    }), this.getTarget = function(e) {
      return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
    }, this.hasParent = function(e, o) {
      if (!e) return !1;
      for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
      return !1 !== t
    };
    var u = {
      thin: 1,
      medium: 3,
      thick: 5
    };
    this.getDocumentScrollOffset = function() {
      return {
        top: window.pageYOffset || document.documentElement.scrollTop,
        left: window.pageXOffset || document.documentElement.scrollLeft
      }
    }, this.getOffset = function() {
      if (p.isfixed) {
        var e = p.win.offset(),
          o = p.getDocumentScrollOffset();
        return e.top -= o.top, e.left -= o.left, e
      }
      return e = p.win.offset(), p.viewport ? (o = p.viewport.offset(), {
        top: e.top - o.top,
        left: e.left - o.left
      }) : e
    }, this.updateScrollBar = function(e) {
      var o, t, i, r;
      p.ishwscroll ? (p.rail.css({
        height: p.win.innerHeight() - (p.opt.railpadding.top + p.opt.railpadding.bottom)
      }), p.railh && p.railh.css({
        width: p.win.innerWidth() - (p.opt.railpadding.left + p.opt.railpadding.right)
      })) : (i = (t = p.getOffset()).top, r = t.left - (p.opt.railpadding.left + p.opt.railpadding.right), i += n(p.win, "border-top-width", !0), r += p.rail.align ? p.win.outerWidth() - n(p.win, "border-right-width") - p.rail.width : n(p.win, "border-left-width"), (o = p.opt.railoffset) && (o.top && (i += o.top), o.left && (r += o.left)), p.railslocked || p.rail.css({
        top: i,
        left: r,
        height: (e ? e.h : p.win.innerHeight()) - (p.opt.railpadding.top + p.opt.railpadding.bottom)
      }), p.zoom && p.zoom.css({
        top: i + 1,
        left: 1 == p.rail.align ? r - 20 : r + p.rail.width + 4
      }), p.railh && !p.railslocked && (i = t.top, r = t.left, (o = p.opt.railhoffset) && (o.top && (i += o.top), o.left && (r += o.left)), e = p.railh.align ? i + n(p.win, "border-top-width", !0) + p.win.innerHeight() - p.railh.height : i + n(p.win, "border-top-width", !0), r += n(p.win, "border-left-width"), p.railh.css({
        top: e - (p.opt.railpadding.top + p.opt.railpadding.bottom),
        left: r,
        width: p.railh.width
      })))
    }, this.doRailClick = function(e, o, t) {
      var i;
      p.railslocked || (p.cancelEvent(e), o ? (o = t ? p.doScrollLeft : p.doScrollTop)(i = t ? (e.pageX - p.railh.offset().left - p.cursorwidth / 2) * p.scrollratio.x : (e.pageY - p.rail.offset().top - p.cursorheight / 2) * p.scrollratio.y) : (o = t ? p.doScrollLeftBy : p.doScrollBy, i = t ? p.scroll.x : p.scroll.y, e = t ? e.pageX - p.railh.offset().left : e.pageY - p.rail.offset().top, t = t ? p.view.w : p.view.h, o(e <= i ? t : -t)))
    }, p.hasanimationframe = y, p.hascancelanimationframe = x, p.hasanimationframe ? p.hascancelanimationframe || (x = function() {
      p.cancelAnimationFrame = !0
    }) : (y = function(e) {
      return setTimeout(e, 15 - Math.floor(new Date / 1e3) % 16)
    }, x = clearTimeout), this.init = function() {
      if (p.saved.css = [], m.isie7mobile || m.isoperamini) return !0;
      m.hasmstouch && p.css(p.ispage ? g("html") : p.win, {
        _touchaction: "none"
      });
      var e, t = m.ismodernie || m.isie10 ? {
        "-ms-overflow-style": "none"
      } : {
        "overflow-y": "hidden"
      };
      if (p.zindex = "auto", p.zindex = p.ispage || "auto" != p.opt.zindex ? p.opt.zindex : function() {
          var e = p.win;
          if ("zIndex" in e) return e.zIndex();
          for (; 0 < e.length && 9 != e[0].nodeType;) {
            var o = e.css("zIndex");
            if (!isNaN(o) && 0 != o) return parseInt(o);
            e = e.parent()
          }
          return !1
        }() || "auto", !p.ispage && "auto" != p.zindex && p.zindex > b && (b = p.zindex), p.isie && 0 == p.zindex && "auto" == p.opt.zindex && (p.zindex = "auto"), !p.ispage || !m.cantouch && !m.isieold && !m.isie9mobile) {
        var o = p.docscroll;
        p.ispage && (o = p.haswrapper ? p.win : p.doc), m.isie9mobile || p.css(o, t), p.ispage && m.isie7 && ("BODY" == p.doc[0].nodeName ? p.css(g("html"), {
          "overflow-y": "hidden"
        }) : "HTML" == p.doc[0].nodeName && p.css(g("body"), t)), !m.isios || p.ispage || p.haswrapper || p.css(g("body"), {
          "-webkit-overflow-scrolling": "touch"
        });
        var i = g(document.createElement("div"));
        i.css({
          position: "relative",
          top: 0,
          float: "right",
          width: p.opt.cursorwidth,
          height: 0,
          "background-color": p.opt.cursorcolor,
          border: p.opt.cursorborder,
          "background-clip": "padding-box",
          "-webkit-border-radius": p.opt.cursorborderradius,
          "-moz-border-radius": p.opt.cursorborderradius,
          "border-radius": p.opt.cursorborderradius
        }), i.hborder = parseFloat(i.outerHeight() - i.innerHeight()), i.addClass("nicescroll-cursors"), p.cursor = i;
        var r = g(document.createElement("div"));
        r.attr("id", p.id), r.addClass("nicescroll-rails nicescroll-rails-vr");
        var n, s, l, a, d, c, u, h = ["left", "right", "top", "bottom"];
        for (l in h) s = h[l], (n = p.opt.railpadding[s]) ? r.css("padding-" + s, n + "px") : p.opt.railpadding[s] = 0;
        r.append(i), r.width = Math.max(parseFloat(p.opt.cursorwidth), i.outerWidth()), r.css({
          width: r.width + "px",
          zIndex: p.zindex,
          background: p.opt.background,
          cursor: "default"
        }), r.visibility = !0, r.scrollable = !0, r.align = "left" == p.opt.railalign ? 0 : 1, p.rail = r, i = p.rail.drag = !1, !p.opt.boxzoom || p.ispage || m.isieold || (i = document.createElement("div"), p.bind(i, "click", p.doZoom), p.bind(i, "mouseenter", function() {
          p.zoom.css("opacity", p.opt.cursoropacitymax)
        }), p.bind(i, "mouseleave", function() {
          p.zoom.css("opacity", p.opt.cursoropacitymin)
        }), p.zoom = g(i), p.zoom.css({
          cursor: "pointer",
          zIndex: p.zindex,
          backgroundImage: "url(" + p.opt.scriptpath + "zoomico.png)",
          height: 18,
          width: 18,
          backgroundPosition: "0px 0px"
        }), p.opt.dblclickzoom && p.bind(p.win, "dblclick", p.doZoom), m.cantouch && p.opt.gesturezoom && (p.ongesturezoom = function(e) {
          return 1.5 < e.scale && p.doZoomIn(e), e.scale < .8 && p.doZoomOut(e), p.cancelEvent(e)
        }, p.bind(p.win, "gestureend", p.ongesturezoom))), p.railh = !1, p.opt.horizrailenabled && (p.css(o, {
          overflowX: "hidden"
        }), (i = g(document.createElement("div"))).css({
          position: "absolute",
          top: 0,
          height: p.opt.cursorwidth,
          width: 0,
          backgroundColor: p.opt.cursorcolor,
          border: p.opt.cursorborder,
          backgroundClip: "padding-box",
          "-webkit-border-radius": p.opt.cursorborderradius,
          "-moz-border-radius": p.opt.cursorborderradius,
          "border-radius": p.opt.cursorborderradius
        }), m.isieold && i.css("overflow", "hidden"), i.wborder = parseFloat(i.outerWidth() - i.innerWidth()), i.addClass("nicescroll-cursors"), p.cursorh = i, (a = g(document.createElement("div"))).attr("id", p.id + "-hr"), a.addClass("nicescroll-rails nicescroll-rails-hr"), a.height = Math.max(parseFloat(p.opt.cursorwidth), i.outerHeight()), a.css({
          height: a.height + "px",
          zIndex: p.zindex,
          background: p.opt.background
        }), a.append(i), a.visibility = !0, a.scrollable = !0, a.align = "top" == p.opt.railvalign ? 0 : 1, p.railh = a, p.railh.drag = !1), p.ispage ? (r.css({
          position: "fixed",
          top: 0,
          height: "100%"
        }), r.align ? r.css({
          right: 0
        }) : r.css({
          left: 0
        }), p.body.append(r), p.railh && (a.css({
          position: "fixed",
          left: 0,
          width: "100%"
        }), a.align ? a.css({
          bottom: 0
        }) : a.css({
          top: 0
        }), p.body.append(a))) : (p.ishwscroll ? ("static" == p.win.css("position") && p.css(p.win, {
          position: "relative"
        }), o = "HTML" == p.win[0].nodeName ? p.body : p.win, g(o).scrollTop(0).scrollLeft(0), p.zoom && (p.zoom.css({
          position: "absolute",
          top: 1,
          right: 0,
          "margin-right": r.width + 4
        }), o.append(p.zoom)), r.css({
          position: "absolute",
          top: 0
        }), r.align ? r.css({
          right: 0
        }) : r.css({
          left: 0
        }), o.append(r), a && (a.css({
          position: "absolute",
          left: 0,
          bottom: 0
        }), a.align ? a.css({
          bottom: 0
        }) : a.css({
          top: 0
        }), o.append(a))) : (p.isfixed = "fixed" == p.win.css("position"), o = p.isfixed ? "fixed" : "absolute", p.isfixed || (p.viewport = p.getViewport(p.win[0])), p.viewport && (p.body = p.viewport, 0 == /fixed|absolute/.test(p.viewport.css("position")) && p.css(p.viewport, {
          position: "relative"
        })), r.css({
          position: o
        }), p.zoom && p.zoom.css({
          position: o
        }), p.updateScrollBar(), p.body.append(r), p.zoom && p.body.append(p.zoom), p.railh && (a.css({
          position: o
        }), p.body.append(a))), m.isios && p.css(p.win, {
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          "-webkit-touch-callout": "none"
        }), m.isie && p.opt.disableoutline && p.win.attr("hideFocus", "true"), m.iswebkit && p.opt.disableoutline && p.win.css("outline", "none")), !1 === p.opt.autohidemode ? (p.autohidedom = !1, p.rail.css({
          opacity: p.opt.cursoropacitymax
        }), p.railh && p.railh.css({
          opacity: p.opt.cursoropacitymax
        })) : !0 === p.opt.autohidemode || "leave" === p.opt.autohidemode ? (p.autohidedom = g().add(p.rail), m.isie8 && (p.autohidedom = p.autohidedom.add(p.cursor)), p.railh && (p.autohidedom = p.autohidedom.add(p.railh)), p.railh && m.isie8 && (p.autohidedom = p.autohidedom.add(p.cursorh))) : "scroll" == p.opt.autohidemode ? (p.autohidedom = g().add(p.rail), p.railh && (p.autohidedom = p.autohidedom.add(p.railh))) : "cursor" == p.opt.autohidemode ? (p.autohidedom = g().add(p.cursor), p.railh && (p.autohidedom = p.autohidedom.add(p.cursorh))) : "hidden" == p.opt.autohidemode && (p.autohidedom = !1, p.hide(), p.railslocked = !1), m.isie9mobile ? (p.scrollmom = new k(p), p.onmangotouch = function() {
          var e = p.getScrollTop(),
            o = p.getScrollLeft();
          if (e == p.scrollmom.lastscrolly && o == p.scrollmom.lastscrollx) return !0;
          var t, i, r, n = e - p.mangotouch.sy,
            s = o - p.mangotouch.sx;
          0 != Math.round(Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2))) && (t = n < 0 ? -1 : 1, i = s < 0 ? -1 : 1, r = +new Date, p.mangotouch.lazy && clearTimeout(p.mangotouch.lazy), 80 < r - p.mangotouch.tm || p.mangotouch.dry != t || p.mangotouch.drx != i ? (p.scrollmom.stop(), p.scrollmom.reset(o, e), p.mangotouch.sy = e, p.mangotouch.ly = e, p.mangotouch.sx = o, p.mangotouch.lx = o, p.mangotouch.dry = t, p.mangotouch.drx = i, p.mangotouch.tm = r) : (p.scrollmom.stop(), p.scrollmom.update(p.mangotouch.sx - s, p.mangotouch.sy - n), p.mangotouch.tm = r, n = Math.max(Math.abs(p.mangotouch.ly - e), Math.abs(p.mangotouch.lx - o)), p.mangotouch.ly = e, p.mangotouch.lx = o, 2 < n && (p.mangotouch.lazy = setTimeout(function() {
            p.mangotouch.lazy = !1, p.mangotouch.dry = 0, p.mangotouch.drx = 0, p.mangotouch.tm = 0, p.scrollmom.doMomentum(30)
          }, 100))))
        }, r = p.getScrollTop(), a = p.getScrollLeft(), p.mangotouch = {
          sy: r,
          ly: r,
          dry: 0,
          sx: a,
          lx: a,
          drx: 0,
          lazy: !1,
          tm: 0
        }, p.bind(p.docscroll, "scroll", p.onmangotouch)) : ((m.cantouch || p.istouchcapable || p.opt.touchbehavior || m.hasmstouch) && (p.scrollmom = new k(p), p.ontouchstart = function(e) {
          if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
          if (p.hasmoving = !1, !p.railslocked) {
            var o, t, i;
            if (m.hasmstouch)
              for (o = !!e.target && e.target; o;) {
                if (0 < (i = g(o).getNiceScroll()).length && i[0].me == p.me) break;
                if (0 < i.length) return !1;
                if ("DIV" == o.nodeName && o.id == p.id) break;
                o = !!o.parentNode && o.parentNode
              }
            if (p.cancelScroll(), (o = p.getTarget(e)) && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return p.stopPropagation(e);
            if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), p.forcescreen && ((e = {
                original: (i = e).original ? e.original : e
              }).clientX = i.screenX, e.clientY = i.screenY), p.rail.drag = {
                x: e.clientX,
                y: e.clientY,
                sx: p.scroll.x,
                sy: p.scroll.y,
                st: p.getScrollTop(),
                sl: p.getScrollLeft(),
                pt: 2,
                dl: !1
              }, p.ispage || !p.opt.directionlockdeadzone ? p.rail.drag.dl = "f" : (i = g(window).width(), t = g(window).height(), t = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - t), i = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - i), p.rail.drag.ck = !p.rail.scrollable && p.railh.scrollable ? 0 < t && "v" : !(!p.rail.scrollable || p.railh.scrollable) && (0 < i && "h"), p.rail.drag.ck || (p.rail.drag.dl = "f")), p.opt.touchbehavior && p.isiframe && m.isie && (i = p.win.position(), p.rail.drag.x += i.left, p.rail.drag.y += i.top), p.hasmoving = !1, p.lastmouseup = !1, p.scrollmom.reset(e.clientX, e.clientY), !m.cantouch && !this.istouchcapable && !e.pointerType) {
              if (!o || !/INPUT|SELECT|TEXTAREA/i.test(o.nodeName)) return !p.ispage && m.hasmousecapture && o.setCapture(), p.opt.touchbehavior ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function(e) {
                if (p.hasmoving) return !1;
                o._onclick.call(this, e)
              }), p.cancelEvent(e)) : p.stopPropagation(e);
              /SUBMIT|CANCEL|BUTTON/i.test(g(o).attr("type")) && (pc = {
                tg: o,
                click: !1
              }, p.preventclick = pc)
            }
          }
        }, p.ontouchend = function(e) {
          if (!p.rail.drag) return !0;
          if (2 == p.rail.drag.pt) {
            if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
            if (p.scrollmom.doMomentum(), p.rail.drag = !1, p.hasmoving && (p.lastmouseup = !0, p.hideCursor(), m.hasmousecapture && document.releaseCapture(), !m.cantouch)) return p.cancelEvent(e)
          } else if (1 == p.rail.drag.pt) return p.onmouseup(e)
        }, d = p.opt.touchbehavior && p.isiframe && !m.hasmousecapture, p.ontouchmove = function(e, o) {
          if (!p.rail.drag || e.targetTouches && p.opt.preventmultitouchscrolling && 1 < e.targetTouches.length || e.pointerType && 2 != e.pointerType && "touch" != e.pointerType) return !1;
          if (2 == p.rail.drag.pt) {
            if (m.cantouch && m.isios && void 0 === e.original) return !0;
            p.hasmoving = !0, p.preventclick && !p.preventclick.click && (p.preventclick.click = p.preventclick.tg.onclick || !1, p.preventclick.tg.onclick = p.onpreventclick), "changedTouches" in (e = g.extend({
              original: e
            }, e)) && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), p.forcescreen && ((e = {
              original: (t = e).original ? e.original : e
            }).clientX = t.screenX, e.clientY = t.screenY);
            var t = n = 0;
            d && !o && (t = -(n = p.win.position()).left, n = -n.top);
            var i, r = e.clientY + n,
              n = r - p.rail.drag.y,
              s = e.clientX + t,
              l = s - p.rail.drag.x,
              a = p.rail.drag.st - n;
            if (p.ishwscroll && p.opt.bouncescroll ? a < 0 ? a = Math.round(a / 2) : a > p.page.maxh && (a = p.page.maxh + Math.round((a - p.page.maxh) / 2)) : (a < 0 && (r = a = 0), a > p.page.maxh && (a = p.page.maxh, r = 0)), p.railh && p.railh.scrollable && (i = p.isrtlmode ? l - p.rail.drag.sl : p.rail.drag.sl - l, p.ishwscroll && p.opt.bouncescroll ? i < 0 ? i = Math.round(i / 2) : i > p.page.maxw && (i = p.page.maxw + Math.round((i - p.page.maxw) / 2)) : (i < 0 && (s = i = 0), i > p.page.maxw && (i = p.page.maxw, s = 0))), t = !1, p.rail.drag.dl) t = !0, "v" == p.rail.drag.dl ? i = p.rail.drag.sl : "h" == p.rail.drag.dl && (a = p.rail.drag.st);
            else {
              n = Math.abs(n);
              var l = Math.abs(l),
                c = p.opt.directionlockdeadzone;
              if ("v" == p.rail.drag.ck) {
                if (c < n && l <= .3 * n) return !(p.rail.drag = !1);
                c < l && (p.rail.drag.dl = "f", g("body").scrollTop(g("body").scrollTop()))
              } else if ("h" == p.rail.drag.ck) {
                if (c < l && n <= .3 * l) return !(p.rail.drag = !1);
                c < n && (p.rail.drag.dl = "f", g("body").scrollLeft(g("body").scrollLeft()))
              }
            }
            if (p.synched("touchmove", function() {
                p.rail.drag && 2 == p.rail.drag.pt && (p.prepareTransition && p.prepareTransition(0), p.rail.scrollable && p.setScrollTop(a), p.scrollmom.update(s, r), p.railh && p.railh.scrollable ? (p.setScrollLeft(i), p.showCursor(a, i)) : p.showCursor(a), m.isie10 && document.selection.clear())
              }), m.ischrome && p.istouchcapable && (t = !1), t) return p.cancelEvent(e)
          } else if (1 == p.rail.drag.pt) return p.onmousemove(e)
        }), p.onmousedown = function(e, o) {
          if (!p.rail.drag || 1 == p.rail.drag.pt) {
            if (p.railslocked) return p.cancelEvent(e);
            p.cancelScroll(), p.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: p.scroll.x,
              sy: p.scroll.y,
              pt: 1,
              hr: !!o
            };
            var t = p.getTarget(e);
            return !p.ispage && m.hasmousecapture && t.setCapture(), p.isiframe && !m.hasmousecapture && (p.saved.csspointerevents = p.doc.css("pointer-events"), p.css(p.doc, {
              "pointer-events": "none"
            })), p.hasmoving = !1, p.cancelEvent(e)
          }
        }, p.onmouseup = function(e) {
          if (p.rail.drag) return 1 != p.rail.drag.pt || (m.hasmousecapture && document.releaseCapture(), p.isiframe && !m.hasmousecapture && p.doc.css("pointer-events", p.saved.csspointerevents), p.rail.drag = !1, p.hasmoving && p.triggerScrollEnd(), p.cancelEvent(e))
        }, p.onmousemove = function(e) {
          var o;
          if (p.rail.drag) {
            if (1 == p.rail.drag.pt) return m.ischrome && 0 == e.which ? p.onmouseup(e) : (p.cursorfreezed = !0, p.hasmoving = !0, p.rail.drag.hr ? (p.scroll.x = p.rail.drag.sx + (e.clientX - p.rail.drag.x), p.scroll.x < 0 && (p.scroll.x = 0), o = p.scrollvaluemaxw, p.scroll.x > o && (p.scroll.x = o)) : (p.scroll.y = p.rail.drag.sy + (e.clientY - p.rail.drag.y), p.scroll.y < 0 && (p.scroll.y = 0), o = p.scrollvaluemax, p.scroll.y > o && (p.scroll.y = o)), p.synched("mousemove", function() {
              p.rail.drag && 1 == p.rail.drag.pt && (p.showCursor(), p.rail.drag.hr ? p.hasreversehr ? p.doScrollLeft(p.scrollvaluemaxw - Math.round(p.scroll.x * p.scrollratio.x), p.opt.cursordragspeed) : p.doScrollLeft(Math.round(p.scroll.x * p.scrollratio.x), p.opt.cursordragspeed) : p.doScrollTop(Math.round(p.scroll.y * p.scrollratio.y), p.opt.cursordragspeed))
            }), p.cancelEvent(e))
          } else p.checkarea = 0
        }, m.cantouch || p.opt.touchbehavior ? (p.onpreventclick = function(e) {
          if (p.preventclick) return p.preventclick.tg.onclick = p.preventclick.click, p.preventclick = !1, p.cancelEvent(e)
        }, p.bind(p.win, "mousedown", p.ontouchstart), p.onclick = !m.isios && function(e) {
          return !p.lastmouseup || (p.lastmouseup = !1, p.cancelEvent(e))
        }, p.opt.grabcursorenabled && m.cursorgrabvalue && (p.css(p.ispage ? p.doc : p.win, {
          cursor: m.cursorgrabvalue
        }), p.css(p.rail, {
          cursor: m.cursorgrabvalue
        }))) : (c = function(e) {
          var o;
          p.selectiondrag && (e && (o = p.win.outerHeight(), 0 < (e = e.pageY - p.selectiondrag.top) && e < o && (e = 0), o <= e && (e -= o), p.selectiondrag.df = e), 0 != p.selectiondrag.df && (p.doScrollBy(2 * -Math.floor(p.selectiondrag.df / 6)), p.debounced("doselectionscroll", function() {
            c()
          }, 50)))
        }, p.hasTextSelected = "getSelection" in document ? function() {
          return 0 < document.getSelection().rangeCount
        } : "selection" in document ? function() {
          return "None" != document.selection.type
        } : function() {
          return !1
        }, p.onselectionstart = function(e) {
          p.ispage || (p.selectiondrag = p.win.offset())
        }, p.onselectionend = function(e) {
          p.selectiondrag = !1
        }, p.onselectiondrag = function(e) {
          p.selectiondrag && p.hasTextSelected() && p.debounced("selectionscroll", function() {
            c(e)
          }, 250)
        }), m.hasw3ctouch ? (p.css(p.rail, {
          "touch-action": "none"
        }), p.css(p.cursor, {
          "touch-action": "none"
        }), p.bind(p.win, "pointerdown", p.ontouchstart), p.bind(document, "pointerup", p.ontouchend), p.bind(document, "pointermove", p.ontouchmove)) : m.hasmstouch ? (p.css(p.rail, {
          "-ms-touch-action": "none"
        }), p.css(p.cursor, {
          "-ms-touch-action": "none"
        }), p.bind(p.win, "MSPointerDown", p.ontouchstart), p.bind(document, "MSPointerUp", p.ontouchend), p.bind(document, "MSPointerMove", p.ontouchmove), p.bind(p.cursor, "MSGestureHold", function(e) {
          e.preventDefault()
        }), p.bind(p.cursor, "contextmenu", function(e) {
          e.preventDefault()
        })) : this.istouchcapable && (p.bind(p.win, "touchstart", p.ontouchstart), p.bind(document, "touchend", p.ontouchend), p.bind(document, "touchcancel", p.ontouchend), p.bind(document, "touchmove", p.ontouchmove)), !p.opt.cursordragontouch && (m.cantouch || p.opt.touchbehavior) || (p.rail.css({
          cursor: "default"
        }), p.railh && p.railh.css({
          cursor: "default"
        }), p.jqbind(p.rail, "mouseenter", function() {
          return !(!p.ispage && !p.win.is(":visible")) && (p.canshowonmouseevent && p.showCursor(), void(p.rail.active = !0))
        }), p.jqbind(p.rail, "mouseleave", function() {
          p.rail.active = !1, p.rail.drag || p.hideCursor()
        }), p.opt.sensitiverail && (p.bind(p.rail, "click", function(e) {
          p.doRailClick(e, !1, !1)
        }), p.bind(p.rail, "dblclick", function(e) {
          p.doRailClick(e, !0, !1)
        }), p.bind(p.cursor, "click", function(e) {
          p.cancelEvent(e)
        }), p.bind(p.cursor, "dblclick", function(e) {
          p.cancelEvent(e)
        })), p.railh && (p.jqbind(p.railh, "mouseenter", function() {
          return !(!p.ispage && !p.win.is(":visible")) && (p.canshowonmouseevent && p.showCursor(), void(p.rail.active = !0))
        }), p.jqbind(p.railh, "mouseleave", function() {
          p.rail.active = !1, p.rail.drag || p.hideCursor()
        }), p.opt.sensitiverail && (p.bind(p.railh, "click", function(e) {
          p.doRailClick(e, !1, !0)
        }), p.bind(p.railh, "dblclick", function(e) {
          p.doRailClick(e, !0, !0)
        }), p.bind(p.cursorh, "click", function(e) {
          p.cancelEvent(e)
        }), p.bind(p.cursorh, "dblclick", function(e) {
          p.cancelEvent(e)
        })))), m.cantouch || p.opt.touchbehavior ? (p.bind(m.hasmousecapture ? p.win : document, "mouseup", p.ontouchend), p.bind(document, "mousemove", p.ontouchmove), p.onclick && p.bind(document, "click", p.onclick), p.opt.cursordragontouch ? (p.bind(p.cursor, "mousedown", p.onmousedown), p.bind(p.cursor, "mouseup", p.onmouseup), p.cursorh && p.bind(p.cursorh, "mousedown", function(e) {
          p.onmousedown(e, !0)
        }), p.cursorh && p.bind(p.cursorh, "mouseup", p.onmouseup)) : (p.bind(p.rail, "mousedown", function(e) {
          e.preventDefault()
        }), p.railh && p.bind(p.railh, "mousedown", function(e) {
          e.preventDefault()
        }))) : (p.bind(m.hasmousecapture ? p.win : document, "mouseup", p.onmouseup), p.bind(document, "mousemove", p.onmousemove), p.onclick && p.bind(document, "click", p.onclick), p.bind(p.cursor, "mousedown", p.onmousedown), p.bind(p.cursor, "mouseup", p.onmouseup), p.railh && (p.bind(p.cursorh, "mousedown", function(e) {
          p.onmousedown(e, !0)
        }), p.bind(p.cursorh, "mouseup", p.onmouseup)), !p.ispage && p.opt.enablescrollonselection && (p.bind(p.win[0], "mousedown", p.onselectionstart), p.bind(document, "mouseup", p.onselectionend), p.bind(p.cursor, "mouseup", p.onselectionend), p.cursorh && p.bind(p.cursorh, "mouseup", p.onselectionend), p.bind(document, "mousemove", p.onselectiondrag)), p.zoom && (p.jqbind(p.zoom, "mouseenter", function() {
          p.canshowonmouseevent && p.showCursor(), p.rail.active = !0
        }), p.jqbind(p.zoom, "mouseleave", function() {
          p.rail.active = !1, p.rail.drag || p.hideCursor()
        }))), p.opt.enablemousewheel && (p.isiframe || p.mousewheel(m.isie && p.ispage ? document : p.win, p.onmousewheel), p.mousewheel(p.rail, p.onmousewheel), p.railh && p.mousewheel(p.railh, p.onmousewheelhr)), p.ispage || m.cantouch || /HTML|^BODY/.test(p.win[0].nodeName) || (p.win.attr("tabindex") || p.win.attr({
          tabindex: v++
        }), p.jqbind(p.win, "focus", function(e) {
          f = p.getTarget(e).id || !0, p.hasfocus = !0, p.canshowonmouseevent && p.noticeCursor()
        }), p.jqbind(p.win, "blur", function(e) {
          f = !1, p.hasfocus = !1
        }), p.jqbind(p.win, "mouseenter", function(e) {
          w = p.getTarget(e).id || !0, p.hasmousefocus = !0, p.canshowonmouseevent && p.noticeCursor()
        }), p.jqbind(p.win, "mouseleave", function() {
          w = !1, p.hasmousefocus = !1, p.rail.drag || p.hideCursor()
        }))), p.onkeypress = function(e) {
          if (p.railslocked && 0 == p.page.maxh) return !0;
          e = e || window.e;
          var o = p.getTarget(e);
          if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName) && (!o.getAttribute("type") && !o.type || !/submit|button|cancel/i.tp) || g(o).attr("contenteditable")) return !0;
          if (p.hasfocus || p.hasmousefocus && !f || p.ispage && !f && !w) {
            if (o = e.keyCode, p.railslocked && 27 != o) return p.cancelEvent(e);
            var t = e.ctrlKey || !1,
              i = e.shiftKey || !1,
              r = !1;
            switch (o) {
              case 38:
              case 63233:
                p.doScrollBy(72), r = !0;
                break;
              case 40:
              case 63235:
                p.doScrollBy(-72), r = !0;
                break;
              case 37:
              case 63232:
                p.railh && (t ? p.doScrollLeft(0) : p.doScrollLeftBy(72), r = !0);
                break;
              case 39:
              case 63234:
                p.railh && (t ? p.doScrollLeft(p.page.maxw) : p.doScrollLeftBy(-72), r = !0);
                break;
              case 33:
              case 63276:
                p.doScrollBy(p.view.h), r = !0;
                break;
              case 34:
              case 63277:
                p.doScrollBy(-p.view.h), r = !0;
                break;
              case 36:
              case 63273:
                p.railh && t ? p.doScrollPos(0, 0) : p.doScrollTo(0), r = !0;
                break;
              case 35:
              case 63275:
                p.railh && t ? p.doScrollPos(p.page.maxw, p.page.maxh) : p.doScrollTo(p.page.maxh), r = !0;
                break;
              case 32:
                p.opt.spacebarenabled && (i ? p.doScrollBy(p.view.h) : p.doScrollBy(-p.view.h), r = !0);
                break;
              case 27:
                p.zoomactive && (p.doZoom(), r = !0)
            }
            if (r) return p.cancelEvent(e)
          }
        }, p.opt.enablekeyboard && p.bind(document, m.isopera && !m.isopera12 ? "keypress" : "keydown", p.onkeypress), p.bind(document, "keydown", function(e) {
          e.ctrlKey && (p.wheelprevented = !0)
        }), p.bind(document, "keyup", function(e) {
          e.ctrlKey || (p.wheelprevented = !1)
        }), p.bind(window, "blur", function(e) {
          p.wheelprevented = !1
        }), p.bind(window, "resize", p.lazyResize), p.bind(window, "orientationchange", p.lazyResize), p.bind(window, "load", p.lazyResize), !m.ischrome || p.ispage || p.haswrapper || (u = p.win.attr("style"), r = parseFloat(p.win.css("width")) + 1, p.win.css("width", r), p.synched("chromefix", function() {
          p.win.attr("style", u)
        })), p.onAttributeChange = function(e) {
          p.lazyResize(p.isieold ? 250 : 30)
        }, p.isie11 || !1 === S || (p.observerbody = new S(function(e) {
          if (e.forEach(function(e) {
              if ("attributes" == e.type) return g("body").hasClass("modal-open") && g("body").hasClass("modal-dialog") && !g.contains(g(".modal-dialog")[0], p.doc[0]) ? p.hide() : p.show()
            }), document.body.scrollHeight != p.page.maxh) return p.lazyResize(30)
        }), p.observerbody.observe(document.body, {
          childList: !0,
          subtree: !0,
          characterData: !1,
          attributes: !0,
          attributeFilter: ["class"]
        })), p.ispage || p.haswrapper || (!1 !== S ? (p.observer = new S(function(e) {
          e.forEach(p.onAttributeChange)
        }), p.observer.observe(p.win[0], {
          childList: !0,
          characterData: !1,
          attributes: !0,
          subtree: !1
        }), p.observerremover = new S(function(e) {
          e.forEach(function(e) {
            if (0 < e.removedNodes.length)
              for (var o in e.removedNodes)
                if (p && e.removedNodes[o] == p.win[0]) return p.remove()
          })
        }), p.observerremover.observe(p.win[0].parentNode, {
          childList: !0,
          characterData: !1,
          attributes: !1,
          subtree: !1
        })) : (p.bind(p.win, m.isie && !m.isie9 ? "propertychange" : "DOMAttrModified", p.onAttributeChange), m.isie9 && p.win[0].attachEvent("onpropertychange", p.onAttributeChange), p.bind(p.win, "DOMNodeRemoved", function(e) {
          e.target == p.win[0] && p.remove()
        }))), !p.ispage && p.opt.boxzoom && p.bind(window, "resize", p.resizeZoom), p.istextarea && (p.bind(p.win, "keydown", p.lazyResize), p.bind(p.win, "mouseup", p.lazyResize)), p.lazyResize(30)
      }
      "IFRAME" == this.doc[0].nodeName && (e = function() {
        var o, e;
        p.iframexd = !1;
        try {
          o = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
        } catch (e) {
          o = !(p.iframexd = !0)
        }
        if (p.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
        p.forcescreen = !0, p.isiframe && (p.iframe = {
          doc: g(o),
          html: p.doc.contents().find("html")[0],
          body: p.doc.contents().find("body")[0]
        }, p.getContentSize = function() {
          return {
            w: Math.max(p.iframe.html.scrollWidth, p.iframe.body.scrollWidth),
            h: Math.max(p.iframe.html.scrollHeight, p.iframe.body.scrollHeight)
          }
        }, p.docscroll = g(p.iframe.body)), m.isios || !p.opt.iframeautoresize || p.isiframe || (p.win.scrollTop(0), p.doc.height(""), e = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight), p.doc.height(e)), p.lazyResize(30), m.isie7 && p.css(g(p.iframe.html), t), p.css(g(p.iframe.body), t), m.isios && p.haswrapper && p.css(g(o.body), {
          "-webkit-transform": "translate3d(0,0,0)"
        }), "contentWindow" in this ? p.bind(this.contentWindow, "scroll", p.onscroll) : p.bind(o, "scroll", p.onscroll), p.opt.enablemousewheel && p.mousewheel(o, p.onmousewheel), p.opt.enablekeyboard && p.bind(o, m.isopera ? "keypress" : "keydown", p.onkeypress), (m.cantouch || p.opt.touchbehavior) && (p.bind(o, "mousedown", p.ontouchstart), p.bind(o, "mousemove", function(e) {
          return p.ontouchmove(e, !0)
        }), p.opt.grabcursorenabled && m.cursorgrabvalue && p.css(g(o.body), {
          cursor: m.cursorgrabvalue
        })), p.bind(o, "mouseup", p.ontouchend), p.zoom && (p.opt.dblclickzoom && p.bind(o, "dblclick", p.doZoom), p.ongesturezoom && p.bind(o, "gestureend", p.ongesturezoom))
      }, this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
        e.call(p.doc[0], !1)
      }, 500), p.bind(this.doc, "load", e))
    }, this.showCursor = function(e, o) {
      var t;
      p.cursortimeout && (clearTimeout(p.cursortimeout), p.cursortimeout = 0), p.rail && (p.autohidedom && (p.autohidedom.stop().css({
        opacity: p.opt.cursoropacitymax
      }), p.cursoractive = !0), p.rail.drag && 1 == p.rail.drag.pt || (void 0 !== e && !1 !== e && (p.scroll.y = Math.round(e / p.scrollratio.y)), void 0 !== o && (p.scroll.x = Math.round(o / p.scrollratio.x))), p.cursor.css({
        height: p.cursorheight,
        top: p.scroll.y
      }), p.cursorh && (t = p.hasreversehr ? p.scrollvaluemaxw - p.scroll.x : p.scroll.x, !p.rail.align && p.rail.visibility ? p.cursorh.css({
        width: p.cursorwidth,
        left: t + p.rail.width
      }) : p.cursorh.css({
        width: p.cursorwidth,
        left: t
      }), p.cursoractive = !0), p.zoom && p.zoom.stop().css({
        opacity: p.opt.cursoropacitymax
      }))
    }, this.hideCursor = function(e) {
      p.cursortimeout || !p.rail || !p.autohidedom || p.hasmousefocus && "leave" == p.opt.autohidemode || (p.cursortimeout = setTimeout(function() {
        p.rail.active && p.showonmouseevent || (p.autohidedom.stop().animate({
          opacity: p.opt.cursoropacitymin
        }), p.zoom && p.zoom.stop().animate({
          opacity: p.opt.cursoropacitymin
        }), p.cursoractive = !1), p.cursortimeout = 0
      }, e || p.opt.hidecursordelay))
    }, this.noticeCursor = function(e, o, t) {
      p.showCursor(o, t), p.rail.active || p.hideCursor(e)
    }, this.getContentSize = p.ispage ? function() {
      return {
        w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
        h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
      }
    } : p.haswrapper ? function() {
      return {
        w: p.doc.outerWidth() + parseInt(p.win.css("paddingLeft")) + parseInt(p.win.css("paddingRight")),
        h: p.doc.outerHeight() + parseInt(p.win.css("paddingTop")) + parseInt(p.win.css("paddingBottom"))
      }
    } : function() {
      return {
        w: p.docscroll[0].scrollWidth,
        h: p.docscroll[0].scrollHeight
      }
    }, this.onResize = function(e, o) {
      if (!p || !p.win) return !1;
      if (!p.haswrapper && !p.ispage) {
        if ("none" == p.win.css("display")) return p.visibility && p.hideRail().hideRailHr(), !1;
        p.hidden || p.visibility || p.showRail().showRailHr()
      }
      var t = p.page.maxh,
        i = p.page.maxw,
        r = p.view.h,
        n = p.view.w;
      if (p.view = {
          w: p.ispage ? p.win.width() : parseInt(p.win[0].clientWidth),
          h: p.ispage ? p.win.height() : parseInt(p.win[0].clientHeight)
        }, p.page = o || p.getContentSize(), p.page.maxh = Math.max(0, p.page.h - p.view.h), p.page.maxw = Math.max(0, p.page.w - p.view.w), p.page.maxh == t && p.page.maxw == i && p.view.w == n && p.view.h == r) {
        if (p.ispage) return p;
        if (t = p.win.offset(), p.lastposition && ((i = p.lastposition).top == t.top && i.left == t.left)) return p;
        p.lastposition = t
      }
      return 0 == p.page.maxh ? (p.hideRail(), p.scrollvaluemax = 0, p.scroll.y = 0, p.scrollratio.y = 0, p.cursorheight = 0, p.setScrollTop(0), p.rail && (p.rail.scrollable = !1)) : (p.page.maxh -= p.opt.railpadding.top + p.opt.railpadding.bottom, p.rail.scrollable = !0), 0 == p.page.maxw ? (p.hideRailHr(), p.scrollvaluemaxw = 0, p.scroll.x = 0, p.scrollratio.x = 0, p.cursorwidth = 0, p.setScrollLeft(0), p.railh && (p.railh.scrollable = !1)) : (p.page.maxw -= p.opt.railpadding.left + p.opt.railpadding.right, p.railh && (p.railh.scrollable = p.opt.horizrailenabled)), p.railslocked = p.locked || 0 == p.page.maxh && 0 == p.page.maxw, p.railslocked ? (p.ispage || p.updateScrollBar(p.view), !1) : (p.hidden || p.visibility ? !p.railh || p.hidden || p.railh.visibility || p.showRailHr() : p.showRail().showRailHr(), p.istextarea && p.win.css("resize") && "none" != p.win.css("resize") && (p.view.h -= 20), p.cursorheight = Math.min(p.view.h, Math.round(p.view.h / p.page.h * p.view.h)), p.cursorheight = p.opt.cursorfixedheight ? p.opt.cursorfixedheight : Math.max(p.opt.cursorminheight, p.cursorheight), p.cursorwidth = Math.min(p.view.w, Math.round(p.view.w / p.page.w * p.view.w)), p.cursorwidth = p.opt.cursorfixedheight ? p.opt.cursorfixedheight : Math.max(p.opt.cursorminheight, p.cursorwidth), p.scrollvaluemax = p.view.h - p.cursorheight - p.cursor.hborder - (p.opt.railpadding.top + p.opt.railpadding.bottom), p.railh && (p.railh.width = 0 < p.page.maxh ? p.view.w - p.rail.width : p.view.w, p.scrollvaluemaxw = p.railh.width - p.cursorwidth - p.cursorh.wborder - (p.opt.railpadding.left + p.opt.railpadding.right)), p.ispage || p.updateScrollBar(p.view), p.scrollratio = {
        x: p.page.maxw / p.scrollvaluemaxw,
        y: p.page.maxh / p.scrollvaluemax
      }, p.getScrollTop() > p.page.maxh ? p.doScrollTop(p.page.maxh) : (p.scroll.y = Math.round(p.getScrollTop() * (1 / p.scrollratio.y)), p.scroll.x = Math.round(p.getScrollLeft() * (1 / p.scrollratio.x)), p.cursoractive && p.noticeCursor()), p.scroll.y && 0 == p.getScrollTop() && p.doScrollTo(Math.floor(p.scroll.y * p.scrollratio.y)), p)
    }, this.resize = p.onResize, this.hlazyresize = 0, this.lazyResize = function(e) {
      return p.haswrapper || p.hide(), p.hlazyresize && clearTimeout(p.hlazyresize), p.hlazyresize = setTimeout(function() {
        p && p.show().resize()
      }, 240), p
    }, this.jqbind = function(e, o, t) {
      p.events.push({
        e: e,
        n: o,
        f: t,
        q: !0
      }), g(e).bind(o, t)
    }, this.mousewheel = function(e, o, t) {
      var i;
      e = "jquery" in e ? e[0] : e, "onwheel" in document.createElement("div") ? p._bind(e, "wheel", o, t || !1) : (r(e, i = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", o, t || !1), "DOMMouseScroll" == i && r(e, "MozMousePixelScroll", o, t || !1))
    }, m.haseventlistener ? (this.bind = function(e, o, t, i) {
      p._bind("jquery" in e ? e[0] : e, o, t, i || !1)
    }, this._bind = function(e, o, t, i) {
      p.events.push({
        e: e,
        n: o,
        f: t,
        b: i,
        q: !1
      }), e.addEventListener(o, t, i || !1)
    }, this.cancelEvent = function(e) {
      return e && ((e = e.original ? e.original : e).cancelable && e.preventDefault(), e.stopPropagation(), e.preventManipulation && e.preventManipulation()), !1
    }, this.stopPropagation = function(e) {
      return e && (e = e.original ? e.original : e).stopPropagation(), !1
    }, this._unbind = function(e, o, t, i) {
      e.removeEventListener(o, t, i)
    }) : (this.bind = function(e, o, t, i) {
      var r = "jquery" in e ? e[0] : e;
      p._bind(r, o, function(e) {
        return (e = e || window.event || !1) && e.srcElement && (e.target = e.srcElement), "pageY" in e || (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop), !1 !== t.call(r, e) && !1 !== i || p.cancelEvent(e)
      })
    }, this._bind = function(e, o, t, i) {
      p.events.push({
        e: e,
        n: o,
        f: t,
        b: i,
        q: !1
      }), e.attachEvent ? e.attachEvent("on" + o, t) : e["on" + o] = t
    }, this.cancelEvent = function(e) {
      return !!(e = window.event || !1) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1)
    }, this.stopPropagation = function(e) {
      return !!(e = window.event || !1) && !(e.cancelBubble = !0)
    }, this._unbind = function(e, o, t, i) {
      e.detachEvent ? e.detachEvent("on" + o, t) : e["on" + o] = !1
    }), this.unbindAll = function() {
      for (var e = 0; e < p.events.length; e++) {
        var o = p.events[e];
        o.q ? o.e.unbind(o.n, o.f) : p._unbind(o.e, o.n, o.f, o.b)
      }
    }, this.showRail = function() {
      return 0 == p.page.maxh || !p.ispage && "none" == p.win.css("display") || (p.visibility = !0, p.rail.visibility = !0, p.rail.css("display", "block")), p
    }, this.showRailHr = function() {
      return p.railh && (0 == p.page.maxw || !p.ispage && "none" == p.win.css("display") || (p.railh.visibility = !0, p.railh.css("display", "block"))), p
    }, this.hideRail = function() {
      return p.visibility = !1, p.rail.visibility = !1, p.rail.css("display", "none"), p
    }, this.hideRailHr = function() {
      return p.railh && (p.railh.visibility = !1, p.railh.css("display", "none")), p
    }, this.show = function() {
      return p.hidden = !1, p.railslocked = !1, p.showRail().showRailHr()
    }, this.hide = function() {
      return p.hidden = !0, p.railslocked = !0, p.hideRail().hideRailHr()
    }, this.toggle = function() {
      return p.hidden ? p.show() : p.hide()
    }, this.remove = function() {
      for (var e in p.stop(), p.cursortimeout && clearTimeout(p.cursortimeout), p.delaylist) p.delaylist[e] && x(p.delaylist[e].h);
      for (p.doZoomOut(), p.unbindAll(), m.isie9 && p.win[0].detachEvent("onpropertychange", p.onAttributeChange), !1 !== p.observer && p.observer.disconnect(), !1 !== p.observerremover && p.observerremover.disconnect(), !1 !== p.observerbody && p.observerbody.disconnect(), p.events = null, p.cursor && p.cursor.remove(), p.cursorh && p.cursorh.remove(), p.rail && p.rail.remove(), p.railh && p.railh.remove(), p.zoom && p.zoom.remove(), e = 0; e < p.saved.css.length; e++) {
        var o = p.saved.css[e];
        o[0].css(o[1], void 0 === o[2] ? "" : o[2])
      }
      p.saved = !1, p.me.data("__nicescroll", "");
      var t = g.nicescroll;
      for (var i in t.each(function(e) {
          if (this && this.id === p.id) {
            delete t[e];
            for (var o = ++e; o < t.length; o++, e++) t[e] = t[o];
            t.length--, t.length && delete t[t.length]
          }
        }), p) p[i] = null, delete p[i];
      p = null
    }, this.scrollstart = function(e) {
      return this.onscrollstart = e, p
    }, this.scrollend = function(e) {
      return this.onscrollend = e, p
    }, this.scrollcancel = function(e) {
      return this.onscrollcancel = e, p
    }, this.zoomin = function(e) {
      return this.onzoomin = e, p
    }, this.zoomout = function(e) {
      return this.onzoomout = e, p
    }, this.isScrollable = function(e) {
      if ("OPTION" == (e = e.target ? e.target : e).nodeName) return !0;
      for (; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
        var o = (o = g(e)).css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
        if (/scroll|auto/.test(o)) return e.clientHeight != e.scrollHeight;
        e = !!e.parentNode && e.parentNode
      }
      return !1
    }, this.getViewport = function(e) {
      for (e = !(!e || !e.parentNode) && e.parentNode; e && 1 == e.nodeType && !/^BODY|HTML/.test(e.nodeName);) {
        var o = g(e);
        if (/fixed|absolute/.test(o.css("position"))) return o;
        var t = o.css("overflowY") || o.css("overflowX") || o.css("overflow") || "";
        if (/scroll|auto/.test(t) && e.clientHeight != e.scrollHeight || 0 < o.getNiceScroll().length) return o;
        e = !!e.parentNode && e.parentNode
      }
      return !1
    }, this.triggerScrollEnd = function() {
      var e, o;
      p.onscrollend && (e = p.getScrollLeft(), o = p.getScrollTop(), p.onscrollend.call(p, {
        type: "scrollend",
        current: {
          x: e,
          y: o
        },
        end: {
          x: e,
          y: o
        }
      }))
    }, this.onmousewheel = function(e) {
      if (!p.wheelprevented) {
        if (p.railslocked) return p.debounced("checkunlock", p.resize, 250), !0;
        if (p.rail.drag) return p.cancelEvent(e);
        if ("auto" == p.opt.oneaxismousemode && 0 != e.deltaX && (p.opt.oneaxismousemode = !1), p.opt.oneaxismousemode && 0 == e.deltaX && !p.rail.scrollable) return !p.railh || !p.railh.scrollable || p.onmousewheelhr(e);
        var o = +new Date,
          t = !1;
        return (p.opt.preservenativescrolling && p.checkarea + 600 < o && (p.nativescrollingarea = p.isScrollable(e), t = !0), p.checkarea = o, p.nativescrollingarea) ? !0 : ((e = i(e, !1, t)) && (p.checkarea = 0), e)
      }
    }, this.onmousewheelhr = function(e) {
      if (!p.wheelprevented) {
        if (p.railslocked || !p.railh.scrollable) return !0;
        if (p.rail.drag) return p.cancelEvent(e);
        var o = +new Date,
          t = !1;
        return p.opt.preservenativescrolling && p.checkarea + 600 < o && (p.nativescrollingarea = p.isScrollable(e), t = !0), p.checkarea = o, !!p.nativescrollingarea || (p.railslocked ? p.cancelEvent(e) : i(e, !0, t))
      }
    }, this.stop = function() {
      return p.cancelScroll(), p.scrollmon && p.scrollmon.stop(), p.cursorfreezed = !1, p.scroll.y = Math.round(p.getScrollTop() * (1 / p.scrollratio.y)), p.noticeCursor(), p
    }, this.getTransitionSpeed = function(e) {
      return 20 < (e = Math.min(Math.round(10 * p.opt.scrollspeed), Math.round(e / 20 * p.opt.scrollspeed))) ? e : 0
    }, p.opt.smoothscroll ? p.ishwscroll && m.hastransition && p.opt.usetransition && p.opt.smoothscroll ? (this.prepareTransition = function(e, o) {
      var t = o ? 20 < e ? e : 0 : p.getTransitionSpeed(e),
        i = t ? m.prefixstyle + "transform " + t + "ms ease-out" : "";
      return p.lasttransitionstyle && p.lasttransitionstyle == i || (p.lasttransitionstyle = i, p.doc.css(m.transitionstyle, i)), t
    }, this.doScrollLeft = function(e, o) {
      var t = p.scrollrunning ? p.newscrolly : p.getScrollTop();
      p.doScrollPos(e, t, o)
    }, this.doScrollTop = function(e, o) {
      var t = p.scrollrunning ? p.newscrollx : p.getScrollLeft();
      p.doScrollPos(t, e, o)
    }, this.doScrollPos = function(i, r, e) {
      var o = p.getScrollTop(),
        t = p.getScrollLeft();
      return ((p.newscrolly - o) * (r - o) < 0 || (p.newscrollx - t) * (i - t) < 0) && p.cancelScroll(), 0 == p.opt.bouncescroll && (r < 0 ? r = 0 : r > p.page.maxh && (r = p.page.maxh), i < 0 ? i = 0 : i > p.page.maxw && (i = p.page.maxw)), (!p.scrollrunning || i != p.newscrollx || r != p.newscrolly) && (p.newscrolly = r, p.newscrollx = i, p.newscrollspeed = e || !1, !p.timer && void(p.timer = setTimeout(function() {
        var e = p.getScrollTop(),
          o = p.getScrollLeft(),
          t = Math.round(Math.sqrt(Math.pow(i - o, 2) + Math.pow(r - e, 2))),
          t = p.newscrollspeed && 1 < p.newscrollspeed ? p.newscrollspeed : p.getTransitionSpeed(t);
        p.newscrollspeed && p.newscrollspeed <= 1 && (t *= p.newscrollspeed), p.prepareTransition(t, !0), p.timerscroll && p.timerscroll.tm && clearInterval(p.timerscroll.tm), 0 < t && (!p.scrollrunning && p.onscrollstart && p.onscrollstart.call(p, {
          type: "scrollstart",
          current: {
            x: o,
            y: e
          },
          request: {
            x: i,
            y: r
          },
          end: {
            x: p.newscrollx,
            y: p.newscrolly
          },
          speed: t
        }), m.transitionend ? p.scrollendtrapped || (p.scrollendtrapped = !0, p.bind(p.doc, m.transitionend, p.onScrollTransitionEnd, !1)) : (p.scrollendtrapped && clearTimeout(p.scrollendtrapped), p.scrollendtrapped = setTimeout(p.onScrollTransitionEnd, t)), p.timerscroll = {
          bz: new d(e, p.newscrolly, t, 0, 0, .58, 1),
          bh: new d(o, p.newscrollx, t, 0, 0, .58, 1)
        }, p.cursorfreezed || (p.timerscroll.tm = setInterval(function() {
          p.showCursor(p.getScrollTop(), p.getScrollLeft())
        }, 60))), p.synched("doScroll-set", function() {
          p.timer = 0, p.scrollendtrapped && (p.scrollrunning = !0), p.setScrollTop(p.newscrolly), p.setScrollLeft(p.newscrollx), p.scrollendtrapped || p.onScrollTransitionEnd()
        })
      }, 50)))
    }, this.cancelScroll = function() {
      if (!p.scrollendtrapped) return !0;
      var e = p.getScrollTop(),
        o = p.getScrollLeft();
      return p.scrollrunning = !1, m.transitionend || clearTimeout(m.transitionend), p.scrollendtrapped = !1, p._unbind(p.doc[0], m.transitionend, p.onScrollTransitionEnd), p.prepareTransition(0), p.setScrollTop(e), p.railh && p.setScrollLeft(o), p.timerscroll && p.timerscroll.tm && clearInterval(p.timerscroll.tm), p.timerscroll = !1, p.cursorfreezed = !1, p.showCursor(e, o), p
    }, this.onScrollTransitionEnd = function() {
      p.scrollendtrapped && p._unbind(p.doc[0], m.transitionend, p.onScrollTransitionEnd), p.scrollendtrapped = !1, p.prepareTransition(0), p.timerscroll && p.timerscroll.tm && clearInterval(p.timerscroll.tm), p.timerscroll = !1;
      var e = p.getScrollTop(),
        o = p.getScrollLeft();
      if (p.setScrollTop(e), p.railh && p.setScrollLeft(o), p.noticeCursor(!1, e, o), p.cursorfreezed = !1, e < 0 ? e = 0 : e > p.page.maxh && (e = p.page.maxh), o < 0 ? o = 0 : o > p.page.maxw && (o = p.page.maxw), e != p.newscrolly || o != p.newscrollx) return p.doScrollPos(o, e, p.opt.snapbackspeed);
      p.onscrollend && p.scrollrunning && p.triggerScrollEnd(), p.scrollrunning = !1
    }) : (this.doScrollLeft = function(e, o) {
      var t = p.scrollrunning ? p.newscrolly : p.getScrollTop();
      p.doScrollPos(e, t, o)
    }, this.doScrollTop = function(e, o) {
      var t = p.scrollrunning ? p.newscrollx : p.getScrollLeft();
      p.doScrollPos(t, e, o)
    }, this.doScrollPos = function(e, o, t) {
      if (o = void 0 === o || !1 === o ? p.getScrollTop(!0) : o, p.timer && p.newscrolly == o && p.newscrollx == e) return !0;
      p.timer && x(p.timer), p.timer = 0;
      var i = p.getScrollTop(),
        r = p.getScrollLeft();
      ((p.newscrolly - i) * (o - i) < 0 || (p.newscrollx - r) * (e - r) < 0) && p.cancelScroll(), p.newscrolly = o, p.newscrollx = e, p.bouncescroll && p.rail.visibility || (p.newscrolly < 0 ? p.newscrolly = 0 : p.newscrolly > p.page.maxh && (p.newscrolly = p.page.maxh)), p.bouncescroll && p.railh.visibility || (p.newscrollx < 0 ? p.newscrollx = 0 : p.newscrollx > p.page.maxw && (p.newscrollx = p.page.maxw)), p.dst = {}, p.dst.x = e - r, p.dst.y = o - i, p.dst.px = r, p.dst.py = i;
      var n = Math.round(Math.sqrt(Math.pow(p.dst.x, 2) + Math.pow(p.dst.y, 2)));
      p.dst.ax = p.dst.x / n, p.dst.ay = p.dst.y / n;
      var s, l = 0,
        a = n;
      0 == p.dst.x ? (l = i, a = o, p.dst.ay = 1, p.dst.py = 0) : 0 == p.dst.y && (l = r, a = e, p.dst.ax = 1, p.dst.px = 0), n = p.getTransitionSpeed(n), t && t <= 1 && (n *= t), p.bzscroll = 0 < n && (p.bzscroll ? p.bzscroll.update(a, n) : new d(l, a, n, 0, 1, 0, 1)), p.timer || ((i == p.page.maxh && o >= p.page.maxh || r == p.page.maxw && e >= p.page.maxw) && p.checkContentSize(), s = 1, p.cancelAnimationFrame = !1, p.timer = 1, p.onscrollstart && !p.scrollrunning && p.onscrollstart.call(p, {
        type: "scrollstart",
        current: {
          x: r,
          y: i
        },
        request: {
          x: e,
          y: o
        },
        end: {
          x: p.newscrollx,
          y: p.newscrolly
        },
        speed: n
      }), function e() {
        if (p.cancelAnimationFrame) return !0;
        if (p.scrollrunning = !0, s = 1 - s) return p.timer = y(e) || 1;
        var o, t, i = 0,
          r = t = p.getScrollTop();
        p.dst.ay ? (((o = (r = p.bzscroll ? p.dst.py + p.bzscroll.getNow() * p.dst.ay : p.newscrolly) - t) < 0 && r < p.newscrolly || 0 < o && r > p.newscrolly) && (r = p.newscrolly), p.setScrollTop(r), r == p.newscrolly && (i = 1)) : i = 1, t = o = p.getScrollLeft(), p.dst.ax ? (((o = (t = p.bzscroll ? p.dst.px + p.bzscroll.getNow() * p.dst.ax : p.newscrollx) - o) < 0 && t < p.newscrollx || 0 < o && t > p.newscrollx) && (t = p.newscrollx), p.setScrollLeft(t), t == p.newscrollx && (i += 1)) : i += 1, 2 == i ? (p.timer = 0, p.cursorfreezed = !1, p.bzscroll = !1, p.scrollrunning = !1, r < 0 ? r = 0 : r > p.page.maxh && (r = Math.max(0, p.page.maxh)), t < 0 ? t = 0 : t > p.page.maxw && (t = p.page.maxw), t != p.newscrollx || r != p.newscrolly ? p.doScrollPos(t, r) : p.onscrollend && p.triggerScrollEnd()) : p.timer = y(e) || 1
      }(), (i == p.page.maxh && i <= o || r == p.page.maxw && r <= e) && p.checkContentSize(), p.noticeCursor())
    }, this.cancelScroll = function() {
      return p.timer && x(p.timer), p.timer = 0, p.bzscroll = !1, p.scrollrunning = !1, p
    }) : (this.doScrollLeft = function(e, o) {
      var t = p.getScrollTop();
      p.doScrollPos(e, t, o)
    }, this.doScrollTop = function(e, o) {
      var t = p.getScrollLeft();
      p.doScrollPos(t, e, o)
    }, this.doScrollPos = function(e, o, t) {
      var i = e > p.page.maxw ? p.page.maxw : e;
      i < 0 && (i = 0);
      var r = o > p.page.maxh ? p.page.maxh : o;
      r < 0 && (r = 0), p.synched("scroll", function() {
        p.setScrollTop(r), p.setScrollLeft(i)
      })
    }, this.cancelScroll = function() {}), this.doScrollBy = function(e, o) {
      var t, i = 0,
        i = o ? Math.floor((p.scroll.y - e) * p.scrollratio.y) : (p.timer ? p.newscrolly : p.getScrollTop(!0)) - e;
      return p.bouncescroll && (i < -(t = Math.round(p.view.h / 2)) ? i = -t : i > p.page.maxh + t && (i = p.page.maxh + t)), p.cursorfreezed = !1, t = p.getScrollTop(!0), i < 0 && t <= 0 ? p.noticeCursor() : i > p.page.maxh && t >= p.page.maxh ? (p.checkContentSize(), p.noticeCursor()) : void p.doScrollTop(i)
    }, this.doScrollLeftBy = function(e, o) {
      var t, i = 0,
        i = o ? Math.floor((p.scroll.x - e) * p.scrollratio.x) : (p.timer ? p.newscrollx : p.getScrollLeft(!0)) - e;
      if (p.bouncescroll && (i < -(t = Math.round(p.view.w / 2)) ? i = -t : i > p.page.maxw + t && (i = p.page.maxw + t)), p.cursorfreezed = !1, t = p.getScrollLeft(!0), i < 0 && t <= 0 || i > p.page.maxw && t >= p.page.maxw) return p.noticeCursor();
      p.doScrollLeft(i)
    }, this.doScrollTo = function(e, o) {
      p.cursorfreezed = !1, p.doScrollTop(e)
    }, this.checkContentSize = function() {
      var e = p.getContentSize();
      e.h == p.page.h && e.w == p.page.w || p.resize(!1, e)
    }, p.onscroll = function(e) {
      p.rail.drag || p.cursorfreezed || p.synched("scroll", function() {
        p.scroll.y = Math.round(p.getScrollTop() * (1 / p.scrollratio.y)), p.railh && (p.scroll.x = Math.round(p.getScrollLeft() * (1 / p.scrollratio.x))), p.noticeCursor()
      })
    }, p.bind(p.docscroll, "scroll", p.onscroll), this.doZoomIn = function(e) {
      if (!p.zoomactive) {
        p.zoomactive = !0, p.zoomrestore = {
          style: {}
        };
        var o, t = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
          i = p.win[0].style;
        for (o in t) {
          var r = t[o];
          p.zoomrestore.style[r] = void 0 !== i[r] ? i[r] : ""
        }
        return p.zoomrestore.style.width = p.win.css("width"), p.zoomrestore.style.height = p.win.css("height"), p.zoomrestore.padding = {
          w: p.win.outerWidth() - p.win.width(),
          h: p.win.outerHeight() - p.win.height()
        }, m.isios4 && (p.zoomrestore.scrollTop = g(window).scrollTop(), g(window).scrollTop(0)), p.win.css({
          position: m.isios4 ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: b + 100,
          margin: 0
        }), "" != (t = p.win.css("backgroundColor")) && !/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(t) || p.win.css("backgroundColor", "#fff"), p.rail.css({
          zIndex: b + 101
        }), p.zoom.css({
          zIndex: b + 102
        }), p.zoom.css("backgroundPosition", "0px -18px"), p.resizeZoom(), p.onzoomin && p.onzoomin.call(p), p.cancelEvent(e)
      }
    }, this.doZoomOut = function(e) {
      if (p.zoomactive) return p.zoomactive = !1, p.win.css("margin", ""), p.win.css(p.zoomrestore.style), m.isios4 && g(window).scrollTop(p.zoomrestore.scrollTop), p.rail.css({
        "z-index": p.zindex
      }), p.zoom.css({
        "z-index": p.zindex
      }), p.zoomrestore = !1, p.zoom.css("backgroundPosition", "0px 0px"), p.onResize(), p.onzoomout && p.onzoomout.call(p), p.cancelEvent(e)
    }, this.doZoom = function(e) {
      return p.zoomactive ? p.doZoomOut(e) : p.doZoomIn(e)
    }, this.resizeZoom = function() {
      var e;
      p.zoomactive && (e = p.getScrollTop(), p.win.css({
        width: g(window).width() - p.zoomrestore.padding.w + "px",
        height: g(window).height() - p.zoomrestore.padding.h + "px"
      }), p.onResize(), p.setScrollTop(Math.min(p.page.maxh, e)))
    }, this.init(), g.nicescroll.push(this)
  }
  var i, S = window.MutationObserver || window.WebKitMutationObserver || !1,
    z = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 60,
      mousescrollstep: 24,
      touchbehavior: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: .3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: 0 < (i = (i = document.getElementsByTagName("script")).length ? i[i.length - 1].src.split("?")[0] : "").split("/").length ? i.split("/").slice(0, -1).join("/") + "/" : "",
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1
    },
    T = !1,
    k = function(e) {
      var d = this;
      this.nc = e, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function() {
        return +new Date
      }, this.reset = function(e, o) {
        d.stop();
        var t = d.time();
        d.steptime = 0, d.lasttime = t, d.speedx = 0, d.speedy = 0, d.lastx = e, d.lasty = o, d.lastscrollx = -1, d.lastscrolly = -1
      }, this.update = function(e, o) {
        var t = d.time();
        d.steptime = t - d.lasttime, d.lasttime = t;
        var t = o - d.lasty,
          i = e - d.lastx,
          r = (r = d.nc.getScrollTop()) + t,
          n = (n = d.nc.getScrollLeft()) + i;
        d.snapx = n < 0 || n > d.nc.page.maxw, d.snapy = r < 0 || r > d.nc.page.maxh, d.speedx = i, d.speedy = t, d.lastx = e, d.lasty = o
      }, this.stop = function() {
        d.nc.unsynched("domomentum2d"), d.timer && clearTimeout(d.timer), d.timer = 0, d.lastscrollx = -1, d.lastscrolly = -1
      }, this.doSnapy = function(e, o) {
        var t = !1;
        o < 0 ? t = !(o = 0) : o > d.nc.page.maxh && (o = d.nc.page.maxh, t = !0), e < 0 ? t = !(e = 0) : e > d.nc.page.maxw && (e = d.nc.page.maxw, t = !0), t ? d.nc.doScrollPos(e, o, d.nc.opt.snapbackspeed) : d.nc.triggerScrollEnd()
      }, this.doMomentum = function(e) {
        var o = d.time(),
          t = e ? o + e : d.lasttime;
        e = d.nc.getScrollLeft();
        var i, r, n, s, l = d.nc.getScrollTop(),
          a = d.nc.page.maxh,
          c = d.nc.page.maxw;
        d.speedx = 0 < c ? Math.min(60, d.speedx) : 0, d.speedy = 0 < a ? Math.min(60, d.speedy) : 0, t = l < 0 || a < l || e < 0 || c < e ? !1 : t && o - t <= 60, e = !(!d.speedx || !t) && d.speedx, d.speedy && t && d.speedy || e ? (50 < (i = Math.max(16, d.steptime)) && (e = i / 50, d.speedx *= e, d.speedy *= e, i = 50), d.demulxy = 0, d.lastscrollx = d.nc.getScrollLeft(), d.chkx = d.lastscrollx, d.lastscrolly = d.nc.getScrollTop(), d.chky = d.lastscrolly, r = d.lastscrollx, n = d.lastscrolly, (s = function() {
          var e = 600 < d.time() - o ? .04 : .02;
          d.speedx && (r = Math.floor(d.lastscrollx - d.speedx * (1 - d.demulxy)), (d.lastscrollx = r) < 0 || c < r) && (e = .1), d.speedy && (n = Math.floor(d.lastscrolly - d.speedy * (1 - d.demulxy)), (d.lastscrolly = n) < 0 || a < n) && (e = .1), d.demulxy = Math.min(1, d.demulxy + e), d.nc.synched("domomentum2d", function() {
            d.speedx && (d.nc.getScrollLeft(), d.chkx = r, d.nc.setScrollLeft(r)), d.speedy && (d.nc.getScrollTop(), d.chky = n, d.nc.setScrollTop(n)), d.timer || (d.nc.hideCursor(), d.doSnapy(r, n))
          }), d.demulxy < 1 ? d.timer = setTimeout(s, i) : (d.stop(), d.nc.hideCursor(), d.doSnapy(r, n))
        })()) : d.doSnapy(d.nc.getScrollLeft(), d.nc.getScrollTop())
      }
    },
    n = g.fn.scrollTop;
  g.cssHooks.pageYOffset = {
    get: function(e, o, t) {
      return (o = g.data(e, "__nicescroll") || !1) && o.ishwscroll ? o.getScrollTop() : n.call(e)
    },
    set: function(e, o) {
      var t = g.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : n.call(e, o), this
    }
  }, g.fn.scrollTop = function(o) {
    if (void 0 !== o) return this.each(function() {
      var e = g.data(this, "__nicescroll") || !1;
      e && e.ishwscroll ? e.setScrollTop(parseInt(o)) : n.call(g(this), o)
    });
    var e = this[0] && g.data(this[0], "__nicescroll") || !1;
    return e && e.ishwscroll ? e.getScrollTop() : n.call(this)
  };
  var s = g.fn.scrollLeft;
  g.cssHooks.pageXOffset = {
    get: function(e, o, t) {
      return (o = g.data(e, "__nicescroll") || !1) && o.ishwscroll ? o.getScrollLeft() : s.call(e)
    },
    set: function(e, o) {
      var t = g.data(e, "__nicescroll") || !1;
      return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : s.call(e, o), this
    }
  }, g.fn.scrollLeft = function(o) {
    if (void 0 !== o) return this.each(function() {
      var e = g.data(this, "__nicescroll") || !1;
      e && e.ishwscroll ? e.setScrollLeft(parseInt(o)) : s.call(g(this), o)
    });
    var e = this[0] && g.data(this[0], "__nicescroll") || !1;
    return e && e.ishwscroll ? e.getScrollLeft() : s.call(this)
  };

  function l(e) {
    var o = this;
    if (this.length = 0, this.name = "nicescrollarray", this.each = function(e) {
        return g.each(o, e), o
      }, this.push = function(e) {
        o[o.length] = e, o.length++
      }, this.eq = function(e) {
        return o[e]
      }, e)
      for (var t = 0; t < e.length; t++) {
        var i = g.data(e[t], "__nicescroll") || !1;
        i && (this[this.length] = i, this.length++)
      }
    return this
  }! function(e, o) {
    for (var t = 0; t < o.length; t++) ! function(e, o) {
      e[o] = function() {
        var e = arguments;
        return this.each(function() {
          this[o].apply(this, e)
        })
      }
    }(e, o[t])
  }(l.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" ")), g.fn.getNiceScroll = function(e) {
    return void 0 === e ? new l(this) : this[e] && g.data(this[e], "__nicescroll") || !1
  }, g.expr[":"].nicescroll = function(e) {
    return void 0 !== g.data(e, "__nicescroll")
  }, g.fn.niceScroll = function(e, o) {
    void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1), o = g.extend({}, o);
    var t = new l;
    void 0 === o && (o = {}), e && (o.doc = g(e), o.win = g(this));
    var i = !("doc" in o);
    return i || "win" in o || (o.win = g(this)), this.each(function() {
      var e = g(this).data("__nicescroll") || !1;
      e || (o.doc = i ? g(this) : o.doc, e = new r(o, g(this)), g(this).data("__nicescroll", e)), t.push(e)
    }), 1 == t.length ? t[0] : t
  }, window.NiceScroll = {
    getjQuery: function() {
      return g
    }
  }, g.nicescroll || (g.nicescroll = new l, g.nicescroll.options = z)
});


/* jQuery Nice Select - v1.0 - http://hernansartorio.github.io/jquery-nice-select */

! function(a) {
  a.fn.niceSelect = function() {
    this.each(function() {
      var b = a(this);
      if (!b.next().hasClass("nice-select")) {
        b.after('<div class="nice-select ' + (b.attr("class") || "") + (b.attr("disabled") ? "disabled" : '" tabindex="0') + '"><span class="current"></span><ul class="list"></ul></div>');
        var c = b.next(),
          d = b.find("option"),
          e = b.find("option:selected");
        c.find(".current").html(e.data("display") || e.text()), d.each(function() {
          var b = a(this).data("display");
          c.find("ul").append('<li class="option ' + (a(this).is(":selected") ? "selected" : "") + '" data-value="' + a(this).val() + (b ? '" data-display="' + b : "") + '">' + a(this).text() + "</li>")
        })
      }
    }), a(document).off(".nice_select"), a(document).on("click.nice_select", ".nice-select", function(b) {
      var c = a(this);
      a(".nice-select").not(c).removeClass("open"), c.toggleClass("open"), c.hasClass("open") ? (c.find(".option"), c.find(".focus").removeClass("focus"), c.find(".selected").addClass("focus")) : c.focus()
    }), a(document).on("click.nice_select", function(b) {
      0 === a(b.target).closest(".nice-select").length && a(".nice-select").removeClass("open").find(".option")
    }), a(document).on("click.nice_select", ".nice-select .option", function(b) {
      var c = a(this),
        d = c.closest(".nice-select");
      d.find(".selected").removeClass("selected"), c.addClass("selected");
      var e = c.data("display") || c.text();
      d.find(".current").text(e), d.prev("select").val(c.data("value")).trigger("change")
    }), a(document).on("keydown.nice_select", ".nice-select", function(b) {
      var c = a(this),
        d = a(c.find(".focus") || c.find(".list .option.selected"));
      if (32 == b.keyCode || 13 == b.keyCode) return c.hasClass("open") ? d.trigger("click") : c.trigger("click"), !1;
      if (40 == b.keyCode) return c.hasClass("open") ? d.next().length > 0 && (c.find(".focus").removeClass("focus"), d.next().addClass("focus")) : c.trigger("click"), !1;
      if (38 == b.keyCode) return c.hasClass("open") ? d.prev().length > 0 && (c.find(".focus").removeClass("focus"), d.prev().addClass("focus")) : c.trigger("click"), !1;
      if (27 == b.keyCode) c.hasClass("open") && c.trigger("click");
      else if (9 == b.keyCode && c.hasClass("open")) return !1
    })
  }
}(jQuery);


/*! jQuery UI - v1.12.1 - 2016-09-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
  function e(t) {
    for (var e = t.css("visibility");
      "inherit" === e;) t = t.parent(), e = t.css("visibility");
    return "hidden" !== e
  }

  function i(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent()
    }
    return 0
  }

  function s() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function n(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", i, function() {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
    }).on("mouseover", i, o)
  }

  function o() {
    t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
  }

  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e
  }

  function r(t) {
    return function() {
      var e = this.element.val();
      t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
    }
  }
  t.ui = t.ui || {}, t.ui.version = "1.12.1";
  var h = 0,
    l = Array.prototype.slice;
  t.cleanData = function(e) {
      return function(i) {
        var s, n, o;
        for (o = 0; null != (n = i[o]); o++) try {
          s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
        } catch (a) {}
        e(i)
      }
    }(t.cleanData), t.widget = function(e, i, s) {
      var n, o, a, r = {},
        h = e.split(".")[0];
      e = e.split(".")[1];
      var l = h + "-" + e;
      return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function(e) {
        return !!t.data(e, l)
      }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function(t, e) {
        return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
      }, t.extend(o, n, {
        version: s.version,
        _proto: t.extend({}, s),
        _childConstructors: []
      }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
        return t.isFunction(s) ? (r[e] = function() {
          function t() {
            return i.prototype[e].apply(this, arguments)
          }

          function n(t) {
            return i.prototype[e].apply(this, t)
          }
          return function() {
            var e, i = this._super,
              o = this._superApply;
            return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
          }
        }(), void 0) : (r[e] = s, void 0)
      }), o.prototype = t.widget.extend(a, {
        widgetEventPrefix: n ? a.widgetEventPrefix || e : e
      }, r, {
        constructor: o,
        namespace: h,
        widgetName: e,
        widgetFullName: l
      }), n ? (t.each(n._childConstructors, function(e, i) {
        var s = i.prototype;
        t.widget(s.namespace + "." + s.widgetName, o, i._proto)
      }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
      for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
        for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
      return e
    }, t.widget.bridge = function(e, i) {
      var s = i.prototype.widgetFullName || e;
      t.fn[e] = function(n) {
        var o = "string" == typeof n,
          a = l.call(arguments, 1),
          r = this;
        return o ? this.length || "instance" !== n ? this.each(function() {
          var i, o = t.data(this, s);
          return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
        }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
          var e = t.data(this, s);
          e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
        })), r
      }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        classes: {},
        disabled: !1,
        create: null
      },
      _createWidget: function(e, i) {
        i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function(t) {
            t.target === i && this.destroy()
          }
        }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
      },
      _getCreateOptions: function() {
        return {}
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function() {
        var e = this;
        this._destroy(), t.each(this.classesElementLookup, function(t, i) {
          e._removeClass(i, t)
        }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
      },
      _destroy: t.noop,
      widget: function() {
        return this.element
      },
      option: function(e, i) {
        var s, n, o, a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (a = {}, s = e.split("."), e = s.shift(), s.length) {
            for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
            if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
            n[e] = i
          } else {
            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i
          } return this._setOptions(a), this
      },
      _setOptions: function(t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this
      },
      _setOption: function(t, e) {
        return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
      },
      _setOptionClasses: function(e) {
        var i, s, n;
        for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
          element: s,
          keys: i,
          classes: e,
          add: !0
        })))
      },
      _setOptionDisabled: function(t) {
        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
      },
      enable: function() {
        return this._setOptions({
          disabled: !1
        })
      },
      disable: function() {
        return this._setOptions({
          disabled: !0
        })
      },
      _classes: function(e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
        }
        var s = [],
          n = this;
        return e = t.extend({
          element: this.element,
          classes: this.options.classes || {}
        }, e), this._on(e.element, {
          remove: "_untrackClassesElement"
        }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
      },
      _untrackClassesElement: function(e) {
        var i = this;
        t.each(i.classesElementLookup, function(s, n) {
          -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
        })
      },
      _removeClass: function(t, e, i) {
        return this._toggleClass(t, e, i, !1)
      },
      _addClass: function(t, e, i) {
        return this._toggleClass(t, e, i, !0)
      },
      _toggleClass: function(t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s
          };
        return o.element.toggleClass(this._classes(o), s), this
      },
      _on: function(e, i, s) {
        var n, o = this;
        "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
          function r() {
            return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
          }
          "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
          var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + o.eventNamespace,
            c = h[2];
          c ? n.on(l, c, r) : i.on(l, r)
        })
      },
      _off: function(e, i) {
        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
      },
      _delay: function(t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments)
        }
        var s = this;
        return setTimeout(i, e || 0)
      },
      _hoverable: function(e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
          mouseenter: function(e) {
            this._addClass(t(e.currentTarget), null, "ui-state-hover")
          },
          mouseleave: function(e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-hover")
          }
        })
      },
      _focusable: function(e) {
        this.focusable = this.focusable.add(e), this._on(e, {
          focusin: function(e) {
            this._addClass(t(e.currentTarget), null, "ui-state-focus")
          },
          focusout: function(e) {
            this._removeClass(t(e.currentTarget), null, "ui-state-focus")
          }
        })
      },
      _trigger: function(e, i, s) {
        var n, o, a = this.options[e];
        if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
          for (n in o) n in i || (i[n] = o[n]);
        return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
      }
    }, t.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, function(e, i) {
      t.Widget.prototype["_" + e] = function(s, n, o) {
        "string" == typeof n && (n = {
          effect: n
        });
        var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
        n = n || {}, "number" == typeof n && (n = {
          duration: n
        }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
          t(this)[e](), o && o.call(s[0]), i()
        })
      }
    }), t.widget,
    function() {
      function e(t, e, i) {
        return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
      }

      function i(e, i) {
        return parseInt(t.css(e, i), 10) || 0
      }

      function s(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
          width: e.width(),
          height: e.height(),
          offset: {
            top: 0,
            left: 0
          }
        } : t.isWindow(i) ? {
          width: e.width(),
          height: e.height(),
          offset: {
            top: e.scrollTop(),
            left: e.scrollLeft()
          }
        } : i.preventDefault ? {
          width: 0,
          height: 0,
          offset: {
            top: i.pageY,
            left: i.pageX
          }
        } : {
          width: e.outerWidth(),
          height: e.outerHeight(),
          offset: e.offset()
        }
      }
      var n, o = Math.max,
        a = Math.abs,
        r = /left|center|right/,
        h = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        u = /%$/,
        d = t.fn.position;
      t.position = {
        scrollbarWidth: function() {
          if (void 0 !== n) return n;
          var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            o = s.children()[0];
          return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
        },
        getScrollInfo: function(e) {
          var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
            s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
            o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
          return {
            width: o ? t.position.scrollbarWidth() : 0,
            height: n ? t.position.scrollbarWidth() : 0
          }
        },
        getWithinInfo: function(e) {
          var i = t(e || window),
            s = t.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType,
            o = !s && !n;
          return {
            element: i,
            isWindow: s,
            isDocument: n,
            offset: o ? t(e).offset() : {
              left: 0,
              top: 0
            },
            scrollLeft: i.scrollLeft(),
            scrollTop: i.scrollTop(),
            width: i.outerWidth(),
            height: i.outerHeight()
          }
        }
      }, t.fn.position = function(n) {
        if (!n || !n.of) return d.apply(this, arguments);
        n = t.extend({}, n);
        var u, p, f, g, m, _, v = t(n.of),
          b = t.position.getWithinInfo(n.within),
          y = t.position.getScrollInfo(b),
          w = (n.collision || "flip").split(" "),
          k = {};
        return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function() {
          var t, e, i = (n[this] || "").split(" ");
          1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function() {
          var s, r, h = t(this),
            l = h.outerWidth(),
            c = h.outerHeight(),
            d = i(this, "marginLeft"),
            _ = i(this, "marginTop"),
            x = l + d + i(this, "marginRight") + y.width,
            C = c + _ + i(this, "marginBottom") + y.height,
            D = t.extend({}, m),
            I = e(k.my, h.outerWidth(), h.outerHeight());
          "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
            marginLeft: d,
            marginTop: _
          }, t.each(["left", "top"], function(e, i) {
            t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
              targetWidth: p,
              targetHeight: f,
              elemWidth: l,
              elemHeight: c,
              collisionPosition: s,
              collisionWidth: x,
              collisionHeight: C,
              offset: [u[0] + I[0], u[1] + I[1]],
              my: n.my,
              at: n.at,
              within: b,
              elem: h
            })
          }), n.using && (r = function(t) {
            var e = g.left - D.left,
              i = e + p - l,
              s = g.top - D.top,
              r = s + f - c,
              u = {
                target: {
                  element: v,
                  left: g.left,
                  top: g.top,
                  width: p,
                  height: f
                },
                element: {
                  element: h,
                  left: D.left,
                  top: D.top,
                  width: l,
                  height: c
                },
                horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
              };
            l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u)
          }), h.offset(t.extend(D, {
            using: r
          }))
        })
      }, t.ui.position = {
        fit: {
          left: function(t, e) {
            var i, s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              h = n - r,
              l = r + e.collisionWidth - a - n;
            e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
          },
          top: function(t, e) {
            var i, s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              h = n - r,
              l = r + e.collisionHeight - a - n;
            e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
          }
        },
        flip: {
          left: function(t, e) {
            var i, s, n = e.within,
              o = n.offset.left + n.scrollLeft,
              r = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = t.left - e.collisionPosition.marginLeft,
              c = l - h,
              u = l + e.collisionWidth - r - h,
              d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
              p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
              f = -2 * e.offset[0];
            0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f))
          },
          top: function(t, e) {
            var i, s, n = e.within,
              o = n.offset.top + n.scrollTop,
              r = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = t.top - e.collisionPosition.marginTop,
              c = l - h,
              u = l + e.collisionHeight - r - h,
              d = "top" === e.my[1],
              p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
              f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
              g = -2 * e.offset[1];
            0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g))
          }
        },
        flipfit: {
          left: function() {
            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
          },
          top: function() {
            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
          }
        }
      }
    }(), t.ui.position, t.extend(t.expr[":"], {
      data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
        return function(i) {
          return !!t.data(i, e)
        }
      }) : function(e, i, s) {
        return !!t.data(e, s[3])
      }
    }), t.fn.extend({
      disableSelection: function() {
        var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function() {
          return this.on(t + ".ui-disableSelection", function(t) {
            t.preventDefault()
          })
        }
      }(),
      enableSelection: function() {
        return this.off(".ui-disableSelection")
      }
    });
  var c = "ui-effects-",
    u = "ui-effects-style",
    d = "ui-effects-animated",
    p = t;
  t.effects = {
      effect: {}
    },
    function(t, e) {
      function i(t, e, i) {
        var s = u[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
      }

      function s(i) {
        var s = l(),
          n = s._rgba = [];
        return i = i.toLowerCase(), f(h, function(t, o) {
          var a, r = o.re.exec(i),
            h = r && o.parse(r),
            l = o.space || "rgba";
          return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
        }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
      }

      function n(t, e, i) {
        return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
      }
      var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
          }
        }],
        l = t.Color = function(e, i, s, n) {
          return new t.Color.fn.parse(e, i, s, n)
        },
        c = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        },
        u = {
          "byte": {
            floor: !0,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: !0
          }
        },
        d = l.support = {},
        p = t("<p>")[0],
        f = t.each;
      p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
        e.cache = "_" + t, e.props.alpha = {
          idx: 3,
          type: "percent",
          def: 1
        }
      }), l.fn = t.extend(l.prototype, {
        parse: function(n, a, r, h) {
          if (n === e) return this._rgba = [null, null, null, null], this;
          (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
          var u = this,
            d = t.type(n),
            p = this._rgba = [];
          return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
            p[e.idx] = i(n[e.idx], e)
          }), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
            n[e.cache] && (u[e.cache] = n[e.cache].slice())
          }) : f(c, function(e, s) {
            var o = s.cache;
            f(s.props, function(t, e) {
              if (!u[o] && s.to) {
                if ("alpha" === t || null == n[t]) return;
                u[o] = s.to(u._rgba)
              }
              u[o][e.idx] = i(n[t], e, !0)
            }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
          }), this) : e
        },
        is: function(t) {
          var i = l(t),
            s = !0,
            n = this;
          return f(c, function(t, o) {
            var a, r = i[o.cache];
            return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function(t, i) {
              return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
            })), s
          }), s
        },
        _space: function() {
          var t = [],
            e = this;
          return f(c, function(i, s) {
            e[s.cache] && t.push(i)
          }), t.pop()
        },
        transition: function(t, e) {
          var s = l(t),
            n = s._space(),
            o = c[n],
            a = 0 === this.alpha() ? l("transparent") : this,
            r = a[o.cache] || o.to(a._rgba),
            h = r.slice();
          return s = s[o.cache], f(o.props, function(t, n) {
            var o = n.idx,
              a = r[o],
              l = s[o],
              c = u[n.type] || {};
            null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
          }), this[n](h)
        },
        blend: function(e) {
          if (1 === this._rgba[3]) return this;
          var i = this._rgba.slice(),
            s = i.pop(),
            n = l(e)._rgba;
          return l(t.map(i, function(t, e) {
            return (1 - s) * n[e] + s * t
          }))
        },
        toRgbaString: function() {
          var e = "rgba(",
            i = t.map(this._rgba, function(t, e) {
              return null == t ? e > 2 ? 1 : 0 : t
            });
          return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
        },
        toHslaString: function() {
          var e = "hsla(",
            i = t.map(this.hsla(), function(t, e) {
              return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
            });
          return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
        },
        toHexString: function(e) {
          var i = this._rgba.slice(),
            s = i.pop();
          return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
          }).join("")
        },
        toString: function() {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
      }), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e, i, s = t[0] / 255,
          n = t[1] / 255,
          o = t[2] / 255,
          a = t[3],
          r = Math.max(s, n, o),
          h = Math.min(s, n, o),
          l = r - h,
          c = r + h,
          u = .5 * c;
        return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
      }, c.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 360,
          i = t[1],
          s = t[2],
          o = t[3],
          a = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - a;
        return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
      }, f(c, function(s, n) {
        var o = n.props,
          a = n.cache,
          h = n.to,
          c = n.from;
        l.fn[s] = function(s) {
          if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
          var n, r = t.type(s),
            u = "array" === r || "object" === r ? s : arguments,
            d = this[a].slice();
          return f(o, function(t, e) {
            var s = u["object" === r ? t : e.idx];
            null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
          }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
        }, f(o, function(e, i) {
          l.fn[e] || (l.fn[e] = function(n) {
            var o, a = t.type(n),
              h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
              l = this[h](),
              c = l[i.idx];
            return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
          })
        })
      }), l.hook = function(e) {
        var i = e.split(" ");
        f(i, function(e, i) {
          t.cssHooks[i] = {
            set: function(e, n) {
              var o, a, r = "";
              if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
                  for (a = "backgroundColor" === i ? e.parentNode : e;
                    ("" === r || "transparent" === r) && a && a.style;) try {
                    r = t.css(a, "backgroundColor"), a = a.parentNode
                  } catch (h) {}
                  n = n.blend(r && "transparent" !== r ? r : "_default")
                }
                n = n.toRgbaString()
              }
              try {
                e.style[i] = n
              } catch (h) {}
            }
          }, t.fx.step[i] = function(e) {
            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
          }
        })
      }, l.hook(a), t.cssHooks.borderColor = {
        expand: function(t) {
          var e = {};
          return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
            e["border" + s + "Color"] = t
          }), e
        }
      }, o = t.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
      }
    }(p),
    function() {
      function e(e) {
        var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
          o = {};
        if (n && n.length && n[0] && n[n[0]])
          for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
        else
          for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
        return o
      }

      function i(e, i) {
        var s, o, a = {};
        for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
        return a
      }
      var s = ["add", "remove", "toggle"],
        n = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
      t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
        t.fx.step[i] = function(t) {
          ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
        }
      }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }), t.effects.animateClass = function(n, o, a, r) {
        var h = t.speed(o, a, r);
        return this.queue(function() {
          var o, a = t(this),
            r = a.attr("class") || "",
            l = h.children ? a.find("*").addBack() : a;
          l = l.map(function() {
            var i = t(this);
            return {
              el: i,
              start: e(this)
            }
          }), o = function() {
            t.each(s, function(t, e) {
              n[e] && a[e + "Class"](n[e])
            })
          }, o(), l = l.map(function() {
            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
          }), a.attr("class", r), l = l.map(function() {
            var e = this,
              i = t.Deferred(),
              s = t.extend({}, h, {
                queue: !1,
                complete: function() {
                  i.resolve(e)
                }
              });
            return this.el.animate(this.diff, s), i.promise()
          }), t.when.apply(t, l.get()).done(function() {
            o(), t.each(arguments, function() {
              var e = this.el;
              t.each(this.diff, function(t) {
                e.css(t, "")
              })
            }), h.complete.call(a[0])
          })
        })
      }, t.fn.extend({
        addClass: function(e) {
          return function(i, s, n, o) {
            return s ? t.effects.animateClass.call(this, {
              add: i
            }, s, n, o) : e.apply(this, arguments)
          }
        }(t.fn.addClass),
        removeClass: function(e) {
          return function(i, s, n, o) {
            return arguments.length > 1 ? t.effects.animateClass.call(this, {
              remove: i
            }, s, n, o) : e.apply(this, arguments)
          }
        }(t.fn.removeClass),
        toggleClass: function(e) {
          return function(i, s, n, o, a) {
            return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
              add: i
            } : {
              remove: i
            }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
              toggle: i
            }, s, n, o)
          }
        }(t.fn.toggleClass),
        switchClass: function(e, i, s, n, o) {
          return t.effects.animateClass.call(this, {
            add: i,
            remove: e
          }, s, n, o)
        }
      })
    }(),
    function() {
      function e(e, i, s, n) {
        return t.isPlainObject(e) && (i = e, e = e.effect), e = {
          effect: e
        }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
      }

      function i(e) {
        return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
      }

      function s(t, e) {
        var i = e.outerWidth(),
          s = e.outerHeight(),
          n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
          o = n.exec(t) || ["", 0, i, s, 0];
        return {
          top: parseFloat(o[1]) || 0,
          right: "auto" === o[2] ? i : parseFloat(o[2]),
          bottom: "auto" === o[3] ? s : parseFloat(o[3]),
          left: parseFloat(o[4]) || 0
        }
      }
      t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
        return function(i) {
          return !!t(i).data(d) || e(i)
        }
      }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
        save: function(t, e) {
          for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]])
        },
        restore: function(t, e) {
          for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i))
        },
        setMode: function(t, e) {
          return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
        },
        createWrapper: function(e) {
          if (e.parent().is(".ui-effects-wrapper")) return e.parent();
          var i = {
              width: e.outerWidth(!0),
              height: e.outerHeight(!0),
              "float": e.css("float")
            },
            s = t("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
            n = {
              width: e.width(),
              height: e.height()
            },
            o = document.activeElement;
          try {
            o.id
          } catch (a) {
            o = document.body
          }
          return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
            position: "relative"
          }), e.css({
            position: "relative"
          })) : (t.extend(i, {
            position: e.css("position"),
            zIndex: e.css("z-index")
          }), t.each(["top", "left", "bottom", "right"], function(t, s) {
            i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
          }), e.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })), e.css(n), s.css(i).show()
        },
        removeWrapper: function(e) {
          var i = document.activeElement;
          return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
        }
      }), t.extend(t.effects, {
        version: "1.12.1",
        define: function(e, i, s) {
          return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
        },
        scaledDimensions: function(t, e, i) {
          if (0 === e) return {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
          };
          var s = "horizontal" !== i ? (e || 100) / 100 : 1,
            n = "vertical" !== i ? (e || 100) / 100 : 1;
          return {
            height: t.height() * n,
            width: t.width() * s,
            outerHeight: t.outerHeight() * n,
            outerWidth: t.outerWidth() * s
          }
        },
        clipToBox: function(t) {
          return {
            width: t.clip.right - t.clip.left,
            height: t.clip.bottom - t.clip.top,
            left: t.clip.left,
            top: t.clip.top
          }
        },
        unshift: function(t, e, i) {
          var s = t.queue();
          e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
        },
        saveStyle: function(t) {
          t.data(u, t[0].style.cssText)
        },
        restoreStyle: function(t) {
          t[0].style.cssText = t.data(u) || "", t.removeData(u)
        },
        mode: function(t, e) {
          var i = t.is(":hidden");
          return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
        },
        getBaseline: function(t, e) {
          var i, s;
          switch (t[0]) {
            case "top":
              i = 0;
              break;
            case "middle":
              i = .5;
              break;
            case "bottom":
              i = 1;
              break;
            default:
              i = t[0] / e.height
          }
          switch (t[1]) {
            case "left":
              s = 0;
              break;
            case "center":
              s = .5;
              break;
            case "right":
              s = 1;
              break;
            default:
              s = t[1] / e.width
          }
          return {
            x: s,
            y: i
          }
        },
        createPlaceholder: function(e) {
          var i, s = e.css("position"),
            n = e.position();
          return e.css({
            marginTop: e.css("marginTop"),
            marginBottom: e.css("marginBottom"),
            marginLeft: e.css("marginLeft"),
            marginRight: e.css("marginRight")
          }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
            visibility: "hidden",
            marginTop: e.css("marginTop"),
            marginBottom: e.css("marginBottom"),
            marginLeft: e.css("marginLeft"),
            marginRight: e.css("marginRight"),
            "float": e.css("float")
          }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
            position: s,
            left: n.left,
            top: n.top
          }), i
        },
        removePlaceholder: function(t) {
          var e = c + "placeholder",
            i = t.data(e);
          i && (i.remove(), t.removeData(e))
        },
        cleanUp: function(e) {
          t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
        },
        setTransition: function(e, i, s, n) {
          return n = n || {}, t.each(i, function(t, i) {
            var o = e.cssUnit(i);
            o[0] > 0 && (n[i] = o[0] * s + o[1])
          }), n
        }
      }), t.fn.extend({
        effect: function() {
          function i(e) {
            function i() {
              r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
            }

            function a() {
              t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
            }
            var r = t(this);
            s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
          }
          var s = e.apply(this, arguments),
            n = t.effects.effect[s.effect],
            o = n.mode,
            a = s.queue,
            r = a || "fx",
            h = s.complete,
            l = s.mode,
            c = [],
            u = function(e) {
              var i = t(this),
                s = t.effects.mode(i, l) || o;
              i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
            };
          return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function() {
            h && h.call(this)
          }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
        },
        show: function(t) {
          return function(s) {
            if (i(s)) return t.apply(this, arguments);
            var n = e.apply(this, arguments);
            return n.mode = "show", this.effect.call(this, n)
          }
        }(t.fn.show),
        hide: function(t) {
          return function(s) {
            if (i(s)) return t.apply(this, arguments);
            var n = e.apply(this, arguments);
            return n.mode = "hide", this.effect.call(this, n)
          }
        }(t.fn.hide),
        toggle: function(t) {
          return function(s) {
            if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
            var n = e.apply(this, arguments);
            return n.mode = "toggle", this.effect.call(this, n)
          }
        }(t.fn.toggle),
        cssUnit: function(e) {
          var i = this.css(e),
            s = [];
          return t.each(["em", "px", "%", "pt"], function(t, e) {
            i.indexOf(e) > 0 && (s = [parseFloat(i), e])
          }), s
        },
        cssClip: function(t) {
          return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
        },
        transfer: function(e, i) {
          var s = t(this),
            n = t(e.to),
            o = "fixed" === n.css("position"),
            a = t("body"),
            r = o ? a.scrollTop() : 0,
            h = o ? a.scrollLeft() : 0,
            l = n.offset(),
            c = {
              top: l.top - r,
              left: l.left - h,
              height: n.innerHeight(),
              width: n.innerWidth()
            },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
              top: u.top - r,
              left: u.left - h,
              height: s.innerHeight(),
              width: s.innerWidth(),
              position: o ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
              d.remove(), t.isFunction(i) && i()
            })
        }
      }), t.fx.step.clip = function(e) {
        e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
          top: e.pos * (e.end.top - e.start.top) + e.start.top,
          right: e.pos * (e.end.right - e.start.right) + e.start.right,
          bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
          left: e.pos * (e.end.left - e.start.left) + e.start.left
        })
      }
    }(),
    function() {
      var e = {};
      t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
        e[i] = function(e) {
          return Math.pow(e, t + 2)
        }
      }), t.extend(e, {
        Sine: function(t) {
          return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
          return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
          return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
          return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
          for (var e, i = 4;
            ((e = Math.pow(2, --i)) - 1) / 11 > t;);
          return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
      }), t.each(e, function(e, i) {
        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
          return 1 - i(1 - t)
        }, t.easing["easeInOut" + e] = function(t) {
          return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
        }
      })
    }();
  var f = t.effects;
  t.effects.define("blind", "hide", function(e, i) {
    var s = {
        up: ["bottom", "top"],
        vertical: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        horizontal: ["right", "left"],
        right: ["left", "right"]
      },
      n = t(this),
      o = e.direction || "up",
      a = n.cssClip(),
      r = {
        clip: t.extend({}, a)
      },
      h = t.effects.createPlaceholder(n);
    r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("bounce", function(e, i) {
    var s, n, o, a = t(this),
      r = e.mode,
      h = "hide" === r,
      l = "show" === r,
      c = e.direction || "up",
      u = e.distance,
      d = e.times || 5,
      p = 2 * d + (l || h ? 1 : 0),
      f = e.duration / p,
      g = e.easing,
      m = "up" === c || "down" === c ? "top" : "left",
      _ = "up" === c || "left" === c,
      v = 0,
      b = a.queue().length;
    for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
        opacity: 1
      }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
    h && (s = {
      opacity: 0
    }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
  }), t.effects.define("clip", "hide", function(e, i) {
    var s, n = {},
      o = t(this),
      a = e.direction || "vertical",
      r = "both" === a,
      h = r || "horizontal" === a,
      l = r || "vertical" === a;
    s = o.cssClip(), n.clip = {
      top: l ? (s.bottom - s.top) / 2 : s.top,
      right: h ? (s.right - s.left) / 2 : s.right,
      bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
      left: h ? (s.right - s.left) / 2 : s.left
    }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("drop", "hide", function(e, i) {
    var s, n = t(this),
      o = e.mode,
      a = "show" === o,
      r = e.direction || "left",
      h = "up" === r || "down" === r ? "top" : "left",
      l = "up" === r || "left" === r ? "-=" : "+=",
      c = "+=" === l ? "-=" : "+=",
      u = {
        opacity: 0
      };
    t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("explode", "hide", function(e, i) {
    function s() {
      b.push(this), b.length === u * d && n()
    }

    function n() {
      p.css({
        visibility: "visible"
      }), t(b).remove(), i()
    }
    var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
      d = u,
      p = t(this),
      f = e.mode,
      g = "show" === f,
      m = p.show().css("visibility", "hidden").offset(),
      _ = Math.ceil(p.outerWidth() / d),
      v = Math.ceil(p.outerHeight() / u),
      b = [];
    for (o = 0; u > o; o++)
      for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
        position: "absolute",
        visibility: "visible",
        left: -a * _,
        top: -o * v
      }).parent().addClass("ui-effects-explode").css({
        position: "absolute",
        overflow: "hidden",
        width: _,
        height: v,
        left: r + (g ? l * _ : 0),
        top: h + (g ? c * v : 0),
        opacity: g ? 0 : 1
      }).animate({
        left: r + (g ? 0 : l * _),
        top: h + (g ? 0 : c * v),
        opacity: g ? 1 : 0
      }, e.duration || 500, e.easing, s)
  }), t.effects.define("fade", "toggle", function(e, i) {
    var s = "show" === e.mode;
    t(this).css("opacity", s ? 0 : 1).animate({
      opacity: s ? 1 : 0
    }, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("fold", "hide", function(e, i) {
    var s = t(this),
      n = e.mode,
      o = "show" === n,
      a = "hide" === n,
      r = e.size || 15,
      h = /([0-9]+)%/.exec(r),
      l = !!e.horizFirst,
      c = l ? ["right", "bottom"] : ["bottom", "right"],
      u = e.duration / 2,
      d = t.effects.createPlaceholder(s),
      p = s.cssClip(),
      f = {
        clip: t.extend({}, p)
      },
      g = {
        clip: t.extend({}, p)
      },
      m = [p[c[0]], p[c[1]]],
      _ = s.queue().length;
    h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function(i) {
      d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
    }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
  }), t.effects.define("highlight", "show", function(e, i) {
    var s = t(this),
      n = {
        backgroundColor: s.css("backgroundColor")
      };
    "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
      backgroundImage: "none",
      backgroundColor: e.color || "#ffff99"
    }).animate(n, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  }), t.effects.define("size", function(e, i) {
    var s, n, o, a = t(this),
      r = ["fontSize"],
      h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
      l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
      c = e.mode,
      u = "effect" !== c,
      d = e.scale || "both",
      p = e.origin || ["middle", "center"],
      f = a.css("position"),
      g = a.position(),
      m = t.effects.scaledDimensions(a),
      _ = e.from || m,
      v = e.to || t.effects.scaledDimensions(a, 0);
    t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
      from: {
        y: _.height / m.height,
        x: _.width / m.width
      },
      to: {
        y: v.height / m.height,
        x: v.width / m.width
      }
    }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
      var i = t(this),
        s = t.effects.scaledDimensions(i),
        o = {
          height: s.height * n.from.y,
          width: s.width * n.from.x,
          outerHeight: s.outerHeight * n.from.y,
          outerWidth: s.outerWidth * n.from.x
        },
        a = {
          height: s.height * n.to.y,
          width: s.width * n.to.x,
          outerHeight: s.height * n.to.y,
          outerWidth: s.width * n.to.x
        };
      n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
        u && t.effects.restoreStyle(i)
      })
    })), a.animate(v, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: function() {
        var e = a.offset();
        0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
      }
    })
  }), t.effects.define("scale", function(e, i) {
    var s = t(this),
      n = e.mode,
      o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
      a = t.extend(!0, {
        from: t.effects.scaledDimensions(s),
        to: t.effects.scaledDimensions(s, o, e.direction || "both"),
        origin: e.origin || ["middle", "center"]
      }, e);
    e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
  }), t.effects.define("puff", "hide", function(e, i) {
    var s = t.extend(!0, {}, e, {
      fade: !0,
      percent: parseInt(e.percent, 10) || 150
    });
    t.effects.effect.scale.call(this, s, i)
  }), t.effects.define("pulsate", "show", function(e, i) {
    var s = t(this),
      n = e.mode,
      o = "show" === n,
      a = "hide" === n,
      r = o || a,
      h = 2 * (e.times || 5) + (r ? 1 : 0),
      l = e.duration / h,
      c = 0,
      u = 1,
      d = s.queue().length;
    for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) s.animate({
      opacity: c
    }, l, e.easing), c = 1 - c;
    s.animate({
      opacity: c
    }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
  }), t.effects.define("shake", function(e, i) {
    var s = 1,
      n = t(this),
      o = e.direction || "left",
      a = e.distance || 20,
      r = e.times || 3,
      h = 2 * r + 1,
      l = Math.round(e.duration / h),
      c = "up" === o || "down" === o ? "top" : "left",
      u = "up" === o || "left" === o,
      d = {},
      p = {},
      f = {},
      g = n.queue().length;
    for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
    n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
  }), t.effects.define("slide", "show", function(e, i) {
    var s, n, o = t(this),
      a = {
        up: ["bottom", "top"],
        down: ["top", "bottom"],
        left: ["right", "left"],
        right: ["left", "right"]
      },
      r = e.mode,
      h = e.direction || "left",
      l = "up" === h || "down" === h ? "top" : "left",
      c = "up" === h || "left" === h,
      u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
      d = {};
    t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
      queue: !1,
      duration: e.duration,
      easing: e.easing,
      complete: i
    })
  });
  var f;
  t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function(e, i) {
    t(this).transfer(e, i)
  })), t.ui.focusable = function(i, s) {
    var n, o, a, r, h, l = i.nodeName.toLowerCase();
    return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
  }, t.extend(t.expr[":"], {
    focusable: function(e) {
      return t.ui.focusable(e, null != t.attr(e, "tabindex"))
    }
  }), t.ui.focusable, t.fn.form = function() {
    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
  }, t.ui.formResetMixin = {
    _formResetHandler: function() {
      var e = t(this);
      setTimeout(function() {
        var i = e.data("ui-form-reset-instances");
        t.each(i, function() {
          this.refresh()
        })
      })
    },
    _bindFormResetHandler: function() {
      if (this.form = this.element.form(), this.form.length) {
        var t = this.form.data("ui-form-reset-instances") || [];
        t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
      }
    },
    _unbindFormResetHandler: function() {
      if (this.form.length) {
        var e = this.form.data("ui-form-reset-instances");
        e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
      }
    }
  }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
    function s(e, i, s, o) {
      return t.each(n, function() {
        i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
      }), i
    }
    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
      o = i.toLowerCase(),
      a = {
        innerWidth: t.fn.innerWidth,
        innerHeight: t.fn.innerHeight,
        outerWidth: t.fn.outerWidth,
        outerHeight: t.fn.outerHeight
      };
    t.fn["inner" + i] = function(e) {
      return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
        t(this).css(o, s(this, e) + "px")
      })
    }, t.fn["outer" + i] = function(e, n) {
      return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
        t(this).css(o, s(this, e, !0, n) + "px")
      })
    }
  }), t.fn.addBack = function(t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
  }), t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.ui.escapeSelector = function() {
    var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
    return function(e) {
      return e.replace(t, "\\$1")
    }
  }(), t.fn.labels = function() {
    var e, i, s, n, o;
    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
  }, t.fn.scrollParent = function(e) {
    var i = this.css("position"),
      s = "absolute" === i,
      n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
      o = this.parents().filter(function() {
        var e = t(this);
        return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
      }).eq(0);
    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
  }, t.extend(t.expr[":"], {
    tabbable: function(e) {
      var i = t.attr(e, "tabindex"),
        s = null != i;
      return (!s || i >= 0) && t.ui.focusable(e, s)
    }
  }), t.fn.extend({
    uniqueId: function() {
      var t = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++t)
        })
      }
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
      })
    }
  }), t.widget("ui.accordion", {
    version: "1.12.1",
    options: {
      active: 0,
      animate: {},
      classes: {
        "ui-accordion-header": "ui-corner-top",
        "ui-accordion-header-collapsed": "ui-corner-all",
        "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: "> li > :first-child, > :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function() {
      var e = this.options;
      this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
    },
    _getCreateEventData: function() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : t()
      }
    },
    _createIcons: function() {
      var e, i, s = this.options.icons;
      s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
    },
    _destroyIcons: function() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
    },
    _destroy: function() {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
    },
    _setOption: function(t, e) {
      return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
    },
    _keydown: function(e) {
      if (!e.altKey && !e.ctrlKey) {
        var i = t.ui.keyCode,
          s = this.headers.length,
          n = this.headers.index(e.target),
          o = !1;
        switch (e.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            o = this.headers[(n + 1) % s];
            break;
          case i.LEFT:
          case i.UP:
            o = this.headers[(n - 1 + s) % s];
            break;
          case i.SPACE:
          case i.ENTER:
            this._eventHandler(e);
            break;
          case i.HOME:
            o = this.headers[0];
            break;
          case i.END:
            o = this.headers[s - 1]
        }
        o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
      }
    },
    _panelKeyDown: function(e) {
      e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
    },
    refresh: function() {
      var e = this.options;
      this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
    },
    _processPanels: function() {
      var t = this.headers,
        e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
    },
    _refresh: function() {
      var e, i = this.options,
        s = i.heightStyle,
        n = this.element.parent();
      this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
        var e = t(this),
          i = e.uniqueId().attr("id"),
          s = e.next(),
          n = s.uniqueId().attr("id");
        e.attr("aria-controls", n), s.attr("aria-labelledby", i)
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
        var i = t(this),
          s = i.css("position");
        "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
      }), this.headers.each(function() {
        e -= t(this).outerHeight(!0)
      }), this.headers.next().each(function() {
        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
      }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
        var i = t(this).is(":visible");
        i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
      }).height(e))
    },
    _activate: function(e) {
      var i = this._findActive(e)[0];
      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }))
    },
    _findActive: function(e) {
      return "number" == typeof e ? this.headers.eq(e) : t()
    },
    _setupEvents: function(e) {
      var i = {
        keydown: "_keydown"
      };
      e && t.each(e.split(" "), function(t, e) {
        i[e] = "_eventHandler"
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers)
    },
    _eventHandler: function(e) {
      var i, s, n = this.options,
        o = this.active,
        a = t(e.currentTarget),
        r = a[0] === o[0],
        h = r && n.collapsible,
        l = h ? t() : a.next(),
        c = o.next(),
        u = {
          oldHeader: o,
          oldPanel: c,
          newHeader: h ? t() : a,
          newPanel: l
        };
      e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
    },
    _toggle: function(e) {
      var i = e.newPanel,
        s = this.prevShow.length ? this.prevShow : e.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
        "aria-hidden": "true"
      }), s.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), i.length && s.length ? s.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : i.length && this.headers.filter(function() {
        return 0 === parseInt(t(this).attr("tabIndex"), 10)
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      })
    },
    _animate: function(t, e, i) {
      var s, n, o, a = this,
        r = 0,
        h = t.css("box-sizing"),
        l = t.length && (!e.length || t.index() < e.index()),
        c = this.options.animate || {},
        u = l && c.down || c,
        d = function() {
          a._toggleComplete(i)
        };
      return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
        duration: o,
        easing: n,
        step: function(t, e) {
          e.now = Math.round(t)
        }
      }), t.hide().animate(this.showProps, {
        duration: o,
        easing: n,
        complete: d,
        step: function(t, i) {
          i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
        }
      }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
    },
    _toggleComplete: function(t) {
      var e = t.oldPanel,
        i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
    }
  }), t.ui.safeActiveElement = function(t) {
    var e;
    try {
      e = t.activeElement
    } catch (i) {
      e = t.body
    }
    return e || (e = t.body), e.nodeName || (e = t.body), e
  }, t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function(t) {
          t.preventDefault()
        },
        "click .ui-menu-item": function(e) {
          var i = t(e.target),
            s = t(t.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
        },
        "mouseenter .ui-menu-item": function(e) {
          if (!this.previousFilter) {
            var i = t(e.target).closest(".ui-menu-item"),
              s = t(e.currentTarget);
            i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i)
        },
        blur: function(e) {
          this._delay(function() {
            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
            i && this.collapseAll(e)
          })
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
        }
      })
    },
    _destroy: function() {
      var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
        i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
        var e = t(this);
        e.data("ui-menu-submenu-caret") && e.remove()
      })
    },
    _keydown: function(e) {
      var i, s, n, o, a = !0;
      switch (e.keyCode) {
        case t.ui.keyCode.PAGE_UP:
          this.previousPage(e);
          break;
        case t.ui.keyCode.PAGE_DOWN:
          this.nextPage(e);
          break;
        case t.ui.keyCode.HOME:
          this._move("first", "first", e);
          break;
        case t.ui.keyCode.END:
          this._move("last", "last", e);
          break;
        case t.ui.keyCode.UP:
          this.previous(e);
          break;
        case t.ui.keyCode.DOWN:
          this.next(e);
          break;
        case t.ui.keyCode.LEFT:
          this.collapse(e);
          break;
        case t.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
          break;
        case t.ui.keyCode.ENTER:
        case t.ui.keyCode.SPACE:
          this._activate(e);
          break;
        case t.ui.keyCode.ESCAPE:
          this.collapse(e);
          break;
        default:
          a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
            delete this.previousFilter
          }, 1e3)) : delete this.previousFilter
      }
      a && e.preventDefault()
    },
    _activate: function(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
    },
    refresh: function() {
      var e, i, s, n, o, a = this,
        r = this.options.icons.submenu,
        h = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function() {
        var e = t(this),
          i = e.prev(),
          s = t("<span>").data("ui-menu-submenu-caret", !0);
        a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
      }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
        var e = t(this);
        a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
      }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
    },
    _itemRole: function() {
      return {
        menu: "menuitem",
        listbox: "option"
      } [this.options.role]
    },
    _setOption: function(t, e) {
      if ("icons" === t) {
        var i = this.element.find(".ui-menu-icon");
        this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
      }
      this._super(t, e)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    focus: function(t, e) {
      var i, s, n;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
        this._close()
      }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      })
    },
    _scrollIntoView: function(e) {
      var i, s, n, o, a, r;
      this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
    },
    blur: function(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null)
    },
    _startOpening: function(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
        this._close(), this._open(t)
      }, this.delay))
    },
    _open: function(e) {
      var i = t.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    },
    collapseAll: function(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
        var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
      }, this.delay)
    },
    _close: function(t) {
      t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
    },
    _closeOnDocumentClick: function(e) {
      return !t(e.target).closest(".ui-menu").length
    },
    _isDivider: function(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text())
    },
    collapse: function(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e))
    },
    expand: function(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function() {
        this.focus(t, e)
      }))
    },
    next: function(t) {
      this._move("next", "first", t)
    },
    previous: function(t) {
      this._move("prev", "last", t)
    },
    isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function(t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
    },
    nextPage: function(e) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
        return i = t(this), 0 > i.offset().top - s - n
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
    },
    previousPage: function(e) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
        return i = t(this), i.offset().top - s + n > 0
      }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0)
    },
    _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function(e) {
      this.active = this.active || t(e.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
    },
    _filterMenuItems: function(e) {
      var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
        s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
        return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
      })
    }
  }), t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var e, i, s, n = this.element[0].nodeName.toLowerCase(),
        o = "textarea" === n,
        a = "input" === n;
      this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function(n) {
          if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
          e = !1, s = !1, i = !1;
          var o = t.ui.keyCode;
          switch (n.keyCode) {
            case o.PAGE_UP:
              e = !0, this._move("previousPage", n);
              break;
            case o.PAGE_DOWN:
              e = !0, this._move("nextPage", n);
              break;
            case o.UP:
              e = !0, this._keyEvent("previous", n);
              break;
            case o.DOWN:
              e = !0, this._keyEvent("next", n);
              break;
            case o.ENTER:
              this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
              break;
            case o.TAB:
              this.menu.active && this.menu.select(n);
              break;
            case o.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;
            default:
              i = !0, this._searchTimeout(n)
          }
        },
        keypress: function(s) {
          if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
          if (!i) {
            var n = t.ui.keyCode;
            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);
                break;
              case n.PAGE_DOWN:
                this._move("nextPage", s);
                break;
              case n.UP:
                this._keyEvent("previous", s);
                break;
              case n.DOWN:
                this._keyEvent("next", s)
            }
          }
        },
        input: function(t) {
          return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
        },
        focus: function() {
          this.selectedItem = null, this.previous = this._value()
        },
        blur: function(t) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
        }
      }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function(e) {
          e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
          })
        },
        menufocus: function(e, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
            t(e.target).trigger(e.originalEvent)
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
            item: n
          }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0)
        },
        menuselect: function(e, i) {
          var s = i.item.data("ui-autocomplete-item"),
            n = this.previous;
          this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
            this.previous = n, this.selectedItem = s
          })), !1 !== this._trigger("select", e, {
            item: s
          }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
        }
      }), this.liveRegion = t("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _destroy: function() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },
    _setOption: function(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
    },
    _isEventTargetInWidget: function(e) {
      var i = this.menu.element[0];
      return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
    },
    _closeOnClickOutside: function(t) {
      this._isEventTargetInWidget(t) || this.close()
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
    },
    _initSource: function() {
      var e, i, s = this;
      t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
        s(t.ui.autocomplete.filter(e, i.term))
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
        s.xhr && s.xhr.abort(), s.xhr = t.ajax({
          url: i,
          data: e,
          dataType: "json",
          success: function(t) {
            n(t)
          },
          error: function() {
            n([])
          }
        })
      }) : this.source = this.options.source
    },
    _searchTimeout: function(t) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        var e = this.term === this._value(),
          i = this.menu.element.is(":visible"),
          s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
        (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
      }, this.options.delay)
    },
    search: function(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
    },
    _search: function(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response())
    },
    _response: function() {
      var e = ++this.requestIndex;
      return t.proxy(function(t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
      }, this)
    },
    __response: function(t) {
      t && (t = this._normalize(t)), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
    },
    close: function(t) {
      this.cancelSearch = !0, this._close(t)
    },
    _close: function(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
    },
    _change: function(t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      })
    },
    _normalize: function(e) {
      return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
        return "string" == typeof e ? {
          label: e,
          value: e
        } : t.extend({}, e, {
          label: e.label || e.value,
          value: e.value || e.label
        })
      })
    },
    _suggest: function(e) {
      var i = this.menu.element.empty();
      this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      })
    },
    _resizeMenu: function() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function(e, i) {
      var s = this;
      t.each(i, function(t, i) {
        s._renderItemData(e, i)
      })
    },
    _renderItemData: function(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e)
    },
    _renderItem: function(e, i) {
      return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
    },
    _move: function(t, e) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
    },
    widget: function() {
      return this.menu.element
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function(t, e) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
    },
    _isContentEditable: function(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
    }
  }), t.extend(t.ui.autocomplete, {
    escapeRegex: function(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    },
    filter: function(e, i) {
      var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
      return t.grep(e, function(t) {
        return s.test(t.label || t.value || t)
      })
    }
  }), t.widget("ui.autocomplete", t.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function(t) {
          return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
        }
      }
    },
    __response: function(e) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
    }
  }), t.ui.autocomplete;
  var g = /ui-corner-([a-z]){2,6}/g;
  t.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input"
      }
    },
    _create: function() {
      this._enhance()
    },
    _enhance: function() {
      this.element.attr("role", "toolbar"), this.refresh()
    },
    _destroy: function() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
    },
    _initWidgets: function() {
      var e = this,
        i = [];
      t.each(this.options.items, function(s, n) {
        var o, a = {};
        return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function() {
          var e = t(this);
          e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
        }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
          classes: {}
        }, e.element.find(n).each(function() {
          var n = t(this),
            o = n[s]("instance"),
            r = t.widget.extend({}, a);
          if ("button" !== s || !n.parent(".ui-spinner").length) {
            o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
            var h = n[s]("widget");
            t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
          }
        })), void 0) : void 0
      }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
    },
    _callChildMethod: function(e) {
      this.childWidgets.each(function() {
        var i = t(this),
          s = i.data("ui-controlgroup-data");
        s && s[e] && s[e]()
      })
    },
    _updateCornerClass: function(t, e) {
      var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
        s = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, i), this._addClass(t, null, s)
    },
    _buildSimpleOptions: function(t, e) {
      var i = "vertical" === this.options.direction,
        s = {
          classes: {}
        };
      return s.classes[e] = {
        middle: "",
        first: "ui-corner-" + (i ? "top" : "left"),
        last: "ui-corner-" + (i ? "bottom" : "right"),
        only: "ui-corner-all"
      } [t], s
    },
    _spinnerOptions: function(t) {
      var e = this._buildSimpleOptions(t, "ui-spinner");
      return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
    },
    _buttonOptions: function(t) {
      return this._buildSimpleOptions(t, "ui-button")
    },
    _checkboxradioOptions: function(t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label")
    },
    _selectmenuOptions: function(t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e ? "auto" : !1,
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        } [t]
      }
    },
    _resolveClassesValues: function(e, i) {
      var s = {};
      return t.each(e, function(n) {
        var o = i.options.classes[n] || "";
        o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
      }), s
    },
    _setOption: function(t, e) {
      return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
    },
    refresh: function() {
      var e, i = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
        var n = e[s]().data("ui-controlgroup-data");
        if (n && i["_" + n.widgetName + "Options"]) {
          var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
          o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
        } else i._updateCornerClass(e[s](), s)
      }), this._callChildMethod("refresh"))
    }
  }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function() {
      var e, i, s = this,
        n = this._super() || {};
      return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
        s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
      }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
    },
    _create: function() {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
        change: "_toggleClasses",
        focus: function() {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
        },
        blur: function() {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
        }
      })
    },
    _readType: function() {
      var e = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
    },
    _enhance: function() {
      this._updateIcon(this.element[0].checked)
    },
    widget: function() {
      return this.label
    },
    _getRadioGroup: function() {
      var e, i = this.element[0].name,
        s = "input[name='" + t.ui.escapeSelector(i) + "']";
      return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
        return 0 === t(this).form().length
      }), e.not(this.element)) : t([])
    },
    _toggleClasses: function() {
      var e = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
        var e = t(this).checkboxradio("instance");
        e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
      })
    },
    _destroy: function() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
    },
    _setOption: function(t, e) {
      return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
    },
    _updateIcon: function(e) {
      var i = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
    },
    _updateLabel: function() {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
    },
    refresh: function() {
      var t = this.element[0].checked,
        e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
        disabled: e
      })
    }
  }]), t.ui.checkboxradio, t.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
    },
    _getCreateOptions: function() {
      var t, e = this._super() || {};
      return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
    },
    _create: function() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
        keyup: function(e) {
          e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
        }
      })
    },
    _enhance: function() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
    },
    _updateTooltip: function() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
    },
    _updateIcon: function(e, i) {
      var s = "iconPosition" !== e,
        n = s ? this.options.iconPosition : i,
        o = "top" === n || "bottom" === n;
      this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
    },
    _destroy: function() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
    },
    _attachIconSpace: function(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
    },
    _attachIcon: function(t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
    },
    _setOptions: function(t) {
      var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
        i = void 0 === t.icon ? this.options.icon : t.icon;
      e || i || (t.showLabel = !0), this._super(t)
    },
    _setOption: function(t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
    },
    refresh: function() {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({
        disabled: t
      }), this._updateTooltip()
    }
  }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
    },
    _setOption: function(t, e) {
      return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
    }
  }), t.fn.button = function(e) {
    return function() {
      return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
        icon: !1
      }) : this.checkboxradio.apply(this, arguments))
    }
  }(t.fn.button), t.fn.buttonset = function() {
    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
    }), this.controlgroup.apply(this, arguments))
  }), t.ui.button, t.extend(t.ui, {
    datepicker: {
      version: "1.12.1"
    }
  });
  var m;
  t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(t) {
      return a(this._defaults, t || {}), this
    },
    _attachDatepicker: function(e, i) {
      var s, n, o;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
    },
    _newInst: function(e, i) {
      var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function(e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function(e, i) {
      var s, n, o, a = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
      i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: o,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
        src: o,
        alt: n,
        title: n
      }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
      }))
    },
    _autoSize: function(t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, i, s, n, o = new Date(2009, 11, 20),
          a = this._get(t, "dateFormat");
        a.match(/[DM]/) && (e = function(t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
          return s
        }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
      }
    },
    _inlineDatepicker: function(e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(e, i, s, n, o) {
      var r, h, l, c, u, d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
    },
    _destroyDatepicker: function(e) {
      var i, s = t(e),
        n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null))
    },
    _enableDatepicker: function(e) {
      var i, s, n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }))
    },
    _disableDatepicker: function(e) {
      var i, s, n = t(e),
        o = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
        return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function(t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1
    },
    _getInst: function(e) {
      try {
        return t.data(e, "datepicker")
      } catch (i) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(e, i, s) {
      var n, o, r, h, l = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
    },
    _changeDatepicker: function(t, e, i) {
      this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function(t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function(t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
    },
    _doKeyDown: function(e) {
      var i, s, n, o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is(".ui-datepicker-rtl");
      if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), a = !1;
          break;
        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
          break;
        default:
          a = !1
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
      a && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function(e) {
      var i, s, n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
    },
    _doKeyUp: function(e) {
      var i, s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
      } catch (n) {}
      return !0
    },
    _showDatepicker: function(e) {
      if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, h, l, c;
        s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
          return r |= "fixed" === t(this).css("position"), !r
        }), h = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
      }
    },
    _updateDatepicker: function(e) {
      this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i, s = this._getNumberOfMonths(e),
        n = s[1],
        a = 17,
        r = e.dpDiv.find("." + this._dayOverClass + " a");
      r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
    },
    _checkOffset: function(e, i, s) {
      var n = e.dpDiv.outerWidth(),
        o = e.dpDiv.outerHeight(),
        a = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
    },
    _findPos: function(e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
      return i = t(e).offset(), [i.left, i.top]
    },
    _hideDatepicker: function(e) {
      var i, s, n, o, a = this._curInst;
      !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
        t.datepicker._tidyDialog(a)
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
    },
    _gotoToday: function(e) {
      var i, s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
    },
    _selectMonthYear: function(e, i, s) {
      var n = t(e),
        o = this._getInst(n[0]);
      o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
    },
    _selectDay: function(e, i, s, n) {
      var o, a = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
    },
    _clearDate: function(e) {
      var i = t(e);
      this._selectDate(i, "")
    },
    _selectDate: function(e, i) {
      var s, n = t(e),
        o = this._getInst(n[0]);
      i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
    },
    _updateAlternate: function(e) {
      var i, s, n, o = this._get(e, "altField");
      o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
    },
    noWeekends: function(t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""]
    },
    iso8601Week: function(t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
    },
    parseDate: function(e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
      var n, o, a, r, h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
        u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        g = -1,
        m = -1,
        _ = -1,
        v = -1,
        b = !1,
        y = function(t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t;
          return i && n++, i
        },
        w = function(t) {
          var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            o = RegExp("^\\d{" + n + "," + s + "}"),
            a = i.substring(h).match(o);
          if (!a) throw "Missing number at position " + h;
          return h += a[0].length, parseInt(a[0], 10)
        },
        k = function(e, s, n) {
          var o = -1,
            a = t.map(y(e) ? n : s, function(t, e) {
              return [
                [e, t]
              ]
            }).sort(function(t, e) {
              return -(t[1].length - e[1].length)
            });
          if (t.each(a, function(t, e) {
              var s = e[1];
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
            }), -1 !== o) return o + 1;
          throw "Unknown name at position " + h
        },
        x = function() {
          if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
          h++
        };
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
        else switch (e.charAt(n)) {
          case "d":
            _ = w("d");
            break;
          case "D":
            k("D", u, d);
            break;
          case "o":
            v = w("o");
            break;
          case "m":
            m = w("m");
            break;
          case "M":
            m = k("M", p, f);
            break;
          case "y":
            g = w("y");
            break;
          case "@":
            r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;
          case "!":
            r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
            break;
          case "'":
            y("'") ? x() : b = !0;
            break;
          default:
            x()
        }
      if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
      if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1)
        for (m = 1, _ = v;;) {
          if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
          m++, _ -= o
        }
      if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
      return r
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function(t, e, i) {
      if (!e) return "";
      var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        o = (i ? i.dayNames : null) || this._defaults.dayNames,
        a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function(e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i
        },
        l = function(t, e, i) {
          var s = "" + e;
          if (h(t))
            for (; i > s.length;) s = "0" + s;
          return s
        },
        c = function(t, e, i, s) {
          return h(t) ? s[e] : i[e]
        },
        u = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
          else switch (t.charAt(s)) {
            case "d":
              u += l("d", e.getDate(), 2);
              break;
            case "D":
              u += c("D", e.getDay(), n, o);
              break;
            case "o":
              u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              u += l("m", e.getMonth() + 1, 2);
              break;
            case "M":
              u += c("M", e.getMonth(), a, r);
              break;
            case "y":
              u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
              break;
            case "@":
              u += e.getTime();
              break;
            case "!":
              u += 1e4 * e.getTime() + this._ticksTo1970;
              break;
            case "'":
              h("'") ? u += "'" : d = !0;
              break;
            default:
              u += t.charAt(s)
          }
      return u
    },
    _possibleChars: function(t) {
      var e, i = "",
        s = !1,
        n = function(i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
        else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            n("'") ? i += "'" : s = !0;
            break;
          default:
            i += t.charAt(e)
        }
      return i
    },
    _get: function(t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
    },
    _setDateFromField: function(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = t.lastVal = t.input ? t.input.val() : null,
          n = this._getDefaultDate(t),
          o = n,
          a = this._getFormatConfig(t);
        try {
          o = this.parseDate(i, s, a) || n
        } catch (r) {
          s = e ? "" : s
        }
        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
    },
    _determineDate: function(e, i, s) {
      var n = function(t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
        },
        o = function(i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (s) {}
          for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                r += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                r += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                break;
              case "y":
              case "Y":
                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
            }
            l = h.exec(i)
          }
          return new Date(o, a, r)
        },
        a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
      return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
    },
    _daylightSavingAdjust: function(t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
    },
    _setDate: function(t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        o = t.selectedYear,
        a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
    },
    _getDate: function(t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e
    },
    _attachHandlers: function(e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function() {
        var e = {
          prev: function() {
            t.datepicker._adjustDate(s, -i, "M")
          },
          next: function() {
            t.datepicker._adjustDate(s, +i, "M")
          },
          hide: function() {
            t.datepicker._hideDatepicker()
          },
          today: function() {
            t.datepicker._gotoToday(s)
          },
          selectDay: function() {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return t.datepicker._selectMonthYear(s, this, "M"), !1
          },
          selectYear: function() {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1
          }
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(t) {
      var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
        B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, "isRTL"),
        j = this._get(t, "showButtonPanel"),
        q = this._get(t, "hideIfNoPrevNext"),
        K = this._get(t, "navigationAsDateFormat"),
        U = this._getNumberOfMonths(t),
        V = this._get(t, "showCurrentAtPos"),
        $ = this._get(t, "stepMonths"),
        X = 1 !== U[0] || 1 !== U[1],
        G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        Q = this._getMinMaxDate(t, "min"),
        J = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - V,
        te = t.drawYear;
      if (0 > Z && (Z += 12, te--), J)
        for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
        for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
          if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
            if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
              case 0:
                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                break;
              case U[1] - 1:
                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                T += " ui-datepicker-group-middle", I = ""
            }
            T += "'>"
          }
          for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
          for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
            for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
            T += W + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
        }
        y += x
      }
      return y += l, t._keyEvent = !1, y
    },
    _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
      var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
        _ = this._get(t, "changeYear"),
        v = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
        y += "</select>"
      }
      if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml)
        if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
              var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
              return isNaN(e) ? d : e
            }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
        } return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
    },
    _adjustInstDate: function(t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
        n = t.selectedMonth + ("M" === i ? e : 0),
        o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
        a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
      t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
    },
    _restrictMinMax: function(t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n
    },
    _notifyChange: function(t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
    },
    _getNumberOfMonths: function(t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
    },
    _getDaysInMonth: function(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function(t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
    },
    _isInRange: function(t, e) {
      var i, s, n = this._getMinMaxDate(t, "min"),
        o = this._getMinMaxDate(t, "max"),
        a = null,
        r = null,
        h = this._get(t, "yearRange");
      return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
    },
    _getFormatConfig: function(t) {
      var e = this._get(t, "shortYearCutoff");
      return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      }
    },
    _formatDate: function(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
    }
  }), t.fn.datepicker = function(e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var _ = !1;
  t(document).on("mouseup", function() {
    _ = !1
  }), t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function(t) {
        return e._mouseDown(t)
      }).on("click." + this.widgetName, function(i) {
        return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(e) {
      if (!_) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
        var i = this,
          s = 1 === e.which,
          n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          i.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
          return i._mouseMove(t)
        }, this._mouseUpDelegate = function(t) {
          return i._mouseUp(t)
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0
      }
    },
    _mouseMove: function(e) {
      if (this._mouseMoved) {
        if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
        if (!e.which)
          if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
          else if (!this.ignoreMissingWhich) return this._mouseUp(e)
      }
      return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    },
    _mouseUp: function(e) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
    },
    _mouseDistanceMet: function(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  }), t.ui.plugin = {
    add: function(e, i, s) {
      var n, o = t.ui[e].prototype;
      for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
    },
    call: function(t, e, i, s) {
      var n, o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
        for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
    }
  }, t.ui.safeBlur = function(e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
  }, t.widget("ui.draggable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
    },
    _mouseCapture: function(e) {
      var i = this.options;
      return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
    },
    _blockFrames: function(e) {
      this.iframeBlocks = this.document.find(e).map(function() {
        var e = t(this);
        return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
      })
    },
    _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _blurActiveElement: function(e) {
      var i = t.ui.safeActiveElement(this.document[0]),
        s = t(e.target);
      s.closest(i).length || t.ui.safeBlur(i)
    },
    _mouseStart: function(e) {
      var i = this.options;
      return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
        return "fixed" === t(this).css("position")
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
    },
    _refreshOffsets: function(t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top
      }
    },
    _mouseDrag: function(e, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();
        if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
        this.position = s.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
    },
    _mouseStop: function(e) {
      var i = this,
        s = !1;
      return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        i._trigger("stop", e) !== !1 && i._clear()
      }) : this._trigger("stop", e) !== !1 && this._clear(), !1
    },
    _mouseUp: function(e) {
      return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this
    },
    _getHandle: function(e) {
      return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
    },
    _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
    },
    _removeHandleClassName: function() {
      this._removeClass(this.handleElement, "ui-draggable-handle")
    },
    _createHelper: function(e) {
      var i = this.options,
        s = t.isFunction(i.helper),
        n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
    },
    _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },
    _adjustOffsetFromHelper: function(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },
    _isRootNode: function(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0]
    },
    _getParentOffset: function() {
      var e = this.offsetParent.offset(),
        i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };
      var t = this.element.position(),
        e = this._isRootNode(this.scrollParent[0]);
      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var e, i, s, n = this.options,
        o = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
    },
    _convertPositionTo: function(t, e) {
      e || (e = this.position);
      var i = "absolute" === t ? 1 : -1,
        s = this._isRootNode(this.scrollParent[0]);
      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      }
    },
    _generatePosition: function(t, e) {
      var i, s, n, o, a = this.options,
        r = this._isRootNode(this.scrollParent[0]),
        h = t.pageX,
        l = t.pageY;
      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      }
    },
    _clear: function() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _trigger: function(e, i, s) {
      return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), t.ui.plugin.add("draggable", "connectToSortable", {
    start: function(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.sortables = [], t(s.options.connectToSortable).each(function() {
        var i = t(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
      })
    },
    stop: function(e, i, s) {
      var n = t.extend({}, i, {
        item: s.element
      });
      s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
        var t = this;
        t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
          position: t.placeholder.css("position"),
          top: t.placeholder.css("top"),
          left: t.placeholder.css("left")
        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
      })
    },
    drag: function(e, i, s) {
      t.each(s.sortables, function() {
        var n = !1,
          o = this;
        o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
        })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
          return i.helper[0]
        }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
          this.refreshPositions()
        }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
          this.refreshPositions()
        }))
      })
    }
  }), t.ui.plugin.add("draggable", "cursor", {
    start: function(e, i, s) {
      var n = t("body"),
        o = s.options;
      n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._cursor && t("body").css("cursor", n._cursor)
    }
  }), t.ui.plugin.add("draggable", "opacity", {
    start: function(e, i, s) {
      var n = t(i.helper),
        o = s.options;
      n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._opacity && t(i.helper).css("opacity", n._opacity)
    }
  }), t.ui.plugin.add("draggable", "scroll", {
    start: function(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
    },
    drag: function(e, i, s) {
      var n = s.options,
        o = !1,
        a = s.scrollParentNotHidden[0],
        r = s.document[0];
      a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
    }
  }), t.ui.plugin.add("draggable", "snap", {
    start: function(e, i, s) {
      var n = s.options;
      s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
        var e = t(this),
          i = e.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: e.outerWidth(),
          height: e.outerHeight(),
          top: i.top,
          left: i.left
        })
      })
    },
    drag: function(e, i, s) {
      var n, o, a, r, h, l, c, u, d, p, f = s.options,
        g = f.snapTolerance,
        m = i.offset.left,
        _ = m + s.helperProportions.width,
        v = i.offset.top,
        b = v + s.helperProportions.height;
      for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
        snapItem: s.snapElements[d].item
      })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
        top: c - s.helperProportions.height,
        left: 0
      }).top), o && (i.position.top = s._convertPositionTo("relative", {
        top: u,
        left: 0
      }).top), a && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h - s.helperProportions.width
      }).left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l
      }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
        top: c,
        left: 0
      }).top), o && (i.position.top = s._convertPositionTo("relative", {
        top: u - s.helperProportions.height,
        left: 0
      }).top), a && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: h
      }).left), r && (i.position.left = s._convertPositionTo("relative", {
        top: 0,
        left: l - s.helperProportions.width
      }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
        snapItem: s.snapElements[d].item
      })), s.snapElements[d].snapping = n || o || a || r || p)
    }
  }), t.ui.plugin.add("draggable", "stack", {
    start: function(e, i, s) {
      var n, o = s.options,
        a = t.makeArray(t(o.stack)).sort(function(e, i) {
          return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
      a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
        t(this).css("zIndex", n + e)
      }), this.css("zIndex", n + a.length))
    }
  }), t.ui.plugin.add("draggable", "zIndex", {
    start: function(e, i, s) {
      var n = t(i.helper),
        o = s.options;
      n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
    },
    stop: function(e, i, s) {
      var n = s.options;
      n._zIndex && t(i.helper).css("zIndex", n._zIndex)
    }
  }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function(t) {
      return parseFloat(t) || 0
    },
    _isNumber: function(t) {
      return !isNaN(parseFloat(t))
    },
    _hasScroll: function(e, i) {
      if ("hidden" === t(e).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        n = !1;
      return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
    },
    _create: function() {
      var e, i = this.options,
        s = this;
      this._addClass("ui-resizable"), t.extend(this, {
        _aspectRatio: !!i.aspectRatio,
        aspectRatio: i.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom"),
        marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
        i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
      }).on("mouseleave", function() {
        i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
      }), this._mouseInit()
    },
    _destroy: function() {
      this._mouseDestroy();
      var e, i = function(e) {
        t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
        position: e.css("position"),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css("top"),
        left: e.css("left")
      }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    },
    _setOption: function(t, e) {
      switch (this._super(t, e), t) {
        case "handles":
          this._removeHandles(), this._setupHandles();
          break;
        default:
      }
    },
    _setupHandles: function() {
      var e, i, s, n, o, a = this.options,
        r = this;
      if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
          n: ".ui-resizable-n",
          e: ".ui-resizable-e",
          s: ".ui-resizable-s",
          w: ".ui-resizable-w",
          se: ".ui-resizable-se",
          sw: ".ui-resizable-sw",
          ne: ".ui-resizable-ne",
          nw: ".ui-resizable-nw"
        } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
          zIndex: a.zIndex
        }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
      this._renderAxis = function(e) {
        var i, s, n, o;
        e = e || this.element;
        for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
          mousedown: r._mouseDown
        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
        r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
      }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
    },
    _removeHandles: function() {
      this._handles.remove()
    },
    _mouseCapture: function(e) {
      var i, s, n = !1;
      for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
      return !this.options.disabled && n
    },
    _mouseStart: function(e) {
      var i, s, n, o = this.options,
        a = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: a.width(),
        height: a.height()
      }, this.originalSize = this._helper ? {
        width: a.outerWidth(),
        height: a.outerHeight()
      } : {
        width: a.width(),
        height: a.height()
      }, this.sizeDiff = {
        width: a.outerWidth() - a.width(),
        height: a.outerHeight() - a.height()
      }, this.originalPosition = {
        left: i,
        top: s
      }, this.originalMousePosition = {
        left: e.pageX,
        top: e.pageY
      }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
    },
    _mouseDrag: function(e) {
      var i, s, n = this.originalMousePosition,
        o = this.axis,
        a = e.pageX - n.left || 0,
        r = e.pageY - n.top || 0,
        h = this._change[o];
      return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
    },
    _mouseStop: function(e) {
      this.resizing = !1;
      var i, s, n, o, a, r, h, l = this.options,
        c = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
        width: c.helper.width() - o,
        height: c.helper.height() - n
      }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
        top: h,
        left: r
      })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
    },
    _updatePrevProperties: function() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      }
    },
    _applyChanges: function() {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
    },
    _updateVirtualBoundaries: function(t) {
      var e, i, s, n, o, a = this.options;
      o = {
        minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
        maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
        minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
        maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
      }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
    },
    _updateCache: function(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
    },
    _updateRatio: function(t) {
      var e = this.position,
        i = this.size,
        s = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
    },
    _respectSize: function(t) {
      var e = this._vBoundaries,
        i = this.axis,
        s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
        n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
        o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
        a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
        r = this.originalPosition.left + this.originalSize.width,
        h = this.originalPosition.top + this.originalSize.height,
        l = /sw|nw|w/.test(i),
        c = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
    },
    _getPaddingPlusBorderDimensions: function(t) {
      for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      }
    },
    _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
        for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        })
    },
    _renderProxy: function() {
      var e = this.element,
        i = this.options;
      this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
      e: function(t, e) {
        return {
          width: this.originalSize.width + e
        }
      },
      w: function(t, e) {
        var i = this.originalSize,
          s = this.originalPosition;
        return {
          left: s.left + e,
          width: i.width - e
        }
      },
      n: function(t, e, i) {
        var s = this.originalSize,
          n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        }
      },
      s: function(t, e, i) {
        return {
          height: this.originalSize.height + i
        }
      },
      se: function(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
      },
      sw: function(e, i, s) {
        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
      },
      ne: function(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
      },
      nw: function(e, i, s) {
        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
      }
    },
    _propagate: function(e, i) {
      t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), t.ui.plugin.add("resizable", "animate", {
    stop: function(e) {
      var i = t(this).resizable("instance"),
        s = i.options,
        n = i._proportionallyResizeElements,
        o = n.length && /textarea/i.test(n[0].nodeName),
        a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
        r = o ? 0 : i.sizeDiff.width,
        h = {
          width: i.size.width - r,
          height: i.size.height - a
        },
        l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
        c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(t.extend(h, c && l ? {
        top: c,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function() {
          var s = {
            width: parseFloat(i.element.css("width")),
            height: parseFloat(i.element.css("height")),
            top: parseFloat(i.element.css("top")),
            left: parseFloat(i.element.css("left"))
          };
          n && n.length && t(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate("resize", e)
        }
      })
    }
  }), t.ui.plugin.add("resizable", "containment", {
    start: function() {
      var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
        l = h.options,
        c = h.element,
        u = l.containment,
        d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
      d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: t(document),
        left: 0,
        top: 0,
        width: t(document).width(),
        height: t(document).height() || document.body.parentNode.scrollHeight
      }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
        i[t] = h._num(e.css("padding" + s))
      }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
        height: e.innerHeight() - i[3],
        width: e.innerWidth() - i[1]
      }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
        element: d,
        left: s.left,
        top: s.top,
        width: a,
        height: r
      }))
    },
    resize: function(e) {
      var i, s, n, o, a = t(this).resizable("instance"),
        r = a.options,
        h = a.containerOffset,
        l = a.position,
        c = a._aspectRatio || e.shiftKey,
        u = {
          top: 0,
          left: 0
        },
        d = a.containerElement,
        p = !0;
      d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
    },
    stop: function() {
      var e = t(this).resizable("instance"),
        i = e.options,
        s = e.containerOffset,
        n = e.containerPosition,
        o = e.containerElement,
        a = t(e.helper),
        r = a.offset(),
        h = a.outerWidth() - e.sizeDiff.width,
        l = a.outerHeight() - e.sizeDiff.height;
      e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      })
    }
  }), t.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
      var e = t(this).resizable("instance"),
        i = e.options;
      t(i.alsoResize).each(function() {
        var e = t(this);
        e.data("ui-resizable-alsoresize", {
          width: parseFloat(e.width()),
          height: parseFloat(e.height()),
          left: parseFloat(e.css("left")),
          top: parseFloat(e.css("top"))
        })
      })
    },
    resize: function(e, i) {
      var s = t(this).resizable("instance"),
        n = s.options,
        o = s.originalSize,
        a = s.originalPosition,
        r = {
          height: s.size.height - o.height || 0,
          width: s.size.width - o.width || 0,
          top: s.position.top - a.top || 0,
          left: s.position.left - a.left || 0
        };
      t(n.alsoResize).each(function() {
        var e = t(this),
          s = t(this).data("ui-resizable-alsoresize"),
          n = {},
          o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        t.each(o, function(t, e) {
          var i = (s[e] || 0) + (r[e] || 0);
          i && i >= 0 && (n[e] = i || null)
        }), e.css(n)
      })
    },
    stop: function() {
      t(this).removeData("ui-resizable-alsoresize")
    }
  }), t.ui.plugin.add("resizable", "ghost", {
    start: function() {
      var e = t(this).resizable("instance"),
        i = e.size;
      e.ghost = e.originalElement.clone(), e.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: i.height,
        width: i.width,
        margin: 0,
        left: 0,
        top: 0
      }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
    },
    resize: function() {
      var e = t(this).resizable("instance");
      e.ghost && e.ghost.css({
        position: "relative",
        height: e.size.height,
        width: e.size.width
      })
    },
    stop: function() {
      var e = t(this).resizable("instance");
      e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
    }
  }), t.ui.plugin.add("resizable", "grid", {
    resize: function() {
      var e, i = t(this).resizable("instance"),
        s = i.options,
        n = i.size,
        o = i.originalSize,
        a = i.originalPosition,
        r = i.axis,
        h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
        l = h[0] || 1,
        c = h[1] || 1,
        u = Math.round((n.width - o.width) / l) * l,
        d = Math.round((n.height - o.height) / c) * c,
        p = o.width + u,
        f = o.height + d,
        g = s.maxWidth && p > s.maxWidth,
        m = s.maxHeight && f > s.maxHeight,
        _ = s.minWidth && s.minWidth > p,
        v = s.minHeight && s.minHeight > f;
      s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
    }
  }), t.ui.resizable, t.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function(e) {
          var i = t(this).css(e).offset().top;
          0 > i && t(this).css("top", e.top - i)
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
    },
    _init: function() {
      this.options.autoOpen && this.open()
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
    },
    _destroy: function() {
      var t, e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
    },
    widget: function() {
      return this.uiDialog
    },
    disable: t.noop,
    enable: t.noop,
    close: function(e) {
      var i = this;
      this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
        i._trigger("close", e)
      }))
    },
    isOpen: function() {
      return this._isOpen
    },
    moveToTop: function() {
      this._moveToTop()
    },
    _moveToTop: function(e, i) {
      var s = !1,
        n = this.uiDialog.siblings(".ui-front:visible").map(function() {
          return +t(this).css("z-index")
        }).get(),
        o = Math.max.apply(null, n);
      return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
    },
    open: function() {
      var e = this;
      return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
        e._focusTabbable(), e._trigger("focus")
      }), this._makeFocusTarget(), this._trigger("open"), void 0)
    },
    _focusTabbable: function() {
      var t = this._focusedElement;
      t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
    },
    _keepFocus: function(e) {
      function i() {
        var e = t.ui.safeActiveElement(this.document[0]),
          i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
        i || this._focusTabbable()
      }
      e.preventDefault(), i.call(this), this._delay(i)
    },
    _createWrapper: function() {
      this.uiDialog = t("<div>").hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
        keydown: function(e) {
          if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;
          if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
              s = i.filter(":first"),
              n = i.filter(":last");
            e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
              n.trigger("focus")
            }), e.preventDefault()) : (this._delay(function() {
              s.trigger("focus")
            }), e.preventDefault())
          }
        },
        mousedown: function(t) {
          this._moveToTop(t) && this._focusTabbable()
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      })
    },
    _createTitlebar: function() {
      var e;
      this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
        mousedown: function(e) {
          t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
        }
      }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
        label: t("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
        click: function(t) {
          t.preventDefault(), this.close(t)
        }
      }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
        "aria-labelledby": e.attr("id")
      })
    },
    _title: function(t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;")
    },
    _createButtonPane: function() {
      this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
    },
    _createButtons: function() {
      var e = this,
        i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function(i, s) {
        var n, o;
        s = t.isFunction(s) ? {
          click: s,
          text: i
        } : s, s = t.extend({
          type: "button"
        }, s), n = s.click, o = {
          icon: s.icon,
          iconPosition: s.iconPosition,
          showLabel: s.showLabel,
          icons: s.icons,
          text: s.text
        }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
          n.apply(e.element[0], arguments)
        })
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
    },
    _makeDraggable: function() {
      function e(t) {
        return {
          position: t.position,
          offset: t.offset
        }
      }
      var i = this,
        s = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function(s, n) {
          i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
        },
        drag: function(t, s) {
          i._trigger("drag", t, e(s))
        },
        stop: function(n, o) {
          var a = o.offset.left - i.document.scrollLeft(),
            r = o.offset.top - i.document.scrollTop();
          s.position = {
            my: "left top",
            at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
        }
      })
    },
    _makeResizable: function() {
      function e(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size
        }
      }
      var i = this,
        s = this.options,
        n = s.resizable,
        o = this.uiDialog.css("position"),
        a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: this._minHeight(),
        handles: a,
        start: function(s, n) {
          i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
        },
        resize: function(t, s) {
          i._trigger("resize", t, e(s))
        },
        stop: function(n, o) {
          var a = i.uiDialog.offset(),
            r = a.left - i.document.scrollLeft(),
            h = a.top - i.document.scrollTop();
          s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
            my: "left top",
            at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
            of: i.window
          }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
        }
      }).css("position", o)
    },
    _trackFocus: function() {
      this._on(this.widget(), {
        focusin: function(e) {
          this._makeFocusTarget(), this._focusedElement = t(e.target)
        }
      })
    },
    _makeFocusTarget: function() {
      this._untrackInstance(), this._trackingInstances().unshift(this)
    },
    _untrackInstance: function() {
      var e = this._trackingInstances(),
        i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
    },
    _trackingInstances: function() {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t
    },
    _minHeight: function() {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
    },
    _position: function() {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
    },
    _setOptions: function(e) {
      var i = this,
        s = !1,
        n = {};
      t.each(e, function(t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
    },
    _setOption: function(e, i) {
      var s, n, o = this.uiDialog;
      "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
        label: t("<a>").text("" + this.options.closeText).html()
      }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
    },
    _size: function() {
      var t, e, i, s = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
        height: "auto",
        width: s.width
      }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
        minHeight: e,
        maxHeight: i,
        height: "auto"
      }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
    },
    _blockFrames: function() {
      this.iframeBlocks = this.document.find("iframe").map(function() {
        var e = t(this);
        return t("<div>").css({
          position: "absolute",
          width: e.outerWidth(),
          height: e.outerHeight()
        }).appendTo(e.parent()).offset(e.offset())[0]
      })
    },
    _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _allowInteraction: function(e) {
      return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
    },
    _createOverlay: function() {
      if (this.options.modal) {
        var e = !0;
        this._delay(function() {
          e = !1
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
          focusin: function(t) {
            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
          }
        }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
          mousedown: "_keepFocus"
        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
      }
    },
    _destroyOverlay: function() {
      if (this.options.modal && this.overlay) {
        var t = this.document.data("ui-dialog-overlays") - 1;
        t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
      }
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
    options: {
      dialogClass: ""
    },
    _createWrapper: function() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass)
    },
    _setOption: function(t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
    }
  }), t.ui.dialog, t.widget("ui.droppable", {
    version: "1.12.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function() {
      var e, i = this.options,
        s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
        return t.is(s)
      }, this.proportions = function() {
        return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        }
      }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
    },
    _addToManager: function(e) {
      t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
    },
    _splice: function(t) {
      for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
    },
    _destroy: function() {
      var e = t.ui.ddmanager.droppables[this.options.scope];
      this._splice(e)
    },
    _setOption: function(e, i) {
      if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
        return t.is(i)
      };
      else if ("scope" === e) {
        var s = t.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i)
      }
      this._super(e, i)
    },
    _activate: function(e) {
      var i = t.ui.ddmanager.current;
      this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
    },
    _deactivate: function(e) {
      var i = t.ui.ddmanager.current;
      this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
    },
    _over: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
    },
    _out: function(e) {
      var i = t.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
    },
    _drop: function(e, i) {
      var s = i || t.ui.ddmanager.current,
        n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
        var i = t(this).droppable("instance");
        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
          offset: i.element.offset()
        }), i.options.tolerance, e) ? (n = !0, !1) : void 0
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
    },
    ui: function(t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs
      }
    },
    _addHoverClass: function() {
      this._addClass("ui-droppable-hover")
    },
    _removeHoverClass: function() {
      this._removeClass("ui-droppable-hover")
    },
    _addActiveClass: function() {
      this._addClass("ui-droppable-active")
    },
    _removeActiveClass: function() {
      this._removeClass("ui-droppable-active")
    }
  });
  var v = t.ui.intersect = function() {
    function t(t, e, i) {
      return t >= e && e + i > t
    }
    return function(e, i, s, n) {
      if (!i.offset) return !1;
      var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        h = a + e.helperProportions.height,
        l = i.offset.left,
        c = i.offset.top,
        u = l + i.proportions().width,
        d = c + i.proportions().height;
      switch (s) {
        case "fit":
          return o >= l && u >= r && a >= c && d >= h;
        case "intersect":
          return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
        case "pointer":
          return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
        case "touch":
          return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
        default:
          return !1
      }
    }
  }();
  t.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function(e, i) {
      var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
      t: for (s = 0; o.length > s; s++)
        if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
          for (n = 0; r.length > n; n++)
            if (r[n] === o[s].element[0]) {
              o[s].proportions().height = 0;
              continue t
            } o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
            width: o[s].element[0].offsetWidth,
            height: o[s].element[0].offsetHeight
          }))
        }
    },
    drop: function(e, i) {
      var s = !1;
      return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
        this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
      }), s
    },
    dragStart: function(e, i) {
      e.element.parentsUntil("body").on("scroll.droppable", function() {
        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
      })
    },
    drag: function(e, i) {
      e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s, n, o, a = v(e, this, this.options.tolerance, i),
            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
          r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
            return t(this).droppable("instance").options.scope === n
          }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
        }
      })
    },
    dragStop: function(e, i) {
      e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
    }
  }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
    options: {
      hoverClass: !1,
      activeClass: !1
    },
    _addActiveClass: function() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
    },
    _removeActiveClass: function() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
    },
    _addHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
    },
    _removeHoverClass: function() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
    }
  }), t.ui.droppable, t.widget("ui.progressbar", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-progressbar": "ui-corner-all",
        "ui-progressbar-value": "ui-corner-left",
        "ui-progressbar-complete": "ui-corner-right"
      },
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
        role: "progressbar",
        "aria-valuemin": this.min
      }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
    },
    _destroy: function() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
    },
    value: function(t) {
      return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
    },
    _constrainedValue: function(t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
    },
    _setOptions: function(t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
    },
    _setOption: function(t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    _percentage: function() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
    },
    _refreshValue: function() {
      var e = this.options.value,
        i = this._percentage();
      this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
        "aria-valuemax": this.options.max,
        "aria-valuenow": e
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
    }
  }), t.widget("ui.selectable", t.ui.mouse, {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function() {
      var e = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
        e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
          var i = t(this),
            s = i.offset(),
            n = {
              left: s.left - e.elementPos.left,
              top: s.top - e.elementPos.top
            };
          t.data(this, "selectable-item", {
            element: this,
            $element: i,
            left: n.left,
            top: n.top,
            right: n.left + i.outerWidth(),
            bottom: n.top + i.outerHeight(),
            startselected: !1,
            selected: i.hasClass("ui-selected"),
            selecting: i.hasClass("ui-selecting"),
            unselecting: i.hasClass("ui-unselecting")
          })
        })
      }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
    },
    _destroy: function() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy()
    },
    _mouseStart: function(e) {
      var i = this,
        s = this.options;
      this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
        var s = t.data(this, "selectable-item");
        s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
          unselecting: s.element
        }))
      }), t(e.target).parents().addBack().each(function() {
        var s, n = t.data(this, "selectable-item");
        return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
          selecting: n.element
        }) : i._trigger("unselecting", e, {
          unselecting: n.element
        }), !1) : void 0
      }))
    },
    _mouseDrag: function(e) {
      if (this.dragged = !0, !this.options.disabled) {
        var i, s = this,
          n = this.options,
          o = this.opos[0],
          a = this.opos[1],
          r = e.pageX,
          h = e.pageY;
        return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
          left: o,
          top: a,
          width: r - o,
          height: h - a
        }), this.selectees.each(function() {
          var i = t.data(this, "selectable-item"),
            l = !1,
            c = {};
          i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
            selecting: i.element
          }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
            unselecting: i.element
          }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
            unselecting: i.element
          })))))
        }), !1
      }
    },
    _mouseStop: function(e) {
      var i = this;
      return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
          unselected: s.element
        })
      }), t(".ui-selecting", this.element[0]).each(function() {
        var s = t.data(this, "selectable-item");
        i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
          selected: s.element
        })
      }), this._trigger("stop", e), this.helper.remove(), !1
    }
  }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
    version: "1.12.1",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      classes: {
        "ui-selectmenu-button-open": "ui-corner-top",
        "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function() {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
    },
    _drawButton: function() {
      var e, i = this,
        s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
        click: function(t) {
          this.button.focus(), t.preventDefault()
        }
      }), this.element.hide(), this.button = t("<span>", {
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true",
        title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
        i._rendered || i._refreshMenu()
      })
    },
    _drawMenu: function() {
      var e = this;
      this.menu = t("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        classes: {
          "ui-menu": "ui-corner-bottom"
        },
        role: "listbox",
        select: function(t, i) {
          t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
        },
        focus: function(t, i) {
          var s = i.item.data("ui-selectmenu-item");
          null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
            item: s
          }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
        }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
        return !1
      }, this.menuInstance._isDivider = function() {
        return !1
      }
    },
    refresh: function() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
    },
    _refreshMenu: function() {
      var t, e = this.element.find("option");
      this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
    },
    open: function(t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
    },
    _position: function() {
      this.menuWrap.position(t.extend({
        of: this.button
      }, this.options.position))
    },
    close: function(t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
    },
    widget: function() {
      return this.button
    },
    menuWidget: function() {
      return this.menu
    },
    _renderButtonItem: function(e) {
      var i = t("<span>");
      return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
    },
    _renderMenu: function(e, i) {
      var s = this,
        n = "";
      t.each(i, function(i, o) {
        var a;
        o.optgroup !== n && (a = t("<li>", {
          text: o.optgroup
        }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
      })
    },
    _renderItemData: function(t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e)
    },
    _renderItem: function(e, i) {
      var s = t("<li>"),
        n = t("<div>", {
          title: i.element.attr("title")
        });
      return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
    },
    _setText: function(t, e) {
      e ? t.text(e) : t.html("&#160;")
    },
    _move: function(t, e) {
      var i, s, n = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
    },
    _getSelectedItem: function() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
    },
    _toggle: function(t) {
      this[this.isOpen ? "close" : "open"](t)
    },
    _setSelection: function() {
      var t;
      this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
    },
    _documentClick: {
      mousedown: function(e) {
        this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
      }
    },
    _buttonEvents: {
      mousedown: function() {
        var t;
        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
      },
      click: function(t) {
        this._setSelection(), this._toggle(t)
      },
      keydown: function(e) {
        var i = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.TAB:
          case t.ui.keyCode.ESCAPE:
            this.close(e), i = !1;
            break;
          case t.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(e);
            break;
          case t.ui.keyCode.UP:
            e.altKey ? this._toggle(e) : this._move("prev", e);
            break;
          case t.ui.keyCode.DOWN:
            e.altKey ? this._toggle(e) : this._move("next", e);
            break;
          case t.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
            break;
          case t.ui.keyCode.LEFT:
            this._move("prev", e);
            break;
          case t.ui.keyCode.RIGHT:
            this._move("next", e);
            break;
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.PAGE_UP:
            this._move("first", e);
            break;
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_DOWN:
            this._move("last", e);
            break;
          default:
            this.menu.trigger(e), i = !1
        }
        i && e.preventDefault()
      }
    },
    _selectFocusedItem: function(t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
    },
    _select: function(t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
        item: t
      }), t.index !== i && this._trigger("change", e, {
        item: t
      }), this.close(e)
    },
    _setAria: function(t) {
      var e = this.menuItems.eq(t.index).attr("id");
      this.button.attr({
        "aria-labelledby": e,
        "aria-activedescendant": e
      }), this.menu.attr("aria-activedescendant", e)
    },
    _setOption: function(t, e) {
      if ("icons" === t) {
        var i = this.button.find("span.ui-icon");
        this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
      }
      this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
    },
    _setOptionDisabled: function(t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
    },
    _appendTo: function() {
      var e = this.options.appendTo;
      return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
    },
    _toggleAttr: function() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
    },
    _resizeButton: function() {
      var t = this.options.width;
      return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
    },
    _resizeMenu: function() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
    },
    _getCreateOptions: function() {
      var t = this._super();
      return t.disabled = this.element.prop("disabled"), t
    },
    _parseOptions: function(e) {
      var i = this,
        s = [];
      e.each(function(e, n) {
        s.push(i._parseOption(t(n), e))
      }), this.items = s
    },
    _parseOption: function(t, e) {
      var i = t.parent("optgroup");
      return {
        element: t,
        index: e,
        value: t.val(),
        label: t.text(),
        optgroup: i.attr("label") || "",
        disabled: i.prop("disabled") || t.prop("disabled")
      }
    },
    _destroy: function() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
    }
  }]), t.widget("ui.slider", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
    },
    _refresh: function() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
    },
    _createHandles: function() {
      var e, i, s = this.options,
        n = this.element.find(".ui-slider-handle"),
        o = "<span tabindex='0'></span>",
        a = [];
      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
      this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
        t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
      })
    },
    _createRange: function() {
      var e = this.options;
      e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
    },
    _setupEvents: function() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
    },
    _destroy: function() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
    },
    _mouseCapture: function(e) {
      var i, s, n, o, a, r, h, l, c = this,
        u = this.options;
      return u.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: e.pageX,
        y: e.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
        var i = Math.abs(s - c.values(e));
        (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
      }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: e.pageX - h.left - o.width() / 2,
        top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
    },
    _mouseStart: function() {
      return !0
    },
    _mouseDrag: function(t) {
      var e = {
          x: t.pageX,
          y: t.pageY
        },
        i = this._normValueFromMouse(e);
      return this._slide(t, this._handleIndex, i), !1
    },
    _mouseStop: function(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
    },
    _detectOrientation: function() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
    },
    _normValueFromMouse: function(t) {
      var e, i, s, n, o;
      return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
    },
    _uiHash: function(t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
    },
    _hasMultipleValues: function() {
      return this.options.values && this.options.values.length
    },
    _start: function(t, e) {
      return this._trigger("start", t, this._uiHash(e))
    },
    _slide: function(t, e, i) {
      var s, n, o = this.value(),
        a = this.values();
      this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
    },
    _stop: function(t, e) {
      this._trigger("stop", t, this._uiHash(e))
    },
    _change: function(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
    },
    value: function(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
    },
    values: function(e, i) {
      var s, n, o;
      if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
      if (!arguments.length) return this._values();
      if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
      for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
      this._refreshValue()
    },
    _setOption: function(e, i) {
      var s, n = 0;
      switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;
        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;
        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
          this._animateOff = !1;
          break;
        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;
        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1
      }
    },
    _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    _value: function() {
      var t = this.options.value;
      return t = this._trimAlignValue(t)
    },
    _values: function(t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i
      }
      return []
    },
    _trimAlignValue: function(t) {
      if (this._valueMin() >= t) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = this.options.step > 0 ? this.options.step : 1,
        i = (t - this._valueMin()) % e,
        s = t - i;
      return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
    },
    _calculateNewMax: function() {
      var t = this.options.max,
        e = this._valueMin(),
        i = this.options.step,
        s = Math.round((t - e) / i) * i;
      t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
    },
    _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
    },
    _precisionOf: function(t) {
      var e = "" + t,
        i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1
    },
    _valueMin: function() {
      return this.options.min
    },
    _valueMax: function() {
      return this.max
    },
    _refreshRange: function(t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      })
    },
    _refreshValue: function() {
      var e, i, s, n, o, a = this.options.range,
        r = this.options,
        h = this,
        l = this._animateOff ? !1 : r.animate,
        c = {};
      this._hasMultipleValues() ? this.handles.each(function(s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), e = i
      }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, r.animate))
    },
    _handleEvents: {
      keydown: function(e) {
        var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
        switch (e.keyCode) {
          case t.ui.keyCode.HOME:
          case t.ui.keyCode.END:
          case t.ui.keyCode.PAGE_UP:
          case t.ui.keyCode.PAGE_DOWN:
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
        }
        switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
          case t.ui.keyCode.HOME:
            n = this._valueMin();
            break;
          case t.ui.keyCode.END:
            n = this._valueMax();
            break;
          case t.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + o);
            break;
          case t.ui.keyCode.DOWN:
          case t.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - o)
        }
        this._slide(e, a, n)
      },
      keyup: function(e) {
        var i = t(e.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
      }
    }
  }), t.widget("ui.sortable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function(t, e, i) {
      return t >= e && e + i > t
    },
    _isFloating: function(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    },
    _create: function() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
    },
    _setOption: function(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName()
    },
    _setHandleClassName: function() {
      var e = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
        e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
      })
    },
    _destroy: function() {
      this._mouseDestroy();
      for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
      return this
    },
    _mouseCapture: function(e, i) {
      var s = null,
        n = !1,
        o = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
        return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
      }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
        this === e.target && (n = !0)
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
    },
    _mouseStart: function(e, i, s) {
      var n, o, a = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left
        }, t.extend(this.offset, {
          click: {
            left: e.pageX - this.offset.left,
            top: e.pageY - this.offset.top
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
          prev: this.currentItem.prev()[0],
          parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
        for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
      return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
    },
    _mouseDrag: function(e) {
      var i, s, n, o, a = this.options,
        r = !1;
      for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
        if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(e, s), this._trigger("change", e, this._uiHash());
          break
        } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
    },
    _mouseStop: function(e, i) {
      if (e) {
        if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
          var s = this,
            n = this.placeholder.offset(),
            o = this.options.axis,
            a = {};
          o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
            s._clear(e)
          })
        } else this._clear(e, i);
        return !1
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp(new t.Event("mouseup", {
          target: null
        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
        for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
    },
    serialize: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
        s = [];
      return e = e || {}, t(i).each(function() {
        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
      }), !s.length && e.key && s.push(e.key + "="), s.join("&")
    },
    toArray: function(e) {
      var i = this._getItemsAsjQuery(e && e.connected),
        s = [];
      return e = e || {}, i.each(function() {
        s.push(t(e.item || this).attr(e.attribute || "id") || "")
      }), s
    },
    _intersectsWith: function(t) {
      var e = this.positionAbs.left,
        i = e + this.helperProportions.width,
        s = this.positionAbs.top,
        n = s + this.helperProportions.height,
        o = t.left,
        a = o + t.width,
        r = t.top,
        h = r + t.height,
        l = this.offset.click.top,
        c = this.offset.click.left,
        u = "x" === this.options.axis || s + l > r && h > s + l,
        d = "y" === this.options.axis || e + c > o && a > e + c,
        p = u && d;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
    },
    _intersectsWithPointer: function(t) {
      var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
        n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
        o = s && n;
      return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
    },
    _intersectsWithSides: function(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
        s = this._getDragVerticalDirection(),
        n = this._getDragHorizontalDirection();
      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
    },
    _getDragVerticalDirection: function() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== t && (t > 0 ? "down" : "up")
    },
    _getDragHorizontalDirection: function() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== t && (t > 0 ? "right" : "left")
    },
    refresh: function(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
    },
    _connectWith: function() {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
    },
    _getItemsAsjQuery: function(e) {
      function i() {
        r.push(this)
      }
      var s, n, o, a, r = [],
        h = [],
        l = this._connectWith();
      if (l && e)
        for (s = l.length - 1; s >= 0; s--)
          for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
      for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
          options: this.options,
          item: this.currentItem
        }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
      return t(r)
    },
    _removeCurrentsFromItems: function() {
      var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = t.grep(this.items, function(t) {
        for (var i = 0; e.length > i; i++)
          if (e[i] === t.item[0]) return !1;
        return !0
      })
    },
    _refreshItems: function(e) {
      this.items = [], this.containers = [this];
      var i, s, n, o, a, r, h, l, c = this.items,
        u = [
          [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
            item: this.currentItem
          }) : t(this.options.items, this.element), this]
        ],
        d = this._connectWith();
      if (d && this.ready)
        for (i = d.length - 1; i >= 0; i--)
          for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
            item: this.currentItem
          }) : t(o.options.items, o.element), o]), this.containers.push(o));
      for (i = u.length - 1; i >= 0; i--)
        for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
          item: h,
          instance: a,
          width: 0,
          height: 0,
          left: 0,
          top: 0
        })
    },
    refreshPositions: function(e) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, o;
      for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
        for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this
    },
    _createPlaceholder: function(e) {
      e = e || this;
      var i, s = e.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function() {
          var s = e.currentItem[0].nodeName.toLowerCase(),
            n = t("<" + s + ">", e.document[0]);
          return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
        },
        update: function(t, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
        }
      }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
    },
    _createTrPlaceholder: function(e, i) {
      var s = this;
      e.children().each(function() {
        t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
      })
    },
    _contactContainers: function(e) {
      var i, s, n, o, a, r, h, l, c, u, d = null,
        p = null;
      for (i = this.containers.length - 1; i >= 0; i--)
        if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
          if (this._intersectsWith(this.containers[i].containerCache)) {
            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
            d = this.containers[i], p = i
          } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      if (d)
        if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
        else {
          for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
          if (!o && !this.options.dropOnEmpty) return;
          if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
          o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
        }
    },
    _createHelper: function(e) {
      var i = this.options,
        s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
    },
    _adjustOffsetFromHelper: function(e) {
      "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
        left: +e[0],
        top: +e[1] || 0
      }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var e = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
        top: 0,
        left: 0
      }), {
        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
        var t = this.currentItem.position();
        return {
          top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var e, i, s, n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
    },
    _convertPositionTo: function(e, i) {
      i || (i = this.position);
      var s = "absolute" === e ? 1 : -1,
        n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
        o = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
      }
    },
    _generatePosition: function(e) {
      var i, s, n = this.options,
        o = e.pageX,
        a = e.pageY,
        r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
        h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      }
    },
    _rearrange: function(t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;
      this._delay(function() {
        n === this.counter && this.refreshPositions(!s)
      })
    },
    _clear: function(t, e) {
      function i(t, e, i) {
        return function(s) {
          i._trigger(t, s, e._uiHash(e))
        }
      }
      this.reverting = !1;
      var s, n = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
      } else this.currentItem.show();
      for (this.fromOutside && !e && n.push(function(t) {
          this._trigger("receive", t, this._uiHash(this.fromOutside))
        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
          this._trigger("update", t, this._uiHash())
        }), this !== this.currentContainer && (e || (n.push(function(t) {
          this._trigger("remove", t, this._uiHash())
        }), n.push(function(t) {
          return function(e) {
            t._trigger("receive", e, this._uiHash(this))
          }
        }.call(this, this.currentContainer)), n.push(function(t) {
          return function(e) {
            t._trigger("update", e, this._uiHash(this))
          }
        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (s = 0; n.length > s; s++) n[s].call(this, t);
        this._trigger("stop", t, this._uiHash())
      }
      return this.fromOutside = !1, !this.cancelHelperRemoval
    },
    _trigger: function() {
      t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
    },
    _uiHash: function(e) {
      var i = e || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || t([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: e ? e.element : null
      }
    }
  }), t.widget("ui.spinner", {
    version: "1.12.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr"
      },
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete")
        }
      })
    },
    _getCreateOptions: function() {
      var e = this._super(),
        i = this.element;
      return t.each(["min", "max", "step"], function(t, s) {
        var n = i.attr(s);
        null != n && n.length && (e[s] = n)
      }), e
    },
    _events: {
      keydown: function(t) {
        this._start(t) && this._keydown(t) && t.preventDefault()
      },
      keyup: "_stop",
      focus: function() {
        this.previous = this.element.val()
      },
      blur: function(t) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
      },
      mousewheel: function(t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
            this.spinning && this._stop(t)
          }, 100), t.preventDefault()
        }
      },
      "mousedown .ui-spinner-button": function(e) {
        function i() {
          var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
          e || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
            this.previous = s
          }))
        }
        var s;
        s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
          delete this.cancelBlur, i.call(this)
        }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function(e) {
        return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
    },
    _draw: function() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
        classes: {
          "ui-button": ""
        }
      }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1
      }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
    },
    _keydown: function(e) {
      var i = this.options,
        s = t.ui.keyCode;
      switch (e.keyCode) {
        case s.UP:
          return this._repeat(null, 1, e), !0;
        case s.DOWN:
          return this._repeat(null, -1, e), !0;
        case s.PAGE_UP:
          return this._repeat(null, i.page, e), !0;
        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, e), !0
      }
      return !1
    },
    _start: function(t) {
      return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
    },
    _repeat: function(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
        this._repeat(40, e, i)
      }, t), this._spin(e * this.options.step, i)
    },
    _spin: function(t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
        value: i
      }) === !1 || (this._value(i), this.counter++)
    },
    _increment: function(e) {
      var i = this.options.incremental;
      return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
    },
    _precision: function() {
      var t = this._precisionOf(this.options.step);
      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
    },
    _precisionOf: function(t) {
      var e = "" + t,
        i = e.indexOf(".");
      return -1 === i ? 0 : e.length - i - 1
    },
    _adjustValue: function(t) {
      var e, i, s = this.options;
      return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
    },
    _stop: function(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
    },
    _setOption: function(t, e) {
      var i, s, n;
      return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
    },
    _setOptionDisabled: function(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
    },
    _setOptions: r(function(t) {
      this._super(t)
    }),
    _parse: function(t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
    },
    _format: function(t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
    },
    _refresh: function() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      })
    },
    isValid: function() {
      var t = this.value();
      return null === t ? !1 : t === this._adjustValue(t)
    },
    _value: function(t, e) {
      var i;
      "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
    },
    _destroy: function() {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
    },
    stepUp: r(function(t) {
      this._stepUp(t)
    }),
    _stepUp: function(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop())
    },
    stepDown: r(function(t) {
      this._stepDown(t)
    }),
    _stepDown: function(t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
    },
    pageUp: r(function(t) {
      this._stepUp((t || 1) * this.options.page)
    }),
    pageDown: r(function(t) {
      this._stepDown((t || 1) * this.options.page)
    }),
    value: function(t) {
      return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val())
    },
    widget: function() {
      return this.uiSpinner
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
    _enhance: function() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
    },
    _uiSpinnerHtml: function() {
      return "<span>"
    },
    _buttonHtml: function() {
      return "<a></a><a></a>"
    }
  }), t.ui.spinner, t.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function() {
      var t = /#.*$/;
      return function(e) {
        var i, s;
        i = e.href.replace(t, ""), s = location.href.replace(t, "");
        try {
          i = decodeURIComponent(i)
        } catch (n) {}
        try {
          s = decodeURIComponent(s)
        } catch (n) {}
        return e.hash.length > 1 && i === s
      }
    }(),
    _create: function() {
      var e = this,
        i = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
        return e.tabs.index(t)
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
    },
    _initialActive: function() {
      var e = this.options.active,
        i = this.options.collapsible,
        s = location.hash.substring(1);
      return null === e && (s && this.tabs.each(function(i, n) {
        return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
      }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
    },
    _getCreateEventData: function() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : t()
      }
    },
    _tabKeydown: function(e) {
      var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
        s = this.tabs.index(i),
        n = !0;
      if (!this._handlePageNav(e)) {
        switch (e.keyCode) {
          case t.ui.keyCode.RIGHT:
          case t.ui.keyCode.DOWN:
            s++;
            break;
          case t.ui.keyCode.UP:
          case t.ui.keyCode.LEFT:
            n = !1, s--;
            break;
          case t.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;
          case t.ui.keyCode.HOME:
            s = 0;
            break;
          case t.ui.keyCode.SPACE:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
          case t.ui.keyCode.ENTER:
            return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
          default:
            return
        }
        e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
          this.option("active", s)
        }, this.delay))
      }
    },
    _panelKeydown: function(e) {
      this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
    },
    _handlePageNav: function(e) {
      return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
    },
    _findNextTab: function(e, i) {
      function s() {
        return e > n && (e = 0), 0 > e && (e = n), e
      }
      for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
      return e
    },
    _focusNextTab: function(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
    },
    _setOption: function(t, e) {
      return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
    },
    _sanitizeSelector: function(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
    },
    refresh: function() {
      var e = this.options,
        i = this.tablist.children(":has(a[href])");
      e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
        return i.index(t)
      }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
    },
    _refresh: function() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0)
    },
    _processTabs: function() {
      var e = this,
        i = this.tabs,
        s = this.anchors,
        n = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
        t(this).is(".ui-state-disabled") && e.preventDefault()
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
        t(this).closest("li").is(".ui-state-disabled") && this.blur()
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
        return t("a", this)[0]
      }).attr({
        role: "presentation",
        tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
        var n, o, a, r = t(s).uniqueId().attr("id"),
          h = t(s).closest("li"),
          l = h.attr("aria-controls");
        e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
          "aria-controls": a,
          "aria-labelledby": r
        }), o.attr("aria-labelledby", r)
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
    },
    _getList: function() {
      return this.tablist || this.element.find("ol, ul").eq(0)
    },
    _createPanel: function(e) {
      return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
    },
    _setOptionDisabled: function(e) {
      var i, s, n;
      for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
      this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
    },
    _setupEvents: function(e) {
      var i = {};
      e && t.each(e.split(" "), function(t, e) {
        i[e] = "_eventHandler"
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function(t) {
          t.preventDefault()
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs)
    },
    _setupHeightStyle: function(e) {
      var i, s = this.element.parent();
      "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
        var e = t(this),
          s = e.css("position");
        "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
      }), this.element.children().not(this.panels).each(function() {
        i -= t(this).outerHeight(!0)
      }), this.panels.each(function() {
        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
        i = Math.max(i, t(this).height("").height())
      }).height(i))
    },
    _eventHandler: function(e) {
      var i = this.options,
        s = this.active,
        n = t(e.currentTarget),
        o = n.closest("li"),
        a = o[0] === s[0],
        r = a && i.collapsible,
        h = r ? t() : this._getPanelForTab(o),
        l = s.length ? this._getPanelForTab(s) : t(),
        c = {
          oldTab: s,
          oldPanel: l,
          newTab: r ? t() : o,
          newPanel: h
        };
      e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
    },
    _toggle: function(e, i) {
      function s() {
        o.running = !1, o._trigger("activate", e, i)
      }

      function n() {
        o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
      }
      var o = this,
        a = i.newPanel,
        r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
        o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
      }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
        return 0 === t(this).attr("tabIndex")
      }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      })
    },
    _activate: function(e) {
      var i, s = this._findActive(e);
      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: t.noop
      }))
    },
    _findActive: function(e) {
      return e === !1 ? t() : this.tabs.eq(e)
    },
    _getIndex: function(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
    },
    _destroy: function() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
        t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
      }), this.tabs.each(function() {
        var e = t(this),
          i = e.data("ui-tabs-aria-controls");
        i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
    },
    enable: function(e) {
      var i = this.options.disabled;
      i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
        return t !== e ? t : null
      }) : t.map(this.tabs, function(t, i) {
        return i !== e ? i : null
      })), this._setOptionDisabled(i))
    },
    disable: function(e) {
      var i = this.options.disabled;
      if (i !== !0) {
        if (void 0 === e) i = !0;
        else {
          if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
          i = t.isArray(i) ? t.merge([e], i).sort() : [e]
        }
        this._setOptionDisabled(i)
      }
    },
    load: function(e, i) {
      e = this._getIndex(e);
      var s = this,
        n = this.tabs.eq(e),
        o = n.find(".ui-tabs-anchor"),
        a = this._getPanelForTab(n),
        r = {
          tab: n,
          panel: a
        },
        h = function(t, e) {
          "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
        };
      this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
        setTimeout(function() {
          a.html(t), s._trigger("load", i, r), h(n, e)
        }, 1)
      }).fail(function(t, e) {
        setTimeout(function() {
          h(t, e)
        }, 1)
      })))
    },
    _ajaxSettings: function(e, i, s) {
      var n = this;
      return {
        url: e.attr("href").replace(/#.*$/, ""),
        beforeSend: function(e, o) {
          return n._trigger("beforeLoad", i, t.extend({
            jqXHR: e,
            ajaxSettings: o
          }, s))
        }
      }
    },
    _getPanelForTab: function(e) {
      var i = t(e).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i))
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
    _processTabs: function() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
    }
  }), t.ui.tabs, t.widget("ui.tooltip", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-tooltip": "ui-corner-all ui-widget-shadow"
      },
      content: function() {
        var e = t(this).attr("title") || "";
        return t("<a>").text(e).html()
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      track: !1,
      close: null,
      open: null
    },
    _addDescribedBy: function(e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    },
    _removeDescribedBy: function(e) {
      var i = e.data("ui-tooltip-id"),
        s = (e.attr("aria-describedby") || "").split(/\s+/),
        n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    },
    _create: function() {
      this._on({
        mouseover: "open",
        focusin: "open"
      }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
        role: "log",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
    },
    _setOption: function(e, i) {
      var s = this;
      this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
        s._updateContent(e.element)
      })
    },
    _setOptionDisabled: function(t) {
      this[t ? "_disable" : "_enable"]()
    },
    _disable: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event("blur");
        n.target = n.currentTarget = s.element[0], e.close(n, !0)
      }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
        var e = t(this);
        return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
      }))
    },
    _enable: function() {
      this.disabledTitles.each(function() {
        var e = t(this);
        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
      }), this.disabledTitles = t([])
    },
    open: function(e) {
      var i = this,
        s = t(e ? e.target : this.element).closest(this.options.items);
      s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
        var e, s = t(this);
        s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr("title")
        }, s.attr("title", ""))
      }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
    },
    _updateContent: function(t, e) {
      var i, s = this.options.content,
        n = this,
        o = e ? e.type : null;
      return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
        n._delay(function() {
          t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
        })
      }), i && this._open(e, t, i), void 0)
    },
    _open: function(e, i, s) {
      function n(t) {
        l.of = t, a.is(":hidden") || a.position(l)
      }
      var o, a, r, h, l = t.extend({}, this.options.position);
      if (s) {
        if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
          mousemove: n
        }), n(e)) : a.position(t.extend({
          of: i
        }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
          a.is(":visible") && (n(l.of), clearInterval(r))
        }, t.fx.interval)), this._trigger("open", e, {
          tooltip: a
        })
      }
    },
    _registerCloseHandlers: function(e, i) {
      var s = {
        keyup: function(e) {
          if (e.keyCode === t.ui.keyCode.ESCAPE) {
            var s = t.Event(e);
            s.currentTarget = i[0], this.close(s, !0)
          }
        }
      };
      i[0] !== this.element[0] && (s.remove = function() {
        this._removeTooltip(this._find(i).tooltip)
      }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
    },
    close: function(e) {
      var i, s = this,
        n = t(e ? e.currentTarget : this.element),
        o = this._find(n);
      return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
        s._removeTooltip(t(this))
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
        t(i.element).attr("title", i.title), delete s.parents[e]
      }), o.closing = !0, this._trigger("close", e, {
        tooltip: i
      }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
    },
    _tooltip: function(e) {
      var i = t("<div>").attr("role", "tooltip"),
        s = t("<div>").appendTo(i),
        n = i.uniqueId().attr("id");
      return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
        element: e,
        tooltip: i
      }
    },
    _find: function(t) {
      var e = t.data("ui-tooltip-id");
      return e ? this.tooltips[e] : null
    },
    _removeTooltip: function(t) {
      t.remove(), delete this.tooltips[t.attr("id")]
    },
    _appendTo: function(t) {
      var e = t.closest(".ui-front, dialog");
      return e.length || (e = this.document[0].body), e
    },
    _destroy: function() {
      var e = this;
      t.each(this.tooltips, function(i, s) {
        var n = t.Event("blur"),
          o = s.element;
        n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
      }), this.liveRegion.remove()
    }
  }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
    options: {
      tooltipClass: null
    },
    _tooltip: function() {
      var t = this._superApply(arguments);
      return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
    }
  }), t.ui.tooltip
});


/**
 * jQuery Validation Plugin 1.11.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

! function(l) {
  l.extend(l.fn, {
    validate: function(t) {
      if (this.length) {
        var i = l.data(this[0], "validator");
        return i ? i : (this.attr("novalidate", "novalidate"), i = new l.validator(t, this[0]), l.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
          i.settings.submitHandler && (i.submitButton = t.target), l(t.target).hasClass("cancel") && (i.cancelSubmit = !0)
        }), this.submit(function(e) {
          function t() {
            var t;
            return !i.settings.submitHandler || (i.submitButton && (t = l("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && t.remove(), !1)
          }
          return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, t()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : t() : (i.focusInvalid(), !1)
        })), i)
      }
      t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
    },
    valid: function() {
      if (l(this[0]).is("form")) return this.validate().form();
      var t = !0,
        e = l(this[0].form).validate();
      return this.each(function() {
        t &= e.element(this)
      }), t
    },
    removeAttrs: function(t) {
      var i = {},
        s = this;
      return l.each(t.split(/\s/), function(t, e) {
        i[e] = s.attr(e), s.removeAttr(e)
      }), i
    },
    rules: function(t, e) {
      var i = this[0];
      if (t) {
        var s = l.data(i.form, "validator").settings,
          n = s.rules,
          r = l.validator.staticRules(i);
        switch (t) {
          case "add":
            l.extend(r, l.validator.normalizeRule(e)), n[i.name] = r, e.messages && (s.messages[i.name] = l.extend(s.messages[i.name], e.messages));
            break;
          case "remove":
            if (!e) return delete n[i.name], r;
            var a = {};
            return l.each(e.split(/\s/), function(t, e) {
              a[e] = r[e], delete r[e]
            }), a
        }
      }
      var u, o = l.validator.normalizeRules(l.extend({}, l.validator.classRules(i), l.validator.attributeRules(i), l.validator.dataRules(i), l.validator.staticRules(i)), i);
      return o.required && (u = o.required, delete o.required, o = l.extend({
        required: u
      }, o)), o
    }
  }), l.extend(l.expr[":"], {
    blank: function(t) {
      return !l.trim("" + t.value)
    },
    filled: function(t) {
      return !!l.trim("" + t.value)
    },
    unchecked: function(t) {
      return !t.checked
    }
  }), l.validator = function(t, e) {
    this.settings = l.extend(!0, {}, l.validator.defaults, t), this.currentForm = e, this.init()
  }, l.validator.format = function(i, t) {
    return 1 === arguments.length ? function() {
      var t = l.makeArray(arguments);
      return t.unshift(i), l.validator.format.apply(this, t)
    } : (2 < arguments.length && t.constructor !== Array && (t = l.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), l.each(t, function(t, e) {
      i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
        return e
      })
    }), i)
  }, l.extend(l.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: !0,
      errorContainer: l([]),
      errorLabelContainer: l([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function(t, e) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
      },
      onfocusout: function(t, e) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
      },
      onkeyup: function(t, e) {
        9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
      },
      onclick: function(t, e) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
      },
      highlight: function(t, e, i) {
        "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : l(t).addClass(e).removeClass(i)
      },
      unhighlight: function(t, e, i) {
        "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : l(t).removeClass(e).addClass(i)
      }
    },
    setDefaults: function(t) {
      l.extend(l.validator.defaults, t)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: l.validator.format("Please enter no more than {0} characters."),
      minlength: l.validator.format("Please enter at least {0} characters."),
      rangelength: l.validator.format("Please enter a value between {0} and {1} characters long."),
      range: l.validator.format("Please enter a value between {0} and {1}."),
      max: l.validator.format("Please enter a value less than or equal to {0}."),
      min: l.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function() {
        this.labelContainer = l(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || l(this.currentForm), this.containers = l(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var s = this.groups = {};
        l.each(this.settings.groups, function(i, t) {
          "string" == typeof t && (t = t.split(/\s/)), l.each(t, function(t, e) {
            s[e] = i
          })
        });
        var i = this.settings.rules;

        function t(t) {
          var e = l.data(this[0].form, "validator"),
            i = "on" + t.type.replace(/^validate/, "");
          e.settings[i] && e.settings[i].call(e, this[0], t)
        }
        l.each(i, function(t, e) {
          i[t] = l.validator.normalizeRule(e)
        }), l(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && l(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
      },
      form: function() {
        return this.checkForm(), l.extend(this.submitted, this.errorMap), this.invalid = l.extend({}, this.errorMap), this.valid() || l(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      },
      checkForm: function() {
        this.prepareForm();
        for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
        return this.valid()
      },
      element: function(t) {
        t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = l(t);
        var e = !1 !== this.check(t);
        return e ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
      },
      showErrors: function(e) {
        if (e) {
          for (var t in l.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
            message: e[t],
            element: this.findByName(t)[0]
          });
          this.successList = l.grep(this.successList, function(t) {
            return !(t.name in e)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      },
      resetForm: function() {
        l.fn.resetForm && l(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
      },
      numberOfInvalids: function() {
        return this.objectLength(this.invalid)
      },
      objectLength: function(t) {
        var e = 0;
        for (var i in t) e++;
        return e
      },
      hideErrors: function() {
        this.addWrapper(this.toHide).hide()
      },
      valid: function() {
        return 0 === this.size()
      },
      size: function() {
        return this.errorList.length
      },
      focusInvalid: function() {
        if (this.settings.focusInvalid) try {
          l(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (t) {}
      },
      findLastActive: function() {
        var e = this.lastActive;
        return e && 1 === l.grep(this.errorList, function(t) {
          return t.element.name === e.name
        }).length && e
      },
      elements: function() {
        var t = this,
          e = {};
        return l(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
          return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(l(this).rules())) && (e[this.name] = !0)
        })
      },
      clean: function(t) {
        return l(t)[0]
      },
      errors: function() {
        var t = this.settings.errorClass.replace(" ", ".");
        return l(this.settings.errorElement + "." + t, this.errorContext)
      },
      reset: function() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = l([]), this.toHide = l([]), this.currentElements = l([])
      },
      prepareForm: function() {
        this.reset(), this.toHide = this.errors().add(this.containers)
      },
      prepareElement: function(t) {
        this.reset(), this.toHide = this.errorsFor(t)
      },
      elementValue: function(t) {
        var e = l(t).attr("type"),
          i = l(t).val();
        return "radio" === e || "checkbox" === e ? l("input[name='" + l(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
      },
      check: function(e) {
        e = this.validationTargetFor(this.clean(e));
        var t, i = l(e).rules(),
          s = !1,
          n = this.elementValue(e);
        for (var r in i) {
          var a = {
            method: r,
            parameters: i[r]
          };
          try {
            if ("dependency-mismatch" === (t = l.validator.methods[r].call(this, n, e, a.parameters))) {
              s = !0;
              continue
            }
            if (s = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
            if (!t) return this.formatAndAdd(e, a), !1
          } catch (t) {
            throw this.settings.debug && window.console && console.log("Exception occured when checking element " + e.id + ", check the '" + a.method + "' method.", t), t
          }
        }
        if (!s) return this.objectLength(i) && this.successList.push(e), !0
      },
      customDataMessage: function(t, e) {
        return l(t).data("msg-" + e.toLowerCase()) || t.attributes && l(t).attr("data-msg-" + e.toLowerCase())
      },
      customMessage: function(t, e) {
        var i = this.settings.messages[t];
        return i && (i.constructor === String ? i : i[e])
      },
      findDefined: function() {
        for (var t = 0; t < arguments.length; t++)
          if (void 0 !== arguments[t]) return arguments[t]
      },
      defaultMessage: function(t, e) {
        return this.findDefined(this.customMessage(t.name, e), this.customDataMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, l.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
      },
      formatAndAdd: function(t, e) {
        var i = this.defaultMessage(t, e.method),
          s = /\$?\{(\d+)\}/g;
        "function" == typeof i ? i = i.call(this, e.parameters, t) : s.test(i) && (i = l.validator.format(i.replace(s, "{$1}"), e.parameters)), this.errorList.push({
          message: i,
          element: t
        }), this.errorMap[t.name] = i, this.submitted[t.name] = i
      },
      addWrapper: function(t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
      },
      defaultShowErrors: function() {
        for (var t, e = 0; this.errorList[e]; e++) {
          var i = this.errorList[e];
          this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
        }
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
          for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
        if (this.settings.unhighlight)
          for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      },
      validElements: function() {
        return this.currentElements.not(this.invalidElements())
      },
      invalidElements: function() {
        return l(this.errorList).map(function() {
          return this.element
        })
      },
      showLabel: function(t, e) {
        var i = this.errorsFor(t);
        i.length ? (i.removeClass(this.settings.validClass).addClass(this.settings.errorClass), i.html(e)) : (i = l("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = i.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(i).length || (this.settings.errorPlacement ? this.settings.errorPlacement(i, l(t)) : i.insertAfter(t))), !e && this.settings.success && (i.text(""), "string" == typeof this.settings.success ? i.addClass(this.settings.success) : this.settings.success(i, t)), this.toShow = this.toShow.add(i)
      },
      errorsFor: function(t) {
        var e = this.idOrName(t);
        return this.errors().filter(function() {
          return l(this).attr("for") === e
        })
      },
      idOrName: function(t) {
        return this.groups[t.name] || !this.checkable(t) && t.id || t.name
      },
      validationTargetFor: function(t) {
        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
      },
      checkable: function(t) {
        return /radio|checkbox/i.test(t.type)
      },
      findByName: function(t) {
        return l(this.currentForm).find("[name='" + t + "']")
      },
      getLength: function(t, e) {
        switch (e.nodeName.toLowerCase()) {
          case "select":
            return l("option:selected", e).length;
          case "input":
            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
        }
        return t.length
      },
      depend: function(t, e) {
        return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
      },
      dependTypes: {
        boolean: function(t, e) {
          return t
        },
        string: function(t, e) {
          return !!l(t, e.form).length
        },
        function: function(t, e) {
          return t(e)
        }
      },
      optional: function(t) {
        var e = this.elementValue(t);
        return !l.validator.methods.required.call(this, e, t) && "dependency-mismatch"
      },
      startRequest: function(t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
      },
      stopRequest: function(t, e) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (l(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (l(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      },
      previousValue: function(t) {
        return l.data(t, "previousValue") || l.data(t, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(t, "remote")
        })
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function(t, e) {
      t.constructor === String ? this.classRuleSettings[t] = e : l.extend(this.classRuleSettings, t)
    },
    classRules: function(t) {
      var e = {},
        i = l(t).attr("class");
      return i && l.each(i.split(" "), function() {
        this in l.validator.classRuleSettings && l.extend(e, l.validator.classRuleSettings[this])
      }), e
    },
    attributeRules: function(t) {
      var e = {},
        i = l(t);
      for (var s in l.validator.methods) {
        var n = "required" === s ? ("" === (n = i.get(0).getAttribute(s)) && (n = !0), !!n) : i.attr(s);
        n ? e[s] = n : i[0].getAttribute("type") === s && (e[s] = !0)
      }
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function(t) {
      var e, i, s = {},
        n = l(t);
      for (e in l.validator.methods) void 0 !== (i = n.data("rule-" + e.toLowerCase())) && (s[e] = i);
      return s
    },
    staticRules: function(t) {
      var e = {},
        i = l.data(t.form, "validator");
      return i.settings.rules && (e = l.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
    },
    normalizeRules: function(s, n) {
      return l.each(s, function(t, e) {
        if (!1 !== e) {
          if (e.param || e.depends) {
            var i = !0;
            switch (typeof e.depends) {
              case "string":
                i = !!l(e.depends, n.form).length;
                break;
              case "function":
                i = e.depends.call(n, n)
            }
            i ? s[t] = void 0 === e.param || e.param : delete s[t]
          }
        } else delete s[t]
      }), l.each(s, function(t, e) {
        s[t] = l.isFunction(e) ? e(n) : e
      }), l.each(["minlength", "maxlength"], function() {
        s[this] && (s[this] = Number(s[this]))
      }), l.each(["rangelength"], function() {
        var t;
        s[this] && (l.isArray(s[this]) ? s[this] = [Number(s[this][0]), Number(s[this][1])] : "string" == typeof s[this] && (t = s[this].split(/[\s,]+/), s[this] = [Number(t[0]), Number(t[1])]))
      }), l.validator.autoCreateRanges && (s.min && s.max && (s.range = [s.min, s.max], delete s.min, delete s.max), s.minlength && s.maxlength && (s.rangelength = [s.minlength, s.maxlength], delete s.minlength, delete s.maxlength)), s
    },
    normalizeRule: function(t) {
      var e;
      return "string" == typeof t && (e = {}, l.each(t.split(/\s/), function() {
        e[this] = !0
      }), t = e), t
    },
    addMethod: function(t, e, i) {
      l.validator.methods[t] = e, l.validator.messages[t] = void 0 !== i ? i : l.validator.messages[t], e.length < 3 && l.validator.addClassRules(t, l.validator.normalizeRule(t))
    },
    methods: {
      required: function(t, e, i) {
        if (!this.depend(i, e)) return "dependency-mismatch";
        if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < l.trim(t).length;
        var s = l(e).val();
        return s && 0 < s.length
      },
      remote: function(r, a, t) {
        if (this.optional(a)) return "dependency-mismatch";
        var u = this.previousValue(a);
        if (this.settings.messages[a.name] || (this.settings.messages[a.name] = {}), u.originalMessage = this.settings.messages[a.name].remote, this.settings.messages[a.name].remote = u.message, t = "string" == typeof t ? {
            url: t
          } : t, u.old === r) return u.valid;
        u.old = r;
        var o = this;
        this.startRequest(a);
        var e = {};
        return e[a.name] = r, l.ajax(l.extend(!0, {
          url: t,
          mode: "abort",
          port: "validate" + a.name,
          dataType: "json",
          data: e,
          success: function(t) {
            o.settings.messages[a.name].remote = u.originalMessage;
            var e, i, s, n = !0 === t || "true" === t;
            n ? (e = o.formSubmitted, o.prepareElement(a), o.formSubmitted = e, o.successList.push(a), delete o.invalid[a.name], o.showErrors()) : (i = {}, s = t || o.defaultMessage(a, "remote"), i[a.name] = u.message = l.isFunction(s) ? s(r) : s, o.invalid[a.name] = !0, o.showErrors(i)), u.valid = n, o.stopRequest(a, n)
          }
        }, t)), "pending"
      },
      minlength: function(t, e, i) {
        var s = l.isArray(t) ? t.length : this.getLength(l.trim(t), e);
        return this.optional(e) || i <= s
      },
      maxlength: function(t, e, i) {
        var s = l.isArray(t) ? t.length : this.getLength(l.trim(t), e);
        return this.optional(e) || s <= i
      },
      rangelength: function(t, e, i) {
        var s = l.isArray(t) ? t.length : this.getLength(l.trim(t), e);
        return this.optional(e) || s >= i[0] && s <= i[1]
      },
      min: function(t, e, i) {
        return this.optional(e) || i <= t
      },
      max: function(t, e, i) {
        return this.optional(e) || t <= i
      },
      range: function(t, e, i) {
        return this.optional(e) || t >= i[0] && t <= i[1]
      },
      email: function(t, e) {
        return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
      },
      url: function(t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
      },
      date: function(t, e) {
        return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
      },
      dateISO: function(t, e) {
        return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
      },
      number: function(t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
      },
      digits: function(t, e) {
        return this.optional(e) || /^\d+$/.test(t)
      },
      creditcard: function(t, e) {
        if (this.optional(e)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(t)) return !1;
        for (var i = 0, s = 0, n = !1, r = (t = t.replace(/\D/g, "")).length - 1; 0 <= r; r--) {
          var a = t.charAt(r),
            s = parseInt(a, 10);
          n && 9 < (s *= 2) && (s -= 9), i += s, n = !n
        }
        return i % 10 == 0
      },
      equalTo: function(t, e, i) {
        var s = l(i);
        return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
          l(e).valid()
        }), t === s.val()
      }
    }
  }), l.format = l.validator.format
}(jQuery),
function(s) {
  var n, r = {};
  s.ajaxPrefilter ? s.ajaxPrefilter(function(t, e, i) {
    var s = t.port;
    "abort" === t.mode && (r[s] && r[s].abort(), r[s] = i)
  }) : (n = s.ajax, s.ajax = function(t) {
    var e = ("mode" in t ? t : s.ajaxSettings).mode,
      i = ("port" in t ? t : s.ajaxSettings).port;
    return "abort" === e ? (r[i] && r[i].abort(), r[i] = n.apply(this, arguments)) : n.apply(this, arguments)
  })
}(jQuery),
function(n) {
  n.extend(n.fn, {
    validateDelegate: function(i, t, s) {
      return this.bind(t, function(t) {
        var e = n(t.target);
        if (e.is(i)) return s.apply(e, arguments)
      })
    }
  })
}(jQuery);