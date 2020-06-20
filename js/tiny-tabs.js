(function () {
  var a = function (a, b) {
    function c() {
      (i = document.createElement("nav")),
        i.classList.add(h.tabsClass),
        a.classList.add("tinytabs"),
        a.prepend(i);
      var b = a.querySelectorAll(" ." + h.sectionClass);
      Array.from(b).map((b) => {
        var c = b.getAttribute("id"),
          e = b.querySelector("." + h.titleClass);
        if (!c) return !0;
        (j[c] = b), h.hideTitle ? d(e) : null;
        var g = document.createElement("span");
        g.classList.add("close"),
          g.setAttribute("data-id", "close-" + c),
          (g.innerHTML = "\xD7");
        var k = document.createElement("a");
        k.classList.add(h.tabClass, "tab-" + c),
          k.setAttribute("href", "#tab-" + c),
          k.setAttribute("data-id", c),
          (k.innerHTML = e.innerHTML),
          h.closable && k.appendChild(g),
          (g.onclick = function (a) {
            var b = this.getAttribute("data-id").split("-")[1],
              d = document.querySelector(".tab-" + b),
              e = d.nextElementSibling,
              g = d.previousElementSibling,
              i = document.querySelector("#" + b);
            return (
              d.parentNode.removeChild(d),
              i.parentNode.removeChild(i),
              h.onClose && h.onClose(c),
              e
                ? f(e.getAttribute("data-id"))
                : g && f(g.getAttribute("data-id")),
              a.stopPropagation(),
              !1
            );
          }),
          (k.onclick = function () {
            return f(this.getAttribute("data-id")), h.anchor;
          }),
          i.appendChild(k);
      });
      var c = document.location.hash.replace("#tab-", "");
      if (h.anchor && c) f(c);
      else
        for (var e in j) {
          f(e);
          break;
        }
    }
    function d(a) {
      a.style.display = "none";
    }
    function e(a) {
      a.style.display = "block";
    }
    function f(a) {
      if (j[a]) j[a];
      else return !1;
      g();
      var b = i.querySelector(".tab-" + a);
      return (
        b && b.classList.add(h.selClass),
        h.onBefore && h.onBefore(a, b),
        e(j[a]),
        h.onAfter && h.onAfter(a, b),
        h.anchor && (document.location.href = "#tab-" + a),
        !0
      );
    }
    function g() {
      Array.from(i.querySelectorAll("." + h.tabClass)).map((a) =>
        a.classList.remove(h.selClass)
      ),
        Object.values(j).map((a) => d(a));
    }
    var h = {
        anchor: !0,
        hideTitle: !0,
        sectionClass: "section",
        tabsClass: "tabs",
        tabClass: "tab",
        titleClass: "title",
        selClass: "sel",
      },
      i = [],
      j = {};
    return (h = Object.assign(h, b)), c(), this;
  };
  "function" == typeof define && define.amd
    ? define(a)
    : "undefined" == typeof module
    ? (window.tinytabs = a)
    : (module.exports = a);
})();
